'use client';
import React from 'react';

type DigitalClockProps = {
  minutes: number;
  seconds: number;
};

const DigitalClock: React.FC<DigitalClockProps> = ({ minutes, seconds }) => {
  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-white rounded-xl md:rounded-xl px-4 py-1 md:py-2 inline-block">
      <span className="font-digital text-2xl lg:text-4xl tracking-widest text-gray-800"  style={{ fontFamily: 'Digital7' }}>
        {minutes}:{formatTime(seconds)}
      </span>
    </div>
  );
};

export default DigitalClock;
