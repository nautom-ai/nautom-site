import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { LINKEDIN_URL, OPEN_GRAPH_BASE, SITE_URL } from "@/lib/site";
import { SERVICES } from "@/lib/services";
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

// JSON-LD del sitio: la organización, el sitio y los cofundadores, enlazados por @id.
// Sólo datos visibles en el sitio (home, /about y pie). Si cambia el copy de qué
// hace Nautom, revisalo en el mismo commit.
const ORG_ID = `${SITE_URL}/#organization`;
const founders = [
  { id: `${SITE_URL}/about#juan-gomez-naar`, name: "Juan Gómez Naar" },
  { id: `${SITE_URL}/about#ignacio-ramognino`, name: "Ignacio Ramognino" },
];

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Nautom",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon-512.svg`,
        width: 512,
        height: 512,
      },
      description:
        "Estudio de servicios de IA para empresas argentinas de 50 a 600 personas. Construye sistemas de gestión a medida, agentes de IA y automatizaciones que sacan el trabajo manual de la operación, y los sigue mejorando. También construye y opera productos digitales con integración de WhatsApp Business.",
      foundingDate: "2023",
      foundingLocation: { "@type": "Place", name: "Buenos Aires, Argentina" },
      founder: founders.map(({ id }) => ({ "@id": id })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: { "@type": "Country", name: "Argentina" },
      sameAs: [LINKEDIN_URL],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${SITE_URL}/contact`,
        availableLanguage: "es",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de IA para empresas",
        itemListElement: [
          ...SERVICES.map(({ title, text }) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: title,
              description: text,
              provider: { "@id": ORG_ID },
              areaServed: { "@type": "Country", name: "Argentina" },
            },
          })),
          ...["Productos digitales a medida", "Integración con WhatsApp Business"].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, provider: { "@id": ORG_ID } },
          })),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Nautom",
      inLanguage: "es-AR",
      publisher: { "@id": ORG_ID },
    },
    ...founders.map(({ id, name }) => ({
      "@type": "Person",
      "@id": id,
      name,
      jobTitle: "Cofundador",
      worksFor: { "@id": ORG_ID },
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" data-scroll-behavior="smooth" className={`${spaceMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
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
