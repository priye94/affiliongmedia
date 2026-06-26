"use client";

import CursorGlow from "@/components/ui/CursorGlow";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import WaveDivider from "@/components/contact/WaveDivider";
import FooterSection from "@/components/sections/FooterSection";

export default function ContactPage() {
  return (
    <main className="relative bg-[#070A12] text-white overflow-hidden">
      <CursorGlow />

      <Hero />

      <WaveDivider />

      <ContactForm />

      <WaveDivider flip />

      <FAQ />
      <FooterSection />
    </main>
  );
}