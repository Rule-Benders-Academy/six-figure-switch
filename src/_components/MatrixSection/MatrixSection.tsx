'use client';
import React from 'react';
import Image from 'next/image';
import MetrixImg from '../../_assets/metrix-img.png'
import BggImg from '../../_assets/metrix-bg-img.png'
import GradientButton from '../GradientButton/GradientButton';
import BtnIcon from "../../_assets/metrix-btn-icon.svg"

const MatrixSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white py-12 lg:py-16 px-4"
      style={{
        backgroundImage: `url(${BggImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" sm:px-8 md:px-16 lg:px-24 w-[95%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 ">
          <div className="flex-[0.8] lg:flex-[0.6] text-left">
            <h2 className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] mb-4 w-[70%] md:w-full mx-auto text-center md:text-left">
              Do you realise that{" "}
              <span className="text-white font-bold">
                you’re in the Matrix?
              </span>
            </h2>
            <div className="flex-1 md:hidden">
              <Image
                src={MetrixImg}
                alt="Matrix Character"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <ul className="list-disc list-inside space-y-3 md:space-y-4 mt-6 text-base md:text-lg  text-center md:text-left">
              <li>
                Do you feel trapped in your career and you know you can be more?
              </li>
              <li>
                Are you ready to escape the rat race and live life on your
                terms?
              </li>
              <li>
                You can have the life of your dreams if you take action now.
              </li>
            </ul>
            <p className="mt-5 md:mt-6 lg:mt-7 text-2xl w-[85%] md:w-full mx-auto text-center md:text-left">
              You’re in the right place. This is your smart exit plan.
            </p>

            <div className="flex justify-center md:justify-start mt-16 ">
              <div className="relative">
                <Image
                  src={BtnIcon}
                  alt=""
                  className=" absolute -top-[40px] md:-top-5 left-[25px] md:-left-5 w-[106.5px] md:w-[140px] lg:w-[178px]"
                />
                <GradientButton className="!text-sm md:!text-xl lg:!text-[24px] !py-[14px] !px-5 md:!px-8 lg:!px-[35px]">
                  TAKE THE RED PILL
                </GradientButton>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <Image
              src={MetrixImg}
              alt="Matrix Character"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;
