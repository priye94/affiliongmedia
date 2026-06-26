"use client";

import { useState } from "react";
import Container from "../contact/Container";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Thank you! We'll contact you shortly.");
      setLoading(false);
    }, 1000);
  }

  return (
    <section
      id="contact-form"   // ✅ IMPORTANT: scroll target
      className="relative bg-[#0F172A] py-28 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <Container>

        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="text-center">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              CONTACT FORM
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Let's Build Something Amazing
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Have a project in mind or want to discuss affiliate marketing opportunities?
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,.35)]"
          >

            <div className="grid gap-8 md:grid-cols-2">
              <Input label="Full Name" type="text" placeholder="John Doe" />
              <Input label="Email Address" type="email" placeholder="john@example.com" />
              <Input label="Phone Number" type="text" placeholder="+91 9645678900" />
              <Input label="Company" type="text" placeholder="AffliogMedia" />
            </div>

            <div className="mt-8">
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input required className={inputClass} placeholder="How can we help?" />
            </div>

            <div className="mt-8">
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                required
                rows={7}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              disabled={loading}
              className="mt-10 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,.4)] disabled:opacity-60"
            >
              {loading ? "Sending Message..." : "Send Message →"}
            </button>

          </form>

        </div>

      </Container>

    </section>
  );
}

/* upgraded input */
const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#0B1220] px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:shadow-[0_0_20px_rgba(34,211,238,.15)]";

function Input({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        required
        type={type}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}