"use client";

import { useRef } from "react";
import { IconeEquipement } from "@/components/ui/Icones";
import { Valise } from "@/components/ui/Valise";
import { inventaire } from "@/content/site";
import { AVEC_ANIMATIONS, gsap, useGSAP } from "@/lib/gsap";

const total = inventaire.equipements.length;
const gauche = inventaire.equipements.slice(0, 7);
const droite = inventaire.equipements.slice(7);

function Objet({ icone, nom }: (typeof inventaire.equipements)[number]) {
  return (
    <li className="objet flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 text-[13px] font-semibold shadow-[0_6px_18px_rgb(43_43_46/0.06)] md:gap-3 md:rounded-2xl md:px-3.5 md:py-2.5 md:text-base">
      <IconeEquipement nom={icone} className="size-6 md:size-[34px]" />
      {nom}
      <span aria-hidden="true" className="coche ml-auto grid size-[18px] place-items-center rounded-full bg-orange text-[11px] text-white md:size-[22px] md:text-[13px]">
        ✓
      </span>
    </li>
  );
}

// Signature : au fil du defilement, les equipements sortent de la valise et se rangent, coches
export function Deballage() {
  const ref = useRef<HTMLElement>(null);
  const compteur = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ grandEcran: "(min-width: 900px)", anime: AVEC_ANIMATIONS }, (contexte) => {
        const { grandEcran, anime } = contexte.conditions!;
        if (!anime) return;
        const el = compteur.current!;
        const valise = ref.current!.querySelector<SVGSVGElement>(".valise")!;
        const objets = gsap.utils.toArray<HTMLElement>(".objet");
        const centre = (cible: Element) => {
          const r = cible.getBoundingClientRect();
          return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        };
        el.textContent = "0";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: grandEcran ? "top top" : "top 60%",
            end: grandEcran ? "+=140%" : "bottom 80%",
            pin: grandEcran,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(".couvercle", { rotation: -28, y: -20, svgOrigin: "150 120", duration: 0.6, ease: "power2.out" }, 0);
        objets.forEach((o, i) => {
          tl.from(
            o,
            {
              x: () => centre(valise).x - centre(o).x,
              y: () => centre(valise).y - centre(o).y + 40,
              scale: 0.2,
              autoAlpha: 0,
              rotation: gsap.utils.random(-30, 30),
              duration: 1,
              ease: "back.out(1.3)",
              onComplete: () => (el.textContent = String(Math.max(Number(el.textContent), i + 1))),
              onReverseComplete: () => (el.textContent = String(i)),
            },
            0.4 + i * 0.3,
          ).from(o.querySelector(".coche"), { scale: 0, duration: 0.3, ease: "back.out(3)" }, 1.1 + i * 0.3);
        });
        tl.to(".couvercle", { rotation: 0, y: 0, svgOrigin: "150 120", duration: 0.6, ease: "power2.inOut" }, ">");

        return () => {
          el.textContent = String(total);
        };
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-labelledby="titre-inventaire"
      className="gouttiere relative mx-auto grid min-h-svh max-w-[1360px] grid-cols-2 content-center items-center gap-2 overflow-hidden pb-8 pt-[180px] min-[900px]:h-svh min-[900px]:min-h-[640px] min-[900px]:grid-cols-[1fr_minmax(240px,380px)_1fr] min-[900px]:gap-[clamp(16px,3vw,48px)] min-[900px]:pt-20"
    >
      <div className="absolute inset-x-0 top-[70px] text-center min-[900px]:top-[76px]">
        <p className="surtitre">{inventaire.surtitre}</p>
        <h2 id="titre-inventaire" className="titre mt-2 text-[clamp(28px,3.6vw,52px)]">
          {inventaire.titre}
        </h2>
      </div>
      <ul className="grid gap-1.5 md:gap-2.5">
        {gauche.map((e) => (
          <Objet key={e.nom} {...e} />
        ))}
      </ul>
      <div className="col-span-2 row-start-1 justify-self-center min-[900px]:col-span-1 min-[900px]:col-start-2 min-[900px]:w-full">
        <Valise className="valise w-[min(60vw,220px)] min-[900px]:w-full" />
        <p className="mt-3 text-center font-bold">
          <b ref={compteur} className="font-titre text-[40px] text-orange" dangerouslySetInnerHTML={{ __html: String(total) }} /> / {total} {inventaire.compteur}
        </p>
      </div>
      <ul className="grid gap-1.5 md:gap-2.5">
        {droite.map((e) => (
          <Objet key={e.nom} {...e} />
        ))}
      </ul>
    </section>
  );
}
