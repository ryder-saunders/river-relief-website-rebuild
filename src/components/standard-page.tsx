import Image from "next/image";
import {
  ArrowRightIcon,
  CheckIcon,
  HandHeartIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site-config";

type StandardPageContent =
  (typeof siteConfig)["standardPages"][keyof (typeof siteConfig)["standardPages"]];

const cardIcons = [ShieldCheckIcon, PhoneIcon, HandHeartIcon];

export function StandardPage({ content }: { content: StandardPageContent }) {
  const isContactPage =
    content.title === siteConfig.standardPages.contact.title;
  const pageKey =
    (
      Object.entries(siteConfig.standardPages) as [
        keyof typeof siteConfig.standardPages,
        StandardPageContent,
      ][]
    ).find(([, page]) => page.title === content.title)?.[0] ?? "debtRelief";
  const pageScripture = siteConfig.pageScriptures[pageKey];

  return (
    <>
      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            {content.eyebrow && (
              <p className="mb-4 text-sm font-semibold text-white/60 uppercase">
                {content.eyebrow}
              </p>
            )}
            <h1 className="max-w-3xl text-5xl leading-tight font-semibold text-balance">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PageCta cta={content.primaryCta} variant="light" />
              <PageCta cta={content.secondaryCta} variant="outline" />
            </div>
            <p className="border-brand-accent/35 mt-5 flex max-w-xl items-center gap-2 border-l-2 pl-4 text-sm text-white/72">
              <ShieldCheckIcon className="text-brand-tan h-4 w-4 shrink-0" />
              <strong className="text-white">
                {siteConfig.brandPromise.tagline}
              </strong>
            </p>
            <div className="mt-5">
              <TrustBadges theme="dark" />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 font-semibold text-white/64">
              {pageScripture.text}{" "}
              <span className="text-white/80">{pageScripture.ref}</span>
            </p>
          </div>
          {isContactPage ? (
            <ContactMessageForm theme="dark" />
          ) : (
            <div className="shadow-brand-blue/30 relative min-h-72 overflow-hidden rounded-lg shadow-2xl sm:min-h-96">
              <Image
                src={content.heroImage}
                alt={content.heroAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
                {content.cardsTitle}
              </h2>
              <p className="text-brand-grey-mid mt-4 leading-7">
                Get the main points quickly, then choose whether to qualify
                online or talk with River Relief first.
              </p>
              <div className="mt-6">
                <PageCta cta={content.primaryCta} variant="dark" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.cards.map((card, index) => {
                const CardIcon = cardIcons[index % cardIcons.length];

                return (
                  <div
                    key={card.title}
                    className="bg-brand-accent flex items-center gap-3 rounded-lg border border-white/10 p-4 text-white shadow-sm sm:block sm:p-5"
                  >
                    <CardIcon className="h-7 w-7 shrink-0 text-white sm:mb-5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/82">
                        {card.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <ConfidenceTile
              title="Private Start"
              body="Begin with direction, not pressure."
            />
            <ConfidenceTile
              title="Values First"
              body="A practical process that leaves room for stewardship."
            />
            <ConfidenceTile
              title="Human Follow-Up"
              body="Call first or choose how River Relief should respond."
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-blue/5 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
              {content.proofTitle}
            </h2>
            <p className="text-brand-grey-mid mt-5 text-lg leading-8">
              {content.proofBody}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {content.proofItems.map((item) => (
                <li
                  key={item}
                  className="border-brand-grey-light/30 hover:border-brand-accent/35 flex items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm font-semibold transition-colors"
                >
                  <CheckIcon className="text-brand-accent h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PageCta cta={content.secondaryCta} variant="dark" />
            </div>
          </div>
          {isContactPage ? (
            <ContactMessageForm />
          ) : (
            <div>
              <div className="relative min-h-72 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={content.proofImage}
                  alt={content.proofAlt}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold text-balance">
              A practical way to compare the next step.
            </h2>
            <p className="text-brand-grey-mid mt-5 text-lg leading-8">
              Use the review to move from scattered pressure to a clearer
              picture of what may fit your budget and values.
            </p>
            <div className="mt-7">
              <PageCta cta={content.primaryCta} variant="dark" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ComparisonState
              tone="before"
              label="Before clarity"
              items={["Multiple dates", "Payment pressure", "Guesswork"]}
            />
            <ComparisonState
              tone="after"
              label="After review"
              items={["Clear options", "Budget fit", "Next step"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-grey-dark py-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <h2 className="text-4xl leading-tight font-semibold">
                {content.stepsTitle}
              </h2>
              <div className="mt-6">
                <PageCta cta={content.primaryCta} variant="light" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex flex-col items-center justify-center gap-4 rounded-lg border border-white/15 bg-white/5 p-5 text-center"
                >
                  <span className="text-brand-blue border-brand-accent/35 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg leading-7 font-semibold text-white/88">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-brand-grey-dark text-4xl leading-tight font-semibold">
              {content.faqTitle}
            </h2>
            <p className="text-brand-grey-mid mt-5 leading-7">
              Get plain answers, then choose whether to qualify online or call.
            </p>
            <div className="mt-7">
              <PageCta cta={content.secondaryCta} variant="dark" />
            </div>
          </div>
          <div className="grid gap-4">
            {content.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-brand-grey-light/30 rounded-lg border bg-white p-5"
              >
                <h3 className="text-brand-grey-dark text-lg font-semibold">
                  {faq.question}
                </h3>
                <FaqAnswer answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue/5 px-6 py-12">
        <div className="border-brand-grey-light/30 mx-auto grid max-w-6xl gap-6 rounded-lg border bg-white p-6 shadow-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-brand-grey-dark text-3xl leading-tight font-semibold">
              {content.finalCtaTitle}
            </h2>
            <p className="text-brand-grey-mid mt-3 leading-7">
              {content.finalCtaBody}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PageCta cta={content.primaryCta} variant="dark" />
            <PageCta cta={content.secondaryCta} variant="outlineDark" />
          </div>
        </div>
      </section>
    </>
  );
}

function ConfidenceTile({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-brand-grey-light/30 flex items-center gap-3 rounded-lg border bg-white p-4">
      <CheckIcon className="text-brand-accent h-5 w-5 shrink-0" />
      <div>
        <h3 className="text-brand-grey-dark text-sm font-bold">{title}</h3>
        <p className="text-brand-grey-mid mt-1 text-sm leading-6">{body}</p>
      </div>
    </div>
  );
}

function ComparisonState({
  tone,
  label,
  items,
}: {
  tone: "before" | "after";
  label: string;
  items: string[];
}) {
  const isAfter = tone === "after";

  return (
    <div className="border-brand-grey-light/30 rounded-md border p-4">
      <p
        className={`text-xs font-bold uppercase sm:text-sm ${
          isAfter ? "text-green-700" : "text-red-700"
        }`}
      >
        {label}
      </p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-brand-grey-dark flex items-center gap-2 text-xs font-semibold sm:text-sm"
          >
            <CheckIcon
              className={`h-4 w-4 shrink-0 ${
                isAfter ? "text-green-700" : "text-red-700"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactMessageForm({ theme = "light" }: { theme?: "light" | "dark" }) {
  const dark = theme === "dark";

  return (
    <form
      className={`rounded-lg p-5 shadow-2xl ${
        dark
          ? "text-brand-grey-dark border border-white/15 bg-white"
          : "border-brand-grey-light/30 border bg-white"
      }`}
    >
      <h2 className="text-brand-grey-dark text-2xl font-semibold">
        Send a quick note.
      </h2>
      <p className="text-brand-grey-mid mt-2 text-sm leading-6">
        Share the best way to reach you and anything helpful for the first
        conversation.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <ContactField label="First name" name="firstName" type="text" />
        <ContactField label="Last name" name="lastName" type="text" />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <ContactField label="Email" type="email" />
        <ContactField label="Phone" type="tel" />
      </div>
      <label className="text-brand-grey-dark mt-3 grid gap-2 text-sm font-semibold">
        Tell Us More
        <textarea
          name="tellUsMore"
          rows={5}
          className="border-brand-grey-light/40 focus:border-brand-blue rounded-md border px-4 py-3 font-normal outline-none"
          placeholder="Tell us what you want help sorting through."
        />
      </label>
      <button
        type="submit"
        className="bg-brand-blue hover:bg-brand-blue/90 border-brand-accent/35 mt-5 inline-flex w-full items-center justify-center rounded-md border px-5 py-3 text-sm font-bold text-white transition-colors"
      >
        Send Message
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}

function ContactField({
  label,
  name,
  type,
}: {
  label: string;
  name?: string;
  type: string;
}) {
  return (
    <label className="text-brand-grey-dark grid gap-2 text-sm font-semibold">
      {label}
      <input
        type={type}
        name={name ?? label.toLowerCase()}
        className="border-brand-grey-light/40 focus:border-brand-blue rounded-md border px-4 py-3 font-normal outline-none"
      />
    </label>
  );
}

function FaqAnswer({ answer }: { answer: string }) {
  const phone = "(800) 520-1758";

  if (!answer.includes(phone)) {
    return <p className="text-brand-grey-mid mt-2 leading-7">{answer}</p>;
  }

  const [before, after] = answer.split(phone);

  return (
    <p className="text-brand-grey-mid mt-2 leading-7">
      {before}
      <a
        href="tel:8005201758"
        className="text-brand-blue font-semibold hover:underline"
      >
        {phone}
      </a>
      {after}
    </p>
  );
}

function PageCta({
  cta,
  variant,
}: {
  cta: { label: string; href: string };
  variant: "dark" | "light" | "outline" | "outlineDark";
}) {
  const isPhone = cta.href.startsWith("tel:");

  const classes = {
    dark: "bg-brand-blue text-white hover:bg-brand-blue/90 focus-visible:outline-brand-blue border border-brand-accent/35",
    light:
      "glow-cta border border-brand-accent/35 bg-white text-brand-blue hover:-translate-y-0.5 focus-visible:outline-white",
    outline:
      "border border-white/20 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white",
    outlineDark:
      "border border-brand-accent/35 bg-white text-brand-blue hover:border-brand-accent focus-visible:outline-brand-blue",
  }[variant];

  return (
    <a
      href={cta.href}
      className={`${classes} inline-flex items-center justify-center rounded-md px-6 py-3 text-center text-base font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {isPhone && <PhoneIcon className="mr-2 h-4 w-4" />}
      {cta.label}
      {!isPhone && <ArrowRightIcon className="ml-2 h-4 w-4" />}
    </a>
  );
}
