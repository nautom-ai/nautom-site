import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { OPEN_GRAPH_BASE, SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nautom — Estudio de servicios de IA para empresas argentinas",
  description:
    "Estudio de servicios de IA para empresas argentinas de 50 a 600 personas. Construimos los sistemas, agentes y automatizaciones que sacan el trabajo manual de tu operación, y los seguimos mejorando.",
  keywords: [
    "estudio de servicios de IA",
    "IA para empresas Argentina",
    "sistemas de gestión a medida",
    "agentes de IA Argentina",
    "automatización de procesos",
    "automatización PyMEs",
    "WhatsApp Business",
    "Nautom",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: "/favicon-512.svg",
  },
  openGraph: {
    title: "Nautom — Estudio de servicios de IA",
    description:
      "Sistemas y agentes de IA para que tu operación deje de depender de planillas. Para empresas argentinas de 50 a 600 personas.",
    url: "/",
    ...OPEN_GRAPH_BASE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nautom — Estudio de servicios de IA",
    description:
      "Sistemas y agentes de IA para que tu operación deje de depender de planillas. Para empresas argentinas de 50 a 600 personas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${spaceMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nautom",
              url: SITE_URL,
              description:
                "Estudio de servicios de IA para empresas argentinas de 50 a 600 personas. Construye sistemas de gestión a medida, agentes de IA y automatizaciones que sacan el trabajo manual de la operación, y los sigue mejorando. También construye y opera productos digitales con integración de WhatsApp Business.",
              foundingDate: "2023",
              founders: [
                { "@type": "Person", name: "Juan Gómez Naar" },
                { "@type": "Person", name: "Ignacio Ramognino" },
              ],
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              knowsAbout: [
                "Inteligencia artificial para empresas",
                "Agentes de IA",
                "Automatización de procesos",
                "Sistemas de gestión a medida",
                "Integración con WhatsApp Business",
                "AI agents",
                "Business automation",
                "Next.js",
                "Supabase",
                "Vercel",
                "Python",
              ],
              serviceType: [
                "Sistemas de gestión a medida",
                "Agentes de inteligencia artificial",
                "Automatización de procesos empresariales",
                "Tableros de gestión",
                "Productos digitales a medida",
                "Integración con WhatsApp Business",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased min-h-screen font-sans">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <div className="relative">
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
