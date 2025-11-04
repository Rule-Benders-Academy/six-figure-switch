/* eslint-disable */
"use client";

import React, { useState } from "react";
import enrollImage from "../images/product3.jpg";

const EnrollNowSection: React.FC = () => {
  const [plan, setPlan] = useState<"once" | "split">("once");

  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Enroll now"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-yellow-300/70 bg-yellow-50 px-3 py-1 text-xs font-semibold text-neutral-800">
            ENROLL NOW
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Start your 90-day plan this week
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Get the complete system, coaching, and templates to land premium
            contracts.
          </p>
        </div>

        {/* Symmetrical layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Pricing / CTA */}
          <div className="order-2 lg:order-1">
            <div className="relative h-full lg:min-h-[640px] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md ring-1 ring-black/5 hover:shadow-lg transition-shadow duration-300">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
              <div className="flex h-full flex-col p-8 sm:p-10 lg:p-12">
                {/* Plan Switch */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-700">
                    Choose your plan
                  </p>
                  <div className="inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-1">
                    <button
                      type="button"
                      onClick={() => setPlan("once")}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition ${
                        plan === "once"
                          ? "bg-white text-neutral-900 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                      aria-pressed={plan === "once"}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlan("split")}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition ${
                        plan === "split"
                          ? "bg-white text-neutral-900 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                      aria-pressed={plan === "split"}
                    >
                      Pay in 3 Months
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
                  {plan === "once" ? (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">
                        £1450
                      </span>
                      <span className="text-neutral-600">one-time fee</span>
                    </>
                  ) : (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">
                        £525
                      </span>
                      <span className="text-neutral-600">
                        per month for 3 months (≈ £537 total)
                      </span>
                    </>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                  <li>
                    <strong>Skills Assessment & Gap Analysis</strong> — know
                    exactly what to fix first.
                  </li>
                  <li>
                    <strong>The High-Paid Consultant Course</strong> — the
                    complete step-by-step system.
                  </li>
                  <li>
                    <strong>150-Page Participant Guide</strong> — exercises,
                    templates, frameworks.
                  </li>
                  <li>
                    <strong>Weekly Coaching (first 4 weeks)</strong> — get
                    feedback from Will to implement fast.
                  </li>
                  <li>
                    <strong>Career Blueprint & Consultant Pathways</strong> —
                    your road to £2,000/day roles.
                  </li>
                  <li>
                    <strong>Plug-and-Play Toolkits</strong> — proposals,
                    dashboards, PMO artefacts.
                  </li>
                  <li>
                    <strong>Bonuses</strong>: Interview Framework, Proposal
                    Hacks & AI Prompts, Private Community, Access to Next-Level
                    Offers.
                  </li>
                </ul>

                {/* Note */}
                <p className="mt-3 text-xs text-neutral-500">
                  Full feature breakdown below ↓
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={plan === "once" ? "/checkout" : "/checkout?plan=3"}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all duration-200"
                  >
                    {plan === "once"
                      ? "Enroll — One-time payment"
                      : "Enroll — Pay in 3"}
                  </a>
                  <p className="mt-4 text-sm text-center text-neutral-600">
                    Safe checkout • Instant access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image card (right) */}
          <div className="order-1 lg:order-2">
            <div className="relative h-full lg:min-h-[640px] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md ring-1 ring-black/5 hover:shadow-lg transition-shadow duration-300">
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
                Start this week
              </div>
              <div className="relative h-full">
                <img
                  src={enrollImage.src}
                  alt="Six Figure Switch — program preview"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-neutral-600">
              Join hundreds of professionals using the system to land premium
              contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollNowSection;
