'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardImg from "../../_assets/testimonial-img.png"
import LeftArrow from "../../_assets/left-arrow.svg"
import Image from 'next/image';
import Chip from '../Chip/Chip';
import TestimonialCard from '../TestimonialsCard/TestimonialsCard';

const benders = [
  {
    imageSrc: CardImg,
    title: 'Rule Benders Academy has shown me a world of opportunity across careers in Finance, Consulting, Sustainability, Art and Culture. The instructors are real people who started at the bottom and everyone a huge success and an expert in their field. My biggest problem now is choosing which direction to go!',
    name: 'Adam Gaskell',
  },
  {
    imageSrc: CardImg,
    title: 'Rule Benders Academy has shown me a world of opportunity across careers in Finance, Consulting, Sustainability, Art and Culture. The instructors are real people who started at the bottom and everyone a huge success and an expert in their field. My biggest problem now is choosing which direction to go!',
    name: 'Adam Gaskell',
  },
  {
    imageSrc: CardImg,
    title: 'Rule Benders Academy has shown me a world of opportunity across careers in Finance, Consulting, Sustainability, Art and Culture. The instructors are real people who started at the bottom and everyone a huge success and an expert in their field. My biggest problem now is choosing which direction to go!',
    name: 'Adam Gaskell',
  },
  {
    imageSrc: CardImg,
    title: 'Rule Benders Academy has shown me a world of opportunity across careers in Finance, Consulting, Sustainability, Art and Culture. The instructors are real people who started at the bottom and everyone a huge success and an expert in their field. My biggest problem now is choosing which direction to go!',
    name: 'Adam Gaskell',
  },
];

export default function HomeTestimonials() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: false,
  };

  return (
    <section className="w-full space-y-16 py-10 px-4 md:px-12">
      <div className=" mx-auto">
        <Chip text="Testimonials" className='bg-black/5 !text-black px-5 py-2' />
        
        <div className="flex justify-between mt-6 items-center px-2">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-black">What our Clients say?</h2>

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

        <div className="mt-10" style={{ position: 'relative', width: '100%', margin: 'auto' }}>
          <Slider ref={sliderRef} {...settings}>
            {benders.map((bender, index) => (
              <div key={index} className="px-4">
                <TestimonialCard
                  imageSrc={bender.imageSrc}
                  quote={bender.title}
                  author={bender.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
