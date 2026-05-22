import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "MeetYourMeat — Viande Halal Fraîche Livrée à Domicile | Montréal",
  description: "Viande halal fraîche livrée le weekend à Montréal, Laval, Brossard et plus. Boîtes prêtes ou sur mesure. Commandez avant vendredi minuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
