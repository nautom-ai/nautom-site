import Link from "next/link";
import { Alias, ArrowIcon, ButtonLink, Label } from "./ui";

export default function Closing() {
  return (
    <section id="equipo" aria-labelledby="closing-title" className="relative bg-background py-16 text-foreground md:py-24">
      <Alias id="about" />
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16">
          <div>
            <Label tone="dark" copper>Empecemos por una conversación</Label>
            <h2 id="closing-title" className="mt-5 max-w-[18ch] font-mono text-[clamp(30px,4vw,52px)] leading-[1.15] font-bold tracking-[-0.04em]">¿Qué le está sacando tiempo a tu equipo?</h2>
          </div>
          <div>
            <p className="max-w-[35ch] text-base leading-relaxed text-muted">Contanos cómo trabajan hoy. Vemos juntos por dónde conviene empezar.</p>
            <ButtonLink href="/contact" className="mt-6">Contanos tu caso</ButtonLink>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-foreground/16 pt-6 text-sm md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="text-muted">Somos Juan y Nacho. Un estudio chico, involucrado de principio a fin.</p>
          <Link href="/about" className="group inline-flex min-h-11 shrink-0 items-center gap-3 underline underline-offset-4">Conocé al equipo <ArrowIcon size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
