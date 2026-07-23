export const BUSINESS = {
  name: 'Teker Pneus',
  addressLine1: 'Chaussée de Namur 148',
  addressLine2: '5310 Eghezée (Leuze)',
  phoneDisplay: '0470 87 78 04',
  phoneHref: 'tel:+32470877804',
  landlineDisplay: '081 74 15 35',
  landlineHref: 'tel:+3281741535',
  email: 'tekerpneus@gmail.com',
  mapsQuery: 'Chaussée de Namur 148, 5310 Eghezée',
}

export const HOURS = [
  { day: 'Lundi', hours: '9h00 – 18h30' },
  { day: 'Mardi', hours: '9h00 – 18h30' },
  { day: 'Mercredi', hours: '9h00 – 18h30' },
  { day: 'Jeudi', hours: '9h00 – 18h30' },
  { day: 'Vendredi', hours: '9h00 – 18h30' },
  { day: 'Samedi', hours: '10h00 – 17h00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

export const GOOGLE_REVIEWS = {
  rating: 3.8,
  totalReviews: 262,
  fiveStarReviews: 150,
}

export const LEGAL = {
  legalForm: 'À compléter',
  registrationNumber: 'BE 0794.746.239',
  publisher: 'À compléter',
}

export const TARIFS = [
  {
    category: 'Pneus neufs',
    note: "Sur demande — impossible d'indiquer le prix de tous les pneus",
    items: [],
  },
  {
    category: 'Pneus occasion',
    note: 'Contribution environnementale comprise, montage non compris',
    items: [
      { label: '13 pouces', price: '15,00 €/pièce' },
      { label: '14 à 16 pouces', price: '20,00 €/pièce' },
      { label: '17 pouces', price: '25,00 €/pièce' },
      { label: '18 pouces', price: '30,00 €/pièce' },
      { label: '19 pouces', price: '35,00 €/pièce' },
      { label: '20 à 22 pouces', price: 'Sur demande (selon épaisseur)' },
    ],
  },
  {
    category: 'Permutation avec jantes',
    note: 'Prix pour le set (4 pièces)',
    items: [
      { label: 'Remorque', price: '20,00 €' },
      { label: 'Voiture', price: '20,00 €' },
      { label: 'SUV', price: '25,00 €' },
      { label: 'Camionnette', price: '35,00 €' },
    ],
  },
  {
    category: 'Montage de pneus (occasion)',
    note: 'Prix par pièce — supplément de 5 € pour pneus runflat ou pick-up',
    items: [
      { label: "Voiture / remorque jusqu'à 18 pouces", price: '10,00 €' },
      { label: '19 pouces', price: '12,50 €' },
      { label: 'SUV', price: '12,50 €' },
      { label: 'Camionnette / voiture électrique', price: '15,00 €' },
      { label: '20 à 22 pouces', price: 'Sur demande (selon épaisseur)' },
    ],
  },
  {
    category: 'Montage de pneus (neuf)',
    note: 'Prix par pièce — supplément de 5 € pour pneus runflat ou pick-up',
    items: [
      { label: 'Voiture / remorque', price: '12,50 €' },
      { label: "SUV jusqu'à 18 pouces", price: '12,50 €' },
      { label: 'SUV 19 pouces', price: '15,00 €' },
      { label: 'SUV 20, 21, 22 pouces', price: '20,00 €' },
    ],
  },
  {
    category: 'Gardiennage de pneus',
    note: 'Prix par pièce, par mois',
    items: [
      { label: 'Avec jantes', price: '2,00 €' },
      { label: 'Sans jante', price: '1,50 €' },
    ],
  },
  {
    category: 'Réparation pneus',
    items: [
      { label: 'Avec mèche', price: '10,00 €/pièce' },
      { label: 'Réparation intérieure (champignon)', price: '20,00 €/pièce' },
    ],
  },
  {
    category: 'Géométrie',
    note: 'Comprend juste les avants',
    items: [
      { label: 'Voiture / SUV', price: '50,00 €' },
      { label: 'Voiture ancêtre / camionnette', price: '60,00 €' },
      { label: 'Pick-up', price: '70,00 €' },
    ],
  },
  {
    category: 'Réglage de phare',
    items: [
      { label: 'Voiture', price: '10,00 €' },
      { label: 'SUV', price: '10,00 €' },
      { label: 'Pick-up', price: '15,00 €' },
    ],
  },
  {
    category: 'Équilibrage',
    items: [
      { label: 'Voiture', price: '5,00 €/pièce' },
      { label: 'SUV / camionnette', price: '7,50 €/pièce' },
      { label: 'Pick-up', price: '10,00 €/pièce' },
    ],
  },
  {
    category: 'Jantes neuves ou occasion',
    note: "Sur demande — impossible d'indiquer le prix de toutes les jantes",
    items: [],
  },
  {
    category: 'Contribution environnementale',
    items: [
      { label: 'Voiture, remorque', price: '2,36 €/pièce' },
      { label: 'Camionnette, SUV, pick-up', price: '3,44 €/pièce' },
    ],
  },
]

export const BRANDS = [
  'Michelin',
  'Pirelli',
  'Bridgestone',
  'Goodyear',
  'Dunlop',
  'Hankook',
  'Barum',
  'Continental',
  'Yokohama',
  'Firestone',
  'Uniroyal',
  'Kumho Tire',
  'Hifly Tires',
  'Maxxis',
  'Toyo Tires',
  'Linglong Tire',
  'Apollo',
  'Wanli',
  'BFGoodrich',
  'Kleber',
  'Lassa',
  'Petlas',
  'Goodride',
  'Nankang',
  'Nokian Tyres',
  'Fulda',
  'Viking',
  'Semperit',
  'Vredestein',
  'Federal',
  'Aplus',
]

export const SERVICES = [
  {
    title: 'Vente de pneus',
    description:
      "Un large choix de pneus neufs et d'occasion pour tous types de véhicules, à des prix compétitifs.",
  },
  {
    title: 'Montage & démontage',
    description:
      'Montage et démontage rapide et soigné de vos pneus, toutes saisons et tous budgets.',
  },
  {
    title: 'Géométrie',
    description:
      'Réglage précis de la géométrie pour une tenue de route optimale et une usure homogène de vos pneus.',
  },
]
