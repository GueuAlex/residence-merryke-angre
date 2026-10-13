import type { Metadata, Viewport } from "next";
import { Albert_Sans, Gabarito } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { residence } from "@/content/site";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito", display: "swap" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://residence-merryke-angre.vercel.app"),
  title: `${residence.nom} · Appartement meublé à Angré, Nouveau CHU`,
  description: residence.description,
  // Site de prospection : pas d'indexation avant la signature
  robots: { index: false, follow: false },
  openGraph: {
    title: `${residence.nom} · Venez avec votre valise, le reste est déjà là`,
    description: residence.description,
    siteName: residence.marque,
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${gabarito.variable} ${albert.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
