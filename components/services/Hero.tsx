"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,.12),transparent_40%)]" />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#070A12]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* badge */}
            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs tracking-widest uppercase">
              Our Services
            </span>

            {/* heading */}
            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">
              Growth Services <br />
              <span className="text-cyan-400">That Scale Brands</span>
            </h1>

            {/* description */}
            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
              We deliver full-stack marketing solutions including branding,
              SEO, ads, development, and performance campaigns.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#services-grid"
                className="
                  inline-block
                  px-10 py-4
                  bg-cyan-400
                  text-black
                  font-semibold
                  rounded-full
                  hover:shadow-[0_0_40px_rgba(34,211,238,.4)]
                  transition
                "
              >
                Explore Services →
              </a>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <div className="h-[420px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-slate-400">
              Services Visual
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}