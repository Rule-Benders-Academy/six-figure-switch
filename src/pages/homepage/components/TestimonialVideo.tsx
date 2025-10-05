/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState } from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10 drop-shadow">
    <circle cx="12" cy="12" r="11" className="fill-white/95" />
    <path d="M10 8l6 4-6 4V8z" className="fill-neutral-900" />
  </svg>
);

type CardProps = {
  initial: string;
  name: string;
  from: string;
  to: string;
  summary: string;
  videoSrc: string;
  index: number;
  attachRef: (index: number, el: HTMLVideoElement | null) => void;
  onRequestPlay: (index: number) => void;
  onNotifyPause: () => void;
  isActive: boolean;
  isDimmed: boolean;
};

function Card({
  initial,
  name,
  from,
  to,
  summary,
  videoSrc,
  index,
  attachRef,
  onRequestPlay,
  onNotifyPause,
  isActive,
  isDimmed,
}: CardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const el = document.getElementById(
      `realstories-video-${index}`
    ) as HTMLVideoElement | null;
    if (!el) return;
    if (el.paused) {
      onRequestPlay(index);
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  };

  return (
    <article
      className={[
        "relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-sm ring-1 ring-black/5",
        "transition-all duration-300 ease-out will-change-transform",
        isActive ? "scale-[1.03] ring-amber-400/40" : "",
        isDimmed ? "scale-[0.97] opacity-95" : "",
      ].join(" ")}
    >
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

      {/* Video area: 90% width, rounded corners, NO native controls */}
      <div className="group mt-4">
        <div className="relative mx-auto w-[90%] aspect-video bg-neutral-100 rounded-3xl overflow-hidden transition-all duration-300 ring-1 ring-black/5">
          <video
            id={`realstories-video-${index}`}
            ref={(el) => attachRef(index, el)}
            className="h-full w-full object-cover"
            src={videoSrc}
            playsInline
            preload="metadata"
            // No 'controls' attribute -> hidden
            onClick={togglePlay} // tap/click video toggles play/pause
            onPlay={() => {
              setIsPlaying(true);
              onRequestPlay(index);
            }}
            onPause={() => {
              setIsPlaying(false);
              onNotifyPause();
            }}
            onEnded={() => {
              setIsPlaying(false);
              onNotifyPause();
            }}
          />

          {/* Custom play overlay (only when paused) */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={`Play ${name}'s story`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="inline-flex items-center justify-center rounded-full ring-1 ring-black/10">
                <PlayIcon />
              </span>
            </button>
          )}

          {/* Subtle gradient edge */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-200/40 via-transparent to-transparent" />
        </div>
      </div>
    </article>
  );
}

const RealStories: React.FC = () => {
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const attachRef = (index: number, el: HTMLVideoElement | null) => {
    videosRef.current[index] = el;
  };

  // Pause others and focus the chosen card
  const onRequestPlay = (index: number) => {
    setActiveIndex(index);
    videosRef.current.forEach((v, i) => {
      if (i !== index && v && !v.paused) v.pause();
    });
  };

  // Clear active if nothing is playing
  const onNotifyPause = () => {
    const anyPlaying = videosRef.current.some(
      (v) => v && !v.paused && !v.ended
    );
    if (!anyPlaying) setActiveIndex(null);
  };

  // Auto-pause when mostly off-screen
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (entry.intersectionRatio < 0.25 && !el.paused) el.pause();
        });
      },
      { threshold: [0, 0.25, 0.5, 1] }
    );
    videosRef.current.forEach((v) => v && obs.observe(v));
    return () => obs.disconnect();
  }, []);

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
            index={0}
            attachRef={attachRef}
            onRequestPlay={onRequestPlay}
            onNotifyPause={onNotifyPause}
            isActive={activeIndex === 0}
            isDimmed={activeIndex !== null && activeIndex !== 0}
            initial="B"
            name="Brittany"
            from="Strategy Support"
            to="HSBC Leader"
            summary="Doubled income and confidence, moving from support roles to leading programmes end-to-end with a clear offer and stronger positioning."
            videoSrc="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145289/Testimonial_Video_Brittany_w0wcjx.mp4"
          />
          <Card
            index={1}
            attachRef={attachRef}
            onRequestPlay={onRequestPlay}
            onNotifyPause={onNotifyPause}
            isActive={activeIndex === 1}
            isDimmed={activeIndex !== null && activeIndex !== 1}
            initial="D"
            name="Daniel"
            from="Failed Business"
            to="£400/day Gov Contract"
            summary="Turned a setback into momentum. Reframed experience, used the 90-day plan, and landed a stable government engagement."
            videoSrc="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145302/Testimonial_Video_Daniel_fbvbe6.mp4"
          />
          <Card
            index={2}
            attachRef={attachRef}
            onRequestPlay={onRequestPlay}
            onNotifyPause={onNotifyPause}
            isActive={activeIndex === 2}
            isDimmed={activeIndex !== null && activeIndex !== 2}
            initial="D"
            name="David"
            from="PM"
            to="Project Director"
            summary="Grew from £800/day to £1,300/day, stepped into senior leadership, and now leads multi-stream programmes with confidence."
            videoSrc="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145311/Testimonial_Video_David_lgfmuh.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default RealStories;
