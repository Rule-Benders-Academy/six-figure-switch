"use client";
import React from "react";
import Navbar from "@/_components/Navbar/Navbar";

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-2">Rule Benders Legal Document</h1>
        <h2 className="text-lg text-gray-600 mb-6">Terms of Service</h2>
        <p className="text-sm text-gray-500 mb-8">Last updated: 16/08/2025</p>

        <p className="mb-6">
          Welcome to Rule Benders Life &amp; Business Coaching Limited
          (“Company”, “we”, “our”, “us”). By accessing or using our website{" "}
          <span className="font-medium">sixfigureswitch.rule-benders.com</span>{" "}
          (the “Site”) and purchasing our products, programs, or services (the
          “Services”), you agree to be bound by these Terms of Service. If you
          do not agree with these Terms, you must not use our Site or Services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Eligibility &amp; Account Use
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            You must be at least 18 years old to purchase or use our Services.
          </li>
          <li>
            You agree to provide accurate, complete, and current information
            when registering or making purchases.
          </li>
          <li>
            You may not share login details, resell access, or redistribute any
            digital materials. Access is granted on a per-user basis.
          </li>
          <li>
            We reserve the right to suspend or terminate your account for breach
            of these Terms without refund.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. Purchases &amp; Payments
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Payments are securely processed by Paddle, our merchant of record.
          </li>
          <li>You agree to provide valid payment details.</li>
          <li>
            Prices are shown in USD unless otherwise stated and may change at
            our discretion.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Refunds</h2>
        <p className="mb-6">
          Our Refund Policy forms part of these Terms and is detailed below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Service Changes</h2>
        <p className="mb-6">
          We may modify, suspend, or discontinue any Service (or part of it)
          with reasonable notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Intellectual Property
        </h2>
        <p className="mb-6">
          All content on this Site (text, graphics, videos, downloads, logos) is
          owned by Rule Benders Life &amp; Business Coaching Limited and
          protected by copyright law. You may not copy, distribute, reproduce,
          or exploit any of our content without prior written consent.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Disclaimer &amp; Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Our Services are provided “as is” without warranties of any kind.
          </li>
          <li>We do not guarantee specific results or income.</li>
          <li>
            To the maximum extent permitted by law, we disclaim liability for
            any loss of profits, revenue, data, or business interruption, as
            well as any indirect or consequential damages.
          </li>
          <li>
            Our total liability for any claim shall not exceed the amount you
            paid for the Service in question.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Governing Law &amp; Jurisdiction
        </h2>
        <p className="mb-6">
          These Terms are governed by the laws of Cyprus. If you are a consumer
          resident in the EU or UK, you may also have the right to bring claims
          in your country of residence under mandatory consumer protection laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Dispute Resolution
        </h2>
        <p className="mb-6">
          In the event of a dispute, both parties agree to attempt resolution
          through negotiation or mediation before pursuing litigation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Privacy</h2>
        <p className="mb-6">
          Please review the Privacy Policy (below) to understand how we handle
          your data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-6">
          Email: <span className="font-medium">info@rule-benders.com</span>{" "}
          <br />
          Rule Benders Life &amp; Business Coaching Limited <br />
        </p>

        {/* --- Privacy Policy Section --- */}
        <h1 className="text-2xl font-bold mt-12 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 16/08/2025</p>
        <p className="mb-6">
          We respect your privacy and are committed to protecting your personal
          data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Personal data: name, email, payment details, when you purchase or
            sign up.
          </li>
          <li>Technical data: IP address, browser type, usage patterns.</li>
          <li>
            Cookies &amp; tracking: we use cookies and analytics tools for site
            functionality and marketing.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. Lawful Basis for Processing
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Contractual necessity (to deliver the Services you purchase).</li>
          <li>Legal obligation (for tax, compliance, fraud prevention).</li>
          <li>
            Legitimate interest (to improve Services, marketing where
            proportionate).
          </li>
          <li>
            Consent (for optional communications and cookies where required).
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Data</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>To process payments and deliver Services.</li>
          <li>To provide customer support.</li>
          <li>To send updates and marketing (if opted-in).</li>
          <li>To comply with legal and regulatory obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>We do not sell personal data.</li>
          <li>
            We share data with trusted processors (e.g., Paddle for payments).
          </li>
          <li>
            Data may be transferred internationally, including to the United
            States. We take steps to ensure adequate safeguards.
          </li>
          <li>
            We may disclose data if required by law or lawful authorities.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Data Retention &amp; Security
        </h2>
        <p className="mb-6">
          We keep personal data only as long as necessary for business and legal
          purposes. We apply appropriate technical and organizational measures
          to protect data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-6">
          Under GDPR/UK GDPR you have rights to: access your personal data,
          correct inaccurate data, request deletion, restrict or object to
          processing, request data portability, withdraw consent at any time,
          and lodge a complaint with your local supervisory authority. To
          exercise rights, contact us at{" "}
          <span className="font-medium">info@rule-benders.com</span>.
        </p>

        {/* --- Refund Policy Section --- */}
        <h1 className="text-2xl font-bold mt-12 mb-2">Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 16/08/2025</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          General Refund Terms
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            All products and services include a 14-day money-back guarantee
            unless otherwise stated.
          </li>
          <li>
            Refund requests must be made in writing within 14 days of purchase
            to <span className="font-medium">info@rule-benders.com</span>.
          </li>
          <li>
            Refunds are processed back to the original payment method within
            5–10 business days.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Exceptions</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Digital content: If you request immediate access/download, you
            acknowledge and agree that your 14-day cancellation right ends once
            you access the material.
          </li>
          <li>
            Coaching, consulting, or live services: Fees for completed sessions
            are non-refundable.
          </li>
          <li>After 14 days, all sales are final.</li>
        </ul>
      </main>
    </div>
  );
};

export default TermsOfService;
