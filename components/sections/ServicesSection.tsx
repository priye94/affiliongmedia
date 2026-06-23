"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

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
    <section className="py-32">
      <Container>

        <SectionHeading
          label="Services"
          title="Growth Engineering Stack"
          description="Technology + Marketing unified into one system."
        />

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
                  delay: i * 0.1, // SYSTEM 3 stagger
                }}

                className="
                  border border-white/10
                  rounded-2xl
                  p-8
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-cyan-400/30
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                <Icon className="text-cyan-400 text-4xl mb-5" />

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}