// components/Drawer.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import CancelIcon from "../../_assets/cancel-icon.svg";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Reusable Drawer: always in the DOM, slides in from the right at 50% width.
 */
export default function Drawer({ isOpen, onClose }: DrawerProps) {
  // Lock background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
        {/* Inner scrollable container */}
        <div className="h-full box-border  overflow-y-auto relative py-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 focus:outline-none"
            aria-label="Close drawer"
          >
            <Image src={CancelIcon} alt="Close" width={24} height={24} />
          </button>

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
