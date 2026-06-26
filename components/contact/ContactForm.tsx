"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact-form" className="relative py-28">

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">

        <Reveal>
          <h3 className="text-4xl font-bold text-center text-white">
            Let’s Build Something
            <span className="text-cyan-400"> Powerful</span>
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-slate-400">
            Share your goals and we’ll design a growth system for you.
          </p>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.2}>
          <form
            className="mt-12 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
                alert("Message sent!");
              }, 1200);
            }}
          >

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/50 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/50 transition"
            />

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/50 transition resize-none"
            />

            {/* CTA */}
            <div className="flex justify-center pt-4">

              <MagneticButton>
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    relative
                    overflow-hidden
                    rounded-full
                    bg-cyan-400
                    px-10 py-4
                    font-semibold text-black
                    transition
                    hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                    disabled:opacity-60
                  "
                >
                  {loading ? "Sending..." : "Send Message"}

                  {/* light sweep */}
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 hover:translate-x-full" />
                </button>
              </MagneticButton>

            </div>

          </form>
        </Reveal>

      </div>

    </section>
  );
}