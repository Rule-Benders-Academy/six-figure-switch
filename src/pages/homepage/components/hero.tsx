/* eslint-disable */
"use client";

import React from "react";

type HeroProps = {
  videoSrc?: string; // fallback mp4 if needed
  posterSrc?: string;
  vimeoId?: string; // add Vimeo video id
};

const Hero: React.FC<HeroProps> = ({
  videoSrc = "/videos/course-hero.mp4",
  posterSrc = "/images/course-hero-poster.jpg",
  vimeoId = "1113015239", // default to your provided id
}) => {
  return (
    <section
      className="bg-white text-neutral-950 w-full"
      aria-label="Course Hero"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Headline */}
        <h1 className="font-bold tracking-tight uppercase leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center">
          BECOME AN £600–£1,200/DAY CONSULTANT IN 90 DAYS - USING THE SKILLS YOU
          ALREADY HAVE.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-center text-base sm:text-lg lg:text-xl text-neutral-700 max-w-3xl mx-auto">
          No MBA. No “personal brand”. No quitting your industry. Just a proven
          UK-specific system.
        </p>

        {/* VSL1 Vimeo Player */}
        <div className="mt-6 sm:mt-8">
          <div className="relative mx-auto max-w-4xl rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-sm overflow-hidden bg-white">
            <div className="aspect-video">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?muted=1&loop=1&playsinline=1&autopause=0`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <p className="text-center text-sm sm:text-base lg:text-lg font-semibold leading-snug">
                WE TURN YOUR BA/PM/TECH/CHANGE EXPERIENCE INTO A PACKAGED
                CONSULTING OFFER, THEN SHOW YOU HOW TO LAND YOUR FIRST CONTRACT
                (AND RAISE YOUR RATE).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
