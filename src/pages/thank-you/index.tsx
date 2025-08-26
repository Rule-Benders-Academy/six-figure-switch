/* eslint-disable */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  CheckCircle,
  MailCheck,
  Clock,
  Inbox,
  ExternalLink,
  Copy,
  ShieldCheck,
  MessageCircle,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import LandingFooter from "@/_components/LandingFooter/LandingFooter";

/* -------------------------------------------------------
   Elegant "Welcome to Six Figure Switch"
   - Black + soft gold theme
   - Smaller hero card
   - Slow, refined animations (no hover/tilt)
   - Confetti streams from BOTH sides, multi-color, slow
   - Live Chat + Email Support (removed Program Home & Print)
   - Email delivery notice (up to 20 minutes)
-------------------------------------------------------- */

type Chip = { label: string; icon?: React.ReactNode };

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

const chips: Chip[] = [
  { label: "Real-world templates" },
  { label: "Rate growth roadmap" },
  { label: "Offer positioning" },
  { label: "Interview frameworks" },
  { label: "Client delivery scripts" },
  { label: "Weekly implementation" },
  { label: "Private platform" },
];

const gradientMesh =
  "radial-gradient(1200px 600px at 0% 0%, rgba(255,194,34,0.12), transparent 60%), radial-gradient(1000px 700px at 100% 0%, rgba(255,140,0,0.08), transparent 60%), radial-gradient(1000px 800px at 50% 100%, rgba(255,214,102,0.09), transparent 60%)";

const cardBorder =
  "p-[1.1px] rounded-[22px] bg-gradient-to-r from-amber-400/45 via-amber-300/30 to-yellow-500/45";

const innerCard =
  "rounded-[21px] bg-[#1a191a]/95 backdrop-blur-xl border border-white/10";

/* ===================== CONFETTI STREAMS ===================== */

const CONFETTI_COLORS = [
  "rgba(255,191,0,0.95)", // gold
  "rgba(255,145,0,0.95)", // orange
  "rgba(255,221,87,0.95)", // light gold
  "rgba(167,139,250,0.95)", // purple
  "rgba(110,193,228,0.95)", // blue
  "rgba(45,212,191,0.95)", // teal
  "rgba(236,72,153,0.95)", // pink
];

type StreamPiece = {
  id: number;
  topPct: number; // where along the side it starts (percent)
  driftX: number;
  fallY: number;
  rotate: number;
  delay: number;
  dur: number;
  repeatDelay: number;
  size: number;
  color: string;
};

function makeStream(side: "left" | "right", count = 42): StreamPiece[] {
  return Array.from({ length: count }).map((_, i) => {
    const color =
      CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    return {
      id: i,
      topPct: 10 + Math.random() * 60, // 10% to 70% down the side
      driftX: (side === "left" ? 1 : -1) * (400 + Math.random() * 300), // px
      fallY: 420 + Math.random() * 300, // px
      rotate: Math.random() * 360,
      delay: Math.random() * 3.5, // staggered start
      dur: 6.5 + Math.random() * 3.5, // slow fall 6.5s–10s
      repeatDelay: 3 + Math.random() * 4, // pause between repeats
      size: 4 + Math.random() * 7,
      color,
    };
  });
}

const ConfettiStream = ({ side = "left" as "left" | "right" }) => {
  const pieces = useMemo(() => makeStream(side), [side]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={`${side}-${p.id}`}
          className="absolute block rounded-[2px]"
          style={{
            top: `${p.topPct}%`,
            left: side === "left" ? "-3%" : "103%",
            width: p.size,
            height: p.size * 0.55,
            background: p.color,
          }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
          animate={{
            x: p.driftX,
            y: p.fallY,
            rotate: p.rotate,
            opacity: [0, 1, 1, 0.9, 0],
          }}
          transition={{
            duration: p.dur,
            ease: "easeOut",
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: p.repeatDelay,
          }}
        />
      ))}
    </div>
  );
};

/* ===================== PAGE ===================== */

const ThankYou = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [txId, setTxId] = useState<string | null>(null);
  const [copied, setCopied] = useState<"email" | "tx" | null>(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setEmail(sp.get("customer_email"));
    setTxId(sp.get("transaction_id"));
  }, []);

  const handleCopy = async (text: string, type: "email" | "tx") => {
    if (!text) return;
    const ok = await copy(text);
    if (ok) {
      setCopied(type);
      setTimeout(() => setCopied(null), 1300);
    }
  };

  const openLiveChat = () => {
    try {
      if (typeof window !== "undefined" && (window as any).$crisp) {
        (window as any).$crisp.push(["do", "chat:open"]);
        (window as any).$crisp.push([
          "do",
          "message:show",
          ["text", "Hi! I need help with my order."],
        ]);
      } else {
        window.location.href =
          "mailto:info@rule-benders.com?subject=Live%20chat%20support&body=Hi%20team%2C%0A%0AI%20need%20help%20with%20my%20order.%0AEmail%3A%20" +
          encodeURIComponent(email ?? "") +
          "%0ATransaction%20ID%3A%20" +
          encodeURIComponent(txId ?? "") +
          "%0A%0AThanks!";
      }
    } catch {}
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white overflow-hidden relative"
      style={{ backgroundImage: gradientMesh, backgroundColor: "#141314" }}
    >
      {/* ultra-slow animated grid backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-size:44px_44px] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* very slow floating gold haze */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-amber-400/18 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-40 h-[30rem] w-[30rem] rounded-full bg-yellow-200/12 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -18, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Confetti streams from BOTH sides — slow & colorful */}
      <ConfettiStream side="left" />
      <ConfettiStream side="right" />
      

      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        {/* Smaller, elegant hero card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          <div className={cardBorder}>
            <div className={innerCard}>
              <div className="px-8 md:px-10 py-10 md:py-12 text-center">
                {/* success icon (slow, subtle) */}
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-5 flex items-center justify-center"
                >
                  <CheckCircle className="w-16 h-16 text-amber-400 drop-shadow-[0_0_14px_rgba(255,193,7,0.28)]" />
                </motion.div>

                {/* Headline */}
                <motion.p
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="uppercase tracking-[0.22em] text-xs md:text-sm text-amber-200/80"
                >
                  Welcome to
                </motion.p>

                <motion.h1
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
                  className="text-[30px] md:text-5xl lg:text-[52px] font-extrabold mt-2 leading-[1.07] tracking-tight"
                >
                  <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 bg-clip-text text-transparent">
                    Six Figure Switch
                  </span>
                </motion.h1>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
                  className="mx-auto mt-4 h-[5px] w-[200px] md:w-[260px] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 rounded-full origin-left"
                />

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                  className="text-gray-200 text-[15px] md:text-[17px] leading-relaxed mt-6"
                >
                  Your order is confirmed. You’ll receive your access email
                  shortly. We’re excited to help you transition from employed to
                  independent consultant with clarity, confidence, and momentum.
                </motion.p>

                {/* Receipt summary */}
                {(email || txId) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {email && (
                      <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <MailCheck className="w-4 h-4 text-amber-300" />
                          <span className="text-gray-200">Receipt sent to</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{email}</span>
                          <button
                            onClick={() => handleCopy(email, "email")}
                            className="p-1.5 rounded-md hover:bg-white/10"
                            title="Copy email"
                          >
                            <Copy className="w-4 h-4 text-gray-300" />
                          </button>
                          {copied === "email" && (
                            <span className="text-xs text-amber-300">
                              Copied
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    {txId && (
                      <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-amber-300" />
                          <span className="text-gray-200">Transaction ID</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{txId}</span>
                          <button
                            onClick={() => handleCopy(txId, "tx")}
                            className="p-1.5 rounded-md hover:bg-white/10"
                            title="Copy transaction ID"
                          >
                            <Copy className="w-4 h-4 text-gray-300" />
                          </button>
                          {copied === "tx" && (
                            <span className="text-xs text-amber-300">
                              Copied
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Email delivery notice */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                  className="mt-7 rounded-2xl border border-amber-400/25 bg-amber-400/10 px-5 py-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-amber-200 font-semibold">
                        Email delivery can take up to 20 minutes
                      </p>
                      <ul className="mt-2 text-sm text-amber-100/90 space-y-1.5">
                        <li>Check Spam, Promotions, or Updates folders.</li>
                        <li>
                          Add{" "}
                          <span className="font-semibold">
                            info@rule-benders.com
                          </span>{" "}
                          to your contacts.
                        </li>
                        <li>
                          If you used a work email, ask IT to allow list our
                          address.
                        </li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://mail.google.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
                        >
                          <Inbox className="w-4 h-4" />
                          Open Gmail
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                        <a
                          href="https://outlook.live.com/mail/inbox"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
                        >
                          <Inbox className="w-4 h-4" />
                          Open Outlook
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Actions — Program Home & Print removed */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                  className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <button
                    onClick={openLiveChat}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Live Chat
                  </button>

                  <a
                    href={`mailto:info@rule-benders.com?subject=Access%20help${
                      txId ? `%20-%20${txId}` : ""
                    }&body=${encodeURIComponent(
                      `Hi team,\n\nI have not received my access email yet.\n\nEmail: ${
                        email ?? ""
                      }\nTransaction ID: ${txId ?? ""}\n\nThanks!`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
                  >
                    <FileText className="w-4 h-4" />
                    Email Support
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Very slow marquee chips */}
        <div className="relative mt-10 w-full overflow-hidden">
          <motion.div
            className="flex gap-3 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
          >
            {[...chips, ...chips].map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-sm mx-1"
              >
                {c.icon}
                {c.label}
              </span>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#141314] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#141314] to-transparent" />
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default ThankYou;
