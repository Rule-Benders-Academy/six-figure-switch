'use client';
import React from "react";
import BgImg from "../../_assets/learn-system-bg-img.png";
import GradientButton from "../GradientButton/GradientButton";

const LearnSystem = () => {
  return (
    <section
      className="py-10 md:py-20 lg:py-[112px] px-4 text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[442px] lg:max-w-[942px] mx-auto">
        <h3 className="text-white text-2xl md:text-3xl lg:text-[46px] lg:leading-[100%] font-light mb-4">
          Leave the job trap.<br />Learn the system.
        </h3>

        <p className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text text-2xl md:text-4xl lg:text-[58px] leading-tight lg:leading-[100%] font-semibold mb-3 md:mb-6 lg:mb-10">
          <span className="text-white md:bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text block">
            Land high-paid Consulting
          </span>
          <span className="underline decoration-[#FFA500]">
            work with our tried and tested system taught by a world leading Consultant.
          </span>
        </p>

        <GradientButton className="!text-sm md:!text-2xl lg:!text-[40px] !py-3 md:!py-[16px] lg:!py-[26px] !px-5 md:!px-8 lg:!px-[48px] max-w-[186px] md:max-w-[515px]">
          START TODAY
        </GradientButton>
      </div>
    </section>
  );
};

export default LearnSystem;
