import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Script from "next/script";
import Navbar from "@/components/navbar/Navbar";
import SmartCTA from "@/components/ui/SmartCTA";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#050816] text-white antialiased">

        {/* Background */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

          <div className="absolute bottom-[-220px] right-[-120px] h-[550px] w-[550px] rounded-full bg-blue-500/15 blur-[180px]" />
        </div>

        {/* Navbar */}
        <ScrollProgress />
        <Navbar />

        {/* Main Content */}
        <main
          className="
            relative
            z-10
            min-h-screen
          "
        >
          {children}
        </main>

        {/* Floating CTA */}
        <SmartCTA />

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}