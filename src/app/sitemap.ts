import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// lastModified es la fecha del último cambio de contenido de cada página: actualizala
// en el mismo commit que lo cambia. Google y Bing sólo lo usan si es preciso, así que
// no va new Date() (cambiaría en cada build).

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/casos`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/productos`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
