import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function TrustBadges({
  theme = "light",
  compact = false,
}: {
  theme?: "light" | "dark";
  compact?: boolean;
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`grid grid-cols-3 items-center gap-2 ${
        compact ? "max-w-sm" : "max-w-xl"
      }`}
      aria-label="River Relief trust badges"
    >
      {siteConfig.trust.badges.map((badge) => (
        <div
          key={badge.src}
          className={`flex min-h-12 items-center justify-center rounded-md px-2 py-1.5 ${
            isDark
              ? "bg-white shadow-sm"
              : "border-brand-grey-light/25 border bg-white shadow-sm"
          }`}
        >
          <Image
            src={badge.src}
            alt={badge.alt}
            width={150}
            height={48}
            className={`${compact ? "max-h-9" : "max-h-11"} w-auto object-contain`}
          />
        </div>
      ))}
    </div>
  );
}
