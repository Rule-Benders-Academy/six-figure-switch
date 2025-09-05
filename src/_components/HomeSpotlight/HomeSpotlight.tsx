import Image from 'next/image'
import React from 'react'
import Curve from "../../_assets/white-curve.svg"

const HomeSpotlight = () => {
  return (
    <div className="space-y-16 py-10 px-4 md:px-16 pt-32 ">
      <div className="text-[#1E1E1E] text-4xl md:text-5xl lg:text-[64px] font-medium">
        This Month’s Spotlight:
        <br />
        Want to earn +$1000 per day?
      </div>
      <div className="relative bg-black rounded-3xl">
        <div className="absolute z-10 right-0 border-b-[18px] border-l-[18px] border-white rounded-bl-3xl bg-white">
          <div className=" bg-[#F5F5F5] text-black px-6 py-5 rounded-bl-3xl rounded-br-3xl max-w-[450px] w-full ">
            <Image src={Curve} alt='' className='absolute top-0 -left-[44px] rotate-[113deg] z-10 w-[35px] h-[30px]' />
            <Image src={Curve} alt='' className='absolute -top-[5px] -left-[6px] z-10 w-[35px] h-[30px]' />
            <div className=" uppercase text-xs md:text-sm lg:text-base">Featured Course</div>
            <h2 className="font-semibold lg:text-[32px] md:text-2xl text-xl my-3 text-[#FFA500]">
              The High Paid Contractor
            </h2>
            <div className="font-semibold uppercase text-xs md:text-sm lg:text-base">By Will Richardson</div>
          </div>
          <Image src={Curve} alt='' className='absolute -top-0 -right-[9px] z-10 w-[35px] h-[30px] rotate-[110deg]' />
          <Image src={Curve} alt='' className='absolute -bottom-[46px] -right-[8px] z-10 w-[35px] h-[30px] rotate-[101deg]' />
        </div>

        <div className="relative w-full h-[696px]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdnsnty.tonyrobbins.com/2024-05-08T01-20-51.563Z-Homepage_Cards_BM.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-0 left-0 max-w-[770px] bg-white p-6 md:p-8 rounded-tr-3xl text-black">
          <div className=" relative">
          <h3 className="text-2xl md:text-4xl lg:text-[40px] font-semibold mb-2">
            3 x your income and climb the career ladder faster as a contractor
          </h3>
          <p className="text-sm md:text-base mb-4 mt-3">
            The high paid contractor course will help you level up, become richer doing the same job and allow you to work when you want on your terms. It’s the course I wish I had when I got into contracting. Packed full of insight, and practice exercises to help you learn what you need to know to command top rates and be in constant demand.
          </p>

          <Image src={Curve} alt='' className='absolute -top-[59px] -left-[39px] z-10 w-[35px] h-[30px] -rotate-[87deg]' />
          <Image src={Curve} alt='' className='absolute -bottom-[49px] -right-[58px] z-10 w-[35px] h-[30px] -rotate-[69deg]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSpotlight
