"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedGradientBorder({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      className="
      rounded-3xl
      p-[1px]
      bg-[linear-gradient(120deg,#22d3ee,#2563eb,#22d3ee)]
      bg-[length:200%_200%]
      "
    >
      <div className="rounded-3xl bg-[#0B1220]">
        {children}
      </div>
    </motion.div>
  );
}