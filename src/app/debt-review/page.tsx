import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.debtReview;

export const metadata = metadataForPath("/debt-review");

export default function DebtReviewPage() {
  return (
    <>
      <WebPageStructuredData
        path="/debt-review"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: content.title, path: "/debt-review" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
