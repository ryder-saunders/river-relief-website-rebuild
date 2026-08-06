import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.creditCardDebt;

export const metadata = metadataForPath("/credit-card-debt");

export default function CreditCardDebtPage() {
  return (
    <>
      <WebPageStructuredData
        path="/credit-card-debt"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Debt Relief", path: "/debt-relief" },
          { name: content.title, path: "/credit-card-debt" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
