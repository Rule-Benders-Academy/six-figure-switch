/* eslint-disable */
"use client";

import React from "react";
import draftImage from "../images/product.png";
type SwitchSectionProps = {
  className?: string;
};

const SwitchSection: React.FC<SwitchSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-[#ffdc4a] rounded-[40px] lg:rounded-[80px] text-neutral-950 ${className}`}
      aria-label="Six Figure Switch Overview"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-2xl lg:text-4xl font-bold tracking-tight">
          What Six Figure Switch Does For You
        </h2>

        {/* Sub Title */}
        <p className="mt-4 text-center text-lg sm:text-6xl font-extrabold max-w-3xl mx-auto leading-relaxed sm:leading-[1.15]">
          WE PRODUCTISE YOUR SKILLS INTO A SIMPLE CONSULTING OFFER AND HELP YOU
          SELL IT.
        </p>

        {/* Description */}
        <p className="mt-4 text-center text-base sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          By Day 90 you’ll have: a packaged offer, consulting CV/LinkedIn, a
          pipeline and (for most students) your first contract.
        </p>

        {/* Image */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ffdc4a]">
          <img
            src={draftImage.src}
            alt="Six Figure Switch program preview"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Rating */}
        {/* Rating (no black background; compact pill) */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-sm sm:text-base text-neutral-700">
            Six Figure Switch courses are rated:
          </span>
          <div
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5"
            aria-label="Course rating 4.9 out of 5"
          >
            {/* Star icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500"
              aria-hidden="true"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.853 1.417 8.263L12 19.771l-7.417 4.095L6 15.603 0 9.75l8.332-1.595z" />
            </svg>
            <span className="text-base sm:text-xl font-bold">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchSection;
