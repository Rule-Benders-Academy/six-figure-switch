// components/Drawer.tsx
"use client";

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
  return (
    <div className="fixed inset-0 z-50 pointer-events-none p-14">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50 pointer-events-auto" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-700 focus:outline-none  p-4"
          aria-label="Close drawer"
        >
          <Image src={CancelIcon} alt="Close" width={24} height={24} />
        </button>

        <iframe
          src="https://rulebenders.mysamcart.com/high-paid-consultant-course/"
          className="w-full h-full border-0 pb-8 bg-black"
          allow="payment"
          title="Course Checkout"
        />
      </div>
    </div>
  );
}
