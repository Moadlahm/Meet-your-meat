import Link from "next/link";
import { CheckCircle, Star, ChevronRight, Leaf, Truck, Calendar, ShieldCheck } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import PostalCheck from "@/components/PostalCheck";
import { PREMADE_BOXES, BBQ_BOXES, TESTIMONIALS, NEXT_DELIVERY_DEADLINE, NEXT_DELIVERY_DATE } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-6 pb-10 md:pt-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div>
            {/* Halal badge — visible above the fold */}
            <div className="flex items-center gap-3 mb-5">
              <span className="badge-halal">
                <Leaf size={12} />
                100% Halal Certifié
              </span>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-800">4.9/5</span>
                <span>· 57+ commandes livrées</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight text-brand-black mb-4">
              De la viande{" "}
              <span className="text-brand-red bg-red-50 px-2 rounded">halal fraîche</span>{" "}
              livrée chez vous
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Boîtes prêtes ou sur mesure. Chaque dimanche à Montréal, Laval, Brossard et plus.
            </p>

            {/* Countdown */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-3">
                ⏰ Commandez avant <span className="text-brand-red font-bold">{NEXT_DELIVERY_DEADLINE}</span> pour recevoir le{" "}
                <span className="font-bold">{NEXT_DELIVERY_DATE}</span>
              </p>
              <CountdownTimer />
            </div>

            {/* Postal code check — unlocks CTAs */}
            <PostalCheck />

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Truck size={14} className="text-brand-red" />Livraison dimanche</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-red" />Choisissez votre date</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-red" />Halal certifié</span>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative pb-5 md:pb-0">
            <div className="bg-brand-red rounded-3xl overflow-hidden h-56 sm:h-72 md:h-auto md:aspect-auto md:min-h-[480px] flex items-center justify-center">
              {/* Placeholder for meat photo */}
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">🥩</div>
                <p className="font-bold text-xl">Photo viande fraîche</p>
                <p className="text-red-200 text-sm mt-1">Remplacer par photo lifestyle</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 left-3 md:-bottom-4 md:-left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
              <div className="bg-green-100 rounded-full p-2">
                <Leaf size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Halal Certifié</p>
                <p className="text-xs text-gray-500">Abattage traditionnel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="bg-brand-red text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">Comment ça marche</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: "1", title: "Choisissez votre boîte", desc: "Boîte prête ou créez la vôtre avec les morceaux que vous aimez." },
              { n: "2", title: "Sélectionnez votre date", desc: "Choisissez parmi les dimanches disponibles. Livraison 12h–21h." },
              { n: "3", title: "Recevez à domicile", desc: "Votre viande halal fraîche, emballée et livrée chez vous. Frais selon votre zone." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white text-brand-red font-black text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BBQ BOXES — Mise en vedette ── */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-black text-brand-black">BBQ Boxes 🔥</h2>
            <Link href="/bbq" className="text-brand-red font-semibold text-sm flex items-center gap-1 hover:underline">
              Voir tout <ChevronRight size={16} />
            </Link>
          </div>
          <p className="text-gray-500 mb-8">Pour un BBQ inoubliable. Tout est inclus, rien à calculer.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BBQ_BOXES.map((box) => (
              <div key={box.id} className="card hover:shadow-lg transition-shadow">
                {/* Image placeholder with BBQ theme */}
                <div className="bg-gradient-to-br from-orange-900 to-red-900 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">🍖</div>
                    <p className="text-xs text-orange-200">Photo BBQ</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">{box.badge}</span>
                      <h3 className="font-black text-lg mt-1">{box.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{box.description}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {box.contents.map((c) => (
                      <li key={c} className="flex items-center gap-1.5">
                        <CheckCircle size={12} className="text-brand-red shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-brand-red">{box.price}$</p>
                      <p className="text-xs text-gray-400">{box.totalKg} kg{"weeks" in box ? ` · ${box.weeks} pour ${box.persons}` : ` · ${(box as {persons: string}).persons}`}</p>
                    </div>
                    <Link
                      href={`/bbq/${box.slug}`}
                      className="bg-brand-red text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-brand-red-dark transition-colors"
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

      {/* ── BOÎTES PRÊTES ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-black text-brand-black">Boîtes Prêtes</h2>
            <Link href="/produits" className="text-brand-red font-semibold text-sm flex items-center gap-1 hover:underline">
              Voir tout <ChevronRight size={16} />
            </Link>
          </div>
          <p className="text-gray-500 mb-8">Sélectionnées par nos soins. Variété, qualité et quantité garanties.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PREMADE_BOXES.map((box) => (
              <div key={box.id} className="card hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-gray-100 h-48 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🥩</div>
                    <p className="text-xs text-gray-400">Photo viande</p>
                  </div>
                  {box.badge && (
                    <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full">
                      {box.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 badge-halal text-xs">
                    <Leaf size={10} />
                    Halal
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg mb-1">{box.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{box.description}</p>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-brand-red">{box.price}$</p>
                      <p className="text-xs text-gray-400">{box.totalKg} kg{"weeks" in box ? ` · ${box.weeks} pour ${box.persons}` : ` · ${(box as {persons: string}).persons}`}</p>
                    </div>
                    <Link
                      href={`/produits/${box.slug}`}
                      className="bg-brand-red text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-brand-red-dark transition-colors"
                    >
                      Voir la boîte
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONES DE LIVRAISON ── */}
      <section className="bg-brand-black text-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-2">On livre dans toute la région</h2>
          <p className="text-gray-400 mb-6 text-sm">Montréal et ses environs, chaque dimanche · Frais selon votre zone</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Montréal", "Laval", "Brossard", "Longueuil", "Rive-Nord", "Rive-Sud", "Repentigny", "Saint-Jérôme", "Terrebonne", "Blainville", "Boisbriand"].map((zone) => (
              <span key={zone} className="bg-white/10 text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                {zone}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4">Votre ville n&apos;est pas dans la liste ? <a href="https://wa.me/15145551234" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Contactez-nous</a></p>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2">Ce que disent nos clients</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Des familles de Montréal qui commandent chaque mois</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "La viande est-elle vraiment halal ?",
                a: "Oui, à 100%. Toute notre viande provient de fournisseurs halal certifiés avec abattage traditionnel. Le logo halal est affiché sur chaque emballage.",
              },
              {
                q: "Comment se passe la livraison ?",
                a: "Nous livrons chaque dimanche de 12h à 21h. Vous choisissez votre date lors de votre commande. Les frais de livraison varient selon votre distance — entrez votre code postal pour connaître vos frais exacts.",
              },
              {
                q: "Quelle est la date limite pour commander ?",
                a: "Vous devez commander avant le vendredi à 23h59 pour recevoir votre livraison le dimanche suivant.",
              },
              {
                q: "La viande est-elle fraîche ou congelée ?",
                a: "Notre viande est fraîche. Elle est préparée et emballée le jour de la livraison pour garantir une fraîcheur optimale.",
              },
              {
                q: "Puis-je créer ma propre boîte ?",
                a: "Absolument ! Utilisez notre créateur de boîte sur mesure pour choisir exactement les morceaux et quantités qui vous conviennent.",
              },
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
      <section className="bg-brand-red py-10 md:py-14">
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
