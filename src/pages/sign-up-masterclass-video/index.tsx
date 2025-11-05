"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Drawer from "../../_components/Drawer/Drawer";
import Bonus from "@/_assets/bonus-offer.png";
import SignupForm from "./SignupForm";
import { fbTrack } from "@/lib/fb";

const Page = () => {
  const router = useRouter();
  const [formVisible, setFormVisible] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    fbTrack("PageView", { content_name: "MasterclassLanding" });
  }, []);

  // If already signed up, show notice then redirect
  useEffect(() => {
    const isSignedUp = sessionStorage.getItem("signedUp");
    if (isSignedUp === "true") {
      setRedirecting(true);
      setFormVisible(false);
      const t = setTimeout(() => {
        router.replace("/dynamic-masterclass-video");
      }, 700);
      return () => clearTimeout(t);
    }
  }, [router]);

  const handleUnlockedFromForm = () => {
    // Ensure the flag exists even if SignupForm does not set it
    sessionStorage.setItem("signedUp", "true");
    setRedirecting(true);
    setFormVisible(false);
    setTimeout(() => {
      router.replace("/dynamic-masterclass-video");
    }, 500);
  };

  return (
    <>
      <div className="min-h-screen !font-jakarta bg-white text-black">
        <section className="relative pb-8 md:pb-12 pt-8 lg:pt-10 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex items-center justify-center">
          <div className="relative lg:w-[80%] max-w-[1100px] mx-auto w-full">
            {/* Redirect notice */}
            {redirecting && (
              <div
                role="status"
                aria-live="polite"
                className="mb-4 w-full rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900"
              >
                Redirecting to the masterclass video...
              </div>
            )}

            {/* Header row */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-8 text-center">
              <div className="flex justify-center">
                <div className="relative w-28 h-28 lg:w-48 lg:h-24 rounded-full overflow-hidden">
                  <Image
                    src={Bonus}
                    alt="Bonus"
                    fill
                    className="object-contain p-1"
                    sizes="112px"
                    priority
                  />
                </div>
              </div>

              <div className="md:w-auto md:ml-4 mt-4 md:mt-0">
                <h2 className="text-xl sm:text-2xl lg:text-[24px] leading-tight font-bold tracking-wide uppercase">
                  <span className="block">Earn £1000 a day in 90 days</span>
                  <span className="block">
                    as an{" "}
                    <span className="text-[#FFA500] whitespace-nowrap">
                      Independent Consultant
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Single column: form only */}
            <div className="mt-7 lg:mt-6 flex justify-center">
              <div className="w-full lg:max-w-3xl">
                <div className="relative border-2 border-neutral-300 bg-white rounded-2xl md:rounded-[24px]">
                  <div className="p-4 md:p-6">
                    {formVisible ? (
                      <SignupForm onUnlocked={handleUnlockedFromForm} />
                    ) : (
                      <p className="text-center text-sm text-neutral-700">
                        Redirecting now...
                      </p>
                    )}
                  </div>
                  {/* subtle glow tuned for white */}
                  <div
                    className="pointer-events-none absolute top-0 left-0 w-full h-full border border-neutral-200 bg-white/60 rounded-xl z-[-1]"
                    style={{ filter: "blur(18px)" }}
                  />
                </div>

                <p className="mt-3 text-center text-xs text-neutral-500">
                  By continuing, you agree to receive important updates about
                  the masterclass.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Drawer />
    </>
  );
};

export default Page;
