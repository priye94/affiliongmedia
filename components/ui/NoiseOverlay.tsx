"use client";

export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-[0.035] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('/images/noise.png')",
      }}
    />
  );
}