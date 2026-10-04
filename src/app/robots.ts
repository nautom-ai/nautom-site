import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Abierto a todos: buscadores (Googlebot, Bingbot), los bots de búsqueda y de
// pedidos de usuarios de los asistentes de IA (OAI-SearchBot, ChatGPT-User,
// Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User) y también los de
// entrenamiento (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot), para
// que los modelos conozcan Nautom aunque no busquen. Cerrar uno de búsqueda saca
// al sitio de las respuestas con cita de ese asistente.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
