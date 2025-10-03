/* eslint-disable */
import Hero from "./components/hero";
import OutcomesSection from "./components/secondsection";
import TrustedCompanies from "./components/trustedcompanies";
import FourthSection from "./components/fourthsection";
import InstructorSection from "./components/fifthsection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OutcomesSection />
      <TrustedCompanies />
      <FourthSection />
      <InstructorSection/>
    </main>
  );
}
