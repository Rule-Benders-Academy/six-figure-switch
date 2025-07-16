'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import TestimonialIcon from "../../_assets/testimonial-icon.svg"
import StarIcon from "../../_assets/Star.svg"
const testimonials = [
  {
    id: 1,
    name: 'Ben Murray',
    review:
      'The high paid contractor course made me look at my job and the jobs around me in a totally different way. Will has confirmed things I have been feeling about the work environment for some time now. Time for a change. Thank you!',
  },
  {
    id: 2,
    name: 'Brittany Dowell',
    review:
      'Best course I have taken. No fluff and so much sense. I’ve put Management Consultant’s on a pedestal which I didn’t think I could reach. I see now how to make Management Consultancy money. Watch this space.',
  },
  {
    id: 3,
    name: 'Catrina Knight',
    review:
      "The course is engaging. It tells Will's amazing story teaches you key skills along the way. You can do the exercises as part of the course or keep them to go back to after as many times as you want to. Thanks Rule Benders!",
  },
  {
    id: 4,
    name: 'David Chen',
    review:
      'Absolutely eye-opening. The way this course changes your mindset and gives you tools is priceless. Highly recommended for career switchers!',
  },
];
const Chevron = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    className={`w-5 h-5 ${direction === 'left' ? '' : 'rotate-180'}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const SchoolTestimonials = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full px-6 py-20 md:px-16 bg-white">
      <div className="">
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-12 w-full lg:w-[65%] mx-auto">
          Trusted by Thousands of Happy Learners
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-4 md:px-6">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
                  <Image src={TestimonialIcon} alt=''/>
                  <p className="text-[#151418] text-base md:text-lg lg:text-xl mb-6 mt-4">{item.review}</p>
                  <div>
                    <div className="flex gap-1 text-black mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Image src={StarIcon} alt='' key={i}/>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-end gap-4 shrink-0 mt-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-gray-100 text-black rounded-full p-2 shadow hover:bg-gray-200 transition"
          >
            <Chevron direction="left" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-gray-100 text-black rounded-full p-2 shadow hover:bg-gray-200 transition"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolTestimonials;
