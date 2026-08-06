import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.debtConsolidation;

export const metadata = metadataForPath("/debt-consolidation");

export default function DebtConsolidationPage() {
  return (
    <>
      <WebPageStructuredData
        path="/debt-consolidation"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Debt Relief", path: "/debt-relief" },
          { name: content.title, path: "/debt-consolidation" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
