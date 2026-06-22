"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const submit = async () => {
    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("We will contact you soon!");
  };

  return (
    <div className="max-w-xl mx-auto p-10">
      <input
        placeholder="Name"
        className="input"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Phone"
        className="input"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        placeholder="Email"
        className="input"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="input"
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />

      <button onClick={submit} className="bg-blue-500 px-6 py-3 mt-4">
        Send
      </button>
    </div>
  );
}