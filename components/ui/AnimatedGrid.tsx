"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      className="absolute inset-0 opacity-[0.08]"
      animate={{
        backgroundPosition: [
          "0px 0px",
          "60px 60px",
          "0px 0px",
        ],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}