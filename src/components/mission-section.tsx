import Image from "next/image";
import { CheckIcon, UserIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function MissionSection() {
  const { mission } = siteConfig;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="grid grid-cols-[1fr_0.78fr] items-start gap-4 lg:block">
          <div>
            {mission.eyebrow && (
              <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
                {mission.eyebrow}
              </p>
            )}
            <h2 className="text-brand-grey-dark max-w-xl text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {mission.heading}
            </h2>
            <a
              href={mission.cta.href}
              className="bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue mt-6 inline-flex items-center justify-center rounded-md px-4 py-3 text-center text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-base lg:mt-8"
            >
              <span className="flex flex-col items-center leading-tight">
                <span>{mission.cta.label}</span>
                <span className="text-xs font-medium text-white/72">
                  {mission.cta.sublabel}
                </span>
              </span>
            </a>
          </div>
          <div className="shadow-brand-blue/10 relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl lg:mt-8 lg:aspect-[4/3]">
            <Image
              src="/brand/generated/v003/advisor-family-testimonial-v003.png"
              alt="A River Relief advisor speaking with a family"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-brand-grey-mid text-lg leading-8">
            <strong className="text-brand-grey-dark">A confidential</strong>{" "}
            conversation about credit card debt, stewardship, and the next
            practical step.
          </p>
          <ul className="mt-8 grid gap-4">
            {mission.points.map((point) => (
              <li
                key={point}
                className="border-brand-grey-light/30 flex gap-3 rounded-lg border bg-white px-5 py-4"
              >
                <CheckIcon className="text-brand-blue mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-brand-grey-dark font-medium">
                  <MissionPoint text={point} />
                </p>
              </li>
            ))}
          </ul>
          <DebtReliefSupportExample example={mission.supportExample} />
        </div>
      </div>
    </section>
  );
}

function DebtReliefSupportExample({
  example,
}: {
  example: (typeof siteConfig)["mission"]["supportExample"];
}) {
  return (
    <div className="border-brand-grey-light/30 mt-5 rounded-lg border bg-white p-5 shadow-sm">
      <div>
        <h3 className="text-brand-grey-dark text-lg font-semibold">
          {example.title}
        </h3>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <SupportState
          tone="before"
          label={example.before.label}
          person={example.before.person}
          stats={example.before.stats}
        />
        <SupportState
          tone="after"
          label={example.after.label}
          person={example.after.person}
          stats={example.after.stats}
        />
      </div>
    </div>
  );
}

function SupportState({
  tone,
  label,
  person,
  stats,
}: {
  tone: "before" | "after";
  label: string;
  person: string;
  stats: readonly { label: string; value: string }[];
}) {
  const isAfter = tone === "after";

  return (
    <div className="border-brand-grey-light/30 rounded-md border p-4">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
            isAfter ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          <UserIcon className="h-6 w-6" />
        </span>
        <div>
          <p
            className={`text-xs leading-none font-bold whitespace-nowrap uppercase ${
              isAfter ? "text-green-700" : "text-red-700"
            }`}
          >
            {label}
          </p>
          <p className="text-brand-grey-dark text-sm font-semibold">{person}</p>
        </div>
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-brand-grey-mid text-xs">{stat.label}</dt>
            <dd className="text-brand-grey-dark mt-1 text-sm font-bold">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function MissionPoint({ text }: { text: string }) {
  if (text.startsWith("A monthly payment")) {
    return (
      <>
        <strong>A monthly payment</strong> that feels easier to plan around.
      </>
    );
  }

  if (text.startsWith("One clear next step")) {
    return (
      <>
        <strong>One clear next step</strong> instead of more guesswork.
      </>
    );
  }

  if (text.startsWith("Less pressure")) {
    return (
      <>
        <strong>Less pressure</strong> when bills and due dates stack up.
      </>
    );
  }

  if (text.startsWith("A path")) {
    return (
      <>
        <strong>A path</strong> you can talk through before deciding.
      </>
    );
  }

  return text;
}
