# Propuesta 01 · Home clara

Maqueta navegable para revisar el inicio y un caso completo de Nautom. No modifica la home ni se publica como una ruta de la aplicación. La referencia de Whitespace se aplica a la composición clara y a las demostraciones visibles; Marker aporta la explicación de cómo nos integramos con la operación y seguimos trabajando con el equipo.

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

Es una dirección visual parcial. Productos, FAQ y pie legal se integrarían en una implementación posterior, conservando sus fuentes y contratos actuales. No se representa esta maqueta como una home lista para publicar.

## Fuentes y límites

- Colores: se leen de `src/app/globals.css` al servir `/brand.css`; no se duplica la paleta.
- Fuentes: archivos locales de `src/app/fonts/`. Logos oficiales de `public/`.
- Capturas y cifras: `src/components/home/Cases.tsx` y `public/images/casos/`. Se conservan las aproximaciones de repartos y sistemas integrados. No se agregan métricas comerciales ni testimonios.
- Destinos del sitio: `SITE_URL` de `src/lib/site.ts`, resuelto por el servidor de la maqueta.
- Las capturas son las ya publicadas, con datos personales difuminados. En mobile tienen desplazamiento horizontal dentro del marco y opción de abrirlas a tamaño completo.
- Esta propuesta no altera copy publicado, `llms.txt`, JSON-LD, sitemap, legales, robots ni contacto. Al implementar una home definitiva se deberán revisar las fuentes y el sitemap en el mismo commit.

## Verificación

- `RESEND_API_KEY=re_placeholder npm run build`: OK, incluido TypeScript.
- `node --check` de los dos scripts: OK.
- Recursos locales y anclas de la propuesta: OK; enlaces a contacto, casos y equipo respondieron HTTP 200.
- Navegador: desktop 1440 px y mobile 375 px, sin overflow de página; imágenes cargadas; inicio, ejemplos, caso y proceso inspeccionados.
- Selector: click, flechas y Home; una sola pestaña seleccionada y un solo panel visible. Consola sin errores ni advertencias.
- La maqueta es local y no forma parte de la preview de Vercel. Las capturas son evidencia del prototipo, no una verificación del sitio publicado ni de las apps internas.
- No se envió el formulario. No se tomaron nuevas capturas de las apps con sesión autenticada.

Capturas de revisión: [desktop](evidence/desktop-full.jpg), [mobile](evidence/mobile-full.jpg).
