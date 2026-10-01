import type { Metadata } from "next";
import Link from "next/link";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Términos y condiciones | Nautom",
  description:
    "Términos y condiciones de los servicios de Nautom: desarrollo y operación de plataformas de software e integraciones, incluidas las de WhatsApp Business, para negocios.",
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <>
      {/* Header */}
      <section className="py-10 md:py-28 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight text-white">
              Términos y condiciones
            </h1>
            <div className="space-y-4">
              <p className="text-muted text-lg leading-relaxed">
                Las reglas de juego para usar el sitio y los servicios de
                Nautom. Las condiciones comerciales de cada proyecto (alcance,
                precio y plazos) se acuerdan por separado con cada cliente.
              </p>
              <p className="text-sm text-muted">
                Última actualización: 1 de octubre de 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <LegalSection title="1. Quién presta el servicio">
            <p>
              Nautom es un servicio prestado por <strong>Ignacio Ramognino</strong>,
              CUIT 20-39244092-6, Ciudad Autónoma de Buenos Aires, Argentina.
              Contacto: <a href="mailto:nacho@nautom.com">nacho@nautom.com</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Qué hacemos">
            <p>
              Desarrollamos y operamos plataformas de software e integraciones
              para negocios: sistemas de reservas, gestión, cobros,
              automatizaciones, asistentes con inteligencia artificial e
              integraciones con servicios de terceros, como la plataforma de
              WhatsApp Business. En estas integraciones actuamos como
              proveedor de tecnología, enviando mensajes y respondiendo a los
              clientes del negocio en su nombre.
            </p>
          </LegalSection>

          <LegalSection title="3. Responsabilidades del cliente">
            <p>Cada negocio que usa nuestras plataformas se compromete a:</p>
            <ul>
              <li>
                usar su propio número y cuenta de WhatsApp Business, y mantener
                el control sobre ellos;
              </li>
              <li>
                cumplir las Políticas de WhatsApp Business y de WhatsApp
                Commerce, y las condiciones de Meta que correspondan;
              </li>
              <li>
                obtener el consentimiento (opt-in) de sus clientes antes de
                enviarles mensajes por WhatsApp, y respetar los pedidos de baja;
              </li>
              <li>
                contar con una base legal para los datos de sus clientes que
                carga o procesa en la plataforma, y mantener actualizada su
                propia información de contacto;
              </li>
              <li>
                no usar los servicios para enviar spam, contenido ilícito o
                engañoso.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Disponibilidad">
            <p>
              Hacemos nuestro mejor esfuerzo para que las plataformas funcionen
              de forma continua y segura, pero se brindan &ldquo;tal como
              están&rdquo; y no podemos garantizar que estén libres de errores
              o interrupciones, por ejemplo por mantenimiento o por fallas de
              servicios de terceros.
            </p>
          </LegalSection>

          <LegalSection title="5. Servicios de terceros">
            <p>
              Nuestras plataformas se apoyan en servicios de terceros como Meta
              (WhatsApp Business), Mercado Pago, Vercel y Supabase, entre otros.
              Su uso está sujeto a los términos de cada proveedor, y no somos
              responsables por cambios, suspensiones o fallas que dependan de
              ellos.
            </p>
          </LegalSection>

          <LegalSection title="6. Limitación de responsabilidad">
            <p>
              En la medida permitida por la ley, Nautom no responde por daños
              indirectos, lucro cesante o pérdida de datos derivados del uso de
              los servicios, ni por el uso que cada cliente haga de ellos. En
              cualquier caso, nuestra responsabilidad total se limita al monto
              abonado por el cliente por el servicio en los tres meses previos
              al hecho que la origine.
            </p>
          </LegalSection>

          <LegalSection title="7. Datos personales">
            <p>
              El tratamiento de datos personales se rige por nuestra{" "}
              <Link href="/privacidad">Política de privacidad</Link>.
            </p>
          </LegalSection>

          <LegalSection title="8. Cambios">
            <p>
              Podemos actualizar estos términos. La versión vigente es siempre
              la publicada en esta página; si los cambios son relevantes, se
              lo vamos a comunicar a nuestros clientes.
            </p>
          </LegalSection>

          <LegalSection title="9. Ley aplicable y jurisdicción">
            <p>
              Estos términos se rigen por las leyes de la República Argentina.
              Cualquier controversia se someterá a los tribunales ordinarios de
              la Ciudad Autónoma de Buenos Aires.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
