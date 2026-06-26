"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "./data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 bg-[#090B12] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-3xl">

        {/* HEADER */}
        <Reveal>
          <h3 className="text-4xl font-bold text-center text-white">
            Frequently Asked Questions
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-slate-300 text-center">
            Everything you need to know about AffliogMedia.
          </p>
        </Reveal>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-4">

          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>

              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="
                  cursor-pointer
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-6
                  transition-all duration-300
                  hover:border-cyan-400/30
                  hover:bg-white/[0.07]
                "
              >

                {/* QUESTION */}
                <div className="flex items-center justify-between">

                  <h4 className="text-white font-medium">
                    {item.question}
                  </h4>

                  <span
                    className={`
                      text-cyan-400
                      text-xl
                      transition-transform duration-300
                      ${open === i ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>

                </div>

                {/* ANSWER (smooth expand/collapse) */}
                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500 ease-in-out
                    ${open === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-slate-400 leading-7">
                    {item.answer}
                  </p>
                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}