import React from 'react';
import Image, { StaticImageData } from 'next/image';
import GlobalButton from '../GlobalButton/GlobalButton';

interface CardData {
  image: StaticImageData | string;
  title: string;
}

interface LaunchPadProps {
  heading: string;
  title: string;
  cards: CardData[];
  descriptionTitle: string;
  price: string;
  bulletPoints: string[];
  buttonText: string;
  themeColor: string;
  description: string;
}

const LaunchPad: React.FC<LaunchPadProps> = ({
  heading,
  title,
  cards,
  descriptionTitle,
  price,
  bulletPoints,
  buttonText,
  themeColor,
  description
}) => {
  return (
    <div className=" bg-[#1A1A1A] text-white p-7 md:p-9 lg:p-12 rounded-[17px] mx-auto my-10 pt-14">
      <h2 className="text-2xl md:text-4xl lg:text-[55.11px] font-bold text-center mb-4 lg:leading-[120%]">
        {heading}
      </h2>

      <div
        className="text-center py-6 md:py-8 lg:py-10 font-bold text-2xl md:text-4xl lg:text-[55.11px] text-black rounded-[10px] mb-6 mt-14"
        style={{ backgroundColor: themeColor }}
      >
        {title}
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-10 mb-6 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="h-[241.97px] w-[255.75px] text-center relative">
            <Image src={card.image} alt={card.title} className="mx-auto rounded-3xl" fill />
            <p className="text-sm md:text-base lg:text-lg mt-2 font-semibold uppercase absolute bottom-5 w-full left-1/2 -translate-x-1/2">
              {card.title}
            </p>
            <div className=" absolute h-10 w-[1px] bg-white left-1/2 -translate-x-1/2 -top-10"></div>
          </div>
        ))}

      </div>

      <div className="mb-4 mt-12">
        <div className="flex justify-between items-center">
          <p className="text-xl md:text-2xl lg:text-[34.44px] font-semibold mb-4">{descriptionTitle}</p>
          <p className="text-2l md:text-4xl lg:text-[41px] font-bold text-[#FFA500] mb-4">{price}</p>
        </div>

        <div className="text-sm md:text-base lg:text-xl mb-7 text-[#E1E1E1]">{description}</div>

        <ul className="list-disc list-inside space-y-1 text-[#E1E1E1] text-sm md:text-base lg:text-xl">
          {bulletPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="text-end mt-10">
        <GlobalButton>
          {buttonText}
        </GlobalButton>
      </div>

    </div>
  );
};

export default LaunchPad;
