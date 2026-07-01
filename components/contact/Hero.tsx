"use client";

import { motion } from "framer-motion";
import HeroIllustration from "./HeroIllustration";
import { fadeUp, staggerContainer } from "./motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ===== ENHANCED CINEMATIC BACKGROUND ===== */}

      {/* Aurora glow system */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%)]" />

      {/* existing glow blobs */}
      <div className="absolute -top-40 left-10 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-[180px]" />

      {/* subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090B12]/40" />

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >

            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
            >
              CONTACT US
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-5xl lg:text-7xl font-bold leading-tight"
            >
              Get in <span className="text-cyan-400">Touch</span> with
              <br />
              Afflion G Media
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg text-slate-300 leading-8"
            >
              Let’s build high-performance affiliate campaigns, scale your traffic,
              and unlock new revenue streams with data-driven marketing.
            </motion.p>

            {/* CTA (ALWAYS VISIBLE NOW) */}
            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="#contact-form"
                className="
                  inline-flex
                  rounded-full
                  border border-cyan-400
                  bg-cyan-500/10
                  px-8 py-4
                  font-semibold
                  text-cyan-300
                  transition
                  hover:bg-cyan-400
                  hover:text-black
                "
              >
                Contact Now →
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </div>

    </section>
  );
}