import React from "react";
import Image from "next/image";
import Person1 from "../../_assets/not-ordinary-img-1.png"
import Person2 from "../../_assets/not-ordinary-img-2.png"
import Person3 from "../../_assets/not-ordinary-img-3.png"
import Person4 from "../../_assets/not-ordinary-img-4.png"
import OfferExtended from "../OfferExtended/OfferExtended";

const NotOrdinary: React.FC = () => {
  return (
    <section
      className="text-white py-6 md:py-16 lg:py-20 pb-[60px] md:pb-[200px] lg:pb-[296px] relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        background: "linear-gradient(180deg, #141314 0%, #272526 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-5xl lg:text-[54px] lg:leading-[100%] font-semibold text-[#FFA500] underline decoration-[#FFA500]-400 mb-4 max-w-[200px] md:max-w-[400px] lg:max-w-[550px] mx-auto">
          You’re Not Here<br/> for Ordinary
        </h2>
        <h3 className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[90%] font-bold mt-6 md:mt-8 lg:mt-10 ">
          This is Rule Benders:
        </h3>
        <p className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[90%] font-light mb-6">
          the academy that dares to flip the script on education and
          career-building.
        </p>
        <p className="text-base md:text-lg lg:text-2xl text-white mb-4 mt-9 md:mt-14 lg:mt-20 font-light leading-tight">
          We get it—taking the leap into real transformation takes guts,
          commitment, and a community that’s actually walked the path.
        </p>
        <p className="text-base md:text-lg lg:text-2xl text-white mb-4 font-light leading-tight">
          That’s why we built a raw, practical program that blends real-world
          skills with a no-BS approach to breaking the rules and building a
          career—or a life—on your terms.
        </p>
        <p className="text-base md:text-lg lg:text-2xl text-white font-light leading-tight">
          Wherever you’re starting from, we’re here to make this the best
          investment of your life.
        </p>
      </div>
      <div className="-mt-12 md:-mt-0 mb-14 md:mb-16 lg:mb-20">
        <div className="max-w-4xl mx-auto text-center -mb-5 md:-mb-[2vw] pt-6 md:pt-8 lg:pt-10">
          <h4 className="text-2xl md:text-5xl lg:text-[54px] lg:leading-[90%] md:mb-2">
            Here’s What You get with
          </h4>
          <h5 className="text-2xl md:text-5xl lg:text-[54px] lg:leading-[90%] font-bold">
            RULE BENDERS
          </h5>
        </div>

        <div className="relative w-full lg:w-[70%] mx-auto">
          <div className="flex justify-between z-10 relative -mb-20 lg:-mb-44 items-end max-w-[400px] sm:max-w-[100%]  mx-auto gap-5">
            <Image
              src={Person1}
              alt="Person 1"
              className=" w-[83px] md:w-[150px] lg:w-[220px] h-[111px] md:h-[180px] lg:h-[255px] rounded-md md:shadow-[19.17px_33.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)] transform -translate-y-1.5 sm:translate-y-0"
            />
            <Image
              src={Person3}
              alt="Person 2"
              className="w-[82px] md:w-[150px] lg:w-[220px] h-[123px] md:h-[190px] lg:h-[255px] rounded-md  md:shadow-[-19.17px_33.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)] transform translate-y-5 sm:translate-y-0"
            />
          </div>

          <div className="border border-[#666465] rounded-[16px] md:rounded-[20px] lg:rounded-[44.31px] p-6 md:p-10 bg-white bg-opacity-[0.08] max-w-[302px] sm:max-w-[550px] md:max-w-[800px] lg:max-w-[1073px] text-center w-[80%] mx-auto">
            <ul className="space-y-6 text-sm md:text-2xl lg:text-3xl text-gray-200 w-[70%] mx-auto lg:py-20 md:py-10 py-7">
              <li>
                <span className="text-red-400">💥</span> Mentors Who’ve Been
                There—real professionals, not ivory-tower theorists.
              </li>
              <li>
                <span className="text-red-400">💥</span> Hands-on Experience—we
                don’t just talk about it, we do it, and we’ll show you how.
              </li>
              <li>
                <span className="text-red-400">💥</span> A Global
                Network—connect with a crew of unconventional thinkers across
                industries and continents.
              </li>
              <li>
                <span className="text-red-400">💥</span> A Proven Track
                Record—students who’ve gone from stuck to unstoppable.
              </li>
              <li>
                <span className="text-red-400">💥</span> 100% Real Results—if
                you’re not seeing the impact, you can bail.
                <br />
                We don’t keep your money if we don’t deliver.
                <br />
                No fine print.
              </li>
            </ul>
          </div>
          <div className="flex justify-between relative -mt-10 sm:-mt-20 lg:-mt-44 z-10  max-w-[400px] sm:max-w-[100%] mx-auto">
            <Image
              src={Person2}
              alt="Person 3"
              className=" w-[88px] md:w-[180px] lg:w-[250px] h-[113px] md:h-[180px] lg:h-[255px] rounded-md md:shadow-[19.17px_-21.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_-10.89px_58.2px_0px_rgba(0,0,0,0.8)] transform -translate-y-8 sm:translate-y-0"
            />
            <Image
              src={Person4}
              alt="Person 4"
              className="w-[89px] md:w-[160px] lg:w-[250px] h-[105px] md:h-[180px] lg:h-[255px] rounded-md md:shadow-[-19.17px_-31.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_-13.89px_58.2px_0px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
      <div className="md:-mx-24 mt-5">
        <OfferExtended initialDays={7} />
      </div>
    </section>
  );
};

export default NotOrdinary;
