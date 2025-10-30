/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import product from "../images/mockup4.png";
import photo2013 from "../images/2013.jpeg";
import photo2020 from "../images/2022.png";
import instructorPhoto from "../images/instructor.jpg";

type FourthSectionProps = {
  className?: string;
  linkedinHref?: string;
  cvHref?: string; // direct .pdf URL
};

const FourthSection: React.FC<FourthSectionProps> = ({
  className = "",
  linkedinHref = "https://www.linkedin.com/in/willrichardson/",
  // 👇 Use the PUBLIC path (put the file at /public/pdf/Will Richardson CV.pdf)
  cvHref = "/pdf/will-richardson-cv.pdf",
}) => {
  const [openPdf, setOpenPdf] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPdf(false);
    if (openPdf) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPdf]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) setOpenPdf(false);
  };

  const isPdf =
    typeof cvHref === "string" && cvHref.toLowerCase().endsWith(".pdf");
  // Encode spaces/special chars for the iframe src
  const encodedPdfHref = encodeURI(cvHref);

  return (
    <section
      className={`relative w-full bg-gradient-to-b from-white via-white to-neutral-50 text-neutral-950 ${className}`}
      aria-label="Fit and Founder Story"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* ===== Block 1: IS THIS YOU ===== */}
        <div className="grid grid-cols-1 gap-10 items-center justify-items-center">
          <div className="max-w-xl text-center">
            <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              IS THIS YOU?
            </h2>

            <ul className="mt-10 space-y-6 text-left mx-auto max-w-2xl list-disc pl-8 marker:text-[#ffdc4a]">
              <li className="text-xl sm:text-3xl leading-relaxed">
                You’ve done <strong>BA / PM / Tech / Change</strong> work, but{" "}
                <strong>perm bands cap you at £500–£800/day</strong>.
              </li>
              <li className="text-xl sm:text-3xl leading-relaxed">
                You watch contractors with the <strong>same skills</strong>{" "}
                invoice <strong>3× more</strong>.
              </li>
              <li className="text-xl sm:text-3xl leading-relaxed">
                Job boards aren’t working. You’re <strong>undervalued</strong>,
                not <strong>under-skilled</strong>.
              </li>
              <li className="text-xl sm:text-3xl leading-relaxed">
                You want{" "}
                <span className="bg-[#ffdc4a] text-black font-semibold px-1 rounded-sm">
                  freedom to choose projects & set your rate
                </span>{" "}
                without gambling on a startup.
              </li>
            </ul>

            <div className="mt-8 sm:mt-10 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 mx-auto max-w-xl">
              <h3 className="text-xl sm:text-6xl font-extrabold text-black">
                If this is you,
              </h3>
              <p className="mt-3 text-base sm:text-2xl text-neutral-700 leading-relaxed">
                Six Figure Switch turns your current role into a consulting
                offer and{" "}
                <strong>
                  helps you land your first £600–£1,200/day contract in 90 days.
                </strong>
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={product}
                alt="Program preview"
                className="w-full h-auto object-cover"
                priority
                sizes="(min-width: 1024px) 800px, (min-width: 640px) 640px, 100vw"
              />
            </div>
          </div>
        </div>

        {/* ===== Block 2: BEFORE / AFTER ===== */}
        <div className="mt-20 sm:mt-24 lg:mt-28 relative">
          <h3 className="text-center text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            I&apos;VE BEEN HERE, TOO
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 justify-items-center items-start md:items-center">
            {/* Before */}
            <figure className="group relative w-full max-w-[340px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <Image
                  src={photo2013}
                  alt="2013 cold calling"
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-block bg-[#ffdc4a] text-black text-base sm:text-lg font-extrabold tracking-wide px-3 py-1 rounded-md shadow-md">
                    2020
                  </span>
                </div>
              </div>
              <figcaption className="px-5 py-5 text-center">
                <div className="text-base sm:text-lg font-semibold text-neutral-900">
                  Cold calling and chasing roles that never paid what they
                  should.
                </div>
                <p className="mt-2 text-sm sm:text-base text-neutral-600">
                  Early days of contracting dreams with permanent salary limits.
                </p>
              </figcaption>
            </figure>

            {/* Arrow */}
            <div className="flex justify-center items-center h-full md:self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-[#ffdc4a] arrow-pulse"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m0 0l-5-5m5 5l-5 5"
                />
              </svg>
            </div>

            {/* After */}
            <figure className="group relative w-full max-w-[340px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <Image
                  src={photo2020}
                  alt="2020 consultant at £1650/day"
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-block bg-[#ffdc4a] text-black text-base sm:text-lg font-extrabold tracking-wide px-3 py-1 rounded-md shadow-md">
                    2023
                  </span>
                </div>
              </div>
              <figcaption className="px-5 py-5 text-center">
                <div className="text-base sm:text-lg font-semibold text-neutral-900">
                  Making £1,650/day as a positioned consultant.
                </div>
                <p className="mt-2 text-sm sm:text-base text-neutral-600">
                  Clear positioning, strong offer, and a repeatable way to win
                  contracts.
                </p>
              </figcaption>
            </figure>
          </div>

          <p className="mt-6 text-center text-xl text-neutral-500">
            From chasing roles to choosing clients. The right positioning
            changes everything.
          </p>
        </div>

        {/* ===== Block 3: LONG STORY ===== */}
        {/* ===== Block 3: LONG STORY ===== */}
        <div className="mt-12 lg:mt-14 mx-auto text-left max-w-[70ch] md:max-w-xl">
          <p className="text-base sm:text-xl leading-relaxed">
            <strong>Ten years ago I was stuck in the same place as you</strong>{" "}
            — permanent roles, capped salaries, and endless HR bands.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            I worked late and delivered projects that made millions for my
            employers, but my payslip never moved.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            The hardest part was watching contractors with{" "}
            <strong>the same skills</strong> leave with £600–£1,000/day.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            I kept asking myself: <i>"What do they know that I don’t?"</i>
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            My first leap into contracting was £400/day, and even that felt like
            freedom. Soon I realised I was still undervaluing myself.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            The turning point came when I learned how to position myself as a
            consultant, not an employee. That shift took me from £400/day to
            £800, £1,200… and eventually £1,650/day.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            It completely changed my career — <strong>and my life</strong>.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            Looking back, I wish I’d had a clear, step-by-step system to
            shortcut those wasted years.
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed fade-underline">
            That’s why I built{" "}
            <span className="relative font-extrabold text-black underline-animate">
              Six Figure Switch
            </span>
            .
          </p>

          <p className="mt-4 text-base sm:text-xl leading-relaxed">
            It’s the exact system I used to make that jump,{" "}
            <strong>laid out step by step so you can do the same.</strong>
          </p>
        </div>

        {/* ===== Block 4: MEET YOUR INSTRUCTOR ===== */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="text-center lg:text-left self-start lg:pr-6 max-w-[46ch] mx-auto lg:mx-0">
            <h3 className="text-black text-2xl sm:text-3xl lg:text-2xl font-bold tracking-tight leading-tight text-gray-500">
              Meet your instructor
            </h3>
            <p className="mt-3 text-3xl sm:text-5xl lg:text-5xl font-extrabold text-black leading-[1.05]">
              WILL RICHARDSON
            </p>

            <div className="mt-6 space-y-6 sm:space-y-7 text-base sm:text-xl lg:text-[1.25rem] leading-relaxed text-neutral-700">
              <p>
                Over the last 20 years I’ve advised{" "}
                <strong>
                  HM Treasury, the Cabinet Office, and FTSE firms on programmes
                  worth billions.
                </strong>
              </p>
              <p>
                But it started with the same frustration you’re feeling now:{" "}
                <strong>
                  knowing you’re undervalued and not knowing how to break
                  through.
                </strong>
              </p>
              <p>That’s why I built Six Figure Switch.</p>
            </div>
          </div>

          {/* Right: Image + Centered Buttons */}
          <div className="self-start lg:pl-6">
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <Image
                  src={instructorPhoto}
                  alt="Will Richardson"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 90vw"
                />
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {/* LinkedIn */}
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0077b5] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00669d] focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341.7a53.7 53.7 0 1153.7-53.7 53.7 53.7 0 01-53.7 53.7zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.2-79.2-48.2 0-55.6 37.7-55.6 76.6V448h-92.7V148.9h89v40.8h1.3a97.5 97.5 0 0187.7-48.2c93.8 0 111 61.8 111 142.3V448z" />
                  </svg>
                  LinkedIn
                </a>

                {/* View CV => opens modal */}
                <button
                  type="button"
                  onClick={() => setOpenPdf(true)}
                  className="inline-flex items-center justify-center rounded-xl bg-[#ffdc4a] px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#f0cd3e] focus:outline-none focus:ring-2 focus:ring-[#ffdc4a]"
                >
                  CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PDF Viewer Modal ===== */}
      {openPdf && (
        <div
          ref={modalRef}
          onMouseDown={onBackdropClick}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="CV PDF viewer"
        >
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#ffdc4a] text-black font-extrabold">
                  CV
                </span>
                <p className="text-sm sm:text-base font-semibold text-neutral-900">
                  Will Richardson — Curriculum Vitae
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={encodedPdfHref}
                  download
                  className="hidden sm:inline-flex items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setOpenPdf(false)}
                  className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
                  aria-label="Close PDF viewer"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="bg-white">
              {isPdf ? (
                <iframe
                  // use encoded URL to handle spaces
                  src={`${encodedPdfHref}#view=FitH`}
                  className="w-full h-[80vh]"
                  title="CV PDF"
                />
              ) : (
                <div className="p-6 text-sm text-neutral-700">
                  <p className="font-semibold">
                    This link doesn’t appear to be a PDF.
                  </p>
                  <p className="mt-2">
                    Please set <code>cvHref</code> to a direct <code>.pdf</code>{" "}
                    file (e.g. <code>/pdf/Will Richardson CV.pdf</code> in your{" "}
                    <code>/public</code> folder).
                  </p>
                  <div className="mt-4">
                    <a
                      href={cvHref}
                      className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open link anyway
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animations + underline */}
      <style jsx>{`
        @keyframes arrowPulse {
          0% {
            transform: translateX(0);
            opacity: 0.9;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(255, 220, 74, 0.6));
          }
          100% {
            transform: translateX(0);
            opacity: 0.9;
          }
        }
        .arrow-pulse {
          animation: arrowPulse 1.8s ease-in-out infinite;
        }

        @keyframes underlineExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
        .underline-animate::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 0;
          background-color: #ffdc4a;
          border-radius: 2px;
          animation: underlineExpand 1.2s ease forwards;
          animation-delay: 0.2s;
        }

        .fade-underline {
          animation: fadeInSlide 1.4s ease both;
        }
        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FourthSection;
