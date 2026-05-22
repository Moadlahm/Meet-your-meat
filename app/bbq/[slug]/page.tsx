"use client";
import { notFound } from "next/navigation";
import { CheckCircle, Leaf, Truck, ShieldCheck, Users } from "lucide-react";
import { BBQ_BOXES } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

export default function BBQProductPage({ params }: { params: { slug: string } }) {
  const box = BBQ_BOXES.find((b) => b.slug === params.slug);
  if (!box) notFound();

  const { addItem } = useCart();
  const router = useRouter();

  const handleOrder = () => {
    addItem({ id: box.id, name: box.name, price: box.price });
    router.push("/panier");
  };

  const persons: Record<string, string> = {
    "bbq-standard": "4–6 personnes",
    "bbq-feast": "6–10 personnes",
    "bbq-grillmaster": "10+ personnes",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="bg-gradient-to-br from-orange-800 to-red-900 rounded-3xl aspect-square flex items-center justify-center relative">
          <div className="text-center text-white">
            <div className="text-8xl mb-3">🍖</div>
            <p className="text-orange-200 text-sm">Photo BBQ</p>
          </div>
          <span className="absolute top-4 left-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {box.badge}
          </span>
          <span className="absolute top-4 right-4 badge-halal">
            <Leaf size={12} /> Halal
          </span>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-halal"><Leaf size={12} /> 100% Halal</span>
            {persons[box.id] && (
              <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                <Users size={13} /> {persons[box.id]}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-black text-brand-black mb-2">{box.name}</h1>
          <p className="text-gray-500 mb-5">{box.description}</p>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-5">
            <div className="flex items-end gap-3">
              <p className="text-4xl font-black text-brand-red">{box.price}$</p>
              <div className="pb-1">
                <p className="text-sm font-medium text-gray-600">{box.totalKg} kg de viande</p>
                <p className="text-sm text-gray-400">~{box.pricePerKg}$/kg</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-2">
              <Truck size={14} /> Livraison gratuite incluse
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Contenu de la boîte</h3>
            <ul className="space-y-2">
              {box.contents.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={14} className="text-orange-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            {[
              { icon: <Leaf size={14} className="text-green-600" />, text: "Halal certifié" },
              { icon: <Truck size={14} className="text-brand-red" />, text: "Livraison gratuite" },
              { icon: <ShieldCheck size={14} className="text-brand-red" />, text: "Fraîche le jour J" },
              { icon: <Users size={14} className="text-brand-red" />, text: persons[box.id] ?? "" },
            ].map((s) => (
              <div key={s.text} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                {s.icon}
                <span className="text-gray-700 font-medium">{s.text}</span>
              </div>
            ))}
          </div>

          <button onClick={handleOrder} className="btn-primary w-full justify-center text-lg py-4">
            Commander cette BBQ Box
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Commandez avant vendredi 23h59 · Livraison dimanche
          </p>
        </div>
      </div>
    </div>
  );
}
