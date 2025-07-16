'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../_assets/logo.svg";
import TopRightArrow from "../../_assets/top-right-arrow.svg";
import MenuIcon from "../../_assets/menu-icon.svg";
import CancelIcon from "../../_assets/cancel-icon.svg";
import GlobalButton from "../GlobalButton/GlobalButton";

interface Props {
  customStyle?: string;
  landing?: boolean;
}

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Community", id: "community" },
];

const LandingMenuItems = [
  { label: "About", id: "About" },
  { label: "Work", id: "Work" },
  { label: "Portfolio", id: "Portfolio" },
];

const Navbar = ({ customStyle, landing }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleScroll = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const itemsToShow = landing ? LandingMenuItems : menuItems;

  return (
    <header className={`bg-black text-white fixed top-0 left-0 w-full z-50 ${customStyle}`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Image src={logo} alt="Logo" />
          <span className="text-sm hidden sm:inline">Rule Benders Academy</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {itemsToShow.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`relative transition cursor-pointer uppercase ${active === id ? "text-white" : "text-gray-300"
                }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 right-0 h-[2px] w-[80%] bg-[#FFA500] transition-all duration-300 ${active === id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
              ></span>
            </button>
          ))}
            <GlobalButton
              className={`text-base flex gap-4 items-center ${landing
                  ? "!bg-black !text-white border border-white"
                  : "bg-white !text-black"
                }`}
            >
              Join Now {landing ? null : <Image src={TopRightArrow} alt="" />}
            </GlobalButton>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <Image src={CancelIcon} alt="Close menu" /> : <Image src={MenuIcon} alt="Open menu" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-10 text-center">
          {itemsToShow.map(({ label, id }) => (
            <p
              key={id}
              onClick={() => {
                handleScroll(id);
                setMenuOpen(false);
              }}
              className="block py-2 hover:text-yellow-400 cursor-pointer"
            >
              {label}
            </p>
          ))}
          <div className="flex justify-center mt-6">
            <GlobalButton
              className={`text-base flex gap-4 items-center ${landing
                  ? "!bg-black !text-white border border-white"
                  : "bg-white !text-black"
                }`}
            >
              Join Now {landing ? null : <Image src={TopRightArrow} alt="" />}
            </GlobalButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
