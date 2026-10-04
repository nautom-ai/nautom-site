import type { Metadata } from "next";
import Link from "next/link";
import Cases from "@/components/home/Cases";
import { Label } from "@/components/home/ui";
import { OPEN_GRAPH_BASE, TWITTER_BASE } from "@/lib/site";

const title = "Casos — Nautom";
const description = "Sistemas en funcionamiento en El Jumillano, Impacto Positivo, Altis Viajes y Peerforum. Conocé qué construimos y cómo se usa.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/casos" },
  openGraph: { ...OPEN_GRAPH_BASE, title, description, url: "/casos" },
  twitter: { ...TWITTER_BASE, title, description },
};

export default function CasesPage() {
  return (
    <section className="on-light bg-surface py-14 text-ink md:py-20" aria-labelledby="page-title">
      <div className="wrap">
        <Link href="/#casos" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">← Volver al inicio</Link>
        <Label tone="surface" copper className="mt-8">Nuestro trabajo</Label>
        <h1 id="page-title" className="mt-4 max-w-[24ch] font-mono text-h1 leading-tight font-bold tracking-[-0.035em]">Sistemas que ya son parte del día a día.</h1>
        <Cases />
      </div>
    </section>
  );
}
