"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, Package } from "lucide-react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";
import LandingFooter from "@/_components/LandingFooter/LandingFooter";

const offers = [
  {
    totalPrice: null,
    title: "Skills Assessment & Gap Analysis",
    price: "$500",
    description:
      "You provide your CV and Linkedin Profile and we do a tailored skills assessment using the internationally recognised SFIA skills framework. We map you against our consultant skills baselines and then do a gap analysis showing where you are right now and areas you need to develop.",
  },
  {
    totalPrice: null,
    title: "The High-Paid Consultant Course",
    price: "$500",
    description:
      "Our signature training which teaches you how to be a Consultant, the key skills you need, the mindset and behaviours of a high paid Consultant and unlocks your first $700-$1500 a day role in 90 days.",
  },
  {
    totalPrice: null,
    title: "150-Page Participant Guide",
    price: "$500",
    description:
      "Lifetime access to an extensive workbook with all course exercises, templates, and frameworks to help you deepen and refine your consulting approach over time.",
  },
  {
    totalPrice: null,
    title:
      "Recorded Weekly Implementation Coaching Calls with Me - For the first 4 weeks",
    price: "$500",
    description:
      "Sit in with me weekly in recorded calls. I’ll personally help guide you into roles, increase your rates, overcome barriers, and deliver like a true professional consultant.",
  },
  {
    totalPrice: null,
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
    totalPrice: null,
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
    title: "Access to a Private Consulting Platform",
    description:
      "Join an active network of learners and consultants. Get market insights, curated job opportunities, and learning drops to stay sharp and ahead of the curve.",
    price: "$250",
  },
  {
    title: "Access to Next-Level Offers",
    description:
      "As you grow you'll unlock access to higher tier support including our Consultancy In a Box Product.",
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

const Checkout = () => {
  const [activeTab, setActiveTab] = useState("included");
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    async function setupPaddle() {
      const paddleInstance = await initializePaddle({
        token: "live_864edaa6124c0e65de51e1034c9",
        eventCallback: async function (result) {
          if (result.name === "checkout.completed") {
            const customerEmail = result.data?.customer?.email ?? "";
            const transactionId = result.data?.id ?? "";

            console.log(
              "Paddle customer email:",
              customerEmail,
              "First Name:",
              firstName,
              "Last Name:",
              lastName,
              "Transaction ID:",
              transactionId
            );

            if (customerEmail) {
              const zapUrl = new URL(
                "https://hooks.zapier.com/hooks/catch/23549193/utohh21/"
              );
              zapUrl.searchParams.set("first_name", firstName);
              zapUrl.searchParams.set("last_name", lastName);
              zapUrl.searchParams.set("email", customerEmail);
              zapUrl.searchParams.set("transaction_id", transactionId);
              zapUrl.searchParams.set("trigger", "six-figure-switch-success");

              const img = new Image();
              img.src = zapUrl.toString();

              // Redirect immediately
              window.location.href =
                "https://sixfigureswitch.rule-benders.com/thank-you";
            }
          }
        },
      });

      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    }

    setupPaddle();
  }, [firstName, lastName]);

  const openCheckout = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setNameError("Both first and last name are required");
      return;
    } else {
      setNameError("");
    }

    if (!paddle) return;

    const fullname = `${firstName} ${lastName}`;

    paddle.Checkout.open({
      items: [{ priceId: "pro_01k2yargmp4zqas03z85e7gbv1" }],
      settings: {
        displayMode: "overlay",
        theme: "dark",
      },
      customData: {
        fullname: fullname,
      },
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">
          <div>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-3xl md:text-3xl leading-tight tracking-tight bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
                Six Figure Switch
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center lg:justify-start mb-4 space-x-4 mt-4">
              <button
                onClick={() => setActiveTab("included")}
                className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base flex items-center gap-2 transition-all duration-300 shadow-md ${
                  activeTab === "included"
                    ? "bg-[#FFBE48] text-black"
                    : "bg-[#595758] text-white hover:bg-[#6d6b6c]"
                }`}
              >
                <Package className="w-4 h-4" />
                What&apos;s Included
              </button>

              <motion.button
                onClick={() => setActiveTab("bonuses")}
                initial={{ boxShadow: "0 0 8px #FFBE48" }}
                animate={
                  activeTab === "bonuses"
                    ? {
                        boxShadow: [
                          "0 0 8px #FFBE48",
                          "0 0 16px #FFA500",
                          "0 0 8px #FFBE48",
                        ],
                      }
                    : { boxShadow: "0 0 0px #FFBE48" }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base flex items-center gap-2 transition-all duration-300 shadow-md ${
                  activeTab === "bonuses"
                    ? "bg-[#FFBE48] text-black"
                    : "bg-[#595758] text-white hover:bg-[#6d6b6c]"
                }`}
              >
                <Gift className="w-4 h-4 animate-bounce" />
                Bonuses
              </motion.button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">
          {/* LEFT SIDE */}
          <div>
            <div
              className={`py-8 px-6 md:px-10 lg:px-12 rounded-3xl shadow-xl border ${
                activeTab === "bonuses"
                  ? "border-[#FFBE48] bg-white bg-opacity-[0.07]"
                  : "border-[#595758] bg-white bg-opacity-[0.05]"
              }`}
            >
              {/* Content List */}
              <div className="space-y-4">
                {(activeTab === "included" ? offers : bonuses).map(
                  (item, i) => (
                    <div key={`${activeTab}-${i}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-lg font-medium leading-tight ${
                            activeTab === "bonuses"
                              ? "bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text"
                              : "text-white"
                          } w-4/5`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`text-base md:text-lg lg:text-xl font-bold flex items-center ${
                            activeTab === "bonuses"
                              ? "bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text"
                              : "text-white"
                          }`}
                        >
                          {item.price}
                          {item.totalPrice && (
                            <span className="ml-2 inline-block bg-[#252422] px-3 py-1 rounded-lg">
                              <span className="text-lg font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
                                {item.totalPrice}
                              </span>
                            </span>
                          )}
                        </span>
                      </div>
                      <div
                        className={`border-t pt-2 ${
                          activeTab === "bonuses"
                            ? "border-[#FFBE48]"
                            : "border-white"
                        }`}
                      >
                        <p className="text-xs text-gray-200 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#1f1e1f] rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Secure Checkout
            </h3>

            {/* First Name */}
            <div className="flex flex-col w-full gap-2 mb-4">
              <label className="text-sm font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-xl bg-[#252422] text-white focus:outline-none focus:ring-2 focus:ring-[#FFBE48]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col w-full gap-2 mb-4">
              <label className="text-sm font-semibold">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-xl bg-[#252422] text-white focus:outline-none focus:ring-2 focus:ring-[#FFBE48]"
              />
              {nameError && (
                <span className="text-red-500 text-sm">{nameError}</span>
              )}
            </div>
            <div className="flex items-center justify-center gap-6 px-6 py-8 bg-[#1a191a] rounded-2xl shadow-lg border border-[#2c2b2b] w-full">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-extrabold uppercase text-gray-400 tracking-wide">
                  REGULAR
                </p>
                <p className="mt-2 relative inline-block text-2xl md:text-3xl font-bold text-gray-300 before:content-[''] before:absolute before:top-1/2 before:-left-[6%] before:w-[120%] before:h-[2px] before:bg-red-600 before:rotate-[-6deg]">
                  $3,000
                </p>
              </div>

              <div className="text-center border-l border-[#FFBE48] pl-6">
                <p className="text-xl md:text-2xl font-bold uppercase bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text tracking-wide">
                  TODAY
                </p>
                <div className="mt-2 inline-block bg-[#252422] px-5 py-2 rounded-xl shadow-md">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">
                    $699
                  </p>
                </div>
                <p className="text-sm md:text-base mt-2 text-gray-300">
                  Save $2,301
                </p>
              </div>
            </div>
            <button
              onClick={openCheckout}
              disabled={!paddle}
              className="mt-6 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-black font-bold text-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {paddle ? "Buy Now" : "Loading..."}
            </button>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};


export default Checkout;
