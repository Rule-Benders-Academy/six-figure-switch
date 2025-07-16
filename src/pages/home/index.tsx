import BreakFreeSection from "@/_components/BreakFreeSection/BreakFreeSection";
import CareerPicker from "@/_components/CareerPicker/CareerPicker";
import CommunitySection from "@/_components/CommunitySection/CommunitySection";
import FAQSection from "@/_components/FAQSection/FAQSection";
import Footer from "@/_components/Footer/Footer";
import HeroSection from "@/_components/HeroSection/HeroSection";
import HighPerformersSection from "@/_components/HigherProfomance/HigherPerfomance";
import HomeAbout from "@/_components/HomeAbout/HomeAbout";
import HomeSpotlight from "@/_components/HomeSpotlight/HomeSpotlight";
import HomeTestimonials from "@/_components/HomeTestimonials/HomeTestimonials";
import MeetRuleBenders from "@/_components/MeetRuleBenders/MeetRuleBenders";
import Navbar from "@/_components/Navbar/Navbar";
import RewardsComponent from "@/_components/RewardsComponent/RewardsComponent";
import faqsData from "@/utils/FAQsData";
import Head from "next/head";


const HomePage = ()=> {
  return (
    <>
      <Head>
        <title>Rule Benders Academy</title>
      </Head>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <CareerPicker />
        <BreakFreeSection />
          
        <HomeAbout />
        <MeetRuleBenders />
        <HighPerformersSection />
        <RewardsComponent/>
        <div className="bg-white">
          <HomeSpotlight />
          <HomeTestimonials/>
          <CommunitySection/>
          <FAQSection faqs={faqsData} />
        </div>
        <Footer/>
      </main>
    </>
  );
}
export default HomePage