"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function FunnelHeader() {
  return (
    <header className="bg-brand-blue text-white">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-center px-6 py-3">
        <Link href="/" aria-label={siteConfig.orgName}>
          <Image
            src="/brand/logo-white.png"
            alt={siteConfig.orgName}
            width={168}
            height={42}
            priority
            className="h-11 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
