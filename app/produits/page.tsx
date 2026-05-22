import Link from "next/link";
import { CheckCircle, Leaf, ChevronRight } from "lucide-react";
import { PREMADE_BOXES, BBQ_BOXES } from "@/lib/data";

export default function ProduitsPage() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="badge-halal mb-3 inline-flex">
            <Leaf size={12} /> 100% Halal Certifié
          </span>
          <h1 className="text-4xl font-black text-brand-black mb-3">Nos Boîtes</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Boîtes prêtes sélectionnées par nos soins, ou créez la vôtre. Livraison gratuite chaque dimanche.
          </p>
        </div>

        {/* Link to custom box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-gray-800">Vous avez des préférences spécifiques ?</h3>
            <p className="text-sm text-gray-500 mt-1">Créez votre propre boîte avec exactement les morceaux que vous voulez.</p>
          </div>
          <Link href="/boite-sur-mesure" className="btn-primary shrink-0">
            Créer ma boîte <ChevronRight size={16} />
          </Link>
        </div>

        {/* Premade Boxes */}
        <h2 className="text-2xl font-black mb-6">Boîtes Prêtes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PREMADE_BOXES.map((box) => (
            <div key={box.id} className="card border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
              {/* Image */}
              <div className="bg-gray-100 h-52 flex items-center justify-center relative flex-shrink-0">
                <div className="text-center">
                  <div className="text-6xl mb-2">🥩</div>
                  <p className="text-xs text-gray-400">Photo viande fraîche</p>
                </div>
                {box.badge && (
                  <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full">
                    {box.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 badge-halal">
                  <Leaf size={10} /> Halal
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-black text-xl mb-1">{box.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{box.description}</p>

                {/* Contents */}
                <div className="mb-4 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contenu</p>
                  <ul className="space-y-1.5">
                    {box.contents.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <p className="text-3xl font-black text-brand-red">{box.price}$</p>
                      <p className="text-xs text-gray-400">{box.totalKg} kg · ~{box.pricePerKg}$/kg</p>
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      <p>Livraison</p>
                      <p className="font-bold text-green-600">GRATUITE</p>
                    </div>
                  </div>
                  <Link
                    href={`/produits/${box.slug}`}
                    className="btn-primary w-full justify-center text-center"
                  >
                    Voir et commander
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BBQ Boxes section */}
        <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-black mb-2">BBQ Boxes 🔥</h2>
          <p className="text-orange-200 mb-6 text-sm">Parfaites pour votre prochain barbecue. Tout est inclus.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BBQ_BOXES.map((box) => (
              <Link
                key={box.id}
                href={`/bbq/${box.slug}`}
                className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4"
              >
                <p className="text-xs font-bold text-orange-300 mb-1">{box.badge}</p>
                <h3 className="font-bold text-lg mb-1">{box.name}</h3>
                <p className="text-orange-200 text-sm mb-3">{box.totalKg} kg</p>
                <p className="text-2xl font-black">{box.price}$</p>
              </Link>
            ))}
          </div>
          <Link href="/bbq" className="mt-6 inline-flex items-center gap-1 text-sm text-orange-200 hover:text-white transition-colors">
            Voir les BBQ Boxes <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
