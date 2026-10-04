import { Alias, Label, OFFSET, SectionHead } from "./ui";

// Equipo: los dos cofundadores y tres datos del estudio. Todavía no hay fotos:
// cada persona lleva un monograma con sus iniciales (decorativo; el nombre está en el h3).

const people = [
  {
    name: "Juan Gómez Naar",
    initials: "JG",
    role: "Cofundador",
    focus: "Desarrollo de producto, arquitectura técnica y relación con clientes.",
  },
  {
    name: "Ignacio Ramognino",
    initials: "IR",
    role: "Cofundador",
    focus: "Ingeniería, automatización e infraestructura.",
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      aria-labelledby="equipo-title"
      className="on-light bg-surface py-sec text-ink"
    >
      <Alias id="about" />
      <div className="wrap">
        <SectionHead
          tone="surface"
          label="Equipo"
          title="Un estudio chico, a propósito."
          titleId="equipo-title"
          lead="Nautom nació en 2023 en Buenos Aires y sigue siendo un equipo chico y dedicado. Lo que construimos para tu empresa queda escrito en tu empresa y no en nuestra cabeza, con las reglas, las excepciones y el porqué de cada decisión."
        />

        <div className={OFFSET}>
          <div className="mt-[clamp(36px,4vw,52px)] grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
            {people.map(({ name, initials, role, focus }) => (
              <article
                key={name}
                className="grid min-w-0 grid-cols-[96px_minmax(0,1fr)] items-start gap-5 max-sm:grid-cols-[72px_minmax(0,1fr)] max-sm:gap-4"
              >
                <div
                  aria-hidden="true"
                  className="grid h-28 w-24 place-content-center rounded-xs border border-line bg-paper max-sm:h-[86px] max-sm:w-[72px]"
                >
                  <span className="font-mono text-[24px] leading-none font-bold tracking-[-0.03em] text-accent-900 max-sm:text-[19px]">
                    {initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[19px] leading-[1.55] font-semibold tracking-[-0.01em]">
                    {name}
                  </h3>
                  <p className="mt-1 font-mono text-[12px] leading-[1.55] tracking-[0.12em] text-accent-700 uppercase">
                    {role}
                  </p>
                  <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-2">{focus}</p>
                </div>
              </article>
            ))}
          </div>

          <dl className="mt-[clamp(32px,3.6vw,48px)] grid grid-cols-1 border-t border-line md:grid-cols-3">
            <div className="min-w-0 pt-4 md:pt-[18px] md:pr-6">
              <Label as="dt" tone="surface" className="leading-[1.55]">
                Desde
              </Label>
              <dd className="mt-2 text-[15px] leading-[1.55]">2023, en Buenos Aires.</dd>
            </div>
            <div className="mt-4 min-w-0 border-t border-line pt-4 md:mt-0 md:border-t-0 md:border-l md:px-6 md:pt-[18px]">
              <Label as="dt" tone="surface" className="leading-[1.55]">
                Con qué construimos
              </Label>
              <dd className="mt-2 text-[15px] leading-[1.55]">
                Claude Code, Next.js, Supabase, Vercel y Python.
              </dd>
            </div>
            <div className="mt-4 min-w-0 border-t border-line pt-4 md:mt-0 md:border-t-0 md:border-l md:px-6 md:pt-[18px]">
              <Label as="dt" tone="surface" className="leading-[1.55]">
                Dónde seguirnos
              </Label>
              <dd className="mt-2 text-[15px] leading-[1.55]">
                <a
                  href="https://www.linkedin.com/company/nautom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-1 underline-offset-[5px] hover:decoration-2"
                >
                  Nautom en LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
