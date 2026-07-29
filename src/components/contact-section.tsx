import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="border-brand-grey-light/30 grid gap-10 rounded-lg border bg-white p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {contact.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {contact.body}
          </p>
        </div>
        <div className="bg-brand-tan/55 rounded-lg p-6">
          <h3 className="text-brand-grey-dark text-lg font-semibold">
            {contact.promptTitle}
          </h3>
          <ul className="mt-5 grid gap-3">
            {contact.prompts.map((prompt) => (
              <li
                key={prompt}
                className="text-brand-grey-mid flex gap-3 text-sm leading-6"
              >
                <span
                  aria-hidden="true"
                  className="bg-brand-blue mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                />
                {prompt}
              </li>
            ))}
          </ul>
          <a
            href={contact.cta.href}
            className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {contact.cta.label}
          </a>
          <div className="text-brand-grey-mid space-y-3 text-base">
            {contact.email && (
              <p className="mt-5 text-center text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            )}
            {contact.phone && <p>{contact.phone}</p>}
            {contact.address && <p>{contact.address}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
