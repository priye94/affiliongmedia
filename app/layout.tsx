import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Script from "next/script";
import Navbar from "@/components/navbar/Navbar";

import MouseGlow from "@/components/ui/MouseGlow";
import SmartCTA from "@/components/ui/SmartCTA";
import ExitIntent from "@/components/ui/ExitIntent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white overflow-x-hidden relative">

        {/* SYSTEM 3 BACKGROUND (already in your Phase 10) */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[200px] animate-pulse" />
          <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-blue-500/20 blur-[200px] animate-pulse" />
        </div>

        {/* SYSTEM 4 — MOUSE GLOW */}
        <MouseGlow />

        {/* GLOBAL UI */}
        <ScrollProgress />
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-28 relative z-10 min-h-screen">
          {children}
        </main>

        {/* SYSTEM 1 — SMART CTA (conversion floating button) */}
        <SmartCTA />

        {/* SYSTEM 5 — EXIT INTENT */}
        <ExitIntent />

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}