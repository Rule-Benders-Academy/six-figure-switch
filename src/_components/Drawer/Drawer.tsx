"use client";

import { useEffect } from "react";
import Image from "next/image";
import CancelIcon from "../../_assets/cancel-icon.svg";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  // Prevent layout shift from disappearing scrollbar
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      } box-border overflow-hidden`}
    >
      {/* Backdrop */}
      <div
        className={`
          absolute inset-0 bg-black transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-50" : "opacity-0"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Panel */}
      <div
        className={`
          absolute top-0 right-0 h-full w-full lg:w-1/2 bg-black shadow-lg
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Scrollable inner container */}
        <div className="h-full box-border overflow-y-auto relative py-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 focus:outline-none bg-white/30 hover:bg-white/20 rounded-full z-10"
            aria-label="Close drawer"
          >
            <Image
              src={CancelIcon}
              alt="Close"
              width={24}
              height={24}
              className="invert"
            />
          </button>

          {/* Content */}
          <iframe
            src="https://rulebenders.mysamcart.com/high-paid-consultant-course/"
            className="w-full h-full border-0 bg-black"
            allow="payment"
            title="Course Checkout"
          />
        </div>
      </div>
    </div>
  );
}
