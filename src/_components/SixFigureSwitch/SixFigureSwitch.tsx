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
    <section className=" text-white">
      <div className="max-w-3xl mx-auto ">
        <div className="text-xl md:text-5xl lg:text-[64px] lg:leading-[100%] md:mt-6 lg:mt-10 max-w-[680px] mx-auto text-center text-white lg:mb-20 md:mb-16 mb-5">
          The Six Figure Switch
          Teaches you
        </div>
        <div className=" text-white px-4 md:px-8 max-w-3xl mx-auto">
          <div className="flex flex-col lg:gap-y-14 md:gap-y-12 gap-y-6">
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="flex-shrink-0 lg:w-[89px] md:w-[59px] w-[30px] flex justify-center">
                  <Image src={item.icon} alt="Icon" className='max-w-[80px]' />
                </div>
                <p className="text-[15.5px] leading-tight md:text-xl lg:text-[32px] lg:leading-[100%]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <GradientButton> 
            LETS GET STARTED!
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default SixFigureSwitch;
