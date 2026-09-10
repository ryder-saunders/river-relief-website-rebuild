import { PhoneIcon } from "@/components/icons";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site-config";

export function StickyMobileCta() {
  const { stickyCta } = siteConfig;

  return (
    <div className="bg-brand-blue/95 shadow-brand-blue/40 fixed inset-x-0 bottom-0 z-50 border-t border-white/10 px-4 py-3 shadow-2xl backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <TrackedLink
          href={stickyCta.href}
          conversionType="qualify"
          location="sticky_mobile_cta"
          className="glow-cta text-brand-blue flex flex-1 items-center justify-center rounded-md bg-white px-4 py-3 text-sm font-bold"
        >
          {stickyCta.label}
        </TrackedLink>
        <TrackedLink
          href={stickyCta.secondaryHref}
          conversionType="call"
          location="sticky_mobile_cta"
          className="flex items-center justify-center rounded-md border border-white/20 px-4 py-3 text-sm font-bold text-white"
        >
          <PhoneIcon className="mr-2 h-4 w-4" />
          {stickyCta.secondaryLabel}
        </TrackedLink>
      </div>
    </div>
  );
}
