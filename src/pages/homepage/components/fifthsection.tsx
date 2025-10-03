/* eslint-disable */
"use client";

import React from "react";
import draftImage from "../images/draft.png"; // replace with real illustration/photo

type SwitchSectionProps = {
  className?: string;
};

const SwitchSection: React.FC<SwitchSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-white text-neutral-950 ${className}`}
      aria-label="Six Figure Switch Overview"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
          What Six Figure Switch Does For You
        </h2>

        {/* Sub Title */}
        <p className="mt-4 text-center text-lg sm:text-xl font-semibold text-neutral-800 max-w-3xl mx-auto">
          WE PRODUCTISE YOUR SKILLS INTO A SIMPLE CONSULTING OFFER AND HELP YOU
          SELL IT.
        </p>

        {/* Description */}
        <p className="mt-4 text-center text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          By Day 90 you’ll have: a packaged offer, consulting CV/LinkedIn, a
          pipeline and (for most students) your first contract.
        </p>

        {/* Image */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
          <img
            src={draftImage.src}
            alt="Six Figure Switch program preview"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Rating */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-sm sm:text-base text-neutral-600">
            Six Figure Switch courses are rated:
          </span>
          <div className="mt-2 flex items-center space-x-2">
            {/* Star icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-yellow-500"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.853 1.417 8.263L12 19.771l-7.417 4.095L6 15.603 0 9.75l8.332-1.595z" />
            </svg>
            <span className="text-lg sm:text-xl font-bold">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchSection;
