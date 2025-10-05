/* eslint-disable */
"use client";

import React from "react";

const TrendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-neutral-900"
  >
    <path
      d="M4 16l6-6 4 4 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CoinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-neutral-900"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fontSize="10"
      fontFamily="system-ui, ui-sans-serif"
      className="fill-current"
    >
      £
    </text>
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
      className="fill-none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="11" cy="10" r="6" className="fill-current" />
  </svg>
);

const POINTS = [
  {
    title: "The market has moved",
    icon: <TrendIcon />,
    body: "UK market data 2025 is clear: BA, PM, and Change roles are already contracting at £600–£1,200/day. More professionals are leaving perm jobs every month to double or triple their income.",
  },
  {
    title: "ROI in a week",
    icon: <CoinIcon />,
    body: "The course costs less than one day on contract — most students cover it back in their first week.",
  },
  {
    title: "Not theory — your move",
    icon: <SwitchIcon />,
    body: "This isn’t theory. It’s the market right now. The only question: will you stay capped in employment, or make the switch?",
  },
];

const MarketThreePoints: React.FC = () => {
  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Market proof"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Intro block (matches other section style: big, centered, black title) */}
        <header className="text-center">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            STILL SCEPTICAL?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
            It’s natural. If you’ve been on a £60–90K salary, the idea of
            earning £800–£1,200/day can sound unrealistic.
          </p>
          <p className="mt-3 text-lg sm:text-xl text-neutral-800 leading-relaxed">
            <span className="font-semibold">
              But here’s what the UK market data for 2025 actually shows:
            </span>
          </p>
        </header>

        {/* 1-column stack of cards — consistent with other cards (top gradient, rounded, border, shadow) */}
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

        {/* CTA (consistent style) */}
        <div className="mt-10 text-center">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Make the switch
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketThreePoints;
