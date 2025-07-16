import React from 'react'
import { StaticImageData } from 'next/image';

interface GlobalCardProps {
  name: string;
  role: string;
  imageSrc: StaticImageData;
}

const MemberCard  = ({ name, role, imageSrc }: GlobalCardProps) => {
    return (
      <div className="bg-black text-white rounded-[20px] overflow-hidden w-full max-w-xs mx-auto">
        <div className="w-full h-[360px]" style={{
          backgroundImage: `url(${imageSrc.src})`,
          backgroundSize: 'cover',
        }}>

        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl">{name}</h3>
          <p className="text-[#FFA500] text-sm md:text-lg lg:text-xl line-clamp-1 w-[90%]">{role}</p>
        </div>
      </div>
    );
  };

export default MemberCard;