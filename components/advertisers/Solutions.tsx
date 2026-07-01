"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Settings2,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "User Acquisition",
    description:
      "Acquire high-intent users through premium publishers and performance-driven campaigns optimized for conversions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: UserCheck,
    title: "Lead Generation",
    description:
      "Generate verified, high-quality leads across finance, education, SaaS, insurance, and multiple high-converting verticals.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Growth",
    description:
      "Increase installs, registrations, and in-app engagement using CPI and CPA acquisition strategies.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sales",
    description:
      "Drive online purchases through trusted affiliate partners with measurable return on ad spend.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Megaphone,
    title: "Brand Awareness",
    description:
      "Expand your brand visibility using content publishers, influencers, native advertising, and display placements.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Settings2,
    title: "Custom Performance Campaigns",
    description:
      "Our team creates tailored CPA, CPL, CPS, CPI and hybrid campaigns aligned with your growth objectives.",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Solutions() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
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
            Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Performance Marketing Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Whether you're launching a new product or scaling an established
            business, our affiliate marketing solutions help you reach the
            right audience and maximize ROI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 group-hover:opacity-5`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-4 text-white shadow-lg`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {/* Learn More */}
                <div className="mt-8 flex items-center font-semibold text-blue-600 transition-all group-hover:translate-x-2 dark:text-blue-400">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold lg:text-4xl">
            Ready to Accelerate Your Growth?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Partner with Affilion G Media and leverage our global affiliate
            network to acquire customers, generate qualified leads, and
            increase revenue through measurable performance marketing.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Launch Your Campaign
          </button>
        </motion.div>
      </div>
    </section>
  );
}