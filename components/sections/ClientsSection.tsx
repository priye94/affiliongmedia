"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Brands() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // ✅ AUTO-GENERATED LOGOS
  const brands = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: `/brands/logo${i + 1}.jpg`,
  }));

  const baseX = useMotionValue(0);
  const smoothX = useSpring(baseX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    let frame: number;
    let x = 0;

    const speed = 0.4;

    const animate = () => {
      x -= speed;

      // infinite loop reset
      if (x <= -2200) x = 0;

      baseX.set(x);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [baseX]);

  // 🖱️ subtle mouse interaction boost
  const handleMouseMove = (e: React.MouseEvent) => {
    const center = window.innerWidth / 2;
    const delta = (e.clientX - center) / center;

    baseX.set(baseX.get() + delta * -0.6);
  };

  return (
    <section className="relative bg-[#0f0f10] py-28 overflow-hidden">

      {/* EDGE FADE */}
      <div className="pointer-events-none absolute inset-0 z-10
        [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
      " />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00e5ff18,transparent_55%),radial-gradient(circle_at_bottom,#7c3aed18,transparent_60%)]" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 tracking-[6px] uppercase text-xs mb-3">
            BRANDS
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Trusted by Leading Global Brands
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-7">
            Affiliong Media powers performance systems for global companies
            through scalable marketing infrastructure.
          </p>
        </div>

        {/* MARQUEE */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="overflow-hidden"
        >
          <motion.div
            className="flex gap-6 w-max"
            style={{ x: smoothX }}
          >

            {[...brands, ...brands, ...brands].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -12,
                  scale: 1.06,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-[260px] h-36 flex-shrink-0"
              >
                <div className="
                  h-full w-full
                  rounded-xl
                  bg-[#141414]
                  border border-cyan-400/20
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(0,255,255,0.08)]
                  transition-all duration-300
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_50px_rgba(0,255,255,0.20)]
                ">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={180}
                    height={80}
                    className="
                      object-contain
                      h-20 md:h-24
                      w-auto
                      opacity-85
                      transition-all duration-300
                      hover:opacity-100
                      hover:scale-110
                    "
                  />
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-3xl" />
    </section>
  );
}