"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Drawer from "../../_components/Drawer/Drawer";
import HeroBg from "@/_assets/landing-hero-bg.png";
import Bonus from "@/_assets/bonus-offer.png";

import MainVideo from "./MainVideo";
import SignupForm from "./SignupForm";
import OfferSection from "./OfferSection";
import { fbTrack } from "@/lib/fb";

type Stage = "form" | "video" | "offer";

// For prod use 1200 (20 mins). Using 10 here for quick testing.
const THRESHOLD_SECONDS = 1200;

const Page = () => {
  const [stage, setStage] = useState<Stage>("form");
  const [formVisible, setFormVisible] = useState(true); // Controls visibility of the form
  const [secondsLeft, setSecondsLeft] = useState(THRESHOLD_SECONDS);
  const [unlocked, setUnlocked] = useState(false);

  const gateTimerRef = useRef<number | null>(null);
  const gateStartedRef = useRef(false);

  // SPEC §4 — MC landing page view
  useEffect(() => {
    fbTrack("PageView", { content_name: "MasterclassLanding" });
  }, []);

  // Stable callback for the countdown gate
  const startGateTimer = useCallback(() => {
    if (gateStartedRef.current) return;
    gateStartedRef.current = true;

    let s = secondsLeft; // Use saved or initial secondsLeft
    setSecondsLeft(s);

    gateTimerRef.current = window.setInterval(() => {
      s -= 1;
      setSecondsLeft(s);
      sessionStorage.setItem("remainingTime", String(s)); // Save to sessionStorage

      if (s <= 0) {
        if (gateTimerRef.current) {
          window.clearInterval(gateTimerRef.current);
          gateTimerRef.current = null;
        }
        setUnlocked(true);
        sessionStorage.setItem("unlocked", "true"); // Mark as unlocked
      }
    }, 1000);
  }, [secondsLeft]);

  useEffect(() => {
    return () => {
      if (gateTimerRef.current) {
        window.clearInterval(gateTimerRef.current);
        gateTimerRef.current = null;
      }
    };
  }, []);

  const handleUnlockedFromForm = () => {
    setFormVisible(false);
    setStage("video");
  };

  const handleOfferButtonClick = () => {
    if (!unlocked) return;
    setStage("offer");
    requestAnimationFrame(() => {
      document
        .getElementById("offer-start")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // Check sessionStorage to determine if the user has signed up and the time remaining
  useEffect(() => {
    const isSignedUp = sessionStorage.getItem("signedUp");
    const savedTime = sessionStorage.getItem("remainingTime");
    const isUnlocked = sessionStorage.getItem("unlocked");

    if (isSignedUp === "true") {
      setFormVisible(false); // If already signed up, hide the form
    }

    if (savedTime) {
      setSecondsLeft(Number(savedTime)); // Use saved time if available
    }

    if (isUnlocked === "true") {
      setUnlocked(true); // Automatically unlock if already unlocked in previous session
      setStage("offer");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen !font-jakarta">
        <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-2 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src={HeroBg}
              alt=""
              className="w-full h-full object-cover opacity-70"
              priority
            />
          </div>

          <div className="relative lg:w-[80%] max-w-[98%] mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-8 text-center">
              <div className="flex justify-center">
                <div className="relative w-32 h-32 lg:w-24 lg:h-24 rounded-full overflow-hidden">
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

            <div className="relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-2xl md:rounded-[35px] lg:rounded-[30px] mt-7 lg:mt-2 mx-auto">
              <div className="p-3 md:p-5 lg:p-6">
                {/* Conditionally render SignupForm component */}
                {!formVisible ? null : (
                  <SignupForm onUnlocked={handleUnlockedFromForm} />
                )}

                {/* Video component */}
                <MainVideo
                  formVisible={formVisible}
                  onFirstPlay={startGateTimer}
                />

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

              <div
                className="pointer-events-none absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                style={{ filter: "blur(24px)" }}
              />
            </div>

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

        {stage === "offer" && <OfferSection />}
      </div>

      <Drawer />
    </>
  );
};

export default Page;