"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-[#050816] text-white">

      <Hero />
      <Stats />
      <Services />

      <section className="py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Investor-grade SaaS system
        </motion.h2>
      </section>

    </main>
  );
}