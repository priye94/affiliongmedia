"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Target,
  DollarSign,
  TrendingUp,
  Wallet,
} from "lucide-react";

const steps = [
  { icon: Link2, title: "Join Network", desc: "Sign up as a verified publisher in minutes." },
  { icon: Target, title: "Get Offers", desc: "Receive high-converting campaigns instantly." },
  { icon: TrendingUp, title: "Drive Traffic", desc: "Send traffic through your platforms." },
  { icon: DollarSign, title: "Earn Revenue", desc: "Generate revenue per click, lead, or sale." },
  { icon: Wallet, title: "Get Paid", desc: "Receive fast, reliable monthly payouts." },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 py-24 text-white">

      <div className="container mx-auto px-6">

        <motion.div className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold lg:text-5xl">
            Simple Monetization Flow
          </h2>

          <p className="mt-5 text-slate-300">
            Start earning in 5 simple steps with our performance network.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.12 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-cyan-400" />

                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}