import { DemoComponentsPage } from "@/components/demo-components-page";
import { WebPageStructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

const content = siteConfig.demoComponents;

export const metadata = metadataForPath("/demo-components");

export default function DemoComponentsRoute() {
  return (
    <>
      <WebPageStructuredData
        path="/demo-components"
        title={content.title}
        description={content.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: content.title, path: "/demo-components" },
        ]}
      />
      <DemoComponentsPage />
    </>
  );
}
