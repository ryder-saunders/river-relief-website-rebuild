"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

type SurveyData = {
  debtType: string;
  debtAmount: string;
  paymentStruggleDuration: string;
  stateOfResidence: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tellUsMore: string;
  consent: boolean;
  website: string;
};

type SurveyVariant = "hero" | "section" | "funnel";

const initialData: SurveyData = {
  debtType: "",
  debtAmount: "",
  paymentStruggleDuration: "",
  stateOfResidence: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  tellUsMore: "",
  consent: false,
  website: "",
};

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

type QuestionKey = (typeof siteConfig)["intake"]["questions"][number]["key"];

export function SbsSurvey({
  variant = "section",
  redirectOnSubmit,
}: {
  variant?: SurveyVariant;
  redirectOnSubmit?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [data, setData] = useState<SurveyData>(initialData);
  const { intake } = siteConfig;
  const stateStepIndex = intake.questions.length;
  const contactStepIndex = intake.questions.length + 1;
  const isStateStep = step === stateStepIndex;
  const isContactStep = step === contactStepIndex;
  const currentQuestion = intake.questions[step];

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
      },
      debtProfile: {
        debtType: data.debtType,
        debtAmount: data.debtAmount,
        paymentStruggleDuration: data.paymentStruggleDuration,
        stateOfResidence: data.stateOfResidence,
        tellUsMore: data.tellUsMore,
      },
      consent: data.consent,
      landingPage: pathname,
      website: data.website,
    }),
    [data, pathname],
  );

  function updateField<K extends keyof SurveyData>(
    key: K,
    value: SurveyData[K],
  ) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function chooseOption(key: QuestionKey, value: string) {
    updateField(key, value);
    setStep((current) => Math.min(contactStepIndex, current + 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          debtType: data.debtType,
          debtAmount: data.debtAmount,
          paymentStruggleDuration: data.paymentStruggleDuration,
          stateOfResidence: data.stateOfResidence,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          tellUsMore: data.tellUsMore,
          consent: data.consent,
          landingPage: pathname,
          website: data.website,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setSubmitted(true);
      if (redirectOnSubmit) {
        router.push(redirectOnSubmit);
      }
    } catch {
      setSubmitError(intake.errorBody);
    } finally {
      setIsSubmitting(false);
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
        {[
          ...intake.questions,
          { key: "stateOfResidence", label: "State" },
          { key: "contact", label: "Contact" },
        ].map((item, index) => (
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
        ))}
      </div>

      <div className="rounded-lg bg-white p-4 sm:p-5">
        {!isStateStep && !isContactStep && currentQuestion && (
          <fieldset aria-labelledby={`${currentQuestion.key}-label`}>
            <div className="flex items-start justify-between gap-4">
              <h3
                id={`${currentQuestion.key}-label`}
                className="text-brand-grey-dark text-2xl leading-tight font-semibold sm:text-3xl"
              >
                {currentQuestion.label}
              </h3>
              <ShieldCheckIcon className="text-brand-accent mt-1 h-7 w-7 shrink-0" />
            </div>
            <div className="mt-5 grid gap-2">
              {currentQuestion.options.map((option) => (
                <SurveyOption
                  key={option}
                  option={option}
                  selected={data[currentQuestion.key] === option}
                  onSelect={() => chooseOption(currentQuestion.key, option)}
                />
              ))}
            </div>
            <p className="border-brand-accent/25 bg-brand-accent/10 text-brand-blue mt-5 flex gap-3 rounded-md border px-4 py-3 text-sm leading-6 font-semibold">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {currentQuestion.affirmation}
            </p>
          </fieldset>
        )}

        {isStateStep && (
          <div className="grid gap-4">
            <div className="text-center">
              <span className="bg-brand-accent mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white">
                <CheckIcon className="h-9 w-9" />
              </span>
              <h3 className="text-brand-grey-dark mt-5 text-2xl leading-tight font-semibold sm:text-3xl">
                {intake.stateStep.title}
              </h3>
            </div>
            <label className="text-brand-grey-dark grid gap-2 text-sm font-semibold">
              <span className="sr-only">{intake.stateStep.label}</span>
              <select
                value={data.stateOfResidence}
                required
                onChange={(event) => {
                  const state = event.target.value;

                  updateField("stateOfResidence", state);
                  if (state) {
                    setStep(contactStepIndex);
                  }
                }}
                className="border-brand-grey-light/50 text-brand-grey-dark focus:border-brand-blue rounded-md border bg-white px-4 py-3 font-normal transition-colors outline-none"
              >
                <option value="">{intake.stateStep.label}</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
            <p className="border-brand-accent/25 bg-brand-accent/10 text-brand-blue flex gap-3 rounded-md border px-4 py-3 text-sm leading-6 font-semibold">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {intake.stateStep.affirmation}
            </p>
          </div>
        )}

        {isContactStep && (
          <div className="grid gap-4">
            <div className="text-center">
              <span className="bg-brand-accent mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white">
                <CheckIcon className="h-9 w-9" />
              </span>
              <h3 className="text-brand-grey-dark text-2xl leading-tight font-semibold sm:text-3xl">
                {intake.contactStep.title}
              </h3>
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
            <label className="text-brand-grey-dark grid gap-2 text-sm font-semibold">
              Tell Us More
              <textarea
                rows={4}
                value={data.tellUsMore}
                onChange={(event) =>
                  updateField("tellUsMore", event.target.value)
                }
                className="border-brand-grey-light/40 text-brand-grey-dark focus:border-brand-blue min-h-28 rounded-md border px-4 py-3 font-normal transition-colors outline-none"
                placeholder="Share anything helpful for the first conversation."
              />
            </label>
            <input
              type="text"
              name="website"
              value={data.website}
              onChange={(event) => updateField("website", event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <label className="text-brand-grey-mid flex items-start gap-3 text-[11px] leading-5 sm:text-xs sm:leading-5">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(event) =>
                  updateField("consent", event.target.checked)
                }
                required
                className="accent-brand-blue mt-0.5 h-4 w-4 shrink-0"
              />
              <span>{intake.consentLabel}</span>
            </label>
            <p className="border-brand-accent/25 bg-brand-accent/10 text-brand-blue flex gap-3 rounded-md border px-4 py-3 text-sm leading-6 font-semibold">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {intake.contactStep.affirmation}
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
          {isStateStep ? (
            <button
              type="button"
              onClick={() => {
                if (data.stateOfResidence) {
                  setStep(contactStepIndex);
                }
              }}
              className="bg-brand-blue hover:bg-brand-blue/90 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!data.stateOfResidence}
            >
              Next
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          ) : null}
          {isContactStep ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-blue hover:bg-brand-blue/90 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? intake.submittingLabel : intake.submitLabel}
              <CheckIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {submitError && (
          <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-sm leading-6 font-semibold text-red-800">
              {submitError}
            </p>
          </div>
        )}

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

function SurveyOption({
  option,
  selected,
  onSelect,
}: {
  option: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors ${
        selected
          ? "border-brand-accent bg-brand-accent/10 text-brand-blue"
          : "border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue hover:bg-brand-blue/5 bg-white"
      }`}
      aria-pressed={selected}
    >
      <span className="flex items-center gap-3">
        <span
          className={`h-4 w-4 rounded-full border ${
            selected
              ? "border-brand-accent ring-brand-accent/25 bg-brand-accent ring-4"
              : "border-brand-grey-mid"
          }`}
        />
        {option}
      </span>
      <ArrowRightIcon className="text-brand-blue h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
    </button>
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
