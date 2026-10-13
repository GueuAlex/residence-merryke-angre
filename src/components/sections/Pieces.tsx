"use client";

import Image from "next/image";
import { useRef } from "react";
import { pieces } from "@/content/site";
import { AVEC_ANIMATIONS, gsap, useGSAP } from "@/lib/gsap";

// Les pieces en photos verticales, dans un rail qui defile au doigt
export function Pieces() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(AVEC_ANIMATIONS, () => {
        gsap.from(".piece", { y: 60, autoAlpha: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: ".rail", start: "top 85%" } });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-labelledby="titre-pieces" className="py-[clamp(70px,9vw,120px)]">
      <div className="gouttiere mx-auto mb-[26px] flex max-w-[1360px] flex-wrap items-end justify-between gap-5">
        <div>
          <p className="surtitre">{pieces.surtitre}</p>
          <h2 id="titre-pieces" className="titre mt-2 text-[clamp(32px,4.4vw,64px)]">
            {pieces.titre}
          </h2>
        </div>
        <p className="text-gris">{pieces.aide}</p>
      </div>
      <ul className="rail gouttiere flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2.5 [scrollbar-width:none]">
        {pieces.liste.map((p) => (
          <li key={p.nom} className="piece w-[min(70vw,300px)] shrink-0 snap-start">
            <Image src={p.photo.src} alt={p.photo.alt} width={p.photo.largeur} height={p.photo.hauteur} sizes="(min-width: 768px) 300px, 70vw" className="aspect-[9/15] w-full rounded-[22px] object-cover" />
            <p className="mt-2 font-bold">{p.nom}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
