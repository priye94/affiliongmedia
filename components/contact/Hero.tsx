"use client";

import { motion } from "framer-motion";
import HeroIllustration from "./HeroIllustration";
import { fadeUp, staggerContainer } from "./motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      {/* animated glow blobs */}
      <div className="absolute -top-40 left-10 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
            >
              CONTACT US
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-5xl lg:text-7xl font-bold leading-tight"
            >
              Get in <span className="text-cyan-400">Touch</span> with
              <br />
              AffliogMedia
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg text-slate-300 leading-8"
            >
              Let’s build high-performance affiliate campaigns, scale your traffic,
              and unlock new revenue streams with data-driven marketing.
            </motion.p>

            <motion.div variants={fadeUp}>
              {/* ✅ SCROLL LINK */}
              <a
                href="#contact-form"
                className="mt-10 inline-block rounded-full border border-cyan-400 bg-cyan-500/10 px-8 py-4 font-semibold hover:bg-cyan-400 hover:text-black transition"
              >
                Contact Now →
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}