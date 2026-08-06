import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const siteUrl = new URL(siteConfig.url);

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  image?: string;
  noIndex?: boolean;
};

const standardPageRoutes = [
  {
    path: "/debt-relief",
    content: siteConfig.standardPages.debtRelief,
    priority: 0.95,
  },
  {
    path: "/credit-card-debt",
    content: siteConfig.standardPages.creditCardDebt,
    priority: 0.92,
  },
  {
    path: "/debt-consolidation",
    content: siteConfig.standardPages.debtConsolidation,
    priority: 0.9,
  },
  {
    path: "/personal-loans",
    content: siteConfig.standardPages.personalLoans,
    priority: 0.88,
  },
  {
    path: "/how-it-works",
    content: siteConfig.standardPages.howItWorks,
    priority: 0.86,
  },
  {
    path: "/faith-based-guidance",
    content: siteConfig.standardPages.faithBasedGuidance,
    priority: 0.84,
  },
  {
    path: "/debt-review",
    content: siteConfig.standardPages.debtReview,
    priority: 0.82,
  },
  {
    path: "/resources",
    content: siteConfig.standardPages.resources,
    priority: 0.78,
  },
  {
    path: "/faq",
    content: siteConfig.standardPages.faq,
    priority: 0.76,
  },
  {
    path: "/about",
    content: siteConfig.standardPages.about,
    priority: 0.72,
  },
  {
    path: "/contact",
    content: siteConfig.standardPages.contact,
    priority: 0.74,
  },
] as const;

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: `${siteConfig.orgName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    priority: 1,
    changeFrequency: "weekly",
    image: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
  },
  ...standardPageRoutes.map(({ path, content, priority }) => ({
    path,
    title: content.title,
    description: content.description,
    priority,
    changeFrequency: "monthly" as const,
    image: content.heroImage,
  })),
  {
    path: "/qualify",
    title: "Qualify For Debt Relief",
    description: siteConfig.funnel.hero.body,
    priority: 0.94,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    title: siteConfig.legalPages.privacyPolicy.title,
    description: siteConfig.legalPages.privacyPolicy.description,
    priority: 0.35,
    changeFrequency: "yearly",
  },
  {
    path: "/terms-and-conditions",
    title: siteConfig.legalPages.termsAndConditions.title,
    description: siteConfig.legalPages.termsAndConditions.description,
    priority: 0.35,
    changeFrequency: "yearly",
  },
  {
    path: "/review-complete",
    title: "Review Submitted",
    description: siteConfig.funnel.completion.body,
    priority: 0,
    changeFrequency: "yearly",
    noIndex: true,
  },
  {
    path: "/demo-components",
    title: siteConfig.demoComponents.title,
    description: siteConfig.demoComponents.description,
    priority: 0,
    changeFrequency: "yearly",
    noIndex: true,
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getSeoRoute(path: string) {
  return seoRoutes.find((route) => route.path === path);
}

export function buildMetadata({
  path,
  title,
  description,
  image,
  noIndex = false,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = path;
  const imageUrl = image ?? "/opengraph-image";

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.orgName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.orgName} debt relief guidance`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function metadataForPath(path: string) {
  const route = getSeoRoute(path);

  if (!route) {
    throw new Error(`Missing SEO route config for ${path}`);
  }

  return buildMetadata(route);
}

export function graphId(id: string) {
  return `${absoluteUrl("/")}#${id}`;
}
