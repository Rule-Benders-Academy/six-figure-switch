import React from "react";
import Logo from "../../_assets/logo.svg"
import ArrowRight from "../../_assets/arrow-right-white-icon.svg"
import HeplIcon from "../../_assets/help-icon.svg"
import TwitterIcon from "../../_assets/twitter.svg"
import discordIcon from "../../_assets/discord.svg"
import LinkdinIcon from "../../_assets/Linkdin.svg"
import InstIconIcon from "../../_assets/insta.svg"
import YoutubeIcon from "../../_assets/youtube.svg"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-16">
      <div className="w-full flex flex-wrap sm:justify-between gap-10 justify-start">
        <div className="max-w-[250px] inline-block">
          <h3 className="text-sm md:text-base font-semibold mb-4">Rule Benders Academy</h3>
          <p className="text-xs md:text-sm text-white mb-4 md:leading-[23px]">
            Sign up for our newsletter to get actionable insights about your next money moves, right to your inbox.
          </p>
          <div className="flex items-center border border-white rounded-[8px] px-3 py-2 w-full max-w-sm h-[38px]">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent outline-none text-white placeholder:text-white ml-2 flex-grow text-sm"
            />
            <Image src={ArrowRight} alt="Arrow Right" className="w-4 h-4" />
          </div>
        </div>

        <div className="min-w-[150px] inline-block max-w-[200px]">
          <h4 className="text-sm md:text-base font-semibold mb-4">Products</h4>
          <ul className="space-y-1 text-xs md:text-sm text-white">
            <li>About</li>
            <li>Courses</li>
            <li>Innovators</li>
            <li>High Paid</li>
            <li>Contractor</li>
            <li>Entrepreneur</li>
            <li>Employees</li>
          </ul>
        </div>

        <div className="min-w-[150px] inline-block">
          <h4 className="text-sm md:text-base font-semibold mb-4">Resources</h4>
          <ul className="space-y-1 text-xs md:text-sm text-white">
            <li className="flex items-center gap-1">
              Help Center <Image src={HeplIcon} alt="Help Icon" className="w-4 h-4" />
            </li>
            <li>Customer Support</li>
            <li>Privacy & Policies</li>
            <li>Legal Terms</li>
          </ul>
        </div>

        <div className="min-w-[150px] inline-block">
          <h4 className="text-sm md:text-base font-semibold mb-4">Follow us</h4>
          <div className="flex gap-3">
            {[TwitterIcon, discordIcon, LinkdinIcon, InstIconIcon, YoutubeIcon].map((icon, index) => (
              <Image key={index} src={icon} alt={`Icon ${index}`} className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8" />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 md:mb-0 mt-12">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="mt-5 pt-3 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px]" style={{ borderTop: "0.2px solid white" }}>

        <p>Copyright. All Rights Reserved. Rule Benders Academy. 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
