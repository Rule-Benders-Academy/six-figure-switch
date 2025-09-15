"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Drawer from "../../_components/Drawer/Drawer";
import HeroBg from "@/_assets/landing-hero-bg.png";
import Bonus from "@/_assets/bonus-offer.png";

import MainVideo from "./MainVideo";
import OfferSection from "./OfferSection";
import { fbTrack } from "@/lib/fb";

type Stage = "video" | "offer";

// Require 20 minutes of watch time; adjust as needed.
const THRESHOLD_SECONDS = 1200;

const Page = () => {
  const [stage, setStage] = useState<Stage>("video");
  const [secondsLeft, setSecondsLeft] = useState(THRESHOLD_SECONDS);
  const [unlocked, setUnlocked] = useState(false);

  // hold forceCountry so we can use it in effects and tracking
  const searchParams = useSearchParams();
  const [forceCountry, setForceCountry] = useState<string | null>(null);

  const gateTimerRef = useRef<number | null>(null);
  const gateStartedRef = useRef(false);

  // Capture forceCountry from URL and persist
  useEffect(() => {
    const urlValue = searchParams.get("forceCountry");
    // Prefer URL param if present; otherwise try sessionStorage
    const stored =
      typeof window !== "undefined"
        ? sessionStorage.getItem("forceCountry")
        : null;
    const value = urlValue ?? stored;

    if (value) {
      setForceCountry(value);
      try {
        sessionStorage.setItem("forceCountry", value);
      } catch {}
    }
  }, [searchParams]);

  // Page view
  useEffect(() => {
    fbTrack("PageView", {
      content_name: "MasterclassLanding",
      ...(forceCountry ? { forceCountry } : {}),
    });
  }, [forceCountry]);

  // Start countdown once the video is first played
  const startGateTimer = useCallback(() => {
    if (gateStartedRef.current || unlocked) return;
    gateStartedRef.current = true;

    fbTrack("MC_WatchStart", {
      required_seconds: THRESHOLD_SECONDS,
      ...(forceCountry ? { forceCountry } : {}),
    });

    // Use saved remaining time if available
    let s = Number(sessionStorage.getItem("remainingTime") ?? secondsLeft);
    setSecondsLeft(s);

    gateTimerRef.current = window.setInterval(() => {
      s -= 1;
      setSecondsLeft(s);
      sessionStorage.setItem("remainingTime", String(s));

      if (s <= 0) {
        if (gateTimerRef.current) {
          window.clearInterval(gateTimerRef.current);
          gateTimerRef.current = null;
        }
        setUnlocked(true);
        sessionStorage.setItem("unlocked", "true");
        fbTrack("MC_WatchGateUnlocked", {
          via: "timer",
          ...(forceCountry ? { forceCountry } : {}),
        });
      }
    }, 1000);
  }, [secondsLeft, unlocked, forceCountry]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (gateTimerRef.current) {
        window.clearInterval(gateTimerRef.current);
        gateTimerRef.current = null;
      }
    };
  }, []);

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

  // Restore from sessionStorage
  useEffect(() => {
    const savedTime = sessionStorage.getItem("remainingTime");
    const isUnlocked = sessionStorage.getItem("unlocked");

    if (savedTime) setSecondsLeft(Number(savedTime));
    if (isUnlocked === "true") {
      setUnlocked(true);
      setStage("offer");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen !font-jakarta">
        <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-2 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
          {/* Background image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src={HeroBg}
              alt=""
              className="w-full h-full object-cover opacity-70"
              priority
            />
          </div>

          <div className="relative lg:w-[80%] max-w-[98%] mx-auto text-center">
            {/* Heading + bonus image */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-8 text-center">
              <div className="flex justify-center">
                <div className="relative w-32 h-32 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                  <Image
                    src={Bonus}
                    alt="Bonus"
                    fill
                    className="object-contain p-1"
                    sizes="160px"
                    priority
                  />
                </div>
              </div>

              <div className="md:w-auto">
                <h2 className="text-xl sm:text-2xl lg:text-[24px] leading-tight font-bold tracking-wide uppercase mt-4 md:mt-0">
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

            {/* ==== FIXED WRAPPER HERE ==== */}
            <div className="mx-auto w-full max-w-3xl mt-7 lg:mt-2">
              <div className="relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-2xl md:rounded-[35px] lg:rounded-[30px]">
                <div className="p-3 md:p-5 lg:p-6">
                  {/* Video */}
                  <MainVideo formVisible={false} onFirstPlay={startGateTimer} />

                  {/* Timer / status */}
                  <p className="text-center text-xs md:text-sm opacity-80 mt-3">
                    {stage === "video" && !unlocked ? (
                      <>
                        Watch the video to unlock the rest (
                        <span className="text-[#FFA500] font-semibold">
                          {Math.max(0, Math.floor(secondsLeft / 60))}m{" "}
                          {Math.max(0, secondsLeft % 60)}s
                        </span>
                        )
                      </>
                    ) : (
                      "You’re good to go."
                    )}
                  </p>

                  {/* Country badge when param is present */}
                  {forceCountry && (
                    <p className="mt-2 text-center text-[11px] md:text-xs text-white/70">
                      Viewing content tailored for{" "}
                      <span className="font-semibold">{forceCountry}</span>
                    </p>
                  )}
                </div>

                <div
                  className="pointer-events-none absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                  style={{ filter: "blur(24px)" }}
                />
              </div>
            </div>
            {/* ============================= */}

            {/* Offer block */}
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

            {/* Refresh tip */}
            {stage === "video" && !unlocked && (
              <div className="lg:w-[50%] relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-xl md:rounded-[35px] lg:rounded-[10px] mt-3 mx-auto p-2">
                <span className="text-white font-semibold">
                  Please refresh the page if the video is not loading
                </span>
              </div>
            )}

            {/* Offer button */}
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
                      {Math.max(0, Math.floor(secondsLeft / 60))}m{" "}
                      {Math.max(0, secondsLeft % 60)}s
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {stage === "offer" && <OfferSection />}
      </div>

      <Drawer />
    </>
  );
};

export default Page;