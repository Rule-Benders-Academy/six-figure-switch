/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Drawer from "../../_components/Drawer/Drawer";
import HeroBg from "@/_assets/landing-hero-bg.png";

import MainVideo from "./MainVideo";
import SignupForm from "./SignupForm";
import OfferSection from "./OfferSection";
import { fbTrack } from "@/lib/fb";

type Stage = "form" | "video" | "offer";

const copies = [
  {
    title:
      "Where The Real £1,000/Day Consulting Contracts Hide In The UK Market — And How To Access Them",
    subtitle:
      "Learn the proven system UK professionals use to double or triple their income — without new certifications, side hustles, or years of waiting.",
  },
  {
    title:
      "Stuck On £60–90k Salaries? Discover How To Reframe Your CV & LinkedIn — To Land £1,000/Day Consulting Contracts",
    subtitle:
      "The positioning shift that recruiters and clients can’t ignore — proven inside this masterclass.",
  },
  {
    title:
      "The 3 Levers UK Professionals Use — To Jump From £300–£400/Day To £800–£1,200/Day Consulting Contracts",
    subtitle:
      "Proven framework explained step by step — inside this exclusive masterclass.",
  },
  {
    title:
      "Ex-£400/Day Professional Reveals The Exact System He Used — To Land £800–£1,200/Day Consulting Contracts",
    subtitle:
      "Proven to work in the UK market — across industries, roles, and seniority levels.",
  },
];

const Page = () => {
  const [stage, setStage] = useState<Stage>("form");
  const [formVisible, setFormVisible] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [selectedCopy, setSelectedCopy] = useState(copies[0]);

  // Randomize copy once on load
  useEffect(() => {
    const idx = Math.floor(Math.random() * copies.length);
    setSelectedCopy(copies[idx]);
  }, []);

  // Page view tracking
  useEffect(() => {
    fbTrack("PageView", { content_name: "MasterclassLanding" });
  }, []);

  // Restore signedUp/unlocked state from sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const signedUp = sessionStorage.getItem("signedUp") === "true";
    const unlockedSaved = sessionStorage.getItem("unlocked") === "true";

    if (signedUp) {
      setFormVisible(false);
      setStage("video");
    }
    if (unlockedSaved) {
      setUnlocked(true);
    }
  }, []);

  const handleUnlockedFromForm = () => {
    setFormVisible(false);
    setStage("video");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("signedUp", "true");
    }
    fbTrack("Lead", { content_name: "MasterclassOptin" });
  };

  const handleVideoUnlock = () => {
    setUnlocked(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("unlocked", "true");
    }
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

  // helper to split into 2 lines
  const renderTwoLines = (text: string) => {
    const parts = text.split("—");
    if (parts.length === 1) {
      return <span className="block">{text}</span>;
    }
    return (
      <>
        <span className="block">{parts[0].trim()}</span>
        <span className="block">{parts.slice(1).join("—").trim()}</span>
      </>
    );
  };

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
            {/* Title (always visible, double-line) */}
            <h2 className="text-xl sm:text-2xl lg:text-[24px] leading-tight font-bold tracking-wide uppercase">
              {renderTwoLines(selectedCopy.title)}
            </h2>

            <div className="relative border-2 border-[#747373] bg-[#FFFFFF12]  rounded-2xl md:rounded-[35px] lg:rounded-[30px] mt-7 lg:w-[80%] lg:mt-2 mx-auto">
              <div className="p-3 md:p-5 lg:p-6">
                {/* Show signup form when formVisible is true */}
                {formVisible && (
                  <SignupForm onUnlocked={handleUnlockedFromForm} />
                )}

                {/* Video */}
                <MainVideo
                  formVisible={formVisible}
                  onUnlock={handleVideoUnlock}
                />

                {/* Subtitle shows as soon as video is showing */}
                {!formVisible && (
                  <p className="text-center text-base md:text-lg opacity-90 mt-4 leading-snug">
                    {renderTwoLines(selectedCopy.subtitle)}
                  </p>
                )}

                {/* Helper text when still locked */}
                {formVisible && (
                  <p className="text-center text-xs md:text-sm opacity-80 mt-3">
                    Sign up to unlock the masterclass.
                  </p>
                )}
              </div>

              <div
                className="pointer-events-none absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                style={{ filter: "blur(24px)" }}
              />
            </div>

            <div className="mt-3 flex justify-center">
              {unlocked ? (
                <button
                  onClick={handleOfferButtonClick}
                  className="group inline-flex items-center justify-center rounded-xl border-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition border-[#FFA500] bg-[#141314] text-[#FFA500] hover:bg-[#FFA500] hover:text-black"
                >
                  <span className="mr-2">OFFER UNLOCKED!</span>
                  <span className="underline group-hover:no-underline">
                    Click here
                  </span>
                </button>
              ) : (
                <div className="text-white/60">Offer unlocks at 25:00</div>
              )}
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