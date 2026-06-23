"use client";

import { useEffect } from "react";

export function useScrollDepth() {
  useEffect(() => {
    const trackScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      // 👉 You can connect analytics later here
      // Example: PostHog / GA / custom API
      // console.log("Scroll Depth:", Math.round(scrollPercent));
    };

    window.addEventListener("scroll", trackScroll, { passive: true });

    return () => window.removeEventListener("scroll", trackScroll);
  }, []);
}