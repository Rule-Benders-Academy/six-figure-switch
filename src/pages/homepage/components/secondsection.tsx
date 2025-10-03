/* eslint-disable */
"use client";

import React from "react";
import outcomesHero from "../images/draft.png";

type OutcomesSectionProps = {
  imageAlt?: string;
  className?: string;
};

const OutcomesSection: React.FC<OutcomesSectionProps> = ({
  imageAlt = "Outcomes preview",
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-white text-neutral-950 ${className}`}
      aria-label="Outcomes Section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Big image */}
        <div className="mx-auto max-w-5xl">
          <img
            src={outcomesHero.src}
            alt={imageAlt}
            className="w-full h-auto rounded-2xl sm:rounded-3xl object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="mt-8 text-center">
          <ul className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg font-medium">
            <li>
              A packaged offer clients buy (positioned at £600–£1,200/day).
            </li>
            <li>
              A consulting CV & LinkedIn that win interviews in the UK market.
            </li>
            <li>The scripts & steps to land your first contract in 90 days.</li>
          </ul>

          <p className="mt-6 text-sm sm:text-base text-neutral-600">
            100+ career changers started here
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <a
              href="#plan"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-wide bg-neutral-950 text-white hover:bg-neutral-800 transition"
            >
              Start your 90 day plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
