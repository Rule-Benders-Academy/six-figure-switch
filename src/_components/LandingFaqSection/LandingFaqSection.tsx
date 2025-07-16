'use client';
import React, { useState } from 'react';
import ArrowIcon from "../../_assets/white-arrow.svg"
import Image from 'next/image';

const faqs = [
  {
    question: "What if I don’t feel ready to be a consultant?",
    answer:
      "You’re probably more ready than you think. Our system helps you reframe your existing experience so you can confidently position yourself without needing to “start over.” 👉 Start with step one and see how far you already are.",
  },
  {
    question: "Will this work if I don’t have a huge network?",
    answer:
      "Yes — most of our clients start from scratch. We teach you how to attract opportunities without chasing recruiters or relying on who you know. 👉 Let the system do the heavy lifting for you.",
  },
  {
    question: "Do I need a personal brand or social media presence?",
    answer:
      "Nope. You don’t need followers, a website, or a podcast. Just a strong value story, which we’ll help you craft and position. 👉 Skip the fluff — get straight to the results.",
  },
  {
    question: "What makes this different from other career courses?",
    answer:
      "This isn’t career coaching — it’s a blueprint to escape employment and get paid like a business. It’s built by real consultants who’ve done it themselves. 👉 You’re not learning theory. You’re copying what works.",
  },
  {
    question: "What if I’ve already tried to rewrite my CV or LinkedIn?",
    answer:
      "That’s exactly why we built this. We give you proven templates and frameworks that cut through noise and reposition you immediately as a high-value consultant. 👉 Don’t rewrite — reposition.",
  },
  {
    question: "What’s the risk if I wait?",
    answer:
      "The longer you wait, the more opportunity passes you by. The market is shifting fast, and those who move now will be ahead in 6 months. 👉 Your next move could start today for £699.",
  },
];


const LandingFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white px-4 sm:px-8 md:px-16 lg:px-24 pt-6 py-14 lg:py-20">
      <h2 className="text-center text-4xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-medium mb-10 lg:mb-32 md:w-[70%] lg:w-[50%] mx-auto">Frequently asked questions</h2>
      <div className="max-w-5xl mx-auto space-y-7 md:space-y-10 lg:space-y-12">
        {faqs.map((faq, index) => (
          <div className="relative" key={index}>
            <div
              key={index}
              className=" pb-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base md:text-2xl lg:text-4xl leading-tight font-medium w-[90%] max-w-[793px]">{faq.question}</h3>
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-3 text-[#9B9B9B] text-base md:text-2xl lg:text-4xl leading-tight md:mt-4 lg:mt-7 max-w-[827px]">{faq.answer}</p>
              )}
            </div>
            <div className="absolute right-0 bottom-5 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              {openIndex === index ? (
                <Image src={ArrowIcon} alt="X" className="w-[14px] md:w-[36px] lg:w-[46px]" />
              ) : (
                <Image src={ArrowIcon} alt="X" className="w-[14px] md:w-[36px] lg:w-[46px] rotate-180" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingFaqSection;
