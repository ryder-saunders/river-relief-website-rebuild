import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.legalPages.privacyPolicy;

export const metadata: Metadata = {
  title: `${content.title} — ${siteConfig.orgName}`,
  description: content.description,
};

export default function PrivacyPolicyPage() {
  return <LegalPage content={content} />;
}
