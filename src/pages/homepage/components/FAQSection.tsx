/* eslint-disable */
"use client";

import React, { useState } from "react";

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "What if I don't land a contract?",
    a: (
      <>
        The program gives you a 90-day pipeline plan, templates, and weekly
        actions that consistently produce interviews and offers. If it isn’t a
        fit for you in the first 14 days, you’re covered by the confidence
        guarantee—ask for a refund, no questions. Beyond that window you keep
        lifetime access to the materials, so you can keep executing the system
        at your pace.
      </>
    ),
  },
  {
    q: "Isn't this risky? I have a mortgage.",
    a: (
      <>
        You don’t need to quit your job. The system is designed to run{" "}
        <span className="font-semibold">part-time</span> alongside employment:
        short daily blocks to build a pipeline, then test your offer with
        low-risk engagements before moving up to day-rate contracts.
      </>
    ),
  },
  {
    q: "What if I'm not the 'consultant type'?",
    a: (
      <>
        “Consultant” is a set of behaviours and framing—not a personality.
        You’ll follow concrete scripts, case-study templates, and delivery
        checklists so you can sell outcomes (not hype) and lead confidently,
        even if you’re introverted.
      </>
    ),
  },
  {
    q: "Do I need new credentials?",
    a: (
      <>
        No. You’ll reframe your existing experience around{" "}
        <span className="font-semibold">measurable outcomes</span> and business
        impact. Certifications are optional; a clear offer, proof, and a steady
        pipeline move the needle faster.
      </>
    ),
  },
  {
    q: "Will this work outside London?",
    a: (
      <>
        Yes. The positioning and offer mechanics work across the UK and EU, and
        many roles are hybrid/remote. Rates vary by sector, but the same
        playbook—narrow ICP, outcome-driven offer, simple outreach—applies.
      </>
    ),
  },
  {
    q: "What makes this different from other career courses?",
    a: (
      <>
        It’s <span className="font-semibold">implementation-first</span>: weekly
        cadence, pricing frameworks, interview & proposal scripts, and
        plug-and-play delivery toolkits (PMO artefacts, reports, decks). No
        fluff — just what gets you a premium contract quickly and repeatably.
      </>
    ),
  },
];

const PlusMinus = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-shrink-0 text-neutral-900"
    aria-hidden="true"
  >
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {!open && (
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const FAQSection: React.FC = () => {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* ===== Title ===== */}
        <h2 className="text-center text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          FAQ
        </h2>

        {/* ===== FAQ Accordions ===== */}
        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {FAQS.map((item, i) => {
            const open = openSet.has(i);
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <div key={i} className="p-5 sm:p-6">
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold leading-snug">
                    {item.q}
                  </span>
                  <span className="mt-0.5">
                    <PlusMinus open={open} />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-all duration-200 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-700">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Footer CTA (YELLOW) ===== */}
        <div className="mt-10 text-center">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center rounded-xl bg-[#ffdc4a] px-8 py-3 text-base sm:text-lg font-semibold text-black shadow-sm hover:bg-[#f4cf38] focus:outline-none focus:ring-2 focus:ring-[#ffdc4a] transition-all duration-200"
          >
            Start your 90-day plan
          </a>
          <p className="mt-3 text-sm text-neutral-500">
            Safe checkout • Instant access
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
