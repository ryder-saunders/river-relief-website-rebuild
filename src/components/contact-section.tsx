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
          <div className="text-brand-grey-mid space-y-3 text-base">
            {contact.email && (
              <p>
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
