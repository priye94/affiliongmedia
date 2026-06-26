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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      
      <motion.nav
        animate={{
          scale: scrolled ? 0.96 : 1,
          y: scrolled ? 0 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="
          glass
          flex items-center justify-between
          w-[92%] max-w-[1050px]
          px-6 py-3
          rounded-full
          backdrop-blur-2xl
        "
      >

        {/* LOGO */}
        <Link
          href="/"
          className="text-white font-semibold tracking-tight text-[15px]"
        >
          Affilion G Media
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-7 text-[13.5px]">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-slate-300 hover:text-white transition"
              >
                {item.name}

                {/* underline animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1.5px]
                    bg-cyan-400 rounded-full
                    transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
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
            text-[13px]
            rounded-full
            bg-gradient-to-r from-cyan-500 to-blue-500
            text-black font-medium
            hover:scale-[1.04]
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