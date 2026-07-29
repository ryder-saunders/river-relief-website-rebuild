import { siteConfig } from "@/lib/site-config";

export function GetInvolvedSection() {
  const { getInvolved } = siteConfig;

  return (
    <section id="get-started" className="bg-brand-tan/55 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {getInvolved.eyebrow}
          </p>
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {getInvolved.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {getInvolved.body}
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {getInvolved.actions.map((action) => (
            <div
              key={action.title}
              className="border-brand-grey-light/30 flex flex-col rounded-lg border bg-white p-6"
            >
              <h3 className="text-brand-grey-dark text-lg font-semibold">
                {action.title}
              </h3>
              <p className="text-brand-grey-mid mt-3 flex-1 leading-7">
                {action.description}
              </p>
              <a
                href={action.cta.href}
                className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {action.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
