"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      service: form.get("service"),
      budget: form.get("budget"),
      message: form.get("message"),
    };

    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setLoading(false);
    alert("Request submitted!");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">

      <input name="name" placeholder="Name" className="w-full p-3 bg-white/5 rounded" />
      <input name="email" placeholder="Email" className="w-full p-3 bg-white/5 rounded" />
      <input name="phone" placeholder="Phone" className="w-full p-3 bg-white/5 rounded" />
      <input name="service" placeholder="Service Needed" className="w-full p-3 bg-white/5 rounded" />
      <input name="budget" placeholder="Budget" className="w-full p-3 bg-white/5 rounded" />
      <textarea name="message" placeholder="Message" className="w-full p-3 bg-white/5 rounded" />

      <button
        disabled={loading}
        className="w-full bg-blue-600 py-3 rounded"
      >
        {loading ? "Submitting..." : "Submit Request"}
      </button>

    </form>
  );
}