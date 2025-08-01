"use client"

import Drawer from "../../_components/Drawer/Drawer";
import React from 'react'
import Image from 'next/image'
import HeroBg from '@/_assets/landing-hero-bg.png'
import downArrow from '@/_assets/down-arrow.svg'
import CancelIcon from '@/_assets/cancel-red-icon.svg'
import Person1 from '@/_assets/switch-banner-img-1.png'
import Person2 from '@/_assets/switch-banner-img-2.png'
import Person3 from '@/_assets/switch-banner-img-3.png'
import Person4 from '@/_assets/switch-banner-img-4.png'
import Star from "@/_assets/star-hero.png";
import DigitalClock from '@/_components/DigitalClock/DigitalClock'
import SixFigureSwitch from '@/_components/SixFigureSwitch/SixFigureSwitch'
import GradientButton from '@/_components/GradientButton/GradientButton'
import FounderIntro from '@/_components/FounderIntro/FounderIntro'
import TrustedCompanies from '@/_components/TrustedCompanies/TrustedCompanies'
import MatrixSection from '@/_components/MatrixSection/MatrixSection'
import TestimonialSection from '@/_components/TestimonialSection/TestimonialSection'
import GameChangedSection from '@/_components/GameChangedSection/GameChangedSection'
import LandingAboutSection from '@/_components/LandingAbout/LandingAbout'
import MakeTheSwitch from '@/_components/MakeTheSwitch/MakeTheSwitch'
import EmploymentTrap from '@/_components/EmploymentTrap/EmploymentTrap'
import MatrixBreakdownSection from '@/_components/MatrixBreakdownSection/MatrixBreakdownSection'
import SixFigureSwitchSection from '@/_components/SixFigureSwitchSection/SixFigureSwitchSection'
import EarningsSection from '@/_components/EarningsSection/EarningsSection'
import LandingFaqSection from '@/_components/LandingFaqSection/LandingFaqSection'
import ComparisonSection from '@/_components/ComparisonSection/ComparisonSection'
import ConfidenceSection from '@/_components/ConfidenceSection/ConfidenceSection'
import LandingFooter from '@/_components/LandingFooter/LandingFooter'
import LearnSystem from '@/_components/LearnSystem/LearnSystem'
import OurPromise from '@/_components/OurPromise/OurPromise'
import NotOrdinary from '@/_components/NotOrdinary/NotOrdinary'
import TransformationTimeline from '@/_components/TransformationTimeline/TransformationTimeline'
import EarningTimelineSection from '@/_components/EarningTimelineSection/EarningTimelineSection'
import { useState, useEffect } from "react";

const points = [
  "You don’t need to build a startup",
  "You don’t need to grow a huge following",
  "You don’t even need to quit your industry",
  "You don’t have to give up stability, your network, or your professional identity",
  "You just need to position yourself—and help others see you—as an independent consultant.",
];

const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener("openDrawer", openHandler);
    return () => {
      window.removeEventListener("openDrawer", openHandler);
    };
  }, []);
  
  // const [elapsedTime, setElapsedTime] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setElapsedTime((prev) => prev + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const minutes = Math.floor(elapsedTime / 60);
  // const seconds = elapsedTime % 60;

  return (
    <>
      <div className="min-h-screen !font-jakarta">
        <section className="relative bg-black text-white pb-5 md:pb-8 lg:pb-12 pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60 pointer-events-none">
            <Image src={HeroBg} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative max-w-[95%] mx-auto text-center">
            <p className="text-lg md:text-2xl lg:leading-[100%] mb-8 md:mb-9 lg:mb-10">
              If you are an employed professional,
              <br />
              thinking there must be more to life than this,
              <br />
              <span className="text-[#FFA500] font-bold underline">
                you’re in the right place.
              </span>
            </p>

            <p className="text-lg md:text-2xl lg:leading-[100%]">
              Did you know that you could be earning
              <br />
              <span className="text-[#FFA500] font-bold underline">
                3 x more money
              </span>{" "}
              for exactly the same skill set you already have?
            </p>

            <div className="relative border-2 border-[#747373] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[30px] mt-7 md:mt-9 lg:mt-10 py-7 md:py-[80px] lg:py-14 lg:w-[90%] mx-auto">
              <div className=" px-4 sm:px-6 md:px-10">
                <p className="text-2xl lg:text-[44px]">
                  It’s time to become an
                </p>
                <h2 className="text-2xl lg:text-[44px]  leading-tight lg:leading-[100%] font-bold tracking-wide uppercase mt-5">
                  Independent Consultant
                </h2>
                <hr className="h-[6px] w-[90%] mx-auto mt-4 bg-white" />

                <p className="text-lg md:text-2xl lg:leading-[100%] mt-4 lg:mt-8 mx-auto text-center max-w-3xl">
                  From there, you could be on the path to earning
                  <span className="relative inline-block my-4">
                    {/* Left star */}
                    <Image
                      src={Star}
                      alt="Star"
                      className="absolute left-0 top-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* Badge */}
                    <span className="text-[#FFA500] text-2xl font-bold py-2 px-6 border-2 border-[#FFA500] bg-[#141314] rounded-[10px]">
                      $1,400/day (and more)
                    </span>

                    {/* Right star */}
                    <Image
                      src={Star}
                      alt="Star"
                      className="absolute right-0 top-1/2 w-6 h-6 transform translate-x-1/2 -translate-y-1/2"
                    />
                  </span>
                  <br />
                  while choosing when you work and when you don’t.
                </p>
              </div>
              <div
                className=" absolute top-0 left-0 w-full h-full border border-[#3C3C3C] bg-[#FFFFFF14] rounded-md z-[-1]"
                style={{
                  filter: "blur(24px)",
                }}
              ></div>
            </div>

            <div className="flex justify-center pt-4  mt-2">
              <Image
                src={downArrow}
                alt=""
                className="w-[32px] md:w-16 lg:w-[44px] h-[34px] md:h-16 lg:h-[64px] animate-bounce"
              />
            </div>
          </div>
        </section>
        <div className="bg-gradient-to-b from-[#141314] to-[#272526] h-full">
          <div className="w-[80%] md:w-[36%] mx-auto py-5 md:py-10 lg:py-16 flex flex-col gap-7 md:gap-8">
            {points.map((text, index) => (
              <div key={index} className="mt-4 ">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className=" shrink-0">
                    <Image
                      src={CancelIcon}
                      alt=""
                      className="lg:w-[50px] md:w-12 w-6"
                    />
                  </div>
                  <div className="text-[18px] lg:text-[24px]  uppercase max-w-[606px] text-white">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="relative text-white px-4 sm:px-8 md:px-16 lg:px-24 md:py-16 bg-gradient-to-b from-[#141314] to-[#272526] pb-10 ">
            <div className="max-w-[75%] md:max-w-[35%] 2xl:max-w-[50%] mx-auto text-center z-10  transform translate-y-[15px] sm:hidden ">
              <p className="text-lg md:text-2xl lg:text-[24px] xl:text-5xl">
                You’re not under qualified. You’re
                <br /> under positioned.
              </p>
              <p className="mb-4 text-lg mt-4 md:mt-4 md:text-2xl lg:text-xl xl:text-3xl leading-[100%] font-semibold text-[#FFA500]">
                And it’s costing you $50,000 – $150,000 a year.
              </p>
            </div>

            <div className="flex justify-between z-10 relative -mb-20 items-end lg:max-w-[50%] mx-auto gap-5">
              <Image
                src={Person1}
                alt="Person 1"
                className="lg:h-[170px] md:h-[250px] h-[136px] lg:w-[140px] md:w-[180px] w-[101px] rounded-md md:shadow-[19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)]"
              />
              <div className="text-center hidden sm:block transform md:-translate-y-1/4 mb-28">
                <p className="text-lg md:text-2xl lg:text-2xl">
                  You’re not under qualified.
                  <br />
                  You’re under positioned.
                </p>
                <br />
                <p className="text-xl md:text-2xl lg:text-2xl leading-[100%] font-semibold text-[#FFA500]">
                  And it’s costing you
                  <br /> $50,000 –$150,000 a year.
                </p>
              </div>
              <Image
                src={Person3}
                alt="Person 2"
                className="lg:h-[170px] md:h-[220px] h-[130px]  lg:w-[140px] md:w-[160px] w-[88px] rounded-md -mt-10 md:-mt-20 md:shadow-[-19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="relative max-w-[80%] md:max-w-[40%] mx-auto">
              <div className="flex justify-center items-center -mb-5 md:-mb-[30px] relative z-10">
                <DigitalClock minutes={53} seconds={60} />
              </div>
              <div className="relative text-center py-[100px] px-5 border-[2px] border-[#3C3C3C] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[50px] w-[100%] mx-auto">
                <p className="text-lg md:text-2xl lg:leading-[100%] mb-2">
                  Join <span className="font-bold">100+</span> career changers
                </p>
                <h2 className="text-[24px] leading-[120%] lg:leading-[100%] md:text-2xl tracking-wide uppercase">
                  Who Made The
                  <br />
                  <span className="text-[#FFA500] font-bold">
                    Six-Figure Switch
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex justify-between relative -mt-20 z-10  lg:max-w-[50%] mx-auto">
              <Image
                src={Person2}
                alt="Person 3"
                className="lg:h-[170px] md:h-[260px] h-[130px] lg:w-[140px] md:w-[200px] w-[100px] rounded-md md:shadow-[19.17px_-31.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_-10.89px_58.2px_0px_rgba(0,0,0,0.8)]"
              />
              <Image
                src={Person4}
                alt="Person 4"
                className="lg:h-[170px] md:h-[240px] h-[117px] lg:w-[140px] md:w-[200px] w-[99px] rounded-md md:shadow-[-19.17px_-41.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_-13.89px_58.2px_0px_rgba(0,0,0,0.8)]"
              />
            </div>
          </section>

          <div className="bg-gradient-to-b from-[#141314] to-[#272526]  pb-11 md:pb-16">
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center w-[95%] lg:w-full mx-auto">
              <div className="text-2xl md:text-2xl lg:text-[44px] lg:leading-[100%] mt-10 max-w-[680px] mx-auto text-center text-white">
                Watch this short video to
                <br /> see how we do it
              </div>
              <div className="lg:max-h-[449px] lg:h-[64vh] md:h-[400px] h-[234px] bg-[#C8C8C8] w-full rounded-[17.09px] md:rounded-[35px] lg:rounded-[47.42px] mt-6 md:mt-8 lg:mt-12 lg:w-[70%]"></div>
              <GradientButton>I’m in – lets Go!</GradientButton>
            </div>

            <div className=" px-4 sm:px-8 md:px-16 lg:px-24 !pt-10">
              <SixFigureSwitch />
            </div>

            <div className=" px-4 sm:px-8 md:px-16 lg:px-24 w-[95%] lg:w-full mx-auto">
              <FounderIntro />
            </div>
          </div>

          <TrustedCompanies />
          <MatrixSection />
          <TestimonialSection
            reverseOrder={false}
            name="Brittany"
            description={
              <>
                Doubled her income in 6 months. <br />
                From stuck in strategy to leading <br />
                <span className="font-bold">£10M+ programmes</span>.
              </>
            }
            videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145289/Testimonial_Video_Brittany_w0wcjx.mp4"
          />
          <GameChangedSection />
          <LandingAboutSection />
          <MakeTheSwitch />
          <EmploymentTrap />
          <MatrixBreakdownSection />
          <TransformationTimeline />
          <TestimonialSection
            reverseOrder
            name="DANIEL"
            description={
              <>
                Left his struggling online business. First consulting role at
                £400/day. Multiple government contracts since.
              </>
            }
            videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145302/Testimonial_Video_Daniel_fbvbe6.mp4"
          />
          <SixFigureSwitchSection />
          <ComparisonSection />
          <TestimonialSection
            reverseOrder={false}
            name="DAVID"
            description={
              <>
                Turned mid-career stagnation into £900/day independence and
                freedom.Turned mid-career stagnation into £900/day independence
                and freedom.
              </>
            }
            videoUrl="https://res.cloudinary.com/dfykcw0ks/video/upload/v1752145311/Testimonial_Video_David_lgfmuh.mp4"
          />
          <EarningsSection />
          <EarningTimelineSection />
          <LandingFaqSection />
          <ConfidenceSection />
          <div className="-mt-[70px]">
            <NotOrdinary />
          </div>
          <div className="-mt-[20px] md:-mt-[150px] lg:-mt-[200px]">
            <OurPromise />
          </div>
          <LearnSystem />
          <LandingFooter />
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default LandingPage
