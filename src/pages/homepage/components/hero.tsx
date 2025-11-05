/* eslint-disable */
"use client";

import React from "react";

type HeroProps = {
  vimeoId?: string;
};

const Hero: React.FC<HeroProps> = ({ vimeoId = "1113015239" }) => {
  return (
    <section
      className="w-full bg-white text-neutral-950"
      aria-label="Course Hero"
    >
      {/* Full-viewport; centers content; scales nicely on mobile/tablet/sm */}
      <div
        id="offer-start"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[100svh] sm:min-h-screen flex items-center"
      >
        <div className="w-full">
          {/* Headline */}
          <h1
            className="mx-auto max-w-6xl text-center font-extrabold tracking-tight uppercase leading-tight
                         text-[clamp(24px,6vw,42px)] sm:text-[clamp(28px,5vw,48px)] md:text-[clamp(32px,4vw,3.8rem)] mt-6"
          >
            BECOME AN £600–£1,200/DAY CONSULTANT IN 90 DAYS — USING THE SKILLS
            YOU ALREADY HAVE.
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 mx-auto max-w-3xl text-center text-[15px] sm:text-lg md:text-2xl text-neutral-700">
            No MBA. No “personal brand”. No quitting your industry. Just a
            proven UK-specific system.
          </p>

          {/* Video: keeps everything fitting on 1 screen on desktop; fully fluid on mobile/tablet */}
          <div className="mt-5 sm:mt-7">
            <div
              className="
                relative mx-auto w-full
                max-w-[92vw] sm:max-w-[640px] md:max-w-[760px] lg:max-w-[920px]
                rounded-xl  border-neutral-200 shadow-sm overflow-hidden bg-white
              "
            >
              <div className="aspect-[16/9]">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&playsinline=1&autopause=0`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  loading="lazy"
                  allowFullScreen
                  title="Six Figure Switch — overview"
                />
              </div>
            </div>
          </div>

          {/* Supporting lines (slightly smaller on phones; strong but not overwhelming on tablet/sm) */}
          <div className="px-4 sm:px-6 lg:px-8 py-3 mx-auto text-center">
            <p className="mx-auto max-w-4xl text-lg sm:text-xl md:text-4xl font-semibold leading-snug mt-4">
              WE TURN YOUR BA/PM/TECH/CHANGE EXPERIENCE INTO A PACKAGED
              CONSULTING OFFER, THEN SHOW YOU HOW TO LAND YOUR FIRST CONTRACT
              (AND RAISE YOUR RATE).
            </p>
          </div>

          {/* Small spacer to avoid crowding bottom safe area on mobile */}
          <div className="h-3 sm:h-5" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
