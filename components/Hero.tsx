"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center py-32 px-6">

      {/* Existing Floating Glow */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* NEW Parallax Glow (Step 7 upgrade) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 bg-blue-500/10 blur-[140px]"
      />

      <div className="text-center max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-blue-500/30 px-4 py-2 text-sm text-blue-400"
        >
          AI-Powered Growth Technology
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-5xl md:text-7xl font-bold leading-tight"
        >
          Build.{" "}
          <span className="text-blue-500">Automate.</span> Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-lg text-slate-400"
        >
          We combine software, AI automation, cloud infrastructure and marketing
          into one unified growth system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 transition"
          >
            Book Consultation
          </a>

          <a
            href="/portfolio"
            className="rounded-xl border border-slate-700 px-8 py-4 hover:border-blue-500 transition"
          >
            View Case Studies
          </a>
        </motion.div>

      </div>
    </section>
  );
}