"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import GradientButton from "@/_components/GradientButton/GradientButton";
import ProfilePic from "@/_assets/will-img.png";
import HeroBg from "@/_assets/landing-hero-bg.png";

// Updated social icons
// Updated social icons with real links
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


const LinkTreePage = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const existing = formRef.current.querySelector("._form_1");
    if (existing) return;

    // Inject style to apply border-radius
    const style = document.createElement("style");
    style.textContent = `
      ._form_1_ {
        border-radius: 20px !important;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
    formRef.current.innerHTML = "";
    const formDiv = document.createElement("div");
    formDiv.className = "_form_1";
    formRef.current.appendChild(formDiv);

    const script = document.createElement("script");
    script.src = "https://rule-benders.activehosted.com/f/embed.php?id=1";
    script.charset = "utf-8";
    script.async = true;
    formRef.current.appendChild(script);

    // Cleanup rogue form injected to <body>
    const cleanup = setInterval(() => {
      const rogueForm = document.querySelector("body > ._form_1");
      if (rogueForm && !formRef.current?.contains(rogueForm)) {
        rogueForm.remove();
        clearInterval(cleanup);
      }
    }, 1000);
  }, []);

  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center py-16 px-4 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
      </div>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image src={ProfilePic} alt="Profile" width={128} height={128} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          William Richardson
        </h1>
        <p className="text-center text-sm md:text-base text-gray-300 max-w-md">
          I help consultants to scale to £1k+ days.
        </p>
      </div>

      {/* Main Button */}
      <div className="relative z-10 w-full max-w-xs mb-8">
        <a
          href="https://sixfigureswitch.rule-benders.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientButton className="!mx-auto !w-[300px] lg:!py-2 !mt-0 !px-2 !text-base !font-medium">
            Make the Six‑Figure Switch
          </GradientButton>
        </a>
      </div>

      {/* Form Embed */}
      <div ref={formRef} className="relative z-10 w-full max-w-md mb-8" />

      {/* Social Links */}
      <div className="relative z-10 flex items-center gap-6 mb-12">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <Image
              src={link.iconUrl}
              alt={link.alt}
              width={32}
              height={32}
              className="object-contain filter invert hover:opacity-80"
            />
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto text-xs text-gray-600 text-center">
        © {new Date().getFullYear()} Rule-Benders. All rights reserved.
      </footer>
    </main>
  );
};

export default LinkTreePage;
