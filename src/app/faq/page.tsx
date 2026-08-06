import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.faq;

export const metadata = metadataForPath("/faq");

export default function FaqPage() {
  return (
    <>
      <WebPageStructuredData
        path="/faq"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: content.title, path: "/faq" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
