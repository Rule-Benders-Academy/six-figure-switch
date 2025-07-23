import React from "react";
import BgImg from "../../_assets/our-promise-bg-img.png" ;
import GradientButton from "../GradientButton/GradientButton";

const OurPromise: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center flex items-center justify-center pt-8 pb-11 md:py-14 lg:py-20 px-5"
    style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="bg-w bg-white bg-opacity-[0.08] rounded-[16px] md:rounded-3xl lg:rounded-[44.31px] text-center border-[1px] border-[#818484] shadow-[0.11px_22.64px_22.64px_rgba(0,0,0,0.3)] max-w-[90%] sm:max-w-[1105px] w-full py-6 md:py-10 lg:py-[60px] px-10 md:px-20 lg:px-[140px]">
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-white mb-4">
          Our Promise
        </h2>
        <div className="h-[2px] md:h-[3px] lg:h-[5.5px] bg-white my-4" />
        <p className="text-white text-base md:text-3xl lg:text-4xl mb-0 md::mb-6 lg:leading-[85%] font-light tracking-tight max-w-[245px] md:max-w-[500px] lg:max-w-[756px] mx-auto lg:mt-11 md:mt-6 mt-2">
          In 90 days or less, you’ll go from stuck employee to high-paid consultant—earning more,
          working less, and finally owning your career.
        </p>
        <GradientButton className="!text-sm md:!text-2xl lg:!leading-[100%] !py-3 md:!py-[16px] lg:!py-[26px] !px-5 md:!px-8 lg:!px-[48px] max-w-[186px] md:max-w-[300px] lg:max-w-[515px]">
        MAKE THE 6 FIGURE SWITCH TODAY
        </GradientButton>
      </div>
    </section>
  );
};

export default OurPromise;
