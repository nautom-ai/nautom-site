import { ButtonLink, Label } from "./ui";

// Cierre: CTA al formulario, para quién sirve y qué pasa después de escribirnos.

const fit = [
  "Tu empresa tiene entre 50 y 600 personas y la operación ya está en marcha.",
  "Hay procesos que solo saben hacer dos o tres personas.",
  "Tu equipo carga los mismos datos a mano en más de un lugar.",
  "Querés lanzar un producto digital para tus clientes.",
];

const steps = [
  {
    step: "Paso 1",
    title: "Completás el formulario",
    detail: "Nombre, email, teléfono, empresa y tu mensaje.",
  },
  {
    step: "Paso 2",
    title: "Te escribimos para coordinar",
    detail: "Acordamos un día y un horario para hablar.",
  },
  {
    step: "Paso 3",
    title: "Charla de 30 minutos",
    detail: "Nos contás cómo trabaja tu equipo y vemos por dónde conviene empezar.",
  },
];

export default function Closing() {
  return (
    <section
      id="contacto"
      aria-labelledby="cierre-title"
      className="bg-background py-sec text-foreground"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 items-start gap-x-[72px] gap-y-10 rail:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="min-w-0">
            <Label tone="dark" copper>
              Próximo paso
            </Label>
            <h2
              id="cierre-title"
              className="mt-4 font-mono text-[clamp(34px,4.6vw,64px)] leading-[1.05] font-bold tracking-[-0.03em] text-white"
            >
              Contanos tu caso.
            </h2>
            <p className="mt-5 max-w-[50ch] text-lead leading-[1.6]">
              Escribinos qué le está sacando horas a tu equipo, o qué producto querés lanzar.
              Coordinamos una charla de 30 minutos para ver por dónde conviene empezar.
            </p>
            <ButtonLink href="/contact" className="mt-[30px]">
              Contanos tu caso
            </ButtonLink>
          </div>

          <div className="min-w-0 border-t border-foreground/16 pt-[22px]">
            <Label as="h3" tone="dark">
              Te sirve si…
            </Label>
            <ul className="mt-3">
              {fit.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[18px_minmax(0,1fr)] gap-3 border-b border-foreground/16 py-3.5 text-base leading-[1.5]"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className="mt-[5px] text-primary"
                  >
                    <rect x="1" y="1" width="10" height="10" fill="currentColor" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(48px,5vw,72px)] grid grid-cols-1 border-t border-foreground/16 rail:grid-cols-[minmax(0,.8fr)_minmax(0,3fr)]">
          <Label as="h3" tone="dark" className="pt-[18px] rail:pt-[22px] rail:pr-6">
            Qué pasa después
          </Label>
          <ol className="grid grid-cols-1 sm:grid-cols-3">
            {steps.map(({ step, title, detail }) => (
              <li
                key={step}
                className="min-w-0 border-t border-foreground/16 pt-4 pb-[18px] leading-[1.55] first:border-t-0 last:pb-0 sm:border-t-0 sm:border-l sm:px-6 sm:pt-[22px] sm:pb-0 max-rail:sm:first:border-l-0 max-rail:sm:first:pl-0"
              >
                <span className="font-mono text-[11px] leading-[1.3] tracking-[0.12em] text-primary uppercase">
                  {step}
                </span>
                <b className="mt-2 block font-mono text-[17px] leading-[1.55] font-bold tracking-[-0.01em] text-white">
                  {title}
                </b>
                <p className="mt-1.5 text-sm leading-[1.55] text-muted">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
