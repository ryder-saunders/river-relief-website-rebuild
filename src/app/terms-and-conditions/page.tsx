import { LegalPage } from "@/components/legal-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.legalPages.termsAndConditions;

export const metadata = metadataForPath("/terms-and-conditions");

export default function TermsAndConditionsPage() {
  return (
    <>
      <WebPageStructuredData
        path="/terms-and-conditions"
        title={content.title}
        description={content.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: content.title, path: "/terms-and-conditions" },
        ]}
      />
      <LegalPage content={content} />
    </>
  );
}
