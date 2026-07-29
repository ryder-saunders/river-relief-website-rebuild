import { siteConfig } from "@/lib/site-config";

export function ImpactStats() {
  const { impact } = siteConfig;

  return (
    <section id="impact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {impact.eyebrow}
          </p>
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {impact.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {impact.body}
          </p>
        </div>
        <dl className="border-brand-grey-light/30 bg-brand-grey-light/30 mt-12 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-4">
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
      </div>
    </section>
  );
}
