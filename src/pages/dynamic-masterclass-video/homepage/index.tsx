/* eslint-disable */
import Hero from "./components/hero";
import OutcomesSection from "./components/secondsection";
import TrustedCompanies from "./components/trustedcompanies";
import FourthSection from "./components/fourthsection";
import InstructorSection from "./components/fifthsection";
import NinetyDayPlanSection from "./components/90-days"; 
import StudentReviewsMarquee from "./components/reviews"; 
import TestimonialVideo from "./components/TestimonialVideo"; 
import BulletTexts from "./components/BulletTexts";
import EnrollNowSection from './components/EnrollNowSection';
import FAQSection from "./components/FAQSection";
import StillScepticalSection from "./components/StillScepticalSection";
import FinalCTASection from "./components/FinalCTASection";
import ClientsTrusted from "./components/ClientsTrusted";
import IncomeProofSection from "./components/IncomeProofSection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-neutral-50">
      <Hero />
      <OutcomesSection />
      <TrustedCompanies />
      <FourthSection />
      <InstructorSection />
      <NinetyDayPlanSection />
      <StudentReviewsMarquee />
      <BulletTexts />
      <TestimonialVideo />
      <EnrollNowSection />
      <ClientsTrusted />
      <IncomeProofSection />
      <FAQSection />
      <StillScepticalSection />
      <FinalCTASection />
    </main>
  );
}
