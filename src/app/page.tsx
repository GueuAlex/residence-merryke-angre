import { Barre } from "@/components/layout/Barre";
import { PiedDePage } from "@/components/layout/PiedDePage";
import { Deballage } from "@/components/sections/Deballage";
import { Ouverture } from "@/components/sections/Ouverture";
import { Pieces } from "@/components/sections/Pieces";
import { Quartier } from "@/components/sections/Quartier";
import { Sejour } from "@/components/sections/Sejour";

export default function Accueil() {
  return (
    <>
      <Barre />
      <main>
        <Ouverture />
        <Deballage />
        <Pieces />
        <Sejour />
        <Quartier />
      </main>
      <PiedDePage />
    </>
  );
}
