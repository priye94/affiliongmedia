"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Real Estate Automation",
    result: "+180% lead efficiency",
  },
  {
    title: "E-commerce Growth Engine",
    result: "4.2x revenue increase",
  },
  {
    title: "EdTech SaaS Platform",
    result: "12,000+ active users",
  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-6xl mx-auto mt-32 px-6">

      <h2 className="text-4xl font-bold text-center">
        Proven Systems. Real Results.
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">

        {cases.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <p className="text-white/60 text-sm">{item.title}</p>
            <h3 className="text-2xl font-bold mt-3">{item.result}</h3>
          </motion.div>
        ))}

      </div>

    </section>
  );
}