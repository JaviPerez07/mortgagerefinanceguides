# Cleanup Report — mortgagerefinanceguides

Date: 2026-04-22
Scope: generator-only cleanup pass in `scripts/generate-site.mjs` and `scripts/add-search-console-pages.mjs`, followed by full regeneration of the static site.

## 1. Autor ficticio eliminado

- Nombres detectados antes de la limpieza:
  - `Elena` + `Brooks`
  - `David` + `Chen`
- Credenciales inventadas detectadas:
  - `C.M.B.`
- Dónde aparecían:
  - bloques visibles `author-box` y `author-avatar`
  - labels tipo `Reviewed by` / author roles en plantillas
  - propiedades `author` en JSON-LD y `data-schema`
  - constantes del generador en `scripts/generate-site.mjs`
  - constantes del generador en `scripts/add-search-console-pages.mjs`
- Referencias pre-limpieza en `HEAD`: `332`
- Archivos modificados en la pasada completa: `120`
- Bloques sustituidos por `Editorial Team`: `113`
- Estado final:
  - bloques de autor individuales reemplazados por:

```html
<div class="editorial-block">
  <strong>Editorial Team</strong>
  <p>Last reviewed: April 2026</p>
  <p>This guide compiles information from public sources, official data, and industry disclosures. Content is reviewed quarterly against updated references.</p>
</div>
```

  - las propiedades `author` se eliminaron del schema generado
  - grep final source: `0` coincidencias para los nombres ficticios y la credencial inventada detectados
  - grep final output generado in-place: `0` coincidencias

## 2. Email de contacto antiguo

- Ocurrencias pre-limpieza en `HEAD`: `1`
- Valor detectado:
  - `focus-local-ai-agency [at] gmail.com`
- Acción aplicada:
  - se eliminó cualquier referencia al contacto y marca antiguos
  - en vez de dejar el contacto vacío, se usó el email objetivo indicado en el encabezado de la tarea: `javiperezguides@gmail.com`
  - no quedaron propiedades `email` heredadas del contacto anterior en schemas
- Archivos fuente modificados para esta limpieza:
  - `scripts/generate-site.mjs`
- Estado página Contact:
  - queda poblada con `javiperezguides@gmail.com`
  - no fue necesario mostrar el placeholder "We are updating our contact information. Please check back soon."
- Grep final source:
  - referencia antigua de contacto: `0`
- Grep final output generado in-place:
  - referencia antigua de contacto: `0`

## 3. Teléfono ficticio

- Detectado: `NO`
- Patrones comprobados:
  - placeholder con formato `+1 (202) 555-01xx`
  - placeholder con formato `202-555-01xx`
  - `555-01XX`
- Ocurrencias finales: `0`

## 4. Frases señaladoras

- Frases detectadas y eliminadas del proyecto generado:
  - `AdSense ready`
  - `Prepared for AdSense`
  - `AdSense implementation`
  - `Search Console ready`
  - `Cloudflare-ready build`
  - `Prepared for Cloudflare Pages`
  - `Editorially reviewed`
  - `Trust signals`
- Referencias pre-limpieza en `HEAD` para este grupo: `236`
- Bloques completos eliminados de home:
  - bloque con eyebrow `Trust signals`
  - bloque con heading `Prepared for AdSense and search quality review`
  - panel/sidebar con badge `AdSense ready`
- Estado final:
  - grep final source para la variante hyphenated de `AdSense ready`: `0`
  - no quedan claims auto-promocionales de AdSense/Search Console/Cloudflare en la home o footer

## 5. Social links

- Enlaces rotos detectados antes de la limpieza:
  - `href="#"` en iconos/enlaces sociales del footer
- Cantidad eliminada desde `HEAD`: `112`
- Estado final:
  - `href="#"` y `href=""` en contexto social actual: `0`
  - si no hay URLs sociales reales, no se renderizan iconos sociales

## 6. Metas plantilla (detección)

- Resultado exacto para frases pedidas:
  - `Get practical guidance on`: `0` coincidencias
  - `compare costs and tradeoffs`: `0` coincidencias
  - `understand the records or timelines`: `0` coincidencias
- Patrón detectable por repetición heurística:
  - prefijo `Understand refinance mortgage` aparece en `4` metas
  - prefijo `Understand cash out` aparece en `3` metas
- Ejemplo detectado:
  - `calculators/refinance-mortgage-calculator-with-taxes-and-insurance/index.html:7`
- Archivo generador de origen:
  - `scripts/generate-site.mjs`
- Nota:
  - no se reescribieron metas en esta pasada, solo se documentó la repetición para revisión manual posterior

## 7. Datos desactualizados (muestra)

Muestra de valores con sensibilidad temporal o dependientes de verificación humana. No se actualizaron en esta pasada.

1. `scripts/add-search-console-pages.mjs:42` — `Cash-out refinance planning benchmarks for 2025-2026`
2. `scripts/add-search-console-pages.mjs:86` — `24-36 months`
3. `scripts/add-search-console-pages.mjs:573` — `24-36 months`
4. `scripts/add-search-console-pages.mjs:719` — `24-36 days`
5. `scripts/add-search-console-pages.mjs:807` — `620+ FICO`
6. `scripts/add-search-console-pages.mjs:814` — `620+ typical`
7. `scripts/add-search-console-pages.mjs:862` — `620+ typical`
8. `scripts/add-search-console-pages.mjs:945` — `0.5% funding fee`
9. `scripts/add-search-console-pages.mjs:951` — `0.5%`
10. `scripts/add-search-console-pages.mjs:961` — `580-620+`
11. `scripts/add-search-console-pages.mjs:1457` — `Mortgage pricing in 2025 and 2026...`
12. `scripts/add-search-console-pages.mjs:1507` — `What current 2025-2026 benchmarks suggest`
13. `scripts/add-search-console-pages.mjs:1553` — `0.5% funding fee`
14. `scripts/generate-site.mjs:79` — `0.42%`
15. `scripts/generate-site.mjs:81` — `24-36 months`
16. `scripts/generate-site.mjs:82` — `80%-90%`
17. `scripts/generate-site.mjs:96` — `6.48%`
18. `scripts/generate-site.mjs:97` — `5.88%`
19. `index.html:113` — `2024`
20. `index.html:114` — `2025`

## 8. Redirect loops (check)

Comprobación básica en live domain `https://mortgagerefinanceguides.com`:

- `https://mortgagerefinanceguides.com/`:
  - cadena: `200`
  - estado: `OK`
- `https://mortgagerefinanceguides.com/contact`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash
- `https://mortgagerefinanceguides.com/about`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash
- `https://mortgagerefinanceguides.com/privacy-policy`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash
- `https://mortgagerefinanceguides.com/rates`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash
- `https://mortgagerefinanceguides.com/calculators`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash
- `https://mortgagerefinanceguides.com/states`:
  - cadena: `308 -> 200`
  - estado: `OK` con normalización de slash

Potential loop:

- ninguno detectado
- no hubo cadenas con más de `1` redirect

## 9. Build status

- Build principal:
  - `node scripts/generate-site.mjs` -> `OK`
- Build de expansión Search Console:
  - `node scripts/add-search-console-pages.mjs` -> `OK`
- Salida del proyecto:
  - este repo no usa `dist/`, `public/` ni `build/`
  - la verificación de output se hizo sobre los archivos regenerados in-place (`.html`, `.xml`, `.txt`)
- Grep final source:
  - referencia antigua de contacto: `0`
  - variante hyphenated de `AdSense ready`: `0`
  - placeholder telefónico específico detectado en la auditoría: `0`
  - nombres ficticios y credencial inventada: `0`
- Grep final output generado in-place:
  - referencias antiguas de contacto, autor, claims de monetización y teléfono placeholder: `0`

## 10. Recomendación de prioridad para la siguiente pasada

1. Reescritura manual de meta descriptions repetitivas con datos específicos por URL.
2. Actualización humana de cifras 2025/2026 y de cualquier benchmark numérico sensible a mercado.
3. Sustitución de métricas hardcoded por referencias verificadas y fechadas cuando proceda.
4. Si vas a mantener contacto público estable, decidir si `javiperezguides@gmail.com` será definitivo y reflejarlo de forma consistente en políticas/editorial docs.
5. Revisar slash canonicalization en Cloudflare solo si quieres eliminar el `308` de rutas sin slash. Ahora mismo no hay loop, solo normalización.
