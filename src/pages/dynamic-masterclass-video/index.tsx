/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import Drawer from "../../_components/Drawer/Drawer";
import TrustedCompaniesMC from "@/_components/TrustedCompaniesMC/TrustedCompaniesMC";
import MainVideo from "./MainVideo";
import OfferSection from "./homepage/index.tsx";
import { fbTrack } from "@/lib/fb";

type Stage = "video" | "offer";

const copies = [
  {
    title:
      "Where The Real £1,000/Day Consulting Contracts Hide In The UK Market — And How To Access Them",
    subtitle:
      "Learn the proven system UK professionals use to double or triple their income without new certifications, side hustles, or years of waiting.",
  },
  {
    title:
      "Stuck On £60–90k Salaries? Discover How To Reframe Your CV & LinkedIn To Land £1,000/Day Consulting Contracts",
    subtitle:
      "The positioning shift that recruiters and clients can’t ignore — proven inside this masterclass.",
  },
  {
    title:
      "The 3 Levers UK Professionals Use To Jump From £300–£400/Day To £800–£1,200/Day Consulting Contracts",
    subtitle:
      "Proven framework explained step by step inside this exclusive masterclass.",
  },
  {
    title:
      "Ex-£400/Day Professional Reveals The Exact System He Used To Land £800–£1,200/Day Consulting Contracts",
    subtitle:
      "Proven to work in the UK market across industries, roles, and seniority levels.",
  },
];

// Apps Script endpoint (kept for copy selection logging)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwRbk52F9x4dKmY3LYwwaD0IbL0nZfkKYmuHc_PX0hn5QO3z0XwhgZMCIqiYBWRma30Yg/exec";

const SENT_KEY = "copy_selected_email_sent";
const SS_INDEX_KEY = "copyIndex";
const SS_TITLE_KEY = "copyTitle";
const LS_INDEX_PERSIST = "copyIndexPersistent";
const LS_TITLE_PERSIST = "copyTitlePersistent";

const UNLOCK_SECONDS = 1500; // 25:00

const Page = () => {
  // Start directly at the video stage, no form
  const [stage, setStage] = useState<Stage>("video");
  const [unlocked, setUnlocked] = useState(false);
  const [selectedCopy, setSelectedCopy] = useState(copies[0]);
  const [watchedSeconds, setWatchedSeconds] = useState<number>(0);

  // Session-sticky headline (randomize once per session)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedIdxRaw = sessionStorage.getItem(SS_INDEX_KEY);
    const storedTitle = sessionStorage.getItem(SS_TITLE_KEY);
    let idxToUse: number | null = null;

    if (storedIdxRaw !== null) {
      const num = parseInt(storedIdxRaw, 10);
      if (!Number.isNaN(num) && copies[num]) idxToUse = num;
      else if (storedTitle) {
        const found = copies.findIndex((c) => c.title === storedTitle);
        if (found >= 0) idxToUse = found;
      }
    } else if (storedTitle) {
      const found = copies.findIndex((c) => c.title === storedTitle);
      if (found >= 0) idxToUse = found;
    }

    if (idxToUse === null) {
      idxToUse = Math.floor(Math.random() * copies.length);
      const chosen = copies[idxToUse];
      sessionStorage.setItem(SS_INDEX_KEY, String(idxToUse));
      sessionStorage.setItem(SS_TITLE_KEY, chosen.title);
      localStorage.setItem(LS_INDEX_PERSIST, String(idxToUse));
      localStorage.setItem(LS_TITLE_PERSIST, chosen.title);

      if (!sessionStorage.getItem(SENT_KEY)) {
        try {
          fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              event: "copy_selected",
              copyIndex: idxToUse,
              title: chosen.title,
              timestamp: new Date().toISOString(),
              pageUrl: window.location.href,
              ua: navigator.userAgent,
            }),
          });
        } finally {
          sessionStorage.setItem(SENT_KEY, "true");
        }
      }
    }

    setSelectedCopy(copies[idxToUse]);
  }, []);

  // Page view tracking
  useEffect(() => {
    fbTrack("PageView", { content_name: "MasterclassLanding" });
  }, []);

  // Restore unlocked state and any saved progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    const copyIndex =
      sessionStorage.getItem(SS_INDEX_KEY) ??
      localStorage.getItem(LS_INDEX_PERSIST);
    const copyTitle =
      sessionStorage.getItem(SS_TITLE_KEY) ??
      localStorage.getItem(LS_TITLE_PERSIST);
    if (copyIndex && copyTitle) {
      const slug = String(copyTitle)
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60);
      const key = `mc_video_progress_${copyIndex}_${slug || "no-title"}`;
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const seconds = /^\d+(\.\d+)?$/.test(raw)
            ? parseFloat(raw)
            : JSON.parse(raw)?.seconds;
          if (typeof seconds === "number" && seconds >= 0) {
            setWatchedSeconds(seconds);
            if (seconds >= UNLOCK_SECONDS) setUnlocked(true);
          }
        }
      } catch {}
    }
    const unlockedSaved = sessionStorage.getItem("unlocked") === "true";
    if (unlockedSaved) setUnlocked(true);
  }, []);

  const handleVideoUnlock = () => {
    setUnlocked(true);
    if (typeof window !== "undefined")
      sessionStorage.setItem("unlocked", "true");
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

  const renderTwoLines = (text: string) => {
    const parts = text.split("—");
    if (parts.length === 1) return <span className="block">{text}</span>;
    return (
      <>
        <span className="block">{parts[0].trim()}</span>
        <span className="block">{parts.slice(1).join("—").trim()}</span>
      </>
    );
  };

  const secondsLeft = Math.max(0, UNLOCK_SECONDS - Math.floor(watchedSeconds));
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div>
      <div className="min-h-screen !font-jakarta bg-white justify-evenly">
        <section className="relative text-black  overflow-hidden flex items-center ">
          <div className="relative lg:w-[80%] max-w-[98%] mx-auto text-center">
            {/* Bigger Title (session-sticky) */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-bold tracking-wide uppercase mt-16 mb-6 lg:mt-6">
              {renderTwoLines(selectedCopy.title)}
            </h2>

            <div className="relative border-2 border-neutral-300 bg-white rounded-2xl md:rounded-[35px] lg:rounded-[30px] mt-5 lg:w-[80%] mx-auto shadow-sm">
              <div className="p-3 md:p-5 lg:p-6">
                {/* Video always visible now */}
                <MainVideo formVisible={false} onUnlock={handleVideoUnlock} />

                <p className="text-center text-base md:text-lg opacity-90 mt-4 leading-snug">
                  {renderTwoLines(selectedCopy.subtitle)}
                </p>
              </div>
            </div>

            {/* Dynamic unlock UI */}
            <div className="mt-4 flex justify-center">
              {unlocked ? (
                <button
                  onClick={handleOfferButtonClick}
                  className="group my-4 inline-flex items-center justify-center rounded-xl lg:text-2xl border-2 px-12 py-8 text-sm font-bold uppercase tracking-wide transition border-[#FFA500] bg-[#141314] text-[#FFA500] hover:bg-[#FFA500] hover:text-black"
                >
                  <span className="mr-2">
                    I’m Done With £60–90k Salaries - What’s the Alternative?
                  </span>
                </button>
              ) : (
                <div className="text-black/70"></div>
              )}
            </div>
          </div>
        </section>
        <TrustedCompaniesMC />
        {stage === "offer" && <OfferSection />}
      </div>
      <Drawer />
    </div>
  );
};

export default Page;
