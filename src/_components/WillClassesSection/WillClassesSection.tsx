import React from "react";
import Chip from "../Chip/Chip";
import Image from "next/image";
import GlobalButton from "../GlobalButton/GlobalButton";
import ClassesCard1 from "../../_assets/classes-card-1.png";
import ClassesCard2 from "../../_assets/classes-card-2.png";
import ClassesCard3 from "../../_assets/classes-card-3.png";
import ClassesCard4 from "../../_assets/classes-card-4.png";

const classes = [
  {
    title: "Contractor 101",
    price: "\u00a3427",
    description: "Earn less than 200k per year?",
    details: [
      "Join a 4 hour session with a small group of learners like you",
      "Learn how to set yourself up and get your first contract",
      "Learn the skills you need and develop them here",
      "Directly Q&A",
    ],
    image: ClassesCard1,
  },
  {
    title: "Contractor Pro",
    price: "\u00a3597",
    description: "Earn more than 200k per year?",
    details: [
      "Join a 4 hour session with a small group of learners like you",
      "Learn how to climb faster and earn more",
      "Learn the skills you need and develop them here",
      "Gain advanced tools and techniques",
    ],
    image: ClassesCard2,
  },
  {
    title: "121 Coaching - Any level",
    price: "\u00a3597",
    description: "",
    details: [
      "1 hour 121 session with our founder",
      "CV and public profile review",
      "Direct advice on leveling up, more money and time",
      "Development area guidance",
      "Access to insider community and chat channel for direct ongoing guidance from our team",
    ],
    image: ClassesCard3,
  },
  {
    title: "Join our Community",
    price: "FREE",
    description: "Gain access to our:",
    details: [
      "Industry trend reports",
      "Webinars with guest speakers and incredible insights",
      "Community discussion",
      "Mentoring opportunities",
      "Invitations to exclusive events around the world",
    ],
    image: ClassesCard4,
  },
];

const WillClassesSection = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-16">
      <div className="">
        <Chip text="Classes" className='bg-black/5 !text-black px-5 py-2' />
        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold mb-12 mt-5">
          Online intimate classes where you can
          learn directly from Will
        </h2>

        <div className="space-y-8">
          {classes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-[#1E1E1E] text-white rounded-xl overflow-hidden min-h-[368.56px] h-full p-[30px] lg:gap-12"
            >
              <div className="relative w-full md:w-1/3 min-h-[308.28px] mb-7 md:mb-0 bg-white rounded-[10px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover "
                />
              </div>
              <div className=" flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{item.title}</h3>
                    <span className="text-[#FFA500] text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm md:text-lg lg:text-xl font-bold mb-2 text-[#E1E1E1]">{item.description}</p>
                  )}
                  <ul className="list-disc pl-5 text-sm text-[#E1E1E1] space-y-1">
                    {item.details.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end mt-5">
                  <GlobalButton className="text-sm md:text-base">
                    {item.price === "FREE" ? "Join Now!" : "Sign up Now!"}
                  </GlobalButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WillClassesSection