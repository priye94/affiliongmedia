"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Rocket,
  Sparkles,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Define Goals",
    desc: "Set clear campaign objectives aligned with your business KPIs and target outcomes.",
  },
  {
    icon: Users,
    title: "Select Audience",
    desc: "Access premium publisher segments and precisely define your ideal customer profile.",
  },
  {
    icon: Rocket,
    title: "Launch Campaign",
    desc: "Deploy campaigns instantly across our global performance marketing network.",
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    desc: "Our system continuously optimizes traffic sources for maximum ROI and conversions.",
  },
  {
    icon: BarChart3,
    title: "Track Results",
    desc: "Monitor real-time analytics with transparent reporting and actionable insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 dark:bg-slate-950">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300">
            Simple 5-Step Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            How Affilion G Media Works
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A streamlined performance marketing system designed to help
            advertisers launch, optimize, and scale efficiently.
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block relative">
          {/* animated progress line background */}
          <div className="absolute left-0 right-0 top-10 h-[2px] bg-slate-200 dark:bg-slate-800" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-10 h-[2px] origin-left bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"
          />

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* node */}
                  <div className="flex justify-center">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* card */}
                  <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 group-hover:border-indigo-400 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:backdrop-blur-xl">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-5"
              >
                {/* connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 h-full w-px bg-gradient-to-b from-indigo-500 to-cyan-500 opacity-40" />
                )}

                {/* icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>

                {/* content */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built for performance marketers who want clarity, speed, and
            scalable ROI without complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}