import Image from "next/image";
import { Alias, Label } from "./ui";

// Logos de clientes + qué es Nautom. Cada logo tiene su altura óptica (desktop
// y ≤640 px) para que pesen parecido; se muestran en negro al 62 %.

const logos = [
  {
    src: "/images/logos/ivess-logo-footer.svg",
    alt: "El Jumillano (IVESS)",
    width: 61,
    height: 32,
    size: "h-8 max-sm:h-[26px]",
  },
  {
    src: "/images/logos/Impacto%20Positivo_IsoLogotipo-02.png",
    alt: "Impacto Positivo",
    width: 84,
    height: 32,
    size: "h-8 max-sm:h-6",
  },
  {
    src: "/images/logos/peerforum.png",
    alt: "Peerforum",
    width: 83,
    height: 18,
    size: "h-[18px] max-sm:h-[13px]",
  },
  {
    src: "/images/logos/integra.png",
    alt: "Integra Groupe",
    width: 63,
    height: 42,
    size: "h-[42px] max-sm:h-8",
  },
  {
    src: "/images/logos/keepsmiling.svg",
    alt: "KeepSmiling",
    width: 73,
    height: 24,
    size: "h-6 max-sm:h-[17px]",
  },
  {
    src: "/images/logos/avenida+_logo_dark.png",
    alt: "Avenida Más",
    width: 66,
    height: 24,
    size: "h-6 max-sm:h-[18px]",
  },
  {
    src: "/images/logos/ypf-gas2.png",
    alt: "YPF Gas",
    width: 48,
    height: 34,
    size: "h-[34px] max-sm:h-[26px]",
  },
  {
    src: "/images/logos/visible.svg",
    alt: "Visible",
    width: 95,
    height: 20,
    size: "h-5 max-sm:h-3.5",
  },
];

const railGrid =
  "grid grid-cols-1 gap-x-12 rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]";

export default function Intro() {
  return (
    <section aria-labelledby="que-es" className="on-light relative bg-surface text-ink">
      <Alias id="clients" />
      <div className="wrap">
        <div className={`${railGrid} items-center gap-y-4 border-b border-line pt-[30px] pb-[26px]`}>
          <Label tone="surface">Clientes</Label>
          <ul className="flex flex-wrap items-center justify-between gap-x-7 gap-y-5 max-sm:grid max-sm:grid-cols-4 max-sm:gap-x-3.5 max-sm:gap-y-[22px] rail:max-xl:grid rail:max-xl:grid-cols-4 rail:max-xl:gap-x-6">
            {logos.map(({ src, alt, width, height, size }) => (
              <li key={src} className="flex min-w-0 items-center">
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className={`w-auto max-w-[110px] opacity-[.62] brightness-0 max-sm:max-w-full ${size}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={`${railGrid} gap-y-[18px] py-[clamp(56px,7vw,104px)]`}>
          <Label as="h2" tone="surface" copper id="que-es" className="rail:pt-3">
            Qué es Nautom
          </Label>
          <p className="max-w-[33ch] text-statement leading-[1.25] font-medium tracking-[-0.022em] text-ink">
            Nautom es un estudio de servicios de IA que se mete en la operación de tu empresa,
            construye los sistemas que le sacan trabajo manual y se queda para seguir
            mejorándolos.
          </p>
        </div>
      </div>
    </section>
  );
}
