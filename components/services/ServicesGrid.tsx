"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Affiliate Marketing",
    desc: "Scale revenue through global affiliate partnerships.",
  },
  {
    title: "Media Buying",
    desc: "High-performance campaigns across Google, Meta, and native ads.",
  },
  {
    title: "Lead Generation",
    desc: "Conversion-optimized funnels that generate qualified leads.",
  },
  {
    title: "Conversion Optimization",
    desc: "Improve ROI with data-driven A/B testing and UX tuning.",
  },
  {
    title: "Funnel Design",
    desc: "High-converting sales funnels built for scale.",
  },
  {
    title: "Growth Strategy",
    desc: "End-to-end performance marketing strategy execution.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="
                p-8 rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:border-cyan-400/30
                hover:-translate-y-1
                transition
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {s.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {s.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}