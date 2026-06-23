"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-blue-500/40"
    >
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{desc}</p>
    </motion.div>
  );
}