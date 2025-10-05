"use client";

import React from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
    <circle cx="12" cy="12" r="11" className="fill-white/90" />
    <path d="M10 8l6 4-6 4V8z" className="fill-neutral-900" />
  </svg>
);

const Card = ({
  initial,
  name,
  from,
  to,
  summary,
  videoHref = "#",
}: {
  initial: string;
  name: string;
  from: string;
  to: string;
  summary: string;
  videoHref?: string;
}) => (
  <article className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-sm transition-shadow duration-200 hover:shadow-md focus-within:shadow-md">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-neutral-900 font-bold">
        {initial}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-neutral-600">
          From <span className="font-medium text-neutral-900">{from}</span> →
          <span className="font-medium text-neutral-900"> {to}</span>
        </p>
      </div>
    </div>
    <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-800">
      {summary}
    </p>
    <a
      href={videoHref}
      className="group mt-4 block overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      aria-label={`Play ${name}'s story`}
    >
      <div className="relative aspect-video bg-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/70 via-neutral-100/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
          <PlayIcon />
        </div>
      </div>
    </a>
  </article>
);

const RealStories: React.FC = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-white via-white to-neutral-50 text-neutral-950"
      aria-label="Real student stories"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <header className="text-center">
          <p className="text-xs font-semibold tracking-wider text-neutral-500">
            REAL STORIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            See how professionals just like you made the switch
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card
            initial="B"
            name="Brittany"
            from="Strategy Support"
            to="HSBC Leader"
            summary="Doubled income and confidence, moving from support roles to leading programmes end-to-end with a clear offer and stronger positioning."
          />
          <Card
            initial="D"
            name="Daniel"
            from="Failed Business"
            to="£400/day Gov Contract"
            summary="Turned a setback into momentum. Reframed experience, used the 90-day plan, and landed a stable government engagement."
          />
          <Card
            initial="D"
            name="David"
            from="PM"
            to="Project Director"
            summary="Grew from £800/day to £1,300/day, stepped into senior leadership, and now leads multi-stream programmes with confidence."
          />
        </div>
      </div>
    </section>
  );
};

export default RealStories;
