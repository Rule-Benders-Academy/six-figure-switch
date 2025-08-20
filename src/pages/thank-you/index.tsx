"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import LandingFooter from "@/_components/LandingFooter/LandingFooter";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#141314] to-[#272526] text-white overflow-hidden">
      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 py-28">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center bg-[#1f1e1f] rounded-3xl p-12 md:p-16 shadow-xl border border-[#FFBE48]"
        >
          {/* Check Icon Animation */}
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle className="w-20 h-20 mx-auto text-[#FFBE48] mb-6" />
          </motion.div>

          {/* Header with minimal celebratory touch */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text"
          >
            Thank You! 🎉
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed"
          >
            Your purchase was successful. You’ll receive an email confirmation
            shortly.
            <br />
            Get ready to access the{" "}
            <span className="font-semibold">Six Figure Switch</span> program and
            start your consulting journey.
          </motion.p>
        </motion.div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default ThankYou;
