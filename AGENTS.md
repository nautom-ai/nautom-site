# AGENTS.md — nautom-site

Landing pública de Nautom: `www.nautom.com`. Next.js (App Router) + Tailwind 4 + framer-motion, sin base de datos. Este archivo es la única entrada para agentes (Claude Code, Codex, Cursor): no crees un `CLAUDE.md` ni un `CLAUDE.local.md`, porque Claude Code deja de cargar este archivo si existe alguno.

## 1 · Mergear es publicar

- Vercel (team `nautom`, proyecto `nautom-site`) publica cada merge a `main` en producción; `nautom.com` redirige a `www.nautom.com`. Cada PR tiene su preview: ahí se mira antes de mergear.
- Trabajá en una rama por tarea desde `origin/main` recién fetcheado y abrí PR contra `main`. Nunca hagas push directo a `main` ni `gh pr merge`: el merge lo decide Juancho.
- Commits en Conventional Commits (`feat(productos): …`, `fix: …`). Un hallazgo fuera de alcance va en el cuerpo del PR, no en el diff.

## 2 · Lo que no se infiere del código

- **Verificación de Meta (Tech Provider, PR #18).** Meta revisa por URL `/privacidad`, el ancla `/privacidad#eliminacion`, `/terminos` y los datos del prestador en el pie (`src/components/Footer.tsx`). No los renombres, muevas ni borres, y no cambies su contenido legal sin pedido explícito de Juancho.
- **Datos estructurados:** Google pide que el JSON-LD coincida con lo visible. La FAQ tiene una sola fuente, `src/lib/faq.ts`: de ahí salen el acordeón y el JSON-LD `FAQPage`, que va sólo en la home; no copies su texto a otro lado. El JSON-LD del sitio (`Organization`, `WebSite` y los cofundadores) está en `src/app/layout.tsx` y se mantiene a mano; sus `Service` salen de `src/lib/services.ts`, la misma fuente que «Qué hacemos». `/llms.txt` (`src/app/llms.txt/route.ts`) resume la home y los casos. Si cambia el copy de qué hace Nautom o de los casos, revisá ambos en el mismo commit.
- **Bots:** `src/app/robots.ts` deja pasar a todos, incluidos los bots de búsqueda y de entrenamiento de los asistentes de IA. Cerrar uno es decisión de Juancho: si es de búsqueda, saca al sitio de las respuestas con cita de ese asistente.
- **Sitemap:** el `lastModified` de cada página es la fecha de su último cambio de contenido; actualizalo en el mismo commit.
- **Dominio canónico:** `www.nautom.com`, en `SITE_URL` de `src/lib/site.ts`. No escribas el dominio a mano en metadata, sitemap ni JSON-LD.
- **Formulario de contacto:** `src/app/api/contact/route.ts` manda por Resend desde `contact@nautom.com` a `juan@nautom.com`. Con la clave real, cada envío de prueba le llega a Juancho: no envíes el formulario sin pedido.
- **Marca:** colores y tipografías salen del brand book como tokens en `@theme` de `src/app/globals.css` (Navy Deep `#0C1B33`, Warm Copper `#D4804A`, Space Mono para títulos, Inter para texto). Usá las clases de esos tokens (`bg-background`, `text-primary`, `text-muted`, …), no hex sueltos. Assets oficiales en `public/` (`logo-*-copper.svg`, `isotipo-*-copper.svg`).
- **Copy:** español rioplatense con voseo (`Contanos`, `Conocé`), público PyME argentina. Para textos comerciales nuevos usá la skill `nautom-copywriting`.
- En CSS, `animation-fill-mode: backwards`, nunca `both`: `both` crea stacking contexts que bloquean clicks.

## 3 · Comandos y checks

Package manager: npm (`package-lock.json`).

```bash
npm ci
npm run dev
npm run build
```

- El build necesita `RESEND_API_KEY`: el cliente de Resend se instancia al cargar `route.ts`. Sin `.env.local`, corré `RESEND_API_KEY=re_placeholder npm run build` (el build no envía mails).
- No hay lint, tests ni CI propia: el único gate es `npm run build` (incluye TypeScript) más el build de Vercel en el PR. Un cambio visual se verifica en el navegador, en desktop y en mobile (375 px), antes de pedir review; reportá lo que no pudiste mirar.
- Secretos sólo en `.env.local` (ignorado por `.env*`). Nunca los commitees ni los pegues en el PR.

## 4 · Handoff

Listá checks corridos y su resultado, qué miraste en el navegador (o la preview de Vercel) y qué quedó sin verificar.
