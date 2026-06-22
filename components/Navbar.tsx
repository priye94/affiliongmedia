import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 sticky top-0 z-50">
      <h1 className="font-bold text-xl text-white">Affilion G Media</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <a
        href="/contact"
        className="bg-blue-500 px-4 py-2 rounded-lg text-white"
      >
        Get Quote
      </a>
    </nav>
  );
}