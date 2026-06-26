"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "15%", size: 8, delay: 0 },
  { left: "18%", top: "70%", size: 6, delay: 0.4 },
  { left: "32%", top: "25%", size: 10, delay: 1 },
  { left: "48%", top: "82%", size: 7, delay: 1.5 },
  { left: "64%", top: "20%", size: 12, delay: 0.7 },
  { left: "78%", top: "60%", size: 9, delay: 2 },
  { left: "88%", top: "30%", size: 6, delay: 1.3 },
  { left: "92%", top: "78%", size: 8, delay: 2.5 },
];

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,.5)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}