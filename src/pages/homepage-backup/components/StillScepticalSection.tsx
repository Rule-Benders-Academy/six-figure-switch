/* eslint-disable */
"use client";

import React from "react";

/* --- Icons (all path-based, no <text>, so they won't break) --- */

const TrendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-neutral-900"
  >
    <path
      d="M3 18h18M4 15l5-5 4 4 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 7h4v4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ROIIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-neutral-900"
  >
    {/* single coin */}
    <ellipse
      cx="12"
      cy="8"
      rx="6.5"
      ry="3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M5.5 8v6c0 1.93 2.91 3.5 6.5 3.5s6.5-1.57 6.5-3.5V8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* small highlight tick */}
    <path
      d="M9.5 9.25h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const SwitchIcon = () => (
  <svg
    viewBox="0 0 36 20"
    aria-hidden="true"
    className="h-6 w-9 text-neutral-900"
  >
    <rect
      x="1"
      y="1"
      width="34"
      height="18"
      rx="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* right-positioned knob to feel like “switching on” */}
    <circle cx="25" cy="10" r="6" className="fill-current" />
  </svg>
);

/* --- Content --- */

const POINTS = [
  {
    title: "The market has moved",
    icon: <TrendIcon />,
    body: "UK market data in 2025 is clear: BA, PM, and Change roles routinely contract at £600–£1,200/day. More professionals are leaving perm bands every month to double or even triple their income.",
  },
  {
    title: "ROI in a week",
    icon: <ROIIcon />,
    body: "The program costs less than a single contract day. Most students cover it in their first week of delivery.",
  },
  {
    title: "Not theory — your next move",
    icon: <SwitchIcon />,
    body: "This isn’t fluff. It’s what the market is buying right now. The only question: stay capped in employment, or make the switch?",
  },
];

const MarketThreePoints: React.FC = () => {
  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Market proof"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Intro */}
        <header className="text-center">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            STILL SCEPTICAL?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
            It’s natural. If you’ve been on a £60–90k salary, £800–£1,200/day
            can sound unrealistic.
          </p>
          <p className="mt-3 text-lg sm:text-xl text-neutral-800 leading-relaxed">
            <span className="font-semibold">
              Here’s what the UK market in 2025 actually shows:
            </span>
          </p>
        </header>

        {/* Cards */}
        <div className="mt-8 space-y-6">
          {POINTS.map((p, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-xl sm:text-2xl leading-relaxed text-neutral-700">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center rounded-xl bg-[#ffdc4a] px-6 py-3 text-base sm:text-lg font-semibold text-black shadow-sm hover:bg-[#f0cd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffdc4a]/60 transition"
          >
            Start Your 90-Day Plan for £1450
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketThreePoints;
