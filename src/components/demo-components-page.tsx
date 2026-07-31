"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  GaugeIcon,
  HandHeartIcon,
  LockIcon,
  MessageCircleIcon,
  PhoneIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  UserIcon,
  WalletCardsIcon,
} from "@/components/icons";
import { SpecialistChatDemo } from "@/components/specialist-chat-demo";
import { siteConfig } from "@/lib/site-config";

const content = siteConfig.demoComponents;
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  inverse?: boolean;
};

function SectionHeading({
  number,
  eyebrow,
  title,
  body,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-xl">
      <div
        className={`flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase ${inverse ? "text-white/65" : "text-brand-blue/65"}`}
      >
        <span className="font-mono">{number}</span>
        <span
          className={
            inverse ? "h-px w-8 bg-white/25" : "bg-brand-blue/20 h-px w-8"
          }
        />
        {eyebrow}
      </div>
      <h2
        className={`mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl ${inverse ? "text-white" : "text-brand-grey-dark"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 sm:text-lg ${inverse ? "text-white/68" : "text-brand-grey-mid"}`}
      >
        {body}
      </p>
    </div>
  );
}

function PrimaryCta({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="bg-brand-blue inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      {label}
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  );
}

function LightCta({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="text-brand-blue inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  );
}

function HeroSection() {
  const { hero } = content;

  return (
    <section className="demo-components-hero relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="mx-auto grid min-h-[540px] max-w-6xl content-end px-6 py-10 sm:min-h-[660px] sm:py-16 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-12">
        <div>
          <p className="text-sm font-bold text-white/70 uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LightCta {...hero.primaryCta} />
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {hero.secondaryCta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 lg:mt-0">
          <p className="flex gap-3 text-sm leading-6 text-white/72">
            <LockIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
            {hero.privacyNote}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {hero.proof.map((item) => (
              <div
                key={item}
                className="border-l border-white/25 pl-3 text-xs leading-5 font-semibold text-white/76"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentsTableOfContents() {
  const section = content.tableOfContents;

  return (
    <section
      aria-labelledby="component-directory-title"
      className="border-brand-grey-light/20 border-b bg-white py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-7 lg:grid-cols-[0.42fr_1.58fr] lg:items-end">
          <div>
            <p className="text-brand-blue/65 text-xs font-bold tracking-[0.16em] uppercase">
              {section.eyebrow}
            </p>
            <h2
              id="component-directory-title"
              className="text-brand-grey-dark mt-3 text-2xl font-semibold"
            >
              {section.title}
            </h2>
            <p className="text-brand-grey-mid mt-3 text-sm leading-6">
              {section.body}
            </p>
          </div>
          <nav
            aria-label={section.title}
            className="grid grid-cols-3 gap-x-3 gap-y-1 lg:grid-cols-4"
          >
            {section.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-brand-grey-light/25 text-brand-grey-dark hover:border-brand-blue hover:text-brand-blue group flex min-h-12 items-center gap-2 border-b py-3 text-xs font-bold transition sm:gap-3 sm:text-sm"
              >
                <span className="text-brand-blue/45 font-mono text-xs">
                  {item.number}
                </span>
                <span className="min-w-0 flex-1">{item.label}</span>
                <ArrowRightIcon className="hidden h-3.5 w-3.5 shrink-0 opacity-35 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

function PaymentClaritySection() {
  const section = content.paymentClarity;
  const [debt, setDebt] = useState<number>(section.defaults.debt);
  const [payment, setPayment] = useState<number>(section.defaults.payment);
  const possiblePayment = Math.max(125, Math.round((debt * 0.0247) / 10) * 10);
  const breathingRoom = Math.max(0, payment - possiblePayment);
  const maxBar = Math.max(payment, possiblePayment);

  return (
    <section
      id="payment-clarity"
      className="scroll-mt-8 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10">
        <div>
          <SectionHeading {...section} />
          <div className="mt-7 hidden lg:block">
            <PrimaryCta {...section.cta} />
          </div>
        </div>
        <div className="border-brand-grey-light/30 rounded-lg border bg-white p-5 shadow-2xl shadow-black/8 sm:p-7">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <RangeControl
              label={section.debtLabel}
              value={debt}
              formattedValue={currency.format(debt)}
              min={section.ranges.debt.min}
              max={section.ranges.debt.max}
              step={section.ranges.debt.step}
              onChange={setDebt}
            />
            <RangeControl
              label={section.paymentLabel}
              value={payment}
              formattedValue={`${currency.format(payment)}/mo`}
              min={section.ranges.payment.min}
              max={section.ranges.payment.max}
              step={section.ranges.payment.step}
              onChange={setPayment}
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
            <PaymentBar
              label={section.currentLabel}
              amount={payment}
              width={(payment / maxBar) * 100}
              tone="current"
            />
            <PaymentBar
              label={section.possibleLabel}
              amount={possiblePayment}
              width={(possiblePayment / maxBar) * 100}
              tone="possible"
            />
          </div>
          <div
            className="bg-brand-blue mt-4 flex items-center justify-between gap-4 rounded-md px-5 py-4 text-white"
            aria-live="polite"
          >
            <div>
              <p className="text-xs font-bold text-white/60 uppercase">
                {section.reliefLabel}
              </p>
              <p className="mt-1 text-3xl font-semibold">
                {currency.format(breathingRoom)}
                <span className="text-base text-white/65">/mo</span>
              </p>
            </div>
            <SparklesIcon className="h-8 w-8 shrink-0 text-white/80" />
          </div>
          <p className="text-brand-grey-mid mt-4 text-xs leading-5">
            {section.disclaimer}
          </p>
          <div className="mt-6 lg:hidden">
            <PrimaryCta {...section.cta} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RangeControl({
  label,
  value,
  formattedValue,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  formattedValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-brand-grey-mid text-xs font-bold uppercase">
        {label}
      </span>
      <span className="text-brand-grey-dark mt-2 block text-xl font-semibold sm:text-2xl">
        {formattedValue}
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-brand-blue mt-4 h-6 w-full cursor-pointer"
      />
    </label>
  );
}

function PaymentBar({
  label,
  amount,
  width,
  tone,
}: {
  label: string;
  amount: number;
  width: number;
  tone: "current" | "possible";
}) {
  return (
    <div
      className={`rounded-md p-3 sm:p-4 ${tone === "possible" ? "border border-emerald-600/20 bg-emerald-50" : "bg-brand-blue/5"}`}
    >
      <div className="flex items-end justify-between gap-3">
        <p className="text-brand-grey-mid text-[10px] leading-4 font-bold uppercase sm:text-xs">
          {label}
        </p>
        <p className="text-brand-grey-dark text-lg font-semibold sm:text-xl">
          {currency.format(amount)}
        </p>
      </div>
      <div className="bg-brand-grey-light/20 mt-3 h-2 overflow-hidden rounded-sm sm:mt-5">
        <div
          className={`h-full transition-[width] duration-500 ${tone === "possible" ? "bg-emerald-600" : "bg-brand-blue"}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function DebtLoadSection() {
  const section = content.debtLoad;
  const [selected, setSelected] = useState(() =>
    section.accounts.map(() => true),
  );
  const totals = section.accounts.reduce(
    (sum, account, index) => {
      if (selected[index]) {
        sum.balance += account.balance;
        sum.payment += account.payment;
        sum.count += 1;
      }
      return sum;
    },
    { balance: 0, payment: 0, count: 0 },
  );

  function toggleAccount(index: number) {
    setSelected((current) =>
      current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
    );
  }

  return (
    <section id="debt-load" className="bg-brand-blue/5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} />
        <div className="mt-8 grid overflow-hidden rounded-lg border border-white bg-white shadow-2xl shadow-black/8 sm:mt-10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-brand-grey-dark font-semibold">
                {section.accountsLabel}
              </p>
              <button
                type="button"
                onClick={() => setSelected(section.accounts.map(() => true))}
                className="text-brand-blue text-xs font-bold hover:underline"
              >
                {section.selectAllLabel}
              </button>
            </div>
            <div className="sm:divide-brand-grey-light/25 mt-4 grid grid-cols-2 gap-2 sm:block sm:divide-y">
              {section.accounts.map((account, index) => (
                <button
                  key={account.name}
                  type="button"
                  aria-pressed={selected[index]}
                  onClick={() => toggleAccount(index)}
                  className="border-brand-grey-light/25 hover:bg-brand-blue/5 grid min-h-[108px] w-full grid-cols-[20px_1fr] items-start gap-x-2 gap-y-2 rounded-md border p-3 text-left transition sm:flex sm:min-h-0 sm:items-center sm:gap-4 sm:rounded-none sm:border-0 sm:px-2 sm:py-4"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border sm:h-6 sm:w-6 ${selected[index] ? "border-brand-blue bg-brand-blue text-white" : "border-brand-grey-light/60 text-transparent"}`}
                  >
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <CreditCardIcon className="text-brand-blue hidden h-6 w-6 shrink-0 sm:block" />
                  <span className="min-w-0 flex-1">
                    <span className="text-brand-grey-dark block text-xs leading-4 font-bold sm:truncate sm:text-sm">
                      {account.name}
                    </span>
                    <span className="text-brand-grey-mid mt-1 block text-[10px] leading-4 sm:text-xs">
                      {account.apr}% {section.aprLabel} ·{" "}
                      {currency.format(account.payment)}/mo
                    </span>
                  </span>
                  <span className="text-brand-grey-dark col-span-2 text-sm font-semibold sm:col-span-1">
                    {currency.format(account.balance)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-brand-blue flex flex-col justify-between p-6 text-white sm:p-8">
            <div>
              <p className="text-xs font-bold text-white/55 uppercase">
                {section.summaryLabel}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:mt-7 sm:gap-y-7">
                <SummaryMetric
                  label={section.balanceLabel}
                  value={currency.format(totals.balance)}
                />
                <SummaryMetric
                  label={section.paymentLabel}
                  value={`${currency.format(totals.payment)}/mo`}
                />
                <SummaryMetric
                  label={section.datesLabel}
                  value={String(totals.count)}
                />
                <SummaryMetric
                  label={section.averageAprLabel}
                  value={
                    totals.count
                      ? `${(section.accounts.reduce((sum, account, index) => sum + (selected[index] ? account.apr : 0), 0) / totals.count).toFixed(1)}%`
                      : "0%"
                  }
                />
              </div>
              <p className="mt-5 border-t border-white/15 pt-5 text-sm leading-6 text-white/70 sm:mt-8 sm:pt-6">
                {section.insight}
              </p>
            </div>
            <div className="mt-6 sm:mt-8">
              <LightCta {...section.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold text-white/50 uppercase">{label}</p>
      <p className="mt-2 text-xl font-semibold sm:text-2xl">{value}</p>
    </div>
  );
}

function ReliefFinderSection() {
  const section = content.reliefFinder;
  const [answers, setAnswers] = useState<string[]>([]);
  const step = answers.length;
  const isComplete = step === section.questions.length;

  function chooseAnswer(answer: string) {
    setAnswers((current) => [...current, answer]);
  }

  return (
    <section id="relief-finder" className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10">
        <SectionHeading {...section} />
        <div className="border-brand-grey-light/30 overflow-hidden rounded-lg border bg-white shadow-2xl shadow-black/8">
          <div className="bg-brand-blue flex items-center justify-between px-5 py-4 text-white sm:px-7">
            <div
              className="flex gap-2"
              aria-label={`${step} of ${section.questions.length} questions complete`}
            >
              {section.questions.map((question, index) => (
                <span
                  key={question.prompt}
                  className={`h-1.5 w-12 rounded-sm ${index < step ? "bg-white" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setAnswers([])}
              className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white"
            >
              <RotateCcwIcon className="h-4 w-4" />
              {section.restartLabel}
            </button>
          </div>
          <div className="min-h-[390px] p-5 sm:p-8">
            {!isComplete ? (
              <div>
                <p className="text-brand-blue text-xs font-bold uppercase">
                  {section.stepLabel} {step + 1} / {section.questions.length}
                </p>
                <h3 className="text-brand-grey-dark mt-4 text-2xl font-semibold sm:text-3xl">
                  {section.questions[step].prompt}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:gap-3">
                  {section.questions[step].options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => chooseAnswer(option)}
                      className="border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue hover:bg-brand-blue/5 group flex min-h-16 items-center justify-between gap-2 rounded-md border px-3 text-left text-xs leading-5 font-bold transition sm:min-h-14 sm:px-4 sm:text-sm"
                    >
                      {option}
                      <ArrowRightIcon className="text-brand-blue h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
                {answers.length > 0 ? (
                  <p className="text-brand-grey-mid mt-6 text-sm">
                    {answers.join(" · ")}
                  </p>
                ) : null}
              </div>
            ) : (
              <div aria-live="polite">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <p className="text-brand-blue mt-6 text-xs font-bold uppercase">
                  {section.result.eyebrow}
                </p>
                <h3 className="text-brand-grey-dark mt-3 text-3xl font-semibold">
                  {section.result.title}
                </h3>
                <p className="text-brand-grey-mid mt-4 max-w-2xl leading-7">
                  {section.result.body}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {section.result.points.map((point) => (
                    <p
                      key={point}
                      className="flex items-start gap-1.5 text-xs leading-5 font-semibold sm:items-center sm:gap-2 sm:text-sm"
                    >
                      <CheckIcon className="text-brand-blue h-4 w-4" />
                      {point}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryCta {...section.cta} />
                  <a
                    href={section.callCta.href}
                    className="border-brand-blue/25 text-brand-blue inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-bold"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {section.callCta.label}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function OnePaymentSection() {
  const section = content.onePayment;
  const [simplified, setSimplified] = useState(false);
  const [targetPayment, setTargetPayment] = useState<number>(
    section.possibleTotal,
  );
  const simplifiedPayment = {
    ...section.simplifiedPayment,
    amount: targetPayment,
  };
  const visiblePayments = simplified ? [simplifiedPayment] : section.payments;
  const total = simplified ? targetPayment : section.currentTotal;
  const monthlyDifference = section.currentTotal - targetPayment;

  return (
    <section
      id="one-payment"
      className="bg-brand-grey-dark py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading {...section} inverse />
          <div
            className="inline-flex w-fit rounded-md bg-white/8 p-1"
            role="group"
            aria-label="Payment view"
          >
            {[false, true].map((value) => (
              <button
                key={String(value)}
                type="button"
                aria-pressed={simplified === value}
                onClick={() => setSimplified(value)}
                className={`min-h-10 rounded-sm px-4 text-sm font-bold transition ${simplified === value ? "text-brand-grey-dark bg-white shadow" : "text-white/62 hover:text-white"}`}
              >
                {value ? section.toggleAfter : section.toggleBefore}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white/65">
                {section.monthLabel}
              </p>
              <p className="text-2xl font-semibold" aria-live="polite">
                {currency.format(total)}
                <span className="text-sm text-white/50">/mo</span>
              </p>
            </div>
            <div className="mt-9 grid grid-cols-7 gap-1.5 sm:gap-2">
              {Array.from({ length: 28 }, (_, index) => {
                const day = index + 1;
                const paymentItem = visiblePayments.find(
                  (payment) => payment.day === day,
                );
                return (
                  <div
                    key={day}
                    className={`relative aspect-square rounded-sm border text-center text-[10px] transition-all duration-500 sm:text-xs ${paymentItem ? (simplified ? "text-brand-grey-dark scale-105 border-emerald-400 bg-emerald-400 shadow-lg shadow-emerald-400/20" : "text-brand-grey-dark border-white bg-white") : "border-white/10 text-white/35"}`}
                  >
                    <span className="absolute top-1 left-1.5">{day}</span>
                    {paymentItem ? (
                      <span className="absolute inset-x-0 bottom-1 truncate px-1 font-bold">
                        {currency.format(paymentItem.amount)}
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <label className="mt-7 block border-t border-white/12 pt-6">
              <span className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold text-white/58 uppercase">
                  {section.targetLabel}
                </span>
                <span className="text-lg font-semibold">
                  {currency.format(targetPayment)}
                </span>
              </span>
              <input
                type="range"
                min={section.targetRange.min}
                max={section.targetRange.max}
                step={section.targetRange.step}
                value={targetPayment}
                onChange={(event) => {
                  setTargetPayment(Number(event.target.value));
                  setSimplified(true);
                }}
                className="mt-3 h-6 w-full cursor-pointer accent-emerald-400"
              />
              <span className="mt-2 block text-xs leading-5 text-white/48">
                {section.targetHelp}
              </span>
            </label>
          </div>
          <div
            className={`flex flex-col justify-between rounded-lg p-6 transition-colors duration-500 sm:p-8 ${simplified ? "text-brand-grey-dark bg-emerald-50" : "text-brand-grey-dark bg-white"}`}
          >
            <div>
              <CalendarIcon
                className={`h-8 w-8 ${simplified ? "text-emerald-700" : "text-brand-blue"}`}
              />
              <p className="text-brand-grey-mid mt-7 text-xs font-bold uppercase">
                {simplified ? section.afterLabel : section.beforeLabel}
              </p>
              <p className="mt-3 text-4xl font-semibold">
                {visiblePayments.length}
              </p>
              <p className="text-brand-grey-mid mt-1 text-sm">
                {visiblePayments.length === 1
                  ? section.paymentDateLabel
                  : section.paymentDatesLabel}
              </p>
              <p className="mt-6 text-lg leading-7 font-semibold">
                {simplified ? section.benefitPrefix : section.currentBenefit}
              </p>
              {simplified ? (
                <div className="mt-6 border-t border-emerald-700/15 pt-5">
                  <p className="text-xs font-bold text-emerald-800 uppercase">
                    {section.differenceLabel}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-800">
                    {currency.format(monthlyDifference)}
                    <span className="text-sm font-medium">/mo</span>
                  </p>
                </div>
              ) : null}
            </div>
            <div className="mt-8">
              <PrimaryCta {...section.cta} />
            </div>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-5 text-white/48">
          {section.disclaimer}
        </p>
      </div>
    </section>
  );
}

function CreditConfidenceSection() {
  const section = content.creditConfidence;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [reviewSignals, setReviewSignals] = useState(() =>
    section.reviewSignals.map(() => false),
  );
  const selectedRange = section.ranges[selectedIndex];
  const selectedSignalCount = reviewSignals.filter(Boolean).length;

  function toggleReviewSignal(index: number) {
    setReviewSignals((current) =>
      current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
    );
  }

  return (
    <section id="credit-confidence" className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10">
        <SectionHeading {...section} />
        <div className="border-brand-grey-light/30 rounded-lg border bg-white p-5 shadow-2xl shadow-black/8 sm:p-7">
          <p className="text-brand-grey-mid text-xs font-bold uppercase">
            {section.rangeLabel}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {section.ranges.map((range, index) => (
              <button
                key={range.label}
                type="button"
                aria-pressed={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                className={`min-h-14 rounded-md border px-2.5 text-left transition sm:px-3 ${selectedIndex === index ? "border-brand-blue bg-brand-blue text-white shadow-md" : "border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue bg-white"}`}
              >
                <span className="block text-sm font-bold">{range.label}</span>
                <span
                  className={`mt-1 block text-xs ${selectedIndex === index ? "text-white/62" : "text-brand-grey-mid"}`}
                >
                  {range.score}
                </span>
              </button>
            ))}
          </div>
          <div className="border-brand-grey-light/25 mt-7 border-t pt-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-brand-grey-dark text-sm font-bold">
                  {section.contextLabel}
                </p>
                <p className="text-brand-grey-mid mt-1 max-w-2xl text-xs leading-5">
                  {section.contextBody}
                </p>
              </div>
              <p className="text-brand-blue shrink-0 text-xs font-bold">
                {selectedSignalCount}/{section.reviewSignals.length}{" "}
                {section.contextProgressLabel}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {section.reviewSignals.map((signal, index) => (
                <button
                  key={signal}
                  type="button"
                  aria-pressed={reviewSignals[index]}
                  onClick={() => toggleReviewSignal(index)}
                  className={`flex min-h-14 items-center gap-2 rounded-md border px-3 text-left text-xs leading-4 font-semibold transition sm:min-h-12 sm:gap-3 sm:px-4 sm:text-sm ${reviewSignals[index] ? "border-brand-blue bg-brand-blue/5 text-brand-blue" : "border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue bg-white"}`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${reviewSignals[index] ? "border-brand-blue bg-brand-blue text-white" : "border-brand-grey-light/60"}`}
                  >
                    {reviewSignals[index] ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : null}
                  </span>
                  {signal}
                </button>
              ))}
            </div>
            <div
              className="bg-brand-blue/5 mt-3 rounded-md px-4 py-3"
              aria-live="polite"
            >
              <div className="bg-brand-blue/10 h-1.5 overflow-hidden rounded-sm">
                <div
                  className="bg-brand-blue h-full transition-[width] duration-300"
                  style={{
                    width: `${(selectedSignalCount / section.reviewSignals.length) * 100}%`,
                  }}
                />
              </div>
              <p className="text-brand-grey-mid mt-2 text-xs leading-5 font-semibold">
                {selectedSignalCount >= 2
                  ? section.contextReady
                  : section.contextStart}
              </p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-[auto_1fr] items-center gap-4 sm:mt-8 sm:gap-6">
            <div
              className="demo-score-ring"
              style={
                {
                  "--score-progress": `${selectedRange.progress}%`,
                } as React.CSSProperties
              }
              aria-label={`${selectedRange.label} confidence range`}
            >
              <GaugeIcon className="h-8 w-8" />
              <span>{selectedRange.label}</span>
            </div>
            <div aria-live="polite">
              <h3 className="text-brand-grey-dark text-xl font-semibold sm:text-2xl">
                {section.responseTitle}
              </h3>
              <p className="text-brand-grey-mid mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7">
                {section.responseBody}
              </p>
            </div>
          </div>
          <div className="border-brand-grey-light/25 mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-6 sm:grid-cols-4">
            {section.factors.map((factor) => (
              <p
                key={factor}
                className="text-brand-grey-dark flex items-center gap-2 text-xs font-bold"
              >
                <CheckIcon className="text-brand-blue h-4 w-4" />
                {factor}
              </p>
            ))}
          </div>
          <div className="mt-7">
            <PrimaryCta {...section.cta} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BreathingRoomSection() {
  const section = content.breathingRoom;
  const [income, setIncome] = useState<number>(section.defaults.income);
  const [essentials, setEssentials] = useState<number>(
    section.defaults.essentials,
  );
  const [payment, setPayment] = useState<number>(section.defaults.payment);
  const [possiblePayment, setPossiblePayment] = useState<number>(
    section.defaults.possiblePayment,
  );
  const currentRemaining = income - essentials - payment;
  const possibleRemaining = income - essentials - possiblePayment;
  const roomDifference = possibleRemaining - currentRemaining;
  const isPositive = possibleRemaining > 0;

  return (
    <section id="breathing-room" className="bg-brand-blue/5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} />
        <div className="mt-10 grid overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid grid-cols-2 gap-3 p-5 sm:gap-5 sm:p-7 lg:grid-cols-1">
            <NumberField
              label={section.incomeLabel}
              value={income}
              onChange={setIncome}
            />
            <NumberField
              label={section.essentialsLabel}
              value={essentials}
              onChange={setEssentials}
            />
            <NumberField
              label={section.debtPaymentLabel}
              value={payment}
              onChange={setPayment}
            />
            <NumberField
              label={section.afterLabel}
              value={possiblePayment}
              onChange={setPossiblePayment}
            />
          </div>
          <div className="bg-brand-blue flex flex-col justify-between p-6 text-white sm:p-8">
            <div>
              <WalletCardsIcon className="h-8 w-8 text-white/75" />
              <div className="mt-8 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase">
                    {section.currentLabel}
                  </p>
                  <p className="mt-2 text-3xl font-semibold">
                    {currency.format(currentRemaining)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase">
                    {section.possibleLabel}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-300">
                    {currency.format(possibleRemaining)}
                  </p>
                </div>
              </div>
              <div
                className="mt-8 border-t border-white/15 pt-6"
                aria-live="polite"
              >
                <p className="text-4xl font-semibold">
                  {roomDifference >= 0 ? "+" : ""}
                  {currency.format(roomDifference)}
                  <span className="text-base text-white/55">/mo</span>
                </p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/68">
                  {isPositive ? section.statusPositive : section.statusTight}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <LightCta {...section.cta} />
            </div>
          </div>
        </div>
        <p className="text-brand-grey-mid mt-4 max-w-3xl text-xs leading-5">
          {section.disclaimer}
        </p>
      </div>
    </section>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-brand-grey-mid text-[10px] leading-4 font-bold uppercase sm:text-xs">
        {label}
      </span>
      <span className="border-brand-grey-light/40 focus-within:border-brand-blue mt-2 flex min-h-12 items-center rounded-md border px-3 transition sm:px-4">
        <span className="text-brand-grey-mid mr-2">$</span>
        <input
          type="number"
          min="0"
          step="50"
          value={value}
          onChange={(event) =>
            onChange(Math.max(0, Number(event.target.value)))
          }
          className="text-brand-grey-dark min-w-0 flex-1 bg-transparent text-base font-semibold outline-none sm:text-lg"
        />
      </span>
    </label>
  );
}

function TimelineSection() {
  const section = content.timeline;
  const [activeStep, setActiveStep] = useState(0);
  const active = section.steps[activeStep];

  return (
    <section id="relief-timeline" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} />
        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="before:bg-brand-grey-light/35 relative grid grid-cols-2 gap-2 before:absolute before:top-6 before:bottom-6 before:left-[23px] before:hidden before:w-px sm:grid-cols-1 sm:before:block">
            {section.steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
                className={`relative z-10 grid min-h-[78px] grid-cols-[36px_1fr] items-center gap-2 rounded-md p-2 text-left transition sm:min-h-20 sm:grid-cols-[48px_1fr_auto] sm:gap-3 sm:px-3 sm:py-3 ${activeStep === index ? "bg-brand-blue/5" : "hover:bg-brand-blue/[0.025]"}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition sm:h-12 sm:w-12 sm:text-sm ${activeStep === index ? "border-brand-blue bg-brand-blue text-white" : "border-brand-grey-light/40 text-brand-grey-mid bg-white"}`}
                >
                  {index + 1}
                </span>
                <span>
                  <span className="text-brand-grey-dark block text-xs leading-4 font-bold sm:text-base sm:leading-normal">
                    {step.title}
                  </span>
                  <span className="text-brand-grey-mid mt-1 block text-[10px] sm:text-sm">
                    {step.time}
                  </span>
                </span>
                <ArrowRightIcon
                  className={`hidden h-4 w-4 transition sm:block ${activeStep === index ? "text-brand-blue translate-x-0.5" : "text-brand-grey-light"}`}
                />
              </button>
            ))}
          </div>
          <div
            className="bg-brand-grey-dark flex flex-col justify-between rounded-lg p-5 text-white shadow-2xl sm:p-8 lg:min-h-[470px]"
            aria-live="polite"
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white/50 uppercase">
                  {section.stepLabel} {activeStep + 1}
                </p>
                <ClockIcon className="h-6 w-6 text-white/60" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {section.steps.map((step, index) => (
                  <span
                    key={step.title}
                    className={`h-1.5 rounded-sm transition ${index <= activeStep ? "bg-white" : "bg-white/15"}`}
                  />
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-semibold sm:mt-8 sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-white/70 sm:mt-4 sm:text-lg sm:leading-8">
                {active.body}
              </p>
              <p className="mt-4 border-l-2 border-emerald-400 pl-4 text-sm leading-6 text-white/75 sm:mt-7">
                {active.note}
              </p>
              <div className="mt-5 divide-y divide-white/10 border-y border-white/10 sm:mt-7">
                <TimelineDetail
                  label={section.youShareLabel}
                  body={active.youShare}
                />
                <TimelineDetail
                  label={section.riverReliefLabel}
                  body={active.riverRelief}
                />
                <TimelineDetail
                  label={section.yourControlLabel}
                  body={active.yourControl}
                />
              </div>
            </div>
            <div className="mt-6 flex gap-2 sm:mt-8 sm:gap-3">
              {activeStep > 0 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((current) => current - 1)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-white/20 px-3 text-sm font-bold text-white transition hover:bg-white/8 sm:flex-none sm:px-5"
                >
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                  {section.previousLabel}
                </button>
              ) : null}
              {activeStep < section.steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((current) => current + 1)}
                  className="text-brand-grey-dark inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-white px-3 text-sm font-bold shadow-lg sm:flex-none sm:px-5"
                >
                  {section.nextLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              ) : (
                <LightCta {...section.cta} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDetail({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid grid-cols-[0.34fr_0.66fr] gap-3 py-3 sm:gap-4">
      <p className="text-xs font-bold text-white/45 uppercase">{label}</p>
      <p className="text-sm leading-6 text-white/72">{body}</p>
    </div>
  );
}

function TrustArchitectureSection() {
  const section = content.trustArchitecture;
  const [activeIndex, setActiveIndex] = useState(0);
  const [preferences, setPreferences] = useState(() =>
    section.preferences.map((_, index) => index < 2),
  );
  const selectedPreferenceCount = preferences.filter(Boolean).length;

  function togglePreference(index: number) {
    setPreferences((current) =>
      current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
    );
  }

  return (
    <section
      id="trust-architecture"
      className="bg-brand-blue py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} inverse />
        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-3 lg:grid-cols-4">
          {section.principles.map((principle, index) => (
            <button
              key={principle.title}
              type="button"
              aria-expanded={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`min-h-28 rounded-md border p-4 text-left transition sm:p-5 ${activeIndex === index ? "text-brand-grey-dark border-white bg-white shadow-xl" : "border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`}
            >
              <span className="flex items-start justify-between gap-4">
                <LockIcon
                  className={`h-5 w-5 ${activeIndex === index ? "text-brand-blue" : "text-white/55"}`}
                />
                <span
                  className={`text-xs font-bold ${activeIndex === index ? "text-brand-blue/50" : "text-white/35"}`}
                >
                  0{index + 1}
                </span>
              </span>
              <span className="mt-4 block text-sm font-bold sm:mt-6 sm:text-base">
                {principle.title}
              </span>
              <span
                className={`mt-2 block text-xs leading-5 sm:text-sm sm:leading-6 ${activeIndex === index ? "text-brand-grey-mid" : "text-white/55"}`}
              >
                {principle.short}
              </span>
            </button>
          ))}
        </div>
        <div
          className="mt-4 rounded-lg border border-white/15 bg-white/[0.04] p-6 sm:p-8"
          aria-live="polite"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xl leading-8 font-semibold">
                {section.principles[activeIndex].body}
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm text-white/62">
                <ShieldCheckIcon className="h-5 w-5 shrink-0" />
                {section.trustLine}
              </p>
              <div className="mt-7">
                <LightCta {...section.cta} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold">{section.preferencesLabel}</p>
                <p className="text-xs font-bold text-white/48">
                  {selectedPreferenceCount}/{section.preferences.length}
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {section.preferences.map((preference, index) => (
                  <button
                    key={preference}
                    type="button"
                    aria-pressed={preferences[index]}
                    onClick={() => togglePreference(index)}
                    className={`flex min-h-14 items-center gap-2 rounded-md border px-3 text-left text-xs leading-4 font-semibold transition sm:min-h-12 sm:gap-3 sm:px-4 sm:text-sm ${preferences[index] ? "text-brand-grey-dark border-white bg-white" : "border-white/15 bg-white/[0.03] text-white/68 hover:bg-white/[0.08]"}`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${preferences[index] ? "border-brand-blue bg-brand-blue text-white" : "border-white/25"}`}
                    >
                      {preferences[index] ? (
                        <CheckIcon className="h-3.5 w-3.5" />
                      ) : null}
                    </span>
                    {preference}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/62">
                {selectedPreferenceCount >= 3
                  ? section.preferencesReady
                  : section.preferencesStart}
              </p>
              <p className="mt-2 text-xs font-bold text-emerald-300">
                {selectedPreferenceCount} {section.preferencesCountLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScenariosSection() {
  const section = content.scenarios;
  const [activeIndex, setActiveIndex] = useState(0);
  const [priorityIndex, setPriorityIndex] = useState(0);
  const scenario = section.scenarios[activeIndex];
  const priority = section.priorities[priorityIndex];

  return (
    <section id="scenarios" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} />
        <p className="text-brand-grey-mid mt-7 text-xs font-bold uppercase sm:mt-9">
          {section.chooseLabel}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {section.scenarios.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`min-h-24 rounded-md border p-3 text-left transition sm:min-h-32 sm:p-5 ${activeIndex === index ? "border-brand-blue bg-brand-blue text-white shadow-xl" : "border-brand-grey-light/30 text-brand-grey-dark hover:border-brand-blue bg-white"}`}
            >
              <span className="block text-xs leading-4 font-bold sm:text-lg sm:leading-normal">
                {item.title}
              </span>
              <span
                className={`mt-3 hidden text-sm leading-6 sm:block ${activeIndex === index ? "text-white/65" : "text-brand-grey-mid"}`}
              >
                {item.short}
              </span>
            </button>
          ))}
        </div>
        <div
          className="bg-brand-blue/5 mt-4 grid gap-6 rounded-lg p-5 sm:gap-8 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center"
          aria-live="polite"
        >
          <div>
            <p className="text-brand-blue text-xs font-bold uppercase">
              {section.outcomeLabel}
            </p>
            <p className="text-brand-grey-dark mt-3 text-2xl font-semibold sm:text-3xl">
              {scenario.focus}
            </p>
            <p className="text-brand-grey-mid mt-4 leading-7">
              {scenario.body}
            </p>
            <p className="text-brand-grey-mid mt-5 text-xs font-bold uppercase sm:mt-7">
              {section.priorityLabel}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {section.priorities.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={priorityIndex === index}
                  onClick={() => setPriorityIndex(index)}
                  className={`flex min-h-16 items-center justify-center gap-2 rounded-md border px-2 text-center text-xs leading-4 font-bold transition sm:min-h-11 sm:justify-between sm:px-4 sm:text-left sm:text-sm ${priorityIndex === index ? "border-brand-blue bg-brand-blue text-white" : "border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue bg-white"}`}
                >
                  {item.label}
                  {priorityIndex === index ? (
                    <CheckIcon className="hidden h-4 w-4 shrink-0 sm:block" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="border-brand-blue/15 mb-4 rounded-md border bg-white p-5">
              <p className="text-brand-blue text-xs font-bold uppercase">
                {section.priorityResultLabel}
              </p>
              <p className="text-brand-grey-dark mt-2 font-bold">
                {priority.label}
              </p>
              <p className="text-brand-grey-mid mt-2 text-sm leading-6">
                {priority.guidance}
              </p>
            </div>
            <div className="grid gap-3">
              {scenario.questions.map((question, index) => (
                <p
                  key={question}
                  className="border-brand-grey-light/30 flex min-h-14 items-center gap-4 rounded-md border bg-white px-4 text-sm font-semibold"
                >
                  <span className="text-brand-blue font-mono text-xs">
                    0{index + 1}
                  </span>
                  {question}
                </p>
              ))}
            </div>
            <div className="mt-6">
              <PrimaryCta {...section.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvisorSection() {
  const section = content.advisor;
  const [topic, setTopic] = useState<string>(section.topics[0]);
  const [channel, setChannel] = useState<string>(section.channels[0]);
  const summary =
    channel === section.channels[0]
      ? section.callSummary
      : channel === section.channels[1]
        ? section.onlineSummary
        : section.readingSummary;
  const cta =
    channel === section.channels[0]
      ? section.callCta
      : channel === section.channels[1]
        ? section.onlineCta
        : section.readingCta;

  return (
    <section id="advisor" className="bg-brand-blue/5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading {...section} />
        <div className="mt-8 grid overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/10 sm:mt-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="bg-brand-grey-dark flex flex-col justify-between p-5 text-white sm:p-8">
            <div>
              <div className="flex items-center gap-4">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <UserIcon className="h-7 w-7" />
                  <span className="border-brand-grey-dark absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 bg-emerald-400" />
                </span>
                <div>
                  <p className="font-bold">{section.advisorName}</p>
                  <p className="mt-1 text-sm text-white/55">
                    {section.advisorRole}
                  </p>
                </div>
              </div>
              <p className="mt-2 ml-[72px] flex items-center gap-2 text-xs font-semibold text-emerald-300 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {section.status}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-white/12 pt-4 sm:mt-8 sm:pt-6 lg:mt-12 lg:block">
              <HandHeartIcon className="h-6 w-6 shrink-0 text-white/55 sm:h-7 sm:w-7" />
              <p className="text-xs leading-5 text-white/65 sm:text-sm sm:leading-6 lg:mt-4">
                {section.reassurance}
              </p>
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <ChoiceGroup
              label={section.topicLabel}
              options={section.topics}
              selected={topic}
              onSelect={setTopic}
              icon="message"
            />
            <div className="mt-6 sm:mt-8">
              <ChoiceGroup
                label={section.channelLabel}
                options={section.channels}
                selected={channel}
                onSelect={setChannel}
                icon="channel"
              />
            </div>
            <div
              className="border-brand-grey-light/30 bg-brand-blue/5 mt-6 rounded-md border p-5 sm:mt-8"
              aria-live="polite"
            >
              <p className="text-brand-blue text-xs font-bold uppercase">
                {section.nextStepLabel}
              </p>
              <p className="text-brand-grey-dark mt-3 text-lg font-bold">
                {topic}
              </p>
              <p className="text-brand-grey-mid mt-2 text-sm leading-6">
                {summary}
              </p>
              <div className="mt-5">
                <PrimaryCta {...cta} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({
  label,
  options,
  selected,
  onSelect,
  icon,
}: {
  label: string;
  options: readonly string[];
  selected: string;
  onSelect: (value: string) => void;
  icon: "message" | "channel";
}) {
  return (
    <fieldset>
      <legend className="text-brand-grey-dark text-sm font-bold">
        {label}
      </legend>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {options.map((option, index) => {
          const Icon =
            icon === "message"
              ? [MessageCircleIcon, SlidersHorizontalIcon, GaugeIcon][index]
              : [PhoneIcon, LockIcon, CreditCardIcon][index];
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected === option}
              onClick={() => onSelect(option)}
              className={`min-h-24 min-w-0 rounded-md border p-2 text-center transition sm:p-4 sm:text-left ${selected === option ? "border-brand-blue bg-brand-blue text-white shadow-md" : "border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue bg-white"}`}
            >
              <Icon className="mx-auto h-5 w-5 sm:mx-0" />
              <span className="mt-3 block text-[11px] leading-4 font-bold break-words sm:text-sm">
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function DemoComponentsPage() {
  return (
    <>
      <HeroSection />
      <ComponentsTableOfContents />
      <PaymentClaritySection />
      <DebtLoadSection />
      <ReliefFinderSection />
      <OnePaymentSection />
      <CreditConfidenceSection />
      <BreathingRoomSection />
      <TimelineSection />
      <TrustArchitectureSection />
      <ScenariosSection />
      <AdvisorSection />
      <SpecialistChatDemo />
    </>
  );
}
