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
    value: "100+",
    label: "Traffic Sources",
    description: "Monetize traffic from global premium advertisers.",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Active Publishers",
    description: "Join a fast-growing network of performance partners.",
  },
  {
    icon: TrendingUp,
    value: "96%",
    label: "Fill Rate",
    description: "Maximize every impression with smart matching.",
  },
  {
    icon: BadgeDollarSign,
    value: "$2M+",
    label: "Monthly Payouts",
    description: "Reliable, on-time payments across all regions.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 py-24 text-white">

      {/* Background Glow (AffilionG style) */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="container mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Publisher Network
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Scale Your Revenue with Ease
          </h2>

          <p className="mt-6 text-slate-300">
            Performance-driven monetization built for publishers, affiliates, and media owners.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-lg transition-all hover:border-cyan-400/40"
              >
                {/* Icon */}
                <div className="inline-flex rounded-2xl bg-blue-500/10 p-3 text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <h4 className="mt-3 text-lg font-semibold text-white">
                  {stat.label}
                </h4>

                <p className="mt-3 text-sm text-slate-300">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}