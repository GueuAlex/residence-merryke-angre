"use client";

import { useState } from "react";
import { IconeWhatsapp } from "@/components/ui/Icones";
import { contact, sejour } from "@/content/site";

const formaterPrix = (n: number) => `${n.toLocaleString("fr-FR").replace(/\s/g, " ")} F`;

// Calcul indicatif du sejour : nombre de nuits x prix de la nuit
export function Sejour() {
  const [nuits, setNuits] = useState<number>(sejour.nuitsParDefaut);
  const changer = (pas: number) => setNuits((n) => Math.max(1, Math.min(sejour.nuitsMax, n + pas)));

  return (
    <section aria-labelledby="titre-sejour" className="gouttiere">
      <div className="mx-auto grid max-w-[1360px] items-center gap-8 rounded-[32px] bg-anthracite p-[clamp(28px,5vw,64px)] text-lin md:grid-cols-2">
        <div>
          <p className="surtitre !text-bois">{sejour.surtitre}</p>
          <h2 id="titre-sejour" className="titre mt-2 text-[clamp(30px,4vw,56px)]">
            {sejour.titre}
          </h2>
          <div className="mt-[22px] flex items-center gap-4">
            <button type="button" aria-label="Une nuit de moins" onClick={() => changer(-1)} className="size-[52px] rounded-full border-[1.5px] border-lin/40 text-[22px]">
              −
            </button>
            <output aria-live="polite" className="min-w-[2ch] text-center font-titre text-[56px] font-black">
              {nuits}
            </output>
            <button type="button" aria-label="Une nuit de plus" onClick={() => changer(1)} className="size-[52px] rounded-full border-[1.5px] border-lin/40 text-[22px]">
              +
            </button>
          </div>
        </div>
        <div className="rounded-[22px] bg-lin/[0.06] p-7">
          <p className="text-lin/70">{sejour.mention}</p>
          <p className="my-1.5 font-titre text-[clamp(40px,5vw,68px)] font-black leading-none text-bois">{formaterPrix(nuits * sejour.prixNuit)}</p>
          <p className="text-lin/70">
            pour {nuits} nuit{nuits > 1 ? "s" : ""}
          </p>
          <a href={contact.whatsapp(sejour.message(nuits))} className="mt-[18px] flex w-full items-center justify-center gap-2.5 rounded-2xl bg-orange-fonce px-[22px] py-4 font-bold text-white">
            <IconeWhatsapp />
            {sejour.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
