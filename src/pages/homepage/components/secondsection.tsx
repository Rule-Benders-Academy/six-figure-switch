/* eslint-disable */
"use client";

import React from "react";
import outcomesHero from "../images/product-hero.png";

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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8  ">
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
        <div className="mt-4 text-center py-6">
          <ul className="max-w-3xl mx-auto text-base sm:text-xl">
            <li>
              <strong className="font-bold">A packaged offer</strong> clients
              buy (positioned at £600–£1,200/day).
            </li>
            <li>
              <strong className="font-bold">A consulting CV & LinkedIn</strong>{" "}
              that win interviews in the UK market.
            </li>
            <li>
              <strong className="font-bold">The scripts & steps</strong> to land
              your first contract in 90 days.
            </li>
          </ul>

          <p className="mt-6 text-sm sm:text-base text-neutral-600">
            100+ career changers started here
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <a
              href="#plan"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#ffdc4a] px-7 py-3 text-base sm:text-lg font-semibold text-neutral-950 shadow-sm transition hover:bg-[#f0cd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffdc4a]/60"
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
