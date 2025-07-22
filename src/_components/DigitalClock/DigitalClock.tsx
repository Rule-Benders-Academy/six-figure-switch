"use client";
import React, { useEffect, useState } from "react";

type DigitalClockProps = {
  minutes: number;
  seconds: number;
};

const pad = (n: number) => n.toString().padStart(2, "0");

const DigitalClock: React.FC<DigitalClockProps> = ({ minutes, seconds }) => {
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);

  // Reset when props change
  useEffect(() => {
    setTotalSeconds(minutes * 60 + seconds);
  }, [minutes, seconds]);

  useEffect(() => {
    if (totalSeconds <= 0) return;
    const id = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [totalSeconds]);

  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return (
    <div className="bg-white rounded-xl px-4 py-1 md:py-2 inline-block">
      <span
        className="font-digital text-2xl lg:text-4xl tracking-widest text-gray-800"
        style={{ fontFamily: "Digital7" }}
      >
        {pad(hrs)}:{pad(mins)}:{pad(secs)}
      </span>
    </div>
  );
};

export default DigitalClock;
