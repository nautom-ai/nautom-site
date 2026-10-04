import type { ReactNode } from "react";
import { OFFSET, SectionHead } from "./ui";

// El problema: la operación vive en la cabeza de pocos. Los chips muestran
// dónde vive hoy (planillas, WhatsApp, mails); desde 1024 px se ladean apenas.

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;

const chips: { text: string; hot?: boolean; tilt?: string; icon: ReactNode }[] = [
  {
    text: "Planilla_pedidos_FINAL_v3.xlsx",
    hot: true,
    tilt: "lg:-rotate-[1.2deg]",
    icon: <path d="M4 3h11l5 5v13H4z M14 3v6h6 M8 13h8 M8 17h8" {...stroke} />,
  },
  {
    text: "Grupo de WhatsApp · Depósito",
    icon: <path d="M4 5h16v11H9l-5 4z" {...stroke} />,
  },
  {
    text: "RE: RE: RV: pedido urgente",
    tilt: "lg:rotate-[.9deg]",
    icon: <path d="M3 5h18v14H3z M3 6l9 7 9-7" {...stroke} />,
  },
  {
    text: "«Eso lo sabe el encargado»",
    hot: true,
    tilt: "lg:-rotate-[.7deg] lg:translate-y-[3px]",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" {...stroke} />
        <path d="M4 21c1-4 4-6 8-6s7 2 8 6" {...stroke} />
      </>
    ),
  },
  {
    text: "Reporte_semanal (a mano).xlsx",
    icon: <path d="M4 3h11l5 5v13H4z M14 3v6h6" {...stroke} />,
  },
];

const columns = [
  {
    title: "Vive en la cabeza de pocos",
    body: "Planillas, mails reenviados, grupos de WhatsApp y lo que sabe el encargado. Mientras esté, anda. Cuando falta, se frena.",
  },
  {
    title: "La IA no pasa de la demo",
    body: "Viste lo que puede hacer y quizás probaste algo. Llevarlo al día a día, con tus datos y tus excepciones, es otro trabajo. Y casi nunca tiene dueño.",
  },
  {
    title: "Crecer es sumar gente",
    body: "Cada cliente nuevo trae más carga manual. Sin sistemas que la absorban, la única forma de crecer es contratar más.",
  },
];

export default function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="on-light bg-paper py-sec text-ink"
    >
      <div className="wrap">
        <SectionHead
          tone="paper"
          label="El problema"
          titleId="problema-title"
          title={<>Si el que sabe falta una semana, la&nbsp;operación se traba.</>}
          lead="Cuando la forma de trabajar vive en la cabeza de dos o tres personas, todo anda hasta que querés crecer, cambiar algo o sumar IA. Ahí aparece el cuello de botella."
        />

        <ul
          aria-label="Dónde vive hoy la operación"
          className={`mt-[clamp(28px,3vw,40px)] flex flex-wrap gap-x-3 gap-y-2.5 ${OFFSET}`}
        >
          {chips.map(({ text, hot, tilt = "", icon }) => (
            <li
              key={text}
              className={`inline-flex max-w-full items-center gap-2 rounded-xs border bg-white px-3 py-[9px] font-mono text-[13px] leading-[1.3] text-ink ${hot ? "border-accent-700" : "border-line"} ${tilt}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`flex-none ${hot ? "text-accent-700" : "text-ink-3"}`}
              >
                {icon}
              </svg>
              <span className="min-w-0 wrap-anywhere">{text}</span>
            </li>
          ))}
        </ul>

        <div
          className={`mt-[clamp(40px,4.4vw,64px)] grid grid-cols-1 gap-6 rail:grid-cols-3 rail:gap-x-10 rail:gap-y-7 ${OFFSET}`}
        >
          {columns.map(({ title, body }) => (
            <div key={title} className="min-w-0 border-t border-line pt-5">
              <h3 className="font-mono text-lg leading-[1.3] font-bold tracking-[-0.01em]">
                {title}
              </h3>
              <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-2">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
