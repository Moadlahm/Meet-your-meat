import Link from "next/link";
import { Instagram, Facebook, MapPin, Clock, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-red text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="bg-white inline-block px-3 py-1.5 rounded mb-4">
              <span className="text-brand-red font-black text-lg tracking-tight">
                meet<span className="font-light">yourmeat</span>
              </span>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              Viande halal fraîche livrée directement chez vous, chaque weekend à Montréal et ses environs.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Leaf size={14} className="text-green-300" />
              <span className="text-xs text-green-200 font-semibold">100% Halal Certifié</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-200">Navigation</h3>
            <ul className="space-y-2 text-sm text-red-100">
              {[
                { href: "/produits", label: "Nos Boîtes" },
                { href: "/bbq", label: "BBQ Boxes" },
                { href: "/boite-sur-mesure", label: "Boîte Sur Mesure" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Livraison */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-200">Livraison</h3>
            <ul className="space-y-3 text-sm text-red-100">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Montréal, Laval, Brossard, Longueuil, Rive-Nord, Rive-Sud + plus</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <span>Chaque dimanche · 12h00 – 21h00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-200">Contact</h3>
            <ul className="space-y-2 text-sm text-red-100">
              <li>
                <a href="mailto:info@meetyourmeat.ca" className="hover:text-white transition-colors">
                  info@meetyourmeat.ca
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/15145551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-red-300">
          <p>© 2026 MeetYourMeat · Tous droits réservés</p>
          <p>Viande halal fraîche · Livraison dimanche · Montréal</p>
        </div>
      </div>
    </footer>
  );
}
