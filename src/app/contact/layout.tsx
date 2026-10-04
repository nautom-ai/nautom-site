import type { Metadata } from "next";
import { OPEN_GRAPH_BASE, TWITTER_BASE } from "@/lib/site";

const description =
  "Contactá a Nautom. Contanos tu desafío y te proponemos una solución con IA y automatización a medida para tu empresa.";

export const metadata: Metadata = {
  title: "Contacto | Nautom",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contacto | Nautom", description, url: "/contact", ...OPEN_GRAPH_BASE },
  twitter: { ...TWITTER_BASE, title: "Contacto | Nautom", description },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
