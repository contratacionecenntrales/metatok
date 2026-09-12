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
  middleware.ts           # Redirige "/" al idioma preferido del navegador
```

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## SEO

- `title`/`description`/`keywords` por idioma y página (`generateMetadata`).
- `hreflang` completo (incluye `x-default`) vía `alternates.languages`.
- JSON-LD: `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`.
- `sitemap.xml` y `robots.txt` generados dinámicamente (`app/sitemap.ts`, `app/robots.ts`).
