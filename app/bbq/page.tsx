import Link from "next/link";
import { CheckCircle, Leaf, ChevronRight } from "lucide-react";
import { BBQ_BOXES } from "@/lib/data";

export default function BBQPage() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero banner */}
        <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-3xl p-10 text-white text-center mb-12">
          <h1 className="text-4xl font-black mb-3">BBQ Boxes 🔥</h1>
          <p className="text-orange-200 text-lg max-w-lg mx-auto">
            Tout ce qu&apos;il faut pour un barbecue inoubliable. Viande halal fraîche, livrée dimanche.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-orange-200">
            <span>✓ Viande halal certifiée</span>
            <span>✓ Livraison dimanche</span>
            <span>✓ Fraîche le jour J</span>
          </div>
        </div>

        {/* BBQ Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BBQ_BOXES.map((box, i) => (
            <div
              key={box.id}
              className={`card hover:shadow-xl transition-shadow flex flex-col ${
                i === 1 ? "ring-2 ring-brand-red" : "border border-gray-100"
              }`}
            >
              {i === 1 && (
                <div className="bg-brand-red text-white text-center text-xs font-bold py-1.5 tracking-wider">
                  LE PLUS POPULAIRE
                </div>
              )}

              <div className="bg-gradient-to-br from-orange-800 to-red-900 h-52 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🍖</div>
                  <p className="text-xs text-orange-200">Photo BBQ</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-1">
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                    {box.badge}
                  </span>
                </div>
                <h2 className="text-xl font-black mt-2 mb-1">{box.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{box.description}</p>

                <div className="mb-5 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Inclus dans la boîte</p>
                  <ul className="space-y-1.5">
                    {box.contents.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-orange-600 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                  <Leaf size={12} className="text-green-600" />
                  <span>Halal certifié · Fraîche le jour de livraison</span>
                </div>

                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <p className="text-3xl font-black text-brand-red">{box.price}$</p>
                      <p className="text-xs text-gray-400">{box.totalKg} kg · {box.persons}</p>
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      <p>Livraison</p>
                      <p className="font-bold text-gray-600">selon zone</p>
                    </div>
                  </div>
                  <Link
                    href={`/bbq/${box.slug}`}
                    className={`w-full justify-center text-center font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2 ${
                      i === 1
                        ? "bg-brand-red text-white hover:bg-brand-red-dark"
                        : "border-2 border-brand-red text-brand-red hover:bg-red-50"
                    }`}
                  >
                    Voir et commander <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <h3 className="font-black text-lg mb-2">Vous préférez choisir vous-même ?</h3>
          <p className="text-gray-500 text-sm mb-4">Créez votre propre boîte avec exactement les morceaux que vous aimez.</p>
          <Link href="/boite-sur-mesure" className="btn-primary">
            Créer ma boîte sur mesure <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
