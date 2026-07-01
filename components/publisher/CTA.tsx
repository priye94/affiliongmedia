"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">

      {/* 🔵 AffilionG Background System (same as advertiser CTA) */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-20 blur-3xl" />

      <div className="container relative mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300">
            <Sparkles className="h-4 w-4" />
            Start Earning Today
          </span>

          {/* Headline */}
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Turn Your Traffic Into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Revenue
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Join thousands of publishers monetizing traffic through premium affiliate campaigns,
            real-time optimization, and high-paying advertisers.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              Join Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              Learn More
            </button>

          </div>

          {/* Trust indicators (like advertiser CTA) */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">

            {[
              {
                icon: Zap,
                title: "Fast Monetization",
                desc: "Start earning from your traffic instantly.",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Advertisers",
                desc: "Work with verified global brands only.",
              },
              {
                icon: Sparkles,
                title: "Smart Optimization",
                desc: "Maximize revenue with AI-driven matching.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </motion.div>
      </div>
    </section>
  );
}