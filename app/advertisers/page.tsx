import {
  Hero,
  Stats,
  Solutions,
  Industries,
  WhyChooseUs,
  HowItWorks,
  CTA,
} from "@/components/advertisers";
import FooterSection from "@/components/sections/FooterSection";

export default function AdvertisersPage() {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Global background system */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_0)] [background-size:24px_24px]" />

      {/* Soft gradient glow layer */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-10 blur-3xl" />

      {/* Page content */}
      <div className="relative">
        <Hero />
        <Stats />
        <Solutions />
        <Industries />
        <WhyChooseUs />
        <HowItWorks />
        <CTA />
      </div>
      <FooterSection />
    </main>
  );
}