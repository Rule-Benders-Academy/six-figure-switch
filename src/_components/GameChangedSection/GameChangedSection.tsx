import React from 'react';
import OfferExtended from '../OfferExtended/OfferExtended';
import bgCurve from "../../_assets/Ellipse-bg.png"

const GameChangedSection = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-10 md:pb-20 lg:pb-24">
      <div className="text-center space-y-6 relative">
        <div className="bg-gradient-to-b from-[#434040] to-[#000000] pt-8 md:py-20 pb-20 md:pb-40 md:mb-32 relative">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-5xl lg:text-[64px] font-medium">The Game Has Changed</h1>
            <h2 className="text-2xl md:text-5xl lg:text-[64px] font-bold md:mt-2">Are You Ready?</h2>
          </div>
          <div
            className="absolute top-[110px] md:top-[270px] left-0 z-[1] w-full h-[200px]"
            style={{
              backgroundImage: `url(${bgCurve.src})`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="relative z-10 -top-14 md:-top-48 lg:text-4xl space-y-5 md:space-y-8 lg:space-y-12 w-[55%] mx-auto">
          <p>In the last five years,<br /> the job market has flipped.</p>

          <p>
            Permanent roles now show the <span className="text-[#FFA500]">slowest income growth</span>—just 12% over five years.
          </p>

          <p className='text-[#FFA500]'>
            But independent consultants? <br />
            They&#39;ve seen their income grow by <span className="text-[#FFA500] font-bold">60% to 150%.</span>
          </p>

          <p>
            Employers are shifting too. <br />
            Over 40% of companies now prefer contract-based talent for key projects <br />
            <span className="font-bold">and that number is growing fast.</span>
          </p>

          <p>
            This isn&#39;t just a trend <br />
            <span className="text-[#FFA500] font-bold">it&#39;s a window of opportunity.</span>
          </p>

          <p>
            Right now, early movers are landing $700–$1400 per day.
            But in 2026, this window will start to close as AI and global competition make it harder to get in.
          </p>

          <p>
            You&#39;re at the edge of this opportunity. The question is:
            <span className="md:text-[#FFA500] font-semibold">
              Will you move now, or watch others leap ahead?
            </span>
          </p>
        </div>
      </div>

      <div className="pt-4 mb-2 md:py-7 lg:py-8">
        <OfferExtended initialDays={7} />
      </div>
    </div>
  );
}

export default GameChangedSection;
