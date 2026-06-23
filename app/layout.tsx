import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://affiliongmedia.com"),

  title: {
    default:
      "Affilion G Media | AI-Powered Digital Growth & Technology Solutions",
    template: "%s | Affilion G Media",
  },

  description:
    "We build custom software, AI automation systems, cloud infrastructure, and performance marketing campaigns that help businesses scale faster.",

  keywords: [
    "AI marketing company",
    "software development agency",
    "SaaS development",
    "AI automation",
    "digital growth company",
    "performance marketing",
    "SEO services",
    "cloud infrastructure",
    "Affilion G Media",
  ],

  openGraph: {
    title: "AI-Powered Digital Growth & Technology Solutions",
    description:
      "Custom software, AI automation, cloud infrastructure, and performance marketing systems to scale modern businesses.",
    url: "https://affiliongmedia.com",
    siteName: "Affilion G Media",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Affilion G Media - AI Growth & Technology Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Growth & Technology Solutions",
    description:
      "We combine software, AI automation, infrastructure, and marketing to scale businesses.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}