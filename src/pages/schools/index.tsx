'use client';
import CallToActionSection from '@/_components/CallToActionSection/CallToActionSection'
import Footer from '@/_components/Footer/Footer'
import LaunchPadMain from '@/_components/LaunchPadMain/LaunchPadMain'
import Navbar from '@/_components/Navbar/Navbar'
import RewardsComponent from '@/_components/RewardsComponent/RewardsComponent'
import SchoolStory from '@/_components/SchholStory/SchholStory'
import SchoolAbout from '@/_components/SchoolAbout/SchoolAbout'
import SchoolHeroSection from '@/_components/SchoolHeroSection/SchoolHeroSection'
import SchoolServices from '@/_components/SchoolServices/SchoolServices'
import SchoolTestimonials from '@/_components/SchoolTestimonial/SchoolTestimonial'
import ServiceCardSection from '@/_components/ServiceCardSection/ServiceCardSection'
import SuccessStories from '@/_components/SuccessStories/SuccessStories'
import WillClassesSection from '@/_components/WillClassesSection/WillClassesSection'
import React from 'react'
import { useSearchParams } from 'next/navigation';

const School = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  return (
    <div className="bg-white">
      <Navbar />
      <SchoolHeroSection />
      <SchoolAbout />
      {id === "0" &&
        <>
          <SchoolStory />
          <SchoolServices />
          <WillClassesSection />
          <LaunchPadMain />
        </>
      }
      <div style={{
        backgroundColor:id === "0"? "white":"black"
      }}>
      <ServiceCardSection id={id ?? "0"} />
      </div>
      {id === "0" &&
        <>
          <SuccessStories />
          <SchoolTestimonials />
          <RewardsComponent />
        </>
      }
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default School
