"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe2,
    title: "Global Reach",
  },
  {
    icon: TrendingUp,
    title: "High ROI Campaigns",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Protection",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* UPDATED BACKGROUND (matched with contact/publisher theme) */}

      {/* Aurora glow (cyan + blue like contact hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%)]" />

      {/* floating glow blobs */}
      <div className="absolute -top-40 left-10 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-[180px]" />

      {/* subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090B12]/40" />

      <div className="container relative mx-auto px-6 py-28 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* badge */}
            <div className="pt-2">
  <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
    Trusted by Global Brands
  </span>
</div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Scale Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Performance Marketing
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Reach high-intent customers through our premium affiliate
              network. Launch CPA, CPL, CPI, CPS and Revenue Share campaigns
              that generate measurable growth and maximize ROI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                Start Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pb-6">
              {features.map((feature) => (
                <div key={feature.title}>
                  <feature.icon className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-300">{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT (UNCHANGED AS REQUESTED) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* ===== DO NOT CHANGE THIS SECTION ===== */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold">Campaign Overview</h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Live
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Conversions</span>
                    <span>92%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.2 }}
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">ROI</span>
                    <span>350%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1.4 }}
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Traffic Quality</span>
                    <span>99%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "99%" }}
                      transition={{ duration: 1.6 }}
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-slate-900/70 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400">Monthly Revenue</p>

                    <h2 className="mt-2 text-4xl font-bold">$126K</h2>

                    <span className="mt-2 inline-flex items-center text-green-400">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      +42% this month
                    </span>
                  </div>

                  <div className="rounded-2xl bg-blue-500/20 p-5">
                    <BarChart3 className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card (unchanged) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-6 -top-8 rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl"
            >
              <p className="text-sm text-slate-400">Active Campaigns</p>

              <h3 className="mt-2 text-3xl font-bold">248</h3>

              <span className="text-green-400 text-sm">
                +18% Growth
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}