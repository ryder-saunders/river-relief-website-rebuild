import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.personalLoans;

export const metadata = metadataForPath("/personal-loans");

export default function PersonalLoansPage() {
  return (
    <>
      <WebPageStructuredData
        path="/personal-loans"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Debt Relief", path: "/debt-relief" },
          { name: content.title, path: "/personal-loans" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
