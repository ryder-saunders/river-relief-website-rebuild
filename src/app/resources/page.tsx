import type { Metadata } from "next";
import { StandardPage } from "@/components/standard-page";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.standardPages.resources;

export const metadata: Metadata = {
  title: `${content.title} — ${siteConfig.orgName}`,
  description: content.description,
};

export default function ResourcesPage() {
  return <StandardPage content={content} />;
}
