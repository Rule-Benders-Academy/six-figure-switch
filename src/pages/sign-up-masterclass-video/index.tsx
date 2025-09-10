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
import ProfilePic from "@/_assets/will-img.png";
import Bonus from "@/_assets/bonus-offer.png";

declare global {
  interface Window {
    Vimeo?: any;
  }
}

type Stage = "form" | "video" | "offer";

const points = [
  "You don’t need to build a startup",
  "You don’t need to grow a huge following",
  "You don’t even need to quit your industry",
  "You don’t have to give up stability, your network, or your professional identity",
  "You just need to position yourself—and help others see you—as an independent consultant.",
];

const isIOS = () => {
  if (typeof navigator === "undefined") return false;
  const ua =
    navigator.userAgent ||
    (navigator as any).vendor ||
    (window as any).opera ||
    "";
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && (navigator as any).maxTouchPoints > 1)
  );
};

const THRESHOLD_SECONDS = 10; // 20 minutes in prod: 1200

const LandingPage = () => {
  // ===== Gate (form -> video -> offer)
  const [stage, setStage] = useState<Stage>("form");
  const [formVisible, setFormVisible] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(THRESHOLD_SECONDS);
  const [unlocked, setUnlocked] = useState(false);
  const gateTimerRef = useRef<number | null>(null);
  const gateStartedRef = useRef(false);

  const startGateTimer = () => {
    if (gateStartedRef.current) return;
    gateStartedRef.current = true;
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
        setUnlocked(true); // show offer only on button click
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (gateTimerRef.current) {
        window.clearInterval(gateTimerRef.current);
        gateTimerRef.current = null;
      }
    };
  }, []);

  // ===== AC form (unchanged)
  useEffect(() => {
    if (!formVisible) return;

    const root = document.getElementById("ac-form-root");
    if (!root) return;

    if (!root.querySelector("._form_3")) {
      const mount = document.createElement("div");
      mount.className = "_form_3";
      root.appendChild(mount);
    }

    if (!document.querySelector('script[data-ac-form="3"]')) {
      const s = document.createElement("script");
      s.src = "https://rule-benders.activehosted.com/f/embed.php?id=3";
      s.async = true;
      s.charset = "utf-8";
      s.setAttribute("data-ac-form", "3");
      document.body.appendChild(s);
    }

    const unlockVideo = () => {
      setFormVisible(false);
      setStage("video");
    };

    const mo = new MutationObserver(() => {
      const thanks = root.querySelector(
        "._form-thank-you, ._form-thank-you_message"
      ) as HTMLElement | null;
      if (
        thanks &&
        (thanks.offsetParent !== null || thanks.innerHTML.trim().length > 0)
      ) {
        mo.disconnect();
        unlockVideo();
      }
    });
    mo.observe(root, { childList: true, subtree: true });

    let submitFallbackId: number | undefined;
    const bindSubmit = () => {
      const form = root.querySelector("form._form") as HTMLFormElement | null;
      if (!form) return;
      if ((form as any).__acBound) return;
      (form as any).__acBound = true;
      form.addEventListener("submit", () => {
        if (submitFallbackId) window.clearTimeout(submitFallbackId);
        submitFallbackId = window.setTimeout(unlockVideo, 720);
      });
    };
    bindSubmit();

    let pollId: number | undefined = window.setInterval(() => {
      bindSubmit();
      const thanks = root.querySelector(
        "._form-thank-you, ._form-thank-you_message"
      );
      if (thanks) {
        window.clearInterval(pollId);
        pollId = undefined;
      }
    }, 400);

    const onMsg = (e: MessageEvent) => {
      const raw = e.data;

      if (typeof raw === "string") {
        if (/ac_form_submit_success|form.*submit.*success/i.test(raw)) {
          unlockVideo();
          return;
        }
        try {
          const parsed = JSON.parse(raw);
          if (
            parsed &&
            typeof parsed === "object" &&
            (parsed.type === "ac_form_submit_success" ||
              parsed.event === "ac_form_submit_success")
          ) {
            unlockVideo();
          }
        } catch {}
        return;
      }

      if (raw && typeof raw === "object") {
        const anyRaw = raw as any;
        if (
          anyRaw.type === "ac_form_submit_success" ||
          anyRaw.event === "ac_form_submit_success"
        ) {
          unlockVideo();
        }
      }
    };

    window.addEventListener("message", onMsg);

    return () => {
      mo.disconnect();
      window.removeEventListener("message", onMsg);
      if (pollId) window.clearInterval(pollId);
      if (submitFallbackId) window.clearTimeout(submitFallbackId);
    };
  }, [formVisible]);

  // =========================================================
  // ====== MAIN (GATED) VIDEO — independent player/state ====
  // =========================================================
  const mainIframeRef = useRef<HTMLIFrameElement | null>(null);
  const mainPlayerRef = useRef<any>(null);

  const [readyMain, setReadyMain] = useState(false);
  const [isPlayingMain, setIsPlayingMain] = useState(false);
  const [mutedMain, setMutedMain] = useState(true);
  const [isFullscreenMain, setIsFullscreenMain] = useState(false);
  const [needsFirstTapMain, setNeedsFirstTapMain] = useState(true);
  const [showUnmuteHintMain, setShowUnmuteHintMain] = useState(false);

  const maxAllowedRef = useRef(0);
  const guardSeekRef = useRef(false);

  useEffect(() => {
    let disposed = false;

    const init = async () => {
      if (mainPlayerRef.current || !mainIframeRef.current) return;

      if (!window.Vimeo?.Player) {
        await new Promise<void>((resolve) => {
          const s = document.createElement("script");
          s.src = "https://player.vimeo.com/api/player.js";
          s.async = true;
          s.onload = () => resolve();
          document.head.appendChild(s);
        });
      }
      if (disposed || !window.Vimeo?.Player || !mainIframeRef.current) return;

      mainPlayerRef.current = new window.Vimeo.Player(mainIframeRef.current);

      try {
        await mainPlayerRef.current.ready();
        setReadyMain(true);
        await mainPlayerRef.current.setMuted(true);
        setMutedMain(true);

        mainPlayerRef.current.on(
          "fullscreenchange",
          (e: { fullscreen: boolean }) => setIsFullscreenMain(!!e?.fullscreen)
        );

        maxAllowedRef.current = 0;
        mainPlayerRef.current.on("timeupdate", (ev: { seconds: number }) => {
          const t = ev?.seconds ?? 0;
          if (!guardSeekRef.current && t > maxAllowedRef.current) {
            maxAllowedRef.current = t;
          }
        });

        mainPlayerRef.current.on("seeked", async () => {
          try {
            const t = await mainPlayerRef.current.getCurrentTime();
            const minAllowed = Math.max(0, maxAllowedRef.current - 3);
            if (t < minAllowed) {
              guardSeekRef.current = true;
              await mainPlayerRef.current.setCurrentTime(minAllowed);
              guardSeekRef.current = false;
              return;
            }
            const grace = 0.75;
            if (t > maxAllowedRef.current + grace) {
              guardSeekRef.current = true;
              await mainPlayerRef.current.setCurrentTime(maxAllowedRef.current);
              guardSeekRef.current = false;
            }
          } catch {}
        });

        mainPlayerRef.current.on("play", () => {
          setIsPlayingMain(true);
          startGateTimer(); // start gate on first actual play
        });
        mainPlayerRef.current.on("pause", () => setIsPlayingMain(false));
        mainPlayerRef.current.on("volumechange", async () => {
          try {
            setMutedMain(await mainPlayerRef.current.getMuted());
          } catch {}
        });
      } catch {}
    };

    init();

    return () => {
      disposed = true;
      if (mainPlayerRef.current) {
        try {
          mainPlayerRef.current.unload?.();
        } catch {}
        mainPlayerRef.current = null;
      }
      setReadyMain(false);
      setIsPlayingMain(false);
      setNeedsFirstTapMain(true);
    };
  }, []);

  const pauseMain = async () => {
    if (!mainPlayerRef.current) return;
    try {
      await mainPlayerRef.current.pause();
      setIsPlayingMain(false);
    } catch {}
  };

  const handleFirstTapMain = async () => {
    if (!mainPlayerRef.current || formVisible) return;
    try {
      await mainPlayerRef.current.setMuted(false);
      setMutedMain(false);
      await mainPlayerRef.current.setVolume(1);
      await mainPlayerRef.current.play();
      setIsPlayingMain(true);
      setNeedsFirstTapMain(false);
      setShowUnmuteHintMain(false);
    } catch {
      try {
        await mainPlayerRef.current.setMuted(true);
        setMutedMain(true);
        await mainPlayerRef.current.play();
        setIsPlayingMain(true);
      } catch {}
      setNeedsFirstTapMain(false);
      if (isIOS()) setShowUnmuteHintMain(true);
    }
  };

  const togglePlayMain = async () => {
    if (!mainPlayerRef.current || formVisible) return;
    try {
      const paused = await mainPlayerRef.current.getPaused();
      if (paused) await mainPlayerRef.current.play();
      else await mainPlayerRef.current.pause();
    } catch {}
  };

  const toggleMuteMain = async () => {
    if (!mainPlayerRef.current || formVisible) return;
    try {
      await mainPlayerRef.current.setMuted(!mutedMain);
      setMutedMain(!mutedMain);
      setShowUnmuteHintMain(false);
    } catch {}
  };

  const toggleFullscreenMain = async () => {
    if (!mainPlayerRef.current || formVisible) return;
    try {
      const fs = await mainPlayerRef.current.getFullscreen?.();
      if (fs) {
        await mainPlayerRef.current.exitFullscreen?.();
        setIsFullscreenMain(false);
      } else {
        await mainPlayerRef.current.requestFullscreen?.();
        setIsFullscreenMain(true);
      }
      return;
    } catch {}
    // Fallback native API
    try {
      const iframe = mainIframeRef.current;
      if (!iframe) return;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreenMain(false);
      } else if ((iframe as any).requestFullscreen) {
        await (iframe as any).requestFullscreen();
        setIsFullscreenMain(true);
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
        setIsFullscreenMain(true);
      }
    } catch {}
  };

  // =========================================================
  // ====== OFFER VIDEO — independent player/state ===========
  // =========================================================
  const offerIframeRef = useRef<HTMLIFrameElement | null>(null);
  const offerPlayerRef = useRef<any>(null);

  const [readyOffer, setReadyOffer] = useState(false);
  const [isPlayingOffer, setIsPlayingOffer] = useState(false);
  const [mutedOffer, setMutedOffer] = useState(true);
  const [isFullscreenOffer, setIsFullscreenOffer] = useState(false);
  const [needsFirstTapOffer, setNeedsFirstTapOffer] = useState(true);

  // init the offer player only when the offer section is visible
  useEffect(() => {
    if (stage !== "offer") return;
    let disposed = false;

    const init = async () => {
      if (offerPlayerRef.current || !offerIframeRef.current) return;

      if (!window.Vimeo?.Player) {
        await new Promise<void>((resolve) => {
          const s = document.createElement("script");
          s.src = "https://player.vimeo.com/api/player.js";
          s.async = true;
          s.onload = () => resolve();
          document.head.appendChild(s);
        });
      }
      if (disposed || !window.Vimeo?.Player || !offerIframeRef.current) return;

      offerPlayerRef.current = new window.Vimeo.Player(offerIframeRef.current);
      try {
        await offerPlayerRef.current.ready();
        setReadyOffer(true);
        await offerPlayerRef.current.setMuted(true);
        setMutedOffer(true);

        offerPlayerRef.current.on(
          "fullscreenchange",
          (e: { fullscreen: boolean }) => setIsFullscreenOffer(!!e?.fullscreen)
        );
        offerPlayerRef.current.on("play", () => setIsPlayingOffer(true));
        offerPlayerRef.current.on("pause", () => setIsPlayingOffer(false));
        offerPlayerRef.current.on("volumechange", async () => {
          try {
            setMutedOffer(await offerPlayerRef.current.getMuted());
          } catch {}
        });
      } catch {}
    };

    init();
    return () => {
      disposed = true;
      // (keep the instance; offer stays on page while stage === "offer")
    };
  }, [stage]);

  const pauseOffer = async () => {
    if (!offerPlayerRef.current) return;
    try {
      await offerPlayerRef.current.pause();
      setIsPlayingOffer(false);
    } catch {}
  };

  const handleFirstTapOffer = async () => {
    if (!offerPlayerRef.current) return;
    try {
      await offerPlayerRef.current.setMuted(false);
      setMutedOffer(false);
      await offerPlayerRef.current.setVolume(1);
      await offerPlayerRef.current.play();
      setIsPlayingOffer(true);
      setNeedsFirstTapOffer(false);
    } catch {
      try {
        await offerPlayerRef.current.setMuted(true);
        setMutedOffer(true);
        await offerPlayerRef.current.play();
        setIsPlayingOffer(true);
      } catch {}
      setNeedsFirstTapOffer(false);
    }
  };

  const togglePlayOffer = async () => {
    if (!offerPlayerRef.current) return;
    try {
      const paused = await offerPlayerRef.current.getPaused();
      if (paused) await offerPlayerRef.current.play();
      else await offerPlayerRef.current.pause();
    } catch {}
  };

  const toggleMuteOffer = async () => {
    if (!offerPlayerRef.current) return;
    try {
      await offerPlayerRef.current.setMuted(!mutedOffer);
      setMutedOffer(!mutedOffer);
    } catch {}
  };

  const toggleFullscreenOffer = async () => {
    if (!offerPlayerRef.current) return;
    try {
      const fs = await offerPlayerRef.current.getFullscreen?.();
      if (fs) {
        await offerPlayerRef.current.exitFullscreen?.();
        setIsFullscreenOffer(false);
      } else {
        await offerPlayerRef.current.requestFullscreen?.();
        setIsFullscreenOffer(true);
      }
      return;
    } catch {}
    // Fallback native
    try {
      const iframe = offerIframeRef.current;
      if (!iframe) return;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreenOffer(false);
      } else if ((iframe as any).requestFullscreen) {
        await (iframe as any).requestFullscreen();
        setIsFullscreenOffer(true);
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
        setIsFullscreenOffer(true);
      }
    } catch {}
  };

  // ===== Global listeners: pause *only* the video that was fullscreen/active
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || (e as any).keyCode === 27) {
        const fe =
          (document.fullscreenElement as HTMLElement | null) ||
          ((document as any).webkitFullscreenElement as HTMLElement | null);
        if (fe === mainIframeRef.current) pauseMain();
        if (fe === offerIframeRef.current) pauseOffer();
      }
    };
    const onFsChange = () => {
      const fe =
        (document.fullscreenElement as HTMLElement | null) ||
        ((document as any).webkitFullscreenElement as HTMLElement | null);
      setIsFullscreenMain(fe === mainIframeRef.current);
      setIsFullscreenOffer(fe === offerIframeRef.current);
      // when exiting fullscreen (fe null), only pause the one that *was* fullscreen
      if (!fe) {
        if (isFullscreenMain) pauseMain();
        if (isFullscreenOffer) pauseOffer();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange as any);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange as any);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreenMain, isFullscreenOffer]);

  // ===== Motion preference
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

  // ===== Offer button
  const handleOfferButtonClick = () => {
    if (!unlocked) return;
    setStage("offer");
    requestAnimationFrame(() => {
      document.getElementById("offer-start")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  // ===== GA (unchanged)
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://www.googletagmanager.com/gtag/js?id=G-R7Q2CRPHS8";
    s1.async = true;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-R7Q2CRPHS8');
    `;
    document.head.appendChild(s2);
  }, []);

  return (
    <>
      <div className="min-h-screen !font-jakarta">
        {/* ===== HERO / GATE ===== */}
        <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-2 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src={HeroBg}
              alt=""
              className="w-full h-full object-cover opacity-70"
              priority
            />
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
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-8 text-center">
              {/* LEFT: Circle image */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden ">
                  <Image
                    src={Bonus}
                    alt="Will"
                    fill
                    className="object-contain p-1"
                    sizes="160px"
                    priority
                  />
                </div>
              </div>

              {/* RIGHT: Heading */}
              <div className="md:w-auto">
                <h2 className="text-xl sm:text-2xl lg:text-[34px] leading-tight font-bold tracking-wide uppercase mt-4 md:mt-0">
                  <span className="block">Earn £1000 a day in 90 days</span>
                  <span className="block">
                    as an{" "}
                    <span className="text-[#FFA500] whitespace-nowrap">
                      Independent Consultant
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Main card: FORM first, then VIDEO (locked until submit) */}
            <div className="relative  border-2 border-[#747373] bg-[#FFFFFF12] rounded-2xl md:rounded-[35px] lg:rounded-[30px] mt-7 lg:mt-2 mx-auto">
              <div className="p-3 md:p-5 lg:p-6">
                {/* ===== FORM BLOCK ===== */}
                {formVisible && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch text-left">
                      {/* LEFT: Tablet-styled AC Form frame */}
                      <div className="relative rounded-[28px] border border-[#3C3C3C] bg-[#0b0b0c] p-4 md:p-6 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/15" />
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 -ml-10 w-2.5 h-2.5 rounded-full bg-white/25" />
                        <div className="mb-4 text-center">
                          <div className="flex justify-center">
                            <div className="relative w-32 h-32 md:w-[426px] md:h-[426px] rounded-full overflow-hidden ring-4 ring-[#0b0b0c] shadow-xl">
                              <Image
                                src={ProfilePic}
                                alt="Will"
                                fill
                                className="object-cover"
                                sizes="344px"
                                priority
                              />
                            </div>
                          </div>
                          <p className="text-xs md:text-sm uppercase tracking-wide text-white/70">
                            Start the{" "}
                            <span className="text-[#FFA500] font-semibold">
                              Free Masterclass
                            </span>
                          </p>
                        </div>
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-[85%] rounded-[50%] bg-[#FFA500]/10 blur-2xl"
                        />
                      </div>

                      {/* RIGHT: Info card */}
                      <div className="relative flex flex-col items-center justify-center text-center rounded-2xl md:rounded-3xl border border-[#3C3C3C] bg-[#0d0c0e] p-6 md:p-8 overflow-hidden">
                        <div
                          aria-hidden
                          className="absolute -top-16 -right-16 h-40 w-40 rotate-45 bg-gradient-to-br from-[#FFA500]/20 to-transparent"
                        />
                        <h3 className="text-xl lg:text-xl font-bold leading-tight">
                          Limited Masterclass Offer:
                          <br />
                          <span className="text-[#FFA500]">
                            Valid for 10 days
                          </span>
                        </h3>
                        <p className="mt-4 text-xl text-white/80 leading-relaxed">
                          Enter your details then join{" "}
                          <span className="text-[#FFA500] font-semibold">
                            100+ professionals
                          </span>{" "}
                          making the switch to high paid consulting.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFA500] to-transparent" />

                    <div
                      id="ac-form-root"
                      className="relative w-full rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e] p-3 md:p-4"
                    >
                      <h4 className="text-lg md:text-2xl font-bold">
                        Watch <span className="text-[#FFA500]">instantly</span>
                      </h4>
                      <div className="_form_3"></div>
                    </div>
                  </div>
                )}

                {/* ===== MAIN VIDEO (independent) ===== */}
                <div
                  className={`relative w-full aspect-video rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e] ${
                    formVisible ? "mt-6" : ""
                  }`}
                >
                  <iframe
                    ref={mainIframeRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                      readyMain ? "opacity-100" : "opacity-0"
                    }`}
                    src="https://player.vimeo.com/video/1113013910?muted=1&loop=0&playsinline=1&autopause=0&controls=0&keyboard=0&transparent=0"
                    title="Masterclass"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />

                  {formVisible && (
                    <div
                      className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                      aria-hidden
                    >
                      <div className="text-center px-4">
                        <div className="rounded-xl border border-white/20 px-4 py-2 bg-black/60 text-sm md:text-base text-white/90">
                          Enter your details above to unlock the class
                        </div>
                      </div>
                    </div>
                  )}

                  {!formVisible && needsFirstTapMain && readyMain && (
                    <div
                      onClick={handleFirstTapMain}
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

                  {!formVisible &&
                    readyMain &&
                    !needsFirstTapMain &&
                    !isFullscreenMain && (
                      <div className="absolute bottom-3 right-3 z-20 flex gap-2 pointer-events-auto">
                        <button
                          onClick={togglePlayMain}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={
                            isPlayingMain ? "Pause video" : "Play video"
                          }
                        >
                          {isPlayingMain ? "⏸ Pause" : "▶ Play"}
                        </button>
                        <button
                          onClick={toggleMuteMain}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={mutedMain ? "Unmute video" : "Mute video"}
                        >
                          {mutedMain ? "🔊 Unmute" : "🔇 Mute"}
                        </button>
                        <button
                          onClick={toggleFullscreenMain}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={
                            isFullscreenMain ? "Exit Fullscreen" : "Fullscreen"
                          }
                        >
                          {isFullscreenMain ? "🗗 Exit" : "⛶ Fullscreen"}
                        </button>
                      </div>
                    )}

                  {!formVisible && showUnmuteHintMain && !isFullscreenMain && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <span className="rounded-xl border border-white/20 px-3 py-1.5 bg-black/50 backdrop-blur text-[11px] md:text-xs text-white/90">
                        Sound blocked by the browser — use 🔊 Unmute
                      </span>
                    </div>
                  )}
                </div>

                {/* Gate message */}
                <p className="text-center text-xs md:text-sm opacity-80 mt-3">
                  {formVisible ? (
                    "Sign up to unlock the masterclass."
                  ) : stage === "video" && !unlocked ? (
                    <>
                      Please watch at least 20 minutes to unlock the rest (
                      <span className="text-[#FFA500] font-semibold">
                        {Math.floor(secondsLeft / 60)}m {secondsLeft % 60}s
                      </span>
                      )
                    </>
                  ) : (
                    "You’re good to go."
                  )}
                </p>
              </div>

              {/* Glow border */}
              <div
                className="pointer-events-none absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                style={{ filter: "blur(24px)" }}
              />
            </div>

            {/* Post-unlock card: only when stage === "offer" */}
            {stage === "offer" && (
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

            {stage === "video" && !unlocked && (
              <div className="lg:w-[50%] relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-xl md:rounded-[35px] lg:rounded-[10px] mt-3 mx-auto p-2">
                <span className="text-white font-semibold">
                  Please refresh the page if the video is not loading
                </span>
              </div>
            )}

            {/* Offer button under the video (disabled until unlocked) */}
            <div className="mt-3 flex justify-center">
              <button
                onClick={handleOfferButtonClick}
                disabled={!unlocked}
                aria-disabled={!unlocked}
                className={`group inline-flex items-center justify-center rounded-xl border-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition
                      ${
                        unlocked
                          ? "border-[#FFA500] bg-[#141314] text-[#FFA500] hover:bg-[#FFA500] hover:text-black"
                          : "border-white/20 bg-black/40 text-white/60 cursor-not-allowed opacity-60"
                      }`}
              >
                {unlocked ? (
                  <>
                    <span className="mr-2">OFFER UNLOCKED!</span>
                    <span className="underline group-hover:no-underline">
                      Click here
                    </span>
                  </>
                ) : (
                  <>
                    Offer unlocks in{" "}
                    <span className="ml-1 text-[#FFA500] font-semibold">
                      {Math.floor(secondsLeft / 60)}m {secondsLeft % 60}s
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ===== OFFER (only after button click) ===== */}
        {stage === "offer" && (
          <>
            <div id="offer-start" />
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
                    <h2 className="text-2xl lg:text-[44px] leading-tight lg:leading-[100%] font-bold tracking-wide uppercase mt-5 mb-10">
                      Independent Consultant
                    </h2>
                    <hr className="h-[6px] w-[90%] mx-auto mt-4 bg-white" />
                    <div className="text-lg md:text-2xl lg:leading-[100%] mt-4 lg:mt-8 mx-auto text-center max-w-3xl">
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
                    </div>
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

            {/* Points + headline + offer video with its OWN controls */}
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
                      <br /> $50,000 – $150,000 a year.
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
                    <DigitalClock minutes={53} seconds={0} />
                  </div>

                  <div className="relative text-center py-[100px] px-5 border-2 border-[#3C3C3C] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[50px] w-full mx-auto">
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

                  {/* Offer CTA */}
                  <div className="text-center z-20 relative pointer-events-auto mt-2">
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

              {/* ===== OFFER VIDEO (independent controls) ===== */}
              <div className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center w-[95%] lg:w-full mx-auto">
                <div className="text-2xl md:text-2xl lg:text-[44px] lg:leading-[100%] mt-10 max-w-[680px] mx-auto text-center text-white">
                  Watch this short video to
                  <br /> see how we do it
                </div>

                <div className="w-full max-w-[980px] mt-6 md:mt-8 lg:mt-12">
                  <div className="relative rounded-[17px] md:rounded-[35px] lg:rounded-[15px] overflow-hidden h-[240px] sm:h-[300px] md:h-[420px] lg:h-[440px] bg-black">
                    <iframe
                      ref={offerIframeRef}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        readyOffer ? "opacity-100" : "opacity-0"
                      } pointer-events-none`}
                      src="https://player.vimeo.com/video/1113015239?muted=1&loop=1&playsinline=1&autopause=0"
                      title="How We Do It"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      onLoad={() => setReadyOffer(true)}
                    />

                    {needsFirstTapOffer && readyOffer && (
                      <div
                        onClick={handleFirstTapOffer}
                        className="absolute inset-0 z-20 cursor-pointer"
                        aria-hidden
                        title="Tap to play"
                      />
                    )}

                    {readyOffer && !needsFirstTapOffer && (
                      <div className="absolute bottom-3 right-3 z-20 flex gap-2 pointer-events-auto">
                        <button
                          onClick={togglePlayOffer}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={
                            isPlayingOffer ? "Pause video" : "Play video"
                          }
                        >
                          {isPlayingOffer ? "⏸ Pause" : "▶ Play"}
                        </button>
                        <button
                          onClick={toggleMuteOffer}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={
                            mutedOffer ? "Unmute video" : "Mute video"
                          }
                        >
                          {mutedOffer ? "🔊 Unmute" : "🔇 Mute"}
                        </button>
                        <button
                          onClick={toggleFullscreenOffer}
                          className="rounded-full bg-black/60 text-white text-xs md:text-sm px-3 py-1.5"
                          aria-label={
                            isFullscreenOffer ? "Exit Fullscreen" : "Fullscreen"
                          }
                        >
                          ⛶ {isFullscreenOffer ? "Exit" : "Fullscreen"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <GradientButton>I’m in – lets Go!</GradientButton>
              </div>

              <div className="bg-gradient-to-b from-[#141314] to-[#272526] h-full">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 lg:pt-24">
                  <SixFigureSwitch />
                </div>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 w-[95%] lg:w-full mx-auto pb-4">
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
                    <span className="font-bold">$10M+ programmes</span>.
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
                    at $400/day. Multiple government contracts since.
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
                    Turned mid-career stagnation into $900/day independence and
                    freedom.
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
