import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-brand-grey-light/25 sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="#top" aria-label={siteConfig.orgName}>
          <Image
            src="/brand/logo-full-color.png"
            alt={siteConfig.orgName}
            width={160}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>
        <nav className="hidden gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-brand-grey-mid hover:text-brand-blue text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={siteConfig.hero.headerCta.href}
          className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-5"
        >
          {siteConfig.hero.headerCta.label}
        </a>
      </div>
    </header>
  );
}
