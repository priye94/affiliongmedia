"use client";

import { useEffect } from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (!glow) return;

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* CURSOR GLOW */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed left-0 top-0 z-50 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C2A8]/10 blur-[120px]"
      />

      <main className="relative">{children}</main>
    </>
  );
}