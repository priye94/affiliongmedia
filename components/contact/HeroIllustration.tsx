"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroIllustration() {
  const { scrollY } = useScroll();

  const ringY = useTransform(scrollY, [0, 1000], [0, 40]);
  const laptopY = useTransform(scrollY, [0, 1000], [0, 70]);
  const cardY = useTransform(scrollY, [0, 1000], [0, 90]);

  return (
    <div className="relative flex justify-center items-center h-[650px] w-full">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Rotating Rings */}
      <motion.svg
        style={{ y: ringY }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="absolute"
      >
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="#22D3EE"
          strokeWidth="1"
          opacity=".25"
          fill="none"
        />

        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity=".2"
          fill="none"
        />

        <circle
          cx="250"
          cy="250"
          r="90"
          stroke="#22D3EE"
          strokeWidth="1"
          opacity=".15"
          fill="none"
        />
      </motion.svg>

      {/* Laptop */}
      <motion.div
        style={{ y: laptopY }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20"
      >
        <div className="w-[320px] rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,.45)]">

          <div className="rounded-t-2xl bg-[#0B1220] p-4">

            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-3">

              <div className="h-12 rounded-lg bg-cyan-500/20" />

              <div className="grid grid-cols-2 gap-3">

                <div className="h-20 rounded-xl bg-white/5" />

                <div className="h-20 rounded-xl bg-white/5" />

              </div>

              <div className="h-3 rounded-full bg-cyan-400/40 w-3/4" />

              <div className="h-3 rounded-full bg-white/10 w-1/2" />

            </div>

          </div>

          <div className="h-4 rounded-b-2xl bg-slate-800" />

        </div>
      </motion.div>

      {/* Floating Analytics Card */}
      <motion.div
        style={{ y: cardY }}
        animate={{
          y: [0, -18, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-6 top-16 rounded-2xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl p-5 shadow-xl"
      >
        <div className="text-xs text-slate-400">
          Revenue
        </div>

        <div className="mt-2 text-2xl font-bold text-cyan-400">
          +245%
        </div>

        <div className="mt-2 h-2 w-28 rounded-full bg-cyan-400/30" />
      </motion.div>

      {/* Floating Mail Card */}
      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-6 bottom-20 rounded-2xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl p-5 shadow-xl"
      >
        <div className="text-4xl">✉️</div>

        <div className="mt-2 text-sm text-slate-300">
          24h Response
        </div>
      </motion.div>

      {/* Floating Phone */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-0 top-32 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/70 backdrop-blur-xl shadow-lg"
      >
        📞
      </motion.div>
    </div>
  );
}