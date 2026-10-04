import Image from "next/image";
import { Alias, ButtonLink, Label } from "./ui";

// Casos actuales (dentro de «Qué hacemos»). El Jumillano va como caso grande;
// los otros tres son datos y la captura es opcional: sin `shot`, la tarjeta
// queda completa con el texto. Las capturas van después del texto y la cifra,
// así el caso se entiende aunque la imagen no cargue.

type Shot = { src: string; alt: string; width: number; height: number; caption: string };

/** Un bloque de la tarjeta: con `figure`, se muestra como resultado (cifra + texto). */
type Slot = { label: string; figure?: string; text: string };

type SmallCase = { id: string; name: string; context: string; slots: Slot[]; shot?: Shot };

const smallCases: SmallCase[] = [
  {
    id: "c-imp",
    name: "Impacto Positivo · Impacto+",
    context: "Más de 2.000 servicios activos",
    slots: [
      { label: "Resultado", figure: "0", text: "intervención manual en la facturación mensual" },
      {
        label: "Qué construimos",
        text: "Todo el motor financiero, desde la cobranza hasta la facturación, y un espacio de operación con clientes, visitas, productos y precios, pendientes de facturación y tableros.",
      },
    ],
    shot: {
      src: "/images/casos/impacto-dashboard.webp",
      alt: "Tableros de Impacto+: servicios registrados, activos y de baja, y un gráfico de altas y bajas de servicios de los últimos 12 meses.",
      width: 1600,
      height: 875,
      caption: "Tableros de servicios activos y de baja, con sus altas y bajas mes a mes.",
    },
  },
  {
    id: "c-alt",
    name: "Altis Viajes",
    context: "Agencia de viajes",
    slots: [
      {
        label: "Qué construimos",
        text: "Un sistema de gestión con el panorama de la agencia, los files en operación y su saldo, y cotizaciones con un link para que el cliente vea y acepte la propuesta online.",
      },
      {
        label: "IA en el sistema",
        text: "Extrae los datos de facturas, itinerarios y liquidaciones de operadores.",
      },
    ],
    shot: {
      src: "/images/casos/altis-panorama.webp",
      alt: "Panorama de la agencia en el sistema de Altis Viajes: files abiertos, viajes que salen en los próximos 30 días, cotizaciones aceptadas y la lista de files en operación con su saldo.",
      width: 1600,
      height: 913,
      caption:
        "Panorama de la agencia: files abiertos, viajes de los próximos 30 días y cotizaciones en curso.",
    },
  },
  {
    id: "c-pul",
    name: "Peerforum · Pulse",
    context: "Herramienta interna del equipo de Peerforum",
    slots: [
      {
        label: "Qué construimos",
        text: "Un sistema de gestión y monitoreo con el estado de los foros, la asistencia de cada grupo, las confirmaciones y las acciones de retención y adopción.",
      },
      {
        label: "Segmentación",
        text: "Agrupa a los miembros según su compromiso y su riesgo de baja.",
      },
    ],
    shot: {
      src: "/images/casos/pulse-segmentos.webp",
      alt: "Matriz de segmentación de Pulse: los miembros activos de Peerforum agrupados por nivel de compromiso y antigüedad, con la cantidad de cada grupo.",
      width: 1600,
      height: 1109,
      caption: "Segmentación de los miembros activos por compromiso y antigüedad.",
    },
  },
];

const built = [
  {
    title: "Liquidaciones del personal, por sociedad.",
    text: "Comisiones y feriados se calculan, se revisan y se cierran sociedad por sociedad, con el archivo listo para el sistema de sueldos. Nada se liquida en cero sin avisar: si falta la información de un día, queda pendiente hasta completarla.",
  },
  {
    title: "La distribución de cada día.",
    text: "Planificación semanal y ejecución diaria de unos 190 repartos, con el chofer, el ayudante y los bultos de cada ruta.",
  },
  {
    title: "Conectado a unos 10 sistemas.",
    text: "ERP, app de calle de los repartidores, reloj de fichadas, sueldos y nómina. El padrón de clientes se actualiza solo todos los días.",
  },
  {
    title: "Personal y asistencia.",
    text: "Novedades, vacaciones, fichadas, horas extra y licencias de conducir. Cada mañana cruza los repartos con las fichadas, y la liquidación no se cierra hasta revisar las diferencias.",
  },
  {
    title: "Atención, Calidad y ventas.",
    text: "Reclamos, urgencias y altas del día, no conformidades y un CRM para las ventas a empresas.",
  },
  {
    title: "Reclamos imputados a quien corresponde.",
    text: "Todas las semanas asigna los «no pasó el reparto» a quien de verdad manejó ese día. En la semana en que lo medimos, el método anterior se equivocaba de persona en 4 de 5 casos.",
  },
];

const how = [
  { value: "2 días", text: "del arranque al primer módulo en uso" },
  { value: "+900", text: "cambios publicados desde marzo, unos 33 por semana" },
];

const frame = "overflow-hidden rounded border border-line bg-paper";
const caption = "mt-2 text-[13px] leading-[1.45] text-ink-3";

function LeadCase() {
  return (
    <article
      aria-labelledby="c-jum"
      className="grid grid-cols-1 items-start gap-x-[clamp(28px,3.4vw,56px)] gap-y-7 rounded border border-line bg-white p-[clamp(22px,3vw,40px)] md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] md:grid-rows-[auto_1fr_auto_auto]"
    >
      <div className="min-w-0 md:col-start-1 md:row-start-1">
        <div className="flex flex-wrap items-center gap-3">
          <Image
            src="/images/logos/ivess-logo-footer.svg"
            alt=""
            width={49}
            height={26}
            className="h-[26px] w-auto opacity-75 brightness-0"
          />
          <h4
            id="c-jum"
            className="font-mono text-[clamp(21px,1.9vw,26px)] leading-[1.2] font-bold tracking-[-0.015em] text-ink"
          >
            El Jumillano
          </h4>
        </div>
        <p className="mt-2 text-sm leading-normal text-ink-3">
          Distribuidor #1 de Agua IVESS · casi 600 personas · 4&nbsp;sociedades
        </p>
        <p className="mt-[22px] font-mono text-accent-700">
          <span className="block text-[clamp(46px,4.6vw,64px)] leading-none font-bold tracking-[-0.04em]">
            158.000
          </span>
          <span className="mt-2.5 block font-sans text-[15px] leading-[1.4] font-semibold text-ink">
            clientes activos. La operación que los atiende corre sobre el sistema que construimos.
          </span>
        </p>
        <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-2">
          En poco más de seis meses reemplazamos las planillas y la app anterior por una sola
          plataforma. Ahí trabajan todos los días Comercial, Atención al cliente, RRHH, Taller y
          Planta, Calidad, Ventas a empresas y Gerencia.
        </p>
      </div>

      <div className="min-w-0 md:col-start-2 md:row-[1/span_2]">
        <Label tone="surface" className="mb-2.5">
          Qué construimos
        </Label>
        <ul className="border-t border-line">
          {built.map(({ title, text }) => (
            <li
              key={title}
              className="relative border-b border-line pt-3 pb-[13px] pl-5 text-[15px] leading-normal text-ink-2 before:absolute before:top-[19px] before:left-0 before:size-[7px] before:bg-ink before:content-['']"
            >
              <b className="font-semibold text-ink">{title}</b> {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid min-w-0 grid-cols-1 items-start gap-x-[clamp(28px,3.4vw,56px)] gap-y-[18px] border-t border-line-soft pt-[22px] md:col-span-2 md:row-start-3 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] md:pt-[26px]">
        <div>
          <Label tone="surface">Cómo lo construimos</Label>
          <p className="mt-2.5 max-w-[46ch] text-[15px] leading-[1.55] text-ink-2">
            Programamos con agentes de IA, con cada regla y decisión documentada y controles
            automáticos en cada cambio. De ahí la velocidad.
          </p>
        </div>
        <dl className="grid grid-cols-2">
          {how.map(({ value, text }) => (
            <div
              key={value}
              className="min-w-0 border-l border-line px-5 pt-0.5 max-md:first:border-l-0 max-md:first:pl-0"
            >
              <dt className="font-mono text-[clamp(28px,2.4vw,34px)] leading-none font-bold tracking-[-0.03em] text-accent-700">
                {value}
              </dt>
              <dd className="mt-2.5 text-sm leading-normal text-ink-2">{text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="min-w-0 md:col-span-2 md:row-start-4">
        <div className={frame}>
          <Image
            src="/images/casos/jumillano-ejecucion.webp"
            alt="Pantalla «Ejecución del día» de El Jumillano: tarjetas de las rutas R251 a R259 con el tipo de equipo, los bultos y los puestos de chofer, ayudante y supervisor; a la derecha, personal disponible, convocados y novedades del día."
            width={1600}
            height={875}
            sizes="(min-width: 1316px) 1118px, 86vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className={caption}>
          Ejecución del día: cada ruta con su chofer, su ayudante y los bultos a repartir.
        </figcaption>
      </figure>

      <figure className="min-w-0 md:col-start-1 md:row-start-2">
        <div className={frame}>
          <Image
            src="/images/casos/jumillano-rrhh.webp"
            alt="Panel de RRHH de El Jumillano: tareas de la semana completadas y contadores de novedades, cambios de horario, horas extra, reincorporaciones, fichadas impares y no conformidades."
            width={1600}
            height={875}
            sizes="(min-width: 1316px) 425px, (min-width: 768px) 33vw, 86vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className={caption}>Panel de RRHH: los pendientes de la semana, por tipo.</figcaption>
      </figure>
    </article>
  );
}

function CaseCard({ id, name, context, slots, shot }: SmallCase) {
  // Entre 768 y 1100 px la tarjeta ocupa toda la fila: texto a la izquierda y
  // captura a la derecha. Sin captura, queda en una sola columna.
  const col = shot ? "md:max-wide:col-start-1" : "";
  return (
    <article
      aria-labelledby={id}
      className={`flex min-w-0 flex-col rounded border border-line bg-white px-[22px] pt-[22px] pb-5 ${shot ? "md:max-wide:grid md:max-wide:grid-cols-2 md:max-wide:content-start md:max-wide:gap-x-7" : ""}`}
    >
      <h4
        id={id}
        className={`font-mono text-lg leading-[1.25] font-bold tracking-[-0.01em] text-ink ${col}`}
      >
        {name}
      </h4>
      <p className={`mt-2 text-sm leading-normal text-ink-3 ${col}`}>{context}</p>
      {slots.map(({ label, figure, text }) => (
        <div key={label} className={`mt-[18px] border-t border-line-soft pt-3 ${col}`}>
          <Label as="span" tone="surface" className="mb-1.5 block text-[11px]">
            {label}
          </Label>
          {figure ? (
            <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[15px] leading-[1.4] font-semibold text-ink">
              <b className="font-mono text-[30px] leading-none font-bold tracking-[-0.03em] text-accent-700">
                {figure}
              </b>
              <span>{text}</span>
            </p>
          ) : (
            <p className="text-[15px] leading-[1.55] text-ink-2">{text}</p>
          )}
        </div>
      ))}
      {shot && (
        <figure className="mt-auto min-w-0 pt-5 md:max-wide:col-start-2 md:max-wide:row-[1/span_8] md:max-wide:mt-0 md:max-wide:pt-0">
          <div className={frame}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1316px) 340px, (min-width: 1101px) 26vw, (min-width: 768px) 42vw, 90vw"
              className="aspect-[16/10] h-auto w-full object-cover object-left-top"
            />
          </div>
          <figcaption className={caption}>{shot.caption}</figcaption>
        </figure>
      )}
    </article>
  );
}

export default function Cases() {
  return (
    <div id="casos" role="region" aria-labelledby="casos-title" className="mt-[clamp(56px,6.4vw,96px)]">
      <Alias id="cases" />
      <div className="mb-[22px] grid grid-cols-1 items-baseline gap-x-12 gap-y-2 rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]">
        <Label as="h3" id="casos-title" tone="surface">
          Casos actuales
        </Label>
        <div>
          <p className="text-base leading-[1.55] text-ink-2">
            Sistemas en funcionamiento hoy, construidos para cada cliente.
          </p>
          <p className="mt-1 text-[13px] leading-normal text-ink-3">
            Capturas reales de sistemas en producción, con los datos personales difuminados.
          </p>
        </div>
      </div>

      <LeadCase />

      <div className="mt-5 grid grid-cols-1 gap-5 wide:grid-cols-3">
        {smallCases.map((c) => (
          <CaseCard key={c.id} {...c} />
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-base leading-[1.55] text-ink-2 max-sm:flex-col max-sm:items-start">
        <p>¿Tenés un caso parecido en tu empresa?</p>
        <ButtonLink href="/contact" variant="navy">
          Contanos tu caso
        </ButtonLink>
      </div>
    </div>
  );
}
