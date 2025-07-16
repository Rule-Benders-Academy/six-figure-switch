import React from 'react'
import Chip from '../Chip/Chip';
import GlobalButton from '../GlobalButton/GlobalButton';
import Image from 'next/image';
import CardImg from "../../_assets/comunity-img.png"

const CommunityBanner = () => {
  return (
    <section className="bg-black rounded-3xl overflow-hidden">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 items-center min-h-[771px]">
        <div className="bg-black text-white p-8 md:p-10 space-y-5 md:col-span-3 md:-mr-1">
          <Chip text="Community" className=' px-5 py-2 !text-base' />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[123%]">
            Join likeminded people on their Journey to a better life
          </h2>
          <p className="lg:text-xl md:text-lg text-base">
            Welcome to the Rule Benders Community — where ambition meets opportunity.
          </p>
          <p className="lg:text-xl md:text-lg text-base lg:my-10 md:my-8 my-5">
            Join a network of professionals breaking free from traditional career paths to redefine success.
            This isn’t just a forum — it’s a space to grow, connect, and elevate your journey.
          </p>
          <p className="lg:text-xl md:text-lg text-base mb-7">
            Start transforming your career today. Let’s turn bold goals into real wins, together.
          </p>
          <GlobalButton>Join our Community</GlobalButton>
        </div>
        <div className='w-full h-full md:col-span-2 bg-black'>
          <Image
            src={CardImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;

