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
  /** Width / layout control for the outer container (border + bg) */
  wrapperClassName?: string;
};

const MainVideo: React.FC<Props> = ({
  formVisible,
  onFirstPlay,
  wrapperClassName,
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const onFirstPlayRef = useRef<typeof onFirstPlay>();

  const milestoneRef = useRef({
    started: false,
    m5fired: false,
    p25: false,
    p50: false,
    p75: false,
    p95: false,
  });

  useEffect(() => {
    onFirstPlayRef.current = onFirstPlay;
  }, [onFirstPlay]);

  const [sdkReady, setSdkReady] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [needsFirstTap, setNeedsFirstTap] = useState(true);

  // Load Vimeo SDK once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Vimeo?.Player) {
      setSdkReady(true);
      return;
    }
    const s = document.createElement("script");
    s.src = "https://player.vimeo.com/api/player.js";
    s.async = true;
    s.onload = () => {
      if (window.Vimeo?.Player) setSdkReady(true);
    };
    document.head.appendChild(s);
  }, []);

  // Init player
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sdkReady) return;
    if (playerRef.current || !iframeRef.current || !window.Vimeo?.Player)
      return;

    let disposed = false;
    const p = new window.Vimeo.Player(iframeRef.current);
    playerRef.current = p;

    const initializePlayer = async () => {
      try {
        await p.ready();
        if (disposed) return;

        setReady(true);
        await p.setMuted(true);
        setMuted(true);

        // Restore progress
        const savedTime = sessionStorage.getItem("videoProgress");
        if (savedTime) await p.setCurrentTime(Number(savedTime));

        p.on("fullscreenchange", (e: { fullscreen: boolean }) => {
          setFullscreen(!!e?.fullscreen);
        });

        p.on("play", () => {
          setPlaying(true);
          onFirstPlayRef.current?.();
          fbTrackCustom("MC_WatchStart");
        });

        p.on("pause", () => setPlaying(false));

        p.on("timeupdate", (data: { seconds: number; duration: number }) => {
          if (!data || !data.duration) return;
          const pct = (data.seconds / data.duration) * 100;

          if (pct >= 25 && !milestoneRef.current.p25) {
            milestoneRef.current.p25 = true;
            fbTrackCustom("MC_25");
          }
          if (pct >= 50 && !milestoneRef.current.p50) {
            milestoneRef.current.p50 = true;
            fbTrackCustom("MC_50");
          }
          if (pct >= 75 && !milestoneRef.current.p75) {
            milestoneRef.current.p75 = true;
            fbTrackCustom("MC_75");
          }
          if (pct >= 95 && !milestoneRef.current.p95) {
            milestoneRef.current.p95 = true;
            fbTrackCustom("MC_95");
          }

          sessionStorage.setItem("videoProgress", String(data.seconds));
        });

        p.on("volumechange", async () => {
          try {
            setMuted(await p.getMuted());
          } catch {}
        });
      } catch (e) {
        console.error("Vimeo player initialization failed:", e);
      }
    };

    initializePlayer();

    return () => {
      disposed = true;
      if (playerRef.current) {
        try {
          playerRef.current.unload?.();
        } catch (e) {
          console.error("Error unloading Vimeo player:", e);
        }
        playerRef.current = null;
      }
      setReady(false);
      setPlaying(false);
      setNeedsFirstTap(true);
      milestoneRef.current = {
        started: false,
        m5fired: false,
        p25: false,
        p50: false,
        p75: false,
        p95: false,
      };
    };
  }, [sdkReady]);

  const handleFirstTap = async () => {
    if (!playerRef.current || formVisible) return;
    try {
      await playerRef.current.setMuted(false);
      setMuted(false);
      await playerRef.current.setVolume(1);
      await playerRef.current.play();
      setPlaying(true);
      setNeedsFirstTap(false);
    } catch (e) {
      console.error("Error on first tap:", e);
    }
  };

  const togglePlay = async () => {
    if (!playerRef.current || formVisible) return;
    try {
      const paused = await playerRef.current.getPaused();
      if (paused) await playerRef.current.play();
      else await playerRef.current.pause();
    } catch (e) {
      console.error("Error toggling play/pause:", e);
    }
  };

  const toggleMute = async () => {
    if (!playerRef.current || formVisible) return;
    try {
      await playerRef.current.setMuted(!muted);
      setMuted(!muted);
    } catch (e) {
      console.error("Error toggling mute:", e);
    }
  };

  const toggleFullscreen = async () => {
    if (!playerRef.current || formVisible) return;
    try {
      const fs = await playerRef.current.getFullscreen?.();
      if (fs) {
        await playerRef.current.exitFullscreen?.();
        setFullscreen(false);
      } else {
        await playerRef.current.requestFullscreen?.();
        setFullscreen(true);
      }
    } catch (e) {
      console.error("Error toggling fullscreen:", e);
    }
  };

  return (
    <div
      className={[
        // Default: centered, capped width; change this from parent via wrapperClassName
        "relative mx-auto w-full max-w-3xl aspect-video rounded-xl overflow-hidden",
        "border border-[#3C3C3C] bg-[#0d0c0e]",
        formVisible ? "mt-6" : "",
        wrapperClassName ?? "",
      ].join(" ")}
    >
      <iframe
        ref={iframeRef}
        data-track="mc-video"
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        src="https://player.vimeo.com/video/1113013910?api=1&muted=1&loop=0&playsinline=1&autopause=0&controls=0&keyboard=0&transparent=0"
        title="Masterclass"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      {formVisible && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          aria-hidden
        >
          <div className="rounded-xl border border-white/20 px-4 py-2 bg-black/60 text-sm md:text-base text-white/90">
            Enter your details above to unlock the class
          </div>
        </div>
      )}

      {!formVisible && needsFirstTap && ready && (
        <div
          onClick={handleFirstTap}
          className="absolute inset-0 z-20 cursor-pointer"
          aria-hidden
          title="Tap to start with sound"
        >
          <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
            <span className="rounded-xl border border-white/20 px-3 py-1.5 bg-black/40 backdrop-blur text-xs md:text-sm text-white/90">
              Tap to start the class
            </span>
          </div>
        </div>
      )}

      {!formVisible && ready && !needsFirstTap && !fullscreen && (
        <div className="absolute bottom-3 right-3 z-20 flex gap-2 pointer-events-auto">
          <button
            onClick={togglePlay}
            className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
          >
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
          <button
            onClick={toggleMute}
            className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
          >
            {muted ? "🔊 Unmute" : "🔇 Mute"}
          </button>
          <button
            onClick={toggleFullscreen}
            className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
          >
            {fullscreen ? "🗗 Exit" : "⛶ Fullscreen"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MainVideo;