"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px]" />
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build{" "}
          <span className="text-cyan-400">World-Class</span>{" "}
          AI Growth Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-white/60 text-lg max-w-2xl mx-auto"
        >
          SaaS infrastructure, automation engines, and performance marketing systems
          engineered for scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:scale-105 transition">
            Book Strategy Call
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">
            View Work
          </button>
        </motion.div>

      </div>
    </section>
  );
}