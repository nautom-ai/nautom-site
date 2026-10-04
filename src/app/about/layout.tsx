import type { Metadata } from "next";
import { OPEN_GRAPH_BASE, TWITTER_BASE } from "@/lib/site";

const description =
  "Estudio de servicios de IA para empresas argentinas de 50 a 600 personas. Conocé cómo trabajamos y quiénes somos: un equipo chico, desde 2023 en Buenos Aires.";

export const metadata: Metadata = {
  title: "Nosotros | Nautom",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "Nosotros | Nautom", description, url: "/about", ...OPEN_GRAPH_BASE },
  twitter: { ...TWITTER_BASE, title: "Nosotros | Nautom", description },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
