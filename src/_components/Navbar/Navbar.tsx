// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
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

const defaultItems = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Community", id: "community" },
];
const landingItems = [
  { label: "About", id: "About" },
  { label: "Work", id: "Work" },
  { label: "Portfolio", id: "Portfolio" },
];

export default function Navbar({ customStyle, landing }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const items = landing ? landingItems : defaultItems;
  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`bg-black text-white fixed top-0 left-0 w-full z-50 ${customStyle}`}
      >
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image src={logo} alt="Logo" width={32} height={32} />
            <span className="hidden sm:inline text-sm">
              Rule Benders Academy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {items.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative uppercase transition ${
                  active === id ? "text-white" : "text-gray-300"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 right-0 h-[2px] w-[80%] bg-[#FFA500] transition-opacity duration-300 ${
                    active === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
            <GlobalButton
              onClick={() => setDrawerOpen(true)}
              className={`flex items-center gap-3 text-base ${
                landing
                  ? "!bg-black !text-white border border-white"
                  : "bg-white !text-black"
              }`}
            >
              Join Now{" "}
              {!landing && (
                <Image src={TopRightArrow} alt="" width={16} height={16} />
              )}
            </GlobalButton>
          </nav>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <Image src={CancelIcon} alt="Close menu" width={24} height={24} />
            ) : (
              <Image src={MenuIcon} alt="Open menu" width={24} height={24} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black text-white px-4 pb-10 text-center">
            {items.map(({ label, id }) => (
              <p
                key={id}
                onClick={() => {
                  scrollTo(id);
                  setMenuOpen(false);
                }}
                className="py-2 cursor-pointer hover:text-yellow-400"
              >
                {label}
              </p>
            ))}
            <div className="mt-6 flex justify-center">
              <GlobalButton
                className="flex items-center gap-3 text-base bg-white !text-black"
              >
                Join Now{" "}
                <Image src={TopRightArrow} alt="" width={16} height={16} />
              </GlobalButton>
            </div>
          </div>
        )}
      </header>
      {/* <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} /> */}
    </>
  );
}
