"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientsSection from "@/components/sections/ClientsSection";
import CaseStudies from "@/components/sections/CaseStudies";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

import { useScrollDepth } from "@/components/hooks/useScrollDepth";

export default function Page() {
  useScrollDepth(); // SYSTEM 2

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <CaseStudies />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}