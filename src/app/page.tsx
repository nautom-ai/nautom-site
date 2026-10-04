import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Problem from "@/components/home/Problem";
import Work from "@/components/home/Work";
import Method from "@/components/home/Method";
import Compare from "@/components/home/Compare";
import Products from "@/components/home/Products";
import Team from "@/components/home/Team";
import Voices from "@/components/home/Voices";
import Faq from "@/components/home/Faq";
import Closing from "@/components/home/Closing";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// La home se lee como el expediente de un servicio: resultado (hero), qué es
// Nautom, el problema, qué hacemos con sus casos, el método, la comparación y,
// recién ahí, el camino secundario (productos digitales + WhatsApp Business),
// equipo, voces, preguntas y cierre.
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Problem />
      <Work />
      <Method />
      <Compare />
      <Products />
      <Team />
      <Voices />
      <Faq />
      <Closing />
    </>
  );
}
