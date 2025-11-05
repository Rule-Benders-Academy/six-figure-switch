/* eslint-disable */
"use client";

import React from "react";
import proofImage from "../images/mac.png";

const YellowBullet = () => (
  <span className="inline-block w-2 h-2 mt-3 flex-shrink-0 rounded-full bg-[#ffdc4a]" />
);

const IncomeProofSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-950"
      aria-label="Proof of results"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* ====== HEADER ====== */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-yellow-300/70 bg-yellow-50 px-3 py-1 text-xs font-semibold text-neutral-800">
            PROOF OF RESULTS
          </span>
          <h2 className="mt-4 text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            And made me over £1,000,000+ in personal income
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Here’s real proof and what it takes to get there.
          </p>
        </div>

        {/* ====== IMAGE ====== */}
        <div className="mt-10 mx-auto max-w-2xl rounded-3xl overflow-hidden">
          <img
            src={proofImage.src}
            alt="Earnings proof"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* ====== REMEMBER LIST ====== */}
        <div className="mt-16 mx-auto max-w-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 text-left">
            REMEMBER THERE’S…
          </h3>

          <ul className="mt-6 space-y-4 text-left">
            <li className="flex items-start gap-3 text-base sm:text-xl leading-relaxed text-neutral-800">
              <YellowBullet />
              <span>
                No need to quit your job or industry — start where you are.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-xl leading-relaxed text-neutral-800">
              <YellowBullet />
              <span>
                No need to build a personal brand, grow followers, or launch a
                website.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-xl leading-relaxed text-neutral-800">
              <YellowBullet />
              <span>
                No endless CV drops, recruiter chasing, or begging for roles.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-xl leading-relaxed text-neutral-800">
              <YellowBullet />
              <span>No risky startup or “hustle grind”.</span>
            </li>
          </ul>
        </div>

        {/* ====== CTA (YELLOW BUTTON) ====== */}
        <div className="mt-12 text-center">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center rounded-xl bg-[#ffdc4a] px-8 py-3 text-base sm:text-lg font-semibold text-black shadow-sm hover:bg-[#f4cf38] focus:outline-none focus:ring-2 focus:ring-[#ffdc4a] transition-all duration-200"
          >
            Start your 90-day plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncomeProofSection;
