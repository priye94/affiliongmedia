"use client";

import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="py-28 text-center">

      <div className="container mx-auto px-6 lg:px-8">

        <Reveal>
          <h2 className="text-4xl font-bold">
            Ready to Scale Your Growth?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-slate-300">
            Let’s build your next performance marketing system.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="/contact"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:shadow-[0_0_40px_rgba(34,211,238,.4)]"
          >
            Contact Us →
          </a>
        </Reveal>

      </div>

    </section>
  );
}