import type { Metadata } from "next";
import { DemoComponentsPage } from "@/components/demo-components-page";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.demoComponents;

export const metadata: Metadata = {
  title: `${content.title} — ${siteConfig.orgName}`,
  description: content.description,
};

export default function DemoComponentsRoute() {
  return <DemoComponentsPage />;
}
