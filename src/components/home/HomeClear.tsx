import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import ExampleTabs from "./ExampleTabs";
import ProductIndex from "./ProductIndex";
import Faq from "./Faq";
import { Alias } from "./ui";
import styles from "./HomeClear.module.css";

export default function HomeClear() {
  return (
    <div className={`${styles.home} on-light`}>

      <section className={styles["hero"]} id="inicio" aria-labelledby="hero-title">
        <div className={[styles["container"], styles["hero-copy"]].join(" ")}>
          <p className={styles["eyebrow"]}><span className={styles["dot"]} aria-hidden="true"></span> Sistemas a medida + inteligencia artificial</p>
          <h1 id="hero-title">Menos planillas.<br /><span>Más empresa.</span></h1>
          <p className={styles["hero-lead"]}>Construimos sistemas y agentes de IA que le sacan<br className={styles["desktop-break"]} /> trabajo manual a tu operación. Y los mejoramos con vos.</p>
          <div className={styles["hero-actions"]}>
            <Link className={styles["button"]} href="/contact">Contanos tu caso <span aria-hidden="true">↗</span></Link>
            <a className={styles["text-link"]} href="#casos">Mirá lo que construimos <span aria-hidden="true">↓</span></a>
          </div>
          <p className={styles["audience"]}>Para empresas argentinas de 50 a 600 personas.</p>
        </div>

        <div className={[styles["container"], styles["showcase"]].join(" ")} id="casos">
          <Alias id="cases" />
          <div className={styles["showcase-topline"]}>
            <p className={styles["eyebrow"]}>Así se ve en la práctica</p>
            <p className={styles["capture-label"]}><span aria-hidden="true">↳</span> Sistemas reales. Hechos para cada empresa.</p>
          </div>
          <ExampleTabs items={[
            { id: "distribucion", label: "Distribución", content: (<>
              <div className={styles["showcase-story"]}>
                <p className={styles["client-label"]}>El Jumillano · IVESS</p>
                <h2>El reparto de hoy.<br />Todo en un lugar.</h2>
                <p>Rutas, choferes, ayudantes y novedades del día. La operación conectada, sin saltar de planilla en planilla.</p>
                <div className={styles["story-proof"]}><b>190</b><span>repartos diarios,<br />aproximadamente</span></div>
                <a className={styles["text-link"]} href="#caso">Conocé el caso <span aria-hidden="true">↗</span></a>
              </div>
              <figure className={styles["showcase-figure"]}>
                <div className={styles["screen-top"]}><span className={styles["screen-dot"]} aria-hidden="true"></span> Ejecución del día <span className={styles["screen-label"]}>Captura real</span></div>
                <a className={styles["screen-link"]} href="/images/casos/jumillano-ejecucion.webp" target="_blank" rel="noopener" aria-label="Ampliar captura de distribución de El Jumillano (abre otra pestaña)"><Image src="/images/casos/jumillano-ejecucion.webp" preload width={1600} sizes="(max-width: 760px) 530px, (min-width: 1000px) 760px, 60vw" height="875" alt="Sistema de El Jumillano: rutas del día con choferes, ayudantes, bultos y personal disponible. Datos personales difuminados." /></a>
                <figcaption>El sistema que usa el equipo para coordinar cada reparto. <a href="/images/casos/jumillano-ejecucion.webp" target="_blank" rel="noopener">Ampliar captura ↗</a></figcaption>
              </figure>
            </>) },
            { id: "facturacion", label: "Facturación", content: (<>
              <div className={styles["showcase-story"]}>
                <p className={styles["client-label"]}>Impacto Positivo · Impacto+</p>
                <h2>La facturación.<br />Sin la carga manual.</h2>
                <p>Un motor financiero que conecta cobranza y facturación, con clientes, servicios y pendientes en el mismo sistema.</p>
                <div className={styles["story-proof"]}><b>0</b><span>intervención manual en<br />la facturación mensual</span></div>
                <Link className={styles["text-link"]} href="/casos#c-imp">Conocé el caso <span aria-hidden="true">↗</span></Link>
              </div>
              <figure className={styles["showcase-figure"]}>
                <div className={styles["screen-top"]}><span className={styles["screen-dot"]} aria-hidden="true"></span> Tablero de servicios <span className={styles["screen-label"]}>Captura real</span></div>
                <a className={styles["screen-link"]} href="/images/casos/impacto-dashboard.webp" target="_blank" rel="noopener" aria-label="Ampliar captura de Impacto Positivo (abre otra pestaña)"><Image src="/images/casos/impacto-dashboard.webp" width={1600} sizes="(max-width: 760px) 530px, (min-width: 1000px) 760px, 60vw" height="875" alt="Tablero de Impacto+: servicios activos, altas y bajas mes a mes." /></a>
                <figcaption>Una vista de los más de 2.000 servicios activos. <a href="/images/casos/impacto-dashboard.webp" target="_blank" rel="noopener">Ampliar captura ↗</a></figcaption>
              </figure>
            </>) },
            { id: "cotizaciones", label: "Cotizaciones", content: (<>
              <div className={styles["showcase-story"]}>
                <p className={styles["client-label"]}>Altis Viajes</p>
                <h2>De la cotización<br />al próximo viaje.</h2>
                <p>Files, saldos y propuestas en un solo sistema. La IA extrae datos de facturas, itinerarios y liquidaciones de operadores.</p>
                <div className={[styles["story-proof"], styles["proof-text"]].join(" ")}><b>Un link.</b><span>El cliente ve y acepta<br />su propuesta online.</span></div>
                <Link className={styles["text-link"]} href="/casos#c-alt">Conocé el caso <span aria-hidden="true">↗</span></Link>
              </div>
              <figure className={styles["showcase-figure"]}>
                <div className={styles["screen-top"]}><span className={styles["screen-dot"]} aria-hidden="true"></span> Panorama de la agencia <span className={styles["screen-label"]}>Captura real</span></div>
                <a className={styles["screen-link"]} href="/images/casos/altis-panorama.webp" target="_blank" rel="noopener" aria-label="Ampliar captura de Altis Viajes (abre otra pestaña)"><Image src="/images/casos/altis-panorama.webp" width={1600} sizes="(max-width: 760px) 530px, (min-width: 1000px) 760px, 60vw" height="913" alt="Sistema de Altis Viajes: files abiertos, viajes de los próximos 30 días y movimiento comercial. Datos personales difuminados." /></a>
                <figcaption>El panorama de la agencia y los files en operación. <a href="/images/casos/altis-panorama.webp" target="_blank" rel="noopener">Ampliar captura ↗</a></figcaption>
              </figure>
            </>) }
          ]} />
          <p className={styles["showcase-note"]}>Cada pantalla pertenece a una solución a medida. Las capturas tienen los datos personales difuminados.</p>
        </div>
      </section>

      <section className={[styles["clients"], styles["container"]].join(" ")} aria-label="Clientes de Nautom">
        <p>Ya trabajamos juntos</p>
        <ul>
          <li><Image src="/images/logos/ivess-logo-footer.svg" width="76" height="40" alt="El Jumillano · IVESS" /></li>
          <li><Image src="/images/logos/Impacto%20Positivo_IsoLogotipo-02.png" width="112" height="43" alt="Impacto Positivo" /></li>
          <li><Image src="/images/logos/peerforum.png" width="108" height="24" alt="Peerforum" /></li>
          <li><Image src="/images/logos/integra.png" width="67" height="44" alt="Integra Groupe" /></li>
        </ul>
      </section>

      <section className={styles["case-section"]} id="caso" aria-labelledby="case-title">
        <div className={styles["container"]}>
          <div className={styles["case-heading"]}>
            <div><p className={styles["eyebrow"]}><span className={styles["dot"]} aria-hidden="true"></span> Un caso, de cerca</p><h2 id="case-title">Una operación grande.<br /><span>Un sistema propio.</span></h2></div>
            <p className={styles["case-heading-note"]}>El Jumillano · IVESS<br /><span>Distribución de agua · Argentina</span></p>
          </div>

          <div className={styles["case-intro"]}>
            <p className={styles["case-statement"]}>Siete áreas trabajando<br />sobre la misma información.</p>
            <p>Reemplazamos las planillas y la aplicación anterior por una plataforma donde trabajan Comercial, Atención al cliente, RRHH, Taller y Planta, Calidad, Ventas a empresas y Gerencia.</p>
          </div>

          <dl className={styles["case-numbers"]}>
            <div><dt>158.000</dt><dd>clientes activos atendidos<br />por la operación</dd></div>
            <div><dt>≈190</dt><dd>repartos coordinados<br />cada día</dd></div>
            <div><dt>7</dt><dd>áreas conectadas<br />en una plataforma</dd></div>
            <div><dt>≈10</dt><dd>sistemas integrados<br />a la operación</dd></div>
          </dl>

          <div className={styles["case-detail"]}>
            <div className="min-w-0">
              <p className={styles["eyebrow"]}>Lo que cambia en el día a día</p>
              <h3>La información llega.<br />El equipo decide.</h3>
              <ul className={styles["outcomes"]}>
                <li><span aria-hidden="true">01</span><div><h4>Distribución y personal, conectados.</h4><p>Cada mañana, el sistema cruza los repartos con las fichadas y deja las diferencias listas para revisar.</p></div></li>
                <li><span aria-hidden="true">02</span><div><h4>Liquidaciones con controles.</h4><p>Comisiones y feriados, sociedad por sociedad. Si falta información, queda pendiente hasta completarla.</p></div></li>
                <li><span aria-hidden="true">03</span><div><h4>Las herramientas que ya usan.</h4><p>ERP, app de calle, reloj de fichadas y sueldos conectados. El padrón de clientes se actualiza todos los días.</p></div></li>
              </ul>
            </div>
            <figure className={styles["case-screen"]}>
              <div className={styles["case-screen-heading"]}><span>EL JUMILLANO</span><span>Personal + asistencia</span></div>
              <a href="/images/casos/jumillano-rrhh.webp" target="_blank" rel="noopener" aria-label="Ampliar panel real de RRHH de El Jumillano (abre otra pestaña)"><Image src="/images/casos/jumillano-rrhh.webp" width={1600} sizes="(max-width: 760px) 530px, (min-width: 1000px) 760px, 60vw" height="875" loading="lazy" alt="Panel real de RRHH de El Jumillano: tareas semanales, novedades, horas extra y fichadas pendientes de revisión." /></a>
              <figcaption>Los pendientes de la semana, visibles por tipo.<br />Captura real del sistema en uso. <span aria-hidden="true">↗</span></figcaption>
            </figure>
          </div>

          <div className={styles["case-bottom"]}><p>Un sistema que sigue creciendo con la operación.</p><Link className={styles["text-link"]} href="/casos#c-jum">Ver el caso completo <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className={[styles["method"], styles["container"]].join(" ")} id="como-trabajamos" aria-labelledby="method-title">
        <Alias id="how" /><Alias id="forma" />
        <div><p className={styles["eyebrow"]}>Cómo trabajamos</p><h2 id="method-title">Empezamos por<br />entender tu operación.</h2><p className={styles["method-lead"]}>Somos Juan y Nacho. Nos involucramos de principio a fin, con tu equipo y cerca del trabajo real.</p><Link className={styles["text-link"]} href="/about">Conocé al equipo <span aria-hidden="true">↗</span></Link></div>
        <div className={styles["connection"]} role="img" aria-label="Conectamos tus herramientas y documentos con sistemas a medida e inteligencia artificial, para que tu equipo tenga información lista para decidir.">
          <p className={styles["connection-label"]}>Conectado a tu forma de trabajar</p>
          <div className={styles["connection-map"]} aria-hidden="true">
            <div className={styles["connection-inputs"]}><span>Tu ERP</span><span>Tus planillas</span><span>Tus documentos</span></div>
            <svg className={styles["connection-lines"]} viewBox="0 0 120 150" fill="none"><path d="M0 20H30Q55 20 55 45V60Q55 75 75 75H120M0 75H120M0 130H30Q55 130 55 105V90Q55 75 75 75H120"/><circle cx="92" cy="75" r="3"/></svg>
            <div className={styles["connection-center"]}><Image src="/isotipo-navy-copper.svg" width="36" height="36" alt="" /><span>Sistemas + IA</span></div>
            <span className={styles["connection-exit"]}>→</span>
            <div className={styles["connection-team"]}><span className={styles["team-icon"]}>↗</span><b>Tu equipo</b><span>Información lista<br />para decidir.</span></div>
          </div>
          <p className={styles["connection-foot"]}>Construido para tu empresa. Mejorado con tu equipo.</p>
        </div>
        <ol className={styles["method-steps"]}>
          <li><span>01</span><div><h3>Elegimos por dónde empezar.</h3><p>Entendemos qué tareas consumen tiempo y dónde un cambio puede hacer una diferencia.</p></div></li>
          <li><span>02</span><div><h3>Lo construimos con vos.</h3><p>Sistemas a medida, agentes de IA y automatizaciones conectados a tu forma de trabajar.</p></div></li>
          <li><span>03</span><div><h3>Nos quedamos para mejorarlo.</h3><p>El equipo lo usa, aparecen nuevas necesidades y el sistema sigue evolucionando.</p></div></li>
        </ol>

        <div id="que-hacemos" className={styles.services}>
          <h3 className={styles.eyebrow}>Qué construimos para tu operación</h3>
          <ul>{SERVICES.map(({ title, text }) => (
            <li key={title}><h4>{title}</h4><p>{text}</p></li>
          ))}</ul>
        </div>
      </section>

      <ProductIndex />
      <Faq />

      <section id="equipo" className={styles["closing"]} aria-labelledby="closing-title">
        <Alias id="about" /><div className={[styles["container"], styles["closing-inner"]].join(" ")}><Image src="/isotipo-white-copper.svg" alt="" width="68" height="68" /><p className={styles["eyebrow"]}>Empecemos por una conversación</p><h2 id="closing-title">¿Qué le está sacando<br />tiempo a tu equipo?</h2><p>Contanos cómo trabajan hoy.<br />Vemos juntos por dónde conviene empezar.</p><Link className={styles["button"]} href="/contact">Contanos tu caso <span aria-hidden="true">↗</span></Link></div>
      </section>
    </div>
  );
}
