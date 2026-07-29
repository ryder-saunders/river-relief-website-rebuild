import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="bg-brand-tan/55 overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-brand-grey-dark max-w-3xl text-5xl leading-tight font-semibold text-balance sm:text-6xl">
            {hero.heading}
          </h1>
          <p className="text-brand-grey-mid mt-6 max-w-2xl text-lg leading-8">
            {hero.subheading}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="border-brand-grey-light text-brand-grey-dark hover:border-brand-blue hover:text-brand-blue focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-full border bg-white px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="text-brand-grey-mid mt-5 text-sm">{hero.trustLine}</p>
          <div className="border-brand-grey-light/30 mt-8 rounded-lg border bg-white p-5">
            <p className="text-brand-grey-dark text-sm font-semibold">
              {hero.intent.label}
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {hero.intent.items.map((item) => (
                <li key={item} className="text-brand-grey-mid text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-brand-grey-light/30 bg-background text-brand-grey-dark rounded-lg border px-4 py-3 text-sm font-medium"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-brand-grey-light/30 bg-background shadow-brand-blue/10 rounded-lg border p-5 shadow-2xl">
          <div className="bg-brand-blue rounded-lg p-6 text-white">
            <p className="text-brand-tan text-sm font-medium">
              {hero.preview.label}
            </p>
            <p className="mt-6 text-6xl leading-none font-semibold">
              {hero.preview.stat}
            </p>
            <p className="text-brand-tan mt-4 max-w-sm text-sm leading-6">
              {hero.preview.caption}
            </p>
          </div>
          <dl className="mt-4 grid gap-3">
            {hero.preview.items.map((item) => (
              <div
                key={item.label}
                className="bg-brand-tan/45 flex items-center justify-between rounded-lg px-4 py-3"
              >
                <dt className="text-brand-grey-mid text-sm">{item.label}</dt>
                <dd className="text-brand-grey-dark text-sm font-semibold">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 grid gap-3">
            {hero.proof.map((item) => (
              <li
                key={item}
                className="text-brand-grey-mid border-brand-grey-light/30 flex items-start gap-3 border-t pt-3 text-sm leading-6"
              >
                <span
                  aria-hidden="true"
                  className="bg-brand-blue mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
