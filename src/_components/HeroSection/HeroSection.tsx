import Image from "next/image";
import HeroBg from "../../_assets/home-hero-bg.png"
import GlobalButton from "../GlobalButton/GlobalButton";

const HeroSection = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-[90vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
      <Image
        src={HeroBg}
        alt="Driving car"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-60 h-fit"
        priority
      />
      <div className="z-10 w-[80%] lg:w-[65%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:leading-[123%]">
          Fast-Track your Career. Bend The Rules. Build your Future.a
        </h1>
        <p className="mb-6 text-sm md:text-base lg:text-xl w-[80%] lg:w-[50%] mx-auto">
          You don’t need a business to be financially free. Master multiple career paths — fast.
        </p>

        <GlobalButton onClick={() => handleScroll("ourStory")}>
          Meet the Rule Benders!
        </GlobalButton>
      </div>
    </section>
  );
};

export default HeroSection;
