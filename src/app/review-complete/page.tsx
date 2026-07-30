import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Review Submitted — ${siteConfig.orgName}`,
  description: siteConfig.funnel.completion.body,
};

export default function ReviewCompletePage() {
  const { completion } = siteConfig.funnel;

  return (
    <>
      <section className="bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <ShieldCheckIcon className="mx-auto h-12 w-12 text-white" />
          <p className="mt-6 text-sm font-bold tracking-wide text-white/60 uppercase">
            {completion.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl leading-tight font-bold sm:text-6xl">
            {completion.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-white/75">
            {completion.body}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={completion.callCta.href}
              className="text-brand-blue inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-4 w-4" />
              {completion.callCta.label}
            </a>
            <Link
              href={completion.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {completion.primaryCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {completion.reassurance.map((item) => (
            <div
              key={item}
              className="border-brand-grey-light/30 shadow-brand-blue/5 flex gap-3 rounded-lg border bg-white p-5 shadow-lg"
            >
              <CheckIcon className="text-brand-blue mt-1 h-4 w-4 shrink-0" />
              <p className="text-brand-grey-dark text-sm leading-6 font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
