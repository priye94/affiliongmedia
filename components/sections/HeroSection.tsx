"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      {/* 🌑 DARK OVERLAY (VERY IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-[#050816]/70" />

      {/* 🌊 OPTIONAL GLOW LAYERS */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          Build AI-Powered SaaS &
          <span className="text-cyan-400"> Growth Systems</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
        >
          We design automation engines, SaaS platforms, and performance marketing systems
          that scale revenue predictably and efficiently.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">
            Book Strategy Call
          </button>

          <button className="
            px-6 py-3 rounded-full
            border border-white/20
            text-white/80
            hover:border-cyan-400/40
            hover:text-white
            transition
          ">
            View Case Studies
          </button>
        </motion.div>

      </div>
    </section>
  );
}