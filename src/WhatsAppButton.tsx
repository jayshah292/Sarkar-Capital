"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Replace with your official Sarkar Capital desk WhatsApp number (with 91 country code)
  const phoneNumber = "919825898760";
  const defaultMessage = encodeURIComponent(
    "Hi Sarkar Capital, I would like to schedule an institutional portfolio consultation."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp consultation"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat with Sarkar Capital Desk"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide pr-1">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
