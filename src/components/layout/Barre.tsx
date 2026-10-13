import Image from "next/image";
import { contact, residence } from "@/content/site";

export function Barre() {
  return (
    <header className="gouttiere fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 bg-lin/90 py-3 backdrop-blur">
      <a href="#accueil" className="flex items-center gap-2.5">
        <Image src={residence.logo.src} alt={residence.logo.alt} width={residence.logo.largeur} height={residence.logo.hauteur} sizes="42px" className="w-[42px] mix-blend-multiply" />
        <span className="leading-tight">
          <b className="block font-titre text-lg font-extrabold">{residence.marque}</b>
          <small className="block text-[11px] font-semibold text-gris">Merryke 3 · Angré</small>
        </span>
      </a>
      <a href={contact.telephoneLien} className="whitespace-nowrap rounded-full bg-anthracite px-4 py-2.5 text-sm font-bold text-lin">
        {contact.telephoneAffiche}
      </a>
    </header>
  );
}
