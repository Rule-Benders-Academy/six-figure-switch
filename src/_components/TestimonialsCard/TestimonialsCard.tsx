import React from 'react';
import { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  imageSrc: StaticImageData | string;
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageSrc, quote, author }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-[20px] overflow-hidden bg-black shadow-md w-full h-[629px]">
      <div className="relative w-full md:w-1/2 h-[300px] md:h-auto" style={{
        backgroundImage: `url(${typeof imageSrc === 'string' ? imageSrc : imageSrc.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      >
      </div>

      <div className="w-full md:w-1/2 bg-black text-white p-6 md:p-12 flex flex-col justify-center -ml-1">
        <div className="text-4xl font-serif mb-4">“</div>
        <p className="text-lg md:text-xl lg:text-[24px] lg:leading-[35px] leading-relaxed mb-6">
          {quote}
        </p>
        <p className="text-xl md:text-2xl lg:text-[32px] font-semibold ">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
