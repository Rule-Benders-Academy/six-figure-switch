import React from "react";
import GradientButton from "../GradientButton/GradientButton";

const offers = [
  {
    title: "Skills Assessment & Gap Analysis",
    price: "$500",
    description:
      "You provide your CV and Linkedin Profile and we do a tailored skills assessment using the internationally recognised SFIA skills framework. We map you against our consultant skills baselines and then do a gap analysis showing where you are right now and areas you need to develop.",
  },
  {
    title: "The High-Paid Consultant Course",
    price: "$500",
    description:
      "Our signature training which teaches you how to be a Consultant, the key skills you need, the mindset and behaviours of a high paid Consultant and unlocks your first $700-$1500 a day role in 90 days.",
  },
  {
    title: "150-Page Participant Guide",
    price: "$500",
    description:
      "Lifetime access to an extensive workbook with all course exercises, templates, and frameworks to help you deepen and refine your consulting approach over time.",
  },
  {
    title:
      "Weekly Implementation Coaching Calls with Me - For the first 4 weeks",
    price: "$500",
    description:
      "Sit in with me weekly. I’ll personally help guide you into roles, increase your rates, overcome barriers, and deliver like a true professional consultant.",
  },
  {
    title: "Career Blue Print & Consultant Pathways",
    price: "$500",
    description:
      "A tailored career blueprint, your personalised path to two thousand dollar per day roles, which shows the Consulting pathways, your entry point and your journey from where you are now to where you can go based on your level of ambition and your work preferences.",
  },
  {
    title: "Plug-and-Play Templates, Scripts, and Checklists",
    price: "$250",
    description:
      "Everything from Consulting frameworks, finance dashboards and recruiter outreach templates - saving you hours and helping you show up like a pro.",
  },
];

const bonuses = [
  {
    title: "Consultant Interview Framework",
    description:
      "Techniques to use in interviews making you 5x more likely to get the work.",
    price: "$250",
  },
  {
    title: "Proposal Hacks & AI Prompts",
    description:
      "Re-use tried and tested pitch decks, and make them your own with our AI Prompts to save time and present the right thing to win the work.",
    price: "$250",
  },
  {
    title: "Access to a Private Consulting Community",
    description:
      "Join an active network of learners and consultants. Get market insights, curated job opportunities, peer support, and learning drops to stay sharp and ahead of the curve.",
    price: "$250",
  },
  {
    title: "Access to Next-Level Offers",
    description:
      "As you grow, you’ll unlock access to higher-tier support: Done-For-You branding and setup, consultancy-in-a-box services, and private mentorship paths to scale your consultancy.",
    price: "$250",
  },
  {
    title: "Insane ROI, Proven by Numbers",
    description:
      "Land just one $699/day contract and you’ve already made back 20x your investment. Most learners see a 6-figure leap within months, not years.",
    price: "TOTAL",
    totalPrice: "3,000",
  },
];

const paragraphs = [
  <>
    Break into your first{" "}
    <span className="text-[#FFA500] font-semibold">$700 to $1400</span> a day
    role within 90 days.
  </>,
  <>
    <span className="text-[#FFA500] font-semibold">A Proven System</span> to
    Escape Employment and 3× Your Income.
  </>,
  <>Land one consulting contract and pay for this entire programme in 1 day!</>,
  <>
    Built from real-world success - the exact system I used to go from{" "}
    <span className="text-[#FFA500] font-semibold">£400/day to</span>{" "}
    <span className="text-[#FFA500] font-semibold">£3,000/day</span>. You’ll
    follow a step-by-step roadmap to transition from employee to in-demand
    consultant, fast.
  </>,
];

const SixFigureSwitchSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white py-6 md:py-10 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center space-y-4 text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] mb-5 md:mb-7 lg:mb-20">
        <h2 className="font-medium">What You Get With</h2>
        <h2 className="font-bold text-[#FFA500]">The Six-Figure Switch</h2>
      </div>

      {/* Feature Highlights with Timeline */}
      <div className="max-w-[260px] sm:max-w-[400px] md:max-w-2xl mx-auto text-left text-white text-sm pl-6 md:pl-10 lg:pl-14 relative">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute -left-[22px] md:-left-[58px] top-[calc(0.5rem+0.5em)] md:top-[calc(1.5rem+0.5em)] bottom-[calc(2.3rem+0.5em)] md:bottom-[calc(2.5rem+0.5em)] w-[1px] md:w-[2.5px] bg-gradient-to-b from-[#FFA500] to-[#412B02] z-0" />
          {/* first dot */}
          <div className="absolute top-[calc(0.5rem+0.5em)] md:top-[calc(1.5rem+0.5em)] -left-[25.5px] md:-left-[63px] w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#FFA500] z-10" />
          {/* last dot */}
          <div className="absolute bottom-[calc(2.3rem+0.5em)] md:bottom-[calc(2.5rem+0.5em)] -left-[25.5px] md:-left-[63px] w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#FFA500] z-10" />
          <div className="space-y-5 md:space-y-8 lg:space-y-12 relative z-10">
            {paragraphs.map((para, idx) => (
              <div
                key={idx}
                className="relative text-sm md:text-2xl lg:text-[24px]"
              >
                {idx !== 0 && idx !== paragraphs.length - 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[25.5px] md:-left-[63px] w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#FFA500] z-10" />
                )}
                {para}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Included Section Title */}
      <div className="max-w-[90%] lg:max-w-[70%] md:max-w-5xl mx-auto text-center mt-7 md:mt-16 lg:mt-32">
        <div className="space-y-4 text-2xl md:text-5xl lg:text-[44px] lg:leading-[90%] mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold">What’s included</h2>
          <h2>in the System</h2>
        </div>
      </div>

      {/* OFFERS CARD */}
      <div className="max-w-[90%] lg:max-w-[70%] md:max-w-5xl mx-auto bg-white bg-opacity-[0.08] py-6 md:py-10 lg:py-14 px-4 md:px-10 lg:px-[44px] border border-[#595758] rounded-2xl md:rounded-3xl lg:rounded-[36px] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <span className="font-semibold bg-[#D9D9D9] text-[#302E2F] text-xs sm:text-sm inline-block rounded-lg px-2 py-1">
            OFFER
          </span>
          <div className="flex gap-2 text-[12px] sm:text-xs">
            <span className="font-semibold text-white">USD</span>
            <span className="font-semibold text-white">VALUE</span>
          </div>
        </div>

        {/* Offers List */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {offers.map((opt, i) => (
            <div key={`offer-${i}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-base md:text-base lg:text-2xl font-medium text-white w-4/5 leading-tight">
                  {opt.title}
                </span>
                <span className="text-base md:text-base lg:text-lg font-bold text-white">
                  {opt.price}
                </span>
              </div>
              <div className="border-t border-white mt-4 pt-2">
                <p className="text-sm md:text-sm lg:text-lg text-white leading-tight">
                  {opt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BONUSES CARD */}
      <div className="max-w-[90%] lg:max-w-[70%] md:max-w-5xl mx-auto bg-white bg-opacity-[0.08] py-6 md:py-10 lg:py-14 px-4 md:px-10 lg:px-[44px] border border-[#595758] rounded-2xl md:rounded-3xl lg:rounded-[36px] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] overflow-hidden mt-6 md:mt-10 lg:mt-12">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <span className="font-semibold inline-block text-xs sm:text-sm bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-white rounded-lg px-2 py-1">
            BONUSES
          </span>
          <div className="flex gap-2 text-[12px] sm:text-xs">
            <span className="font-semibold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
              USD
            </span>
            <span className="font-semibold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
              VALUE
            </span>
          </div>
        </div>

        {/* Bonuses List */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {bonuses.map((b, i) => (
            <div key={`bonus-${i}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-base md:text-base lg:text-2xl font-medium bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text leading-tight">
                  {b.title}
                </span>
                <span className="text-base md:text-base lg:text-lg font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text flex items-center">
                  {b.price}
                  {b.totalPrice && (
                    <span className="ml-2 inline-block bg-[#252422] px-3 py-1 rounded-lg">
                      <span className="text-base md:text-base lg:text-xl font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
                        {b.totalPrice}
                      </span>
                    </span>
                  )}
                </span>
              </div>
              <div className="border-t border-[#FFBE48] mt-4 pt-2">
                <p className="text-base md:text-sm lg:text-lg text-white leading-tight">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & CTA (below both cards) */}
      <div className="max-w-[100%] lg:max-w-[70%] md:max-w-5xl mx-auto flex items-center justify-center gap-5 px-6 py-6 mt-6">
        <div className="text-center">
          <p className="text-2xl md:text-4xl lg:text-[44px] font-extrabold uppercase text-white tracking-wide">
            REGULAR
          </p>
          <p className="mt-2 md:mt-3 relative inline-block text-2xl md:text-4xl lg:text-[50px] font-bold text-white before:content-[''] before:absolute before:top-1/2 before:-left-[6%] before:w-[120%] before:h-1 md:before:h-1.5 lg:before:h-2 before:bg-red-600 before:rotate-[-6deg] before:origin-center">
            $3,000
          </p>
        </div>
        <div className="text-center border-l border-[#FFBE48] pl-7 md:pl-10 lg:pl-14">
          <p className="text-2xl md:text-4xl lg:text-[44px] font-bold uppercase bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text tracking-wide">
            TODAY
          </p>
          <div className="mt-2 inline-block bg-[#252422] px-5 py-2 lg:py-3 rounded-lg">
            <p className="text-2xl md:text-4xl lg:text-[44px] font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
              $699
            </p>
          </div>
          <p className="text-2xl mt-2 md:text-base font-extralight text-white">
            Save $2,301
          </p>
        </div>
      </div>

      {/* Final CTA Button */}
      <div className="text-center mt-[-10px] lg:mt-10">
        <GradientButton className="text-sm md:text-xl !lg:text-2xl !py-4 md:py-3 px-4 md:px-8 lg:px-10 max-w-md">
          I&apos;M READY TO MAKE THE SWITCH!
        </GradientButton>
      </div>
    </section>
  );
};

export default SixFigureSwitchSection;
