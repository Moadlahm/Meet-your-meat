"use client";
import { useEffect, useState } from "react";
import { X, Gift, Leaf } from "lucide-react";

const STORAGE_KEY = "mym_popup_dismissed";
const PROMO_CODE = "BIENVENUE10";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Red top band */}
        <div className="bg-brand-red px-6 pt-8 pb-6 text-white text-center relative">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Gift size={28} className="text-white" />
          </div>
          <p className="text-red-200 text-sm font-medium mb-1">Offre de bienvenue</p>
          <h2 className="text-3xl font-black leading-tight">
            -10$ sur votre<br />1ère commande
          </h2>
        </div>

        {/* Bottom white */}
        <div className="px-6 py-6">
          {!submitted ? (
            <>
              <p className="text-gray-500 text-sm text-center mb-5">
                Entrez votre email et recevez votre code promo instantanément. Livraison gratuite incluse.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-base"
                >
                  Obtenir mon -10$
                </button>
              </form>

              <div className="flex items-center justify-center gap-1 mt-4 text-xs text-gray-400">
                <Leaf size={11} className="text-green-500" />
                <span>Viande halal certifiée · Livraison chaque dimanche</span>
              </div>

              <button
                onClick={dismiss}
                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 transition-colors"
              >
                Non merci, je paye plein prix
              </button>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-black text-xl text-brand-black mb-2">Votre code est prêt !</h3>
              <div className="bg-gray-100 rounded-2xl py-3 px-6 mb-4">
                <p className="text-xs text-gray-500 mb-1">Votre code promo</p>
                <p className="text-2xl font-black tracking-widest text-brand-red">{PROMO_CODE}</p>
              </div>
              <p className="text-sm text-gray-500 mb-5">
                Appliquez ce code au moment du paiement pour obtenir -10$ sur votre première commande.
              </p>
              <button onClick={dismiss} className="btn-primary w-full justify-center">
                Commencer à magasiner
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
