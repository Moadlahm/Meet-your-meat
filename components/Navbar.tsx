"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/produits", label: "Produits" },
    { href: "/boite-sur-mesure", label: "Boîte Sur Mesure" },
    { href: "/bbq", label: "BBQ Boxes" },
    { href: "/contact", label: "Contact" },
  ];

  const ticker = "🚚 LIVRAISON DIMANCHE  ·  Rabais automatique de 10% · Minimum 120$  ·  🥩 Viande halal fraîche certifiée  ·  Commandez avant vendredi 23h59  ·  ";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Marquee */}
      <div className="bg-brand-red text-white text-xs sm:text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee font-medium">
          {ticker}{ticker}{ticker}
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.meetyourmeat.ca/cdn/shop/files/meetyourmeatlogo.png?v=1713745891"
            alt="MeetYourMeat"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/panier" className="relative p-2 hover:text-brand-red transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-gray-700 hover:text-brand-red transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
