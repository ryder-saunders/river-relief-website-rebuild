import { CheckIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function FitSection() {
  const { fit } = siteConfig;

  return (
    <section id="fit" className="bg-brand-blue/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            {fit.eyebrow && (
              <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
                {fit.eyebrow}
              </p>
            )}
            <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
              Ready to{" "}
              <span className="decoration-brand-accent underline decoration-4 underline-offset-4">
                face your debt
              </span>{" "}
              and simplify the structure?
            </h2>
            <p className="text-brand-grey-mid mt-5 text-lg leading-8">
              {fit.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={fit.cta.href}
                className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {fit.cta.label}
              </a>
              <a
                href={fit.secondaryCta.href}
                className="border-brand-accent/35 text-brand-blue hover:border-brand-accent focus-visible:outline-brand-blue inline-flex items-center justify-center rounded-md border bg-white px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <PhoneIcon className="mr-2 h-4 w-4" />
                {fit.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {fit.cards.map((card) => (
              <div
                key={card.title}
                className="border-brand-accent/25 shadow-brand-blue/10 ring-brand-accent/10 rounded-lg border bg-white p-4 shadow-xl ring-1 sm:p-7"
              >
                <h3 className="text-brand-grey-dark text-base font-semibold sm:text-lg lg:text-[1.35rem]">
                  {card.title}
                </h3>
                <ul className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-brand-grey-mid flex gap-2 text-xs leading-5 sm:gap-3 sm:text-sm sm:leading-6"
                    >
                      <CheckIcon className="text-brand-accent mt-0.5 h-4 w-4 shrink-0" />
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
