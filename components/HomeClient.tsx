"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      <Hero />
      <Stats />

      <section className="py-40 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Investor-grade SaaS system
        </motion.h2>

      </section>

    </main>
  );
}