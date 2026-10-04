import Image from "next/image";
import Link from "next/link";
import { Alias, ArrowIcon, Label } from "./ui";

const moreCases = [
  { name: "Impacto Positivo", detail: "Facturación mensual sin intervención manual.", href: "/casos#c-imp" },
  { name: "Altis Viajes", detail: "Gestión y cotizaciones con IA para una agencia de viajes.", href: "/casos#c-alt" },
  { name: "Peerforum", detail: "Un sistema para gestionar y acompañar sus foros.", href: "/casos#c-pul" },
];

export default function SelectedWork() {
  return (
    <section id="casos" aria-labelledby="cases-title" className="on-light relative bg-paper py-16 text-ink md:py-24">
      <Alias id="cases" />
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Label tone="paper" copper>02 / En la práctica</Label>
            <h2 id="cases-title" className="mt-4 font-mono text-[clamp(27px,3vw,40px)] leading-tight font-bold tracking-[-0.035em]">Sistemas que ya están en marcha.</h2>
          </div>
        </div>
        <article className="mt-10 grid overflow-hidden rounded-sm border border-line bg-surface lg:mt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)]">
          <div className="flex flex-col p-6 sm:p-9 lg:p-10">
            <p className="label-mono text-ink-3">El Jumillano · IVESS</p>
            <h3 className="mt-7 font-mono text-[30px] leading-tight font-bold tracking-[-0.04em] sm:text-[36px]">
              7 áreas.<br />Un solo sistema.
            </h3>
            <p className="mt-5 max-w-[37ch] text-[15px] leading-relaxed text-ink-2">
              Reemplazamos planillas por una plataforma que conecta la distribución, el personal y la atención al cliente.
            </p>
            <Link href="/casos#c-jum" className="group mt-7 inline-flex min-h-11 items-center gap-3 self-start text-sm font-semibold underline underline-offset-4 lg:mt-auto lg:pt-7">
              Conocé el caso <ArrowIcon size={17} />
            </Link>
          </div>
          <figure className="min-w-0 border-t border-line bg-background p-5 sm:p-8 lg:border-t-0 lg:border-l lg:p-9">
            <div className="flex items-center justify-between gap-3 pb-5 text-xs text-muted">
              <span className="font-mono">Operación conectada</span>
              <span>Captura real</span>
            </div>
            <Image
              src="/images/casos/jumillano-ejecucion.webp"
              alt="Sistema de El Jumillano: planificación de repartos con choferes, ayudantes y personal disponible. Datos personales difuminados."
              width={1600}
              height={875}
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 55vw, 90vw"
              className="h-auto w-full rounded-sm"
            />
            <figcaption className="pt-4 text-xs leading-relaxed text-muted">La distribución de cada día, en un solo lugar.</figcaption>
          </figure>
        </article>
        <ul className="mt-7 grid gap-x-9 sm:grid-cols-3">
          {moreCases.map(({ name, detail, href }) => (
            <li key={name} className="border-t border-line">
              <Link href={href} className="group block py-5">
                <h3 className="flex items-center justify-between gap-3 text-base font-semibold">{name}<ArrowIcon size={16} /></h3>
                <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-2">{detail}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
