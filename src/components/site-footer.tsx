import Image from "next/image";
import { CalendarIcon } from "@/components/icons";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const socialLinks = Object.entries(siteConfig.social).filter(
    ([, url]) => url,
  );

  return (
    <footer className="bg-brand-blue pt-12 pb-32 lg:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Image
            src="/brand/logo-white.png"
            alt={siteConfig.orgName}
            width={172}
            height={40}
            className="h-9 w-auto"
            style={{ height: "auto", width: "auto" }}
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
          <a
            href={siteConfig.hero.headerCta.href}
            className="text-brand-blue border-brand-accent/30 inline-flex items-center justify-center gap-2 rounded-md border bg-white px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            <CalendarIcon className="h-4 w-4" />
            {siteConfig.hero.headerCta.label}
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TrustBadges theme="dark" compact />
          <p className="border-brand-accent/40 max-w-xl border-l-2 pl-4 text-sm leading-6 font-semibold text-white/68">
            {siteConfig.scriptureLines.footer.text}{" "}
            <span className="text-brand-tan">
              {siteConfig.scriptureLines.footer.ref}
            </span>
          </p>
        </div>
        <p className="text-brand-grey-light mt-10 max-w-5xl text-[0.625rem] leading-5">
          {siteConfig.legal.disclosure}
        </p>
        <div className="mt-4 flex gap-5 text-xs font-semibold text-white/75">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="hover:text-white">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
