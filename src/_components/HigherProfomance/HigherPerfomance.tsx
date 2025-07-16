import React from "react";
import BgImg from "../../_assets/mock-img-3.png"
import Image from "next/image";
import Curve from "../../_assets/black-curve.svg"

const HighPerformersSection: React.FC = () => {
  return (
    <div className="bg-black text-white space-y-16 py-10 px-4 md:px-16">
      <div className="relative bg-black rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute bg-white text-black px-4 border-b-[18px] border-r-[18px] border-black rounded-br-[35px] z-10 max-w-[450px] w-full text-center py-6">
          <div className=" relative">
          <h2 className="font-semibold text-2xl md:text-4xl lg:text-[40px] leading-tight">
            Rule Benders<br />Academy
          </h2>

          <Image src={Curve} alt='' className='absolute -top-[24.5px] -right-[25px] z-10 w-[35px] h-[30px] rotate-[112deg]' />
          <Image src={Curve} alt='' className='absolute -top-[31px] -right-[64.5px] z-10 w-[35px] h-[30px] rotate-[11deg]' />
          <Image src={Curve} alt='' className='absolute -bottom-[24.5px] -left-[25px] z-10 w-[35px] h-[30px] -rotate-[70deg]' />
          <Image src={Curve} alt='' className='absolute -bottom-[66px] -left-[20.5px] z-10 w-[35px] h-[30px] rotate-[13deg]' />
          </div>
        </div>

        <div className="relative w-full h-[696px] bg-gray-200">
        <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdnsnty.tonyrobbins.com/2024-05-02T17-04-48.698Z-UPW_About_SizzleTeaser.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        </div>

        <div className="absolute bottom-0 -right-[1px] max-w-[770px] bg-black p-6 md:p-8 rounded-tl-3xl">
          <div className=" relative">
          <h3 className="text-2xl md:text-4xl lg:text-[40px] font-semibold mb-2">
            This Is How High Performers Get Ahead
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 font-normal">
            Learn real-world strategies from high achieving individuals with one thing in common – they started at the bottom. Get access to live sessions, classroom and 1:1 coaching, and proven tools you can reuse. Join a supportive community, connect with mentors, and take control of your career with practical, real-world learning.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-yellow-400 font-semibold">
            <div className="flex flex-wrap gap-4">
              <span className="text-2xl md:text-4xl lg:text-[40px]">70%</span><br />
              <span className="text-white text-sm md:text-base font-normal w-[60%]">Faster progression in your career</span>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-wrap gap-4">
              <span className="text-2xl md:text-4xl lg:text-[40px]">80%</span><br />
              <span className="text-white text-sm md:text-base font-normal w-[60%]">Improvement in your income</span>
            </div>
          </div>
          <Image src={Curve} alt='' className='absolute -top-[56px] -right-[38.5px] z-10 w-[35px] h-[30px] -rotate-[178deg]' />
          <Image src={Curve} alt='' className='absolute -bottom-[36.5px] -left-[61px] z-10 w-[35px] h-[30px] -rotate-[179deg]' />
          </div>


        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden h-[666px]" style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium w-[80%] mx-auto">
            Rule Benders Academy is not just a learning platform, it&apos;s your high performing friend, role model, mentor and toolkit. With it you can:
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighPerformersSection;
