# MetaTok AI — sitio web

Landing multi-idioma de MetaTok AI, reconstruida como proyecto Next.js (App Router) a partir del sitio publicado en producción, con foco en SEO, diseño y copy de conversión.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- i18n propio por segmento de ruta `[locale]` (sin dependencias externas)

## Idiomas

`es` (por defecto), `en`, `fr`, `de`, `pt`, `ar` (RTL). Cada idioma vive en `src/dictionaries/<locale>.ts` siguiendo el tipo definido en `src/dictionaries/types.ts`.

## Estructura

```
src/
  app/
    [locale]/
      layout.tsx        # <html lang/dir>, metadata, JSON-LD Organization/WebSite
      page.tsx           # Home: compone todas las secciones
      legal/[slug]/      # Aviso legal, privacidad, cookies, términos
    sitemap.ts
    robots.ts
  components/
    sections/            # Una sección de la home por archivo
    Header.tsx, Footer.tsx, LocaleSwitcher.tsx, ui.tsx
  dictionaries/           # Contenido y copy por idioma
  i18n/                   # Config de locales y loader de diccionarios
  lib/legal.ts            # Slugs de páginas legales
  middleware.ts           # Sin efecto en el export estático actual (ver más abajo)
scripts/
  fix-root-redirect.mjs   # Reescribe out/index.html tras el build (ver Despliegue)
public/.htaccess          # Config Apache: 404 personalizado, cache, gzip
```

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000 (modo servidor normal, con middleware activo)
npm run build     # genera la carpeta out/ lista para subir a hosting estático
npm run serve     # sirve out/ en local para previsualizar el export tal cual quedará en el hosting
npm run lint
```

## Despliegue en hosting compartido (Hostalia y similares)

El proyecto está configurado como **export estático** (`output: "export"` en `next.config.ts`), porque Hostalia (como la mayoría del hosting compartido clásico) sirve archivos vía Apache y no ejecuta Node.js/Next.js con servidor. Esto tiene dos implicaciones:

- `middleware.ts` (que detectaba el idioma del navegador para redirigir `/`) **no se ejecuta** en el export estático — Apache no puede correr código de Edge/Node. En su lugar, `npm run build` ejecuta `scripts/fix-root-redirect.mjs`, que sustituye `out/index.html` por una redirección estática (meta-refresh + JS) a `/es/`, el idioma principal. Si en el futuro se despliega en Vercel o un hosting con Node, el middleware sí funcionaría con detección automática de idioma.
- Rutas dinámicas de servidor (API routes, ISR, etc.) no están disponibles; todo el sitio son ficheros HTML/CSS/JS pre-generados en build time, lo cual encaja con el contenido actual (no hay backend propio, los formularios usan `mailto:`).

**Pasos para publicar:**

1. `npm install && npm run build`
2. Sube **todo el contenido** de la carpeta `out/` a la raíz del hosting (`public_html/` o el `document root` del dominio en Hostalia vía FTP/gestor de archivos). No subas la carpeta `out` en sí, sino lo que hay dentro.
3. Verifica que `.htaccess` (incluido en `out/`) haya subido correctamente — algunos clientes FTP ocultan archivos que empiezan por punto.
4. Si el sitio se sirve desde un subdirectorio en vez de la raíz del dominio, hay que ajustar `basePath` en `next.config.ts` y volver a compilar, ya que las rutas de `_next/`, `/images/`, etc. son absolutas desde la raíz.

## SEO

- `title`/`description`/`keywords` por idioma y página (`generateMetadata`).
- `hreflang` completo (incluye `x-default`) vía `alternates.languages`.
- JSON-LD: `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`.
- `sitemap.xml` y `robots.txt` generados como ficheros estáticos (`app/sitemap.ts`, `app/robots.ts`).
