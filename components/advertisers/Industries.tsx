"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingBag,
  GraduationCap,
  Plane,
  Gamepad2,
  Smartphone,
  HeartPulse,
  Bitcoin,
  MonitorSmartphone,
  Building2,
} from "lucide-react";

const industries = [
  {
    title: "Finance",
    description: "Banking, Insurance, Loans & FinTech",
    icon: Landmark,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-commerce",
    description: "Online stores & Retail brands",
    icon: ShoppingBag,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Education",
    description: "EdTech & Online Learning",
    icon: GraduationCap,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Travel",
    description: "Bookings, Hotels & Airlines",
    icon: Plane,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Gaming",
    description: "Mobile & Online Gaming",
    icon: Gamepad2,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Mobile Apps",
    description: "App Installs & Engagement",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Healthcare",
    description: "Health & Wellness Brands",
    icon: HeartPulse,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Crypto",
    description: "Blockchain & Web3",
    icon: Bitcoin,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "SaaS",
    description: "Software & B2B Platforms",
    icon: MonitorSmartphone,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Enterprise",
    description: "Large Scale Businesses",
    icon: Building2,
    color: "from-slate-600 to-slate-800",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            Industries
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            We Drive Results Across Every Industry
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our performance marketing expertise spans multiple industries,
            helping brands connect with the right audience through trusted
            affiliate partnerships.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Hover Background */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${industry.color} p-4 text-white shadow-lg`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 text-white"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-bold">
                Every Industry Needs
                <br />
                Performance Marketing
              </h3>

              <p className="mt-6 text-lg text-blue-100">
                Whether your goal is user acquisition, lead generation,
                app installs, or increasing online sales, our affiliate
                network is designed to deliver measurable growth across
                every vertical.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                "CPA Campaigns",
                "CPL Campaigns",
                "CPI Campaigns",
                "Revenue Share",
                "Affiliate Network",
                "Premium Publishers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur"
                >
                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}