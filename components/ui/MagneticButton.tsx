"use client";

import { useRef } from "react";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // smoother & more controlled movement
      const moveX = x * 0.25;
      const moveY = y * 0.25;

      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.02)`;
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;

    if (frame.current) cancelAnimationFrame(frame.current);

    el.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        inline-flex
        transition-transform
        duration-300
        ease-out
        will-change-transform
      "
    >
      {children}
    </div>
  );
}