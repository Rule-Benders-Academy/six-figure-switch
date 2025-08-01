'use client';
import React from 'react';
import Image from 'next/image';
import Icon1 from "../../_assets/six-figure-icon-1.png"
import Icon2 from "../../_assets/six-figure-icon-2.png"
import Icon3 from "../../_assets/six-figure-icon-3.png"
import Icon4 from "../../_assets/six-figure-icon-4.png"
import Icon5 from "../../_assets/six-figure-icon-5.png"
import Icon6 from "../../_assets/six-figure-icon-6.png"
import Icon7 from "../../_assets/six-figure-icon-7.png"
import Icon8 from "../../_assets/six-figure-icon-8.png"
import GradientButton from '../GradientButton/GradientButton';

const content = [
  {
    icon: Icon1,
    text: (
      <>
        How to turn your current job title into a{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">$1000/day</span>{' '}
        consulting offer — without changing industries
      </>
    ),
  },
  {
    icon: Icon2,
    text: (
      <>
        To use our 6 step method to land your first contract in{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">60–90 days</span>
      </>
    ),
  },
  {
    icon: Icon3,
    text: (
      <>
        Why being “experienced” is holding you back —{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">and how to fix it</span>
      </>
    ),
  },
  {
    icon: Icon4,
    text: (
      <>
        How to get hired again by the same companies, but as a{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">High-Paid Outsider</span>
      </>
    ),
  },
  {
    icon: Icon5,
    text: (
      <>
        How to build a{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">LinkedIn + CV</span>{' '}
        profile that sells you as a consultant
      </>
    ),
  },
  {
    icon: Icon6,
    text: (
      <>
        How to use Will’s{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">‘Skip the Ladder’</span>{' '}
        technique to leapfrog job levels
      </>
    ),
  },
  {
    icon: Icon7,
    text: (
      <>
        How to{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">‘Attract Inbound’</span>{' '}
        interest weekly — without cold messaging
      </>
    ),
  },
  {
    icon: Icon8,
    text: (
      <>
        The mindset shift that makes clients see you as a{' '}
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-semibold">Strategic Partner</span>
      </>
    ),
  },
];
const SixFigureSwitch = () => {
  return (
    <section className="text-white">
      <div className="mx-auto space-y-10 md:space-y-16 lg:space-y-20">
        <div className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] mx-auto text-center text-white">
          The Six Figure Switch
          <br />
          Teaches you
        </div>

        <div className="text-white px-4 md:px-8 lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-12 lg:gap-x-16">
            {content.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 lg:w-[50px] md:w-[59px] w-[30px] flex justify-center">
                  <Image src={item.icon} alt="Icon" className="max-w-[30px]" />
                </div>
                <p className="text-base leading-tight md:text-lg lg:leading-[100%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <GradientButton className="!lg:mt-2" >LETS GET STARTED!</GradientButton>
        </div>
      </div>
    </section>
  );
};

export default SixFigureSwitch;
