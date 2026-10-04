import Image from "next/image";
import { ArrowIcon, ButtonLink } from "./ui";

// Hero C · «La empresa entera en un sistema», con el titular V2.
// Cuatro piezas: H1, bajada, CTA con un link y el índice del sistema de
// El Jumillano. Una sola cifra grande (en copper), sobre lo que construyó Nautom.

const areas = [
  { area: "Comercial", detail: "Planificación y unos 190 repartos diarios" },
  { area: "Atención al cliente", detail: "Reclamos, urgencias y altas" },
  { area: "RRHH", detail: "Fichadas y liquidaciones por sociedad" },
  { area: "Conectado a", detail: "Unos 10 sistemas, del ERP a la nómina" },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-background pt-[clamp(48px,5vw,80px)] pb-[clamp(52px,5vw,80px)] text-foreground"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 items-start gap-x-[clamp(40px,4vw,56px)] gap-y-9 sm:gap-y-11 rail:grid-cols-[minmax(0,15fr)_minmax(0,11fr)]">
          <div className="min-w-0">
            <h1
              id="hero-title"
              className="font-mono text-h1 font-bold leading-[1.1] tracking-[-0.025em] text-foreground"
            >
              Sistemas y agentes de IA para que tu operación deje de depender de{" "}
              <span className="text-primary">planillas.</span>
            </h1>
            <p className="mt-[clamp(18px,1.8vw,26px)] max-w-[36em] text-lead leading-[1.6]">
              Somos un estudio de servicios de IA para{" "}
              <strong className="font-semibold text-white">
                empresas argentinas de 50&nbsp;a&nbsp;600 personas
              </strong>
              . Construimos a medida los sistemas con los que opera tu empresa y los seguimos
              mejorando con vos.
            </p>
            <div className="mt-[clamp(26px,2.4vw,34px)] flex flex-wrap items-center gap-x-7 gap-y-3.5">
              <ButtonLink href="/contact">Contanos tu caso</ButtonLink>
              <a
                href="#casos"
                className="font-medium text-foreground underline decoration-1 underline-offset-[5px] hover:decoration-2"
              >
                Ver el caso El Jumillano
              </a>
            </div>
          </div>

          <div className="min-w-0 max-rail:max-w-[560px]">
            <figure aria-labelledby="ops-cap" className="min-w-0 border-t border-foreground/30">
              <figcaption id="ops-cap" className="block pt-3.5 pb-3.5 sm:pb-4">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <Image
                    src="/images/logos/ivess-logo-footer.svg"
                    alt=""
                    width={38}
                    height={20}
                    className="h-5 w-auto opacity-[.92] brightness-0 invert"
                  />
                  <span className="font-mono text-[11px] leading-[1.3] tracking-[0.14em] text-muted uppercase">
                    Caso real
                  </span>
                </span>
                <span className="mt-3 block text-base leading-normal text-pretty text-foreground">
                  El sistema que construimos para{" "}
                  <strong className="font-semibold text-white">El&nbsp;Jumillano</strong>,
                  distribuidor #1 de Agua IVESS, con unos 158.000 clientes activos.
                </span>
              </figcaption>
              <p className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-1.5 border-t border-foreground/16 pt-3.5 pb-[15px] sm:gap-x-5 sm:pt-4 sm:pb-[17px]">
                <b className="font-mono text-[clamp(32px,2.8vw,40px)] leading-none font-bold tracking-[-0.035em] whitespace-nowrap text-primary">
                  7 áreas
                </b>
                <span className="max-w-[34ch] text-sm leading-[1.45] text-pretty text-foreground">
                  en una sola plataforma, que reemplazó las planillas en poco más de seis meses
                </span>
              </p>
              <ul aria-label="Qué abarca el sistema" className="border-t border-foreground/16">
                {areas.map(({ area, detail }) => (
                  <li
                    key={area}
                    className="grid grid-cols-1 items-baseline gap-x-4 gap-y-[3px] border-b border-foreground/16 pt-2.5 pb-[11px] sm:grid-cols-[150px_minmax(0,1fr)] rail:max-nav:grid-cols-1"
                  >
                    <b className="font-mono text-[11px] leading-[1.4] font-normal tracking-[0.1em] text-foreground uppercase">
                      {area}
                    </b>
                    <span className="text-sm leading-[1.45] text-muted">{detail}</span>
                  </li>
                ))}
              </ul>
            </figure>
            <p className="mt-3.5 text-[13px] leading-normal">
              <a
                href="#casos"
                className="group text-pretty text-muted underline decoration-foreground/30 decoration-1 underline-offset-4 hover:text-foreground hover:decoration-current"
              >
                También construimos para Altis Viajes, Peerforum e Impacto&nbsp;Positivo
                <span className="ml-1.5 inline-block align-[-2px]">
                  <ArrowIcon size={14} />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
