"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function HomeClient() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      <Hero />
      <Stats />

      {/* SINGLE CLEAN SECTION ONLY */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          AI Growth Infrastructure Company
        </h2>

        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          We build automation, SaaS platforms, and marketing systems that scale revenue.
        </p>
      </section>

    </main>
  );
}