"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FunnelHeader } from "@/components/funnel-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

const funnelRoutes = new Set(["/qualify", "/review-complete"]);

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFunnelRoute = funnelRoutes.has(pathname);

  return (
    <>
      {isFunnelRoute ? <FunnelHeader /> : <SiteHeader />}
      <main className="flex-1">{children}</main>
      <SiteFooter />
      {!isFunnelRoute && <StickyMobileCta />}
    </>
  );
}
