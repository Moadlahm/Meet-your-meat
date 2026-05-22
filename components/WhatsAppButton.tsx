"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15145551234?text=Bonjour%2C%20je%20voudrais%20commander%20de%20la%20viande%20halal."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
