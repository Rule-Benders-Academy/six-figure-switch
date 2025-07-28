'use client';
import React from 'react';
import Image from 'next/image';
import CancelIcon from '@/_assets/cancel-red-icon.svg'
import GradientButton from '../GradientButton/GradientButton';

const reasons = [
  'NO NEED TO QUIT YOUR INDUSTRY OR START FROM SCRATCH',
  'NO BEGGING RECRUITERS OR ENDLESSLY APPLYING TO ROLES',
  'NO PRE-EXISTING PERSONAL BRAND, FOLLOWERS, OR WEBSITE REQUIRED',
  'NO RISKY STARTUP — JUST A SMARTER USE OF YOUR SKILLS',
];

const MakeTheSwitch = () => {
  return (
    <section className="bg-black text-white py-9 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
      <h2 className="text-xl md:text-5xl lg:text-[44px] lg:leading-[100%] font-semibold mb-8 md:mb-10 lg:mb-14">
        If you are ready to make your move <br />
        <span className="font-light">– remember there’s…</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-1 md:mb-5 lg:mb-8 w-[95%] lg:w-[80%] mx-auto">
        {reasons.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-14"
          >
            <Image
              src={CancelIcon}
              alt="X"
              className="lg:w-[60px] md:w-12 w-6"
            />
            <p className="text-sm md:text-base lg:text-2xl max-w-xs text-left font-bold">
              {text}
            </p>
          </div>
        ))}
      </div>

      <GradientButton className="!text-sm md:!text-2xl !py-3 md:!py-[16px] lg:!py-[18px] !px-5 md:!px-8 lg:!px-[50px]">
        MAKE THE SWITCH
      </GradientButton>
    </section>
  );
};

export default MakeTheSwitch;
