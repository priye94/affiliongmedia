import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden">

        {/* GLOBAL BACKGROUND ONLY (SAFE) */}
        <div className="fixed inset-0 -z-10 bg-[#050816]" />

        <Navbar />

        {/* REMOVE COMPLEX WRAPPERS TEMPORARILY */}
        <main>{children}</main>

        <Footer />
        <WhatsApp />

      </body>
    </html>
  );
}