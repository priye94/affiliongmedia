"use client";

import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiTarget,
  FiGlobe,
  FiShield,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";

const items = [
  {
    icon: FiTrendingUp,
    title: "Performance Marketing",
    desc: "Maximize ROI with data-driven campaigns designed for measurable business growth.",
  },
  {
    icon: FiTarget,
    title: "Quality Lead Generation",
    desc: "Connect with the right audience through targeted acquisition strategies.",
  },
  {
    icon: FiGlobe,
    title: "Global Affiliate Network",
    desc: "Expand your reach with trusted publishers and premium affiliate partners.",
  },
  {
    icon: FiShield,
    title: "Transparent Reporting",
    desc: "Real-time tracking of clicks, conversions and campaign performance.",
  },
  {
    icon: FiBarChart2,
    title: "Data-Driven Optimization",
    desc: "Continuous optimization backed by analytics to improve campaign performance.",
  },
  {
    icon: FiAward,
    title: "Dedicated Support",
    desc: "Experienced marketing specialists committed to your long-term success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-24 md:py-32">

      {/* TOP GLOW */}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-xs font-semibold mb-4">
            WHY AFFILIONG MEDIA
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Why Choose Affiliong Media?
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8 text-[15px]">
            We empower brands with performance marketing, affiliate partnerships,
            lead generation, and data-driven strategies that increase visibility,
            drive conversions, and deliver sustainable business growth.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: i * .08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                group
                flex
                items-start
                gap-5
                rounded-lg
                border
                border-cyan-400/30
                bg-[#161616]
                p-6
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(0,255,255,.18)]
                "
              >

                {/* Icon */}

                <div
                  className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/5
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:bg-cyan-400
                  group-hover:text-black
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Content */}

                <div>

                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-r from-cyan-500/10 via-blue-700/15 to-violet-600/10 blur-3xl" />

    </section>
  );
}