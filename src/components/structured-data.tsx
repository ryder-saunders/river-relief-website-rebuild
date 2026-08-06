import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, graphId } from "@/lib/seo";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type JsonLdObject = { [key: string]: JsonLdValue };

function safeJsonLd(data: JsonLdObject) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

export function SiteStructuredData() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  const telephone = "+1-800-520-1758";
  const organization: JsonLdObject = {
    "@type": ["Organization", "FinancialService"],
    "@id": graphId("organization"),
    name: `${siteConfig.orgName} LLC`,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/logo-full-color.png"),
    description: siteConfig.description,
    telephone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone,
        contactType: "customer support",
        areaServed: "US",
        availableLanguage: "en",
      },
    ],
    knowsAbout: [
      "Debt relief",
      "Credit card debt",
      "Debt consolidation",
      "Personal loans",
      "Faith-based financial guidance",
    ],
  };

  if (sameAs.length) {
    organization.sameAs = sameAs;
  }

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": graphId("website"),
            name: siteConfig.orgName,
            url: absoluteUrl("/"),
            description: siteConfig.description,
            publisher: { "@id": graphId("organization") },
            inLanguage: "en-US",
          },
        ],
      }}
    />
  );
}

export function WebPageStructuredData({
  path,
  title,
  description,
  image,
  breadcrumbs,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  breadcrumbs?: ReadonlyArray<{ name: string; path: string }>;
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const pageUrl = absoluteUrl(path);
  const webPage: JsonLdObject = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": graphId("website") },
    about: { "@id": graphId("organization") },
    inLanguage: "en-US",
  };

  if (image) {
    webPage.primaryImageOfPage = absoluteUrl(image);
  }

  const graph: JsonLdObject[] = [webPage];

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  );
}
