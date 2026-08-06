import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.resources;

export const metadata = metadataForPath("/resources");

export default function ResourcesPage() {
  return (
    <>
      <WebPageStructuredData
        path="/resources"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: content.title, path: "/resources" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
