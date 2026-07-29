import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { FitSection } from "@/components/fit-section";
import { ProgramsSection } from "@/components/programs-section";
import { ImpactStats } from "@/components/impact-stats";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <FitSection />
      <ProgramsSection />
      <ImpactStats />
      <GetInvolvedSection />
      <ContactSection />
    </>
  );
}
