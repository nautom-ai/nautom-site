import type { Metadata } from "next";

// Host canónico: nautom.com redirige a www en Vercel.
export const SITE_URL = "https://www.nautom.com";

export const LINKEDIN_URL = "https://www.linkedin.com/company/nautom";

// Base para compartir. El openGraph o twitter de una página reemplaza entero al
// del layout, incluida la imagen de opengraph-image.tsx: por eso va explícita.
const SHARE_IMAGE = {
  width: 1200,
  height: 630,
  alt: "Nautom — Estudio de servicios de IA",
};

export const OPEN_GRAPH_BASE = {
  siteName: "Nautom",
  locale: "es_AR",
  type: "website",
  images: [{ url: "/opengraph-image", ...SHARE_IMAGE }],
} satisfies NonNullable<Metadata["openGraph"]>;

export const TWITTER_BASE = {
  card: "summary_large_image",
  images: [{ url: "/twitter-image", ...SHARE_IMAGE }],
} satisfies NonNullable<Metadata["twitter"]>;
