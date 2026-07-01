"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function TopNav() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Advertisers", href: "/advertisers" },
    { name: "Publisher", href: "/publisher" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // improved active detection
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-[86px] bg-white/10 backdrop-blur-2xl border-b border-white/15 shadow-[0_12px_40px_rgba(0,0,0,.20)]"
            : "h-[86px] bg-gradient-to-b from-[#0B1E36]/70 via-[#0B1E36]/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 xl:px-12">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 transition duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/images/logo/logo-headercrop1.png"
              alt="AffilionG Media"
              width={340}
              height={72}
              priority
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-12">

            <nav className="flex items-center gap-10">

              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-[15px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 ${
                      active
                        ? "text-cyan-300"
                        : "text-white hover:text-cyan-300"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-3 h-[2px] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-cyan-500/40
              "
            >
              Get Started
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 hover:text-cyan-300 lg:hidden"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* spacer */}
      <div className="h-[86px]" />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[340px] max-w-full bg-[#0C203E]/95 backdrop-blur-3xl border-l border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)] transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

            <Image
              src="/images/logo/logo-headercrop1.png"
              alt="AffilionG Media"
              width={240}
              height={60}
              className="h-12 w-auto object-contain"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-cyan-300"
            >
              <X size={28} />
            </button>

          </div>

          {/* menu */}
          <nav className="mt-8 flex flex-col px-6">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`mb-2 rounded-xl px-5 py-4 text-base font-semibold uppercase tracking-[0.05em] transition ${
                    active
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-white hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:scale-[1.03]"
            >
              Get Started
            </Link>
          </nav>

          {/* footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-8">
            <h4 className="text-sm font-semibold text-white">
              AffilionG Media
            </h4>

            <p className="mt-2 text-sm text-white/60">
              Performance Marketing • Affiliate Network
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm text-white/70">
                Available worldwide
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}