"use client";

import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,.12),transparent_40%)]" />

      <div className="relative container mx-auto px-6 lg:px-8">

        <Reveal>
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            About <span className="text-cyan-400">AffliogMedia</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-slate-300 leading-8">
            We build performance-driven affiliate ecosystems that help brands
            scale traffic, conversions, and revenue through data-led marketing.
          </p>
        </Reveal>

      </div>
    </section>
  );
}