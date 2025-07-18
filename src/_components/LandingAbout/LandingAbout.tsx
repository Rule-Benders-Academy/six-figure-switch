import Image from "next/image";
import React from "react";
import LandingAboutImg1 from "../../_assets/landing-about-img-1.png"
import LandingAboutImg2 from "../../_assets/landing-about-img-2.png"
import GradientButton from "../GradientButton/GradientButton";

const LandingAboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141314] to-[#272526] text-white px-4 sm:px-8 md:px-16 lg:px-24 md:py-10 pt-6 pb-12 md:pb-16 lg:pb-20  mx-auto">
      <div className="2xl:max-w-[1440px] mx-auto w-[70%]">
        <div className="flex gap-10">
          <div className="md:w-1/2 space-y-6 flex-[1.3] max-w-[600px]">
            <h2 className="text-2xl md:text-5xl lg:text-[64px] lg:leading-[100%] font-semibold mb-3 md:mb-10">
              About Me
            </h2>
            <div className="text-base md:text-lg lg:text-2xl space-y-4 md:space-y-5 font-light">
              <p>
                I didn’t grow up with money, a degree, or fancy connections. But
                I wanted more. More freedom. More income. More control.
              </p>
              <p>
                At 20, I was making £100,000 a year in sales but felt stuck.
                Long hours. No flexibility. Always chasing targets.
              </p>
              <div className="max-h-[244px] sm:max-h-[350px] md:hidden rounded-[17px] overflow-hidden">
                <Image
                  src={LandingAboutImg1}
                  alt="Profile"
                  className="rounded-[17px] w-full -mt-5"
                />
              </div>
              <p>
                At 25, I took a chance and moved into consulting. I started as a
                junior PMO on £400 a day. In under 10 years, I rose to Programme
                Director earning £1,650 a day. I finally had the freedom to
                choose when, where, and how I worked.
              </p>
              <p>
                I’ve travelled. Taken time off. Spent afternoons with my kids.
                Built a life on my own terms.
              </p>
              <p>
                My secret? I learned to position myself as the expert companies
                wanted to hire even without a degree or a big online following.
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex justify-end xl:justify-center hidden ">
            <Image
              src={LandingAboutImg1}
              alt="Profile"
              className="rounded-xl w-full max-w-[533px] max-h-[710px]"
            />
          </div>
        </div>

        <div className="mt-4 md:mt-16 lg:mt-24 flex w-full gap-10 justify-between">
          <div className="flex-1 hidden md:flex xl:justify-center">
            <Image
              src={LandingAboutImg2}
              alt="Profile"
              className="rounded-xl w-full max-w-[533px] h-full"
            />
          </div>
          <div className="flex-1 lg:flex-[1.3] max-w-[600px]">
            <div className="space-y-4 text-base md:text-lg lg:text-2xl font-light">
              <p className="">
                Along the way, I built a simple, repeatable system that:
              </p>
              <div className="space-y-2 font-light">
                <div className="flex items-start gap-2">
                  <div>✅</div>
                  <div>
                    Helps professionals land high-paying contracts even without
                    connections
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div>✅</div>
                  <div>
                    Gives them the freedom to work on their own schedule
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div>✅</div>
                  <div>
                    Unlocks the confidence and credibility to charge top rates
                  </div>
                </div>
              </div>
              <p>
                <span className="font-bold">
                  Today, I help other corporate professionals do the same.
                </span>
              </p>
              <p className=" font-light">
                The best part? You don’t need to wait 10 years to get these
                results. With my system, you can start in just{" "}
                <span className="font-bold">one month.</span> In 90 days, you
                could be on your way to the same freedom, income, and control. I
                want people to feel like they’ve found the answer.
              </p>
              <p>
                <span className="font-bold">
                  Not a shortcut — a smart path.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left md:text-center mt-1 md:mt-5 lg:mt-16">
        <GradientButton className="!text-sm md:!text-2xl  !py-[8px] md:!py-4 lg:!py-6 !px-6 md:!px-8 lg:!px-[65px] max-w-[239px] lg:!max-w-[632px]">
          I am ready to follow your system
        </GradientButton>
      </div>
    </section>
  );
};

export default LandingAboutSection;
