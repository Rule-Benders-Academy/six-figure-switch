import Image from "next/image";
import React from "react";
import Logo from "../../_assets/logo.svg";

const socialLinks = [
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    url: "https://www.linkedin.com/company/rule-benders-academy/",
    alt: "LinkedIn",
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
    url: "https://www.facebook.com/people/Will-Rulebender/61576916601382/",
    alt: "Facebook",
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
    url: "https://www.youtube.com/@willrulebender",
    alt: "YouTube",
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    url: "https://www.instagram.com/willrulebender_/",
    alt: "Instagram",
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
    url: "https://www.tiktok.com/@willrulebender",
    alt: "TikTok",
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snapchat.svg",
    url: "https://www.snapchat.com/@willrulebender",
    alt: "Snapchat",
  },
];

const navItems = [
  { label: "Home", href: "https://www.rule-benders.com/home" },
  { label: "Courses", href: "https://www.rule-benders.com/courses" },
  {
    label: "Community",
    href: "https://www.rule-benders.com/?msg=not-logged-in",
  },
];

const LandingFooter = () => {
  return (
    <footer className="bg-black text-white text-center pt-7 md:pt-10 lg:pt-[51px] pb-5 md:pb-10 lg:pb-20 border-t-[5px] md:border-t-[8px] lg:border-t-[14px] border-[#E39404] px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Logo + Name */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-5 md:gap-8 lg:gap-[47px]">
          <Image
            src={Logo}
            alt="Rule Benders Logo"
            className="w-[30px] md:w-12 lg:w-[55px]"
          />
          <span className="uppercase text-sm md:text-base lg:text-3xl tracking-[1%]">
            RULE BENDERS ACADEMY
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[6px] md:text-sm lg:text-lg leading-relaxed mt-6 md:mt-10 lg:mt-10">
        Conquer Consultancy School provides educational content, coaching, and
        strategic guidance designed to support professionals in pursuing careers
        as independent consultants. However, participation in this programme
        does not constitute a guarantee of employment, consulting roles, paid
        contracts, or specific financial outcomes. Success depends on individual
        effort, experience, market conditions, and other external factors beyond
        our control. We offer tools, insights, and support—but we do not promise
        or imply any specific results, job placements, or client engagements.
        This programme is for educational and informational purposes only. By
        enrolling, you acknowledge that you are responsible for your own
        professional decisions and actions. Rule Benders makes no guarantees,
        representations, or warranties—express or implied—regarding career
        success or income generation, in the UK, US or any other jurisdiction.
      </p>

      {/* Footer Nav */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] md:text-sm lg:text-base">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E39404] transition"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://sixfigureswitch.rule-benders.com/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#E39404] transition"
        >
          Terms & Conditions
        </a>
      </div>

      {/* Social Section */}
      <div className="mt-6 flex justify-center gap-5 md:gap-8">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <Image
              src={link.iconUrl}
              alt={link.alt}
              width={20}
              height={20}
              className="md:w-6 md:h-6 lg:w-8 lg:h-8 invert"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default LandingFooter;
