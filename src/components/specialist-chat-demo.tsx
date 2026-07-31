"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
  MessageCircleIcon,
  RotateCcwIcon,
  UserIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const chatContent = siteConfig.demoComponents.specialistChat;

export function SpecialistChatDemo() {
  const [selectedIssueId, setSelectedIssueId] = useState<string>("");
  const [streamedMessage, setStreamedMessage] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const selectedIssue = chatContent.issues.find(
    (issue) => issue.id === selectedIssueId,
  );

  useEffect(() => {
    if (!selectedIssueId || !isStreaming) {
      return;
    }

    const issue = chatContent.issues.find(
      (item) => item.id === selectedIssueId,
    );
    if (!issue) {
      return;
    }

    const words = issue.response.split(" ");
    let wordIndex = 0;

    const intervalId = window.setInterval(() => {
      wordIndex += 1;
      setStreamedMessage(words.slice(0, wordIndex).join(" "));

      if (wordIndex >= words.length) {
        window.clearInterval(intervalId);
        setIsStreaming(false);
        setIsComplete(true);
      }
    }, 38);

    return () => window.clearInterval(intervalId);
  }, [isStreaming, selectedIssueId]);

  function chooseIssue(issueId: string) {
    const issue = chatContent.issues.find((item) => item.id === issueId);
    if (!issue) {
      return;
    }

    setSelectedIssueId(issueId);
    setStreamedMessage("");
    setIsComplete(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStreamedMessage(issue.response);
      setIsStreaming(false);
      setIsComplete(true);
      return;
    }

    setIsStreaming(true);
  }

  function resetChat() {
    setSelectedIssueId("");
    setStreamedMessage("");
    setIsStreaming(false);
    setIsComplete(false);
  }

  return (
    <section
      id="specialist-chat"
      className="bg-brand-grey-dark scroll-mt-8 py-12 text-white sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-10">
        <div className="max-w-xl lg:pt-8">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-white/65 uppercase">
            <span className="font-mono">{chatContent.number}</span>
            <span className="h-px w-8 bg-white/25" />
            {chatContent.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            {chatContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
            {chatContent.body}
          </p>
          <p className="mt-7 flex gap-3 border-t border-white/12 pt-6 text-xs leading-5 text-white/48">
            <LockIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {chatContent.disclosure}
          </p>
        </div>

        <div className="text-brand-grey-dark overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/30">
          <div className="bg-brand-blue flex items-center justify-between gap-4 px-5 py-4 text-white sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <UserIcon className="h-5 w-5" />
                <span className="border-brand-blue absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-emerald-400" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">
                  {chatContent.specialistName}
                </p>
                <p className="mt-0.5 truncate text-xs text-white/58">
                  {chatContent.specialistRole}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-emerald-300">
                {chatContent.specialistStatus}
              </p>
              <p className="mt-1 text-[10px] text-white/45">
                {chatContent.previewBadge}
              </p>
            </div>
          </div>

          <div className="bg-brand-blue/[0.035] min-h-[390px] p-4 sm:p-6">
            <div className="flex items-end gap-3">
              <span className="bg-brand-blue flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                <MessageCircleIcon className="h-4 w-4" />
              </span>
              <p className="border-brand-grey-light/25 max-w-[88%] rounded-lg rounded-bl-sm border bg-white px-4 py-3 text-sm leading-6 shadow-sm">
                {chatContent.welcome}
              </p>
            </div>

            {!selectedIssue ? (
              <div className="mt-7">
                <p className="text-brand-grey-mid text-xs font-bold uppercase">
                  {chatContent.issueLabel}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {chatContent.issues.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => chooseIssue(issue.id)}
                      className="border-brand-grey-light/35 text-brand-grey-dark hover:border-brand-blue hover:bg-brand-blue/5 group flex min-h-20 items-center justify-between gap-2 rounded-md border bg-white px-3 text-left text-xs leading-5 font-bold transition sm:min-h-14 sm:px-4 sm:text-sm"
                    >
                      {issue.label}
                      <ArrowRightIcon className="text-brand-blue h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <div className="flex justify-end">
                  <p className="bg-brand-blue max-w-[88%] rounded-lg rounded-br-sm px-4 py-3 text-sm leading-6 text-white shadow-sm">
                    {selectedIssue.userMessage}
                  </p>
                </div>

                <div className="mt-4 flex items-end gap-3">
                  <span className="bg-brand-blue flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                    <MessageCircleIcon className="h-4 w-4" />
                  </span>
                  <div className="border-brand-grey-light/25 max-w-[88%] rounded-lg rounded-bl-sm border bg-white px-4 py-3 text-sm leading-6 shadow-sm">
                    {streamedMessage ? (
                      <p aria-live={isComplete ? "polite" : "off"}>
                        {streamedMessage}
                        {isStreaming ? (
                          <span className="text-brand-blue ml-1 inline-block animate-pulse font-bold">
                            |
                          </span>
                        ) : null}
                      </p>
                    ) : (
                      <p
                        className="text-brand-grey-mid flex items-center gap-2"
                        aria-live="polite"
                      >
                        {chatContent.typingLabel}
                        <span className="flex gap-1" aria-hidden="true">
                          {[0, 1, 2].map((dot) => (
                            <span
                              key={dot}
                              className="bg-brand-blue h-1.5 w-1.5 animate-bounce rounded-full"
                              style={{ animationDelay: `${dot * 120}ms` }}
                            />
                          ))}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                {isComplete ? (
                  <div
                    className="border-brand-blue/15 bg-brand-blue/5 mt-5 rounded-md border p-5"
                    aria-live="polite"
                  >
                    <p className="text-brand-blue text-xs font-bold uppercase">
                      {selectedIssue.takeawayTitle}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {selectedIssue.takeaways.map((takeaway) => (
                        <p
                          key={takeaway}
                          className="text-brand-grey-dark flex flex-col gap-1.5 text-[11px] leading-4 font-semibold sm:flex-row sm:gap-2 sm:text-xs sm:leading-5"
                        >
                          <CheckIcon className="text-brand-blue mt-0.5 h-4 w-4 shrink-0" />
                          {takeaway}
                        </p>
                      ))}
                    </div>
                    <div className="border-brand-grey-light/25 mt-5 border-t pt-5">
                      <h3 className="text-brand-grey-dark text-xl font-semibold">
                        {chatContent.nextStepTitle}
                      </h3>
                      <p className="text-brand-grey-mid mt-2 text-sm leading-6">
                        {chatContent.nextStepBody}
                      </p>
                      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                        <a
                          href={chatContent.qualifyCta.href}
                          className="bg-brand-blue inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                        >
                          {chatContent.qualifyCta.label}
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                        <button
                          type="button"
                          onClick={resetChat}
                          className="border-brand-blue/20 text-brand-blue inline-flex min-h-12 items-center justify-center gap-2 rounded-md border bg-white px-5 text-sm font-bold"
                        >
                          <RotateCcwIcon className="h-4 w-4" />
                          {chatContent.anotherTopicLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
