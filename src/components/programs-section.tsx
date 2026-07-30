import {
  ArrowRightIcon,
  HandHeartIcon,
  LandmarkIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const stepIcons = [HandHeartIcon, ShieldCheckIcon, LandmarkIcon];

export function ProgramsSection() {
  const { programs } = siteConfig;

  return (
    <section id="how-it-works" className="bg-brand-grey-dark py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold text-white/60 uppercase">
              {programs.eyebrow}
            </p>
            <h2 className="text-4xl leading-tight font-semibold text-balance">
              {programs.heading}
            </h2>
            <p className="mt-3 text-lg leading-7 text-white/70">
              {programs.body}
            </p>
          </div>
          <a
            href={programs.cta.href}
            className="glow-cta text-brand-blue inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {programs.cta.label}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {programs.items.map((program, index) => (
            <div
              key={program.title}
              className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/5 p-5 sm:block sm:p-6"
            >
              {(() => {
                const StepIcon = stepIcons[index];
                return (
                  <StepIcon className="h-7 w-7 shrink-0 text-white sm:mb-8 sm:h-8 sm:w-8" />
                );
              })()}
              <div>
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-2 text-lg leading-7 text-white/72 sm:mt-3 sm:leading-8">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
