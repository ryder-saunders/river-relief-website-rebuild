import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, PhoneIcon } from "@/components/icons";
import { MobileNavDrawer } from "@/components/mobile-nav-drawer";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="bg-brand-blue/95 shadow-brand-blue/20 z-50 border-b border-white/10 text-white shadow-2xl backdrop-blur-sm">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" aria-label={siteConfig.orgName}>
          <Image
            src="/brand/logo-white.png"
            alt={siteConfig.orgName}
            width={160}
            height={40}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {"items" in item && item.items && (
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-white/45" />
                )}
              </a>
              {"items" in item && item.items && (
                <div className="invisible absolute top-full left-0 w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="text-brand-grey-dark rounded-lg border border-white/10 bg-white p-2 shadow-2xl">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="hover:bg-brand-blue/10 hover:text-brand-blue block rounded-md px-4 py-3 text-sm font-semibold transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={siteConfig.contact.callCta.href}
            className="hidden items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.hero.headerCta.href}
            className="glow-cta text-brand-blue inline-flex rounded-md bg-white px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            {siteConfig.hero.headerCta.label}
          </a>
          <MobileNavDrawer />
        </div>
      </div>
    </header>
  );
}
