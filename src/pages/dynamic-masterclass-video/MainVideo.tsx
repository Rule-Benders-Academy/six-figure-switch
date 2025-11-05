/* eslint-disable */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { fbTrackCustom } from "@/lib/fb";

declare global {
  interface Window {
    Vimeo?: any;
  }
}

type Props = {
  formVisible: boolean;
  onFirstPlay?: () => void;
  onUnlock?: () => void;
};

const UNLOCK_SECONDS = 360; // 6:00
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwRbk52F9x4dKmY3LYwwaD0IbL0nZfkKYmuHc_PX0hn5QO3z0XwhgZMCIqiYBWRma30Yg/exec";

const SAVE_INTERVAL = 5; // seconds

const getCopyMeta = () => {
  if (typeof window === "undefined")
    return { copyIndex: "unknown", copyTitle: "unknown" };
  const copyIndex =
    sessionStorage.getItem("copyIndex") ??
    localStorage.getItem("copyIndexPersistent") ??
    "unknown";
  const copyTitle =
    sessionStorage.getItem("copyTitle") ??
    localStorage.getItem("copyTitlePersistent") ??
    "unknown";
  return { copyIndex, copyTitle };
};

const keyForProgress = () => {
  const { copyIndex, copyTitle } = getCopyMeta();
  const slug = String(copyTitle)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `mc_video_progress_${copyIndex}_${slug || "no-title"}`;
};

type ProgressPayload = {
  seconds: number;
  title: string;
  copyIndex: string | number;
  updatedAt: number; // epoch ms
};

const MainVideo: React.FC<Props> = ({ formVisible, onFirstPlay, onUnlock }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const onFirstPlayRef = useRef<typeof onFirstPlay>();
  const unlockedRef = useRef(false);

  const [sdkReady, setSdkReady] = useState(false);
  const [ready, setReady] = useState(false);

  const lastSavedRef = useRef(0);
  const firstPlayFiredRef = useRef(false);

  useEffect(() => {
    onFirstPlayRef.current = onFirstPlay;
  }, [onFirstPlay]);

  // Load Vimeo SDK
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Vimeo?.Player) {
      setSdkReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => {
      if (window.Vimeo?.Player) setSdkReady(true);
    };
    document.head.appendChild(script);
  }, []);

  // Initialize Vimeo player (no autoplay)
  useEffect(() => {
    if (!sdkReady || !iframeRef.current || playerRef.current) return;
    const Player = window.Vimeo?.Player;
    if (!Player) return;

    let disposed = false;
    const p = new Player(iframeRef.current);
    playerRef.current = p;

    const saveProgress = async (sec: number) => {
      try {
        const { copyIndex, copyTitle } = getCopyMeta();
        const payload: ProgressPayload = {
          seconds: Math.floor(sec),
          title: copyTitle,
          copyIndex,
          updatedAt: Date.now(),
        };
        localStorage.setItem(keyForProgress(), JSON.stringify(payload));
      } catch {}
    };

    const loadProgressSeconds = (): number => {
      try {
        const raw = localStorage.getItem(keyForProgress());
        if (!raw) return 0;
        if (/^\d+(\.\d+)?$/.test(raw)) return parseFloat(raw); // backward compat
        const obj = JSON.parse(raw) as ProgressPayload;
        if (obj && typeof obj.seconds === "number") return obj.seconds;
      } catch {}
      return 0;
    };

    const onTimeUpdate = (data: { seconds: number }) => {
      const sec = data?.seconds || 0;

      // Unlock logic
      if (sec >= UNLOCK_SECONDS && !unlockedRef.current) {
        unlockedRef.current = true;
        onUnlock?.();
        fbTrackCustom("MC_UnlockAt12min"); // keeping event name as-is

        const { copyIndex, copyTitle } = getCopyMeta();
        fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "unlock_at_12min",
            timestamp: new Date().toISOString(),
            copyIndex,
            title: copyTitle,
          }),
        });
      }

      // Throttled progress save
      if (sec - lastSavedRef.current >= SAVE_INTERVAL) {
        lastSavedRef.current = sec;
        saveProgress(sec);
      }
    };

    (async () => {
      try {
        await p.ready();
        if (disposed) return;
        setReady(true);

        // Restore progress without starting playback
        try {
          const saved = loadProgressSeconds();
          if (saved > 0) {
            const duration = await p.getDuration().catch(() => 0);
            const clamped = Math.max(
              0,
              Math.min(saved, Math.max(0, duration - 2))
            );
            if (clamped > 0) await p.setCurrentTime(clamped).catch(() => {});
            if (clamped >= UNLOCK_SECONDS && !unlockedRef.current) {
              unlockedRef.current = true;
              onUnlock?.();
            }
          }
        } catch {}

        // Events
        p.on("play", async () => {
          if (!firstPlayFiredRef.current) {
            firstPlayFiredRef.current = true;
            onFirstPlayRef.current?.();
            fbTrackCustom("MC_WatchStart");

            const { copyIndex, copyTitle } = getCopyMeta();
            fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                event: "watch_start",
                timestamp: new Date().toISOString(),
                copyIndex,
                title: copyTitle,
              }),
            });
          }
        });

        p.on("pause", async () => {
          try {
            const sec = await p.getCurrentTime();
            await saveProgress(sec);
          } catch {}
        });

        p.on("seeked", async (sec: number) => {
          await saveProgress(
            typeof sec === "number" ? sec : await p.getCurrentTime()
          );
        });

        p.on("ended", async () => {
          try {
            const d = await p.getDuration();
            await saveProgress(d);
          } catch {}
        });

        p.on("timeupdate", onTimeUpdate);

        // On mobile, gently bring the player into view (no autoplay)
        try {
          iframeRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } catch {}
      } catch (err) {
        console.error("Vimeo init failed:", err);
      }
    })();

    return () => {
      disposed = true;
      if (playerRef.current) {
        try {
          playerRef.current.unload?.();
        } catch {}
      }
      playerRef.current = null;
      setReady(false);
    };
  }, [sdkReady, onUnlock]);

  return (
    <div className="relative w-full lg:w-full aspect-video rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e]">
      <iframe
        ref={iframeRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        // explicit autoplay=0; removed 'autoplay' from allow attribute
        src="https://player.vimeo.com/video/1132049915?api=1&loop=0&playsinline=1&autopause=0&controls=1&keyboard=1&transparent=0&muted=0&autoplay=0"
        title="Masterclass"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />

      {/* Lock overlay when form is visible */}
      {formVisible && (
        <div className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center">
          <div className="rounded-lg border border-white/20 px-4 py-2 bg-black/70 text-white text-sm md:text-base">
            Sign up to unlock the masterclass
          </div>
        </div>
      )}
    </div>
  );
};

export default MainVideo;
