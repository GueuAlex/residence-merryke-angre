# Les Résidences Merryke (Merryke 3, Angré) : site vitrine

> Ce site fait partie de l'espace de travail `sites/`. Les règles globales sont dans `../README.md` et `../CLAUDE.md`.
> Ce fichier ne contient que ce qui est propre à ce site.

## Fiche
- Établissement : Les Résidences Merryke, résidence Merryke 3 (appartement meublé)
- Type, ville : résidence meublée, Angré – Nouveau CHU (Cocody, Abidjan)
- Statut : en ligne (démo à proposer au propriétaire)
- Repo : https://github.com/GueuAlex/residence-merryke-angre
- Démo : https://residence-merryke-angre.vercel.app
- Brief : `brief/infos.md`

## Direction artistique
Règle 7 du README : nouvelle approche UI/UX. Trois pistes dans `docs/maquettes/` (sommaire : `index.html`), aucune déjà proposée pour un autre site :
- **A · Livret d'accueil** : le site se feuillette (pages en 3D sur ordinateur, une page à la fois au doigt sur mobile), signets dorés, couverture avec le logo. Cinzel + EB Garamond ; table sombre, ivoire, or.
- **B · Valise** : « Venez avec votre valise, le reste est déjà là ». Les 13 équipements sortent d'une valise au défilement (section épinglée), puis les pièces en photos verticales, un calcul du séjour (nuits × 35 000 F) et le quartier. Gabarito + Albert Sans ; lin, orange du plaid, bois.
- **C · Visite** : parcours pièce par pièce au défilement ; chaque photo s'ouvre comme une porte dans la précédente, plan d'itinéraire ; plein écran sur mobile. Libre Caslon Display + Public Sans ; greige, charbon, bois.

**Validée : piste B · Valise** (2026-10-13)
- Concept : « Venez avec votre valise, le reste est déjà là » ; la liste des équipements devient le spectacle.
- Palette (tokens dans `src/app/globals.css`) : `lin` #FAF7F2, `sable` #F1E9DD, `bois` #D9B27C, `orange` #E8622C (le plaid), `orange-fonce` #B8461A (petits textes), `anthracite` #2B2B2E, `or` #C79335 (logo).
- Typographies : Gabarito (titres) et Albert Sans (textes).
- Expérience : ouverture (photo de chambre, étiquette de bagage « Merryke 3 ») ; déballage épinglé sur ordinateur (couvercle qui s'ouvre, 13 équipements qui sortent de la valise et se cochent, compteur 0 → 13), simple défilement sur mobile ; pièces en rail de photos verticales ; calcul du séjour (1 à 30 nuits × 35 000 F) avec message WhatsApp ; quartier.

## Contraintes propres à ce site
- Merryke est un réseau (Merryke 1, 2, route d'Abatta, 3) : le site présente Merryke 3 ; ne rien affirmer sur les autres sans confirmation.
- Le 9,6/10 Booking est celui de Merryke 1 : ne pas le présenter comme un avis de Merryke 3.
- Photos verticales de bonne qualité (720 × 1280) : elles supportent le plein écran sur mobile.
- Le schéma du quartier (piste A) n'est pas à l'échelle et doit le dire.

## Stack et commandes
- Stack : Next.js 16.4, Tailwind 4.3, GSAP 3.15 + `@gsap/react` (ScrollTrigger), Lenis 1.3.
- Le compteur du déballage est écrit par GSAP dans un élément dont React ne gère pas le texte (`dangerouslySetInnerHTML` fixe). Sans animation, il affiche 13.
- Entrée de l'ouverture en CSS (sans attendre le JavaScript).
- Maquettes : `preview_start` avec la config `merryke-maquettes` (port 4105) de `../.claude/launch.json`
- Dev : `preview_start` avec la config `merryke-dev` (port 3005)
- `pnpm dev` · `pnpm build` · `pnpm lint`

## Exceptions aux règles globales
<!-- Rien pour l'instant. -->

## Journal de session
> Entrée la plus récente en haut. Chaque entrée indique la date, le travail fait, les décisions et la **prochaine étape précise**.

### 2026-10-13 (2)
- Fait :
  - piste B « Valise » validée par l'utilisateur ;
  - site Next.js : barre, ouverture, déballage, pièces, séjour, quartier, pied de page, favicon (valise), image de partage ;
  - vérifié en desktop et en mobile (compteur 13/13, 5 nuits = 175 000 F et message WhatsApp correspondant) ; lint et build OK ;
  - Lighthouse mobile : performance 90 à 96, bonnes pratiques 100 ; les boutons WhatsApp passent en `orange-fonce` (blanc sur orange vif : 3,37:1, insuffisant) ;
  - repo GitHub créé et démo déployée.
- Point ouvert : `vercel git connect` attend que l'utilisateur autorise le repo dans l'application GitHub de Vercel ; d'ici là, redéployer avec `vercel --prod --yes` après chaque push.
- Prochaine étape : l'utilisateur envoie le lien au propriétaire. Ensuite : ses autres résidences (site de marque ?), WhatsApp, capacité, conditions, logo vectoriel, photos de façade et de salle de bain.

### 2026-10-13 (1)
- Fait :
  - logo et 9 photos rangés dans `brief/sources/` ;
  - recherche : Google Maps et Booking (fiches Merryke 1, 2 et route d'Abatta), page Facebook, repères du quartier ;
  - brief rempli ; 3 maquettes d'approches UI/UX nouvelles et leur sommaire, vérifiées en desktop et en mobile (captures Chrome headless, interactions testées).
- Décisions : nom de dossier `residence-merryke-angre` ; monogramme LM isolé du logo pour les maquettes.
- Prochaine étape : obtenir la validation d'une piste, puis initialiser Next.js (port 3005). Demander au propriétaire s'il veut un site pour toutes ses résidences.
