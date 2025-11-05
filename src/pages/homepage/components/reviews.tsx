/* eslint-disable */
"use client";

import React from "react";

const STAR = (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-6 w-6 fill-[#ffdc4a]"
  >
    <path d="M10 1.5l2.6 5.28 5.84.85-4.22 4.11 1 5.82L10 15.9l-5.22 2.66 1-5.82L1.56 7.63l5.84-.85L10 1.5z" />
  </svg>
);

const REVIEWS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "I went from guessing to a simple weekly plan I could follow. In week 7 I signed a £700 per day contract and the client said my offer felt clear and low risk. The cadence made it easy to keep momentum instead of rewriting my CV for the tenth time.",
    name: "Sam Richards",
    role: "Product Manager",
  },
  {
    quote:
      "I booked 6 calls in under 3 weeks using the outreach scripts and a focused ICP. One turned into a paid discovery that rolled into a 6 month contract. The system gave me language to explain value without sounding fluffy or needy.",
    name: "Leah Khan",
    role: "Business Analyst",
  },
  {
    quote:
      "Packaging outcomes instead of tasks changed the conversation. I raised my rate from £750 to £850 and the client accepted on the call. The value guild helped me anchor the price and defend it with calm confidence.",
    name: "Jonathan Grant",
    role: "Consultant",
  },
  {
    quote:
      "Two warm intros became a £1,100 per day engagement because I finally knew how to lead the call. I stopped waiting for job boards to like me and built a real pipeline that I can repeat every month.",
    name: "Emily Harper",
    role: "Programme Manager",
  },
  {
    quote:
      "I kept tinkering with my CV for years. The 90 day plan made me ship a clear offer and a short case study in the first 10 days. I signed a 12 week piece at £800 per day and the client already extended.",
    name: "Mark Turner",
    role: "Delivery Lead",
  },
  {
    quote:
      "The offer workbook forced me to make choices. Once the positioning clicked, the conversations got easier. I closed a £10,000 fixd price deal and used it to build the flagship case study that keeps paying dividends.",
    name: "Priya Singh",
    role: "Change Manager",
  },
  {
    quote:
      "I always thought I needed another certification. I needed a better frame. The templates and weekly targets helped me book 9 calls in two weeks and one converted into £700 per day without a discount.",
    name: "Owen Price",
    role: "Business Analyst",
  },
  {
    quote:
      "The case study template is gold. It gave me a simple way to talk about a messy project with clear before and after. I landed a retainer in 10 weeks and finally stopped sending random applications.",
    name: "Ava Lewis",
    role: "Operations Consultant",
  },
  {
    quote:
      "Once my ICP and message were tight, clients started repeating my words back to me. I stopped chasing and started qualifying. Closed faster at a higher rate and felt calm through the process.",
    name: "Carlos Diaz",
    role: "Tech Lead",
  },
  {
    quote:
      "The pipeline tracker killed my avoidance. I did the work, measured it, and watched the numbers move. Five quality conversations in 3 weeks turned into a contract at £950 per day.",
    name: "Tom Hughes",
    role: "Data Consultant",
  },
  {
    quote:
      "Interview prep gave me a clean story with proof points. The client said yes on the call, then asked if I could start Monday. I signed at £650 per day for 6 months and negotiated a review after 3 months.",
    name: "Sarah Bell",
    role: "Transformation Lead",
  },
  {
    quote:
      "I swapped task lists for outcomes and everything got easier. My day rate moved from £600 to £720 on the next opportunity because I framed the problem and the path instead of listing tools.",
    name: "Daniel Murphy",
    role: "PMO Consultant",
  },
  {
    quote:
      "Twenty thoughtful messages, six replies, two meetings, one contract at £800 per day. No spam, no begging, just clear value and a simple call structure I could follow without scripts in front of me.",
    name: "Olivia Carter",
    role: "Strategy Consultant",
  },
  {
    quote:
      "The first 14 days created momentum that carried me through busy weeks. I finally had a pipeline I trusted. When a project fell through, I had three other threads already moving.",
    name: "James Parker",
    role: "Business Architect",
  },
  {
    quote:
      "The plan is practical and specific. I knew exactly what to do each week. In month two I closed an £40k project and used it to produce a strong reference and a clean case study.",
    name: "Maya Patel",
    role: "Process Improvement",
  },
  {
    quote:
      "The pricing model gave me a sane way to set my number and stick to it. I said £980 per day without a tremble. The client accepted and thanked me for being direct.",
    name: "Alex Johnson",
    role: "Engineering Manager",
  },
  {
    quote:
      "I used the email templates to warm up my network. Four calls in five days and one became a £700 per day engagement. The follow up cadence removed the awkwardness I used to feel.",
    name: "Laura Kim",
    role: "Business Analyst",
  },
  {
    quote:
      "This removed guesswork. I know who to contact, what to say, and how to price. I am working less hours and earning more because the work is aligned and scoped with clarity.",
    name: "Michael Wright",
    role: "Solution Architect",
  },
  {
    quote:
      "Offer clarity changed everything. I went from a generic CV to a sharp value proposition in a week. Signed £750 per day and the client asked for a second stream before week 10.",
    name: "Hannah Cole",
    role: "Programme Lead",
  },
  {
    quote:
      "Seven replies from twenty five notes because the message finally sounded like me and solved a real problem. One closed at £800 per day with zero haggling because my anchor made sense.",
    name: "Vikram Shah",
    role: "Delivery Manager",
  },
  {
    quote:
      "I stopped waiting for recruiters and built a simple outbound habit. That habit turned into a referral I would have never seen on a job board and a 10 month piece at £850 per day.",
    name: "Tara O'Neill",
    role: "Operations Lead",
  },
  {
    quote:
      "The call structure helped me lead. I set context, framed the problem, and proposed a path. Client agreed on the spot at £1,100 per day and offered to renew if milestones were met.",
    name: "Ben Carter",
    role: "Solution Designer",
  },
  {
    quote:
      "Warm intros beat cold platforms every time. One coffee chat turned into £950 per day for 5 month engagement because I had a tight story and a simple next step.",
    name: "Peter Novak",
    role: "Enterprise Architect",
  },
  {
    quote:
      "Clarity on niche removed noise. Two good clients beat ten random interviews. I feel in control for the first time in years and my calendar is sane again.",
    name: "Riya Desai",
    role: "Data PM",
  },
  {
    quote:
      "The templates saved me hours and stopped the endless tinkering. I shipped assets and the market responded. Signed at £720 per day and the client extended twice.",
    name: "Liam Brooks",
    role: "Business Analyst",
  },
  {
    quote:
      "The value map turned a complex project into a story a sponsor could grasp in 3 minutes. They called it a no brainer and signed the SOW within a week",
    name: "Grace Miller",
    role: "Portfolio Manager",
  },
  {
    quote:
      "I stopped underselling. Framed outcomes, not tasks, and moved from £650 to £850 per day. The call felt natural and I left with clear next steps instead of hope.",
    name: "Noah Bennett",
    role: "Scrum Master",
  },
  {
    quote:
      "The guildance gave me the words to defend my rate without getting defensive. The client accepted and said the structure made budget approvals easier.",
    name: "Ibrahim Ali",
    role: "Technical PM",
  },
  {
    quote:
      "I built a pipeline I can run in 90 minutes a day. Two ongoing clients and a clean weekly rhythm. It is simple, repeatable, and it works.",
    name: "Sofia Dimitriou",
    role: "Business Consultant",
  },
  {
    quote:
      "Interview prep helped me own the room. I opened with a point of view, asked better questions, and shaped scope. That led to an £28k discovery and a team deployment.",
    name: "Jack Cooper",
    role: "Transformation Consultant",
  },
  {
    quote:
      "I finally know how to present my experience so clients get it fast. Positioning work paid off on the first call and I stopped over explaining tools.",
    name: "Amelia Brown",
    role: "BA Lead",
  },
  {
    quote:
      "I know what to do on Monday morning. Consistency won. Signed at £880 per day plus travel and I am not burning out to keep up.",
    name: "Harvey Wilson",
    role: "Project Lead",
  },
  {
    quote:
      "Simple system, zero fluff. Ninety days later I am operating as a consultant with a clear offer, steady pipeline, and better boundaries.",
    name: "Aisha Khan",
    role: "Change Analyst",
  },
];


function Stars() {
  return (
    <div className="mb-3 flex items-center gap-1.5" aria-label="5 out of 5 stars">
      {STAR}{STAR}{STAR}{STAR}{STAR}
    </div>
  );
}

function ReviewCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <figure className="w-[680px] sm:w-[760px] shrink-0 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm">
      <Stars />
      <blockquote className="text-lg sm:text-xl leading-relaxed text-neutral-800">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm sm:text-base text-neutral-600">
        <span className="font-semibold text-neutral-900">{name}</span>{" "}
        <span aria-hidden="true">•</span> {role}
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  reversed = false,
  speed = 320,  // seconds per half loop (slow & smooth)
  offset = 0,   // seconds
}: {
  reversed?: boolean;
  speed?: number;
  offset?: number;
}) {
  const items = [...REVIEWS, ...REVIEWS]; // duplicate for seamless loop
  return (
    <div className="relative isolate w-full overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max gap-3 sm:gap-8 marquee-row"
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: `-${offset}s`,         // ✅ use offset prop (was hardcoded)
          animationName: reversed ? "marquee-rtl" : "marquee",
        }}
      >
        {items.map((r, i) => (
          <ReviewCard key={(reversed ? "b" : "a") + i} {...r} />
        ))}
      </div>
    </div>
  );
}

const StudentReviewsMarquee: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-x-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50 text-neutral-950"
      aria-label="What students say"
    >
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20">
        <header className="text-center">
          <p className="text-xs font-semibold tracking-wider text-neutral-500">
            WHAT STUDENTS SAY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            All reviews are 5 <span className="text-[#ffdc4a]">stars</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-700">
            Real outcomes from students who used the system to win premium work.
          </p>
        </header>
      </div>

      {/* Marquee rows */}
      <div className="mt-10 w-full overflow-x-hidden">
        <div className="space-y-12">
          <MarqueeRow reversed={false} speed={450} offset={0} />
          <MarqueeRow reversed={true} speed={450} offset={20} />
        </div>
      </div>

      <div className="pb-14 sm:pb-16 lg:pb-20" />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-row {
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .marquee-row:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default StudentReviewsMarquee;
