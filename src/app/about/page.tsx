import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, ButtonLink, Label, OFFSET, SectionHead } from "@/components/home/ui";

// /about con el posicionamiento de la home: estudio de servicios de IA para
// empresas argentinas de 50 a 600 personas. Cuatro bloques sobre navy separados
// por líneas finas: encabezado, cómo trabajamos, lo que nos define y cierre.
// Sólo afirmaciones que ya están en la home o en el /about anterior.

const RAIL =
  "grid grid-cols-1 gap-x-12 rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]";

const paths = [
  {
    kicker: "El centro de nuestro trabajo",
    main: true,
    title: "Servicios de IA para tu operación",
    text: "Sistemas de gestión a medida, agentes de IA, automatizaciones y tableros que le sacan trabajo manual a tu equipo, conectados a lo que ya usa.",
    href: "/#casos",
    cta: "Ver los casos",
  },
  {
    kicker: "También",
    main: false,
    title: "Productos digitales",
    text: "Diseñamos, construimos y operamos plataformas completas, con web, app, cobros y avisos por WhatsApp. Lo hacemos para clientes, como Locker Company, y en productos propios, como Nautom Alojamientos y Nautom Gestión.",
    href: "/#productos",
    cta: "Ver los productos",
  },
];

const traits = [
  {
    title: "La IA es nuestro trabajo de todos los días",
    text: "La usamos en lo que entregamos y también para construirlo: programamos con agentes de IA. Un agente o una automatización básica queda funcionando en 1 a 2 semanas; una aplicación interna completa, en 4 a 8.",
  },
  {
    title: "El conocimiento queda en tu empresa",
    text: "Lo que aprendemos de tu operación queda escrito, con las reglas, las excepciones y el porqué de cada decisión. Si alguien se va, la empresa sigue sabiendo cómo funciona.",
  },
  {
    title: "Seguimos después de la entrega",
    text: "Lo que construimos lo sostenemos junto a tu equipo: vemos cómo anda, lo ajustamos y vamos por lo próximo. Cada mejora parte de lo que ya está construido.",
  },
];

const founders = [
  {
    name: "Juan Gómez Naar",
    role: "Cofundador",
    focus: "Desarrollo de producto, arquitectura técnica y relación con clientes.",
  },
  {
    name: "Ignacio Ramognino",
    role: "Cofundador",
    focus: "Ingeniería, automatización e infraestructura.",
  },
];

/** Bloque sobre navy con una línea fina arriba. */
function Band({ labelledBy, children }: { labelledBy: string; children: ReactNode }) {
  return (
    <section aria-labelledby={labelledBy} className="pb-sec">
      <div className="wrap">
        <div className="border-t border-foreground/16 pt-[clamp(40px,4.4vw,64px)]">{children}</div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Encabezado */}
      <section
        aria-labelledby="about-title"
        className="pt-[clamp(48px,5vw,80px)] pb-sec text-foreground"
      >
        <div className="wrap">
          <div className={`${RAIL} gap-y-4`}>
            <Label tone="dark" copper className="rail:pt-4">
              Nosotros
            </Label>
            <div className="min-w-0">
              <h1
                id="about-title"
                className="max-w-[24ch] font-mono text-h1 font-bold leading-[1.1] tracking-[-0.025em] text-balance text-foreground"
              >
                Un estudio de servicios de IA que se mete en tu operación{" "}
                <span className="text-primary">y se queda.</span>
              </h1>
              <p className="mt-[clamp(18px,1.8vw,26px)] max-w-[36em] text-lead leading-[1.6]">
                Trabajamos con{" "}
                <strong className="font-semibold text-white">
                  empresas argentinas de 50&nbsp;a&nbsp;600 personas
                </strong>
                . Construimos los sistemas, agentes y automatizaciones que le sacan trabajo manual a
                tu equipo y los seguimos mejorando con vos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos: el servicio y, como camino secundario, los productos */}
      <Band labelledBy="trabajo-title">
        <SectionHead
          tone="dark"
          label="Cómo trabajamos"
          title="Trabajamos al lado de quienes hacen la tarea."
          titleId="trabajo-title"
          lead="Miramos las planillas, los chats y los sistemas que usan, elegimos con vos la primera tarea manual a resolver y la dejamos funcionando con tus datos reales."
        />
        <ul
          className={`${OFFSET} mt-[clamp(36px,4vw,52px)] grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2`}
        >
          {paths.map(({ kicker, main, title, text, href, cta }) => (
            <li key={title} className="flex min-w-0 flex-col border-t border-foreground/30 pt-5">
              <Label tone="dark" copper={main}>
                {kicker}
              </Label>
              <h3 className="mt-3 text-[19px] leading-[1.35] font-semibold tracking-[-0.01em] text-white">
                {title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty text-foreground">{text}</p>
              <p className="mt-auto pt-3">
                <Link
                  href={href}
                  className="group inline-flex min-h-11 items-center gap-2 font-medium text-foreground underline decoration-1 underline-offset-[5px] hover:decoration-2"
                >
                  {cta}
                  <ArrowIcon size={16} />
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Band>

      {/* Lo que nos define + cofundadores */}
      <Band labelledBy="define-title">
        <SectionHead
          tone="dark"
          label="Lo que nos define"
          title="Un equipo chico y dedicado, a propósito."
          titleId="define-title"
          lead="Nautom nació en 2023 en Buenos Aires y lo fundaron dos ingenieros industriales de la UCA."
        />
        <ul
          className={`${OFFSET} mt-[clamp(36px,4vw,52px)] grid grid-cols-1 border-t border-foreground/16 wide:grid-cols-3`}
        >
          {traits.map(({ title, text }, i) => (
            <li
              key={title}
              className={`grid min-w-0 grid-cols-1 content-start gap-x-8 gap-y-2 pt-5 pb-6 md:max-wide:grid-cols-[minmax(0,15em)_minmax(0,1fr)] wide:pr-6 wide:pb-0 ${i > 0 ? "border-t border-foreground/16 wide:border-t-0 wide:border-l wide:pl-6" : ""}`}
            >
              <h3 className="text-[17px] leading-[1.4] font-semibold tracking-[-0.005em] text-balance text-white">
                {title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-pretty text-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <div className={`${RAIL} mt-[clamp(40px,4.4vw,56px)] gap-y-4`}>
          <Label as="h3" tone="dark" copper id="cofundadores" className="rail:pt-1">
            Cofundadores
          </Label>
          <ul
            aria-labelledby="cofundadores"
            className="grid min-w-0 grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2"
          >
            {founders.map(({ name, role, focus }) => (
              <li key={name} className="min-w-0">
                <h4 className="text-[19px] leading-[1.4] font-semibold tracking-[-0.01em] text-white">
                  {name}
                </h4>
                <p className="mt-1 font-mono text-[12px] leading-[1.55] tracking-[0.12em] text-muted uppercase">
                  {role}
                </p>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-foreground">{focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* Cierre */}
      <Band labelledBy="cierre-title">
        <div className={`${RAIL} gap-y-4`}>
          <Label tone="dark" copper className="rail:pt-5">
            Próximo paso
          </Label>
          <div className="min-w-0">
            <h2
              id="cierre-title"
              className="font-mono text-[clamp(34px,4.6vw,64px)] leading-[1.05] font-bold tracking-[-0.03em] text-white"
            >
              Contanos tu caso.
            </h2>
            <p className="mt-5 max-w-[50ch] text-lead leading-[1.6] text-foreground">
              Escribinos qué le está sacando horas a tu equipo, o qué producto querés lanzar.
              Coordinamos una charla de 30 minutos para ver por dónde conviene empezar.
            </p>
            <ButtonLink href="/contact" className="mt-[30px]">
              Contanos tu caso
            </ButtonLink>
          </div>
        </div>
      </Band>
    </>
  );
}
