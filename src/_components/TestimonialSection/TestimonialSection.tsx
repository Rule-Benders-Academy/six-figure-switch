'use client';

import React from 'react';
import GradientButton from '../GradientButton/GradientButton';
import VideoOnView from '../VideoBackground/VideoBackground';
interface Props {
  reverseOrder?: boolean;
  name: string;
  description: string | React.ReactNode;
  videoUrl?: string;
}

const TestimonialSection = ({ reverseOrder, name, description, videoUrl }: Props) => {
  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white pt-6 pb-10 md:py-14 lg:py-20 px-4">
      <div className="sm:px-8 md:px-16 lg:px-48 flex flex-col lg:flex-row items-center gap-5 md:gap-8 lg:gap-10 lg:w-[90%] mx-auto">
        <div className={`flex-[0.7] text-center lg:text-left ${reverseOrder ? 'md:order-2' : 'order-1'}`}>
          <h3 className="text-4xl md:text-5xl lg:text-[64px] lg:leading-[100%]">
            Real Stories,<br /> Real Results
          </h3>
          <div className="flex justify-center lg:justify-start items-center text-xl md:text-2xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFBE48] via-[#FFA500] to-[#E99803] bg-clip-text text-transparent pt-6 pb-2 md:py-5 lg:py-7">
            ★ ★ ★ ★ ★
          </div>
          <h4 className="font-bold text-base md:text-3xl lg:text-4xl mb-1">{name.toUpperCase()}</h4>
          <p className="text-base md:text-lg lg:text-2xl md:mt-4 font-light">{description}</p>
          <GradientButton className="!text-sm md:!text-xl lg:!text-2xl !py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[403px] hidden md:block">
            HELP ME LIKE YOU HELPED {name.toUpperCase()}
          </GradientButton>
        </div>

        <div className={`flex-1 w-full -mb-5 md:mb-0 ${reverseOrder ? 'md:order-1' : 'order-2'}`}>
          {videoUrl ? (
            <div className="relative w-full h-[334px] md:h-[450px] lg:h-[661px] rounded-2xl lg:rounded-[59.73px] overflow-hidden">
              <VideoOnView src={videoUrl} />
            </div>
          ) : (
            <div className="w-full h-[334px] md:h-[450px] lg:h-[661px] bg-gray-300 rounded-2xl lg:rounded-[59.73px]" />
          )}
        </div>

        <GradientButton
          className={`!text-sm md:!text-xl lg:!text-2xl !py-[8px] md:!py-[14px] !px-5 md:!px-8 lg:!px-[35px] max-w-[168px] md:max-w-[403px] md:hidden mt-0 ${reverseOrder ? 'md:order-1' : 'order-3'}`}
        >
          HELP ME LIKE YOU HELPED {name.toUpperCase()}
        </GradientButton>
      </div>
    </section>
  );
};

export default TestimonialSection;
