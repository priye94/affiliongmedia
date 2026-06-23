"use client";

import { motion } from "framer-motion";
import { FiZap, FiCpu, FiTrendingUp, FiCloud } from "react-icons/fi";

const items = [
  {
    icon: FiZap,
    title: "Fast Execution",
    desc: "We deliver production-ready systems quickly.",
  },
  {
    icon: FiCpu,
    title: "AI Native",
    desc: "Automation-first architecture built for scale.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth Focused",
    desc: "Every system optimized for revenue.",
  },
  {
    icon: FiCloud,
    title: "Cloud Infrastructure",
    desc: "Secure and scalable deployment systems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32">

      {/* SECTION WRAPPER REVEAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}

                /* SYSTEM 5 — STAGGER REVEAL */
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12, // 🔥 stagger timing system
                  ease: "easeOut",
                }}

                whileHover={{ y: -6, scale: 1.02 }}

                className="
                  p-6 rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-cyan-400/30
                  transition-all duration-300
                "
              >
                <Icon className="text-cyan-400 text-3xl mb-4" />

                <h3 className="font-semibold text-lg text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </motion.div>

    </section>
  );
}