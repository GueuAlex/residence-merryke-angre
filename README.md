# Les Résidences Merryke 3 · site vitrine

Proposition de site pour **Les Résidences Merryke 3**, appartement meublé à Angré, près du Nouveau CHU (Abidjan).

- **Démo** : https://residence-merryke-angre.vercel.app (non indexée par les moteurs de recherche)
- **Approche** : piste B « Valise ». « Venez avec votre valise, le reste est déjà là » : au défilement, les treize équipements sortent d'une valise et se rangent, cochés. Puis les pièces en photos, un calcul du séjour (nuits × 35 000 F) avec un message WhatsApp prérédigé, et le quartier. Les maquettes des trois pistes sont dans `docs/maquettes/`.
- Proposition de site réalisée par **Digifaz**.

## Stack
Next.js 16 (App Router, TypeScript) · Tailwind CSS 4 · GSAP 3.15 (ScrollTrigger) · Lenis

## Commandes
```bash
pnpm install
pnpm dev --port 3005
pnpm lint
pnpm build
```

## Organisation
- `src/content/site.ts` : **tout le contenu** (équipements, pièces, tarif, textes, contact). C'est le seul fichier à modifier pour changer une information.
- `src/components/sections/` : une section par fichier (ouverture, déballage, pièces, séjour, quartier).
- `src/components/ui/` : la valise et les icônes d'équipements.
- `src/app/globals.css` : tokens du thème.
- `brief/infos.md` : brief, sources et infos à faire confirmer.
