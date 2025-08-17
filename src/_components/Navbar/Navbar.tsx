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

const navItems = [
  { label: "Home", href: "https://www.rule-benders.com/home" },
  { label: "Courses", href: "https://www.rule-benders.com/courses" },
  {
    label: "Community",
    href: "https://www.rule-benders.com/?msg=not-logged-in",
  },
];

export default function Navbar({ customStyle }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`bg-black text-white fixed top-0 left-0 w-full z-50 ${customStyle}`}
      >
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image src={logo} alt="Logo" width={32} height={32} />
            <span className="hidden sm:inline text-sm">
              Rule Benders Academy
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative uppercase text-gray-300 hover:text-white transition"
              >
                {label}
              </Link>
            ))}

            {/* Join Now button */}
            <GlobalButton
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-3 text-base bg-white !text-black"
            >
              Join Now{" "}
              <Image src={TopRightArrow} alt="" width={16} height={16} />
            </GlobalButton>
          </nav>

          {/* Mobile toggle */}
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

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white px-4 pb-10 text-center">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block py-2 cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-6 flex justify-center">
              <GlobalButton
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-3 text-base bg-white !text-black"
              >
                Join Now{" "}
                <Image src={TopRightArrow} alt="" width={16} height={16} />
              </GlobalButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
