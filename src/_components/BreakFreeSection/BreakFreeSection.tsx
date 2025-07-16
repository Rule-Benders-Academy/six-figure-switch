import React from 'react';
import GlobalButton from '../GlobalButton/GlobalButton';

const BreakFreeSection = () => {
  return (
    <div className="pb-20 px-6 md:px-16">
    <section className="relative text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-[20px]"
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

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 flex justify-center items-center text-center h-[665px] rounded-[20px]">
        <div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-4 w-[90%] lg:w-[80%] mx-auto">
            Break free from the constraints of your job
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-xl">
            Start acting like the CEO of your career
          </p>
          <GlobalButton className="bg-white !text-black">
            Which Path is for me?
          </GlobalButton>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BreakFreeSection;
