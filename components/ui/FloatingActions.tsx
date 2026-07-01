"use client";

import WhatsAppCTA from "./WhatsAppCTA";
import ScrollToTopButton from "./ScrollToTopButton";

export default function FloatingActions() {
  return (
    <>
      {/* WhatsApp (higher position) */}
      <div className="fixed bottom-24 right-6 z-50">
        <WhatsAppCTA />
      </div>

      {/* Scroll to top (lower position) */}
      <div className="fixed bottom-6 right-6 z-50">
        <ScrollToTopButton />
      </div>
    </>
  );
}