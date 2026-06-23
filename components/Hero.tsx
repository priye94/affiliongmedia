"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 px-4 py-2 text-sm text-blue-400">
          AI-Powered Growth Technology
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Build.{" "}
          <span className="text-blue-500">Automate.</span> Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto"
        >
          We combine software development, AI automation, cloud infrastructure,
          and performance marketing to help businesses scale faster.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-medium"
          >
            Book Consultation
          </a>

          <a
            href="/portfolio"
            className="border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-xl"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}