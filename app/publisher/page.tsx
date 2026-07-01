import {
  Hero,
  Stats,
  HowItWorks,
  CTA,
} from "@/components/publisher";

import FooterSection from "@/components/sections/FooterSection";

export default function PublisherPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-slate-950">
      <Hero />
      <Stats />
      <HowItWorks />
      <CTA />
      <FooterSection />
    </main>
  );
}