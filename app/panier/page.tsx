"use client";
import { useCart } from "@/lib/cart-context";
import { DELIVERY_DAYS } from "@/lib/data";
import { Trash2, Plus, Minus, Leaf, Truck, Calendar, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TIME_SLOT = "12h00 – 21h00";
const DELIVERY_FEE = 0; // Free

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice, deliveryDate, setDeliveryDate } = useCart();
  const [postalCode, setPostalCode] = useState("");
  const [postalChecked, setPostalChecked] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const isEmpty = items.length === 0;
  const selectedDay = DELIVERY_DAYS.find((d) => d.date === deliveryDate);
  const canCheckout = !isEmpty && deliveryDate;

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-black text-brand-black mb-3">Commande confirmée !</h1>
        <p className="text-gray-500 mb-2">
          Votre viande halal fraîche sera livrée le{" "}
          <span className="font-bold text-brand-black">{selectedDay?.label ?? deliveryDate}</span>.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Vous recevrez une confirmation par SMS. Livraison entre {TIME_SLOT}.
        </p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          Des questions ?{" "}
          <a href="https://wa.me/15145551234" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
            Écrivez-nous sur WhatsApp
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-8">Votre panier</h1>

      {isEmpty ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">Votre panier est vide</h2>
          <p className="text-gray-400 mb-6">Découvrez nos boîtes ou créez la vôtre.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/produits" className="btn-primary">Voir les boîtes</Link>
            <Link href="/boite-sur-mesure" className="btn-secondary">Créer ma boîte</Link>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: items + delivery options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart items */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <span className="font-bold text-gray-700">Vos produits</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{items.length}</span>
              </div>
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b border-gray-100 last:border-0 flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    🥩
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Leaf size={11} className="text-green-600" />
                      <span className="text-xs text-green-600 font-medium">Halal</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full bg-brand-red text-white hover:bg-brand-red-dark flex items-center justify-center transition-colors"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <p className="font-black text-brand-red">{(item.price * item.quantity).toFixed(2)}$</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors mt-1"
                      aria-label="Supprimer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery date selector — signature feature */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-brand-red" />
                <h2 className="font-bold text-gray-700">Choisissez votre date de livraison</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {DELIVERY_DAYS.map((day) => {
                  const [, , d] = day.date.split("-");
                  const [, month] = day.label.split(" ");
                  const dayNum = parseInt(d);
                  const monthShort = month?.slice(0, 3) ?? "";
                  const isSelected = deliveryDate === day.date;
                  return (
                    <button
                      key={day.date}
                      onClick={() => setDeliveryDate(day.date)}
                      className={`rounded-2xl p-3 border-2 text-center transition-all ${
                        isSelected
                          ? "border-brand-black bg-brand-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <p className="text-xs font-medium opacity-70">Dim</p>
                      <p className="text-2xl font-black">{dayNum}</p>
                      <p className="text-xs font-medium capitalize">{monthShort}</p>
                    </button>
                  );
                })}
              </div>

              {deliveryDate && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2 text-sm text-green-700">
                  <Truck size={15} />
                  <span>
                    Livraison le <strong>{selectedDay?.label}</strong> entre <strong>{TIME_SLOT}</strong>
                  </span>
                </div>
              )}
              {!deliveryDate && (
                <p className="text-xs text-amber-600 bg-amber-50 rounded-xl p-3">
                  Sélectionnez une date pour continuer
                </p>
              )}
            </div>

            {/* Delivery zone check */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Truck size={18} className="text-brand-red" />
                <h2 className="font-bold text-gray-700">Zone de livraison</h2>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ex: H1A 1A1"
                  value={postalCode}
                  onChange={(e) => { setPostalCode(e.target.value.toUpperCase()); setPostalChecked(false); }}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
                  maxLength={7}
                />
                <button
                  onClick={() => setPostalChecked(true)}
                  className="bg-brand-red text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-brand-red-dark transition-colors"
                >
                  Vérifier
                </button>
              </div>

              {postalChecked && postalCode && (
                <div className="mt-3 bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-sm text-green-700 font-semibold">✓ Livraison disponible dans votre zone</p>
                  <p className="text-sm text-green-600 font-bold mt-1">Frais de livraison : GRATUIT</p>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-3">
                Zones couvertes : Montréal, Laval, Brossard, Longueuil, Rive-Nord, Rive-Sud et plus.
              </p>
            </div>
          </div>

          {/* Right: order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-24">
              <h2 className="font-black text-lg mb-4">Récapitulatif</h2>

              <div className="space-y-3 mb-4 text-sm">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-600">
                    <span className="flex-1 pr-2 truncate">{item.name}</span>
                    <span className="shrink-0">{(item.price * item.quantity).toFixed(2)}$</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2 text-sm mb-4">
                <div className="flex justify-between text-gray-500">
                  <span>Sous-total</span>
                  <span>{totalPrice.toFixed(2)}$</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Livraison locale</span>
                  <span className="text-green-600 font-bold">GRATUIT</span>
                </div>
                {deliveryDate && (
                  <div className="flex justify-between text-gray-500">
                    <span>Date de livraison</span>
                    <span className="text-gray-700 font-medium text-xs text-right">{selectedDay?.label}</span>
                  </div>
                )}
                <div className="flex justify-between font-black text-lg border-t pt-3">
                  <span>Total</span>
                  <span className="text-brand-red">{totalPrice.toFixed(2)}$</span>
                </div>
              </div>

              <button
                onClick={() => canCheckout && setOrderPlaced(true)}
                disabled={!canCheckout}
                className={`w-full font-bold py-4 rounded-full text-lg transition-colors flex items-center justify-center gap-2 mb-3 ${
                  canCheckout
                    ? "bg-brand-red text-white hover:bg-brand-red-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Confirmer ma commande <ChevronRight size={18} />
              </button>

              {!deliveryDate && !isEmpty && (
                <p className="text-center text-xs text-amber-600 mb-3">
                  Choisissez une date de livraison d&apos;abord
                </p>
              )}

              <a
                href="https://wa.me/15145551234?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20ma%20commande."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors py-2"
              >
                <MessageCircle size={16} className="text-green-500" />
                Une question ? WhatsApp
              </a>

              <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400">
                <Leaf size={12} className="text-green-500" />
                <span>Halal certifié · Fraîche · Livraison gratuite</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
