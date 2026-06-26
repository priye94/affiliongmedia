"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >

        <h2 className="text-4xl lg:text-5xl font-bold">
          Ready to Scale Your Growth?
        </h2>

        <p className="mt-6 text-slate-300">
          Let’s build your performance marketing system today.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-block px-10 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:shadow-[0_0_40px_rgba(34,211,238,.4)] transition"
        >
          Get Started →
        </a>

      </motion.div>

    </section>
  );
}