"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);

      raf.current = requestAnimationFrame(() => {
        setPos({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-40
        transition-opacity
        duration-300
      "
      style={{
        background: `
          radial-gradient(
            700px at ${pos.x}px ${pos.y}px,
            rgba(34, 211, 238, 0.10),
            rgba(59, 130, 246, 0.05),
            transparent 70%
          )
        `,
      }}
    />
  );
}