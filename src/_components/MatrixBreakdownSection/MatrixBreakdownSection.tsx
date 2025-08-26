// MatrixBreakdownSection.tsx
/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bgCurve from "../../_assets/Ellipse-bg.png";
import MindsetIcon from "../../_assets/metrix-mindset-icon.png";
import MethodIcon from "../../_assets/metrix-method-icon.png";
import MarketIcon from "../../_assets/metrix-market-icon.png";
import BtnIcon from "../../_assets/metrix-btn-icon.svg";
import GradientButton from "../GradientButton/GradientButton";

declare global {
  interface Window {
    Vimeo?: any;
  }
}

const methods = [
  {
    icon: MindsetIcon,
    title: "Mindset",
    description: "Ditch the employee identity and think like a consultant",
  },
  {
    icon: MethodIcon,
    title: "Method",
    description: "Use our proven system to build your offer and toolkit",
  },
  {
    icon: MarketIcon,
    title: "Market",
    description: "Go to market and secure your first contract",
  },
];

const MatrixBreakdownSection: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [needsFirstTap, setNeedsFirstTap] = useState(true); // invisible one-tap to start with sound

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  const ensureVimeo = async () => {
    if (typeof window === "undefined") return;
    if (window.Vimeo?.Player) return;
    await new Promise<void>((resolve) => {
      const s = document.createElement("script");
      s.src = "https://player.vimeo.com/api/player.js";
      s.async = true;
      s.onload = () => resolve();
      document.head.appendChild(s);
    });
  };

  // Create the player as soon as the iframe mounts (no autoplay)
  useEffect(() => {
    let disposed = false;
    (async () => {
      await ensureVimeo();
      if (disposed) return;
      if (!iframeRef.current || !window.Vimeo?.Player) return;

      playerRef.current = new window.Vimeo.Player(iframeRef.current);
      try {
        await playerRef.current.ready();
        setReady(true);
        // start paused + muted (safe default)
        await playerRef.current.setMuted(true);
        setMuted(true);

        // Sync handlers
        playerRef.current.on("play", () => setIsPlaying(true));
        playerRef.current.on("pause", () => setIsPlaying(false));
        playerRef.current.on("volumechange", async () => {
          try {
            setMuted(await playerRef.current.getMuted());
          } catch {}
        });
        playerRef.current.on(
          "fullscreenchange",
          (e: { fullscreen: boolean }) => {
            const fs = !!e?.fullscreen;
            setIsFullscreen(fs);
            if (!fs) pauseVideo();
          }
        );
      } catch {}
    })();
    return () => {
      disposed = true;
    };
  }, []);

  const pauseVideo = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.pause();
      setIsPlaying(false);
    } catch {}
  };

  const togglePlay = async () => {
    if (!playerRef.current) return;
    try {
      const paused = await playerRef.current.getPaused();
      if (paused) await playerRef.current.play();
      else await playerRef.current.pause();
    } catch {}
  };

  const toggleMute = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.setMuted(!muted);
      setMuted(!muted);
    } catch {}
  };

  const toggleFullscreen = async () => {
    if (!playerRef.current) return;
    try {
      const fs = await playerRef.current.getFullscreen?.();
      if (fs) {
        await playerRef.current.exitFullscreen?.();
        setIsFullscreen(false);
      } else {
        await playerRef.current.requestFullscreen?.();
        setIsFullscreen(true);
      }
    } catch {
      const iframe = iframeRef.current;
      if (!iframe) return;
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        } else if ((iframe as any).requestFullscreen) {
          await (iframe as any).requestFullscreen();
          setIsFullscreen(true);
        } else if ((iframe as any).webkitRequestFullscreen) {
          (iframe as any).webkitRequestFullscreen();
          setIsFullscreen(true);
        }
      } catch {}
    }
  };

  // Pause on ESC globally
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        pauseVideo();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Pause when exiting native fullscreen
  useEffect(() => {
    const onFsChange = () => {
      const active =
        !!document.fullscreenElement ||
        !!(document as any).webkitFullscreenElement;
      setIsFullscreen(active);
      if (!active) pauseVideo();
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange as any);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange as any);
    };
  }, []);

  // First tap to unmute + play (invisible overlay)
  const handleFirstTap = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.setMuted(false);
      setMuted(false);
      await playerRef.current.setVolume(1);
      await playerRef.current.play();
      setIsPlaying(true);
      setNeedsFirstTap(false);
    } catch {
      // fallback: play muted if sound still blocked
      try {
        await playerRef.current.setMuted(true);
        setMuted(true);
        await playerRef.current.play();
        setIsPlaying(true);
      } catch {}
      setNeedsFirstTap(false);
    }
  };

  return (
    <section className="bg-black text-white pb-16 space-y-16">
      <div className="bg-gradient-to-b from-[#434040] to-[#000000] pt-10 pb-28 md:pt-20 md:pb-40 mb-32 relative text-center">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-5xl lg:text-[44px] font-medium leading-tight">
            This is how we break you
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-[44px] font-bold md:mt-2 ">
            out of the Matrix
          </h2>
        </div>
        <div
          className="absolute top-[120px] md:top-[240px] left-0 z-[1] w-full h-[200px]"
          style={{
            backgroundImage: `url(${bgCurve.src})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center relative z-10 -top-[200px] md:-top-[140px] lg:w-[80%] mx-auto">
          {methods.map((m, i) => (
            <div key={i} className="flex flex-col items-center md:space-y-4">
              <h3 className="font-semibold text-base md:text-2xl">{m.title}</h3>
              <Image
                src={m.icon}
                alt={m.title}
                className="w-[104px] md:w-[130px] lg:w-[150px]"
              />
              <p className="text-white text-base md:text-2xl lg:text-2xl max-w-[230px] md:max-w-xs font-light">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 bg-black rounded-lg md:p-6 !-mt-44 md:!mt-0 w-[90%] lg:w-[80%] mx-auto">
          <div className="space-y-4 text-center md:text-left max-w-[400px]">
            <h3 className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] font-semibold">
              Want to see the method?
            </h3>
            <p className="text-white text-sm md:text-lg lg:text-2xl">
              Let me walk you through how we do this step by step
            </p>
            <div className="hidden md:block justify-center md:justify-start mt-16 md:mt-6">
              <div className="relative">
                <Image
                  src={BtnIcon}
                  alt=""
                  className="absolute -top-[40px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
                />
                <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !leading-none !py-[14px] !px-5 md:!px-8 lg:!px-[30px] max-w-[399px] ">
                  Take the Red Pill
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Clean video block */}
          <div className="w-full max-w-[980px] mt-6 md:mt-8 lg:mt-12">
            <div className="relative md:rounded-[35px] lg:rounded-[15px] overflow-hidden h-[240px] sm:h-[300px] md:h-[420px] lg:h-[440px] bg-black">
              {/* Always mounted iframe (lazy), no autoplay param */}
              <iframe
                ref={iframeRef}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  ready ? "opacity-100" : "opacity-0"
                } pointer-events-none`} // use overlay controls
                // No autoplay; muted=1 so we can call play() safely if needed
                src="https://player.vimeo.com/video/1113012539?muted=1&loop=1&playsinline=1&autopause=0"
                title="Method Walkthrough"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setReady(true)}
              />

              {/* Invisible first-tap layer (removed after success) */}
              {needsFirstTap && ready && (
                <div
                  onClick={handleFirstTap}
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-hidden
                  title="Tap to play"
                />
              )}

              {/* Controls */}
              {ready && !needsFirstTap && (
                <div className="absolute bottom-3 right-3 z-20 flex gap-2 pointer-events-auto">
                  <button
                    onClick={togglePlay}
                    className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                  >
                    {muted ? "🔊 Unmute" : "🔇 Mute"}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                    aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  >
                    ⛶ {isFullscreen ? "Exit" : "Fullscreen"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-14">
          <div className="relative">
            <Image
              src={BtnIcon}
              alt=""
              className=" absolute -top-[25px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
            />
            <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[220px] md:max-w-[399px] ">
              Take the Red Pill
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixBreakdownSection;
