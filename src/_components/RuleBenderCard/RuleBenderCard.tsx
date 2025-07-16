import Image, { StaticImageData } from 'next/image';
import React from 'react';

type RuleBenderCardProps = {
  imageSrc: string | StaticImageData;
  title: string;
  name: string;
};

const RuleBenderCard: React.FC<RuleBenderCardProps> = ({ imageSrc, title, name }) => {
  return (
    <div className="relative w-[220px] sm:w-[250px] md:w-[300px] lg:w-[395.29px] flex-shrink-0 rounded-3xl overflow-hidden mr-5">
      <div className="relative w-full h-[623.09px]">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className='rounded-3xl h-full object-fill' />
      </div>
      <div className="p-3">
        <h3 className="text-md md:text-lg lg:text-[28px] font-bold text-black leading-tight">{title}</h3>
        <p className="text-sm md:text-lg lg:text-xl text-[#949494] font-bold">{name}</p>
      </div>
    </div>
  );
};

export default RuleBenderCard;
