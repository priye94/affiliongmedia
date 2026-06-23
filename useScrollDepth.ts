"use client";

import { useEffect } from "react";

export function useScrollDepth() {
  useEffect(() => {
    const track = () => {
      const depth =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      // console.log("scroll depth:", depth);
      // later connect analytics (GA / PostHog)
    };

    window.addEventListener("scroll", track);
    return () => window.removeEventListener("scroll", track);
  }, []);
}