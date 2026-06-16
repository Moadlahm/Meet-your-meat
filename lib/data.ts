// Mock data — à remplacer par Shopify Storefront API

export const DELIVERY_DAYS = [
  { date: "2026-05-24", label: "Dimanche 24 mai" },
  { date: "2026-05-31", label: "Dimanche 31 mai" },
  { date: "2026-06-07", label: "Dimanche 7 juin" },
  { date: "2026-06-14", label: "Dimanche 14 juin" },
];

export const PREMADE_BOXES = [
  {
    id: "essentielle",
    name: "Boîte Essentielle",
    price: 149.99,
    totalKg: 10.5,
    weeks: "~2 semaines",
    persons: "2–3 personnes",
    description: "L'essentiel pour nourrir votre foyer. Parfaite pour 2–3 personnes.",
    image: "/images/box-essentielle.jpg",
    badge: "Populaire",
    contents: [
      "2 kg Poulet entier",
      "1 kg Poitrine de poulet",
      "1.5 kg Viande hachée de boeuf",
      "1 kg Merguez",
      "1.5 kg Pilons",
      "1.5 kg Cubes de boeuf",
      "1 kg Steak français",
    ],
    slug: "essentielle",
  },
  {
    id: "standard",
    name: "Boîte Standard",
    price: 173.99,
    totalKg: 12,
    weeks: "~2 semaines",
    persons: "4–5 personnes",
    description: "Le choix idéal pour les familles. Variété et quantité.",
    image: "/images/box-standard.jpg",
    badge: "Best-seller",
    contents: [
      "2 kg Poulet entier",
      "1 kg Poitrine de poulet",
      "2 kg Viande hachée de boeuf",
      "1 kg Merguez",
      "1.5 kg Pilons",
      "1.5 kg Cubes de boeuf",
      "1 kg Steak français",
      "1 kg Cuisses de poulet",
    ],
    slug: "standard",
  },
  {
    id: "avantage",
    name: "Boîte Avantage",
    price: 229.99,
    totalKg: 14,
    weeks: "~3 semaines",
    persons: "6+ personnes",
    description: "Pour les grandes familles. Plus de quantité, plus de variété.",
    image: "/images/box-avantage.jpg",
    badge: "Grande famille",
    contents: [
      "1 kg Épaule de boeuf désossée",
      "2 kg Viande hachée de boeuf",
      "2 kg Poitrine de poulet",
      "1 kg Steak français",
      "1.5 kg Cubes de boeuf",
      "1.5 kg Cuisses de poulet",
      "1 kg Merguez",
      "1 Poulet entier",
      "1.5 kg Pilons",
    ],
    slug: "avantage",
  },
];

export const BBQ_BOXES = [
  {
    id: "bbq-standard",
    name: "Standard BBQ Box",
    price: 119,
    totalKg: 5,
    persons: "4–6 personnes",
    description: "Parfaite pour un BBQ de 4 à 6 personnes. L'essentiel du grill.",
    image: "/images/bbq-standard.jpg",
    badge: "BBQ",
    contents: [
      "2 kg Poulet",
      "1 kg Merguez",
      "1 kg Burgers",
      "1 kg Nevada steak",
    ],
    slug: "bbq-standard",
  },
  {
    id: "bbq-feast",
    name: "Feast BBQ Box",
    price: 159,
    totalKg: 6.5,
    persons: "6–10 personnes",
    description: "Le festin du BBQ. Pour 6 à 10 personnes, tout le monde est servi.",
    image: "/images/bbq-feast.jpg",
    badge: "Le plus populaire",
    contents: [
      "2 kg Brochettes de poulet",
      "1 kg Brochettes de boeuf",
      "1 kg Burgers",
      "1 kg Merguez",
      "1.5 kg Nevada steak",
    ],
    slug: "bbq-feast",
  },
  {
    id: "bbq-grillmaster",
    name: "Grill Master Box",
    price: 219,
    totalKg: 7.5,
    persons: "10–15 personnes",
    description: "Le maximum. Pour 10+ personnes et les amateurs de coupes premium.",
    image: "/images/bbq-grill-master.jpg",
    badge: "Premium",
    contents: [
      "1 kg Contre-filet",
      "1.5 kg Nevada steak",
      "2 kg Brochettes de poulet",
      "1 kg Brochettes de boeuf",
      "1 kg Burgers",
      "1 kg Merguez",
    ],
    slug: "bbq-grillmaster",
  },
];

export const CUSTOM_PRODUCTS = [
  { id: "viande-hachee", name: "Viande Hachée de Boeuf", price: 21.99, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "steak-francais", name: "Steak Français", price: 26.40, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "nevada-steak", name: "Nevada Steak", price: 31.90, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "contre-filet", name: "Contre-Filet", price: 41.80, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "cubes-boeuf", name: "Cubes de Boeuf", price: 26.40, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "epaule-boeuf", name: "Épaule de Boeuf Désossée", price: 27.50, unit: "1 kg", category: "Boeuf", emoji: "🥩" },
  { id: "merguez", name: "Merguez", price: 21.99, unit: "1 kg", category: "Agneau", emoji: "🌿" },
  { id: "cote-agneau", name: "Côtelette d'Agneau", price: 24.99, unit: "1 kg", category: "Agneau", emoji: "🌿" },
  { id: "poitrine-poulet", name: "Poitrine de Poulet", price: 17.99, unit: "1 kg", category: "Poulet", emoji: "🍗" },
  { id: "pilon", name: "Pilon de Poulet", price: 8.70, unit: "1 kg", category: "Poulet", emoji: "🍗" },
  { id: "cuisse-poulet", name: "Cuisse de Poulet", price: 7.99, unit: "1 kg", category: "Poulet", emoji: "🍗" },
  { id: "cuisse-desossee", name: "Cuisse Désossée", price: 16.50, unit: "1 kg", category: "Poulet", emoji: "🍗" },
  { id: "poulet-entier", name: "Poulet Entier", price: 12.99, unit: "1.3–1.5 kg", category: "Poulet", emoji: "🍗" },
  { id: "jarret-veau", name: "Jarret de Veau", price: 26.40, unit: "1 kg", category: "Veau", emoji: "🥩" },
  { id: "tbone-veau", name: "T-Bone de Veau", price: 35.20, unit: "1 kg", category: "Veau", emoji: "🥩" },
];

export const TESTIMONIALS = [
  { name: "Lily M.", city: "Montréal", box: "Boîte Standard", rating: 5, text: "C'est vraiment un luxe de se faire livrer de la viande fraîche directement à la maison. Je recommande à tous !" },
  { name: "Adam G.", city: "Montréal", box: "Boîte Avantage", rating: 5, text: "La viande était super bonne et bien emballée. Service impeccable, livraison à l'heure." },
  { name: "Dié Y.", city: "Laval", box: "Boîte Essentielle", rating: 5, text: "Tout sent super bon, la viande est fraîche et bien présentée. Je commande chaque mois maintenant." },
  { name: "Chantal G.", city: "Brossard", box: "Boîte Standard", rating: 5, text: "Impressionnée par la qualité et la quantité. Pour le prix c'est vraiment avantageux." },
];

export const DELIVERY_ZONES = [
  "Montréal", "Laval", "Brossard", "Longueuil", "Rive-Nord", "Rive-Sud",
  "Repentigny", "Saint-Jérôme", "Terrebonne", "Blainville", "Boisbriand",
];

export const NEXT_DELIVERY_DEADLINE = "vendredi 23 mai à 23h59";
export const NEXT_DELIVERY_DATE = "dimanche 25 mai";
