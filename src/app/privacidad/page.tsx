import type { Metadata } from "next";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Política de privacidad | Nautom",
  description:
    "Cómo Nautom trata los datos personales del sitio y de las plataformas que opera para sus clientes, incluidas las integraciones con WhatsApp Business. Derechos y eliminación de datos.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      {/* Header */}
      <section className="py-10 md:py-28 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight text-white">
              Política de privacidad
            </h1>
            <div className="space-y-4">
              <p className="text-muted text-lg leading-relaxed">
                Te contamos qué datos tratamos, para qué los usamos, con quién
                los compartimos y cómo podés ejercer tus derechos, incluida la
                eliminación de tus datos.
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
          <LegalSection title="1. Quién es el responsable">
            <p>
              Nautom es un servicio prestado por <strong>Ignacio Ramognino</strong>,
              CUIT 20-39244092-6, con domicilio en la Ciudad Autónoma de Buenos
              Aires, Argentina. Para cualquier consulta sobre privacidad podés
              escribirnos a{" "}
              <a href="mailto:nacho@nautom.com">nacho@nautom.com</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Datos del sitio nautom.com">
            <p>
              Cuando completás el formulario de contacto recibimos tu nombre,
              email y mensaje y, si los cargás, tu teléfono y empresa. Los
              usamos solo para responderte y, si corresponde, avanzar con una
              propuesta. El envío se procesa a través de nuestro proveedor de
              email (Resend).
            </p>
            <p>
              También usamos métricas de uso y rendimiento agregadas y anónimas
              (Vercel Analytics y Speed Insights), que no utilizan cookies de
              publicidad ni nos permiten identificarte.
            </p>
          </LegalSection>

          <LegalSection title="3. Plataformas que operamos para nuestros clientes">
            <p>
              Nautom desarrolla y opera plataformas de software para otros
              negocios (por ejemplo, alojamientos temporarios o guardarropas
              para eventos). En ese caso, <strong>cada negocio cliente es el
              responsable</strong> de los datos de sus propios clientes, y
              Nautom actúa como <strong>encargado del tratamiento</strong>:
              tratamos esos datos únicamente por cuenta del cliente, siguiendo
              sus instrucciones y para prestarle el servicio contratado.
            </p>
            <p>
              Según la plataforma, esto puede incluir datos de reservas o
              compras, nombre, email, teléfono y estado de pagos.
            </p>
          </LegalSection>

          <LegalSection title="4. Datos de WhatsApp Business">
            <p>
              Cuando un cliente conecta su número de WhatsApp Business a una
              plataforma de Nautom, a través de la plataforma de WhatsApp
              Business de Meta tratamos:
            </p>
            <ul>
              <li>números de teléfono y nombres de perfil de quienes escriben o reciben mensajes;</li>
              <li>el contenido de los mensajes enviados y recibidos;</li>
              <li>el estado de cada mensaje (enviado, entregado, leído o fallido).</li>
            </ul>
            <p>
              Estos datos se usan <strong>solo para prestarle el servicio a ese
              cliente</strong>: enviar avisos operativos, responder consultas
              con un asistente y derivar las conversaciones a su equipo. No
              vendemos estos datos, no los compartimos con otros clientes y no
              los usamos para publicidad ni para entrenar modelos propios.
            </p>
          </LegalSection>

          <LegalSection title="5. Dónde se almacenan y con quién se comparten">
            <p>
              Trabajamos con proveedores de infraestructura que procesan datos
              por nuestra cuenta: <strong>Vercel</strong> (hosting),{" "}
              <strong>Supabase</strong> (base de datos), <strong>Meta</strong>{" "}
              (plataforma de WhatsApp Business) y, según el servicio, proveedores
              de email o de pagos como Mercado Pago. Algunos de ellos pueden
              almacenar datos fuera de Argentina, con medidas de seguridad
              adecuadas.
            </p>
            <p>
              No compartimos datos con terceros salvo con estos proveedores,
              con el negocio cliente correspondiente, o cuando lo exija la ley
              o una autoridad competente.
            </p>
          </LegalSection>

          <LegalSection title="6. Cuánto tiempo los conservamos">
            <p>
              Conservamos los datos mientras sean necesarios para la finalidad
              para la que se recolectaron. Los datos de las plataformas de
              clientes se conservan mientras dure el servicio con ese cliente
              o hasta que el cliente pida su eliminación; al finalizar,
              se eliminan o anonimizan, salvo que una obligación legal exija
              conservarlos por más tiempo. Las consultas del formulario de
              contacto se conservan mientras haya una relación comercial o
              conversación en curso.
            </p>
          </LegalSection>

          <LegalSection title="7. Seguridad">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para
              proteger los datos: conexiones cifradas (HTTPS), control de
              acceso por cliente y acceso restringido a las personas que lo
              necesitan para operar el servicio.
            </p>
          </LegalSection>

          <LegalSection title="8. Tus derechos">
            <p>
              De acuerdo con la Ley 25.326 de Protección de Datos Personales,
              podés solicitar el <strong>acceso</strong>, la{" "}
              <strong>rectificación</strong>, la actualización y la{" "}
              <strong>supresión</strong> de tus datos escribiendo a{" "}
              <a href="mailto:nacho@nautom.com">nacho@nautom.com</a>. Si sos
              cliente de uno de los negocios que usan nuestras plataformas,
              también podés dirigirte directamente a ese negocio.
            </p>
            <p>
              El titular de los datos personales tiene la facultad de ejercer
              el derecho de acceso a los mismos en forma gratuita a intervalos
              no inferiores a seis meses, salvo que se acredite un interés
              legítimo al efecto conforme lo establecido en el artículo 14,
              inciso 3 de la Ley N° 25.326.
            </p>
            <p>
              La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de
              Órgano de Control de la Ley N° 25.326, tiene la atribución de
              atender las denuncias y reclamos que interpongan quienes
              resulten afectados en sus derechos por incumplimiento de las
              normas vigentes en materia de protección de datos personales.
            </p>
          </LegalSection>

          <LegalSection id="eliminacion" title="9. Cómo pedir la eliminación de tus datos">
            <p>Para pedir que eliminemos tus datos:</p>
            <ul>
              <li>
                Escribí a{" "}
                <a href="mailto:nacho@nautom.com?subject=Eliminaci%C3%B3n%20de%20datos">
                  nacho@nautom.com
                </a>{" "}
                con el asunto <strong>&ldquo;Eliminación de datos&rdquo;</strong>.
              </li>
              <li>
                Indicá tu nombre, el número de teléfono o email con el que
                interactuaste y, si corresponde, el negocio o servicio
                (por ejemplo, el alojamiento o el evento).
              </li>
              <li>
                Si sos cliente de un negocio que usa nuestras plataformas,
                también podés pedírselo directamente a ese negocio, que nos
                trasladará el pedido.
              </li>
            </ul>
            <p>
              Te confirmamos la recepción y eliminamos los datos dentro de los
              5 días hábiles, salvo aquellos que debamos conservar por una
              obligación legal. Las copias de respaldo se eliminan en su ciclo
              normal de rotación, dentro de los 30 días siguientes. Los
              mensajes que ya estén en tu propio teléfono o en la cuenta de
              WhatsApp del negocio no se ven afectados por este pedido.
            </p>
          </LegalSection>

          <LegalSection title="10. Cambios en esta política">
            <p>
              Podemos actualizar esta política. Vas a encontrar siempre la
              versión vigente en esta página, con la fecha de su última
              actualización.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
