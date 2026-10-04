import Image from "next/image";
import { ButtonLink } from "./ui";

const clients = [
  { src: "/images/logos/ivess-logo-footer.svg", name: "El Jumillano (IVESS)", width: 61, height: 32 },
  { src: "/images/logos/Impacto%20Positivo_IsoLogotipo-02.png", name: "Impacto Positivo", width: 84, height: 32 },
  { src: "/images/logos/peerforum.png", name: "Peerforum", width: 96, height: 21 },
  { src: "/images/logos/integra.png", name: "Integra Groupe", width: 57, height: 38 },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-background text-foreground">
      <div className="wrap">
        <div className="pt-14 pb-14 md:pt-24 md:pb-20">
          <p className="label-mono flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Estudio de servicios de IA
          </p>
          <div className="mt-8 grid items-end gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-12">
            <h1 id="hero-title" className="font-mono text-[clamp(32px,4.7vw,68px)] leading-[1.12] font-bold tracking-[-0.055em]">
              Menos planillas.<br />
              <span className="text-primary">Más empresa.</span>
            </h1>
            <div className="max-w-[34ch] lg:pb-1">
              <p className="text-[17px] leading-relaxed md:text-lg">
                Sistemas a medida y agentes de IA para sacar trabajo manual de tu operación.
              </p>
              <ButtonLink href="/contact" className="mt-6">Contanos tu caso</ButtonLink>
            </div>
          </div>
          <p className="mt-9 text-sm leading-relaxed text-muted md:mt-12">
            Para empresas argentinas de 50 a 600 personas.
          </p>
        </div>
        <div id="clients" className="flex flex-col gap-7 border-t border-foreground/16 py-7 md:flex-row md:items-center md:justify-between md:gap-10 md:py-9">
          <p className="text-sm text-muted">Ya trabajamos juntos</p>
          <ul aria-label="Clientes" className="grid grid-cols-4 items-center gap-6 sm:gap-12 lg:gap-16">
            {clients.map(({ src, name, width, height }) => (
              <li key={name}>
                <Image src={src} alt={name} width={width} height={height} className="h-7 w-full max-w-[96px] object-contain brightness-0 invert opacity-65 sm:h-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
