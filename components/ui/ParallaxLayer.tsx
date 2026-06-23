"use client";

import { useEffect, useState } from "react";

export default function ParallaxLayer({
  children,
  speed = 0.2,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * speed);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
}