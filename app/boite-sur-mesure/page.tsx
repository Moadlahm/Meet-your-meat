"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import { CUSTOM_PRODUCTS } from "@/lib/data";
import { Plus, Minus, ShoppingCart, Leaf, Info } from "lucide-react";

type Selection = Record<string, number>;

const CATEGORIES = ["Boeuf", "Agneau", "Poulet", "Veau"];
const CATEGORY_EMOJI: Record<string, string> = {
  Boeuf: "🥩",
  Agneau: "🌿",
  Poulet: "🍗",
  Veau: "🥩",
};

export default function BoiteSurMesurePage() {
  const [selection, setSelection] = useState<Selection>({});
  const [activeCategory, setActiveCategory] = useState("Boeuf");
  const { addItem } = useCart();
  const router = useRouter();

  const setQty = (id: string, qty: number) => {
    setSelection((prev) => {
      if (qty <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: qty };
    });
  };

  const totalPrice = Object.entries(selection).reduce((sum, [id, qty]) => {
    const product = CUSTOM_PRODUCTS.find((p) => p.id === id);
    return sum + (product?.price ?? 0) * qty;
  }, 0);

  const totalKg = Object.entries(selection).reduce((sum, [, qty]) => sum + qty, 0);
  const itemCount = Object.keys(selection).length;

  const handleAddToCart = () => {
    if (itemCount === 0) return;
    const names = Object.entries(selection)
      .map(([id, qty]) => {
        const p = CUSTOM_PRODUCTS.find((p) => p.id === id)!;
        return `${qty}×${p.name}`;
      })
      .join(", ");
    addItem({ id: "custom-box", name: `Ma boîte sur mesure (${names})`, price: totalPrice });
    router.push("/panier");
  };

  const filteredProducts = CUSTOM_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="badge-halal mb-3 inline-flex"><Leaf size={12} /> Halal certifié</span>
        <h1 className="text-3xl font-black mb-2">Créez votre boîte sur mesure</h1>
        <p className="text-gray-500">Choisissez exactement ce que vous voulez. Minimum 1 kg par article.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Product selector — 2/3 width */}
        <div className="lg:col-span-2">
          {/* Category tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors shrink-0 ${
                  activeCategory === cat
                    ? "bg-brand-red text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{CATEGORY_EMOJI[cat]}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map((product) => {
              const qty = selection[product.id] ?? 0;
              const isSelected = qty > 0;

              return (
                <div
                  key={product.id}
                  className={`rounded-2xl border-2 p-4 transition-all ${
                    isSelected ? "border-brand-red bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-lg">{product.emoji}</span>
                        <span className="text-xs text-gray-400">{product.unit}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 leading-tight">{product.name}</h3>
                      <p className="text-brand-red font-black text-xl mt-1">{product.price.toFixed(2)}$</p>
                    </div>
                    {isSelected && (
                      <span className="bg-brand-red text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2 mt-1">
                        {qty} kg
                      </span>
                    )}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    {qty === 0 ? (
                      <button
                        onClick={() => setQty(product.id, 1)}
                        className="flex-1 bg-brand-red text-white font-bold py-2 rounded-xl hover:bg-brand-red-dark transition-colors flex items-center justify-center gap-1 text-sm"
                      >
                        <Plus size={15} /> Ajouter 1 kg
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setQty(product.id, qty - 1)}
                          className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <Minus size={15} />
                        </button>
                        <span className="flex-1 text-center font-bold text-gray-800">{qty} kg</span>
                        <button
                          onClick={() => setQty(product.id, qty + 1)}
                          className="w-9 h-9 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white flex items-center justify-center transition-colors"
                        >
                          <Plus size={15} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary sidebar — 1/3 width */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-24">
            <h2 className="font-black text-lg mb-4">Votre boîte</h2>

            {itemCount === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <ShoppingCart size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">Sélectionnez des produits</p>
              </div>
            ) : (
              <div className="space-y-2 mb-4 max-h-64 overflow-y-auto pr-1">
                {Object.entries(selection).map(([id, qty]) => {
                  const product = CUSTOM_PRODUCTS.find((p) => p.id === id)!;
                  return (
                    <div key={id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 flex-1 pr-2">{product.name}</span>
                      <span className="text-gray-400 whitespace-nowrap">{qty} kg</span>
                      <span className="font-semibold text-gray-800 ml-3 whitespace-nowrap">
                        {(product.price * qty).toFixed(2)}$
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {itemCount > 0 && (
              <>
                <div className="border-t pt-4 space-y-2 text-sm mb-4">
                  <div className="flex justify-between text-gray-500">
                    <span>Poids total</span>
                    <span>{totalKg} kg</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Livraison</span>
                    <span className="text-green-600 font-semibold">Gratuite</span>
                  </div>
                  <div className="flex justify-between font-black text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-brand-red">{totalPrice.toFixed(2)}$</span>
                  </div>
                </div>
              </>
            )}

            <button
              onClick={handleAddToCart}
              disabled={itemCount === 0}
              className={`w-full font-bold py-3 rounded-full transition-colors flex items-center justify-center gap-2 ${
                itemCount > 0
                  ? "bg-brand-red text-white hover:bg-brand-red-dark"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ShoppingCart size={18} />
              {itemCount > 0 ? "Ajouter au panier" : "Sélectionnez des produits"}
            </button>

            <div className="flex items-start gap-2 mt-3 text-xs text-gray-400">
              <Info size={12} className="mt-0.5 shrink-0" />
              <span>Commandez avant vendredi 23h59 pour recevoir dimanche.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
