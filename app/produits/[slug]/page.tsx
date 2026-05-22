"use client";
import { notFound } from "next/navigation";
import { CheckCircle, Leaf, ShieldCheck, Star, Truck, Calendar, ChevronRight } from "lucide-react";
import { PREMADE_BOXES } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const box = PREMADE_BOXES.find((b) => b.slug === params.slug);
  if (!box) notFound();

  const { addItem } = useCart();
  const router = useRouter();

  const handleOrder = () => {
    addItem({ id: box.id, name: box.name, price: box.price });
    router.push("/panier");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* Image — meat first, not closed box */}
        <div className="space-y-3">
          <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="text-8xl mb-3">🥩</div>
              <p className="text-gray-400 text-sm font-medium">Photo viande fraîche</p>
              <p className="text-gray-300 text-xs">Remplacer par photo produit</p>
            </div>
            {box.badge && (
              <span className="absolute top-4 left-4 bg-brand-red text-white font-bold px-3 py-1 rounded-full text-sm">
                {box.badge}
              </span>
            )}
            <span className="absolute top-4 right-4 badge-halal">
              <Leaf size={12} /> Halal
            </span>
          </div>
          {/* Thumbnail strip */}
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-brand-red transition-all">
                <span className="text-2xl">{i === 0 ? "🥩" : i === 1 ? "📦" : "🔪"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="badge-halal"><Leaf size={12} /> 100% Halal Certifié</span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Star size={13} className="fill-yellow-400 text-yellow-400" /> 4.9/5
            </span>
          </div>

          <h1 className="text-3xl font-black text-brand-black mb-2">{box.name}</h1>
          <p className="text-gray-500 mb-5">{box.description}</p>

          {/* Price block */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <div className="flex items-end gap-3 mb-3">
              <p className="text-4xl font-black text-brand-red">{box.price}$</p>
              <p className="text-sm text-gray-500 font-medium pb-1">{box.totalKg} kg de viande</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-sm font-semibold text-gray-700">
                📅 {box.weeks} de viande
              </span>
              <span className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-sm font-semibold text-gray-700">
                👨‍👩‍👧‍👦 {box.persons}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Truck size={14} /> Livraison calculée selon votre zone
            </div>
          </div>

          {/* Contents */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Contenu de la boîte</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {box.contents.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={14} className="text-brand-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            {[
              { icon: <Leaf size={15} className="text-green-600" />, label: "Halal certifié", sub: "Abattage traditionnel" },
              { icon: <Truck size={15} className="text-brand-red" />, label: "Livraison dimanche", sub: "Frais selon votre zone" },
              { icon: <Calendar size={15} className="text-brand-red" />, label: "Choisissez votre date", sub: "4 dimanches disponibles" },
              { icon: <ShieldCheck size={15} className="text-brand-red" />, label: "Viande fraîche", sub: "Préparée le jour J" },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-2 bg-gray-50 rounded-xl p-3">
                <div className="mt-0.5">{s.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{s.label}</p>
                  <p className="text-gray-400 text-xs">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={handleOrder} className="btn-primary w-full justify-center text-lg py-4">
            Commander cette boîte
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Commandez avant vendredi 23h59 pour recevoir dimanche
          </p>
        </div>
      </div>

      {/* Comparison table — desktop only */}
      <div className="mt-12 hidden lg:block">
        <h2 className="text-2xl font-black mb-6 text-center">Comparez nos boîtes</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-bold text-gray-600">Boîte</th>
                <th className="text-center p-4 font-bold text-gray-600">Poids</th>
                <th className="text-center p-4 font-bold text-gray-600">Prix</th>
                <th className="text-center p-4 font-bold text-gray-600">Durée estimée</th>
                <th className="text-center p-4 font-bold text-gray-600">Personnes</th>
                <th className="text-center p-4 font-bold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {PREMADE_BOXES.map((b, i) => (
                <tr key={b.id} className={`border-t ${b.id === box.id ? "bg-red-50" : ""}`}>
                  <td className="p-4 font-semibold flex items-center gap-2">
                    {b.id === box.id && <span className="w-2 h-2 bg-brand-red rounded-full" />}
                    {b.name}
                    {b.badge && <span className="text-xs bg-brand-red text-white px-2 py-0.5 rounded-full">{b.badge}</span>}
                  </td>
                  <td className="p-4 text-center">{b.totalKg} kg</td>
                  <td className="p-4 text-center font-bold text-brand-red">{b.price}$</td>
                  <td className="p-4 text-center text-gray-500">{b.weeks}</td>
                  <td className="p-4 text-center text-gray-500">{b.persons}</td>
                  <td className="p-4 text-center">
                    {b.id === box.id ? (
                      <span className="text-brand-red font-bold text-xs">Sélectionnée</span>
                    ) : (
                      <a href={`/produits/${b.slug}`} className="text-brand-red text-xs font-bold hover:underline">
                        Voir →
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile alternative — other boxes as cards */}
      <div className="mt-10 lg:hidden">
        <h2 className="text-xl font-black mb-4">Autres boîtes disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PREMADE_BOXES.filter((b) => b.id !== box.id).map((b) => (
            <a
              key={b.id}
              href={`/produits/${b.slug}`}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-red-50 transition-colors border border-gray-200 active:scale-95"
            >
              <div>
                <p className="font-bold text-sm text-gray-800">{b.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{b.totalKg} kg · {b.weeks} · {b.persons}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-brand-red font-black text-lg">{b.price}$</p>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
