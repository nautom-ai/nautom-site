import { LINKEDIN_URL, SITE_URL } from "@/lib/site";
import { SERVICES } from "@/lib/services";

// /llms.txt (formato de llmstxt.org): resumen en Markdown del sitio para modelos de
// lenguaje. Resume la home y /about: si cambia el copy de qué hace Nautom o de los
// casos, revisalo en el mismo commit. La FAQ no se copia acá: se enlaza.
export const dynamic = "force-static";

const services = SERVICES.map(({ title, text }) => `- **${title}.** ${text}`).join("\n");

const body = `# Nautom

> Nautom es un estudio de servicios de IA para empresas argentinas de 50 a 600 personas. Construye sistemas de gestión a medida, agentes de IA y automatizaciones que le sacan trabajo manual a la operación, conectados a lo que el equipo ya usa, y se queda a seguir mejorándolos.

Nació en 2023 en Buenos Aires. Lo fundaron Juan Gómez Naar e Ignacio Ramognino. Como camino secundario, diseña, construye y opera productos digitales con web, app, cobros y avisos por WhatsApp Business, para clientes como Locker Company y en productos propios como Nautom Alojamientos y Nautom Gestión.

## Qué incluye el servicio

${services}

## Casos

- [El Jumillano](${SITE_URL}/casos#c-jum): distribuidor #1 de Agua IVESS, con casi 600 personas y 4 sociedades. La operación que atiende a sus 158.000 clientes activos corre sobre el sistema que construyó Nautom: unos 190 repartos diarios y 7 áreas conectadas, con liquidaciones del personal, distribución diaria, personal y asistencia, atención, calidad y ventas, integrado a unos 10 sistemas. Cada mañana cruza repartos y fichadas para dejar las diferencias listas para revisar.
- [Impacto Positivo · Impacto+](${SITE_URL}/casos#c-imp): más de 2.000 servicios activos y cero intervención manual en la facturación mensual.
- [Altis Viajes](${SITE_URL}/casos#c-alt): sistema de gestión de la agencia, con cotizaciones que el cliente acepta online e IA que extrae los datos de facturas, itinerarios y liquidaciones de operadores.
- [Peerforum · Pulse](${SITE_URL}/casos#c-pul): sistema de gestión y monitoreo de los foros, la asistencia y las acciones de retención, con segmentación de miembros por compromiso y riesgo de baja.

## Páginas

- [Inicio](${SITE_URL}/): ejemplos de distribución, facturación y cotizaciones con capturas reales, el caso de El Jumillano, cómo trabajamos, servicios, productos y preguntas frecuentes.
- [Casos](${SITE_URL}/casos): el detalle de los sistemas que construimos y capturas reales.
- [Productos](${SITE_URL}/productos): Locker Company, Nautom Alojamientos y Nautom Gestión.
- [WhatsApp Business](${SITE_URL}/productos#whatsapp): cómo operamos las integraciones en nombre de cada negocio.
- [Preguntas frecuentes](${SITE_URL}/#preguntas): plazos, costos, herramientas y qué pasa después de la entrega.
- [Nosotros](${SITE_URL}/about): quiénes somos, cómo trabajamos y qué nos define.
- [Contacto](${SITE_URL}/contact): formulario para contar un caso.

## Optional

- [Nautom en LinkedIn](${LINKEDIN_URL})
- [Política de privacidad](${SITE_URL}/privacidad)
- [Términos y condiciones](${SITE_URL}/terminos)
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
