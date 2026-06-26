"use client";

import { motion } from "framer-motion";
import { Hero, ContactForm, FAQ, WaveDivider } from "@/components/contact";
import { fadeIn } from "@/components/contact/motion";
import FooterSection from "@/components/sections/FooterSection";

export default function ContactPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="bg-[#090B12] text-white overflow-hidden"
    >
      <Hero />

      <WaveDivider />

      <ContactForm />

      <WaveDivider flip />

      <FAQ />
      <FooterSection />
    </motion.main>
  );
}