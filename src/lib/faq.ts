export interface FAQItem {
  q: string;
  a: string;
}

// Fuente única: la home renderiza el acordeón y el JSON-LD FAQPage desde acá.
export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "¿Nautom vende un software o un servicio?",
    a: "Un servicio. Nos metemos en la operación de tu empresa, construimos los sistemas, agentes y automatizaciones que necesita y nos quedamos a seguir mejorándolos. También operamos algunas plataformas propias, como Nautom Alojamientos, pero el centro de nuestro trabajo es el servicio.",
  },
  {
    q: "¿Con qué empresas trabajan?",
    a: "Con empresas argentinas de 50 a 600 personas, con la operación en marcha, que necesitan tecnología para crecer sin multiplicar el trabajo manual.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Un agente de IA o una automatización básica, de 1 a 2 semanas. Una aplicación interna completa, de 4 a 8 semanas. Después seguimos mejorándola con tu equipo.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del alcance. Lo vemos en la charla, una vez que entendamos cómo funciona tu operación y qué conviene resolver primero.",
  },
  {
    q: "¿Tengo que cambiar las herramientas que ya uso?",
    a: "No necesariamente. Construimos sobre lo que tu equipo ya usa y conectamos las herramientas entre sí. Si conviene reemplazar algo, lo planificamos con vos para que la operación no se frene.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Seguimos. Vemos cómo funciona, lo ajustamos con tu equipo y vamos por lo siguiente. Lo que aprendemos de tu operación queda escrito, así cada mejora parte de lo que ya está construido.",
  },
  {
    q: "¿Qué es un agente de IA?",
    a: "Un programa que lee información, la analiza y resuelve una tarea concreta. Por ejemplo, uno que lee el PDF de un proveedor y arma la cotización para que una persona la revise.",
  },
  {
    q: "¿Cómo usan WhatsApp Business?",
    a: "Construimos y operamos la integración con la plataforma de WhatsApp Business en nombre de cada negocio, dentro de los productos que desarrollamos para ellos. Cada cliente conecta su propio número, envía avisos con plantillas aprobadas y tiene un asistente que responde y deriva a su equipo cuando hace falta una persona. Lo integramos en Locker Company y Nautom Alojamientos.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Claude Code, Next.js, Supabase, Vercel y Python, entre otras. Elegimos según el problema y lo que tu equipo ya usa.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};
