"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div className="max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Build AI-Powered Growth Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-slate-400"
        >
          SaaS • Automation • Marketing Infrastructure
        </motion.p>

      </div>

    </section>
  );
}