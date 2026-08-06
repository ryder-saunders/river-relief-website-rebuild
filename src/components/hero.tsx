import { CheckIcon, QuoteIcon, ShieldCheckIcon } from "@/components/icons";
import { SbsSurvey } from "@/components/sbs-survey";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="top"
      className="hero-field bg-brand-blue overflow-hidden text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <div className="mb-5 flex max-w-xl items-start gap-3 text-white/82">
            <QuoteIcon className="mt-1 h-6 w-6 shrink-0 text-white" />
            <p className="text-sm leading-6">“{hero.testimonial.quote}”</p>
          </div>
          <h1 className="max-w-3xl text-5xl leading-tight font-semibold text-balance sm:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {hero.subheading}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="glow-cta text-brand-blue inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
            <ShieldCheckIcon className="h-4 w-4 shrink-0 text-white" />
            Free review. No pressure.{" "}
            <strong className="text-white">
              {siteConfig.brandPromise.tagline}
            </strong>
          </p>
          <p className="mt-4 hidden max-w-xl text-sm leading-6 font-semibold text-white/68 lg:block">
            {siteConfig.scriptureLines.hero.text}{" "}
            <span className="text-white/82">
              {siteConfig.scriptureLines.hero.ref}
            </span>
          </p>
          <HeroHighlights
            className="mt-8 hidden lg:grid"
            highlights={hero.highlights}
          />
        </div>

        <div>
          <SbsSurvey variant="hero" />
          <div className="mt-5">
            <TrustBadges theme="dark" />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 font-semibold text-white/68 lg:hidden">
            {siteConfig.scriptureLines.hero.text}{" "}
            <span className="text-white/82">
              {siteConfig.scriptureLines.hero.ref}
            </span>
          </p>
          <HeroHighlights
            className="mt-5 grid lg:hidden"
            highlights={hero.highlights}
          />
        </div>
      </div>
    </section>
  );
}

function HeroHighlights({
  highlights,
  className,
}: {
  highlights: readonly string[];
  className: string;
}) {
  return (
    <ul className={`${className} grid-cols-2 gap-3 sm:grid-cols-3`}>
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/85"
        >
          <CheckIcon className="h-4 w-4 shrink-0 self-center text-white" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}
