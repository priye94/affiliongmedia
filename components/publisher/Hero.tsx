"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Globe2, title: "Global Demand" },
  { icon: TrendingUp, title: "High EPC Campaigns" },
  { icon: ShieldCheck, title: "Reliable Payments" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#090B12] text-white">

      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.14),transparent_45%)]" />
      <div className="absolute -top-40 left-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090B12]/80" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Monetize Your Traffic
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Earn More with{" "}
              <span className="text-cyan-400">Premium Offers</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Join a performance-driven affiliate network and monetize your traffic
              with high EPC offers and reliable payouts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/publisher/signup"
                className="inline-flex items-center rounded-full bg-cyan-500 px-7 py-4 font-semibold text-black hover:bg-cyan-400"
              >
                Join as Publisher
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/publisher/about"
                className="rounded-full border border-cyan-400/40 px-7 py-4 font-semibold text-cyan-300 hover:bg-cyan-400/10"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title}>
                  <f.icon className="mb-3 h-8 w-8 text-cyan-400" />
                  <p className="text-sm text-slate-300">{f.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT DASHBOARD — MATCHED WITH ADVERTISER STYLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold">Publisher Earnings</h3>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Live
                </span>
              </div>

              <div className="space-y-6">

                {/* EPC (Blue) */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">EPC</span>
                    <span>$2.40</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>

                {/* Fill Rate (Green) */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Fill Rate</span>
                    <span>96%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 w-[96%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                  </div>
                </div>

                {/* Monthly Revenue (Purple → Pink like traffic quality style) */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-slate-400">Monthly Revenue</span>
                    <span>$84K</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>
                </div>

              </div>

              {/* Bottom Stat (Advertiser-style card) */}
              <div className="mt-10 rounded-2xl bg-slate-900/70 p-6">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-slate-400">Total Earnings</p>
                    <h2 className="mt-2 text-4xl font-bold">$72.5K</h2>
                    <span className="mt-2 inline-flex items-center text-green-400 text-sm">
                      +38% growth
                    </span>
                  </div>

                  <div className="rounded-2xl bg-blue-500/20 p-5">
                    <TrendingUp className="h-12 w-12 text-blue-400" />
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