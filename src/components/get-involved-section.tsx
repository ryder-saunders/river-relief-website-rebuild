import Image from "next/image";
import {
  ArrowRightIcon,
  HandHeartIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const actionIcons = [ShieldCheckIcon, PhoneIcon, HandHeartIcon];

export function GetInvolvedSection() {
  const { getInvolved } = siteConfig;

  return (
    <section id="get-started" className="bg-brand-blue/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {getInvolved.eyebrow && (
            <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
              {getInvolved.eyebrow}
            </p>
          )}
          <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
            {getInvolved.heading}
          </h2>
          <p className="text-brand-grey-mid mt-5 text-lg leading-8">
            {getInvolved.body}
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.5fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {getInvolved.actions.map((action) => (
              <div
                key={action.title}
                className="border-brand-grey-light/30 flex flex-col rounded-lg border bg-white p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  {(() => {
                    const ActionIcon =
                      actionIcons[getInvolved.actions.indexOf(action)];
                    return (
                      <ActionIcon className="text-brand-blue h-7 w-7 shrink-0" />
                    );
                  })()}
                  <div>
                    <h3 className="text-brand-grey-dark text-lg font-semibold">
                      {action.title}
                    </h3>
                    <p className="text-brand-grey-mid mt-2 leading-7">
                      {action.description}
                    </p>
                  </div>
                </div>
                <a
                  href={action.cta.href}
                  className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-6 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {action.cta.label}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
                <p className="text-brand-grey-mid mt-5 text-sm leading-6">
                  {action.supportText}
                </p>
              </div>
            ))}
          </div>
          <div className="shadow-brand-blue/10 relative min-h-72 overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/brand/generated/v004/confident-borrower-family-phone-v004.png"
              alt="A family feeling confident after a River Relief phone consultation"
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
