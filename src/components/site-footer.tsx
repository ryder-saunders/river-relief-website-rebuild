import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinks = Object.entries(siteConfig.social).filter(
    ([, url]) => url,
  );

  return (
    <footer className="bg-brand-blue py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Image
            src="/brand/logo-white.png"
            alt={siteConfig.orgName}
            width={160}
            height={40}
            className="h-9 w-auto"
          />
          {socialLinks.length > 0 && (
            <div className="flex gap-6">
              {socialLinks.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="text-brand-tan text-sm capitalize hover:text-white"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
        <p className="text-brand-grey-light mt-10 max-w-5xl text-xs leading-relaxed">
          {siteConfig.legal.disclosure}
        </p>
        <p className="text-brand-grey-light mt-4 text-xs">
          &copy; {year} {siteConfig.orgName} LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
