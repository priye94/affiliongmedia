import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://affiliongmedia.com"),

  title: "Affilion G Media | Advertising & Digital Marketing Agency",
  description:
    "Affilion G Media is a premium advertising and digital marketing agency specializing in branding, social media marketing, SEO, and business growth strategies.",

  keywords: [
    "advertising agency",
    "digital marketing",
    "branding",
    "SEO",
    "social media marketing",
    "Affilion G Media",
  ],

  openGraph: {
    title: "Affilion G Media | Advertising & Digital Marketing Agency",
    description:
      "We build brands that grow businesses with powerful digital marketing strategies.",
    url: "https://affiliongmedia.com",
    siteName: "Affilion G Media",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Affilion G Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affilion G Media | Advertising & Digital Marketing Agency",
    description:
      "We build brands that grow businesses with powerful digital marketing strategies.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}