"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "@/_components/Navbar/Navbar";
import LandingFooter from "@/_components/LandingFooter/LandingFooter";

const LegalDocuments = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* ===================== MASTER TERMS ===================== */}
        <h1 className="text-3xl font-bold mb-2">
          Rule Benders - Master Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 16/08/2025</p>

        <p className="mb-6">
          Governing Entity: Rule Benders Life &amp; Business Coaching Limited
          ("Rule Benders," "we," "us," or "our").
          <br />
          Contact:{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="font-medium underline underline-offset-2"
          >
            info@rule-benders.com
          </a>
        </p>

        <p className="mb-6">
          Binding Nature. By purchasing, accessing, or participating in any Rule
          Benders product, service, program, membership, tool, or experience
          (collectively, the "Services"), you ("Client," "Participant," or
          "User") agree to be legally bound by these Master Terms of Use (the
          "Master Terms") and any applicable Product Addendum (each, an
          "Addendum"). These Terms are intended to protect both you and Rule
          Benders.
        </p>

        {/* 1. General Scope & Structure */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. General Scope &amp; Structure
        </h2>
        <p className="mb-2">
          <span className="font-medium">1.1 Application.</span> These Master
          Terms apply to all Services unless expressly superseded by an
          applicable Addendum.
        </p>
        <p className="mb-2">
          <span className="font-medium">1.2 Addenda.</span> Addenda (organized
          by product and referenced from our website or checkout) provide offer
          specific terms including deliverables, payment structures, refund
          eligibility, and access rights.
        </p>
        <p className="mb-2">
          <span className="font-medium">1.3 Hierarchy.</span> Where an Addendum
          expressly differs from these Master Terms, the Addendum controls for
          that Service; otherwise, both apply together.
        </p>
        <p className="mb-6">
          <span className="font-medium">1.4 Consent.</span> By proceeding with
          payment or accessing any content, you confirm you have read,
          understood, and agreed to be legally bound by the Master Terms and any
          relevant Addendum.
        </p>

        {/* 2. Definitions */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. Definitions (Summary)
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-medium">Content</span> means all materials
            provided by Rule Benders (e.g., modules, videos, audio, worksheets,
            templates, scripts, frameworks, community posts, and recordings).
          </li>
          <li>
            <span className="font-medium">Lifetime access</span> means the
            lifetime of a program as offered and supported by Rule Benders, not
            your lifetime.
          </li>
          <li>
            <span className="font-medium">Third-Party Platforms</span> include
            tools Rule Benders uses to deliver Services (e.g., WordPress,
            LearnWorlds, Kajabi, Zoom, Slack or Circle, ActiveCampaign,
            ManyChat, SamCart, Paddle, Stripe or PayPal, Google Drive, Vimeo,
            Meta or Instagram or Facebook, OpenAI or similar AI services).
          </li>
        </ul>

        {/* 3. Eligibility & Account Use */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Eligibility &amp; Account Use
        </h2>
        <p className="mb-2">
          <span className="font-medium">3.1 Age.</span> You must be at least 18
          years old to purchase or use the Services.
        </p>
        <p className="mb-2">
          <span className="font-medium">3.2 Account Accuracy.</span> You agree
          to provide accurate, complete, and current information when
          registering or making purchases and to maintain the security of your
          login credentials.
        </p>
        <p className="mb-2">
          <span className="font-medium">3.3 Single-User License.</span> Unless
          expressly authorized in writing: (a) Services are licensed for one
          individual; (b) logins may not be shared; (c) multi user or corporate
          licenses require a separate agreement; and (d) purchasing with the
          intent to resell or distribute is prohibited.
        </p>
        <p className="mb-6">
          <span className="font-medium">3.4 Suspension.</span> We may suspend or
          terminate access without refund for violations of these Terms.
        </p>

        {/* 4. Intellectual Property */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Intellectual Property; License; Prohibited Uses
        </h2>
        <p className="mb-2">
          <span className="font-medium">4.1 Ownership.</span> Rule Benders
          retains all copyrights, trademarks, trade secrets, database rights,
          and other IP rights in or to the Content and the Services, including
          all derivative works, methods, systems, and processes (e.g.,
          proprietary prompts, frameworks, funnels, auditing methods, and SOPs).
          Nothing in this Agreement transfers ownership to you. All rights not
          expressly granted are reserved.
        </p>
        <p className="mb-2">
          <span className="font-medium">4.2 License Grant.</span> Upon purchase
          or authorized access, Rule Benders grants you a limited, revocable,
          non exclusive, non transferable license to use the Content solely for
          your personal or internal business use as permitted by these Terms and
          any Addendum.
        </p>
        <p className="mb-2">
          <span className="font-medium">4.3 Prohibited Uses.</span> Without our
          prior written consent, you may not: (a) copy, edit, translate, train
          other AI models on, distribute, or reproduce Content; (b) share
          Content with non purchasers; (c) claim authorship of Rule Benders
          Content; (d) incorporate Content into products, courses, programs, or
          trainings for resale; (e) use Content for client delivery, team wide
          implementation, or corporate training; (f) share, sell, or barter
          login credentials or access; or (g) create substantially similar or
          confusingly similar works.
        </p>
        <p className="mb-2">
          <span className="font-medium">4.4 Enforcement.</span> We actively
          monitor for unauthorized use. Any violation may result in immediate
          access revocation without refund, legal action, and pursuit of all
          available remedies.
        </p>
        <p className="mb-6">
          <span className="font-medium">
            4.5 Gifted or Complimentary Access.
          </span>{" "}
          Complimentary access (if offered) is non transferable, may exclude
          paid level support or bonuses unless stated, may be revoked for
          misuse, inactivity, or breach, and may expire on a stated date unless
          purchased. You may not gift complimentary access to third parties
          without written approval.
        </p>

        {/* 5. Payment Terms */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Payment Terms &amp; Chargeback Policy
        </h2>
        <p className="mb-2">
          <span className="font-medium">5.1 Payment Authorization.</span> By
          completing a purchase, you authorize Rule Benders (via Paddle as
          merchant of record and or other secure processors, including SamCart,
          Stripe, or PayPal) to process the full transaction amount according to
          the payment terms displayed at checkout and in any applicable
          Addendum. Prices are in USD unless otherwise specified.
        </p>
        <p className="mb-2">
          <span className="font-medium">5.2 Installment Plans.</span> If you
          select a payment plan: (a) all installments are due in full regardless
          of satisfaction or participation; (b) you authorize recurring charges
          per the agreed schedule; (c) failed payments must be remedied within
          five calendar days of notice; (d) after two failed attempts with no
          response, your account may be suspended and the balance sent to
          collections; and (e) suspension or termination for non payment does
          not cancel your obligation to complete the plan.
        </p>
        <p className="mb-2">
          <span className="font-medium">5.3 Non Payment.</span> Overdue balances
          may result in suspension or revocation of access, withholding of
          deliverables, bonuses, or support, and referral to collections.
        </p>
        <p className="mb-2">
          <span className="font-medium">5.4 No Withholding.</span> You may not
          withhold or offset payments for any reason unless required by law.
        </p>
        <p className="mb-2">
          <span className="font-medium">5.5 Chargebacks.</span> Before
          initiating a chargeback, you must email{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="underline underline-offset-2"
          >
            info@rule-benders.com
          </a>{" "}
          and allow seven business days for resolution. Unwarranted chargebacks
          are a material breach and may result in immediate termination of
          Services, dispute of the chargeback with full documentation, reporting
          of misuse to processors or authorities, and recovery of associated
          fees and damages.
        </p>
        <p className="mb-6">
          <span className="font-medium">5.6 Taxes &amp; Currency.</span> You are
          responsible for all taxes, duties, and currency conversion or FX fees
          related to your purchase.
        </p>

        {/* 6. Refund Policy (General) */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Refund Policy (General)
        </h2>
        <p className="mb-2">
          <span className="font-medium">6.1 Default Policy.</span> Unless
          expressly stated otherwise in an Addendum, all sales are final and non
          refundable after fourteen days from purchase.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.2 Digital Content.</span> If you
          request or receive immediate access or download of digital content,
          you acknowledge and agree that any statutory cooling off right ends
          once you access or download the materials.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.3 Coaching or Live Services.</span>{" "}
          Fees for sessions already delivered are non refundable.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.4 Conditional Guarantees.</span> If a
          Service offers a conditional guarantee, eligibility requirements will
          be set forth in the relevant Addendum. Failure to satisfy all
          conditions voids eligibility.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.5 Requests.</span> Where a conditional
          guarantee applies, you must email{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="underline underline-offset-2"
          >
            info@rule-benders.com
          </a>{" "}
          by the stated deadline with required documentation. Approved refunds
          will be processed to the original payment method within thirty days of
          approval.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.6 Non Qualifying Situations.</span>{" "}
          Refunds will not be granted for change of mind or personal
          circumstances, failure to participate or access materials,
          dissatisfaction where deliverables match the description, late or
          incomplete claims, or missed deadlines.
        </p>
        <p className="mb-2">
          <span className="font-medium">6.7 Payment Plan Obligations.</span> If
          a refund request is denied, you remain responsible for all remaining
          payments in any active plan.
        </p>
        <p className="mb-6">
          <span className="font-medium">6.8 Final Determination.</span> All
          refund determinations are made at Rule Benders sole discretion.
        </p>

        {/* 7. Access & Delivery */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Access &amp; Delivery
        </h2>
        <p className="mb-2">
          <span className="font-medium">7.1 Delivery Methods.</span> Services
          may be delivered through live sessions via Zoom or similar, recorded
          modules, audio trainings, or masterclasses, digital portals or
          learning platforms, downloads, and communities.
        </p>
        <p className="mb-2">
          <span className="font-medium">7.2 Access Timelines.</span> Unless
          otherwise stated: (a) digital products include a minimum of six months
          access; (b) memberships are accessible only while payments remain
          current; (c) live or cohort programs may have time limited access to
          replays or portals as stated in onboarding; and (d) "lifetime access"
          refers to the lifetime of the program. We may retire or discontinue a
          program at any time with at least thirty days notice to affected
          participants.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            7.3 Replay &amp; Recording Availability.
          </span>{" "}
          Where live sessions are recorded, replay access and expiration will be
          stated in onboarding or the Addendum. We are not responsible for
          replay availability if Third Party Platforms experience outages or
          failures beyond our control.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            7.4 Content Updates &amp; Retirements.
          </span>{" "}
          We may update, replace, or remove outdated or inaccurate materials at
          any time. We have no obligation to provide prior versions. If a
          Service is retired, any guaranteed or lifetime access ends upon
          retirement, subject to the notice period in section 7.2.
        </p>
        <p className="mb-6">
          <span className="font-medium">7.5 Monitoring &amp; Compliance.</span>{" "}
          We may monitor portal usage, downloads, and community participation to
          ensure compliance. Accounts in violation may be suspended or
          terminated without refund.
        </p>

        {/* 8. Platform Dependencies */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Platform Dependencies
        </h2>
        <p className="mb-2">
          <span className="font-medium">8.1 Third-Party Platforms.</span> Many
          Services are delivered or supported through Third Party Platforms.
          Access may require you to create and maintain your own accounts.
        </p>
        <p className="mb-2">
          <span className="font-medium">8.2 Availability &amp; Changes.</span>{" "}
          Rule Benders is not responsible for downtime, feature removals, policy
          changes, termination or restriction of your third party accounts, or
          technical or policy changes limiting functionality. If a platform
          change affects delivery, we may transition to an alternative platform
          or method, provide an equivalent replacement resource, or retire the
          affected component without refund, provided core deliverables remain
          available during the stated access period.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            8.3 Compliance with Platform Terms.
          </span>{" "}
          Your use is subject to each platform's terms and policies.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            8.4 External APIs &amp; Integrations.
          </span>{" "}
          We do not guarantee integrations will remain functional indefinitely
          and are not liable for changes to APIs or data access rules.
        </p>
        <p className="mb-6">
          <span className="font-medium">8.5 Lifetime Access Contingency.</span>{" "}
          Any "lifetime" or extended replay rights are contingent on continued
          availability of the hosting platform. We may provide alternative
          delivery at our discretion but are not obligated to recreate or rehost
          retired materials in perpetuity.
        </p>

        {/* 9. Use of AI-Generated Materials */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          9. Use of AI Generated Materials
        </h2>
        <p className="mb-2">
          <span className="font-medium">9.1 Incorporation of AI.</span> Certain
          Services may use AI or machine learning technologies.
        </p>
        <p className="mb-2">
          <span className="font-medium">9.2 Ownership.</span> Unless stated in
          an Addendum: (a) all AI prompts, templates, workflows, and
          instructional materials remain the IP of Rule Benders; (b) you may use
          AI generated outputs for your personal or internal business use only;
          and (c) you may not resell, repackage, redistribute, train other AI
          systems on, or incorporate prompts or outputs into courses, client
          work, or digital products without written permission.
        </p>
        <p className="mb-2">
          <span className="font-medium">9.3 Accuracy &amp; Limitations.</span>{" "}
          We do not guarantee AI outputs are accurate, complete, current, or
          free of bias or errors. They are not professional advice.
        </p>
        <p className="mb-2">
          <span className="font-medium">9.4 Compliance Obligations.</span> Do
          not input sensitive personal data or confidential material into any AI
          tool we provide. You are responsible for legal compliance.
        </p>
        <p className="mb-6">
          <span className="font-medium">9.5 Disclaimer of Liability.</span> Use
          AI outputs at your own risk.
        </p>

        {/* 10. Privacy Summary */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          10. Privacy &amp; Data Policy (Summary)
        </h2>
        <p className="mb-6">
          Your use of the Services is governed by our full Privacy Policy below.
          By using the Services, you consent to receiving email or SMS
          communications (opt out available), use of cookies or pixels or
          analytics, secure processing of account and transaction information,
          and use of aggregated or anonymized data for internal optimization and
          marketing.
        </p>

        {/* 11. Testimonials, Recordings */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          11. Testimonials, Recordings &amp; Public Comments
        </h2>
        <p className="mb-2">
          <span className="font-medium">11.1 Consent to Use.</span> Your
          feedback or statements may be recorded and used for marketing or
          education.
        </p>
        <p className="mb-2">
          <span className="font-medium">11.2 Recorded Calls.</span>{" "}
          Participation constitutes consent to recording and replay use. You
          waive any right to review or approve such recordings.
        </p>
        <p className="mb-2">
          <span className="font-medium">11.3 License Granted.</span> You grant
          Rule Benders a worldwide, perpetual, irrevocable, royalty free,
          transferable, sublicensable license to use your testimonials or
          recorded contributions.
        </p>
        <p className="mb-2">
          <span className="font-medium">11.4 Identification.</span> Your name,
          likeness, business name, title, and geography may be used unless you
          request otherwise in writing before publication.
        </p>
        <p className="mb-2">
          <span className="font-medium">11.5 No Expectation of Privacy.</span>{" "}
          Group comments may be visible to others.
        </p>
        <p className="mb-6">
          <span className="font-medium">11.6 No Compensation.</span> No
          royalties or payment will be provided.
        </p>

        {/* 12. Community Standards */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          12. Community Standards
        </h2>
        <p className="mb-2">
          <span className="font-medium">12.1 Purpose.</span> Our spaces are
          designed for respectful, productive, supportive interaction.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.2 Respectful Engagement.</span> Treat
          all participants and staff with respect and professionalism.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.3 Confidentiality.</span> Maintain
          confidentiality of peer discussions unless consent is given to share.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.4 Prohibited Conduct.</span> No
          harassment, discrimination, defamation, threats, incitement, spamming,
          or illegal content.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.5 IP Respect.</span> Do not copy or
          repurpose proprietary materials without written permission.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.6 Enforcement.</span> We may remove
          participants and revoke access without refund for violations.
        </p>
        <p className="mb-6">
          <span className="font-medium">
            12.7 No Guaranteed Privacy in Groups.
          </span>{" "}
          Exercise discretion when sharing sensitive information.
        </p>

        {/* 13. Disclaimers */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          13. Disclaimers &amp; No Guarantees
        </h2>
        <p className="mb-2">
          <span className="font-medium">13.1 Educational Use Only.</span>{" "}
          Services are educational and informational, not professional advice.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            13.2 No Earnings or Performance Guarantees.
          </span>{" "}
          Results vary.
        </p>
        <p className="mb-2">
          <span className="font-medium">13.3 Assumption of Risk.</span> You
          accept full responsibility for outcomes.
        </p>
        <p className="mb-2">
          <span className="font-medium">13.4 Compliance.</span> You are
          responsible for legal compliance in your jurisdiction.
        </p>
        <p className="mb-2">
          <span className="font-medium">13.5 Third-Party Tools.</span> We are
          not responsible for changes or enforcement actions by providers.
        </p>
        <p className="mb-6">
          <span className="font-medium">13.6 Release.</span> To the fullest
          extent permitted by law, you release Rule Benders and affiliates from
          liability for direct or indirect damages arising from use of our
          Services.
        </p>

        {/* 14. Limitation of Liability */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          14. Limitation of Liability
        </h2>
        <p className="mb-2">
          <span className="font-medium">14.1 Maximum Liability.</span> Total
          liability shall not exceed the amount you paid for the specific
          Service.
        </p>
        <p className="mb-2">
          <span className="font-medium">14.2 Excluded Damages.</span> We are not
          liable for indirect or special damages including lost profits, data,
          or opportunity.
        </p>
        <p className="mb-2">
          <span className="font-medium">14.3 Third-Party Platforms.</span>{" "}
          Limitations in section 8 apply.
        </p>
        <p className="mb-2">
          <span className="font-medium">14.4 Force Majeure.</span> We are not
          responsible for delays or failures outside our control.
        </p>
        <p className="mb-6">
          <span className="font-medium">14.5 Allocation of Risk.</span> These
          limitations are fundamental to this Agreement.
        </p>

        {/* 15. Governing Law & Dispute Resolution */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          15. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="mb-2">
          <span className="font-medium">15.1 Governing Law.</span> Laws of
          Cyprus apply. EU or UK consumers may have additional mandatory
          protections.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.2 Good Faith Resolution.</span> Email{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="underline underline-offset-2"
          >
            info@rule-benders.com
          </a>{" "}
          with a detailed description to attempt resolution.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.3 Binding Arbitration.</span> If
          unresolved, disputes go to final and binding arbitration in Cyprus
          administered by a recognized arbitration body under commercial rules,
          before a single neutral arbitrator. Remote participation may be
          permitted. The award will be confidential, final, and binding.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            15.4 Waiver of Class Actions &amp; Jury Trials.
          </span>{" "}
          To the extent permitted by law, disputes are resolved only on an
          individual basis.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.5 Small Claims Exception.</span>{" "}
          Either party may bring an individual action in small claims court
          where permitted.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.6 Attorneys’ Fees.</span> The
          prevailing party is entitled to reasonable attorneys’ fees and costs,
          except where prohibited.
        </p>
        <p className="mb-6">
          <span className="font-medium">15.7 Limitation of Claims.</span> Any
          claim must be filed within one year after it arose.
        </p>

        {/* 16. Amendments */}
        <h2 className="text-xl font-semibold mt-8 mb-2">16. Amendments</h2>
        <p className="mb-2">
          <span className="font-medium">16.1 Right to Modify.</span> We may
          amend these Terms, the Privacy Policy, and any Addendum at any time to
          reflect changes in Services, pricing, features, legal requirements, or
          security and operational needs.
        </p>
        <p className="mb-2">
          <span className="font-medium">16.2 Notice.</span> Material changes
          will be notified by email and or prominent in platform notice.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            16.3 Effective Date &amp; Acceptance.
          </span>{" "}
          Changes are effective upon posting unless stated otherwise. Continued
          use constitutes acceptance. If you do not agree, your remedy is to
          discontinue use and request cancellation per the relevant Addendum.
        </p>
        <p className="mb-6">
          <span className="font-medium">16.4 Version Control.</span> We may
          maintain an archive of prior Terms. The version in effect at the time
          of your purchase or most recent renewal applies unless a change must
          take immediate effect by law.
        </p>

        {/* 17. Contact & Support */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          17. Contact &amp; Support
        </h2>
        <p className="mb-2">
          <span className="font-medium">17.1 Primary Channel.</span> Submit
          program related inquiries and support requests to{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="underline underline-offset-2"
          >
            info@rule-benders.com
          </a>
          .
        </p>
        <p className="mb-2">
          <span className="font-medium">17.2 Response Times.</span> We aim to
          respond within two to three business days, excluding weekends and
          Cyprus public holidays.
        </p>
        <p className="mb-2">
          <span className="font-medium">17.3 Client Responsibilities.</span>{" "}
          Monitor your account email, provide requested documentation promptly,
          and notify us of delays.
        </p>
        <p className="mb-6">
          <span className="font-medium">17.4 Support Limits.</span> We are not
          responsible for missed deadlines or access issues caused by client
          delays or third party outages. Standard support covers access,
          navigation, and policy clarifications.
        </p>

        {/* 18. Low-Ticket Offers */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          18. Low-Ticket Offers (LTOs)
        </h2>
        <p className="mb-2">
          <span className="font-medium">18.1 Definition.</span> Digital
          products, courses, templates, workshops, or bundles under 500 USD.
        </p>
        <p className="mb-2">
          <span className="font-medium">18.2 All Sales Final.</span> LTO
          purchases are final and non refundable. These products are delivered
          instantly or within a short time after payment.
        </p>
        <p className="mb-2">
          <span className="font-medium">18.3 License &amp; Restrictions.</span>{" "}
          Single, non transferable license. No sharing, resale, reproduction,
          distribution, or client delivery without consent. Bulk or corporate
          licensing requires a separate agreement.
        </p>
        <p className="mb-2">
          <span className="font-medium">
            18.4 No Live Coaching or Private Support.
          </span>{" "}
          Unless stated at checkout.
        </p>
        <p className="mb-2">
          <span className="font-medium">18.5 Platform Dependency.</span>{" "}
          Platform terms and outages may affect access.
        </p>
        <p className="mb-2">
          <span className="font-medium">18.6 Compliance.</span> You are
          responsible for lawful use and compliance.
        </p>
        <p className="mb-2">
          <span className="font-medium">18.7 AI Disclaimer.</span> Some LTOs may
          include AI prompts, outputs, or automations. Outputs are suggestions
          and require your review; we make no warranty as to their accuracy,
          legality, or suitability.
        </p>
        <p className="mb-6">
          <span className="font-medium">
            18.8 Modifications or Termination.
          </span>{" "}
          We may update, modify, or remove LTO content without prior notice,
          provided purchased materials remain accessible for the stated access
          term. Access may be revoked without refund if you violate these Terms
          or applicable laws.
        </p>

        {/* 19. Acceptance */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          19. Acceptance &amp; Electronic Signature
        </h2>
        <p className="mb-6">
          By completing a purchase, checking any box indicating agreement, or
          accessing any Services, you acknowledge and agree to be bound by these
          Master Terms and any applicable Addendum and consent to enter this
          Agreement electronically with the same legal effect as a handwritten
          signature. You affirm you are at least 18 and have legal capacity.
          Continued access constitutes ongoing acceptance of the then current
          Terms. Disputes will be resolved per section 15.
        </p>

        {/* 20. Miscellaneous */}
        <h2 className="text-xl font-semibold mt-8 mb-2">20. Miscellaneous</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-medium">Severability.</span> If any provision
            is held invalid, the rest remain in force.
          </li>
          <li>
            <span className="font-medium">Entire Agreement.</span> These Master
            Terms and applicable Addenda constitute the entire agreement,
            superseding prior discussions or understandings.
          </li>
          <li>
            <span className="font-medium">Assignment.</span> You may not assign
            without our written consent. We may assign to an affiliate or
            successor.
          </li>
          <li>
            <span className="font-medium">No Waiver.</span> Failure to enforce
            is not a waiver.
          </li>
          <li>
            <span className="font-medium">Interpretation.</span> Headings do not
            affect interpretation.
          </li>
          <li>
            <span className="font-medium">Survival.</span> Provisions by their
            nature survive termination.
          </li>
          <li>
            <span className="font-medium">Export or Use Restrictions.</span> You
            warrant compliance with applicable export control and sanctions
            laws.
          </li>
          <li>
            <span className="font-medium">Territorial Restrictions.</span>{" "}
            Access may not be lawful in certain jurisdictions; you are
            responsible for compliance.
          </li>
        </ul>

        {/* ===================== PRIVACY POLICY ===================== */}
        <h1 className="text-2xl font-bold mt-12 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-2">Last updated: 16/08/2025</p>
        <p className="mb-6">
          Contact:{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="font-medium underline underline-offset-2"
          >
            info@rule-benders.com
          </a>
        </p>
        <p className="mb-6">
          This Privacy Policy explains how Rule Benders collects, uses, shares,
          and safeguards personal data.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">1. Data We Collect</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <span className="font-medium">Personal Data:</span> Name, email,
            billing address, transaction records, and communications when you
            purchase or contact us.
          </li>
          <li>
            <span className="font-medium">Technical or Usage Data:</span> IP
            address, device or browser, pages viewed, time on site, referral
            sources, cookies or pixels or analytics identifiers.
          </li>
          <li>
            <span className="font-medium">Program Data:</span> Progress,
            submissions, community posts, call attendance, and support
            interactions.
          </li>
          <li>
            <span className="font-medium">Marketing Preferences:</span> Opt in
            or opt out status for email or SMS; lead source tags.
          </li>
          <li>
            <span className="font-medium">Payment Data:</span> Processed
            securely by our payment providers. We do not store full card
            numbers.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          2. Lawful Bases (GDPR or UK GDPR)
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Contract to deliver Services you purchase.</li>
          <li>
            Legal obligation for tax or audit, fraud prevention, and compliance.
          </li>
          <li>
            Legitimate interests for service improvement, analytics, security,
            and direct marketing to customers.
          </li>
          <li>
            Consent for optional communications and certain cookies where
            required. You may withdraw consent any time.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. How We Use Data</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Process orders, deliver content, and provide support.</li>
          <li>
            Personalize experiences, recommend relevant content, and improve
            Services.
          </li>
          <li>
            Send transactional messages and, with consent or lawful basis,
            marketing communications.
          </li>
          <li>
            Maintain security, prevent fraud or abuse, and enforce our Terms.
          </li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          4. Sharing &amp; International Transfers
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <span className="font-medium">Processors or Providers:</span> For
            example Paddle, SamCart, Stripe or PayPal, LearnWorlds or Kajabi,
            ActiveCampaign, ManyChat, Zoom, Slack or Circle, Google Drive,
            Vimeo, Meta, analytics or cookie providers, and AI vendors.
          </li>
          <li>
            <span className="font-medium">No Sale of Personal Data.</span> We do
            not sell personal data.
          </li>
          <li>
            <span className="font-medium">Legal Disclosures:</span> We may
            disclose where required by law or lawful authorities.
          </li>
          <li>
            <span className="font-medium">International Transfers:</span> Data
            may be transferred outside your jurisdiction. We use appropriate
            safeguards where required.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          5. Retention &amp; Security
        </h3>
        <p className="mb-4">
          We retain data only as long as necessary for the purposes set out
          above and legal requirements. We apply technical and organizational
          measures proportionate to risk. You are responsible for keeping your
          credentials secure and using supported devices or browsers.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          6. Your Rights (EU or UK)
        </h3>
        <p className="mb-4">
          Rights include access, rectification, erasure, restriction, objection,
          portability, and withdraw consent. Marketing opt out via unsubscribe
          links or by emailing us. Complaints may be lodged with your local
          supervisory authority. To exercise rights, email{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="underline underline-offset-2"
          >
            info@rule-benders.com
          </a>
          . We may require identity verification.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          7. Cookies &amp; Tracking
        </h3>
        <p className="mb-4">
          We use cookies, pixels, and similar technologies for functionality,
          analytics, and marketing. Where required, we will request consent via
          a cookie banner and honor your preferences. You can control cookies in
          your browser; disabling may impact functionality.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">8. Children</h3>
        <p className="mb-4">
          Our Services are not intended for children under 18. We do not
          knowingly collect children’s data.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          9. Changes to this Policy
        </h3>
        <p className="mb-6">
          We may update this Policy. Material changes will be notified via email
          and or site notice. Continued use indicates acceptance.
        </p>

        {/* ===================== REFUND POLICY ===================== */}
        <h1 className="text-2xl font-bold mt-12 mb-2">Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-2">Last updated: 16/08/2025</p>
        <p className="mb-6">
          Contact:{" "}
          <a
            href="mailto:info@rule-benders.com"
            className="font-medium underline underline-offset-2"
          >
            info@rule-benders.com
          </a>
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">1. General</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Unless stated otherwise in an Addendum, purchases are eligible for a
            14 day refund window from purchase.
          </li>
          <li>
            Requests must be made in writing to{" "}
            <a
              href="mailto:info@rule-benders.com"
              className="underline underline-offset-2"
            >
              info@rule-benders.com
            </a>{" "}
            within 14 days.
          </li>
          <li>
            Approved refunds are processed to the original payment method within
            5 to 10 business days after approval.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          2. Exceptions &amp; Conditions
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Digital Content: If you request or receive immediate access or
            download, you waive the 14 day cancellation right once accessed.
          </li>
          <li>
            Coaching or Live Services: Fees for completed sessions are non
            refundable.
          </li>
          <li>
            Conditional Guarantees: Where offered, all criteria must be met by
            stated deadlines.
          </li>
          <li>After 14 Days: All sales are final.</li>
        </ul>

        {/* ===================== PRODUCT ADDENDA ===================== */}
        <h1 className="text-2xl font-bold mt-12 mb-2">Product Addenda</h1>
        <p className="mb-6">
          Relationship to Master Terms. Each Addendum is incorporated into and
          governed by the Master Terms. Where an Addendum expressly differs, the
          Addendum controls for that Service.
        </p>

        {/* A. Six Figure Switch / High-Touch */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          A. Six Figure Switch / High-Touch Program Addendum
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Program Overview. A high touch learning experience designed to
            provide business, leadership, or consultancy coaching, peer
            accountability, curated resources, and a private community.
          </li>
          <li>
            Payment Options. Examples include Paid in Full, 3 Month Plan, or 6
            Month Plan.
          </li>
          <li>
            Payment Obligations. You are responsible for the full amount
            regardless of participation. Recurring charges are authorized upon
            enrollment. Late or failed payments may result in suspension without
            refund.
          </li>
          <li>
            Cancellation. Due to limited capacity, cancellations are not
            permitted after enrollment. Exceptions only for life threatening
            situations affecting you or the coaching team; any unused fees may
            be refunded at Rule Benders sole discretion.
          </li>
          <li>
            Confidentiality. Coaches will not disclose proprietary information
            you share, except as required by law or in anonymized supervision.
            You agree not to share participants’ information or Rule Benders
            proprietary materials without consent.
          </li>
          <li>
            Refund Policy. All sales are final except any conditional guarantee
            expressly offered at checkout.
          </li>
          <li>
            Testimonials and Recordings; Conduct and Removal; IP and License;
            Disputes; Limitations as per Master Terms.
          </li>
          <li>
            Indemnification. You agree to indemnify Rule Benders for claims
            arising from your use or misuse, breach, or violations of law or
            third party rights.
          </li>
          <li>
            Limitation of Claims. Any claim must be filed within one year of
            accrual.
          </li>
        </ul>

        {/* B. Membership (Subscription) */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          B. Membership (Subscription) Addendum
        </h2>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>
            Overview. Subscription program providing educational resources,
            group calls, and community access.
          </li>
          <li>
            Pricing &amp; Auto-Renewal. Monthly and or annual plans billed
            automatically; promo rates may apply.
          </li>
          <li>
            Cancellation. Email with subject &quot;MEMBERSHIP CANCELLATION&quot;
            at least 24 hours before renewal to avoid the next period charge.
            Include your name and purchase email.
          </li>
          <li>
            Payment Failures. Overdue accounts may be paused; accounts overdue
            more than 60 days may be terminated and must re enroll at the then
            current rate.
          </li>
          <li>
            Refunds. All sales final except any first purchase conditional
            guarantee expressly stated at checkout (for example a 14 day
            conditional guarantee with proof of participation).
          </li>
          <li>
            Technology Requirements &amp; Sharing. Suitable devices or internet
            required. No account sharing.
          </li>
          <li>
            IP or Use; Disclaimers or Indemnity or Governing Law as per Master
            Terms.
          </li>
        </ul>
      </main>

      <LandingFooter />
    </div>
  );
};

export default LegalDocuments;