import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { FitSection } from "@/components/fit-section";
import { ProgramsSection } from "@/components/programs-section";
import { ImpactStats } from "@/components/impact-stats";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { IntakeForm } from "@/components/intake-form";
import { ContactSection } from "@/components/contact-section";
import { WebPageStructuredData } from "@/components/structured-data";
import { metadataForPath } from "@/lib/seo";

export const metadata = metadataForPath("/");

export default function Home() {
  return (
    <>
      <WebPageStructuredData
        path="/"
        title="River Relief"
        description="Faith-respectful debt relief conversations for credit card debt, personal-loan options, and a clearer monthly plan."
        image="/brand/generated/v006/debt-relief-budget-couple-v006.png"
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />
      <Hero />
      <MissionSection />
      <FitSection />
      <ProgramsSection />
      <ImpactStats />
      <GetInvolvedSection />
      <IntakeForm />
      <ContactSection />
    </>
  );
}
