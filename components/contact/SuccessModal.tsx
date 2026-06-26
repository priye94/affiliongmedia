"use client";

import { motion } from "framer-motion";

export default function SuccessModal({
  open,
}: {
  open: boolean;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#0F172A] border border-cyan-400/30 p-10 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-cyan-400">
          Message Sent!
        </h2>
        <p className="mt-3 text-slate-300">
          We’ll get back to you shortly.
        </p>
      </motion.div>
    </div>
  );
}