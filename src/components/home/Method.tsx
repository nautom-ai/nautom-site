import { Alias, SectionHead } from "./ui";

// Cómo trabajamos · cuatro pasos sobre papel. Cada paso ocupa cuatro filas de
// la grilla con subgrid, así «Te llevás» queda alineado entre columnas.

const steps = [
  {
    title: "Entender cómo se trabaja",
    body: "Hablamos con quienes hacen la tarea y miramos las planillas, los chats y los sistemas que usan. Ahí aparecen las excepciones que ningún manual cuenta.",
    get: "Lo que aprendimos de cómo trabaja tu equipo, por escrito.",
  },
  {
    title: "Elegir por dónde arrancar",
    body: "Con vos elegimos la primera tarea manual a resolver. Suele ser la que más tiempo le saca a tu equipo o la que más frena la operación.",
    get: "Un primer objetivo claro, acordado con tu equipo.",
  },
  {
    title: "Construir y dejarlo andando",
    body: "Un agente de IA o una automatización básica, en 1 a 2 semanas. Una aplicación interna completa, en 4 a 8. Queda funcionando con tus datos reales.",
    get: "Un sistema funcionando, con tus datos reales.",
  },
  {
    title: "Acompañar y sumar lo siguiente",
    body: "Vemos cómo anda, lo ajustamos con tu equipo y vamos por lo próximo. Cada mejora parte de lo que ya está construido.",
    get: "Mejoras continuas, con el mismo equipo.",
  },
];

// Bordes y márgenes por posición: 4 columnas desde 961 px, 2 hasta 960 px y 1 hasta 640 px.
function stepClass(i: number) {
  const classes = [
    "grid min-w-0 row-span-4 grid-rows-subgrid content-start gap-y-0 border-line pt-6 pr-6 max-sm:pt-[22px] max-sm:pr-0 max-sm:pl-0 max-sm:border-l-0",
  ];
  if (i > 0) classes.push("border-l pl-6 max-sm:mt-6 max-sm:border-t");
  if (i === 2) classes.push("max-rail:border-l-0 max-rail:pl-0");
  if (i >= 2) classes.push("max-rail:mt-7 max-rail:border-t");
  return classes.join(" ");
}

function LoopIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Method() {
  return (
    <section
      id="como-trabajamos"
      aria-labelledby="metodo-title"
      className="on-light bg-paper py-sec text-ink"
    >
      <Alias id="how" />
      <div className="wrap">
        <SectionHead
          tone="paper"
          label="Cómo trabajamos"
          title={<>Cuatro pasos. El&nbsp;cuarto no termina.</>}
          titleId="metodo-title"
          lead="Trabajamos al lado de quienes hacen la tarea, sobre las herramientas que ya usan, y seguimos después de la primera entrega."
        />

        <ol className="mt-[clamp(40px,4.4vw,64px)] grid auto-rows-auto grid-cols-4 border-t-2 border-ink max-rail:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((step, i) => (
            <li key={step.title} className={stepClass(i)}>
              <span className="flex items-center gap-2 font-mono text-[13px] leading-[1.55] text-accent-900">
                {i + 1}
                {i === steps.length - 1 && <LoopIcon />}
              </span>
              <h3 className="mt-2.5 text-lg leading-[1.3] font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-2">{step.body}</p>
              <p className="pt-5 text-[15px] leading-[1.6] text-ink-2">
                <span className="block border-t border-line pt-3">
                  <span className="font-mono text-[11px] leading-[1.3] tracking-[0.12em] text-accent-900 uppercase">
                    Te llevás
                  </span>
                  <b className="block text-[15px] leading-[1.45] font-semibold text-ink">
                    {step.get}
                  </b>
                </span>
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-[clamp(40px,4.4vw,56px)] grid grid-cols-1 gap-x-12 gap-y-2.5 border-t border-line pt-[22px] rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]">
          <h3 className="font-mono text-[13px] leading-[1.4] font-bold tracking-[0.06em] text-ink uppercase">
            El conocimiento queda en tu empresa
          </h3>
          <div>
            <p className="max-w-[62ch] text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-ink">
              Lo que aprendemos de tu operación queda escrito, con las reglas, las excepciones y el
              porqué de cada decisión. Si alguien se va, la empresa sigue sabiendo cómo funciona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
