import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
// GridOverlay removed — clean Navy Deep background
// import GridOverlay from "@/components/GridOverlay";
import FloatingCTA from "@/components/FloatingCTA";
import { SITE_URL } from "@/lib/site";
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
  title: "Nautom — Estudio de tecnología AI-first | Productos y proyectos a medida",
  description:
    "Estudio de tecnología que construye productos propios y proyectos a medida con enfoque AI-first. Gestión financiera, reservas, automatización y más para PyMEs argentinas.",
  keywords: [
    "estudio tecnología Argentina",
    "productos digitales PyMEs",
    "proyectos a medida",
    "AI-first development",
    "agentes de IA Argentina",
    "automatización PyMEs",
    "gestión financiera PyMEs",
    "Nautom",
    "Next.js Supabase",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: "/favicon-512.svg",
  },
  openGraph: {
    title: "Nautom — Estudio de tecnología AI-first",
    description:
      "Construimos productos propios y proyectos a medida con enfoque AI-first para PyMEs argentinas.",
    url: SITE_URL,
    siteName: "Nautom",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nautom — Estudio de tecnología AI-first",
    description:
      "Construimos productos propios y proyectos a medida con enfoque AI-first para PyMEs argentinas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceMono.variable} ${inter.variable}`}>
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
                "Estudio de tecnología AI-first que construye productos propios y proyectos a medida para PyMEs argentinas. Gestión financiera, reservas, automatización y agentes de IA.",
              foundingDate: "2023",
              founders: [
                { "@type": "Person", name: "Juan" },
                { "@type": "Person", name: "Nacho" },
              ],
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              knowsAbout: [
                "Inteligencia artificial para empresas",
                "Agentes de IA",
                "Automatización de procesos",
                "Desarrollo de aplicaciones internas",
                "Sistemas de gestión para PyMEs",
                "AI agents",
                "Business automation",
                "Python",
                "Vercel",
                "Supabase",
                "Railway",
              ],
              serviceType: [
                "Productos digitales propios",
                "Proyectos a medida",
                "Agentes de inteligencia artificial",
                "Automatización de procesos empresariales",
                "Desarrollo de aplicaciones internas",
                "Gestión financiera para PyMEs",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased min-h-screen font-sans">
        <div className="relative">
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <FloatingCTA />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
