"use client";

import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

        <Reveal>
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">Our Mission</h2>
            <p className="mt-6 text-slate-300 leading-8">
              To empower businesses with scalable affiliate marketing systems
              that generate predictable and sustainable growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">Our Vision</h2>
            <p className="mt-6 text-slate-300 leading-8">
              To become a global performance marketing powerhouse enabling brands
              to grow through intelligent, automated, and data-driven campaigns.
            </p>
          </div>
        </Reveal>

      </div>

    </section>
  );
}