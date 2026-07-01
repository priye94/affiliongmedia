"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppCTA() {
  const phoneNumber = "9263371302";

  const message = encodeURIComponent(
    "Hi Affilion G Media, I would like to know more about your services."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      className="
        group fixed bottom-24 right-6 z-50
        flex items-center gap-3
        rounded-full
        bg-gradient-to-r from-emerald-500 to-green-500
        px-4 py-3
        text-white
        shadow-lg shadow-green-500/30
        backdrop-blur-xl
        transition-all duration-300
      "
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </div>

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[160px]">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}