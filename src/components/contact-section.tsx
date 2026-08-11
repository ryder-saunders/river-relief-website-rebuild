import Image from "next/image";
import { HandHeartIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";

const benefitIcons = [ShieldCheckIcon, PhoneIcon, HandHeartIcon];

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12 pb-24">
      <div className="border-brand-accent/25 shadow-brand-blue/5 grid gap-10 rounded-lg border bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          {contact.eyebrow && (
            <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
              {contact.eyebrow}
            </p>
          )}
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {contact.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {contact.body}
          </p>
          <p className="text-brand-blue border-brand-accent/40 mt-4 border-l-2 pl-4 text-sm leading-6 font-semibold">
            {siteConfig.brandPromise.stewardship}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {contact.callBenefits.map((benefit, index) => {
              const BenefitIcon = benefitIcons[index];

              return (
                <div
                  key={benefit.title}
                  className="bg-brand-accent flex items-center gap-3 rounded-lg border border-white/10 p-4 text-white shadow-sm sm:block"
                >
                  <BenefitIcon className="h-6 w-6 shrink-0 text-white sm:mt-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:mt-4">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      {benefit.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-brand-blue/5 rounded-lg p-6">
          <div className="border-brand-grey-light/30 grid grid-cols-[52px_1fr] gap-4 rounded-lg border bg-white p-4 sm:grid-cols-[56px_1fr] lg:mt-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/brand/generated/v003/advisor-phone-support-bubble-v003.png"
                alt="River Relief phone support advisor"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center">
              <div className="bg-white px-1 py-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  <p className="text-brand-grey-dark text-sm font-bold">
                    {contact.supportPerson.name}
                  </p>
                </div>
                <p className="text-brand-accent mt-1 text-xs font-semibold">
                  {contact.supportPerson.title}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            <a
              href={contact.callCta.href}
              className="glow-cta border-brand-accent/35 text-brand-blue focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-md border bg-white px-6 py-3 text-base font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <PhoneIcon className="mr-2 h-4 w-4" />
              {contact.phone}
            </a>
            <a
              href={contact.cta.href}
              className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {contact.cta.label}
            </a>
          </div>
          <div className="mt-6">
            <TrustBadges compact />
          </div>
        </div>
      </div>
    </section>
  );
}
