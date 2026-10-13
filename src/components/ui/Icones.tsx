import type { ReactNode } from "react";
import type { NomIcone } from "@/content/site";

// Icones au trait des equipements (32 x 32)
const traces: Record<NomIcone, ReactNode> = {
  balcon: <path d="M4 28h24M6 28V16h20v12M10 16v12M14 16v12M18 16v12M22 16v12M9 16V6h14v10" />,
  clim: (
    <>
      <rect x="3" y="6" width="26" height="9" rx="2" />
      <path d="M7 12h18M10 19v6M16 19v8M22 19v6" />
    </>
  ),
  wifi: (
    <>
      <path d="M4 13a17 17 0 0 1 24 0M8 17.5a11 11 0 0 1 16 0M12 22a5 5 0 0 1 8 0" />
      <circle cx="16" cy="26" r="1.2" />
    </>
  ),
  canal: (
    <>
      <rect x="3" y="7" width="26" height="16" rx="2" />
      <path d="M12 27h8M16 15v-4M14 13h4M9 18c1.5 1 3 1 4.5 0M19 18c1.5 1 3 1 4.5 0" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="26" height="17" rx="2" />
      <path d="M11 27h10M16 23v4" />
    </>
  ),
  gaziniere: (
    <>
      <rect x="5" y="4" width="22" height="25" rx="2" />
      <circle cx="11" cy="10" r="2.5" />
      <circle cx="21" cy="10" r="2.5" />
      <rect x="9" y="16" width="14" height="9" rx="1" />
    </>
  ),
  frigo: (
    <>
      <rect x="8" y="3" width="16" height="26" rx="2" />
      <path d="M8 13h16M12 7v3M12 17v5" />
    </>
  ),
  microondes: (
    <>
      <rect x="3" y="8" width="26" height="16" rx="2" />
      <rect x="6" y="11" width="15" height="10" rx="1" />
      <path d="M25 12v1M25 16v1M25 20v1" />
    </>
  ),
  mixeur: (
    <>
      <path d="M10 4h12l-2 14h-8Z" />
      <rect x="10" y="18" width="12" height="9" rx="2" />
      <path d="M14 8l4 6" />
    </>
  ),
  eau: (
    <>
      <rect x="9" y="3" width="14" height="21" rx="7" />
      <path d="M13 24v4M19 24v4M16 10c-2 3-3 4.5-3 6a3 3 0 0 0 6 0c0-1.5-1-3-3-6Z" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="5" />
      <path d="M12 23V9h6a4 4 0 0 1 0 8h-6" />
    </>
  ),
  securite: <path d="M16 3 27 7v8c0 7-5 12-11 14C10 27 5 22 5 15V7ZM11 16l3.5 3.5L21 13" />,
  calme: <path d="M24 20A10 10 0 1 1 13 5a8 8 0 0 0 11 15Z" />,
};

export function IconeEquipement({ nom, className = "" }: { nom: NomIcone; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
      {traces[nom]}
    </svg>
  );
}

export function IconeWhatsapp({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 ${className}`}>
      <path d="M4 18.5 5.2 15A8 8 0 1 1 8.6 18.6Z" strokeLinejoin="round" />
      <path d="M9 10.5c.5 1.8 2 3.3 3.8 3.9" strokeLinecap="round" />
    </svg>
  );
}
