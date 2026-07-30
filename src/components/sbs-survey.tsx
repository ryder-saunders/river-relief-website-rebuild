"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

type SurveyData = {
  debtAmount: string;
  paymentPressure: string;
  creditRange: string;
  primaryGoal: string;
  urgency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  consent: boolean;
};

type SurveyVariant = "hero" | "section" | "funnel";

const initialData: SurveyData = {
  debtAmount: "",
  paymentPressure: "",
  creditRange: "",
  primaryGoal: "",
  urgency: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "Phone",
  consent: false,
};

const questions = [
  {
    key: "debtAmount",
    label: "How much debt are you carrying?",
    options: ["$5K-$15K", "$15K-$30K", "$30K-$50K", "$50K+"],
    affirmation: "No judgement here. Everyone is on their own path.",
  },
  {
    key: "paymentPressure",
    label: "What is the monthly pressure?",
    options: ["Manageable", "Tight", "Overwhelming", "Behind"],
    affirmation:
      "You are not behind for wanting breathing room. This helps us understand what relief could look like.",
  },
  {
    key: "primaryGoal",
    label: "What do you want most?",
    options: ["Lower payment", "One due date", "Compare options", "Call first"],
    affirmation:
      "There is no wrong answer. Your goal simply helps the conversation start in the right place.",
  },
  {
    key: "creditRange",
    label: "Credit range",
    options: ["Excellent", "Good", "Fair", "Rebuilding", "Unsure"],
    affirmation:
      "An estimate is enough. This is about direction, not perfection.",
  },
] as const;

const contactOptions = ["Phone", "Text", "Email"];
const contactAffirmation =
  "You have already done the useful sorting. This last step lets a real person follow up.";

export function SbsSurvey({
  variant = "section",
  redirectOnSubmit,
}: {
  variant?: SurveyVariant;
  redirectOnSubmit?: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<SurveyData>(initialData);
  const { intake } = siteConfig;
  const isContactStep = step === questions.length;
  const currentQuestion = questions[step];

  const crmPayload = useMemo(
    () => ({
      source: "river-relief-homepage",
      campaign: "faith-based-debt-help",
      leadType: "debt-consolidation-intake",
      borrower: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        preferredContact: data.preferredContact,
      },
      debtProfile: {
        debtAmount: data.debtAmount,
        paymentPressure: data.paymentPressure,
        creditRange: data.creditRange,
      },
      intent: {
        primaryGoal: data.primaryGoal,
        urgency: data.urgency,
      },
      consent: data.consent,
    }),
    [data],
  );

  function updateField<K extends keyof SurveyData>(
    key: K,
    value: SurveyData[K],
  ) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function chooseOption(key: (typeof questions)[number]["key"], value: string) {
    updateField(key, value);
    setStep((current) => Math.min(questions.length, current + 1));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (redirectOnSubmit) {
      router.push(redirectOnSubmit);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg border shadow-2xl ${
        variant === "hero"
          ? "text-brand-grey-dark border-white/15 bg-white p-3 shadow-black/30 sm:p-5"
          : variant === "funnel"
            ? "bg-brand-blue border-transparent p-0 shadow-none sm:p-0"
            : "border-brand-grey-light/30 bg-brand-blue shadow-brand-blue/15 p-3 sm:p-6"
      }`}
    >
      <div className="mb-5 grid grid-cols-5 gap-2">
        {[...questions, { key: "contact", label: "Contact" }].map(
          (item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setStep(index)}
              className={`h-2 rounded-sm transition-colors ${
                index <= step
                  ? variant === "hero"
                    ? "bg-brand-blue"
                    : "bg-white"
                  : variant === "hero"
                    ? "bg-brand-grey-light/35"
                    : "bg-white/20"
              }`}
              aria-label={`Go to ${item.label}`}
            />
          ),
        )}
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-5">
        {!isContactStep && currentQuestion && (
          <fieldset aria-labelledby={`${currentQuestion.key}-label`}>
            <div className="flex items-start justify-between gap-4">
              <h3
                id={`${currentQuestion.key}-label`}
                className="text-brand-grey-dark text-2xl leading-tight font-semibold sm:text-3xl"
              >
                {currentQuestion.label}
              </h3>
              <ShieldCheckIcon className="text-brand-blue mt-1 h-7 w-7 shrink-0" />
            </div>
            <div className="mt-5 grid gap-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseOption(currentQuestion.key, option)}
                  className="group border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue hover:bg-brand-blue/5 flex w-full items-center justify-between rounded-md border bg-white px-4 py-3 text-left text-sm font-semibold transition-colors"
                >
                  {option}
                  <ArrowRightIcon className="text-brand-blue h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
            <p className="border-brand-blue/15 bg-brand-blue/5 text-brand-blue mt-5 flex gap-3 rounded-md border px-4 py-3 text-sm leading-6 font-semibold">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {currentQuestion.affirmation}
            </p>
          </fieldset>
        )}

        {isContactStep && (
          <div className="grid gap-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-brand-grey-dark text-2xl leading-tight font-semibold sm:text-3xl">
                Where should we follow up?
              </h3>
              <ShieldCheckIcon className="text-brand-blue mt-1 h-7 w-7 shrink-0" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <TextInput
                label="First name"
                value={data.firstName}
                onChange={(value) => updateField("firstName", value)}
                required
              />
              <TextInput
                label="Last name"
                value={data.lastName}
                onChange={(value) => updateField("lastName", value)}
                required
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <TextInput
                label="Email"
                type="email"
                value={data.email}
                onChange={(value) => updateField("email", value)}
                required
              />
              <TextInput
                label="Phone"
                type="tel"
                value={data.phone}
                onChange={(value) => updateField("phone", value)}
                required
              />
            </div>
            <fieldset>
              <legend className="text-brand-grey-dark text-sm font-semibold">
                Preferred contact
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {contactOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("preferredContact", option)}
                    className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                      data.preferredContact === option
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-brand-grey-light/40 text-brand-grey-mid hover:border-brand-blue hover:text-brand-blue bg-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="text-brand-grey-mid flex gap-3 text-sm leading-6">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(event) =>
                  updateField("consent", event.target.checked)
                }
                required
                className="accent-brand-blue mt-1 h-4 w-4"
              />
              River Relief may contact me about my review.
            </label>
            <p className="border-brand-blue/15 bg-brand-blue/5 text-brand-blue flex gap-3 rounded-md border px-4 py-3 text-sm leading-6 font-semibold">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {contactAffirmation}
            </p>
          </div>
        )}

        <input
          type="hidden"
          name="crmPayload"
          value={JSON.stringify(crmPayload)}
        />

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            className="border-brand-grey-light/40 text-brand-blue hover:border-brand-blue rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40"
            disabled={step === 0}
          >
            Back
          </button>
          {isContactStep ? (
            <button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue/90 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold text-white transition-colors"
            >
              {intake.submitLabel}
              <CheckIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {submitted && (
          <div className="border-brand-blue/20 bg-brand-blue/5 mt-5 rounded-md border p-4">
            <p className="text-brand-grey-dark font-semibold">
              {intake.successTitle}
            </p>
            <p className="text-brand-grey-mid mt-2 text-sm leading-6">
              {intake.successBody}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-brand-grey-dark grid gap-2 text-sm font-semibold">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="border-brand-grey-light/40 text-brand-grey-dark focus:border-brand-blue rounded-md border px-4 py-3 font-normal transition-colors outline-none"
      />
    </label>
  );
}
