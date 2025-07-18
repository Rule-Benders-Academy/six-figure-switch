import React from 'react';
import bgCurve from "../../_assets/earning-section-bg-img.png";
import Tick from "../../_assets/green-tick-icon.svg";
import Cancel from "../../_assets/red-cancel-icon.svg";
import Image from 'next/image';
import GradientButton from '../GradientButton/GradientButton';

interface CardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  gainItems?: boolean;
}

const EarningCard = ({ icon, title, subtitle, gainItems }: CardProps) => (
  <div className="relative max-w-[400px] md:max-w-full mx-auto shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] rounded-2xl md:rounded-3xl lg:rounded-[28.4px]">
    <div className="absolute top-1/2 -left-[19px] md:-left-[20px] lg:-left-[32px] transform -translate-y-1/2">
      {icon}
    </div>
    <div className={`flex items-start bg-[rgba(255,255,255,0.08)] rounded-2xl md:rounded-3xl lg:rounded-[28.4px] border-[1px] border-[#5E5E5E] shadow-lg gap-10 ${gainItems ? "px-2 md:px-5 lg:px-6 py-3 md:py-5 lg:py-[31px]" : "px-2 md:px-5 lg:px-12 py-6 md:py-10 lg:py-[50px]"}`}>
      <div className="ml-4 flex justify-between items-center w-full">
        <p className="font-semibold text-white text-lg lg:text-4xl md:text-2xl md:max-w-[200px] lg:max-w-[300px] md:border-r border-white md:pr-4 xl:pr-12 flex-1 md:flex-auto">
          {title}
        </p>
        <div className="h-[70px] bg-white md:bg-transparent w-[1px] mx-3 sm:mx-6"></div>
        <p className="text-white font-extralight text-sm md:text-lg lg:text-2xl md:max-w-[150px] lg:max-w-[220px] flex-1 md:flex-auto">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

const lossItems = [
  {
    title: 'Underpricing yourself',
    subtitle: '£5K–£15K in lost earnings in your first year alone',
  },
  {
    title: 'Misfiring on tools, setup, or structure',
    subtitle: '£1K–£3K in avoidable overhead',
  },
  {
    title: 'Missed contracts or slow entry',
    subtitle: '£5K–£10K in missed income',
  },
];

const gainItems = [
  {
    title: 'Contracts at 650 to 1400 dollars a day',
    subtitle: 'Average first-time consultants using our system land contracts at 650 to 1000usd/day',
  },
  {
    title: 'Earn 1,400 and more per day',
    subtitle: 'Many go on to earn £1,400+ per day within 12–24 months',
  },
  {
    title: 'Income gain of 100k to 300k dollars',
    subtitle: 'Over 3 years, the average income gain vs employment is 100k to 300k dollars, depending on experience level.',
  },
];

const EarningsSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-black to-neutral-900 text-white py-6 md:py-10 lg:py-28 px-5 md:px-16"
      style={{
        backgroundImage: `url(${bgCurve.src})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="mb-12 flex-[0.9] mx-5 md:mx-0">
            <span className="bg-transparent text-[#FFA500] border border-[#FFA500] text-xs md:text-base lg:text-xl font-semibold px-3 md:px-5 lg:px-7 py-1 md:py-2 lg:py-3 rounded-full inline-block mb-3">
              SAFE PROGRAMME
            </span>
            <h2 className="text-[32px] md:text-5xl lg:text-[54px] lg:leading-[100%] font-bold max-w-lg leading-8 mt-3">
              You can save 10–20k in year 1 by avoiding costly mistakes…
            </h2>
            <p className="text-white mt-5 md:mt-6 max-w-sm text-xl lg:text-2xl leading-6 font-normal lg:font-extralight lg:mt-8">
              Doing it on your own means wasted money, poor decisions, and costly delays.
            </p>
          </div>
          <div className="space-y-4 mb-12 flex-1 mx-1 md:mx-0">
            {lossItems.map((item, idx) => (
              <EarningCard
                key={idx}
                icon={<Image src={Cancel} alt="" className="w-9 md:w-10 lg:w-[54px]" />}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="space-y-4 mb-10 mx-1 md:mx-0">
            {gainItems.map((item, idx) => (
              <EarningCard
                key={idx}
                icon={<Image src={Tick} alt="" className="w-9 md:w-10 lg:w-[54px]" />}
                title={item.title}
                subtitle={item.subtitle}
                gainItems={true}
              />
            ))}
          </div>
          <div className="mb-12 flex-[0.8] mx-5 md:mx-0">
            <p className="text-white mt-5 md:mt-6 max-w-sm text-xl lg:text-2xl leading-6 font-normal lg:font-extralight lg:mt-8">
              Our tools, templates, trackers, coaching, and recruiter insights help you avoid these pitfalls completely
            </p>
            <h2 className="text-[32px] leading-8 md:text-5xl lg:text-[54px] lg:leading-[100%] font-bold max-w-lg mt-6 md:mt-3">
              You can make a shit load more money...
            </h2>
          </div>
        </div>
      </div>

      <div className="text-xl md:text-3xl lg:text-[40px] leading-[100%] space-x-3 md:space-x-0 space-y-7 md:space-y-10 font-normal md:text-center mt-5 md:mt-20 lg:mt-32 max-w-[970px] mx-auto">
        <h2 className="font-bold mx-3 md:mx-0">
          Typical ROI on our programme:
        </h2>
        <p>

          Short-term: 10x–20x return from your first contract
        </p>
        <p>

          Long-term: 100x+ return as you raise your rate, take control, and build recurring income
        </p>
        <p className="font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">

          And you can do it all without quitting everything, launching a startup, or waiting for permission.
        </p>


        <GradientButton className="!text-sm md:!text-2xl lg:!text-[28.94px] !py-3 md:!py-[16px] lg:!py-[18px] !px-5 md:!px-8 lg:!px-[35px] mx-7">
          I AM READY TO START
        </GradientButton>
      </div>
    </section>
  );
};

export default EarningsSection;
