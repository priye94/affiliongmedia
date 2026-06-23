"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/services", mega: true },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Company", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const megaMenu = {
    "Technology": [
      { name: "Web Development", href: "/services/web-dev" },
      { name: "SaaS Development", href: "/services/saas" },
      { name: "AI Automation", href: "/services/ai" },
    ],
    "Marketing": [
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Paid Ads (Google/Meta)", href: "/services/ads" },
      { name: "Social Media Growth", href: "/services/social" },
    ],
    "Infrastructure": [
      { name: "Cloud Hosting", href: "/services/cloud" },
      { name: "DevOps & Deployment", href: "/services/devops" },
      { name: "Analytics Systems", href: "/services/analytics" },
    ],
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400" />
          <span className="text-white font-semibold">
            Affilion G Media
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 relative">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.mega) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={`hover:text-white transition ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* MEGA MENU */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-10 w-[800px] bg-[#0b1224] border border-white/10 rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8"
                      >
                        {Object.entries(megaMenu).map(([category, items]) => (
                          <div key={category}>
                            <h3 className="text-white font-semibold mb-4">
                              {category}
                            </h3>

                            <div className="flex flex-col gap-3">
                              {items.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="text-sm text-slate-400 hover:text-white transition"
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:text-white ${
                  isActive ? "text-white" : "text-slate-400"
                }`}
              >
                {item.name}

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#050816] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-slate-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className={
                    pathname === item.href
                      ? "text-white"
                      : "text-slate-400"
                  }
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpenMobile(false)}
                className="mt-2 rounded-xl bg-blue-600 px-4 py-2 text-center text-white"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}