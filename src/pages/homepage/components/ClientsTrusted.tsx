/* eslint-disable */
"use client";

import React from "react";
import TrustedCompanies from "./trustedcompanies";

const ClientsTrusted: React.FC = () => {
  return (
    <section
      className="w-full bg-white text-neutral-900"
      aria-label="Clients landed with this system"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Title: always black + big */}
        <h2 className="text-center text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          THIS SYSTEM HELPED ME LAND THOSE CLIENTS:
        </h2>

        {/* Full-bleed carousel (100% of viewport width) */}
        <div className="mt-8 relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="w-full overflow-hidden">
            <TrustedCompanies />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTrusted;
