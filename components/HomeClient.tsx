"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      <Hero />
      <Stats />

      {/* VALUE SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Investor-grade SaaS growth system
          </motion.h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            AI automation, SaaS development, and marketing infrastructure in one system.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Automation",
                desc: "AI workflows for business scaling",
              },
              {
                title: "SaaS Systems",
                desc: "Cloud applications & platforms",
              },
              {
                title: "Growth Engine",
                desc: "Predictable revenue systems",
              },
            ].map((item) => (
              <GlassCard
                key={item.title}
                title={item.title}
                desc={item.desc}
              />
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}