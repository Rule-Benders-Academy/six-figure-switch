'use client';

import React from 'react';
import CareerCard from "../CareerCard/CareerCard";
import Chip from '../Chip/Chip';
import GlobalSlider from '../GlobalSlider/GlobalSlider';
import CardBg1 from "../../_assets/career-card-1.png";
import CardBg2 from "../../_assets/career-card-bg.png";
import CardBg3 from "../../_assets/career-card-3.png";
import CardBg4 from "../../_assets/career-card-4.png";
import CardBg5 from "../../_assets/career-card-5.png";
import CardBg6 from "../../_assets/career-card-6.png";
import CardBg7 from "../../_assets/career-card-7.png";
import CardBg8 from "../../_assets/career-card-8.png";
import { useRouter } from 'next/navigation';

const careers = [
  {
    title: "Net Zero Hero",
    name: "Jason Barrett",
    role: "CEO of Mondria",
    image: CardBg1,
  },
  {
    title: "Conquer Consultancy",
    name: "Will Richardson",
    role: "Partner Simplex Management Consulting",
    image: CardBg2,
  },
  {
    title: "Power Recruiter",
    name: "Alex Johnstone",
    role: "Former Biggest Biller Red Commerce",
    image: CardBg3,
  },
  {
    title: "Capital King",
    name: "Bruno-Maurice Monny",
    role: "Founder Kessner Capital Management",
    image: CardBg4,
  },
  {
    title: "Fashion ICON",
    name: "Hofit Golan",
    role: "Presenter Fasion TV",
    image: CardBg5,
  },
  {
    title: "Artist of the Stars",
    name: "lain Alexander",
    role: "Artist",
    image: CardBg6,
  },
  {
    title: "Tech Giant CTO",
    name: "Arif Harbott",
    role: "Former Global MD ALIXPARTNERS",
    image: CardBg7,
  },
  {
    title: "Evolutionary AI",
    name: "Aamar Hussain",
    role: "Former Google & Microsoft AI Leader",
    image: CardBg8,
  },
];

const CareerPicker: React.FC = () => {
  const router = useRouter();

  const handleClick = (index: number) => {
    router.push(`/schools?id=${index}`);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="flex justify-center mb-8">
        <Chip text="School" />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-10 w-[80%] lg:w-[65%] mx-auto lg:leading-16">
        Pick a career and learn how to get to the top in half the time
      </h2>
      <GlobalSlider>
        {careers.map((career, index) => (
          <div className='cursor-pointer' key={index} onClick={() => handleClick(index)}>
            <CareerCard {...career} />
          </div>
        ))}
      </GlobalSlider>
    </section>
  );
};

export default CareerPicker;
