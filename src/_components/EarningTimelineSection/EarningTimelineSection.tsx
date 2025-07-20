'use client';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import BgImg from "../../_assets/learn-system-bg-img.png";
import CardImg1 from "../../_assets/earning-timeline-card-img-1.png";
import CardImg2 from "../../_assets/Daniel Image.jpg";
import CardImg3 from "../../_assets/Brittany Head Shot .jpeg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    label: 'BEFORE',
    image: CardImg1,
    title: 'STUCK IN THE SYSTEM',
    description:
      'Tired of waiting for promotions. Feeling underpaid and undervalued. Unsure how to escape the job trap. Self doubt creeping in. Fear that time change is limited.',
  },
  {
    label: 'DURING',
    image: CardImg2,
    title: 'BUILDING A NEW IDENTITY',
    description:
      'Discovering how the system really works and position yourself as a consultant. Gaining confidence and momentum. Building a high value offer. Starting to attract real interest.',
  },
  {
    label: 'AFTER',
    image: CardImg3,
    title: 'IN CONTROL & IN DEMAND',
    description:
      'Landing your first $750 to $1400/day role. Seen as a trusted expert, not another employee. Working less, earning more, living smarter. Growth finally matches capability.',
  },
];

const EarningTimelineSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,
    speed: 500,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: () => (
      <div className="w-3 h-3 md:w-4 md:h-4 bg-[#D9D9D9] rounded-full transition-all duration-300" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-10">
        <ul className="flex justify-center items-center gap-1 md:gap-2">
          {React.Children.map(dots, (dot, idx) => (
            <li
              key={idx}
              className={`transition-transform duration-300 ${currentSlide === idx ? 'scale-[1.5]' : 'scale-100'
                }`}
            >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <section
      className="bg-black text-white py-16 px-4 overflow-visible"
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {isMounted && (
        <div className="mb-12">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, idx) => (
              <div key={idx} className="flex justify-center  w-[697px]">
                <div
                  className={` transition-all duration-700 ease-in-out transform 
                    ${currentSlide === idx ? 'scale-100 z-20' : 'scale-[0.8] opacity-60 z-10'}
                  `}
                >
                  <div
                    className={`rounded-2xl md:rounded-3xl lg:rounded-[35.4px] border border-white/10 backdrop-blur-sm p-6 shadow-xl h-full flex flex-col items-center text-center transition-all duration-300 bg-white bg-opacity-[0.08] py-10`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="rounded-full mb-3 h-[98px] md:h-[150px] lg:h-[175px] w-[98px] md:w-[150px] lg:w-[175px] border border-[#424242]"
                    />
                    <h3 className="text-2xl md:text-3xl lg:4xl lg:leading-[90%] font-bold mb-6 mt-6">{card.title}</h3>
                    <hr className="border-white w-[80%] md:h-1 my-2" />
                    <p className="text-[9px] md:text-2xl lg:text-2xl leading-relaxed lg:w-[70%]">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default EarningTimelineSection;
