"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-[border-color,box-shadow] duration-200 ${
        scrolled ? "border-ink/10 shadow-[0_4px_16px_-8px_rgba(34,34,34,.25)]" : "border-transparent"
      }`}
    >
      <div className="bg-brand text-center text-xs font-semibold text-white">
        <p className="container-x truncate py-2">
          <span className="mr-2 inline-block rounded-full bg-sun px-2 py-0.5 text-[10px] font-extrabold uppercase text-ink">Pilot</span>
          <span className="sm:hidden">Patna salons — free onboarding</span>
          <span className="hidden sm:inline">Free onboarding is open for the first 100 salons in Patna</span>
        </p>
      </div>

      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                  active ? "bg-brand text-white" : "text-ink-600 hover:bg-brand-50 hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/for-salons#register" className="text-sm font-semibold text-brand hover:underline">
            Register your salon
          </Link>
          <Link href="/#download" className="btn-sun !py-2.5">
            <Download size={16} /> Get the App
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[96px] z-40 bg-brand transition-[opacity,visibility] duration-200 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="container-x bg-grid flex h-full flex-col gap-1 overflow-y-auto py-6" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`rounded-2xl px-4 py-4 font-display text-2xl font-bold transition-colors ${
                pathname === item.href ? "bg-sun text-ink" : "text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 grid gap-3">
            <Link href="/#download" onClick={close} className="btn-sun w-full">
              <Download size={16} /> Get the App
            </Link>
            <Link href="/for-salons#register" onClick={close} className="btn-ghost w-full">
              Register your salon
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
