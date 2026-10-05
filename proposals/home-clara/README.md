# Propuesta 01 · Home clara

Referencia de la dirección visual aprobada por Juancho el 4 de octubre de 2026. La maqueta original se conserva aislada; la implementación integrada vive en `src/components/home/HomeClear.tsx` y se sirve en la home de Next.js. La referencia de Whitespace se aplica a la composición clara y a las demostraciones visibles; Marker aporta la explicación de cómo nos integramos con la operación y seguimos trabajando con el equipo.

## Abrir

Desde la raíz del repositorio:

```sh
node proposals/home-clara/preview.mjs
```

Abrir `http://localhost:3011`. El servidor escucha sólo en loopback. Se puede elegir otro puerto con `PROPOSAL_PORT=3012`. No requiere instalar dependencias y no envía formularios ni ejecuta acciones en las apps de clientes. Los CTA llevan al sitio publicado y las capturas se pueden ampliar.

## Qué revisar juntos

- La primera impresión: base clara cálida, navy, cobre, Space Mono e Inter.
- El mensaje inicial y la demostración: tres ejemplos seleccionables de soluciones diferentes, identificadas por cliente.
- El caso de El Jumillano: contexto, escala, cambios concretos en la operación y capturas reales.
- El diagrama de herramientas → sistemas e IA → equipo y la explicación del acompañamiento.

La implementación aprobada integra esta dirección con servicios, productos, FAQ, navegación móvil y el pie legal existente. Conserva `SERVICES` y `FAQ_ITEMS` como fuentes únicas. Las imágenes actuales fueron aprobadas para esta publicación; su reemplazo queda como siguiente iteración.

## Fuentes y límites

- Colores: se leen de `src/app/globals.css` al servir `/brand.css`; no se duplica la paleta.
- Fuentes: archivos locales de `src/app/fonts/`. Logos oficiales de `public/`.
- Capturas y cifras: `src/components/home/Cases.tsx` y `public/images/casos/`. Se conservan las aproximaciones de repartos y sistemas integrados. No se agregan métricas comerciales ni testimonios.
- Destinos del sitio: `SITE_URL` de `src/lib/site.ts`, resuelto por el servidor de la maqueta.
- Las capturas son las ya publicadas, con datos personales difuminados. En mobile tienen desplazamiento horizontal dentro del marco y opción de abrirlas a tamaño completo.
- La implementación actualiza `llms.txt` con el caso ampliado. Metadata y JSON-LD revisados y coherentes con lo visible. La home mantiene `lastModified` del 2026-10-04 (mismo día ART). Legales, robots y contacto sin cambios.

## Verificación de la maqueta original

- `RESEND_API_KEY=re_placeholder npm run build`: OK, incluido TypeScript.
- `node --check` de los dos scripts: OK.
- Recursos locales y anclas de la propuesta: OK; enlaces a contacto, casos y equipo respondieron HTTP 200.
- Navegador: desktop 1440 px y mobile 375 px, sin overflow de página; imágenes cargadas; inicio, ejemplos, caso y proceso inspeccionados.
- Selector: click, flechas y Home; una sola pestaña seleccionada y un solo panel visible. Consola sin errores ni advertencias.
- La maqueta es local y no forma parte de la preview de Vercel. Las capturas son evidencia del prototipo, no una verificación del sitio publicado ni de las apps internas.
- No se envió el formulario. No se tomaron nuevas capturas de las apps con sesión autenticada.

Capturas de revisión: [desktop](evidence/desktop-full.jpg), [mobile](evidence/mobile-full.jpg).


## Verificación de la implementación

- `RESEND_API_KEY=re_placeholder npm run build`: compilación, TypeScript y generación de las 15 rutas OK.
- Desktop 1440 px y mobile 375 px: inicio, tres ejemplos, caso, diagrama, servicios, productos, FAQ, CTA y pie inspeccionados.
- Tabs: click, flechas izquierda/derecha con retorno, Home y End; un panel visible y foco en la pestaña activa.
- Menú móvil: apertura, Escape devuelve foco y navegación a un ancla lo cierra. Navegación a Nosotros y Contacto conserva el encabezado apropiado.
- FAQ: apertura por Enter y exclusividad; las nueve preguntas/respuestas coinciden exactamente con FAQPage.
- Diez rutas HTTP 200; siete páginas con H1 y canonical únicos; anclas internas, proveedor legal y `/privacidad#eliminacion` verificados.
- Consola del build de producción local sin errores ni advertencias. Formulario inspeccionado sin envío.
- El build de Vercel del PR ahora contiene la home implementada. La maqueta de `3011` permanece como referencia.

Evidencia de implementación: [desktop](evidence/implementacion-desktop.jpg), [inicio](evidence/implementacion-inicio.jpg), [mobile](evidence/implementacion-mobile.jpg).
