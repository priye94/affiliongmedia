"use client";

import { useEffect, useState } from "react";

export default function InteractiveLayer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] transition-transform duration-200"
        style={{
          transform: `translate(${position.x - 160}px, ${position.y - 160}px)`,
        }}
      />
    </div>
  );
}