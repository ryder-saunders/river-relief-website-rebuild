"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";

const calendlyEventNames: Record<string, string> = {
  "calendly.profile_page_viewed": "Calendly Profile Viewed",
  "calendly.event_type_viewed": "Calendly Event Type Viewed",
  "calendly.date_and_time_selected": "Calendly Date Time Selected",
  "calendly.event_scheduled": "Calendly Event Scheduled",
};

export function CalendlyAnalytics({ location }: { location: string }) {
  const pathname = usePathname();

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.origin !== "https://calendly.com" ||
        typeof event.data !== "object" ||
        event.data === null
      ) {
        return;
      }

      const calendlyEvent = event.data.event;

      if (
        typeof calendlyEvent !== "string" ||
        !calendlyEvent.startsWith("calendly.")
      ) {
        return;
      }

      track(calendlyEventNames[calendlyEvent] ?? "Calendly Widget Event", {
        calendly_event: calendlyEvent,
        conversion_type:
          calendlyEvent === "calendly.event_scheduled"
            ? "calendly_scheduled"
            : "calendly_interaction",
        location,
        page_path: pathname,
      });
    }

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [location, pathname]);

  return null;
}
