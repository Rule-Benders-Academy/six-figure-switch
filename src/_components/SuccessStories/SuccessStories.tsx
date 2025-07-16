'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import CardImg1 from "../../_assets/community-card-1.png"
import CardImg2 from "../../_assets/community-card-2.png"
import CardImg3 from "../../_assets/community-card-3.png"
import CardImg4 from "../../_assets/community-card-4.png"
import LeftArrow from '../../_assets/left-arrow.svg';
import Chip from '../Chip/Chip';

const SuccessStories = () => {
  const SuccessSliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, name: 'David Hunt', title: 'Programme Manager', image: CardImg1 },
    { id: 2, name: 'Brittany Dowell', title: 'Head of Customer Trans...', image: CardImg2 },
    { id: 3, name: 'Catrina Knight', title: 'Business Analyst', image: CardImg3 },
    { id: 4, name: 'Matt White', title: 'Portfolio Director', image: CardImg4 },
    { id: 5, name: 'Jane Smith', title: 'Tech Lead', image: CardImg1},
    { id: 6, name: 'Catrina Knight', title: 'Business Analyst', image: CardImg3 },
    { id: 7, name: 'David Hunt', title: 'Programme Manager', image: CardImg4 },
    { id: 8, name: 'Brittany Dowell', title: 'Head of Customer Trans...', image: CardImg2 },
    { id: 9, name: 'Catrina Knight', title: 'Business Analyst', image: CardImg4 },
  ];

  return (
    <section className="w-full px-6 py-12 md:px-16 bg-white" id="ourStory">
      <div className="">
        <Chip text="Success Stories" className="bg-black/5 !text-black px-5 py-2" />

        <div className="flex justify-between mt-6 items-center flex-wrap gap-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black w-full lg:w-[65%]">
            See What’s Possible When You Take the Leap
          </h2>

          <div className="flex justify-end gap-4 shrink-0">
            <button
              onClick={() => SuccessSliderRef.current?.slickPrev()}
              className="flex justify-center items-center cursor-pointer bg-black/5 w-10 h-10 text-white rounded-full"
            >
              <Image src={LeftArrow} alt="Previous" className="h-4 cursor-pointer" />
            </button>
            <button
             onClick={() => SuccessSliderRef.current?.slickNext()}
              className="flex justify-center items-center cursor-pointer bg-black/5 w-10 h-10 text-white rounded-full"
            >
              <Image src={LeftArrow} alt="Next" className="h-4 rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-10">
          <Slider ref={SuccessSliderRef} {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="px-2">
                <div className="relative h-[360px] rounded-xl overflow-hidden ">
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-[0.7]"></div>
                  <Image
                    src={card.image}
                    alt={card.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 w-full z-10 p-4 text-white flex flex-col justify-end h-[40%]">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{card.name}</h3>
                    <p className="text-sm md:text-lg lg:text-xl text-[#AEAEAE]">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
