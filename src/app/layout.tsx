import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteStructuredData } from "@/components/structured-data";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site-config";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.orgName,
  title: {
    default: `${siteConfig.orgName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.orgName}`,
  },
  description: siteConfig.description,
  category: "Financial services",
  keywords: [
    "debt relief",
    "credit card debt help",
    "debt consolidation",
    "personal loan options",
    "faith based debt help",
    "River Relief",
  ],
  authors: [{ name: siteConfig.orgName }],
  creator: siteConfig.orgName,
  publisher: siteConfig.orgName,
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.orgName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.orgName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.orgName} debt relief guidance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.orgName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteStructuredData />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
