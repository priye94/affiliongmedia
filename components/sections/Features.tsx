"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Automation Systems",
    desc: "Replace manual workflows with intelligent automation.",
  },
  {
    title: "SaaS Development",
    desc: "Build scalable cloud platforms and APIs.",
  },
  {
    title: "Performance Marketing",
    desc: "Data-driven campaigns that maximize ROI.",
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-white/60 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}