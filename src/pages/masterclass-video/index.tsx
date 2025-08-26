"use client";
/* eslint-disable */
import Drawer from "../../_components/Drawer/Drawer";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroBg from "@/_assets/landing-hero-bg.png";
import downArrow from "@/_assets/down-arrow.svg";
import CancelIcon from "@/_assets/cancel-red-icon.svg";
import Person1 from "@/_assets/switch-banner-img-1.png";
import Person2 from "@/_assets/switch-banner-img-2.png";
import Person3 from "@/_assets/switch-banner-img-3.png";
import Person4 from "@/_assets/switch-banner-img-4.png";
import Star from "@/_assets/star-hero.png";
import DigitalClock from "@/_components/DigitalClock/DigitalClock";
import SixFigureSwitch from "@/_components/SixFigureSwitch/SixFigureSwitch";
import GradientButton from "@/_components/GradientButton/GradientButton";
import FounderIntro from "@/_components/FounderIntro/FounderIntro";
import TrustedCompanies from "@/_components/TrustedCompanies/TrustedCompanies";
import MatrixSection from "@/_components/MatrixSection/MatrixSection";
import TestimonialSection from "@/_components/TestimonialSection/TestimonialSection";
import GameChangedSection from "@/_components/GameChangedSection/GameChangedSection";
import LandingAboutSection from "@/_components/LandingAbout/LandingAbout";
import MakeTheSwitch from "@/_components/MakeTheSwitch/MakeTheSwitch";
import EmploymentTrap from "@/_components/EmploymentTrap/EmploymentTrap";
import MatrixBreakdownSection from "@/_components/MatrixBreakdownSection/MatrixBreakdownSection";
import SixFigureSwitchSection from "@/_components/SixFigureSwitchSection/SixFigureSwitchSection";
import EarningsSection from "@/_components/EarningsSection/EarningsSection";
import LandingFaqSection from "@/_components/LandingFaqSection/LandingFaqSection";
import ComparisonSection from "@/_components/ComparisonSection/ComparisonSection";
import ConfidenceSection from "@/_components/ConfidenceSection/ConfidenceSection";
import LandingFooter from "@/_components/LandingFooter/LandingFooter";
import LearnSystem from "@/_components/LearnSystem/LearnSystem";
import OurPromise from "@/_components/OurPromise/OurPromise";
import NotOrdinary from "@/_components/NotOrdinary/NotOrdinary";
import TransformationTimeline from "@/_components/TransformationTimeline/TransformationTimeline";
import EarningTimelineSection from "@/_components/EarningTimelineSection/EarningTimelineSection";

/** Soft, animated Play button with pulse */
const PlayButton = ({
  onClick,
  label = "Play the class",
}: {
  onClick: () => void;
  label?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className="group relative inline-flex items-center justify-center"
  >
    {/* halo */}
    <span className="absolute inset-0 rounded-full bg-[#FFA500]/30 blur-lg opacity-70 group-hover:opacity-90 transition-opacity animate-ping" />
    {/* main circle */}
    <span className="relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/40 hover:bg-white/20 transition-colors flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 md:h-8 md:w-8 text-white transition-transform group-hover:scale-105"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  </button>
);

declare global {
  interface Window {
    Vimeo?: any;
  }
}

const points = [
  "You don’t need to build a startup",
  "You don’t need to grow a huge following",
  "You don’t even need to quit your industry",
  "You don’t have to give up stability, your network, or your professional identity",
  "You just need to position yourself—and help others see you—as an independent consultant.",
];

const LandingPage = () => {
  /** Gate: must watch 30 minutes */
  const THRESHOLD_SECONDS = 1800;
  const [secondsLeft, setSecondsLeft] = useState(THRESHOLD_SECONDS);
  const [unlocked, setUnlocked] = useState(false);
  const gateTimerRef = useRef<number | null>(null);

  /** Vimeo + UI */
  const [showIframe, setShowIframe] = useState(false);
  const [ready, setReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  /** Controls */
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [needsUnmuteTap, setNeedsUnmuteTap] = useState(false);

  /** Countdown 5→1 */
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(5);
  const countdownRef = useRef<number | null>(null);

  /** Motion preference */
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(m.matches);
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      m.addEventListener?.("change", handler);
      return () => m.removeEventListener?.("change", handler);
    }
  }, []);

  /** Load Vimeo API once */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Vimeo?.Player) return;
    const s = document.createElement("script");
    s.src = "https://player.vimeo.com/api/player.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      if (s.parentNode) s.parentNode.removeChild(s);
    };
  }, []);

  /** Start 30-min gate timer */
  const startGateTimer = () => {
    if (!unlocked && gateTimerRef.current === null) {
      let s = THRESHOLD_SECONDS;
      setSecondsLeft(s);
      gateTimerRef.current = window.setInterval(() => {
        s -= 1;
        setSecondsLeft(s);
        if (s <= 0) {
          if (gateTimerRef.current) {
            window.clearInterval(gateTimerRef.current);
            gateTimerRef.current = null;
          }
          setUnlocked(true);
        }
      }, 1000);
    }
  };

  /** User taps Play → show 5..1 → mount Vimeo */
  const handleStartVideo = () => {
    if (isCounting || showIframe) return;
    setIsCounting(true);
    setCount(5);
    countdownRef.current = window.setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          if (countdownRef.current) {
            window.clearInterval(countdownRef.current);
            countdownRef.current = null;
          }
          setIsCounting(false);
          setShowIframe(true);
          startGateTimer();
          return 0;
        }
        return c - 1;
      });
    }, 700);
  };

  /** When iframe becomes ready, init player & try to unmute and play */
  useEffect(() => {
    if (!showIframe || !iframeRef.current || !window.Vimeo?.Player) return;

    const init = async () => {
      playerRef.current = new window.Vimeo.Player(iframeRef.current);
      try {
        await playerRef.current.ready();
        // try autoplay with sound (may still be blocked by the browser)
        await playerRef.current.setMuted(false);
        setMuted(false);
        await playerRef.current.setVolume(1);
        await playerRef.current.play();
        setIsPlaying(true);

        const actuallyMuted = await playerRef.current.getMuted();
        if (actuallyMuted) {
          // Browser blocked it — show big unmute prompt
          setNeedsUnmuteTap(true);
        } else {
          setNeedsUnmuteTap(false);
        }

        // keep local state in sync
        playerRef.current.on("play", () => setIsPlaying(true));
        playerRef.current.on("pause", () => setIsPlaying(false));
        playerRef.current.on("volumechange", async () => {
          try {
            const m = await playerRef.current.getMuted();
            setMuted(m);
          } catch {}
        });
      } catch (e) {
        // If anything fails, show unmute prompt
        setNeedsUnmuteTap(true);
        // eslint-disable-next-line no-console
        console.warn("Vimeo init/play failed:", e);
      }
    };
    init();
  }, [showIframe]);

  const togglePlay = async () => {
    if (!playerRef.current) return;
    const paused = await playerRef.current.getPaused();
    if (paused) await playerRef.current.play();
    else await playerRef.current.pause();
  };

  const toggleMute = async () => {
    if (!playerRef.current) return;
    await playerRef.current.setMuted(!muted);
    setMuted(!muted);
    if (!muted) setNeedsUnmuteTap(false);
  };

  /** Big unmute button (guaranteed by user tap) */
  const forceUnmute = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.setMuted(false);
      await playerRef.current.setVolume(1);
      const p = await playerRef.current.getPaused();
      if (p) await playerRef.current.play();
      setMuted(false);
      setIsPlaying(true);
      setNeedsUnmuteTap(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("User unmute failed:", e);
    }
  };

  /** GA and cleanup */
  useEffect(() => {
    // GA (kept as you had it)
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-R7Q2CRPHS8";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-R7Q2CRPHS8');
    `;
    document.head.appendChild(script2);

    return () => {
      if (gateTimerRef.current) {
        window.clearInterval(gateTimerRef.current);
        gateTimerRef.current = null;
      }
      if (countdownRef.current) {
        window.clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen !font-jakarta">
        {/* ===== HERO / VIDEO GATE ===== */}
        <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-2 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
          {/* Background media & effects */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src={HeroBg}
              alt=""
              className="w-full h-full object-cover opacity-70"
              priority
            />
            {/* animated gradient blobs */}
            <div
              aria-hidden
              className={`absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFA500]/20 blur-3xl ${
                reducedMotion ? "" : "animate-pulse"
              }`}
            />
            <div
              aria-hidden
              className={`absolute bottom-10 -right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl ${
                reducedMotion ? "" : "animate-pulse"
              }`}
            />
            {/* subtle grain */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "3px 3px",
              }}
            />
          </div>

          <div className="relative lg:w-[80%] max-w-[98%] mx-auto text-center">
            <h2 className="text-2xl lg:text-[34px] leading-tight lg:leading-[100%] font-bold tracking-wide uppercase mt-5">
              The <span className="text-[#FFA500]">Independent Consultant</span>{" "}
              System
            </h2>
            <p className="text-base md:text-base lg:leading-[100%] mb-6 lg:mb-6 mt-4">
              Discover the{" "}
              <span className="text-[#FFA500] font-semibold">Five Models</span>
              <br />
              That Explain Why Consultants Earn <br />
              <span className="text-[#FFA500] font-semibold">
                3–5× More
              </span>{" "}
              Than Employees
              <br />
              <br />
              (And How to{" "}
              <span className="text-[#FFA500] font-semibold">
                Make the Switch
              </span>{" "}
              in 90 Days)
            </p>

            <div className="relative lg:w-[90%] border-2 border-[#747373] bg-[#FFFFFF12] rounded-2xl md:rounded-[35px] lg:rounded-[30px] mt-7 lg:mt-2 mx-auto">
              <div className="p-2 lg:p-4">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e]">
                  {/* Pre-video overlay: play OR countdown */}
                  {!showIframe && !isCounting && (
                    <div className="absolute inset-0 grid place-items-center">
                      <PlayButton onClick={handleStartVideo} />
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="rounded-xl border border-white/30 px-3 py-1.5 bg-black/30 backdrop-blur text-xs md:text-sm text-white/90">
                          Tap to start the class
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Countdown 5..1 (NO blur over numbers) */}
                  {isCounting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div
                          key={count}
                          className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white drop-shadow-[0_10px_30px_rgba(255,165,0,0.35)] transition-transform duration-300 ease-out"
                          style={{ transform: "scale(1)" }}
                        >
                          {count}
                        </div>
                        <div className="mt-3 text-center text-xs md:text-sm text-white/80">
                          Get ready…
                        </div>
                      </div>
                      {/* Dim the background ONLY, not the digits */}
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  )}

                  {/* Vimeo Player — smooth fade in */}
                  {showIframe && (
                    <>
                      {!ready && <div className="absolute inset-0 bg-black" />}
                      <iframe
                        ref={iframeRef}
                        key="video"
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                          ready ? "opacity-100" : "opacity-0"
                        } pointer-events-none`} // mobile taps go to our overlays
                        src="https://player.vimeo.com/video/1113013910?autoplay=1&muted=1&background=1&loop=1&playsinline=1"
                        title="How We Do It"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setReady(true)}
                      />
                    </>
                  )}

                  {/* Overlay controls once loaded */}
                  {showIframe && ready && (
                    <div className="absolute bottom-3 right-3 z-20 flex gap-2 pointer-events-auto">
                      <button
                        onClick={togglePlay}
                        className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5 flex items-center gap-1"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? "⏸ Pause" : "▶ Play"}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5 flex items-center gap-1"
                        aria-label={muted ? "Unmute video" : "Mute video"}
                      >
                        {muted ? "🔊 Unmute" : "🔇 Mute"}
                      </button>
                    </div>
                  )}

                  {/* Big UNMUTE button if browser blocked sound */}
                  {showIframe && ready && needsUnmuteTap && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
                      <button
                        onClick={forceUnmute}
                        className="rounded-full bg-[#FFA500] text-black font-semibold text-sm md:text-base px-4 py-2 shadow-lg"
                      >
                        🔊 Tap to Unmute
                      </button>
                    </div>
                  )}
                </div>

                {/* Gate message */}
                <p className="text-center text-xs md:text-sm opacity-80 mt-3">
                  {unlocked ? (
                    "You’re good to go."
                  ) : (
                    <>
                      Please watch at least 30 minutes to unlock the rest (
                      <span className="text-[#FFA500] font-semibold">
                        {Math.floor(secondsLeft / 60)}m {secondsLeft % 60}s
                      </span>
                      )
                    </>
                  )}
                </p>
              </div>

              {/* Blurred border glow */}
              <div
                className="pointer-events-none absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                style={{ filter: "blur(24px)" }}
              />
            </div>

            {/* Post-unlock card */}
            {unlocked && (
              <div className="lg:w-[50%] relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-xl md:rounded-[35px] lg:rounded-[10px] mt-7 mx-auto p-4">
                <span className="text-[#FFA500] font-bold underline">
                  Do not close this page as the special offer is only available
                  here
                </span>
                <br />
                As a reward for attending the class, you’re getting a special
                discount for the full Six Figure Switch Program.
              </div>
            )}

            {!unlocked && (
              <div className="lg:w-[50%] relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-xl md:rounded-[35px] lg:rounded-[10px] mt-3 mx-auto p-2">
                <span className="text-white-500 font-semibold">
                  Please refresh the page if video is not loading
                </span>
              </div>
            )}

            {/* Scroll hint */}
            {/* <div className="flex justify-center pt-4 mt-2">
              <Image
                src={downArrow}
                alt=""
                className="w-[32px] md:w-16 lg:w-[44px] h-[34px] md:h-16 lg:h-[64px] animate-bounce"
              />
            </div> */}
          </div>
        </section>

        {/* ===== REST OF PAGE (gated) ===== */}
        {unlocked && (
          <>
            <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60 pointer-events-none">
                <Image
                  src={HeroBg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative max-w-[98%] mx-auto text-center">
                <p className="text-lg md:text-2xl lg:leading-[100%] mb-8 md:mb-9 lg:mb-10">
                  If you are an employed professional,
                  <br />
                  thinking there must be more to life than this,
                  <br />
                  <span className="text-[#FFA500] font-bold underline">
                    you’re in the right place.
                  </span>
                </p>

                <div className="relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[30px] mt-7 md:mt-9 lg:mt-10 py-7 md:py-[80px] lg:py-14 lg:w-[90%] mx-auto">
                  <div className="px-4 sm:px-6 md:px-10">
                    <p className="text-2xl lg:text-[44px]">
                      It’s time to become an
                    </p>
                    <h2 className="text-2xl lg:text-[44px] leading-tight lg:leading-[100%] font-bold tracking-wide uppercase mt-5">
                      Independent Consultant
                    </h2>
                    <hr className="h-[6px] w-[90%] mx-auto mt-4 bg-white" />
                    <p className="text-lg md:text-2xl lg:leading-[100%] mt-4 lg:mt-8 mx-auto text-center max-w-3xl">
                      <div>From there, you could be on the path to earning</div>
                      <span className="relative inline-block my-4">
                        <Image
                          src={Star}
                          alt="Star"
                          className="absolute left-0 top-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <span className="text-[#FFA500] text-2xl font-bold py-2 px-6 border-2 border-[#FFA500] bg-[#141314] rounded-[10px]">
                          $1,400/day (and more)
                        </span>
                        <Image
                          src={Star}
                          alt="Star"
                          className="absolute right-0 top-1/2 w-6 h-6 transform translate-x-1/2 -translate-y-1/2"
                        />
                      </span>
                      <br />
                      while choosing when you work and when you don’t.
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                    style={{ filter: "blur(24px)" }}
                  />
                </div>

                <div className="flex justify-center pt-4 mt-2">
                  <Image
                    src={downArrow}
                    alt=""
                    className="w-[32px] md:w-16 lg:w-[44px] h-[34px] md:h-16 lg:h-[64px] animate-bounce"
                  />
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-b from-[#141314] to-[#272526] h-full">
              <div className="w-[80%] md:w-[36%] mx-auto py-5 md:py-10 lg:py-16 flex flex-col gap-7 md:gap-8">
                {points.map((text, index) => (
                  <div key={index} className="mt-4">
                    <div className="flex items-center gap-4 md:gap-8">
                      <div className="shrink-0">
                        <Image
                          src={CancelIcon}
                          alt=""
                          className="lg:w-[50px] md:w-12 w-6"
                        />
                      </div>
                      <div className="text-[18px] lg:text-[24px] uppercase max-w-[606px] text-white">
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <section className="relative text-white px-4 sm:px-8 md:px-16 lg:px-24 md:py-16 bg-gradient-to-b from-[#141314] to-[#272526] pb-10 ">
                <div className="max-w-[75%] md:max-w-[35%] 2xl:max-w-[50%] mx-auto text-center z-10 transform translate-y-[15px] sm:hidden">
                  <p className="text-lg md:text-2xl lg:text-[24px] xl:text-5xl">
                    You’re not under qualified. You’re
                    <br /> under positioned.
                  </p>
                  <p className="mb-4 text-lg mt-4 md:mt-4 md:text-2xl lg:text-xl xl:text-3xl leading-[100%] font-semibold text-[#FFA500]">
                    And it’s costing you $50,000 – $150,000 a year.
                  </p>
                </div>

                <div className="flex justify-between z-10 relative -mb-20 items-end lg:max-w-[50%] mx-auto gap-5">
                  <Image
                    src={Person1}
                    alt="Person 1"
                    className="lg:h-[180px] md:h-[250px] h-[136px] lg:w-[140px] md:w-[180px] w-[101px] rounded-md md:shadow-[19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)]"
                  />
                  <div className="text-center hidden sm:block transform md:-translate-y-1/4 mb-28">
                    <p className="text-lg md:text-2xl lg:text-2xl">
                      You’re not under qualified.
                      <br />
                      You’re under positioned.
                    </p>
                    <br />
                    <p className="text-xl md:text-2xl lg:text-2xl leading-[100%] font-semibold text-[#FFA500]">
                      And it’s costing you
                      <br /> $50,000 –$150,000 a year.
                    </p>
                  </div>
                  <Image
                    src={Person3}
                    alt="Person 2"
                    className="lg:h-[190px] md:h-[220px] h-[130px] lg:w-[140px] md:w-[160px] w-[88px] rounded-md -mt-10 md:-mt-20 md:shadow-[-19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="relative max-w-[80%] md:max-w-[40%] mx-auto">
                  <div className="flex justify-center items-center -mb-5 md:-mb-[30px] relative z-10">
                    <DigitalClock minutes={53} seconds={60} />
                  </div>
                  <div className="relative text-center py-[100px] px-5 border-[2px] border-[#3C3C3C] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[50px] w-[100%] mx-auto">
                    <p className="text-lg md:text-2xl lg:leading-[100%] mb-2">
                      Join <span className="font-bold">100+</span> career
                      changers
                    </p>
                    <h2 className="text-[24px] leading-[120%] lg:leading-[100%] md:text-2xl tracking-wide uppercase">
                      Who Made The
                      <br />
                      <span className="text-[#FFA500] font-bold">
                        Six-Figure Switch
                      </span>
                    </h2>
                  </div>
                  <div className="text-center">
                    <GradientButton>I’m in – lets Go!</GradientButton>
                  </div>
                </div>

                <div className="flex justify-between relative -mt-20 z-10 lg:max-w-[50%] mx-auto">
                  <Image
                    src={Person2}
                    alt="Person 3"
                    className="lg:h-[190px] md:h-[260px] h-[130px] lg:w-[140px] md:w-[200px] w-[100px] rounded-md md:shadow-[19.17px_-31.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_-10.89px_58.2px_0px_rgba(0,0,0,0.8)]"
                  />
                  <Image
                    src={Person4}
                    alt="Person 4"
                    className="lg:h-[190px] md:h-[240px] h-[117px] lg:w-[150px] md:w-[200px] w-[99px] rounded-md md:shadow-[-19.17px_-41.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_-13.89px_58.2px_0px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </section>

              <div className="bg-gradient-to-b from-[#141314] to-[#272526] pb-11 md:pb-16">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 lg:pt-24">
                  <SixFigureSwitch />
                </div>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 w-[95%] lg:w-full mx-auto">
                  <FounderIntro />
                </div>
              </div>

              <TrustedCompanies />
              <MatrixSection />
              <TestimonialSection
                reverseOrder={false}
                name="Brittany"
                description={
                  <>
                    Doubled her income in 6 months. <br />
                    From stuck in strategy to leading <br />
                    <span className="font-bold">£10M+ programmes</span>.
                  </>
                }
                videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145289/Testimonial_Video_Brittany_w0wcjx.mp4"
              />
              <GameChangedSection />
              <LandingAboutSection />
              <MakeTheSwitch />
              <EmploymentTrap />
              <MatrixBreakdownSection />
              <TransformationTimeline />
              <TestimonialSection
                reverseOrder
                name="DANIEL"
                description={
                  <>
                    Left his struggling online business. First consulting role
                    at £400/day. Multiple government contracts since.
                  </>
                }
                videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145302/Testimonial_Video_Daniel_fbvbe6.mp4"
              />
              <SixFigureSwitchSection />
              <ComparisonSection />
              <TestimonialSection
                reverseOrder={false}
                name="DAVID"
                description={
                  <>
                    Turned mid-career stagnation into £900/day independence and
                    freedom. Turned mid-career stagnation into £900/day
                    independence and freedom.
                  </>
                }
                videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145311/Testimonial_Video_David_lgfmuh.mp4"
              />
              <EarningsSection />
              <EarningTimelineSection />
              <LandingFaqSection />
              <ConfidenceSection />
              <div className="-mt-[70px]">
                <NotOrdinary />
              </div>
              <div className="-mt-[20px] md:-mt-[150px] lg:-mt-[200px]">
                <OurPromise />
              </div>
              <LearnSystem />
              <LandingFooter />
            </div>
          </>
        )}
      </div>

      <Drawer />
    </>
  );
};

export default LandingPage;
