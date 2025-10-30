/* eslint-disable */
"use client";

import React from "react";

const NinetyDayPlanSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-neutral-50 text-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:gap-14">
          {/* Headline */}
          <header className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              A proven 90-day system to reposition your skills, land your first
              contract, and scale your income.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700">
              Watch the video below to see the full breakdown.
            </p>
          </header>

          {/* Video */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-black/5 shadow-sm">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1113012539?muted=1&loop=1&playsinline=1&autopause=0"
                title="Program breakdown video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Subhead + CTA */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg sm:text-xl font-semibold">
              You don’t need new credentials. You need a new frame and a system.
            </p>

            <a
              href="/checkout"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#ffdc4a] px-6 py-3 text-base sm:text-lg font-semibold text-neutral-950 shadow-sm hover:bg-[#f0cd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffdc4a]/60"
            >
              Book your free consulting game-plan call with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinetyDayPlanSection;
