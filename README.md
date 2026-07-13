# Física en 1 Minuto

Sitio profesional para `fisicaenunminuto.com`, construido con Next.js App Router, TypeScript y Tailwind CSS.

## Estructura encontrada

El workspace estaba vacío al comenzar, salvo por las carpetas `work/` y `outputs/`. Por eso el proyecto se creó desde cero en la raíz del repositorio.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Scripts disponibles:

```bash
npm run lint
npm run typecheck
npm run build
```

En PowerShell, si la política de ejecución bloquea `npm.ps1`, usa `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
```

## Edición de contenido

El contenido comercial y editable está centralizado en:

- `data/site.ts`: datos generales, navegación, métricas, redes, correo, logos, placeholders de imágenes, rangos de presupuesto y datos de Quiri.
- `data/talks.ts`: charlas, descripciones, públicos, duración y modalidad.
- `data/services.ts`: servicios de inicio, servicios comerciales, metodología y características de Quiri.
- `data/projects.ts`: proyectos destacados.

Evita duplicar textos comerciales directamente en componentes. Si un texto se repite o será administrado por el equipo, muévelo a `data/`.

## Reemplazo de imágenes

Los placeholders no usan fotografías falsas. Para reemplazarlos:

1. Agrega archivos reales en:

```text
public/images/sebastian-hero.webp
public/images/sebastian-speaking.webp
public/images/quiri-character.webp
public/images/quiri-screenshot-01.webp
public/images/quiri-screenshot-02.webp
public/images/quiri-qr.webp
public/logos/
```

2. Actualiza el campo `src` correspondiente en `data/site.ts`.

Ejemplo:

```ts
hero: {
  src: "/images/sebastian-hero.webp",
  fileName: "/public/images/sebastian-hero.webp",
  alt: "Fotografía o video vertical de Sebastián Molina"
}
```

Para logos reales, agrega objetos en `logoCollaborations` dentro de `data/site.ts`.

## Formularios

Los formularios tienen validación, estados de carga, éxito y error, además de honeypot antispam. Por defecto, se envían a `contacto@fisicaenunminuto.com` mediante FormSubmit.

Para reemplazar el proveedor de envío, configura una variable pública solo para la URL del endpoint:

```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://tu-endpoint-publico"
```

No publiques claves privadas en el frontend. Si usas Resend u otro proveedor con API key, crea una ruta API o servicio intermedio y guarda la clave como variable privada del servidor.

## SEO

Incluye:

- Metadata por página.
- Open Graph y Twitter Cards.
- `app/sitemap.ts`.
- `app/robots.ts`.
- URLs canónicas.
- Datos estructurados para persona, organización, servicios y Quiri.
- Imágenes Open Graph generadas con `next/og`.

## Rutas

- `/`
- `/charlas`
- `/colaboraciones`
- `/quiri`
- `/sobre-mi`
- `/contacto`
- `/politica-de-privacidad`
- `/aviso-legal`
