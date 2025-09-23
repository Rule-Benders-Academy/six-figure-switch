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
  formVisible: boolean; // if true → lock overlay shown
  onFirstPlay?: () => void;
  onUnlock?: () => void; // fires when >= 1500s
};

const UNLOCK_SECONDS = 1500; // 25 min

const MainVideo: React.FC<Props> = ({ formVisible, onFirstPlay, onUnlock }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const onFirstPlayRef = useRef<typeof onFirstPlay>();
  const unlockedRef = useRef(false);

  const [sdkReady, setSdkReady] = useState(false);
  const [ready, setReady] = useState(false);

  // Keep callback stable
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

  // Initialize Vimeo player
  useEffect(() => {
    if (!sdkReady || !iframeRef.current || playerRef.current) return;
    const Player = window.Vimeo?.Player;
    if (!Player) return;

    let disposed = false;
    const p = new Player(iframeRef.current);
    playerRef.current = p;

    const onTimeUpdate = (data: { seconds: number }) => {
      if (data?.seconds >= UNLOCK_SECONDS && !unlockedRef.current) {
        unlockedRef.current = true;
        onUnlock?.();
        fbTrackCustom("MC_UnlockAt25min");
      }
    };

    (async () => {
      try {
        await p.ready();
        if (disposed) return;
        setReady(true);

        await p.setMuted(false);

        p.on("play", () => {
          onFirstPlayRef.current?.();
          fbTrackCustom("MC_WatchStart");
        });

        p.on("timeupdate", onTimeUpdate);
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

  // Autoplay once unlocked (form dismissed)
  useEffect(() => {
    if (!ready || formVisible) return;
    (async () => {
      try {
        await playerRef.current.setMuted(false);
        await playerRef.current.play();
      } catch {
        // autoplay may be blocked, user can click play
      }
    })();
  }, [formVisible, ready]);

  return (
    <div className="relative w-full lg:w-full aspect-video rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e]">
      <iframe
        ref={iframeRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        src="https://player.vimeo.com/video/1113013910?api=1&loop=0&playsinline=1&autopause=0&controls=1&keyboard=1&transparent=0"
        title="Masterclass"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

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
