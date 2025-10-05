/* eslint-disable */
"use client";

import React, { useState } from "react";
import enrollImage from "../images/product3.jpg";

const FEATURES = [
  "Skills Assessment & Gap Analysis — know exactly what to fix first.",
  "The High-Paid Consultant Course — the complete step-by-step system.",
  "150-Page Participant Guide — exercises, templates, frameworks.",
  "Weekly Coaching (first 4 weeks) — get feedback from Will to implement fast.",
  "Career Blueprint & Consultant Pathways — your road to £2,000/day roles.",
  "Plug-and-Play Toolkits — proposals, dashboards, PMO artefacts.",
  "Bonuses: Interview Framework, Proposal Hacks & AI Prompts, Private Community, Access to Next-Level Offers.",
];

const EnrollNowSection: React.FC = () => {
  const [plan, setPlan] = useState<"once" | "split">("once");

  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Enroll now"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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

        {/* Make left (pricing) a bit bigger than right (image) on desktop */}
        <div className="mt-12 grid grid-cols-1 lg:[grid-template-columns:minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-12 items-center">
          {/* Pricing / CTA */}
          <div className="order-2 lg:order-1 lg:max-w-[720px] lg:justify-self-start">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
              <div className="p-6 sm:p-8 lg:p-10">
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

                <div className="mt-5 flex flex-wrap items-baseline gap-x-3">
                  {plan === "once" ? (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">
                        £520
                      </span>
                      <span className="text-neutral-600">one-time fee</span>
                    </>
                  ) : (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">
                        £179
                      </span>
                      <span className="text-neutral-600">
                        per month for 3 months (≈ £537 total)
                      </span>
                    </>
                  )}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <a
                    href={plan === "once" ? "/checkout" : "/checkout?plan=3"}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  >
                    {plan === "once"
                      ? "Enroll — One-time payment"
                      : "Enroll — Pay in 3"}
                  </a>
                  <p className="mt-3 sm:mt-0 text-sm text-neutral-600">
                    Safe checkout • Instant access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lg:max-w-[560px] lg:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
              {/* keep aspect reasonable so it doesn’t dominate */}
              <div className="aspect-[16/10]">
                <img
                  src={enrollImage.src}
                  alt="Six Figure Switch — program preview"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
                Start this week
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-600">
              Join hundreds of professionals using the system to land premium
              contracts.
            </p>
          </div>
        </div>

        {/* What's included — SAME LIST STYLE AS BulletTexts */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
            What’s included
          </h3>
          <div className="mt-8 mx-auto max-w-3xl">
            <ul className="list-disc list-outside pl-6 space-y-4 text-base sm:text-2xl leading-relaxed marker:text-yellow-400">
              {FEATURES.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollNowSection;
