import { StandardPage } from "@/components/standard-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.standardPages.faithBasedGuidance;

export const metadata = metadataForPath("/faith-based-guidance");

export default function FaithBasedGuidancePage() {
  return (
    <>
      <WebPageStructuredData
        path="/faith-based-guidance"
        title={content.title}
        description={content.description}
        image={content.heroImage}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
          { name: content.title, path: "/faith-based-guidance" },
        ]}
        faqs={content.faqs}
      />
      <StandardPage content={content} />
    </>
  );
}
