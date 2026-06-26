"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const cases = [
  {
    title: "Real Estate Automation",
    result: "+180% lead efficiency",
  },
  {
    title: "E-commerce Growth Engine",
    result: "4.2x revenue increase",
  },
  {
    title: "EdTech SaaS Platform",
    result: "12,000+ active users",
  },
];

export default function CaseStudies() {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto mt-32 mb-32 px-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Proven Systems. Real Results.
        </h2>

        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Powered by <span className="text-white">Affilion GMedia</span> growth frameworks
          built to scale acquisition, revenue, and automation.
        </p>

        {/* Trust badge */}
        <div className="flex justify-center mt-4">
          <span className="text-xs uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">
            100+ Systems Deployed • Performance-Based Growth Engineering
          </span>
        </div>
      </div>

      {/* Case Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {cases.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <p className="text-white/60 text-sm">{item.title}</p>
            <h3 className="text-2xl font-bold mt-3">{item.result}</h3>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-white/60 mb-4">
          Want a system like this built for your business?
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          Get a Growth Audit
        </button>

        <p className="text-xs text-white/40 mt-3">
          Limited onboarding slots available
        </p>
      </div>
    </section>
  );
}