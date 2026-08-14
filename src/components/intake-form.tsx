import Image from "next/image";
import { SbsSurvey } from "@/components/sbs-survey";
import { siteConfig } from "@/lib/site-config";

export function IntakeForm() {
  const { intake } = siteConfig;

  return (
    <section id="intake" className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {intake.eyebrow}
          </p>
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {intake.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {intake.body}
          </p>
          <div className="shadow-brand-blue/10 relative mt-8 hidden h-64 overflow-hidden rounded-lg shadow-xl lg:block lg:h-56">
            <Image
              src="/brand/generated/v004/church-lobby-standing-advisor-family-v004.png"
              alt="A River Relief advisor speaking with a family in a welcoming faith community setting"
              fill
              sizes="(min-width: 1024px) 390px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <SbsSurvey redirectOnSubmit={siteConfig.funnel.bookingPath} />
        <div className="shadow-brand-blue/10 relative h-64 overflow-hidden rounded-lg shadow-xl lg:hidden">
          <Image
            src="/brand/generated/v004/church-lobby-standing-advisor-family-v004.png"
            alt="A River Relief advisor speaking with a family in a welcoming faith community setting"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
