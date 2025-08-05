'use client';
import React from 'react';
import Image from 'next/image';
import Person1 from '@/_assets/employment-trap-img-1.png'
import Person2 from '@/_assets/employment-trap-img-2.png'

const EmploymentTrap = () => {
  return (
    <div className="bg-gradient-to-b from-[#141314] to-[#272526] md:pt-14">
      <section className="bg-[#141314] text-white pt-7 pb-14 md:py-16 lg:py-20 px-6 text-center space-y-7 md:space-y-8 lg:space-y-10">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
          <section className="relative text-white">
            <div className="max-w-[90%] md:max-w-[35%] 2xl:max-w-[50%] mx-auto text-center z-10  transform translate-y-[15px] sm:hidden">
              <h2 className="text-2xl md:text-5xl lg:text-[44px] lg:leading-[100%] leading-snug">
                Employment was built
                <br />
                to hold you in place. <br />
                <span className="text-[#FFA500] font-bold">
                  It’s designed to:
                </span>
              </h2>
            </div>

            <div className="flex justify-between z-10 relative md:-mb-24 md:-mb-36 lg:-mb-44 items-end max-w-[110%] lg:w-[70%] mx-auto gap-5">
              {/* <Image
                src={Person1}
                alt="Person 1"
                className="hidden md:block lg:h-[270.02px] md:h-[250px] h-[113px] lg:w-[176px] md:w-[180px] w-[84px] rounded-md md:shadow-[19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)] transform -translate-x-1/4"
              /> */}
              <div className="text-center hidden sm:block transform md:-translate-y-1/4 mb-20 lg:mb-36">
                <h2 className="text-2xl md:text-3xl lg:text-[44px] lg:leading-[100%] leading-snug">
                  Employment was built
                  <br />
                  to hold you in place. <br />
                  <span className="text-[#FFA500] font-bold">
                    It’s designed to:
                  </span>
                </h2>
              </div>
              {/* <Image
                src={Person2}
                alt="Person 2"
                className="hidden md:block lg:h-[270.02px] md:h-[220px] h-[118px] lg:w-[176px] md:w-[160px] w-[79px] rounded-md transform -translate-y-[20px] md:-translate-y-6 md:shadow-[-19.17px_73.89px_58.2px_0px_rgba(0,0,0,0.8)] shadow-[-6.17px_23.79px_58.2px_0px_rgba(0,0,0,0.8)] translate-x-1/4 md:translate-x-0"
              /> */}
            </div>

            <div className="relative w-full lg:w-[65%] md:max-w-[80%] lg:max-w-[90%] mx-auto mt-10">
              <div className="relative text-center pt-[50px] pb-7 md:py-12 lg:py-[50px] px-5 border-[2px] border-[#3C3C3C] bg-[#FFFFFF12] rounded-3xl md:rounded-[35px] lg:rounded-[50px] w-[100%] mx-auto">
                <ul className="text-base lg:text-2xl leading-tight text-white space-y-5 md:space-y-3 lg:space-y-8">
                  <li>• DELAY PROMOTIONS</li>
                  <li>• SUPPRESS YOUR SALARY</li>
                  <li>• REWARD POLITICS OVER PERFORMANCE</li>
                </ul>
                <div className="text-base md:text-base lg:text-2xl text-white">
                  <p className="mt-8 mb-2 text-[#FFA500] font-semibold">
                    And it works.
                  </p>
                  <p>Because good people like you play by the rules.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 md:space-y-10 lg:space-y-12 text-base md:text-2xl lg:text-2xl leading-tight text-gray-200">
          <p className="text-[#FFA500] font-semibold">
            You did everything right
          </p>
          <p>You are dedicated, skilled, and ready for your next big step.</p>

          <p>
            <span className="italic underline">Imagine this:</span>
          </p>
          <ul className="space-y-5">
            <li>Being recognized for the value you bring every day.</li>
            <li>Being rewarded for your ideas and your effort.</li>
            <li>
              Earning more than you ever thought possible, with promotions that
              come naturally.
            </li>
          </ul>

          
          <p>
            <span className="underline">What if you could:</span>
          </p>
          <ul className="space-y-5">
            <li>Move forward on your own terms.</li>
            <li>
              Create your own opportunities, without waiting for approval.
            </li>
            <li>
              Lead with authenticity, and see others look to you for guidance.
            </li>
          </ul>

          <p>
            Your dreams deserve a place to grow.
            <br />
            A place where success has no limits.
            <br />
            Where your hard work is celebrated
            <br />
            every step of the way.
          </p>

          <p>This is the new way of work—where you decide your path.</p>

          <p className="font-semibold">
            It is time to grow, shine, and lead.
            <br />
            <span className="text-[#FFA500] underline">
              Because you were born to achieve your own dreams.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmploymentTrap;
