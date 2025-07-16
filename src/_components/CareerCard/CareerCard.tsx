import React from 'react';
import { StaticImageData } from 'next/image';

interface CareerCardProps {
  title: string;
  name: string;
  role: string;
  image: StaticImageData;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, name, role, image }) => {
  return (
    <div
      className="p-4 rounded-[25.59px] text-white text-center backdrop-blur-sm transition w-[361.59px] ml-6 h-[436.53px] flex items-end justify-center"
      style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover' }}
    >
      <div>
        <h3 className="uppercase text-xl md:text-3xl lg:text-4xl mb-6 w-[80%] mx-auto">{title}</h3>
        <p className="text-lg md:text-xl lg:text-2xl font-medium">{name}</p>
        <p className="text-xs md:text-sm lg:text-base text-[#9A9A9A]">{role}</p>
      </div>
    </div>
  );
};

export default CareerCard;
