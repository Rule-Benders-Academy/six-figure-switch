import React from 'react'
import GlobalButton from '../GlobalButton/GlobalButton';
import Chip from '../Chip/Chip';

const SchoolStory = () => {
  return (
    <section className="relative text-white py-20  px-4 md:px-16">
      <div className="text-center">
        <Chip text="Story" className='bg-black/5 !text-black px-5 py-2' />
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-black mt-6 mb-5 lg:truncate lg:h-[100px]">
          The path to high paid contracting...
        </h1>
      </div>
      <div className="flex justify-center items-center text-center h-[665px] rounded-[20px] bg-black">
        <div className="">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Est odio sem leo in non sit turpis. Neque est ipsum tincidunt
          </p>
          <GlobalButton >
            Explore Courses
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default SchoolStory;
