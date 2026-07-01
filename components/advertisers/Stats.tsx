"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Covered",
    description: "Run campaigns across global markets with localized targeting.",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Premium Publishers",
    description: "Access a trusted network of high-quality affiliate partners.",
  },
  {
    icon: TrendingUp,
    value: "500M+",
    label: "Monthly Reach",
    description: "Connect with millions of engaged users every month.",
  },
  {
    icon: BadgeDollarSign,
    value: "350%",
    label: "Average ROI",
    description: "Performance-focused campaigns designed for profitable growth.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            Trusted Performance Network
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Numbers That Drive Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We help advertisers scale efficiently through premium publishers,
            advanced optimization, and measurable campaign performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {stat.label}
                </h4>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-10 text-white lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold lg:text-4xl">
                Scale Smarter with Performance Marketing
              </h3>

              <p className="mt-5 text-lg text-blue-100">
                Our affiliate ecosystem combines premium publishers,
                real-time optimization, and transparent reporting to
                maximize conversions while minimizing acquisition costs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-blue-100">Conversion Rate</p>

                <h4 className="mt-2 text-4xl font-bold">92%</h4>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-blue-100">Traffic Quality</p>

                <h4 className="mt-2 text-4xl font-bold">99%</h4>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-blue-100">Campaign Success</p>

                <h4 className="mt-2 text-4xl font-bold">98%</h4>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-blue-100">Support</p>

                <h4 className="mt-2 text-4xl font-bold">24/7</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}