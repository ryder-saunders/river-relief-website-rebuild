import Image from "next/image";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

type LegalPageContent =
  (typeof siteConfig)["legalPages"][keyof (typeof siteConfig)["legalPages"]];

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <>
      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_0.48fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold text-white/60 uppercase">
              River Relief
            </p>
            <h1 className="max-w-3xl text-5xl leading-tight font-semibold">
              {content.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              {content.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-white/70">
              Effective {content.effectiveDate}
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-5">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
            <h2 className="mt-5 text-2xl font-semibold">
              Plain-language policy pages.
            </h2>
            <p className="mt-3 leading-7 text-white/72">
              Review the basics, then call River Relief if you prefer a person
              before sharing details online.
            </p>
            <a
              href={content.cta.href}
              className="glow-cta text-brand-blue mt-5 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-center text-sm font-bold"
            >
              <PhoneIcon className="mr-2 h-4 w-4" />
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <div className="grid gap-4">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="border-brand-grey-light/30 rounded-lg border bg-white p-5"
              >
                <h2 className="text-brand-grey-dark text-2xl font-semibold">
                  {section.title}
                </h2>
                <p className="text-brand-grey-mid mt-3 leading-8">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
          <aside className="bg-brand-blue/5 border-brand-grey-light/30 rounded-lg border p-5">
            <h2 className="text-brand-grey-dark text-2xl font-semibold">
              {content.ctaTitle}
            </h2>
            <p className="text-brand-grey-mid mt-3 leading-7">
              {content.ctaBody}
            </p>
            <ul className="mt-5 grid gap-3">
              {["Call first", "Ask questions", "Choose online later"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-brand-grey-dark flex items-center gap-2 text-sm font-semibold"
                  >
                    <CheckIcon className="text-brand-blue h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a
              href={content.cta.href}
              className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-5 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-center text-sm font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {content.cta.label}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <div className="relative mt-5 min-h-56 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/brand/generated/v006/resources-guidance-compact-hero-v006.png"
                alt="River Relief advisor reviewing information with a family"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
