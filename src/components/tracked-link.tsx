"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isValidElement } from "react";
import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import type { ConversionType } from "@/lib/analytics-events";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  conversionType: ConversionType;
  location: string;
};

const eventNames: Record<ConversionType, string> = {
  book_call: "Book Call CTA Clicked",
  call: "Phone CTA Clicked",
  contact: "Contact CTA Clicked",
  qualify: "Qualify CTA Clicked",
  return_home: "Return Home CTA Clicked",
};

export function TrackedLink({
  children,
  conversionType,
  href,
  location,
  onClick,
  ...props
}: TrackedLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event);

        track(eventNames[conversionType], {
          conversion_type: conversionType,
          cta_label: textFromChildren(children),
          href: href?.toString() ?? "",
          location,
          page_path: pathname,
        });
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(textFromChildren).join(" ").replace(/\s+/g, " ").trim();
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return textFromChildren(children.props.children);
  }

  return "";
}
