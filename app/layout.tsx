import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Script from "next/script";
import Navbar from "@/components/navbar/Navbar";

import SmartCTA from "@/components/ui/SmartCTA";
// Optional (enable later if needed)
// import MouseGlow from "@/components/ui/MouseGlow";
// import ExitIntent from "@/components/ui/ExitIntent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white overflow-x-hidden antialiased">

        {/* =========================
            BACKGROUND SYSTEM (CLEANED)
        ========================= */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          {/* Primary glow */}
          <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[180px]" />

          {/* Secondary glow */}
          <div className="absolute bottom-[-220px] right-[-120px] w-[550px] h-[550px] bg-blue-500/15 blur-[180px]" />
        </div>

        {/* =========================
            TOP UI SYSTEM
        ========================= */}
        <ScrollProgress />
        <Navbar />

        {/* =========================
            PAGE WRAPPER (RHYTHM FIX)
        ========================= */}
        <main className="relative z-10 pt-28 min-h-screen">
          {children}
        </main>

        {/* =========================
            CONVERSION LAYER
        ========================= */}
        <SmartCTA />

        {/* =========================
            OPTIONAL SYSTEMS (DISABLED FOR CLEAN UI)
        ========================= */}
        {/* <MouseGlow /> */}
        {/* <ExitIntent /> */}

        {/* =========================
            PAYMENT SYSTEM
        ========================= */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}