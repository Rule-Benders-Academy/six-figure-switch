import React from "react";
import GlobalButton from "../GlobalButton/GlobalButton";

const callToAction = {
  heading: "Ready to blaze your own trail?",
  text: "Break free from the traditional career path — join Rule Benders and fast-track your success with real-world strategies.",
  buttonText: "Get Started",
};

const CallToActionSection = () => {
  return (
    <div className="bg-white px-6 py-16 md:py-24 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 text-black">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left leading-tight md:w-[50%] w-full ">
        {callToAction.heading}
      </h2>
      <div className="max-w-lg text-center lg:text-left">
        <p className="text-lg md:text-xl mb-6">{callToAction.text}</p>
        <GlobalButton>
          {callToAction.buttonText}
        </GlobalButton>
      </div>
    </div>
  );
};

export default CallToActionSection;
