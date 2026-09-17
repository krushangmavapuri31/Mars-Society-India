"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { nav, org } from "@/data/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-lg tracking-wide text-bone leading-none">
          Mars Society <span className="text-rust-bright">India</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-bone"
                  : "text-bone-dim hover:text-bone"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="text-sm px-4 py-2 border border-rust-bright text-rust-bright hover:bg-rust-bright hover:text-void transition-colors"
          >
            Join us
          </Link>
        </nav>

        <button
          className="md:hidden text-bone p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-bone transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-px bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px bg-bone transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-void border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-bone-dim text-base py-1">
              {item.label}
            </Link>
          ))}
          <Link href="/join" className="text-rust-bright text-base py-1">
            Join us
          </Link>
        </nav>
      )}
    </header>
  );
}
