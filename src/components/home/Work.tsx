import Cases from "./Cases";
import { OFFSET, SectionHead } from "./ui";

// Qué hacemos · camino principal: qué incluye el servicio y los casos actuales.

const includes = [
  {
    title: "Sistemas de gestión a medida",
    text: "La aplicación donde tu equipo trabaja todos los días, hecha para cómo opera tu empresa.",
  },
  {
    title: "Agentes de IA",
    text: "Leen información y resuelven una tarea concreta. En Altis Viajes, uno lee el PDF del mayorista y arma la cotización, y una persona la confirma.",
  },
  {
    title: "Automatizaciones",
    text: "Conectan las herramientas que ya usás para que nadie copie datos a mano de un lado a otro.",
  },
  {
    title: "Tableros",
    text: "Los números de la operación en un solo lugar y al día, para ver rápido dónde algo no cierra.",
  },
];

export default function Work() {
  return (
    <section
      id="que-hacemos"
      aria-labelledby="que-hacemos-title"
      className="on-light bg-surface py-sec text-ink"
    >
      <div className="wrap">
        <SectionHead
          tone="surface"
          label="Qué hacemos"
          title="IA en tu operación."
          titleId="que-hacemos-title"
          lead="Construimos los sistemas, agentes y automatizaciones que le sacan trabajo manual a tu equipo, conectados a lo que ya usa. Es el centro de nuestro trabajo."
        />

        <ul
          aria-label="Qué incluye"
          className={`mt-[clamp(36px,3.6vw,52px)] grid grid-cols-2 gap-x-7 gap-y-6 wide:grid-cols-4 ${OFFSET}`}
        >
          {includes.map(({ title, text }) => (
            <li key={title} className="min-w-0 border-t-2 border-ink pt-3.5">
              <h3 className="text-base leading-[1.35] font-semibold tracking-[-0.005em] text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink-2">{text}</p>
            </li>
          ))}
        </ul>

        <Cases />
      </div>
    </section>
  );
}
