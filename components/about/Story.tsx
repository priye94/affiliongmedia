"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const story = [
  {
    title: "The Beginning",
    desc: "We started as a small performance marketing team focused on testing affiliate funnels, ad creatives, and conversion systems across multiple industries.",
  },
  {
    title: "The Growth Phase",
    desc: "As results scaled, we expanded into global campaigns, building systems that handled high-volume traffic and performance optimization at scale.",
  },
  {
    title: "Today",
    desc: "Today, AffliogMedia partners with brands worldwide to deliver measurable growth through affiliate marketing, media buying, and performance-driven strategies.",
  },
];

export default function Story() {
  return (
    <section className="relative py-32 bg-[#070A12] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-5xl">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Our <span className="text-cyan-400">Story</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-slate-300 text-center max-w-2xl mx-auto leading-8">
            A journey built on performance, experimentation, and scaling systems
            that drive measurable growth.
          </p>
        </Reveal>

        {/* TIMELINE WRAPPER */}
        <div className="relative mt-20">

          {/* center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10" />

          {story.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-20 flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

                {/* content card */}
                <div
                  className={`
                    w-[45%]
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:bg-white/[0.07]
                    ${isLeft ? "text-right" : "text-left"}
                  `}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-400 leading-7">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}