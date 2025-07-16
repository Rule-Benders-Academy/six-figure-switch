'use client';
import Image from 'next/image';
import React from 'react';
import CheckedIcon from '../../_assets/checked-icon.png';
import WarningIcon from '../../_assets/warning-icon.png';
import CancelIcon from '@/_assets/cancel-red-icon.svg';
import GradientButton from '../GradientButton/GradientButton';

const columns = ['Do–It–Yourself', 'Other Courses', 'OUR OFFER'];

const features = [
  {
    label: 'Total Cost',
    values: [
      '$1,000 to $5,000+',
      '$499 to $2,600',
      '$699 Launch Offer',
    ],
  },
  {
    label: 'Time to Results',
    values: [
      '6 to 12 + months',
      '3 to 6 + months',
      '6 to 12 weeks',
    ],
  },
  {
    label: 'Live Coaching Support',
    values: [
      <div key="live-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> None
      </div>,
      <div key="live-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Sometimes
      </div>,
      <div key="live-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Weekly with Will
      </div>,
    ],
  },
  {
    label: 'Step-by–Step Roadmap',
    values: [
      <div key="roadmap-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Trial & error
      </div>,
      <div key="roadmap-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Varies
      </div>,
      <div key="roadmap-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Proven system
      </div>,
    ],
  },
  {
    label: 'Real–World Case Studies',
    values: [
      <div key="cases-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> None
      </div>,
      <div key="cases-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Some
      </div>,
      <div key="cases-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> In every module
      </div>,
    ],
  },
  {
    label: 'Templates & Tools',
    values: [
      <div key="tools-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Build your own
      </div>,
      <div key="tools-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Limited
      </div>,
      <div key="tools-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Done–for–you kit
      </div>,
    ],
  },
  {
    label: 'Community Access',
    values: [
      <div key="community-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Solo
      </div>,
      <div key="community-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Occasional
      </div>,
      <div key="community-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Private network
      </div>,
    ],
  },
  {
    label: 'Success Guarantee',
    values: [
      <div key="guarantee-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> No guarantee
      </div>,
      <div key="guarantee-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> No guarantee
      </div>,
      <div key="guarantee-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Proven by student results
      </div>,
    ],
  },
  {
    label: 'Return on Investment',
    values: [
      <div key="roi-diy" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={CancelIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Risky + slow
      </div>,
      <div key="roi-other" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3">
        <Image src={WarningIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Possible
      </div>,
      <div key="roi-our" className="flex items-center flex-col gap-1.5 md:gap-2 lg:gap-3 font-semibold">
        <Image src={CheckedIcon} alt="" className="w-3 md:w-5 lg:w-8" /> Land 1 contract = 20× ROI
      </div>,
    ],
  },
];

const ComparisonSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white py-7 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
      <h2 className="text-2xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-semibold mb-2">
        Other offers out there don’t<br />
        provide the support you need.
      </h2>
      <h2 className="text-2xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-semibold text-[#FFA500] mb-6 md:mb-8 lg:mb-16">We do.</h2>

      <p className="max-w-[978px] mx-auto text-base md:text-2xl lg:text-4xl text-white leading-relaxed mb-4 md:mb-6 lg:mb-8">
        You can take a cheap course on Udemy, or learn how to become an employee of a Management
        Consultancy with ‘My Consulting’.
      </p>
      <p className="max-w-[978px] mx-auto text-base md:text-2xl lg:text-4xl text-white leading-relaxed">
        But being an employee is not the goal. Being an{' '}
        <span className="text-[#FFA500] font-medium">independent Consultant</span> with the income and
        freedom to live life on your terms is.
      </p>

      <div className="max-w-[1032px] mx-auto bg-gradient-to-b from-[#2C2B2C] to-[#363435] py-6 md:py-10 lg:py-14 px-4 md:px-10 lg:px-[55px] border-[1px] border-[#595758] rounded-2xl md:rounded-3xl lg:rounded-[36px] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] overflow-hidden mt-7 md:mt-10 lg:mt-16 mb-2 md:mb-4 lg:mb-5">
        <h3 className=" text-2xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-semibold text-[#FFA500] w-[80%] md:w-[60%] mx-auto mb-5 md:mb-10 lg:mb-12">
          We go on the journey with you.
        </h3>

        <div className="grid grid-cols-4 text-sm font-semibold py-3 lg:py-4 items-center">
          <div className="text-left text-white"></div>
          {columns.map((col) => (
            <div
              key={col}
              className={`text-center text-[10px] md:text-xl lg:text-[28px] lg:leading-[33.5px] leading-tight w-[70%] mx-auto ${
                col === 'OUR OFFER'
                  ? 'text-[#302E2F] bg-[linear-gradient(90deg,#FFBE48_0%,#FFA500_50%,#E99803_100%)] px-2 md:px-2 py-2 rounded-[10px] lg:rounded-[28.38px] font-bold mx-auto md:w-[50%] lg:mx-auto'
                  : 'text-white'
              }`}
            >
              {col}
            </div>
          ))}
        </div>

        {features.map((feature, idx) => (
          <div
            key={feature.label}
            className={`grid grid-cols-4 gap-y-10 items-center text-sm border-t md:border-t-[2px] border-white py-2.5 md:py-6 lg:py-10 lg:h-[184px] md:h-[120px] min-h-[66px] ${
              idx < 2 ? 'font-bold' : ''
            }`}
          >
            <div className="text-left text-white font-bold text-xs md:text-xl lg:text-[28px] lg:leading-[33.5px] leading-tight">
              {feature.label}
            </div>
            {feature.values.map((value, colIdx) => (
              <div
                key={`${feature.label}-${colIdx}`}
                className="text-center text-white text-xs md:text-xl lg:text-[28px] lg:leading-[33.5px] leading-tight"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>

      <GradientButton className="!text-sm md:!text-2xl lg:!text-[42px] !py-[14px] md:!py-5 lg:!py-6 !px-5 md:!px-8 lg:!px-[49px] max-w-[495px]">
        MAKE THE SWITCH
      </GradientButton>
    </section>
  );
};

export default ComparisonSection;
