import { ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function ImpactStats() {
  const { impact } = siteConfig;

  return (
    <section id="impact" className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {impact.eyebrow && (
            <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
              {impact.eyebrow}
            </p>
          )}
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {impact.heading}
          </h2>
          <p className="text-brand-grey-mid mt-3 text-lg leading-8">
            {impact.body}
          </p>
        </div>
        <dl className="border-brand-grey-light/30 bg-brand-grey-light/30 mt-8 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-4">
          {impact.items.map((item) => (
            <div key={item.label} className="bg-white p-6">
              <dt className="text-brand-blue text-3xl font-semibold sm:text-4xl">
                {item.stat}
              </dt>
              <dd className="text-brand-grey-mid mt-3 text-sm leading-6">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-brand-grey-mid mt-4 max-w-3xl text-xs leading-6">
          {impact.note}
        </p>
        <a
          href={impact.cta.href}
          className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-5 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {impact.cta.label}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
        <p className="text-brand-grey-mid mt-4 max-w-lg text-sm leading-6">
          {siteConfig.scriptureLines.impact.text}{" "}
          <span className="text-brand-grey-dark font-semibold">
            {siteConfig.scriptureLines.impact.ref}
          </span>
        </p>
      </div>
    </section>
  );
}
