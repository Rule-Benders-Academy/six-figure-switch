/* eslint-disable */
"use client";

import React from "react";

/** Minimal inline icons */
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      d="M15 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <rect
      x="3"
      y="7"
      width="18"
      height="14"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 7l2-3h14l2 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 12h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const TrashIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M3 6h18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 6V4h8v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="5"
      y="6"
      width="14"
      height="14"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const MoreIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);
const ReplyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      d="M10 8l-6 4 6 4v-3h4c3 0 5 2 6 5 0-6-3-10-10-10h0v0-0z"
      fill="currentColor"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 text-neutral-900"
  >
    <path
      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 7l8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
    <path
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414l3.293 3.293 6.543-6.543a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <rect
      x="4"
      y="10"
      width="16"
      height="10"
      rx="2"
      className="fill-none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 10V8a4 4 0 1 1 8 0v2"
      className="fill-none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const LightningIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7Z" fill="currentColor" />
  </svg>
);

// New: Bell icon that we can animate
const BellIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`}>
    <path
      d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22z"
      fill="currentColor"
    />
    <path
      d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z"
      fill="currentColor"
    />
  </svg>
);

const FinalCTASection: React.FC = () => {
  return (
    <section
      className="w-full bg-neutral-50 text-neutral-950"
      aria-label="Email offer preview"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Separated headline */}
        <div className="text-center">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            90 Days From Now, This Could Be Your Inbox:
          </h2>
        </div>

        {/* Mail app card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          {/* Top toolbar */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 sm:px-6 py-3 bg-neutral-50/60">
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
                <ChevronLeft />
                Inbox
              </button>

              {/* New: ringing bell with red badge */}
              <div className="relative">
                <button
                  className="rounded-lg p-2 hover:bg-neutral-100 text-neutral-800"
                  aria-label="Notifications"
                >
                  <BellIcon className="ringing" />
                </button>
                <span className="absolute -top-1.5 -right-1.5 grid min-w-[22px] h-[22px] place-items-center rounded-full bg-red-500 px-1.5 text-[10px] font-extrabold leading-none text-white ring-2 ring-white">
                  10+
                </span>
              </div>

              <span className="hidden sm:inline-block text-xs text-neutral-500">
                • 10 new
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-700">
              <button
                className="rounded-lg p-2 hover:bg-neutral-100"
                aria-label="Archive"
              >
                <ArchiveIcon />
              </button>
              <button
                className="rounded-lg p-2 hover:bg-neutral-100"
                aria-label="Delete"
              >
                <TrashIcon />
              </button>
              <button
                className="rounded-lg p-2 hover:bg-neutral-100"
                aria-label="More"
              >
                <MoreIcon />
              </button>
            </div>
          </div>

          {/* Subject */}
          <div className="px-4 sm:px-6 pt-5">
            <p className="text-xs font-semibold tracking-wider text-neutral-500">
              Subject
            </p>
            <h1 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight">
              Contract Offer — Senior Business Analyst
            </h1>
          </div>

          {/* Meta */}
          <div className="px-4 sm:px-6 mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-neutral-900 text-white grid place-items-center text-xs font-bold">
                HR
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium">
                  Hiring Manager{" "}
                  <span className="text-neutral-500 font-normal">
                    &lt;talent@client.co.uk&gt;
                  </span>
                </p>
                <p className="text-xs text-neutral-500">
                  to you • Today, 09:14
                </p>
              </div>
            </div>
            <span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-semibold text-neutral-800 ring-1 ring-yellow-200">
              Offer
            </span>
          </div>

          {/* Body */}
          <div className="px-4 sm:px-6 py-6">
            <blockquote className="rounded-xl bg-neutral-50 px-4 py-4 ring-1 ring-neutral-200 text-neutral-800">
              <p className="text-lg sm:text-xl leading-relaxed">
                “Offer: £900/day. 6-month programme. Start in two weeks.”
              </p>
            </blockquote>

            <div className="mt-5 space-y-3 text-neutral-800">
              <p className="text-base sm:text-lg">
                You choose your days. You decide your rate.
              </p>
            </div>

            {/* Reply actions */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-50">
                <ReplyIcon />
                Reply
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-50">
                Reply all
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-50">
                Forward
              </button>
            </div>
          </div>
        </div>

        {/* CTA under the mail card */}
        <div className="mt-8 text-center">
          <p className="text-base sm:text-lg mb-4">
            The only thing between you and that email is a framework that works.
          </p>

          {/* Yellow brand button */}
          <a
            href="/checkout"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#ffdc4a] px-7 py-3 text-base sm:text-lg font-semibold text-neutral-950 shadow-sm transition hover:bg-[#f0cd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffdc4a]/60"
          >
            Join Six Figure Switch Now
          </a>

          <div className="mx-auto max-w-lg flex flex-wrap items-center justify-center gap-2 text-center mt-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200">
              <CheckIcon /> 14-day money-back guarantee
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-200">
              <LockIcon /> Secure payment
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200">
              <LightningIcon /> Instant access
            </span>
          </div>
        </div>
      </div>

      {/* ringing animation for the bell */}
      <style jsx>{`
        @keyframes ring {
          0% {
            transform: rotate(0);
          }
          15% {
            transform: rotate(15deg);
          }
          30% {
            transform: rotate(-12deg);
          }
          45% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-6deg);
          }
          75% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(0);
          }
        }
        .ringing {
          transform-origin: 12px 3px; /* near bell hanger */
          animation: ring 1.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ringing {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
