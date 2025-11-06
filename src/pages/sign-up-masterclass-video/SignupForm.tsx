/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePic from "@/_assets/will-img.png";
import { fbTrack } from "@/lib/fb";

type Props = {
  onUnlocked: () => void; // Called ONLY after confirmed AC success
};

// ActiveCampaign form embed id
const AC_FORM_ID = "3";

const SignupForm: React.FC<Props> = ({ onUnlocked }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if the user has already signed up or completed the form
    const isSignedUp = sessionStorage.getItem("signedUp");
    if (isSignedUp === "true") {
      setHidden(true); // Hide the form if the user has already signed up
      onUnlocked();
    }

    if (hidden) return; // If already signed up, don't load the form

    const root = document.getElementById("ac-form-root");
    if (!root) return;

    // Ensure AC form mount exists
    let mount = root.querySelector("._form_3") as HTMLDivElement | null;
    if (!mount) {
      mount = document.createElement("div");
      mount.className = "_form_3";
      root.appendChild(mount);
    }

    // Load AC script once
    if (
      !document.querySelector(`script[data-ac-form="${AC_FORM_ID}"]`) &&
      isSignedUp != "true"
    ) {
      const s = document.createElement("script");
      s.src = `https://rule-benders.activehosted.com/f/embed.php?id=${AC_FORM_ID}`;
      s.async = true;
      s.charset = "utf-8";
      s.setAttribute("data-ac-form", AC_FORM_ID);
      document.body.appendChild(s);
    }

    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      setHidden(true); // Hide the form after successful submission
      onUnlocked();

      // Save the "signedUp" state in sessionStorage
      sessionStorage.setItem("signedUp", "true");

      // Fire Facebook Pixel event for successful opt-in (Lead)
      fbTrack("Lead", { content_name: "MasterclassOptin" });

      // Dispatch a custom event after successful form submission
      const event = new CustomEvent("acFormSubmitSuccess", {
        detail: { message: "AC form submission was successful" },
      });
      document.dispatchEvent(event); // Dispatch the event globally
    };

    // --- Helpers -------------------------------------------------------------

    // add data-track attributes to AC form & submit (for pixel spec)
    const tagAcElements = () => {
      const form = root.querySelector("form._form") as HTMLFormElement | null;
      if (form && !form.getAttribute("data-track")) {
        form.setAttribute("data-track", "optin-form");
      }
      const btn =
        (form?.querySelector('[type="submit"]') as HTMLButtonElement | null) ||
        (root.querySelector('[type="submit"]') as HTMLButtonElement | null);
      if (btn && !btn.getAttribute("data-track")) {
        btn.setAttribute("data-track", "optin-submit");
      }
    };

    const thankYouVisible = () => {
      const thanks = root.querySelector(
        "._form-thank-you, ._form-thank-you_message"
      ) as HTMLElement | null;
      if (!thanks) return false;
      // visible if rendered in layout or has content
      return (
        thanks.offsetParent !== null ||
        thanks.offsetHeight > 0 ||
        (thanks.textContent || "").trim().length > 0
      );
    };

    // --- Observers / Listeners ----------------------------------------------

    // Observe DOM to (1) tag elements and (2) detect success
    const mo = new MutationObserver(() => {
      tagAcElements();
      if (thankYouVisible()) {
        mo.disconnect();
        unlock();
      }
    });
    mo.observe(root, { childList: true, subtree: true });

    // Try tagging a few times while AC script mounts
    const tagInterval = window.setInterval(tagAcElements, 400);

    // Listen for AC success via postMessage (string or object patterns)
    const onMsg = (e: MessageEvent) => {
      const raw = e.data;
      try {
        if (typeof raw === "string") {
          if (/ac_form_submit_success|form.*submit.*success/i.test(raw)) {
            unlock();
          } else {
            // sometimes JSON stringified
            const parsed = JSON.parse(raw);
            if (
              parsed &&
              (parsed.type === "ac_form_submit_success" ||
                parsed.event === "ac_form_submit_success")
            ) {
              unlock();
            }
          }
        } else if (
          raw &&
          typeof raw === "object" &&
          ((raw as any).type === "ac_form_submit_success" ||
            (raw as any).event === "ac_form_submit_success")
        ) {
          unlock();
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("message", onMsg);

    // Also listen for a possible custom DOM event (some AC variants dispatch it)
    const onCustom = () => unlock();
    document.addEventListener(
      "ac_form_submit_success" as any,
      onCustom as any,
      false
    );

    // Periodic sanity check for thank-you visibility (success-only)
    const pollId = window.setInterval(() => {
      if (thankYouVisible()) {
        window.clearInterval(pollId);
        mo.disconnect();
        unlock();
      }
    }, 600);

    return () => {
      window.clearInterval(tagInterval);
      window.clearInterval(pollId);
      mo.disconnect();
      window.removeEventListener("message", onMsg);
      document.removeEventListener(
        "ac_form_submit_success" as any,
        onCustom as any
      );
    };
  }, [hidden, onUnlocked]);

  // If the form is hidden (user already signed up), return null to prevent rendering
  if (hidden) return null;

  return (
    <div>
      {/* Top two-column banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch text-left">
        {/* Left: portrait circle */}
        <div className="relative rounded-[28px] border border-[#3C3C3C] bg-[#0b0b0c] p-4 md:p-6 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/15" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 -ml-10 w-2.5 h-2.5 rounded-full bg-white/25" />
          <div className="mb-4 text-center">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 md:w-[326px] md:h-[326px] rounded-full overflow-hidden ring-4 ring-[#0b0b0c] shadow-xl">
                <Image
                  src={ProfilePic}
                  alt="Will"
                  fill
                  className="object-cover"
                  sizes="344px"
                  priority
                />
              </div>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-wide text-white/70">
              Start the{" "}
              <span className="text-[#FFA500] font-semibold">
                Free Masterclass
              </span>
            </p>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-[85%] rounded-[50%] bg-[#FFA500]/10 blur-2xl"
          />
        </div>

        {/* Right: pitch card */}
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl md:rounded-3xl border border-[#3C3C3C] bg-[#0d0c0e] p-6 md:p-8 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-16 -right-16 h-40 w-40 rotate-45 bg-gradient-to-br from-[#FFA500]/20 to-transparent"
          />
          <h3 className="text-xl lg:text-xl font-bold leading-tight text-white">
            Limited Masterclass Offer:
            <br />
            <span className="text-[#FFA500]">Valid for 10 days</span>
          </h3>
          <p className="mt-4 text-xl text-white/80 leading-relaxed">
            Enter your details then join{" "}
            <span className="text-[#FFA500] font-semibold">
              100+ professionals
            </span>{" "}
            making the switch to high paid consulting.
          </p>
        </div>
      </div>

      <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFA500] to-transparent" />

      {/* AC form root; AC will inject <form class="_form"> inside this node. */}
      <div className={hidden ? "hidden" : ""}>
        {" "}
        {/* Apply 'hidden' to the parent div */}
        {/* Only render the form if 'hidden' is false */}
        {!hidden && (
          <div
            id="ac-form-root"
            data-track="optin-form-root"
            className="relative w-full rounded-xl overflow-hidden border border-[#3C3C3C] bg-[#0d0c0e] p-3 md:p-4"
          >
            <h4 className="text-lg md:text-xl font-bold text-white">
              Watch <span className="text-[#FFA500]">instantly</span>
            </h4>
            {/* AC form mount (AC will inject <form class="_form"> inside this node) */}
            <div className="_form_3 -mt-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;