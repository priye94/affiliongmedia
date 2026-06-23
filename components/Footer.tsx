import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816] text-white">

      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold">
              Affilion G Media
            </h2>
            <p className="mt-4 text-sm text-slate-400">
              AI Growth Infrastructure Company building scalable systems for modern businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/services">AI Systems</Link></li>
              <li><Link href="/services">Automation</Link></li>
              <li><Link href="/services">Growth Engine</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Case Studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Insights</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Affilion G Media. All rights reserved.
          </p>

          {/* Status / Trust Badge */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Systems operational • 99.9% uptime architecture
          </div>

        </div>
      </div>
    </footer>
  );
}