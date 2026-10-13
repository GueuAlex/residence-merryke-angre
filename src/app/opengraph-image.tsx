import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ouverture, residence } from "@/content/site";

// Image d'apercu des partages (WhatsApp, Facebook...)
export const alt = `${residence.nom} · Appartement meublé à Angré`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const C = { lin: "#faf7f2", sable: "#f1e9dd", orange: "#e8622c", bois: "#d9b27c", anthracite: "#2b2b2e", gris: "#6f6a63" };

const racine = process.cwd();
const [gabarito, albert, photo] = await Promise.all([
  readFile(join(racine, "node_modules/@fontsource/gabarito/files/gabarito-latin-900-normal.woff")),
  readFile(join(racine, "node_modules/@fontsource/albert-sans/files/albert-sans-latin-700-normal.woff")),
  readFile(join(racine, "public", ouverture.photo.src)),
]);
const image = `data:image/jpeg;base64,${photo.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: C.lin, padding: "0 64px", gap: 48, color: C.anthracite }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontFamily: "Albert", fontSize: 20, letterSpacing: 3, color: "#b8461a" }}>LES RÉSIDENCES MERRYKE 3 · ANGRÉ</div>
          <div style={{ fontFamily: "Gabarito", fontSize: 76, lineHeight: 0.95, marginTop: 18 }}>Venez avec votre valise.</div>
          <div style={{ fontFamily: "Gabarito", fontSize: 76, lineHeight: 0.95, color: C.orange }}>Le reste est déjà là.</div>
          <div style={{ display: "flex", marginTop: 30 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "12px 22px", borderRadius: 999, background: C.sable, fontFamily: "Albert", fontSize: 24 }}>
              <span style={{ fontFamily: "Gabarito", fontSize: 32 }}>35 000 F</span> la nuit
            </div>
          </div>
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <img src={image} width={330} height={500} alt="" style={{ borderRadius: 28, objectFit: "cover" }} />
          <div style={{ position: "absolute", left: -30, bottom: 50, display: "flex", flexDirection: "column", padding: "12px 20px 12px 26px", background: C.bois, borderRadius: 12, fontFamily: "Gabarito", fontSize: 26, transform: "rotate(-6deg)" }}>
            Merryke 3
            <span style={{ fontFamily: "Albert", fontSize: 15 }}>Angré · Nouveau CHU</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Gabarito", data: gabarito, style: "normal", weight: 900 },
        { name: "Albert", data: albert, style: "normal", weight: 700 },
      ],
    },
  );
}
