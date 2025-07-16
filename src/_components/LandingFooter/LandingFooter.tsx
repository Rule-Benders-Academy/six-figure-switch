import Image from "next/image";
import React from "react";
import Logo from "../../_assets/logo.svg"

const LandingFooter = () => {
  return (
    <footer className="bg-black text-white text-center pt-7 md:pt-10 lg:pt-[51px] pb-5 md:pb-10 lg:pb-20 border-t-[5px] md:border-t-[8px] lg:border-t-[14px] border-[#E39404] px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col items-center space-y-4 ">
        <div className="flex items-center gap-5 md:gap-8 lg:gap-[47px]">
          <Image src={Logo} alt="" className="w-[30px] md:w-12 lg:w-[85px]" />
          <span className="uppercase text-sm md:text-base lg:text-5xl tracking-[1%]">
            RULE BENDERS ACADEMY
          </span>
        </div>
      </div>
      <p className="text-[6px] md:text-sm lg:text-lg leading-relaxed mt-6 md:mt-10 lg:mt-20 ">
        Conquer Consultancy School provides educational content, coaching, and strategic guidance designed to support
        professionals in pursuing careers as independent consultants. However, participation in this programme does
        not constitute a guarantee of employment, consulting roles, paid contracts, or specific financial outcomes.
        Success depends on individual effort, experience, market conditions, and other external factors beyond our
        control. We offer tools, insights, and support—but we do not promise or imply any specific results, job
        placements, or client engagements. This programme is for educational and informational purposes only. By
        enrolling, you acknowledge that you are responsible for your own professional decisions and actions. Rule
        Benders makes no guarantees, representations, or warranties—express or implied—regarding career success or
        income generation, in the UK, US or any other jurisdiction.
      </p>
    </footer>
  );
};

export default LandingFooter;
