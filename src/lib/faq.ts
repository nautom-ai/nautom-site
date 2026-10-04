export interface FAQItem {
  q: string;
  a: string;
}

// Fuente única: la home renderiza el acordeón y el JSON-LD FAQPage desde acá.
export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "¿Qué es un agente de IA y cómo puede ayudar a mi empresa?",
    a: "Un agente de IA es un sistema inteligente que monitorea datos, toma decisiones y ejecuta tareas de forma autónoma. Por ejemplo, podemos crear un agente que detecte anomalías en la asistencia de tu equipo, genere reportes automáticos o procese facturas sin intervención manual.",
  },
  {
    q: "¿Cuánto cuesta automatizar procesos en una PyME?",
    a: "Depende del alcance, pero trabajamos con modelos de fee mensual fijo que se adaptan al tamaño de tu operación. Nuestro foco es que el retorno de inversión sea claro desde el primer mes — automatizar una tarea que consume 1 hora diaria puede representar un ahorro de más de 20 horas mensuales.",
  },
  {
    q: "¿Trabajan solo con empresas grandes?",
    a: "No. Nos especializamos en PyMEs argentinas de entre 50 y 600 empleados. Empresas que ya tienen operaciones establecidas pero necesitan tecnología para escalar sin multiplicar costos.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Trabajamos con un stack moderno y AI-first: Claude Code, Next.js, Supabase, Vercel, Tailwind, GitHub y más. Elegimos la herramienta correcta para cada problema, priorizando siempre soluciones potenciadas por IA.",
  },
  {
    q: "¿Cuánto tiempo toma implementar una solución?",
    a: "Un agente de IA o una automatización básica puede estar funcionando en 1-2 semanas. Proyectos más complejos como aplicaciones internas completas pueden tomar 4-8 semanas. Nuestro approach AI-first nos permite entregar mucho más rápido que el desarrollo tradicional.",
  },
  {
    q: "¿Qué diferencia a Nautom de una software factory tradicional?",
    a: "Somos un estudio boutique, no una fábrica. Construimos productos propios y proyectos a medida con un equipo chico y dedicado. Usamos IA no solo como producto sino como herramienta de desarrollo — lo que nos permite entregar más rápido, con menos costo y más inteligencia incorporada en cada solución.",
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
