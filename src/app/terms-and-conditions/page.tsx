import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.legalPages.termsAndConditions;

export const metadata: Metadata = {
  title: `${content.title} — ${siteConfig.orgName}`,
  description: content.description,
};

export default function TermsAndConditionsPage() {
  return <LegalPage content={content} />;
}
