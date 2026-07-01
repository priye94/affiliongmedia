"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Globe2,
  Users,
  Sparkles,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Advanced Fraud Protection",
    description:
      "AI-powered monitoring and manual quality checks ensure every conversion comes from genuine users.",
    className: "lg:col-span-2",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Launch campaigns across multiple GEOs through our trusted publisher network.",
    className: "",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Premium Publishers",
    description:
      "Work with carefully vetted publishers delivering high-quality traffic.",
    className: "",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor clicks, conversions, ROI, and campaign performance with transparent reporting.",
    className: "lg:col-span-2",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock3,
    title: "Dedicated Support",
    description:
      "Experienced account managers optimize campaigns and help you scale faster.",
    className: "",
    color: "from-pink-500 to-rose-500",
  },
];

const metrics = [
  {
    value: "98%",
    label: "Campaign Success",
  },
  {
    value: "24/7",
    label: "Expert Support",
  },
  {
    value: "350%",
    label: "Average ROI",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
      {/* Background */}

      <div className="absolute -left-52 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Why Affilion G Media
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Why Advertisers Choose Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine premium affiliate partnerships, advanced technology,
            and dedicated optimization to help brands achieve measurable
            growth with complete transparency.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`${feature.className} group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl`}
              >
                {/* Hover Glow */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                />

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  {feature.description}
                </p>

                <ArrowUpRight className="mt-8 h-6 w-6 text-blue-400 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
        >
          <div className="grid gap-10 lg:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="text-center"
              >
                <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-6xl font-extrabold text-transparent">
                  {item.value}
                </h3>

                <p className="mt-4 text-lg text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}