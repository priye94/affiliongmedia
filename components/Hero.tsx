"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-28 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
      >
        We Turn Brands Into Revenue Machines
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg"
      >
        Performance marketing, branding, SEO & digital campaigns that generate
        real business growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-xl font-medium"
        >
          Get Strategy Call
        </a>

        <a
          href="/portfolio"
          className="border border-gray-500 hover:border-white hover:bg-white/5 transition-all px-6 py-3 rounded-xl font-medium"
        >
          View Case Studies
        </a>
      </motion.div>
    </section>
  );
}