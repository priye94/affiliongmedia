import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="bg-[#050816] border-t border-white/10">

      {/* MAIN CONTAINER (FIXED SPACING) */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/logo/logo-headercrop1.png"
                alt="Affilion G Media"
                width={220}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <p className="mt-6 text-slate-400 leading-7 max-w-md">
              Affilion G Media builds AI-powered SaaS platforms, intelligent automation,
              performance marketing, and digital growth systems that help businesses scale faster.
            </p>

            {/* FOLLOW US */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>

              <div className="flex gap-3">
                {[
                  { href: "https://linkedin.com/company/affiliongmedia", icon: <FaLinkedinIn /> },
                  { href: "https://x.com/affiliongmedia", icon: <FaXTwitter /> },
                  { href: "https://facebook.com/affiliongmedia", icon: <FaFacebookF /> },
                  { href: "https://instagram.com/affiliongmedia", icon: <FaInstagram /> },
                  { href: "https://youtube.com/@affiliongmedia", icon: <FaYoutube /> },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center text-lg"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Brand Strategy</li>
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
              <li>Outdoor Advertising</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="mailto:support@affiliongmedia.com"
                  className="hover:text-white"
                >
                  support@affiliongmedia.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919654267890"
                  className="hover:text-white"
                >
                  +91 92633 71302
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR (NO EXTRA SPACE FIXED) */}
        <div className="border-t border-white/10 mt-10 pt-4 flex flex-col items-center text-center text-sm text-slate-500">
          <p className="m-0">
            © {new Date().getFullYear()} <strong>Affilion G Media</strong>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}