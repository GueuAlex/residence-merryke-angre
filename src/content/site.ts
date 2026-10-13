// Contenu du site : infos de la residence Merryke 3, separees de la presentation.
// Source : publication de l'etablissement (voir brief/infos.md) ; les points "a confirmer" y sont listes.

export type Photo = { src: string; largeur: number; hauteur: number; alt: string };

export const residence = {
  marque: "Résidences Merryke",
  nom: "Les Résidences Merryke 3",
  lieu: "Angré · Nouveau CHU",
  devise: "Sécurité, confort, tranquillité",
  description:
    "Appartement meublé moderne et entièrement équipé à Angré, près du Nouveau CHU : climatisation, wi-fi, Canal+, cuisine équipée, balcon, parking et sécurité 24 h/24. 35 000 F la nuit.",
  logo: { src: "/images/logo-lm.jpg", largeur: 800, hauteur: 700, alt: "" },
} as const;

const NUMERO = "2250716191824";
export const contact = {
  telephoneAffiche: "07 16 19 18 24",
  telephoneLien: `tel:+${NUMERO}`,
  // WhatsApp sur ce numero : a confirmer
  whatsapp: (message: string) => `https://wa.me/${NUMERO}?text=${encodeURIComponent(message)}`,
} as const;

export const ouverture = {
  surtitre: "Appartement meublé · Angré, Nouveau CHU",
  titre: ["Venez avec votre valise.", "Le reste est déjà là."],
  texte: "Un appartement moderne, propre et entièrement équipé, pour un court ou un long séjour. Sécurité, confort, tranquillité.",
  ctaWhatsapp: "Réserver sur WhatsApp",
  ctaAppel: "Appeler",
  prix: { valeur: "35 000 F", unite: "la nuit" },
  photo: {
    src: "/images/chambre-plaid-orange.jpg",
    largeur: 720,
    hauteur: 1280,
    alt: "Chambre avec grand lit, plaid orange, tableau et climatisation",
  } satisfies Photo,
  etiquette: { titre: "Merryke 3", sous: "Angré · Nouveau CHU" },
} as const;

export type NomIcone =
  | "balcon" | "clim" | "wifi" | "canal" | "tv" | "gaziniere" | "frigo" | "microondes" | "mixeur" | "eau" | "parking" | "securite" | "calme";

export const inventaire = {
  surtitre: "Inventaire",
  titre: "Tout ce que vous n'avez pas à apporter",
  compteur: "équipements sur place",
  equipements: [
    { icone: "balcon", nom: "Balcon avec vue" },
    { icone: "clim", nom: "Climatisation" },
    { icone: "wifi", nom: "Wi-Fi haut débit" },
    { icone: "canal", nom: "Canal+ inclus" },
    { icone: "tv", nom: "Télévision" },
    { icone: "gaziniere", nom: "Gazinière" },
    { icone: "frigo", nom: "Réfrigérateur" },
    { icone: "microondes", nom: "Micro-ondes" },
    { icone: "mixeur", nom: "Mixeur" },
    { icone: "eau", nom: "Chauffe-eau" },
    { icone: "parking", nom: "Parking interne" },
    { icone: "securite", nom: "Sécurité 24h/24" },
    { icone: "calme", nom: "Quartier calme" },
  ] satisfies { icone: NomIcone; nom: string }[],
};

const photo = (src: string, alt: string): Photo => ({ src: `/images/${src}`, largeur: 720, hauteur: 1280, alt });
export const pieces = {
  surtitre: "L'appartement",
  titre: "Pièce par pièce",
  aide: "Glissez pour visiter →",
  liste: [
    { nom: "Le séjour", photo: photo("salon-ouvert-cuisine.jpg", "Salon avec canapé gris, ouvert sur la cuisine par un comptoir bar") },
    { nom: "Le comptoir bar", photo: photo("cuisine-bar.jpg", "Comptoir bar en bois avec tabourets et suspensions") },
    { nom: "La cuisine équipée", photo: photo("cuisine-equipee.jpg", "Cuisine équipée : gazinière, micro-ondes, réfrigérateur") },
    { nom: "La chambre", photo: photo("chambre-baie-vitree.jpg", "Chambre avec grand lit, plaid orange et baie vitrée") },
    { nom: "La chambre, le soir", photo: photo("chambre-led-soir.jpg", "Chambre le soir avec tête de lit éclairée") },
    { nom: "Le balcon", photo: photo("balcon-vue.jpg", "Balcon avec deux chaises et vue dégagée sur le quartier") },
  ],
};

export const sejour = {
  surtitre: "Votre séjour",
  titre: "Combien de nuits ?",
  prixNuit: 35000,
  nuitsParDefaut: 3,
  nuitsMax: 30,
  mention: "Total indicatif, à 35 000 F la nuit",
  cta: "Demander ces dates sur WhatsApp",
  message: (nuits: number) =>
    `Bonjour, je souhaite réserver aux Résidences Merryke 3 (Angré) pour ${nuits} nuit${nuits > 1 ? "s" : ""}.`,
} as const;

export const quartier = {
  surtitre: "Le quartier",
  titre: "Angré, Nouveau CHU",
  texte: "Un quartier calme et accessible.",
  reperes: ["Près du Nouveau CHU d'Angré", "Non loin de l'école internationale Les Graines du Savoir", "Parking interne et sécurité 24h/24"],
  photo: photo("balcon-vue.jpg", "Vue depuis le balcon sur le quartier d'Angré"),
} as const;

export const signature = "Proposition de site réalisée par Digifaz";
