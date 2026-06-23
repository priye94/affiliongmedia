"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Company", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      
      <motion.nav
        animate={{
          scale: scrolled ? 0.96 : 1,
          padding: scrolled ? "10px 18px" : "14px 22px",
        }}
        transition={{ duration: 0.25 }}
        className="
          mt-5 flex items-center justify-between
          w-[92%] max-w-6xl
          rounded-full
          border border-white/10
          bg-[#0b1224]/70
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
          transition-all
        "
      >

        {/* LOGO */}
        <Link href="/" className="font-semibold text-white tracking-tight">
          Affilion G Media
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative transition
                  ${active ? "text-white" : "text-slate-400 hover:text-white"}
                `}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            hidden md:flex
            px-4 py-2
            rounded-full
            bg-gradient-to-r from-cyan-500 to-blue-500
            text-black font-medium
            hover:scale-[1.03]
            transition
          "
        >
          Book Call
        </Link>

        {/* MOBILE */}
        <div className="md:hidden text-white text-xl">
          ☰
        </div>

      </motion.nav>
    </header>
  );
}