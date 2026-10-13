import { contact, residence, signature } from "@/content/site";

export function PiedDePage() {
  return (
    <footer className="gouttiere flex flex-wrap justify-between gap-2.5 bg-white pb-10 pt-7 text-sm text-gris">
      <span>
        {residence.nom} · {residence.lieu} ·{" "}
        <a href={contact.telephoneLien} className="underline-offset-4 hover:underline">
          {contact.telephoneAffiche}
        </a>
      </span>
      <span>{signature}</span>
    </footer>
  );
}
