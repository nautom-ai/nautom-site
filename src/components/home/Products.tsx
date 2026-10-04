import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Alias, Label, SectionHead } from "./ui";

// Productos digitales · el camino secundario, después del servicio.
// Tres tarjetas (Locker Company, Nautom Alojamientos, Nautom Gestión) y el
// bloque de WhatsApp Business. Meta revisa este bloque para la verificación de
// Tech Provider: su texto y los links legales van tal cual, y #whatsapp es
// destino del pie.

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`flex-none ${className}`}
    >
      <path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

type Product = {
  id: string;
  name: string;
  by: string;
  domain: string;
  image: { src: string; alt: string; width: number; height: number };
  description: string;
  whatsapp?: string;
};

const products: Product[] = [
  {
    id: "p-loc",
    name: "Locker Company",
    by: "Cliente",
    domain: "the-locker-company.com",
    image: {
      src: "/images/productos/lockers.webp",
      alt: "Sitio de Locker Company: lockers para eventos masivos, con la ilustración de un locker y el aviso del número y el código asignados.",
      width: 1200,
      height: 750,
    },
    description:
      "Locker Company ofrece lockers para eventos masivos. Construimos y operamos su plataforma: venta por QR con Mercado Pago, asignación de cada locker con su código y avisos por WhatsApp. El público escanea y paga sin descargar ninguna app.",
    whatsapp: "Con avisos por WhatsApp Business para el público",
  },
  {
    id: "p-alo",
    name: "Nautom Alojamientos",
    by: "Producto de Nautom",
    domain: "alojamientos.nautom.com",
    image: {
      src: "/images/productos/alojamientos.webp",
      alt: "Inicio de Nautom Alojamientos (versión en inglés): gestión de reservas para alquileres temporarios, con un calendario de reservas ilustrado.",
      width: 1200,
      height: 750,
    },
    description:
      "Gestión de reservas para alquileres temporarios. Panel web y app de iPhone para reservas, calendario, cobros, facturación y limpieza, con el calendario sincronizado con las plataformas de reservas.",
    whatsapp: "Con asistente de WhatsApp Business para huéspedes",
  },
  {
    id: "p-ges",
    name: "Nautom Gestión",
    by: "Producto de Nautom",
    domain: "gestion.nautom.com",
    image: {
      src: "/images/productos/gestion.webp",
      alt: "Dashboard de Nautom Gestión con datos de demo: saldo total, ingresos y egresos del mes, saldos por cuenta y estado de resultados.",
      width: 580,
      height: 363,
    },
    description:
      "Gestión de caja para PyMEs. Saldos por cuenta, flujo de fondos, estado de resultados y conciliación bancaria, en un solo panel.",
  },
];

const waPoints = [
  {
    title: "Tu número, tu cuenta.",
    text: "Cada cliente conecta su propio número de WhatsApp Business. Gracias a la coexistencia, sigue usando la app en el celular como siempre.",
  },
  {
    title: "Avisos operativos.",
    text: "La plataforma envía mensajes de plantilla aprobados: confirmaciones, recordatorios, links personales y novedades de cada reserva o compra.",
  },
  {
    title: "Asistente + tu equipo.",
    text: "Un asistente responde las consultas de tus clientes en nombre de tu negocio y deriva a tu equipo cuando hace falta una persona.",
  },
  {
    title: "Datos solo para el servicio.",
    text: "Los datos se usan únicamente para prestarle el servicio a cada cliente. Nunca se venden ni se usan para publicidad ni para entrenar modelos propios.",
  },
];

const waNow = [
  {
    name: "Locker Company",
    domain: "the-locker-company.com",
    text: "Cada persona que compra un locker recibe por WhatsApp su número de locker, su código y su link personal, y un asistente deriva al staff cuando hace falta.",
  },
  {
    name: "Nautom Alojamientos",
    domain: "alojamientos.nautom.com",
    text: "En nombre de cada alojamiento que usa la plataforma, un asistente responde a los huéspedes, envía cotizaciones y registra reservas desde la cuenta de WhatsApp Business de ese alojamiento. El equipo ve y responde las conversaciones desde el panel o el celular.",
  },
];

function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-ink underline decoration-1 underline-offset-[3px] hover:decoration-2"
    >
      {children}
    </Link>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { id, name, by, domain, image, description, whatsapp } = product;
  return (
    <article
      aria-labelledby={id}
      className="flex min-w-0 flex-col overflow-hidden rounded border border-line bg-white md:max-rail:flex-row"
    >
      <figure className="min-w-0 overflow-hidden border-b border-line bg-white md:max-rail:flex-[0_0_46%] md:max-rail:border-r md:max-rail:border-b-0">
        <div className="flex h-7 items-center gap-2 overflow-hidden border-b border-line bg-surface px-2.5 font-mono text-[11px] whitespace-nowrap text-ink-3">
          <span
            aria-hidden="true"
            className="h-1.5 w-[18px] flex-none bg-[radial-gradient(circle,var(--color-line)_0_2.6px,transparent_3px)] bg-size-[6px_6px] bg-repeat-x"
          />
          {domain}
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1280px) 384px, (min-width: 961px) 30vw, (min-width: 768px) 42vw, 100vw"
          className="block aspect-[16/10] h-auto w-full object-cover object-left-top"
        />
      </figure>
      <div className="flex min-w-0 flex-1 flex-col px-[22px] pt-5 pb-[22px]">
        <h3
          id={id}
          className="font-mono text-[19px] leading-[1.25] font-bold tracking-[-0.01em] text-ink"
        >
          {name}
        </h3>
        <p className="mt-1 font-mono text-[12px] leading-[1.5] text-ink-3">
          {by}{" "}
          <span className="block whitespace-nowrap">{domain}</span>
        </p>
        <p className="mt-3 text-[15px] leading-[1.6] text-ink-2">{description}</p>
        {whatsapp && (
          <p className="mt-auto pt-4">
            <a
              href="#whatsapp"
              className="group flex items-center gap-2.5 border-t border-line-soft pt-3.5 text-sm leading-[1.55] font-medium text-ink no-underline"
            >
              <ChatIcon className="text-accent-700" />
              <span className="underline decoration-1 underline-offset-4 group-hover:decoration-2">
                {whatsapp}
              </span>
            </a>
          </p>
        )}
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="productos"
      aria-labelledby="prod-title"
      className="on-light bg-paper py-sec text-ink"
    >
      <Alias id="products" />
      <div className="wrap">
        <SectionHead
          tone="paper"
          label="Productos digitales"
          titleId="prod-title"
          titleClassName="text-h2-sm max-w-[30ch]"
          title={
            <>
              ¿Querés lanzar un producto digital? También&nbsp;lo construimos y&nbsp;lo operamos.
            </>
          }
          lead="Diseñamos, construimos y operamos plataformas completas, con web, app, cobros y avisos por WhatsApp. Lo hacemos para clientes, como Locker Company, y en productos propios."
        />

        <div className="mt-[clamp(32px,3.6vw,48px)] grid grid-cols-1 gap-6 rail:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div
          id="whatsapp"
          role="region"
          aria-labelledby="wa-title"
          className="mt-[clamp(32px,4vw,48px)] grid grid-cols-1 gap-x-[clamp(32px,4.4vw,64px)] gap-y-8 rounded border border-line bg-white p-[clamp(22px,3.2vw,44px)] [grid-template-areas:'head'_'now'_'points'_'data'] rail:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] rail:[grid-template-areas:'head_points'_'now_now'_'data_data']"
        >
          <div className="min-w-0 [grid-area:head]">
            <p className="flex items-center gap-2.5 text-accent-700">
              <ChatIcon />
              <Label as="span" tone="surface" copper>
                WhatsApp Business
              </Label>
            </p>
            <h3
              id="wa-title"
              className="mt-3.5 max-w-[26ch] font-mono text-[clamp(21px,1.9vw,25px)] leading-[1.22] font-bold tracking-[-0.015em] text-ink"
            >
              WhatsApp Business, dentro de los productos que operamos.
            </h3>
            <p className="mt-3.5 text-base leading-[1.6] text-ink-2">
              Nautom actúa como proveedor de tecnología: construimos y operamos la integración con
              la plataforma de WhatsApp Business en nombre de cada negocio, dentro de los productos
              que desarrollamos para ellos.
            </p>
          </div>

          <ul className="grid grid-cols-2 content-start gap-x-8 gap-y-7 [grid-area:points] max-sm:grid-cols-1 max-sm:gap-y-5">
            {waPoints.map(({ title, text }) => (
              <li key={title} className="min-w-0 border-t border-line pt-3.5">
                <h4 className="text-base leading-[1.55] font-semibold tracking-[-0.005em] text-ink">
                  {title}
                </h4>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-2">{text}</p>
              </li>
            ))}
          </ul>

          <div className="grid min-w-0 grid-cols-1 gap-x-[clamp(32px,4.4vw,64px)] gap-y-4 border-t border-line pt-[22px] [grid-area:now] rail:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <p className="max-w-[24ch] font-mono text-[17px] leading-[1.35] font-bold tracking-[-0.01em] text-ink">
              Lo integramos en Locker Company y Nautom Alojamientos.
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 max-sm:grid-cols-1">
              {waNow.map(({ name, domain, text }) => (
                <li key={name} className="min-w-0 text-[14.5px] leading-[1.55] text-ink-2">
                  <b className="mb-1 block font-mono text-[13px] font-bold text-accent-700">
                    {name}{" "}
                    <span className="block font-normal whitespace-nowrap text-[12px] text-ink-3">
                      {domain}
                    </span>
                  </b>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <p className="min-w-0 border-t border-line pt-[18px] text-sm leading-[1.6] text-ink-2 [grid-area:data]">
            <b className="font-semibold text-ink">Qué datos tratamos.</b> El número de teléfono y el
            nombre de perfil de quien escribe o recibe mensajes, el contenido de los mensajes y su
            estado (enviado, entregado, leído o fallido). Cada negocio es responsable de los datos de
            sus clientes y nosotros los tratamos por su cuenta. Más detalle en la{" "}
            <LegalLink href="/privacidad">Política de privacidad</LegalLink>, cómo pedir la{" "}
            <LegalLink href="/privacidad#eliminacion">eliminación de datos</LegalLink> y los{" "}
            <LegalLink href="/terminos">Términos y condiciones</LegalLink>.
          </p>
        </div>
      </div>
    </section>
  );
}
