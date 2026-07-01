"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe2,
    title: "Global Demand",
  },
  {
    icon: TrendingUp,
    title: "High EPC Campaigns",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Payments",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 text-white">
      {/* Background glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="container relative mx-auto px-6 py-28 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              Monetize Your Traffic
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Earn More with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Premium Offers
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Join a high-performance affiliate network built for publishers.
              Monetize your traffic with CPA, CPL, CPI, CPS, and RevShare
              campaigns that deliver consistent, scalable revenue.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
              >
                Join as Publisher
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title}>
                  <feature.icon className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-300">{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold">Publisher Earnings</h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Live
                </span>
              </div>

              <div className="space-y-6">

                {/* EPC */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">EPC</span>
                    <span>$2.40</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.2 }}
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  </div>
                </div>

                {/* Fill Rate */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Fill Rate</span>
                    <span>96%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "96%" }}
                      transition={{ duration: 1.4 }}
                      className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                    />
                  </div>
                </div>

                {/* Revenue */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Monthly Revenue</span>
                    <span>$84K</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.6 }}
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* bottom stat */}
              <div className="mt-10 rounded-2xl bg-slate-900/70 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400">Total Earnings</p>

                    <h2 className="mt-2 text-4xl font-bold">$72.5K</h2>

                    <span className="mt-2 inline-flex items-center text-green-400">
                      +38% growth
                    </span>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/20 p-5">
                    <TrendingUp className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-6 -top-8 rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl"
            >
              <p className="text-sm text-slate-400">Active Publishers</p>
              <h3 className="mt-2 text-3xl font-bold">1,200+</h3>
              <span className="text-cyan-400 text-sm">
                Growing Network
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}