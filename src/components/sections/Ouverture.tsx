import Image from "next/image";
import type { CSSProperties } from "react";
import { IconeWhatsapp } from "@/components/ui/Icones";
import { contact, ouverture } from "@/content/site";

const delai = (i: number) => ({ "--i": i }) as CSSProperties;

export function Ouverture() {
  return (
    <section id="accueil" className="gouttiere mx-auto grid min-h-svh max-w-[1360px] items-center gap-[clamp(24px,4vw,64px)] pb-10 pt-[84px] md:grid-cols-[1.05fr_0.95fr] md:pt-[90px]">
      <div>
        <p style={delai(0)} className="entree surtitre">
          {ouverture.surtitre}
        </p>
        <h1 style={delai(1)} className="entree titre mb-[18px] mt-3.5 text-[clamp(44px,6.4vw,104px)]">
          {ouverture.titre[0]} <span className="text-orange">{ouverture.titre[1]}</span>
        </h1>
        <p style={delai(2)} className="entree max-w-[460px] text-lg text-gris">
          {ouverture.texte}
        </p>
        <div style={delai(3)} className="entree mt-[26px] flex flex-wrap gap-2.5">
          <a href={contact.whatsapp("Bonjour, je souhaite réserver aux Résidences Merryke 3 (Angré).")} className="inline-flex items-center gap-2.5 rounded-2xl bg-orange px-[22px] py-4 font-bold text-white transition-transform hover:-translate-y-0.5">
            <IconeWhatsapp />
            {ouverture.ctaWhatsapp}
          </a>
          <a href={contact.telephoneLien} className="inline-flex items-center rounded-2xl border-[1.5px] border-anthracite px-[22px] py-4 font-bold transition-colors hover:bg-anthracite hover:text-lin">
            {ouverture.ctaAppel}
          </a>
        </div>
        <p style={delai(4)} className="entree mt-[22px] inline-flex items-baseline gap-1.5 rounded-full bg-sable px-4 py-2.5 text-[15px]">
          <b className="font-titre text-[22px]">{ouverture.prix.valeur}</b> {ouverture.prix.unite}
        </p>
      </div>

      <figure className="relative order-first w-[min(100%,300px)] justify-self-center md:order-none md:w-[min(100%,420px)]">
        <Image
          src={ouverture.photo.src}
          alt={ouverture.photo.alt}
          width={ouverture.photo.largeur}
          height={ouverture.photo.hauteur}
          sizes="(min-width: 768px) 420px, 300px"
          preload
          className="aspect-[4/4.4] w-full rounded-[28px] object-cover md:aspect-[9/13]"
        />
        <figcaption className="absolute -left-6 bottom-10 -rotate-6 rounded-[8px_14px_14px_8px] bg-bois py-3.5 pl-[26px] pr-[18px] font-titre font-extrabold shadow-[0_14px_30px_rgb(43_43_46/0.2)] before:absolute before:left-[9px] before:top-1/2 before:size-[9px] before:-translate-y-1/2 before:rounded-full before:bg-lin">
          {ouverture.etiquette.titre}
          <small className="block font-texte text-xs font-semibold">{ouverture.etiquette.sous}</small>
        </figcaption>
      </figure>
    </section>
  );
}
