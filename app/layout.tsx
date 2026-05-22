import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";
import EmailPopup from "@/components/EmailPopup";

export const metadata: Metadata = {
  title: "MeetYourMeat — Viande Halal Fraîche Livrée à Domicile | Montréal",
  description: "Viande halal fraîche livrée le weekend à Montréal, Laval, Brossard et plus. Boîtes prêtes ou sur mesure. Commandez avant vendredi minuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <EmailPopup />
        </CartProvider>
      </body>
    </html>
  );
}
