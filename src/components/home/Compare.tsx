import { SectionHead } from "./ui";

// Por qué un equipo · banda navy con la tabla comparativa. Hasta 767 px (max-md) la
// tabla se vuelve una tarjeta por criterio y cada celda muestra su columna
// (data-k). Los roles ARIA explícitos sostienen la semántica de tabla cuando
// las celdas pasan a display:block.

const OWN = "Armar un área propia";
const PROJECT = "Contratar un proyecto cerrado";
const US = "Nautom";

const rows = [
  {
    criterion: "Cuándo ves resultados",
    own: "Cuando terminás de contratar y el equipo aprende la operación. Suele llevar meses.",
    project:
      "Suele llegar recién después del relevamiento, el presupuesto y el desarrollo completo.",
    us: "Un agente de IA o una automatización básica, en 1 a 2 semanas.",
  },
  {
    criterion: "Quién lo sostiene después",
    own: "Tu equipo, mientras las personas clave se queden.",
    project: "Suele terminar con la entrega. Cada cambio es un pedido nuevo.",
    us: "Nosotros, junto a tu equipo. Seguimos mejorando lo que construimos.",
  },
  {
    criterion: "Experiencia en IA",
    own: "Hay que encontrarla y retenerla.",
    project: "Depende del proveedor.",
    us: "Es nuestro trabajo de todos los días.",
  },
];

const headBase =
  "px-[22px] py-3.5 text-left align-top font-mono text-[12px] leading-[1.55] tracking-[0.12em] uppercase max-md:block max-md:w-full";
const headCell = `${headBase} font-normal text-muted`;
const headUs = `${headBase} border-x border-t border-primary/55 bg-primary/10 font-bold text-primary`;

const rowHead =
  "w-[22%] border-t border-foreground/16 py-5 pr-[22px] pl-0 text-left align-top font-mono text-[15px] leading-[1.35] font-bold text-white max-md:block max-md:w-auto max-md:border-t-0 max-md:pt-4 max-md:pr-4 max-md:pb-2.5 max-md:pl-4";

// Celda base: en mobile antepone el nombre de la columna (data-k) como etiqueta.
const cellBase =
  "w-[26%] border-t px-[22px] py-5 align-top text-[15.5px] leading-[1.55] max-md:block max-md:w-auto max-md:pt-3 max-md:pr-4 max-md:pb-3.5 max-md:pl-4 max-md:before:mb-1 max-md:before:block max-md:before:font-mono max-md:before:text-[11px] max-md:before:tracking-[0.1em] max-md:before:uppercase max-md:before:content-[attr(data-k)]";
const cell = `${cellBase} border-foreground/16 text-muted max-md:before:text-muted`;
const cellUs = `${cellBase} border-x border-t-foreground/16 border-x-primary/55 bg-primary/10 text-white max-md:border-x-0 max-md:border-t-primary/55 max-md:before:text-primary`;
const cellUsLast = `${cellUs} border-b border-b-primary/55 max-md:border-b-0`;

export default function Compare() {
  return (
    <section
      id="por-que"
      aria-labelledby="cmp-title"
      className="bg-background py-sec text-foreground"
    >
      <div className="wrap">
        <SectionHead
          tone="dark"
          label="Por qué un equipo"
          title="Tres formas de sumar IA a tu operación."
          titleId="cmp-title"
          lead="Así se comparan los caminos habituales para una empresa de tu tamaño."
        />

        <table
          role="table"
          className="mt-[clamp(36px,4vw,56px)] w-full border-collapse text-left max-md:block"
        >
          <caption className="sr-only">
            Comparación entre armar un área propia, contratar un proyecto cerrado y trabajar con
            Nautom
          </caption>
          <thead role="rowgroup" className="max-md:sr-only">
            <tr role="row">
              <th scope="col" role="columnheader" className={headCell}>
                <span className="sr-only">Criterio</span>
              </th>
              <th scope="col" role="columnheader" className={headCell}>
                {OWN}
              </th>
              <th scope="col" role="columnheader" className={headCell}>
                {PROJECT}
              </th>
              <th scope="col" role="columnheader" className={headUs}>
                {US}
                <span className="mt-1 block text-[11px] font-normal tracking-[0.08em] text-accent-200">
                  Lo que proponemos
                </span>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="max-md:block max-md:w-full">
            {rows.map((row, i) => (
              <tr
                key={row.criterion}
                role="row"
                className="max-md:mb-3.5 max-md:block max-md:w-full max-md:overflow-hidden max-md:rounded max-md:border max-md:border-foreground/30"
              >
                <th scope="row" role="rowheader" className={rowHead}>
                  {row.criterion}
                </th>
                <td role="cell" data-k={OWN} className={cell}>
                  {row.own}
                </td>
                <td role="cell" data-k={PROJECT} className={cell}>
                  {row.project}
                </td>
                <td
                  role="cell"
                  data-k={US}
                  className={i === rows.length - 1 ? cellUsLast : cellUs}
                >
                  {row.us}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
