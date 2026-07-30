import type { Metadata } from "next";
import { StandardPage } from "@/components/standard-page";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.standardPages.faq;

export const metadata: Metadata = {
  title: `${content.title} — ${siteConfig.orgName}`,
  description: content.description,
};

export default function FaqPage() {
  return <StandardPage content={content} />;
}
