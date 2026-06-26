"use client";

import { motion } from "framer-motion";

const services = [
  "SEO Optimization",
  "Performance Marketing",
  "Brand Strategy",
  "Paid Advertising",
  "Social Media Growth",
  "Conversion Optimization",
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 bg-[#0b0f19] text-white">

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_#00C2A8_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need to scale your business
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-[#00C2A8]/40 transition"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-gray-400">
                High-performance solution designed to grow your brand.
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}