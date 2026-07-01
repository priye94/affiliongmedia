"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[160px]" />

      <div className="absolute bottom-[-180px] right-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]" />


      {/* HERO CONTENT */}
      <div
        className="
        relative
        mx-auto
        flex
        min-h-[calc(100vh-80px)]
        max-w-7xl
        items-center
        justify-between
        gap-12
        px-6
        pt-10
        pb-12
        lg:px-8
        "
      >


        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-xl"
        >


          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            AFFILION G MEDIA
          </p>


          <h1
            className="
            text-5xl
            font-bold
            leading-[1.1]
            md:text-6xl
            lg:text-7xl
            "
          >
            Grow Your Brand
            <br />
            With Powerful
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Marketing
            </span>

          </h1>


          <p
            className="
            mt-6
            max-w-lg
            text-lg
            leading-8
            text-white/70
            "
          >
            We help businesses generate high-quality leads, increase online
            visibility, and maximize ROI through SEO, Paid Ads, Branding,
            Social Media, and Performance Marketing.
          </p>



          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-5">


            <Link
              href="/contact"
              className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-cyan-400
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-[#050816]
              transition
              duration-300
              hover:scale-105
              hover:bg-cyan-300
              hover:shadow-[0_0_35px_rgba(34,211,238,.55)]
              "
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>



            <Link
              href="/about"
              className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-white/80
              transition
              duration-300
              hover:border-cyan-400/40
              hover:text-white
              "
            >
              Learn More
            </Link>


          </div>



          {/* STATS */}
          <div
            className="
            relative
            z-20
            mt-14
            flex
            flex-wrap
            gap-12
            "
          >

            <div>
              <h2 className="text-3xl font-bold text-cyan-300">
                250+
              </h2>

              <p className="mt-2 text-sm text-white/60">
                Projects Completed
              </p>
            </div>



            <div>
              <h2 className="text-3xl font-bold text-cyan-300">
                100+
              </h2>

              <p className="mt-2 text-sm text-white/60">
                Happy Clients
              </p>
            </div>



            <div>
              <h2 className="text-3xl font-bold text-cyan-300">
                8+
              </h2>

              <p className="mt-2 text-sm text-white/60">
                Years Experience
              </p>
            </div>


          </div>


        </motion.div>





        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          relative
          hidden
          flex-1
          justify-end
          lg:flex
          "
        >


          <div
            className="
            absolute
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/20
            blur-[120px]
            "
          />


          <div className="relative h-[560px] w-[560px]">

            <Image
              src="/images/hero-banner1.png"
              alt="Affilion G Media"
              fill
              priority
              className="object-contain"
            />

          </div>


        </motion.div>


      </div>





      {/* Floating Elements */}

      <ArrowRight
        size={24}
        className="absolute left-[22%] top-[55%] text-blue-400 opacity-40"
      />


      <ArrowRight
        size={24}
        className="absolute right-[20%] top-[35%] text-blue-400 opacity-40"
      />





      {/* Bottom Wave */}

      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[70px] w-full"
      >

        <defs>

          <linearGradient id="heroGradient">

            <stop offset="0%" stopColor="#22D3EE" />

            <stop offset="50%" stopColor="#2563EB" />

            <stop offset="100%" stopColor="#1E1B4B" />

          </linearGradient>

        </defs>


        <path
          fill="url(#heroGradient)"
          d="
          M0 100
          C150 20 300 160 450 90
          C600 20 750 160 900 90
          C1050 20 1200 160 1440 80
          L1440 180
          L0 180
          Z
          "
        />

      </svg>


    </section>
  );
}