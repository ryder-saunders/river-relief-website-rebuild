"use client";

import { useState } from "react";
import { ArrowRightIcon, MenuIcon, PhoneIcon, XIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white"
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={close}
          className="fixed inset-0 z-50 bg-black/45"
        />
      )}

      <aside
        className={`text-brand-grey-dark fixed top-0 right-0 z-50 h-dvh w-[min(88vw,380px)] bg-white p-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-brand-blue text-sm font-bold uppercase">
            River Relief
          </p>
          <button
            type="button"
            onClick={close}
            className="border-brand-grey-light/35 text-brand-blue inline-flex h-10 w-10 items-center justify-center rounded-md border"
            aria-label="Close navigation"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 grid gap-5">
          {siteConfig.nav.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={close}
                className="text-brand-grey-dark flex items-center justify-between text-lg font-semibold"
              >
                {item.label}
                <ArrowRightIcon className="text-brand-blue h-4 w-4" />
              </a>
              {"items" in item && item.items && (
                <div className="border-brand-grey-light/30 mt-3 grid gap-2 border-l pl-4">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.href}
                      href={subItem.href}
                      onClick={close}
                      className="text-brand-grey-mid text-sm font-medium"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 grid gap-3">
          <a
            href={siteConfig.contact.callCta.href}
            onClick={close}
            className="border-brand-blue/20 text-brand-blue inline-flex items-center justify-center rounded-md border bg-white px-5 py-3 text-sm font-bold"
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.hero.headerCta.href}
            onClick={close}
            className="bg-brand-blue inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold text-white"
          >
            {siteConfig.hero.headerCta.label}
          </a>
        </div>
      </aside>
    </div>
  );
}
