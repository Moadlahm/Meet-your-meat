"use client";
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Announcement bar */}
      <div className="bg-brand-red text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
        🎁 <span className="font-black">-10$ sur votre 1ère commande</span> · 🚚 Livraison dimanche · Commandez avant vendredi 23h59
      </div>

      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-brand-red px-3 py-1.5 rounded">
            <span className="text-white font-black text-lg tracking-tight">
              meet<span className="font-light">yourmeat</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/panier" className="relative p-2 hover:text-brand-red transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
