import Image, { StaticImageData } from "next/image";
import React from "react";

type ServiceCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  members: string;
  price: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  members,
  price,
}) => {
  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden transition-transform duration-300 flex flex-col">
      <div className="relative h-[271px]">
        <Image src={image} alt={title} fill className="w-full  object-cover" />
      </div>
      <div className="p-6 text-left flex-1">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 line-clamp-1 text-[#FFA500]">
          {title}
        </h3>
        <p className="text-base md:text-lg lg:text-xl xl:leading-[162%] text-[#F0F0F0] mb-4">
          {description}
        </p>
        <div className="flex justify-between text-sm font-semibold border-t-[1px] border-[#5B5B5B] pt-4 line-clamp-3">
          <span className="text-xs lg:text-sm text-[#F0F0F0]">
            {members}
          </span>
          <span className="text-base md:text-lg lg:text-xl font-bold text-[#F0F0F0]">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
