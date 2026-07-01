"use client";

import { ReactNode } from "react";
import { theme } from "@/lib/theme";

export default function HeroLayout({ children }: { children: ReactNode }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      style={{ backgroundColor: theme.colors.bg.base }}
    >
      {/* Aurora Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: theme.gradients.aurora }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-40 left-10 h-[500px] w-[500px] rounded-full blur-[160px] animate-pulse"
        style={{ background: theme.colors.cyan.glow }}
      />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-[180px] animate-pulse"
        style={{ background: theme.colors.blue.glow }}
      />

      {/* Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090B12]/80" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}