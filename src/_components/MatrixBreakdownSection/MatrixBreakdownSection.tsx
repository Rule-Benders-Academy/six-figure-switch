import React from "react";
import Image from "next/image";
import bgCurve from "../../_assets/Ellipse-bg.png";
import MindsetIcon from "../../_assets/metrix-mindset-icon.png";
import MethodIcon from "../../_assets/metrix-method-icon.png";
import MarketIcon from "../../_assets/metrix-market-icon.png";
import BtnIcon from "../../_assets/metrix-btn-icon.svg";
import GradientButton from "../GradientButton/GradientButton";

const methods = [
  {
    icon: MindsetIcon,
    title: "Mindset",
    description: "Ditch the employee identity and think like a consultant",
  },
  {
    icon: MethodIcon,
    title: "Method",
    description: "Use our proven system to build your offer and toolkit",
  },
  {
    icon: MarketIcon,
    title: "Market",
    description: "Go to market and secure your first contract",
  },
];

const MatrixBreakdownSection: React.FC = () => {
  return (
    <section className="bg-black text-white pb-16 space-y-16">
      <div className="bg-gradient-to-b from-[#434040] to-[#000000] pt-10 pb-28 md:pt-20 md:pb-40 mb-32 relative text-center">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-5xl lg:text-[64px] font-medium leading-tight">This is how we break you</h1>
          <h2 className="text-2xl md:text-5xl lg:text-[64px] font-bold md:mt-2 ">out of the Matrix</h2>
        </div>
        <div
          className="absolute top-[120px] md:top-[240px] left-0 z-[1] w-full h-[200px]"
          style={{
            backgroundImage: `url(${bgCurve.src})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center relative z-10 -top-[200px] md:-top-[140px] ">
          {methods.map((method, index) => (
            <div key={index} className="flex flex-col items-center md:space-y-4">
              <h3 className="font-semibold text-base md:text-2xl lg:text-3xl">{method.title}</h3>
              <Image src={method.icon} alt={method.title} className="w-[104px] md:w-[150px] lg:w-[201px]" />
              <p className="text-white text-base md:text-2xl lg:text-3xl max-w-[230px] md:max-w-xs font-light">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-stretch items-center justify-between gap-4 md:gap-6 lg:gap-8 bg-black rounded-lg md:p-6 !-mt-44 md:!mt-0 w-[85%] mx-auto">
          <div className="space-y-4 text-center md:text-left max-w-[400px]">
            <h3 className="text-2xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-semibold">
              Want to see the method?
            </h3>
            <p className="text-white text-sm md:text-lg lg:text-2xl">
              Let me walk you through how we do this step by step
            </p>
            <div className="hidden md:block justify-center md:justify-start mt-16 md:mt-6 ">
              <div className="relative">
                <Image
                  src={BtnIcon}
                  alt=""
                  className="absolute -top-[40px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
                />
                <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[399px] ">
                  I&#39;m ready to follow your method:
                  <br />
                  Take the Red Pill
                </GradientButton>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[234px] md:h-auto bg-[#C8C8C8] rounded-[17px] md:rounded-3xl lg:rounded-[32.49px] mt-5 md:mt-0" />
        </div>
        <div className="md:hidden flex justify-center mt-14">
        <div className="relative">
          <Image src={BtnIcon} alt='' className=" absolute -top-[40px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]" />
          <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[220px] md:max-w-[399px] ">
            I&#39;m ready to follow your method:
            <br />
            Take the Red Pill
          </GradientButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MatrixBreakdownSection;
