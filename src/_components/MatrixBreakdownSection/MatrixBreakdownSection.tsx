import React from "react";
import Image from "next/image";
import bgCurve from "../../_assets/Ellipse-bg.png";
import MindsetIcon from "../../_assets/metrix-mindset-icon.png";
import MethodIcon from "../../_assets/metrix-method-icon.png";
import MarketIcon from "../../_assets/metrix-market-icon.png";
import BtnIcon from "../../_assets/metrix-btn-icon.svg";
import GradientButton from "../GradientButton/GradientButton";
import { useState } from "react";
import Thumbnail from "@/_assets/thubnail-2.png";

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
;

const MatrixBreakdownSection: React.FC = () => {

  
  const [play, setPlay] = useState(false);
  const [ready, setReady] = useState(false);
  return (
    <section className="bg-black text-white pb-16 space-y-16">
      <div className="bg-gradient-to-b from-[#434040] to-[#000000] pt-10 pb-28 md:pt-20 md:pb-40 mb-32 relative text-center">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-5xl lg:text-[44px] font-medium leading-tight">
            This is how we break you
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-[44px] font-bold md:mt-2 ">
            out of the Matrix
          </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center relative z-10 -top-[200px] md:-top-[140px] lg:w-[80%] mx-auto">
          {methods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:space-y-4"
            >
              <h3 className="font-semibold text-base md:text-2xl">
                {method.title}
              </h3>
              <Image
                src={method.icon}
                alt={method.title}
                className="w-[104px] md:w-[130px] lg:w-[150px]"
              />
              <p className="text-white text-base md:text-2xl lg:text-2xl max-w-[230px] md:max-w-xs font-light">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-6 lg:gap-8 bg-black rounded-lg md:p-6 !-mt-44 md:!mt-0 w-[90%] lg:w-[80%] mx-auto">
          <div className="space-y-4 text-center md:text-left max-w-[400px]">
            <h3 className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] font-semibold">
              Want to see the method?
            </h3>
            <p className="text-white text-sm md:text-lg lg:text-2xl">
              Let me walk you through how we do this step by step
            </p>
            <div className="hidden md:block justify-center md:justify-start mt-16 md:mt-6">
              <div className="relative">
                <Image
                  src={BtnIcon}
                  alt=""
                  className="absolute -top-[40px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
                />
                <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !leading-none !py-[14px] !px-5 md:!px-8 lg:!px-[30px] max-w-[399px] ">
                  Take the Red Pill
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Responsive, watchable sizes */}
          <div className="w-full max-w-[980px] mt-6 md:mt-8 lg:mt-12">
            <div
              className="relative rounded-[17px] md:rounded-[35px] lg:rounded-[15px] overflow-hidden
      h-[240px] sm:h-[300px] md:h-[420px] lg:h-[440px] bg-black"
            >
              {/* Video */}
              {play && (
                <iframe
                  key="video"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                    ready ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://player.vimeo.com/video/1113012539?autoplay=1&muted=1&background=1&loop=1&playsinline=1"
                  title="How We Do It"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setReady(true)}
                />
              )}

              {/* Thumbnail layer (shown until video is ready) */}
              {!ready && (
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => setPlay(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                >
                  <Image
                    src={Thumbnail}
                    alt="How We Do It thumbnail"
                    fill
                    priority
                    className="object-cover will-change-transform transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4 transition-transform duration-300 group-hover:scale-105">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-14">
          <div className="relative">
            <Image
              src={BtnIcon}
              alt=""
              className=" absolute -top-[25px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
            />
            <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[220px] md:max-w-[399px] ">
              Take the Red Pill
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixBreakdownSection;
