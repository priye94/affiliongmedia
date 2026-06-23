"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import {
  FiCpu,
  FiCode,
  FiCloud,
  FiBarChart2,
  FiSearch,
  FiDatabase,
} from "react-icons/fi";

const services = [
  { icon: FiCpu, title: "AI Automation" },
  { icon: FiCode, title: "SaaS Development" },
  { icon: FiCloud, title: "Cloud Infrastructure" },
  { icon: FiBarChart2, title: "Performance Marketing" },
  { icon: FiSearch, title: "SEO Systems" },
  { icon: FiDatabase, title: "Analytics Dashboards" },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/services.png')",
        }}
      />

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#050816]/75" />

      {/* 🌊 GLOW LAYERS */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-blue-500/15 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10">

        <Container>

          {/* HEADING */}
          <SectionHeading
            label="Services"
            title="Growth Engineering Stack"
            description="Technology + Marketing unified into one system."
          />

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  className="
                    backdrop-blur-xl
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-8
                    hover:border-cyan-400/30
                    hover:scale-[1.02]
                    transition-all duration-300
                  "
                >
                  <Icon className="text-cyan-400 text-4xl mb-5" />

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                </motion.div>
              );
            })}

          </div>

        </Container>

      </div>
    </section>
  );
}