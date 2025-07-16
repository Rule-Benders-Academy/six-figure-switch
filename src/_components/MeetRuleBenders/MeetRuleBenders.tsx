'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RuleBenderCard from "../RuleBenderCard/RuleBenderCard";
import CardBg1 from "../../_assets/career-card-1.png";
import CardBg2 from "../../_assets/career-card-bg.png";
import CardBg3 from "../../_assets/career-card-3.png";
import CardBg5 from "../../_assets/career-card-5.png";
import CardBg7 from "../../_assets/career-card-7.png";
import LeftArrow from "../../_assets/left-arrow.svg"
import Image from 'next/image';
import Chip from '../Chip/Chip';

const benders = [
  {
    imageSrc: CardBg1,
    title: 'Rule Benders – Leadership',
    name: 'Jason Barett',
  },
  {
    imageSrc: CardBg3,
    title: 'Rule Benders – Power Recruiter',
    name: 'Alex Johnstone',
  },
  {
    imageSrc: CardBg2,
    title: 'Rule Benders – High paid Contractor',
    name: 'Will Richardson',
  },
  {
    imageSrc: CardBg7,
    title: 'Rule Benders - Evolutionary AI',
    name: 'Aamar Hussain',
  },
  {
    imageSrc: CardBg5,
    title: 'Rule Benders - Fashion Icon',
    name: 'Hofit Golan',
  },
];

export default function MeetRuleBenders() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };
  

  return (
    <section className="w-full py-12 md:py-20 pb-20  bg-white" id="ourStory">
      <div className="px-6 md:px-16">
        <Chip text="Our Stories" className='bg-black/5 !text-black px-5 py-2' />
        <div className="flex justify-between mt-6 items-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-black">Meet the Rule Benders</h2>

          <div className="flex justify-end gap-4 mb-4 shrink-0">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex justify-center items-center cursor-pointer bg-black/5 w-10 h-10 text-white rounded-full shrink-0"
            >
              <Image src={LeftArrow} alt='' className='h-4' />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="flex justify-center items-center cursor-pointer bg-black/5 w-10 h-10 text-white rounded-full shrink-0"
            >
              <Image src={LeftArrow} alt='' className='h-4 rotate-180' />
            </button>
          </div>
        </div>
        </div>
        <div className="mt-10 pl-6 md:pl-16 overflow-hidden max-h-[700px] lg:max-h-[731px]" style={{ position: 'relative', width: '100%', margin: 'auto' }}>
          <Slider ref={sliderRef} {...settings}>
            {benders.map((bender, index) => (
              <RuleBenderCard key={index} {...bender} />
            ))}
          </Slider>
        </div>
    </section>
  );
}
