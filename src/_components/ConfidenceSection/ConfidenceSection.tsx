'use client';
import React from 'react';
import bgCurve from "../../_assets/Ellipse-bg.png"
import MoneyBackIcon from "../../_assets/Money-Back-Guarantee-icon.png"
import OfferExtended from '../OfferExtended/OfferExtended';
import Image from 'next/image';

const steps = [
  'Purchase our training programme',
  'Take the course',
  'Join one of the coaching calls',
];

const ConfidenceSection = () => {
  return (
    <section className="bg-black text-white text-center relative overflow-hidden">
      <div className="">
        <div className="bg-gradient-to-b from-[#434040] to-[#000000] py-8 md:py-10 lg:py-16 relative px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="relative z-10 pb-32">
            <h1 className="text-2xl md:text-5xl lg:text-[64px] leading-tight font-medium max-w-[369px] md:max-w-[728px] mx-auto"> We are so confident
              that we can help you into
              Consulting that we are <span className="font-bold">ready to bet on it.</span></h1>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute -top-[140px] left-0 z-[1] w-full h-[200px]" style={{
            backgroundImage: `url(${bgCurve.src})`,
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div>
          <div className="relative z-10 transform translate-y-[-80px] pb-10 md:pb-16 lg:pb-20">
            <div className="flex justify-center">
              <div className="max-w-[300px] sm:max-w-[430px] md:max-w-[470px] mx-auto text-left text-white text-sm pl-6 md:pl-10 lg:pl-14 relative ">
                <div className="relative w-full">
                  <div className="absolute -left-[22px] md:-left-[58px] top-[calc(0.5rem+0.5em)] md:top-[calc(0.5rem+0.5em)] lg:top-[calc(2rem+0.5em)] bottom-[calc(0.3rem+0.5em)] md:bottom-[calc(0.5rem+0.5em)] lg:bottom-[calc(2rem+0.5em)] w-[1px] md:w-[2.5px] bg-gradient-to-b from-[#FFA500] to-[#412B02] z-0" />
                  <div className="absolute top-[calc(0.5rem+0.5em)] md:top-[calc(0.5rem+0.5em)] lg:top-[calc(2rem+0.5em)] -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5 rounded-full bg-[#FFA500] z-10" />
                  <div className="absolute bottom-[calc(0.3rem+0.5em)] md:bottom-[calc(0.5rem+0.5em)] lg:bottom-[calc(2rem+0.5em)] -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5 rounded-full bg-[#FFA500] z-10" />
                  <div className="space-y-5 md:space-y-8 lg:space-y-12 relative z-10">
                    {steps.map((para, index) => (
                      <div
                        key={index}
                        className="relative text-sm md:text-2xl lg:text-4xl max-w-[149px] md:max-w-[373px]"
                      >
                        {index !== 0 && index !== steps.length - 1 && (
                          <div className="absolute top-1/2 -translate-y-1/2 -left-[25.5px] md:-left-[63px] lg:-left-[67px] w-2 md:w-3 lg:w-5 h-2 md:h-3 lg:h-5  rounded-full bg-[#FFA500] z-10" />
                        )}
                        {para}
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>

            <div className="text-base md:text-2xl lg:text-4xl leading-relaxed mt-6 md:mt-10 lg:mt-20">
              <p>Try it risk-free for 14 days.</p>
              <p className="mt-5 md:mt-7 lg:mt-10">
                If you’re not 100% confident you’re on<br />
                the path to 6–figures, we’ll give you<br />
                your money back<br />
                — no questions asked.
              </p>
            </div>
            <div className="relative mt-[84px] md:mt-[120px] lg:mt-[173px] ">
              <div className="absolute -top-[30px] md:-top-[90px] lg:-top-[106px] left-1/2 transform -translate-x-1/2">
                <Image src={MoneyBackIcon} alt='' className="w-[60px] md:w-40 lg:w-[152px]"/>
              </div>
              <OfferExtended initialDays={7} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
