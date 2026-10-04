import { Label } from "./ui";

// Voces: tira compacta con dos citas de clientes (mismas palabras que en el carrusel).

const voices = [
  {
    quote:
      "Son directos, proponen soluciones concretas y no te venden humo. Cada entrega fue exactamente lo que necesitábamos.",
    name: "Steve Brechner",
    role: "CEO @ Peerforum",
  },
  {
    quote:
      "Lo que más valoro es que no tuvimos que explicar todo dos veces. Entendieron la operación rápido y propusieron cosas que ni habíamos considerado. Se siente como tener un equipo técnico propio.",
    name: "Alfredo Vargas",
    role: "CEO @ Integra",
  },
];

export default function Voices() {
  return (
    <section
      aria-labelledby="voces-title"
      className="on-light bg-paper py-[clamp(40px,5vw,64px)] text-ink"
    >
      <div className="wrap grid grid-cols-1 gap-x-12 gap-y-5 rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]">
        <Label as="h2" id="voces-title" tone="paper" className="pt-0.5">
          Lo que dicen los clientes
        </Label>
        <ul className="grid max-w-[920px] grid-cols-1 gap-x-10 gap-y-6 rail:grid-cols-2">
          {voices.map(({ quote, name, role }) => (
            <li key={name} className="min-w-0">
              <figure className="min-w-0 border-t border-line pt-3.5">
                <blockquote className="text-[14.5px] leading-[1.55] text-ink-2">
                  «{quote}»
                </blockquote>
                <figcaption className="mt-2.5 text-[13px] leading-[1.4] text-ink-3">
                  <b className="font-semibold text-ink">{name}</b> · {role}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
