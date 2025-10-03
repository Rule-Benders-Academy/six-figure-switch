/* eslint-disable */
"use client";

import React from "react";
import draftImage from "../images/draft.png"; // big image
import photo2013 from "../images/draft.png"; // replace with your 2013 image
import photo2020 from "../images/draft.png"; // replace with your 2020 image

type FourthSectionProps = {
  className?: string;
};

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4 mt-1.5 flex-shrink-0 text-neutral-900"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l3.293 3.293 6.543-6.543a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur">
    {children}
  </span>
);

const FourthSection: React.FC<FourthSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full bg-gradient-to-b from-white via-white to-neutral-50 text-neutral-950 ${className}`}
      aria-label="Fit and Founder Story"
    >
      {/* subtle divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-neutral-100/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* ====== Block 1: Fit + Bullets + Big Image ====== */}
        <div className="grid grid-cols-1  gap-10 lg:gap-14 items-center">
          {/* Left: Title + Bullets + Subtext Card */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              IS THIS YOU?
            </h2>

            <ul className="mt-6 sm:mt-7 space-y-4 sm:space-y-5">
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-base sm:text-lg leading-relaxed">
                  You’ve done BA, PM, Tech, or Change work, but perm bands cap
                  you at £500–£800/day.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-base sm:text-lg leading-relaxed">
                  You watch contractors with the same skills invoice 3× more.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-base sm:text-lg leading-relaxed">
                  Job boards aren’t working. You’re undervalued, not
                  under-skilled.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-base sm:text-lg leading-relaxed">
                  You want freedom to choose projects and set your rate without
                  gambling on a startup.
                </span>
              </li>
            </ul>

            <div className="mt-8 sm:mt-10 rounded-2xl  border-neutral-200 bg-white p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold">If this is you,</h3>
              <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
                Six Figure Switch turns your current role into a consulting
                offer and helps you land your first £600–£1,200/day contract in
                90 days.
              </p>
            </div>
          </div>

          {/* Right: Big Image Card */}
          <div className="lg:pl-4">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <img
                src={draftImage.src}
                alt="Program preview"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ====== Block 2: I've Been Here, Too ====== */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            I&apos;VE BEEN HERE, TOO
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 2013 card */}
            <figure className="group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
              <img
                src={photo2013.src}
                alt="2013 cold calling"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute left-4 top-4">
                <Badge>2013</Badge>
              </div>
              <figcaption className="px-4 sm:px-6 py-4">
                <div className="text-base font-semibold">
                  2013: Cold calling and chasing roles that never paid what they
                  should.
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  Early days of contracting hopes with permanent salary limits.
                </p>
              </figcaption>
            </figure>

            {/* 2020 card */}
            <figure className="group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
              <img
                src={photo2020.src}
                alt="2020 consultant at £1650/day"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute left-4 top-4">
                <Badge>2020</Badge>
              </div>
              <figcaption className="px-4 sm:px-6 py-4">
                <div className="text-base font-semibold">
                  2020: Making £1,650/day as a positioned consultant.
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  Clear positioning, strong offer, and a repeatable way to win
                  contracts.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* ====== Block 3: Long Story ====== */}
        <div className="mt-12 lg:mt-14">
          <div className="rounded-2xl  border-neutral-200  p-6 sm:p-8 ">
            <div className="mx-auto max-w-3xl">
              <p className="text-base sm:text-lg leading-relaxed">
                Ten years ago I was stuck in the same place as you — permanent
                roles, capped salaries, and endless HR bands.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                I worked late and delivered projects that made millions for my
                employers, but my payslip never moved.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                The hardest part was watching contractors with the same skills
                leave with £600–£1,000/day. I kept asking myself, what do they
                know that I don’t?
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                My first leap into contracting was £400/day — and even that felt
                like freedom. Soon I realised I was still undervaluing myself.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                The turning point came when I learned how to position myself as
                a consultant, not an employee. That shift took me from £400/day
                to £800, £1,200… and eventually £1,650/day. It changed my career
                and my life.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                Looking back, I wish I’d had a clear, step-by-step system to
                shortcut those wasted years. That’s why today I share the exact
                process I used — so you don’t have to go through the same
                struggle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
