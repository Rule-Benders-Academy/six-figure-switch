import React, { useState } from 'react';
import BgImg from "../../_assets/mock-img-2.png";

const sections = [
  {
    title: "Humble Beginnings & Entrepreneurial Drive",
    content:
      "I grew up on a council estate in Essex, where my parents worked three jobs between them just to make ends meet. We were close as a family, but life wasn’t easy. As I got older, I began to understand just how different our situation was from others. While I deeply loved my parents, I knew I wanted to carve out a different path for myself. At 19, I started working at a recruitment business, where I learned the ropes. Two years later, I launched my own recruitment company, which I eventually sold to a VC at the age of 26.",
    image: BgImg,
  },
  {
    title: "Climbing New Ladders & Breaking into Consultancy",
    content:
      "After selling my first business, I decided to shift careers and pursue a new challenge—I wanted to become a high-level corporate executive. But instead of taking the traditional route, I saw a faster path through contracting. I began as a Junior Project Manager and worked my way up to Programme Director on large-scale projects, learning on the job with training funded by my clients. My day rate steadily increased with each contract, eventually surpassing $1,500 per day. In 2019, I made another leap—this time into Management Consultancy. I launched my own firm and successfully competed with the Big 4 to win multiple government contracts, including one to rewrite the rules for major change programme delivery for the UK government—all before I hit 40.",
    image: BgImg,
  },
  {
    title: "Building for Impact & Changing the Game",
    content:
      "Since then, I’ve launched two additional businesses—one is a Sustainability Professional Services firm focused on helping the food retail supply chain decarbonise, and the other is Rule Benders. My mission now is to help people understand and break free from the limitations of the traditional career path. I’m fully committed to creating the tools and support systems they need to do just that—whatever it takes.",
    image: BgImg,
  },
];

const SchoolAbout = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleSections = expanded ? sections : [sections[0]];

  return (
    <section className="w-full px-6 py-12 md:py-20 md:px-16 bg-white">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-12">
        I have always believed that I am not limited by what is. I am led by what could be.
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {visibleSections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="font-semibold lg:text-[32px] md:text-2xl text-xl mb-4 text-black">
                {section.title}
              </h2>
              {!expanded && index === 0 ? (() => {
                const sentences = section.content.split('. ');
                const firstPart = sentences.slice(0, -2).join('. ') + '.';
                const secondPart = sentences.slice(-2).join('. ');

                return (
                  <>
                    <p className="text-base sm:text-lg text-black">{firstPart}</p>
                    <div className="h-4" />
                    <p className="text-base sm:text-lg text-black">
                      {secondPart}
                      {index === 0 && !expanded && (
                        <span
                          onClick={() => setExpanded(true)}
                          className="text-black cursor-pointer font-bold text-lg text-center select-none"
                        >
                          {' Read More'}
                        </span>
                      )}
                    </p>
                  </>
                );
              })() : (
                <p className="text-base sm:text-lg text-black">
                  {section.content}
                  {index === 0 && !expanded && (
                    <span
                      onClick={() => setExpanded(false)}
                      className="text-black cursor-pointer font-bold text-lg text-center select-none"
                    >
                      {' Read More'}
                    </span>
                  )}
                </p>
              )}

            </div>

            <div className="relative w-full h-64 md:h-auto">
              <div
                className="w-full h-full rounded-3xl"
                style={{
                  backgroundImage: `url(${section.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        ))}
        {expanded &&
          <p
            onClick={() => setExpanded(!expanded)}
            className="cursor-pointer font-bold text-lg text-black -mt-20"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </p>
        }

      </div>
    </section>
  );
};

export default SchoolAbout;
