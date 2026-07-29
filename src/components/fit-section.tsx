import { siteConfig } from "@/lib/site-config";

export function FitSection() {
  const { fit } = siteConfig;

  return (
    <section id="fit" className="bg-brand-tan/45 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
              {fit.eyebrow}
            </p>
            <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
              {fit.heading}
            </h2>
            <p className="text-brand-grey-mid mt-5 text-lg leading-8">
              {fit.body}
            </p>
            <a
              href={fit.cta.href}
              className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {fit.cta.label}
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {fit.cards.map((card) => (
              <div
                key={card.title}
                className="border-brand-grey-light/30 rounded-lg border bg-white p-6"
              >
                <h3 className="text-brand-grey-dark text-lg font-semibold">
                  {card.title}
                </h3>
                <ul className="mt-6 grid gap-4">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-brand-grey-mid flex gap-3 text-sm leading-6"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
