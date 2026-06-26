"use client";

import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Stats from "@/components/about/Stats";
import Services from "@/components/about/Services";
import Story from "@/components/about/Story";
import WhyUs from "@/components/about/WhyUs";
import CTA from "@/components/about/CTA";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <main className="bg-[#070A12] text-white overflow-hidden">

      {/* global ambient background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,.08),transparent_40%)]" />

      <Hero />
      <Mission />
      <Stats />
      <Services />
      <Story />
      <WhyUs />
      <CTA />
      <FooterSection />
    </main>
  );
}