"use client";

import { useEffect, useState } from "react";

export default function SmartCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/contact"
      className={`
        px-5 py-3 rounded-full
        font-medium shadow-lg transition-all duration-300
        whitespace-nowrap
        ${
          scrolled
            ? "bg-cyan-500 text-black scale-100 opacity-100"
            : "bg-white/10 text-white scale-90 opacity-80"
        }
      `}
    >
      Book Strategy Call
    </a>
  );
}