"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070A12]">
      <motion.div
        className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px]"
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 80, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-250px] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[180px]"
        animate={{
          x: [0, -140, 60, 0],
          y: [0, -60, 80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-300px] left-[20%] h-[650px] w-[650px] rounded-full bg-indigo-500/10 blur-[180px]"
        animate={{
          y: [0, -120, 0],
          x: [0, 60, -40, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}