'use client';

import React, { useEffect, useState } from 'react';
import GradientButton from '../GradientButton/GradientButton';

type OfferExtendedProps = {
  initialDays: number;
};

const OfferExtended: React.FC<OfferExtendedProps> = ({ initialDays }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialDays * 24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { days, hours, minutes };
  };

  const { days, hours, minutes } = formatTime(timeLeft);

  return (
    <div className="mx-auto lg:w-[70%] bg-white bg-opacity-[0.08] -mt-10 rounded-[16px] md:rounded-[30px] lg:rounded-[42.36px] p-3 md:p-6 text-white max-w-[80%] md:max-w-[70%] mx-auto text-center border border-neutral-700 py-7 md:py-10 lg:py-16 shadow-[10.11px_15.64px_22.64px_rgba(0,0,0,0.5)] md:shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] ">
      <div className="space-y-4 px-4 md:px-14 lg:px-10 mb-6 md:mb-8 lg:mb-10">
        <div className="flex justify-between text-xs uppercase tracking-widest">
          <div className="flex items-start gap-3">
            <div className="w-[10px] md:w-3 lg:w-6 h-[10px] md:h-3 lg:h-6 rounded-full bg-red-500 mt-1" style={{
              background: 'linear-gradient(180deg, #FF0000 0%, #990000 100%)',
            }} />
            <div className="text-xs md:text-2xl lg:text-3xl text-white">
              <span>Offer Extended</span>
              <div className="text-left font-bold mt-1 md:mt-2">in 15 days</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-xs md:text-2xl lg:text-3xl text-black bg-white rounded-[32px] md:rounded-[50px] lg:rounded-[87px] inline-block px-1 md:px-3">37 – 50</div>
            <div className="text-xs md:text-2xl lg:text-3xl text-white font-bold mt-1 md:mt-3">spots left</div>
          </div>

        </div>
        <div className="h-[3px] bg-[#EBE9E9]" />
        <p className="text-xl md:text-4xl lg:text-4xl lg:leading-[120%] text-left ">One day as a consultant pays for this entire programme!</p>
      </div>
      <div className=" grid grid-cols-3 gap-2 md:gap-6 lg:gap-8 bg-gradient-to-r from-[#1A1A1A] to-[#282828] p-3 md:p-5 md:h-[300px] lg:h-[347px]">
        {[
          { label: 'DAYS', value: days },
          { label: 'HOURS', value: hours },
          { label: 'MINUTES', value: minutes },
        ].map((unit) => (
          <div key={unit.label} className="h-[76%] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] rounded-3xl">
            <div
              className="bg-gradient-to-b from-[#3F3F3F] to-[#1E1E1E] px-3 py-2 flex justify-center items-center h-full rounded-xl md:rounded-3xl relative"
            >
              <div className="font-bold text-white text-[clamp(1rem,100vw,3rem)] md:text-[clamp(1rem,100vw,6rem)] lg:text-[clamp(0.5rem,100vw,6rem)]">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className=" absolute top-1/2 right-0 h-[2px] w-full -translate-y-1/2 bg-[#050505]"></div>
            </div>
            <div className="text-xs uppercase text-[#BA931A] tracking-wide mt-2 md:mt-5 lg:text-2xl">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-left">
        <GradientButton className="!text-sm md:!text-xl !py-[8px] md:!py-4 lg:!py-4 !px-5 md:!px-8 lg:!px-[35px]">
          TAKE THE RED PILL
        </GradientButton>
      </div>
    </div>
  );
};

export default OfferExtended;
