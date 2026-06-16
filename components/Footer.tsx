import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

const CDN = "https://www.meetyourmeat.ca/cdn/shop/files";

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.166 2C8.756 2 6 4.756 6 8.166v.522c-.55.2-1.1.478-1.1 1.278 0 .678.444 1.044.833 1.222-.133.444-.322.889-.567 1.333-.622 1.156-1.6 1.756-2.166 2.1-.2.111-.334.311-.334.533 0 .378.289.667.667.667.111 0 .244-.022.378-.067.444-.178.944-.267 1.444-.267.289 0 .556.044.8.111.244.067.489.178.756.311.489.244.978.4 1.467.4.311 0 .644-.067.956-.2.311-.133.644-.311.978-.311.311 0 .622.133.956.311.311.133.644.2.956.2.489 0 .978-.156 1.467-.4.267-.133.511-.244.756-.311.244-.067.511-.111.8-.111.5 0 1 .089 1.444.267.133.044.267.067.378.067.378 0 .667-.289.667-.667 0-.222-.133-.422-.333-.533-.567-.344-1.545-.944-2.167-2.1-.244-.444-.433-.889-.567-1.333.389-.178.833-.544.833-1.222 0-.8-.55-1.078-1.1-1.278v-.522C18 4.756 15.244 2 11.834 2H12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* 4 value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-white/10">
          {[
            { icon: `${CDN}/save-timesvg_300x.svg?v=1747262942`, title: "Gagnez du temps", desc: "Plus besoin d'aller chez le boucher" },
            { icon: `${CDN}/meat-chicken_300x.svg?v=1747264604`, title: "Halal certifié", desc: "100% abattage traditionnel" },
            { icon: `${CDN}/frigo_dc193f9a-c534-4bcd-9b6e-621247ecaa29_300x.svg?v=1747264765`, title: "Fraîche & qualité", desc: "Préparée le jour de livraison" },
            { icon: `${CDN}/hapy_300x.svg?v=1747264436`, title: "Livraison dimanche", desc: "12h–21h dans toute la région" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full p-2">
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain invert" />
              </div>
              <div>
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Image
              src={`${CDN}/meetyourmeatlogowhite.svg?v=1747261154`}
              alt="MeetYourMeat"
              width={160}
              height={40}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Viande halal fraîche livrée directement chez vous, chaque dimanche à Montréal et ses environs.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://instagram.com/meetyourmeatmtl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://tiktok.com/@meetyourmeat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Snapchat">
                <SnapchatIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Boutique</h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Livraison</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-red" />
                <span>Montréal, Laval, Brossard, Longueuil et plus</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-brand-red" />
                <span>Chaque dimanche · 12h00 – 21h00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@meetyourmeat.ca" className="hover:text-white transition-colors">
                  info@meetyourmeat.ca
                </a>
              </li>
              <li>
                <a href="https://wa.me/15145551234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 MeetYourMeat · Tous droits réservés</p>
          <p>Viande halal fraîche · Livraison dimanche · Montréal</p>
        </div>
      </div>
    </footer>
  );
}
