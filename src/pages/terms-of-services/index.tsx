"use client";
import React from "react";
import Navbar from "@/_components/Navbar/Navbar";

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Padding to push content below the fixed navbar */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-6">
          Welcome to Rule Benders Academy (also known as Conquer Consultancy
          School). By enrolling in, accessing, or participating in our courses,
          coaching sessions, community, or other services (collectively, the
          “Programme”), you agree to these Terms of Service (“Terms”). Please
          read them carefully before purchasing or participating.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Programme Purpose
        </h2>
        <p className="mb-4">
          The Programme provides educational content, coaching, frameworks, and
          strategic insights to support professionals in positioning themselves
          as independent consultants. While we aim to deliver high-quality
          guidance, we do not guarantee employment, consulting contracts, or
          specific income levels. Your results will vary depending on your
          skills, effort, and market conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. No Guarantees of Outcome
        </h2>
        <p className="mb-4">
          Any case studies, testimonials, or examples we share are illustrative
          only. They should not be interpreted as promises or guarantees of
          future success.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Your Responsibilities
        </h2>
        <p className="mb-4">
          You are solely responsible for your professional decisions, actions,
          and results. By enrolling, you agree to complete coursework in good
          faith and maintain respectful conduct in all coaching sessions and
          community spaces.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All Programme materials, including videos, templates, and frameworks,
          are the intellectual property of Rule Benders Academy. You may use
          them for your own development but may not copy, resell, or
          redistribute them.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Payments, Refunds & Cancellations
        </h2>
        <p className="mb-4">
          Programme fees must be paid in full or according to the agreed plan.
          We offer a 14-day risk-free guarantee: if you complete the initial
          modules and attend at least one coaching call but are not satisfied,
          you may request a refund within 14 days of purchase. After 14 days,
          all payments are non-refundable.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Coaching & Community Access
        </h2>
        <p className="mb-4">
          Group coaching sessions may be recorded and shared with other
          participants. Access to community spaces is a privilege, and we
          reserve the right to remove participants who engage in abusive or
          disruptive behaviour.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Disclaimers</h2>
        <p className="mb-4">
          We are not financial advisors, legal advisors, or career placement
          agencies. Nothing in this Programme constitutes financial, legal, or
          investment advice. You should seek independent professional advice
          when appropriate.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, Rule Benders Academy and its
          affiliates are not liable for any damages or losses arising from your
          participation. Your sole remedy is to discontinue use of the
          Programme.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and construed under the laws of
          <span className="font-medium"> [Insert Jurisdiction]</span>. Any
          disputes will be handled exclusively in the courts of that
          jurisdiction.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          10. Updates to These Terms
        </h2>
        <p className="mb-4">
          We may update these Terms from time to time. The most recent version
          will always be available on our website. Continued use of the
          Programme means you accept the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          <a
            href="mailto:info@example.com"
            className="text-blue-600 underline ml-1"
          >
            info@rule-benders.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default TermsOfService;
