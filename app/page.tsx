import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <main className="relative overflow-hidden bg-[#050816]">

      {/* =========================
          PREMIUM BACKGROUND SYSTEM
      ========================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-blue-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <Hero />
      <Stats />
      <Services />

      {/* =========================
          INVESTOR VALUE PROPOSITION
      ========================= */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            We build AI-powered growth infrastructure for modern businesses
          </motion.h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Not an agency. A systems company combining software, AI automation,
            cloud infrastructure, and performance marketing.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Revenue Systems, not campaigns",
                desc: "Engineered platforms that generate predictable growth.",
              },
              {
                title: "AI-native operations",
                desc: "Automation replacing manual business workflows.",
              },
              {
                title: "Scalable infrastructure",
                desc: "Built for global performance from day one.",
              },
            ].map((item) => (
              <GlassCard
                key={item.title}
                title={item.title}
                desc={item.desc}
              />
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          METRICS SECTION
      ========================= */}
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Measurable impact across industries
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-6">

            {[
              { value: "50+", label: "Systems Delivered" },
              { value: "10+", label: "Industries Served" },
              { value: "4.2x", label: "Average ROI Increase" },
              { value: "99.9%", label: "Uptime Infrastructure" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-[#0b1224] p-8"
              >
                <h3 className="text-3xl font-bold text-blue-500">
                  {stat.value}
                </h3>
                <p className="mt-2 text-slate-400 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          CASE STUDIES
      ========================= */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Proven systems, real outcomes
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Real Estate Automation System",
                result: "+180% lead efficiency",
              },
              {
                title: "E-commerce Growth Engine",
                result: "4.2x revenue increase",
              },
              {
                title: "Education SaaS Platform",
                result: "12,000+ active users",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-2xl border border-white/10 bg-[#0b1224] p-8"
              >
                <p className="text-slate-400 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold mt-3 text-white">
                  {item.result}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold">
            Build your next-generation growth system
          </h2>

          <p className="mt-6 text-slate-400">
            We help companies transition from manual marketing to AI-driven scalable infrastructure.
          </p>

          <motion.a
            whileHover={{ scale: 1.06 }}
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 font-medium"
          >
            Request Strategy Session
          </motion.a>

        </div>
      </section>

    </main>
  );
}