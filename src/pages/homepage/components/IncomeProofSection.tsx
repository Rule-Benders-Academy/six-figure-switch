/* eslint-disable */
"use client";

import React from "react";
import proofImage from "../images/draft.png";

const NoIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 text-red-500 mt-0.5">
    <circle cx="10" cy="10" r="9" className="fill-red-100" />
    <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IncomeProofSection: React.FC = () => {
  return (
    <section className="w-full bg-neutral-50 text-neutral-950" aria-label="Proof of results">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Title + subtitle centered */}
        <div className="text-center">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            AND MADE ME £10,000,000+ IN PERSONAL INCOME IN OVER 10 YEARS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">here a proof</p>
        </div>

        {/* Image centered */}
        <div className="mt-8 mx-auto overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
          <img
            src={proofImage.src}
            alt="Earnings proof"
            className="mx-auto w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* LIST: block is centered, text is left-aligned */}
        <div className="mt-10 mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-neutral-700 text-left">
            REMEMBER THERE’S…
          </p>
          <ul className="mt-4 space-y-3 text-left">
            <li className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-neutral-800">
              <NoIcon />
              <span>No need to quit your job or industry and start from scratch</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-neutral-800">
              <NoIcon />
              <span>No need to build a personal brand, grow followers, or launch a website</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-neutral-800">
              <NoIcon />
              <span>No endless CV drops, recruiter chasing, or begging for roles</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-neutral-800">
              <NoIcon />
              <span>No risky startup or “hustle game”</span>
            </li>
          </ul>
        </div>

        {/* CTA centered */}
        <div className="mt-8 text-center">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Start your 90-day plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncomeProofSection;
