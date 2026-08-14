import { HandHeartIcon, ShieldCheckIcon, UserIcon } from "@/components/icons";
import { SbsSurvey } from "@/components/sbs-survey";
import { WebPageStructuredData } from "@/components/structured-data";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";
import { metadataForPath } from "@/lib/seo";

export const metadata = metadataForPath("/qualify");

export default function QualifyPage() {
  const { funnel } = siteConfig;

  return (
    <>
      <WebPageStructuredData
        path="/qualify"
        title={funnel.hero.title}
        description={funnel.hero.body}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: funnel.hero.title, path: "/qualify" },
        ]}
      />
      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-12">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-bold tracking-wide text-white/60 uppercase">
              {funnel.hero.eyebrow}
            </p>
            <h1 className="mx-auto max-w-2xl text-5xl leading-tight font-bold text-white sm:text-6xl lg:mx-0">
              {funnel.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-8 text-white/75 lg:mx-0">
              {funnel.hero.body}
            </p>
            <p className="mx-auto mt-5 flex max-w-xl justify-center gap-3 text-sm leading-6 font-semibold text-white/80 lg:mx-0 lg:justify-start">
              <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
              {funnel.hero.trustLine}
            </p>
            <div className="mx-auto mt-8 lg:mx-0">
              <TrustBadges theme="dark" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 font-semibold text-white/68 lg:mx-0">
              {siteConfig.brandPromise.stewardship}
            </p>
          </div>

          <SbsSurvey variant="funnel" redirectOnSubmit={funnel.bookingPath} />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-brand-grey-dark max-w-xl text-4xl leading-tight font-bold">
              {funnel.nextStep.title}
            </h2>
            <p className="text-brand-grey-mid mt-4 max-w-xl text-lg leading-8">
              {funnel.nextStep.body}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {funnel.nextStep.items.map((item, index) => {
              const Icon =
                index === 0
                  ? ShieldCheckIcon
                  : index === 1
                    ? HandHeartIcon
                    : UserIcon;

              return (
                <div
                  key={item.title}
                  className="border-brand-grey-light/30 shadow-brand-blue/5 flex gap-4 rounded-lg border bg-white p-5 shadow-lg md:block"
                >
                  <Icon className="text-brand-blue h-7 w-7 shrink-0 self-center md:self-auto" />
                  <div>
                    <h3 className="text-brand-grey-dark text-lg font-bold md:mt-5">
                      {item.title}
                    </h3>
                    <p className="text-brand-grey-mid mt-2 text-sm leading-6">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
