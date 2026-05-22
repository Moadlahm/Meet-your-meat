"use client";
import { useState } from "react";
import { MapPin, ChevronRight, Truck, Info } from "lucide-react";
import Link from "next/link";
import { DELIVERY_ZONES } from "@/lib/data";

type ZoneInfo = { covered: true; fee: number; label: string } | { covered: false };

function getZoneInfo(postal: string): ZoneInfo {
  const clean = postal.trim().toUpperCase().replace(/\s/g, "");
  if (clean.length < 3) return { covered: false };

  // Montreal island
  if (clean.match(/^H[1-9]/)) return { covered: true, fee: 5, label: "Montréal" };
  // Laval
  if (clean.startsWith("H7")) return { covered: true, fee: 9, label: "Laval" };
  // South Shore — Brossard, Longueuil, Saint-Lambert
  if (clean.match(/^J4[BGHKMNPRSTV]/)) return { covered: true, fee: 9, label: "Rive-Sud (proche)" };
  if (clean.match(/^J4[WXYZ]/)) return { covered: true, fee: 13, label: "Rive-Sud (éloignée)" };
  // North Shore — Terrebonne, Blainville, Saint-Jérôme
  if (clean.match(/^J5|^J6|^J7/)) return { covered: true, fee: 13, label: "Rive-Nord" };
  // Repentigny
  if (clean.startsWith("J6A")) return { covered: true, fee: 13, label: "Repentigny" };

  return { covered: false };
}

export default function PostalCheck() {
  const [postal, setPostal] = useState("");
  const [result, setResult] = useState<ZoneInfo | null>(null);

  const check = () => {
    if (postal.length < 3) return;
    setResult(getZoneInfo(postal));
  };

  return (
    <div className="mt-6">
      {!result && (
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            <MapPin size={14} className="inline mr-1 text-brand-red" />
            On livre chez vous ? Vérifiez votre zone
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Code postal (ex: H1A 1A1)"
              value={postal}
              onChange={(e) => { setPostal(e.target.value.toUpperCase()); setResult(null); }}
              onKeyDown={(e) => e.key === "Enter" && check()}
              maxLength={7}
              className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
            />
            <button
              onClick={check}
              disabled={postal.length < 3}
              className="bg-brand-red text-white font-bold px-5 py-3 rounded-2xl hover:bg-brand-red-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1.5">
            {DELIVERY_ZONES.slice(0, 4).join(" · ")} et plus
          </p>
        </div>
      )}

      {result?.covered && (
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-300 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <Truck size={15} className="text-green-600 shrink-0" />
              <p className="text-sm font-bold text-green-700">✓ Livraison disponible — {result.label}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-green-600">
                Frais de livraison estimés :{" "}
                <span className="font-black text-green-700">{result.fee}$</span>
              </p>
              <button
                onClick={() => { setPostal(""); setResult(null); }}
                className="text-xs text-green-500 hover:text-green-700 underline ml-3"
              >
                Changer
              </button>
            </div>
            <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
              <Info size={11} />
              Frais exacts confirmés au moment du paiement
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/produits" className="btn-primary text-center justify-center">
              Choisir ma boîte <ChevronRight size={18} />
            </Link>
            <Link href="/boite-sur-mesure" className="btn-secondary text-center justify-center">
              Créer ma propre boîte
            </Link>
          </div>
        </div>
      )}

      {result && !result.covered && (
        <div className="space-y-3">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
            <p className="text-sm font-bold text-amber-700">Votre zone n'est pas encore couverte</p>
            <p className="text-sm text-amber-600 mt-0.5">
              Laissez votre email et soyez le premier averti quand on arrive chez vous.
            </p>
          </div>
          <WaitlistForm postal={postal} />
          <button
            onClick={() => { setPostal(""); setResult(null); }}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Essayer un autre code postal
          </button>
        </div>
      )}
    </div>
  );
}

function WaitlistForm({ postal }: { postal: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) return (
    <p className="text-sm text-green-700 font-semibold bg-green-50 rounded-xl p-3">
      ✓ On vous avertira dès que {postal} est couvert !
    </p>
  );

  return (
    <div className="flex gap-2">
      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
      />
      <button
        onClick={() => email && setDone(true)}
        className="bg-brand-black text-white font-bold px-4 py-3 rounded-2xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        M'avertir
      </button>
    </div>
  );
}
