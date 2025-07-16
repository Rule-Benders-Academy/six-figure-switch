import React from "react";
import CardImg1 from "../../_assets/service-card-img-1.png";
import CardImg2 from "../../_assets/service-card-img-2.png";
import CardImg3 from "../../_assets/service-card-img-3.png";
import CardImg4 from "../../_assets/service-card-img-4.png";
import CardImg5 from "../../_assets/service-card-img-5.png";
import CardImg6 from "../../_assets/service-card-img-6.png";
import Image from "next/image";
import Chip from "../Chip/Chip";

const services = [
  {
    title: "High Paid Contractor",
    description:
      "How to triple your income, climb the ladder faster than the rest while taking mini retirements.",
    price: "$599.00",
    members: "1K Members",
    image: CardImg1,
  },
  {
    title: "Project Disruptor",
    description:
      "Learn project management faster than they tell you is possible and disrupt conventional ways of work...",
    price: "$599.00",
    members: "1K Members",
    image: CardImg2,
  },
  {
    title: "Killer Analyst",
    description:
      "Master business analysis to become a Management Consultant who commands big money.",
    price: "$599.00",
    members: "1K Members",
    image: CardImg3,
  },
  {
    title: "Use Tech like a Ninja",
    description:
      "Use Gen AI, Agents, systems, productivity and collaboration tools like a pro to make it all easy.",
    price: "$599.00",
    members: "1K Members",
    image: CardImg4,
  },
  {
    title: "Tax-efficient limited company",
    description:
      "Set up and run a limited company with sub contractors offering services and winning business.",
    price: "$599.00",
    members: "1K Members",
    image: CardImg5,
  },
  {
    title: "Consultancy Founder",
    description:
      "Start a successful Management Consultancy and beat the Big 4 Consultancies to million pound deals.",
    price: "$599.00",
    members: "1K Members",
    image: CardImg6,
  },
];

const SchoolServices = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
      <Chip text="Services" className=' px-5 py-2 !text-base' />
        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold mb-20 mt-5">
          Learn the skills needed to become a <br className="hidden md:inline" />
          highly paid contractor
        </h2>

        <div className="flex justify-center items-center mb-12">
          <div className="w-full h-[5px] bg-[#FFA500] relative">
            <div className="absolute left-[10%] sm:left-[22%] md:left-[14.8%] xl:left-[77px] top-1/2 -translate-y-1/2 w-7 h-7 bg-[#FFA500] rounded-full border-[4px] border-black" />
            <div className="absolute left-[49%] xl:left-[307px] top-1/2 -translate-y-1/2 w-5 h-5  bg-[#FFA500] rounded-full border-[2px] border-black" />
            <div className="absolute left-[49%] xl:left-[522px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FFA500] rounded-full border-[2px] border-black" />
            <div className="absolute left-[49%] xl:left-[738px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FFA500] rounded-full border-[2px] border-black" />
            <div className="absolute left-[49%] xl:left-[956px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FFA500] rounded-full border-[2px] border-black" />
            <div className="absolute right-[10%] sm:right-[22%] md:right-[14.8%] xl:right-[77px] top-1/2 -translate-y-1/2 w-7 h-7 bg-[#FFA500] rounded-full border-[4px] border-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-20">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className={`bg-[#1E1E1E] rounded-xl overflow-hidden transform transition-transform duration-300 flex flex-col ${idx === 0
                    ? "xl:scale-[1.1] xl:-translate-x-2"
                    : idx === 5
                      ? "xl:scale-[1.1] xl:translate-x-2"
                      : "hover:scale-[1.05]"
                  }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover"
                />
                <div className="p-[10px] text-left flex-1">
                  <h3 className="text-[10px] md:text-lg xl:text-xs font-semibold mb-2 line-clamp-1 text-[#FFA500]">
                    {service.title}
                  </h3>
                  <p className="text-[8px] md:text-base xl:text-[9.02px] xl:leading-[162%] text-[#F0F0F0] mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between text-sm font-semibold border-t-[1px] border-[#5B5B5B] pt-4 line-clamp-3">
                    <span className="text-[8px] md:text-xs xl:text-[8px] text-[#F0F0F0]">{service.members}</span>
                    <span className="text-[10px] md:text-xs xl:text-[10px] text-[#F0F0F0]">{service.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold mt-16">
          Then build a consultancy!
        </h2>
      </div>
    </section>
  );
}
export default SchoolServices