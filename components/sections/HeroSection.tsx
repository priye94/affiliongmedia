"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-40 text-center overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        AI-Powered Growth <br /> Infrastructure Company
      </motion.h1>

      <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
        We build automation, SaaS systems, and marketing engines that scale revenue.
      </p>

      <div className="mt-10 flex gap-4 justify-center">
        <a className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium">
          Book Consultation
        </a>

        <a className="px-6 py-3 rounded-xl border border-white/20">
          View Case Studies
        </a>
      </div>

    </section>
  );
}