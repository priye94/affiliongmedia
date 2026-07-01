"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ADVERTISER", href: "/advertiser" },
    { name: "PUBLISHER", href: "/publisher" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT US", href: "/contact" },
  ];


  return (
    <>
      {/* HEADER */}
      <header
        className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-20
        transition-all
        duration-300

        ${
          scrolled
            ? `
              bg-[#050816]/60
              backdrop-blur-xl
              border-b
              border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,.25)]
            `
            : `
              bg-transparent
              border-transparent
            `
        }
        `}
      >

        <div
          className="
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
          "
        >

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/images/logo/logo-headercrop1.png"
              alt="Affilion G Media"
              width={250}
              height={70}
              priority
              className="h-12 w-auto"
            />
          </Link>



          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">

            {navItems.map((item) => {

              const active = pathname === item.href;

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group
                    relative
                    text-sm
                    font-semibold
                    tracking-wide
                    transition
                    duration-300

                    ${
                      active
                        ? "text-cyan-300"
                        : "text-white/80 hover:text-cyan-300"
                    }
                  `}
                >

                  {item.name}


                  <span
                    className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-500
                    shadow-[0_0_12px_rgba(34,211,238,.7)]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                    `}
                  />

                </Link>

              );

            })}

          </nav>



          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
            text-white/90
            hover:text-cyan-300
            transition
            md:hidden
            "
          >
            <Menu size={28}/>
          </button>


        </div>

      </header>


      {/* OFFSET */}
      <div className="h-20" />



      {/* MOBILE MENU */}

      <div
        className={`
        fixed
        inset-0
        z-[60]
        bg-[#050816]/95
        backdrop-blur-xl
        transition-all
        duration-300
        md:hidden

        ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
        `}
      >

        <div className="flex justify-end p-6">

          <button
            onClick={() => setMobileOpen(false)}
            className="
            text-white
            hover:text-cyan-300
            transition
            "
          >
            <X size={30}/>
          </button>

        </div>


        <nav className="mt-16 flex flex-col items-center gap-8">

          {navItems.map((item)=>{

            const active = pathname === item.href;

            return (

              <Link
                key={item.href}
                href={item.href}
                onClick={()=>setMobileOpen(false)}
                className={`
                text-xl
                font-semibold
                transition

                ${
                  active
                    ? "text-cyan-300"
                    : "text-white/90 hover:text-cyan-300"
                }
                `}
              >
                {item.name}
              </Link>

            );

          })}

        </nav>


      </div>

    </>
  );
}