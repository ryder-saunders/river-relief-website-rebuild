import { LegalPage } from "@/components/legal-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.legalPages.privacyPolicy;

export const metadata = metadataForPath("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageStructuredData
        path="/privacy-policy"
        title={content.title}
        description={content.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: content.title, path: "/privacy-policy" },
        ]}
      />
      <LegalPage content={content} />
    </>
  );
}
