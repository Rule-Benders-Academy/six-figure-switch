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
      "Everything from Consulting frameworks, finance dashboards and recruiter outreach templates — saving you hours and helping you show up like a pro.",
  },
];

const bonuses = [
  {
    title: "Consultant Interview Framework",
    description:
      "Techniques to use in interviews making you 5 x more likely to get the work.",
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
    totalPrice: "3.000",
  },
];

const paragraphs = [
  <>
    Break into your first{" "}
    <span className="text-[#FFA500] font-semibold">$650 to $1400</span> a day
    role within 90 days.
  </>,
  <>
    <span className="text-[#FFA500] font-semibold">A Proven System</span>{" "}
    to Escape Employment and 3× Your Income.
  </>,
  <>Land one consulting contract and pay for this entire programme in 1 day!</>,
  <>
    Built from real-world success — the exact system I used to go from{" "}
    <span className="text-[#FFA500] font-semibold">£400/day to</span>{" "}
    <span className="text-[#FFA500] font-semibold">£3,000/day</span>. You’ll
    follow a step-by-step roadmap to transition from employee to
    in-demand consultant, fast.
  </>,
];


const SixFigureSwitchSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white py-6 md:py-10 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center space-y-4 text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] mb-5 md:mb-7 lg:mb-20">
        <h2 className=" font-medium">What You Get With</h2>
        <h2 className="font-bold text-[#FFA500]">The Six-Figure Switch</h2>
      </div>
      <div className="max-w-[260px] sm:max-w-[400px] md:max-w-4xl mx-auto text-left text-white text-sm pl-6 md:pl-10 lg::pl-14 relative">
        <div className="relative">
          <div className="absolute -left-[22px] md:-left-[58px] top-[calc(0.5rem+0.5em)] md:top-[calc(1.5rem+0.5em)] lg:top-[calc(2rem+0.5em)] bottom-[calc(2.3rem+0.5em)] md:bottom-[calc(2.5rem+0.5em)] lg:bottom-[calc(4rem+0.5em)] w-[1px] md:w-[2.5px] bg-gradient-to-b from-[#FFA500] to-[#412B02] z-0" />
          <div className="absolute top-[calc(0.5rem+0.5em)] md:top-[calc(1.5rem+0.5em)] lg:top-[calc(2rem+0.5em)] -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5 rounded-full bg-[#FFA500] z-10" />
          <div className="absolute bottom-[calc(2.3rem+0.5em)] md:bottom-[calc(2.5rem+0.5em)] lg:bottom-[calc(4rem+0.5em)] -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5 rounded-full bg-[#FFA500] z-10" />
          <div className="space-y-5 md:space-y-8 lg:space-y-12 relative z-10">
            {paragraphs.map((para, index) => (
              <div
                key={index}
                className="relative text-sm md:text-2xl lg:text-[32px]"
              >
                {index !== 0 && index !== paragraphs.length - 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5  rounded-full bg-[#FFA500] z-10" />
                )}
                {para}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:max-w-[90%] lg:max-w-[80%] md:max-w-5xl mx-auto bg-white bg-opacity-[0.08] py-6 md:py-10 lg:py-14 px-4 md:px-10 lg:px-[44px] border-[1px] border-[#595758] rounded-2xl md:rounded-3xl lg:rounded-[36px] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] overflow-hidden mt-7 md:mt-16 lg:mt-10">
        <div className="text-center md:space-y-4 text-2xl md:text-5xl lg:text-[44px] lg:leading-[90%] mb-8 md:mb-16 lg:mb-24 leading-tight">
          <h2 className=" font-bold">What’s included</h2>
          <h2 className="">in the System</h2>
        </div>
        <div className="flex items-center justify-between gap-4 md:py-2 lg:py-4 w-full mb-0 md:mb-5 lg;mb-6">
          <div className="font-semibold bg-[#D9D9D9] text-[#302E2F] text-[10px] md:text-base lg:text-2xl inline-block max-w-[150px] rounded-[24.99px] text-center px-2 md:px-3 lg:px-5">
            OFFER
          </div>
          <div className="flex">
            <div className="font-semibold text-white text-[10px] md:text-base lg:text-2xl inline-block max-w-[150px] rounded-[24.99px] text-center px-2 md:px-3 lg:px-5">
              USD
            </div>
            <div className="font-semibold bg-[#D9D9D9] text-[#302E2F] text-[10px] md:text-base lg:text-2xl inline-block max-w-[150px] rounded-[24.99px] text-center px-2 md:px-3 lg:px-5">
              VALUE
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-7 lg:space-y-10 py-4 text-sm">
          {offers.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center font-medium text-white mb-1 gap-5">
                <span className="text-sm md:text-base lg:text-xl leading-tight">
                  {item.title}
                </span>
                <span className="text-xs md:text-base lg:text-xl font-bold">
                  {item.price}
                </span>
              </div>
              <div
                className={"border-t md:border-t-[2px] border-white mt-4 pt-1"}
              >
                <p className="text-white text-xs md:text-base lg:text-lg leading-tight w-[80%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <span
              className=" text-[#302E2F] py-1 text-xs md:text-lg lg:text-2xl font-bold rounded-[24.99px] px-4 md:px-5 lg:px-7"
              style={{
                background:
                  "linear-gradient(90deg, #FFBE48 0%, #FFA500 50%, #E99803 100%)",
              }}
            >
              BONUSES
            </span>
          </div>

          {bonuses.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center font-medium bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text mb-1">
                <span className="text-sm md:text-base lg:text-2xl leading-tight">
                  {item.title}
                </span>
                <span className="text-xs md:text-base lg:text-2xl font-bold">
                  {item.price}
                </span>
              </div>
              <div
                className={
                  "border-t md:border-t-[2px] border-[#FFBE48] mt-4 pt-1"
                }
              >
                <div className="flex justify-between items-center">
                  <p className="text-white text-xs md:text-base lg:text-xl leading-tight w-[80%] lg:w-[70%]">
                    {item.description}
                  </p>
                  {item.totalPrice && (
                    <div className="px-3 md:px-4 lg:px-6 py-1 bg-[#252422] rounded-[12.75px] md:rounded-3xl lg:rounded-[42px] ">
                      <span className="text-xs md:text-base lg:text-2xl bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-bold">
                        {item.totalPrice}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center px-6 py-6 space-y-2 text-center gap-7 md:gap-10 lg:gap-14 ">
          <div className="">
            <p className="text-white text-base uppercase tracking-wide md:text-4xl lg:text-[50px] lg:leading-[100%] font-extrabold">
              REGULAR
            </p>
            <p className="mt-2 md:mt-3 relative inline-block text-base md:text-4xl lg:text-[50px] lg:leading-[100%] font-bold text-white before:content-[''] before:absolute before:top-1/2 before:-left-[6%] before:w-[120%] before:h-[3px] md:before:h-[4px] lg:before:h-[6.6px] before:bg-red-600 before:rotate-[-6deg] before:origin-center">
              $3,000
            </p>
          </div>
          <div className="space-y-1 md:space-y-3 text-base md:text-4xl lg:text-[50px] lg:leading-[100%] font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text pl-7 md:pl-10 lg:pl-14 border-l md:border-l-[2px] border-[#FFBE48]">
            <p className=" uppercase tracking-wide">TODAY</p>
            <div className="px-5 md:px-7 lg:px-11 py-2 lg:py-3 bg-[#252422] rounded-[12.75px] md:rounded-3xl lg:rounded-[42px]">
              <p className=" bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
                $699
              </p>
            </div>
            <p className="text-[11px] md:text-2xl lg:text-4xl font-extralight">
              Save $2301
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <GradientButton className="!text-sm md:!text-xl lg:!text-3xl !py-2 md:!py-[14px] !px-2 md:!px-8 lg:!px-[35px] max-w-[168px] md:max-w-[399px] ">
          I&apos;M READY TO MAKE THE SWITCH!
        </GradientButton>
      </div>
    </section>
  );
};

export default SixFigureSwitchSection;
