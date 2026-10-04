import type { Metadata } from "next";
import Link from "next/link";
import Products from "@/components/home/Products";
import { Label } from "@/components/home/ui";
import { OPEN_GRAPH_BASE, TWITTER_BASE } from "@/lib/site";

const title = "Productos digitales — Nautom";
const description = "Conocé Locker Company, Nautom Alojamientos y Nautom Gestión, y nuestras integraciones con WhatsApp Business.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/productos" },
  openGraph: { ...OPEN_GRAPH_BASE, title, description, url: "/productos" },
  twitter: { ...TWITTER_BASE, title, description },
};

export default function ProductsPage() {
  return (
    <>
      <div className="on-light bg-paper pt-14 text-ink md:pt-20">
        <div className="wrap">
          <Link href="/#productos" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">← Volver al inicio</Link>
          <Label tone="paper" copper className="mt-8">De la idea a la operación</Label>
          <h1 className="mt-4 max-w-[24ch] font-mono text-h1 leading-tight font-bold tracking-[-0.035em]">Productos que construimos y acompañamos.</h1>
        </div>
      </div>
      <Products />
    </>
  );
}
