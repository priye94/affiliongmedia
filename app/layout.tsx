import PageTransition from "@/components/PageTransition";
import InteractiveLayer from "@/components/InteractiveLayer";
import ScrollProgress from "@/components/ScrollProgress";
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

        <ScrollProgress />
        <InteractiveLayer />

        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}