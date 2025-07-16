import GlobalButton from "../GlobalButton/GlobalButton";

const SchoolHeroSection = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative md:h-[calc(100vh-75px)] h-[calc(100vh-56px)] bg-black text-white flex flex-col justify-end px-6 md:px-16 pb-20 mt-14 md:mt-[75px]">
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

      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="z-10 w-[80%] lg:w-[75%]">
        <p className="mb-5 text-sm md:text-base lg:text-xl">
          WILL RICHARDSON
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:leading-[123%]">
          Climbed to the top of the corporate ladder leading the world’s biggest projects without connections or qualifications, as a day rate contractor.
        </h1>
        <GlobalButton onClick={() => handleScroll("ourStory")} className="w-[120px] h-[51px]">
          Join me
        </GlobalButton>
      </div>
    </section>
  );
};

export default SchoolHeroSection;
