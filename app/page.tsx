import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, ChevronRight, Leaf } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import PostalCheck from "@/components/PostalCheck";
import { PREMADE_BOXES, BBQ_BOXES, TESTIMONIALS, NEXT_DELIVERY_DEADLINE, NEXT_DELIVERY_DATE } from "@/lib/data";

const CDN = "https://www.meetyourmeat.ca/cdn/shop/files";

const BOX_IMAGES: Record<string, string> = {
  essentielle: `${CDN}/meetyourmeat-essentiel_f6e2ca18-41d2-40dd-9e84-3c3b43f08a21.png?v=1765228637`,
  standard:    `${CDN}/boite_standard_1.png?v=1765228562`,
  avantage:    `${CDN}/Boite_avantage.png?v=1765228664`,
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-brand-black overflow-hidden min-h-[520px] flex items-center">
        <Image
          src={`${CDN}/boites-deviandes-tenu.png?v=1747269973`}
          alt="Boîtes de viande MeetYourMeat"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="max-w-xl">
            <span className="badge-halal mb-4 inline-flex">
              <Leaf size={12} />
              100% Halal Certifié
            </span>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white text-sm font-semibold">4.9/5 · 57+ commandes livrées</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              De la viande <span className="text-brand-red">halal fraîche</span> livrée chez vous
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Boîtes prêtes ou sur mesure. Chaque dimanche à Montréal, Laval, Brossard et plus.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-6 max-w-sm">
              <p className="text-white text-sm font-semibold mb-2">
                ⏰ Commandez avant <span className="text-brand-red font-black">{NEXT_DELIVERY_DEADLINE}</span>
              </p>
              <p className="text-gray-300 text-sm mb-3">pour recevoir le <span className="text-white font-bold">{NEXT_DELIVERY_DATE}</span></p>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/produits" className="bg-brand-red text-white font-black px-8 py-4 rounded-full text-center hover:bg-brand-red-dark transition-colors">
                Commander maintenant
              </Link>
              <Link href="/boite-sur-mesure" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-center hover:bg-white/10 transition-colors">
                Créer ma boîte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VÉRIF CODE POSTAL ── */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <PostalCheck />
        </div>
      </div>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-brand-black mb-2">Comment ça marche</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Simple, rapide et fiable</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: `${CDN}/checklist_300x.svg?v=1747268511`,
                title: "Composez votre boîte",
                desc: "Choisissez une boîte prête ou créez la vôtre avec les morceaux que vous aimez.",
              },
              {
                icon: `${CDN}/frigo_dc193f9a-c534-4bcd-9b6e-621247ecaa29_300x.svg?v=1747264765`,
                title: "Préparé avec soin",
                desc: "Votre viande halal est préparée fraîche et emballée le jour de la livraison.",
              },
              {
                icon: `${CDN}/hapy_300x.svg?v=1747264436`,
                title: "Livré chez vous",
                desc: "Chaque dimanche de 12h à 21h. Choisissez votre date lors de la commande.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center px-4">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-black text-lg mb-2 text-brand-black">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOÎTES PRÊTES ── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-black text-brand-black">Boîtes Préfaites</h2>
            <Link href="/produits" className="text-brand-red font-semibold text-sm flex items-center gap-1 hover:underline">
              Tout afficher <ChevronRight size={16} />
            </Link>
          </div>
          <p className="text-gray-500 mb-8 text-sm">Sélectionnées par nos soins. Variété, qualité et quantité garanties.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PREMADE_BOXES.map((box) => (
              <div key={box.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative bg-white p-6 flex items-center justify-center h-52">
                  {box.badge && (
                    <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      {box.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 badge-halal text-xs z-10">
                    <Leaf size={10} />
                    Halal
                  </span>
                  {BOX_IMAGES[box.id] ? (
                    <Image
                      src={BOX_IMAGES[box.id]}
                      alt={box.name}
                      width={200}
                      height={180}
                      className="object-contain h-40 w-auto"
                    />
                  ) : (
                    <div className="text-6xl">🥩</div>
                  )}
                </div>
                <div className="p-5 border-t border-gray-100">
                  <h3 className="font-black text-lg mb-1">{box.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{box.persons} · {box.totalKg} kg · {box.weeks}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1 mt-3">
                    {box.contents.slice(0, 4).map((c) => (
                      <li key={c} className="flex items-center gap-1.5">
                        <CheckCircle size={12} className="text-brand-red shrink-0" />
                        {c}
                      </li>
                    ))}
                    {box.contents.length > 4 && (
                      <li className="text-gray-400 text-xs">+{box.contents.length - 4} autres morceaux</li>
                    )}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <p className="text-2xl font-black text-brand-red">{box.price}$</p>
                    <Link
                      href={`/produits/${box.slug}`}
                      className="bg-brand-red text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-brand-red-dark transition-colors"
                    >
                      Ajouter au panier
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE IMAGE ── */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src={`${CDN}/love-meat.png?v=1765228637`}
          alt="Viande halal fraîche MeetYourMeat"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-3xl md:text-5xl font-black mb-4">Fraîche. Halal. Livrée.</p>
            <Link href="/produits" className="bg-white text-brand-red font-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block">
              Voir les boîtes
            </Link>
          </div>
        </div>
      </section>

      {/* ── BBQ BOXES ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-black text-brand-black">BBQ Boxes 🔥</h2>
            <Link href="/bbq" className="text-brand-red font-semibold text-sm flex items-center gap-1 hover:underline">
              Tout afficher <ChevronRight size={16} />
            </Link>
          </div>
          <p className="text-gray-500 mb-8 text-sm">Pour un BBQ inoubliable. Tout est inclus, rien à calculer.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BBQ_BOXES.map((box) => (
              <div key={box.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 shadow-md">
                <div className="bg-gradient-to-br from-stone-900 via-red-950 to-stone-900 h-44 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl mb-1">🍖</div>
                    <span className="text-xs font-bold text-orange-300 bg-orange-900/50 px-3 py-1 rounded-full">{box.badge}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg mb-1">{box.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{box.persons} · {box.totalKg} kg</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {box.contents.map((c) => (
                      <li key={c} className="flex items-center gap-1.5">
                        <CheckCircle size={12} className="text-brand-red shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <p className="text-2xl font-black text-brand-red">{box.price}$</p>
                    <Link
                      href={`/bbq/${box.slug}`}
                      className="bg-brand-red text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-brand-red-dark transition-colors"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BÉNÉFICES ── */}
      <section className="relative overflow-hidden">
        <Image
          src={`${CDN}/BENEFITCLIENTS_1.png?v=1765228637`}
          alt="Pourquoi choisir MeetYourMeat"
          width={1600}
          height={600}
          className="w-full object-cover"
        />
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2">Ce que disent nos clients</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Des familles de Montréal qui commandent chaque mois</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.city} · {t.box}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden">
            <Image
              src={`${CDN}/avis-meetyourmeat.png?v=1765228664`}
              alt="Avis clients MeetYourMeat"
              width={1200}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="bg-brand-black text-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-2">On livre dans toute la région</h2>
          <p className="text-gray-400 mb-6 text-sm">Montréal et ses environs, chaque dimanche</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Montréal", "Laval", "Brossard", "Longueuil", "Rive-Nord", "Rive-Sud", "Repentigny", "Saint-Jérôme", "Terrebonne", "Blainville", "Boisbriand"].map((zone) => (
              <span key={zone} className="bg-white/10 text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-3">
            {[
              { q: "La viande est-elle vraiment halal ?", a: "Oui, à 100%. Toute notre viande provient de fournisseurs halal certifiés avec abattage traditionnel. Le logo halal est affiché sur chaque emballage." },
              { q: "Comment se passe la livraison ?", a: "Nous livrons chaque dimanche de 12h à 21h. Vous choisissez votre date lors de votre commande. Les frais varient selon votre zone — entrez votre code postal pour les connaître." },
              { q: "Quelle est la date limite pour commander ?", a: "Vous devez commander avant le vendredi à 23h59 pour recevoir votre livraison le dimanche suivant." },
              { q: "La viande est-elle fraîche ou congelée ?", a: "Notre viande est fraîche. Elle est préparée et emballée le jour de la livraison pour garantir une fraîcheur optimale." },
              { q: "Puis-je modifier ma commande après l'avoir passée ?", a: "Vous pouvez modifier votre commande jusqu'au vendredi 18h. Contactez-nous par WhatsApp ou par email." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-200 group">
                <summary className="p-5 font-semibold cursor-pointer text-gray-800 hover:text-brand-red flex justify-between items-center list-none">
                  {faq.q}
                  <ChevronRight size={18} className="shrink-0 transition-transform group-open:rotate-90 text-gray-400" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-brand-red py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Prêt à commander ?</h2>
          <p className="text-red-100 mb-8">Livraison dimanche. Commandez avant vendredi 23h59.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/produits" className="bg-white text-brand-red font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Voir les boîtes
            </Link>
            <Link href="/boite-sur-mesure" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Créer ma boîte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
