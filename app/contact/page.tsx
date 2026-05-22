import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-black mb-3">Contactez-nous</h1>
      <p className="text-gray-500 mb-10">Une question sur votre commande, la livraison ou nos produits ? On est là.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact options */}
        <div className="space-y-4">
          <a
            href="https://wa.me/15145551234?text=Bonjour%2C%20j%27ai%20une%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:border-green-400 transition-colors"
          >
            <div className="bg-green-500 text-white rounded-full p-3 shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">WhatsApp</h3>
              <p className="text-sm text-gray-500 mt-0.5">Réponse rapide, 7j/7. C&apos;est le plus rapide.</p>
              <p className="text-sm font-semibold text-green-700 mt-2">Écrire sur WhatsApp →</p>
            </div>
          </a>

          <a
            href="mailto:info@meetyourmeat.ca"
            className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors"
          >
            <div className="bg-brand-red text-white rounded-full p-3 shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <p className="text-sm text-gray-500 mt-0.5">Pour les questions moins urgentes.</p>
              <p className="text-sm font-semibold text-brand-red mt-2">info@meetyourmeat.ca</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="bg-brand-black text-white rounded-full p-3 shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Heures de réponse</h3>
              <p className="text-sm text-gray-500 mt-1">Lun–Ven: 9h–18h</p>
              <p className="text-sm text-gray-500">Sam–Dim: 10h–14h</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="bg-brand-black text-white rounded-full p-3 shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Zone de livraison</h3>
              <p className="text-sm text-gray-500 mt-1">
                Montréal, Laval, Brossard, Longueuil, Rive-Nord, Rive-Sud et plus.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ quick */}
        <div>
          <h2 className="font-black text-xl mb-4">Questions fréquentes</h2>
          <div className="space-y-3">
            {[
              { q: "Quand dois-je commander ?", a: "Avant vendredi 23h59 pour recevoir dimanche." },
              { q: "La livraison est-elle gratuite ?", a: "Oui, la livraison locale est entièrement gratuite." },
              { q: "La viande est-elle halal ?", a: "100% halal certifié, abattage traditionnel." },
              { q: "Puis-je modifier ma commande ?", a: "Contactez-nous sur WhatsApp avant vendredi 18h." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm">{faq.q}</p>
                <p className="text-gray-500 text-sm mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
