'use client';

import React from 'react';
import Image from 'next/image';
import FounderImage from '../../_assets/will-img.png';
import AchievementsImg1 from "../../_assets/achievements-img-1.png";
import AchievementsImg2 from "../../_assets/achievements-img-2.png";
import AchievementsImg3 from "../../_assets/achievements-img-3.png";
import AchievementsImg4 from "../../_assets/achievements-img-4.png";
import AchievementsImg5 from "../../_assets/achievements-img-5.png";
import AchievementsImg6 from "../../_assets/achievements-img-6.png";
import AchievementsImg7 from "../../_assets/achievements-img-7.png";
import StarsIcon from "../../_assets/six-figure-icon-8.png"

const achievements = [
  {
    icon: AchievementsImg1,
    text: (
      <>
        <div className="flex items-center gap-2 justify-center">
          <Image src={StarsIcon} alt='' className='w-3 md:w-4 lg:w-5' />
          <span className="font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text ">  20+ CLIENTS</span>
          <Image src={StarsIcon} alt='' className='w-3 md:w-4 lg:w-5' />
          <br />
        </div>
        (StartUp / Corporate / Government)
      </>
    ),
  },
  {
    icon: AchievementsImg2,
    text: (
      <>
        80% of Consulting Contracts <br />
        <span className="font-bold text-white">gained</span> without agency help
      </>
    ),
  },
  {
    icon: AchievementsImg3,
    text: (
      <>
        <span className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-bold">DAY RATE RISE FROM</span> <br />
        <div className="flex items-center gap-2 justify-center">
          <Image src={StarsIcon} alt='' className='w-3 md:w-4 lg:w-5' />
          <span className="font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text">£400 to £1650</span>
          <Image src={StarsIcon} alt='' className='w-3 md:w-4 lg:w-5' />
        </div>

        in 7 years
      </>
    ),
  },
  {
    icon: AchievementsImg4,
    text: (
      <>
        <span className="font-bold text-white">Zero</span> periods <br /> of unplanned unemployment
      </>
    ),
  },
  {
    icon: AchievementsImg5,
    text: (
      <>
        <span className="font-bold text-white">5 mini retirements</span> <br />
        more than three years out
      </>
    ),
  },
  {
    icon: AchievementsImg6,
    text: (
      <>
        My Consultancy has won several {" "}
        <span className="font-bold text-white">Government Contracts + major private sector clients</span>
      </>
    ),
  },
  {
    icon: AchievementsImg7,
    text: (
      <>
        I did all this <br />
        <span className="font-bold text-white">without ever working for a big consultancy</span>
      </>
    ),
  },
];

const FounderIntro: React.FC = () => {
  return (
    <section className="text-white lg:mt-32 md:mt-16 mt-11 ">
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-10 lg:gap-24 mb-7 lg:mb-12 lg:w-[80%] mx-auto">
        <div className="text-2xl md:text-4xl lg:text-[44px] lg:leading-[100%] text-center block md:hidden mx-auto md:mx-0">
          <h2 className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-bold">
            Hi I&#39;m Will
          </h2>
          <h3 className="mt-1">Founder of Conquer Consultancy</h3>
        </div>
        <div className="lg:w-[433px] md:w-[300px] w-[210px] rounded-full mx-auto md:mx-0 overflow-hidden flex-shrink-0">
          <Image
            src={FounderImage}
            alt="Founder - Will"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center md:text-left lg:mt-3">
          <div className="text-2xl md:text-4xl lg:text-[44px] lg:leading-[100%] hidden md:block">
            <h2 className="bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] text-transparent bg-clip-text font-bold">
              Hi I&#39;m Will
            </h2>
            <h3 className="mt-1">Founder of Conquer Consultancy</h3>
          </div>
          <p className="text-base md:text-2xl lg:text-[24px] leading-[100%] lg:mt-20 md:mt-6 mt-4 font-[300] max-w-[640px]">
            I have been an Independant Consultant for 20 years and rose to the
            top of the corporate ladder as a consultant in under ten years
            consistently beating big consultancies to high value contracts.
          </p>
        </div>
      </div>

      <h4 className="text-lg lg:text-[44px] text-center font-bold mb-5 md:mb-8 lg:mb-16 mt-2 lg:mt-32">
        Here is why you should listen to me:
      </h4>
      <div className="mx-auto bg-[#373536] pt-5 pb-8 md:py-7 lg:py-8 border-[1px] border-[#595758] rounded-2xl md:rounded-3xl lg:rounded-[36px] shadow-[18.11px_22.64px_22.64px_rgba(0,0,0,0.5)] xl:max-w-[1247px]">
        <div
          className={`flex flex-col items-center text-center md:px-4 w-[70%] md:w-[170px] lg:w-[240px] mx-auto mb-3 sm:hidden`}
        >
          <div className=" mb-3">
            <Image
              src={achievements[0].icon}
              alt="Icon"
              className="lg:w-[179px] md:w-[130px] w-[88px] h-full"
            />
          </div>
          <div className="text-base md:text-sm leading-snug">
            {achievements[0].text}
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center md:px-4 w-[40%] md:w-[190px] lg:w-[240px] ${
                index === 0 && "hidden sm:flex"
              }`}
            >
              <div className="mb-2">
                <Image
                  src={item.icon}
                  alt="Icon"
                  className="lg:w-[100px] md:w-[130px] w-[88px] h-full"
                />
              </div>
              <div className="text-base  lg:text-base leading-snug">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;
