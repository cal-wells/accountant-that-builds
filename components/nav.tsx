"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="group font-heading text-lg font-bold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            <span className="relative inline-block">
              {siteConfig.name}
              <span aria-hidden className="text-primary">
                .
              </span>
              {/* Cobalt underline draws in on hover; instant for reduced-motion users. */}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 sm:flex">
            {siteConfig.navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-sm font-semibold text-primary"
                        : "text-sm font-medium text-muted transition-colors hover:text-ink"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile trigger */}
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden className="text-xl leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </nav>
      </header>

      {/*
        Rendered OUTSIDE the header on purpose: the header's backdrop-blur
        creates a containing block for position:fixed, which would otherwise
        size this overlay to the header instead of the viewport.
      */}
      {open && (
        <div
          className="fixed inset-x-0 bottom-0 top-[65px] z-40 bg-background sm:hidden"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <ul id="mobile-menu" className="flex flex-col gap-1 px-4 py-4">
            {siteConfig.navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={
                      active
                        ? "block rounded-lg bg-primary/10 px-4 py-3 text-base font-semibold text-primary"
                        : "block rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
