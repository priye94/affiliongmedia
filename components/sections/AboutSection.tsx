"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TransformBusinessSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] py-32 text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 left-1/4 h-[450px] w-[450px] rounded-full bg-[#00C2A8]/10 blur-[180px]" />
      <div className="absolute bottom-[-180px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#2563eb]/10 blur-[200px]" />

      {/* GRID NOISE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(to right, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >

            {/* OUTER GLOW RING */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-[#00C2A8] to-[#2563eb] opacity-20 blur-2xl" />

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative h-[540px] w-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1624] shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            >

              {/* inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2A8]/10 to-transparent" />

              <Image
                src="/images/business.png"
                alt="Transform Business"
                fill
                className="object-contain p-6 transition duration-700 hover:scale-105"
              />

            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00C2A8]">
              About Us
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Transforming Your
              <br />
              Business Digitally
            </h2>

            <p className="mt-6 max-w-lg text-gray-300 leading-8">
              We build high-performance digital systems that help brands scale
              faster through marketing, automation, SEO, and conversion-driven
              strategies designed for real growth.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              {[
                "Data-driven marketing strategies",
                "High-converting ad campaigns",
                "SEO & organic growth systems",
                "Branding & creative excellence",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-[#00C2A8]" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}

            </div>

            {/* CTA BUTTON */}
            <button className="mt-12 rounded-full bg-gradient-to-r from-[#00C2A8] to-[#2563eb] px-9 py-4 text-sm font-semibold uppercase tracking-wider transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,194,168,0.4)]">
              Learn More
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}