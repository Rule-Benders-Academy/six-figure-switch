"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Logo1 from "../../_assets/trusted-company-1.png";
import Logo2 from "../../_assets/trusted-company-2.png";
import Logo3 from "../../_assets/trusted-company-3.png";
import Logo4 from "../../_assets/trusted-company-4.png";
import Logo5 from "../../_assets/trusted-company-5.png";
import Logo6 from "../../_assets/trusted-company-6.png";
import Logo7 from "../../_assets/trusted-company-7.png";
import Logo8 from "../../_assets/trusted-company-8.png";
import Logo9 from "../../_assets/trusted-company-9.png";
import Logo10 from "../../_assets/trusted-company-10.png";
import Logo11 from "../../_assets/trusted-company-11.png";
import Logo12 from "../../_assets/trusted-company-12.png";
import Logo13 from "../../_assets/trusted-company-13.png";

const TrustedCompanies = () => {
  return (
    <section className="bg-white text-black pt-4 md:pt-14 lg:pt-20 pb-12 md:pb-16 lg:pb-20 text-center overflow-hidden">
      <h2 className="text-xl md:text-5xl lg:text-[44px] lg:leading-[100%] mb-10 md:mb-14 lg:mb-16">
        Backed by Real Contracts With the UK’s Most Recognised Organisations
      </h2>
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="px-3 md:px-4 bg-gray-500 py-8"
        autoFill={true}
      >
        <div className="flex items-center justify-center h-[60px] md:h-[80px] lg:h-[101px] w-[120px] md:w-[140px] lg:w-[175px] !mx-5 md:!mx-10">
          <Image src={Logo1} alt="logo-1" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[80px] lg:h-[101px] w-[100px] md:w-[140px] lg:w-[170px] !mx-5 md:!mx-10">
          <Image src={Logo2} alt="logo-2" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[70px] lg:h-[90px] w-[90px] md:w-[60px] lg:w-[90px] !mx-5 md:!mx-10">
          <Image src={Logo3} alt="logo-3" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[50px] lg:h-[101px] w-[90px] md:w-[80px] lg:w-[109.32px] !mx-5 md:!mx-10">
          <Image src={Logo4} alt="logo-4" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[70px] lg:h-[101px] w-[100px] md:w-[100px] lg:w-[144.46px] !mx-5 md:!mx-10">
          <Image src={Logo5} alt="logo-5" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[60px] lg:h-[101px] w-[80px] md:w-[80px] lg:w-[123px] !mx-5 md:!mx-10">
          <Image src={Logo6} alt="logo-6" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[90px] lg:h-[118.44px] w-[110px] md:w-[150px] lg:w-[241.78px] !mx-5 md:!mx-10">
          <Image src={Logo7} alt="logo-7" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[40px] md:h-[25px] lg:h-[33.76px] w-[80px] md:w-[70px] lg:w-[114.77px] !mx-5 md:!mx-10">
          <Image src={Logo8} alt="logo-8" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[40px] md:h-[30px] lg:h-[33.76px] w-[90px] md:w-[120px] lg:w-[180.27px] !mx-5 md:!mx-10">
          <Image src={Logo9} alt="logo-9" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[60px] lg:h-[95.31px] w-[100px] md:w-[100px] lg:w-[160.9px] !mx-5 md:!mx-10">
          <Image src={Logo10} alt="logo-10" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[60px] lg:h-[91.35px] w-[70px] md:w-[70px] lg:w-[97.19px] !mx-5 md:!mx-10">
          <Image src={Logo11} alt="logo-11" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[60px] lg:h-[87.38px] w-[120px] md:w-[120px] lg:w-[225.59px] !mx-5 md:!mx-10">
          <Image src={Logo12} alt="logo-12" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center h-[60px] md:h-[70px] lg:h-[100.38px] w-[90px] md:w-[80px] lg:w-[125.59px] !mx-5 md:!mx-10">
          <Image src={Logo13} alt="logo-13" className="w-full h-full" />
        </div>
      </Marquee>
    </section>
  );
};

export default TrustedCompanies;
