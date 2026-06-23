"use client";

import { useEffect, useState } from "react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
      }
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-[#0b1224] p-8 rounded-2xl max-w-md text-center border border-white/10">
        <h2 className="text-xl font-bold">
          Before you go...
        </h2>

        <p className="text-white/60 mt-3">
          Want a free strategy blueprint for your business?
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 text-black rounded-xl"
        >
          Get Free Strategy
        </a>
      </div>
    </div>
  );
}