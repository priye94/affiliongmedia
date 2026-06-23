"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Industries Served" },
    { value: "99.9%", label: "Uptime Systems" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              {stat.value}
            </h3>
            <p className="mt-2 text-slate-400">{stat.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}