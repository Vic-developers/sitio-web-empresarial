# SkillUps Academy - Ecosistema Web Corporativo

Sitio web oficial de **SkillUps Academy**: empresa de capacitación, soluciones tecnológicas, automatización, consultoría y transformación digital.

> "No vendemos cursos, vendemos transformación profesional."

---

## Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 3
- **Iconos:** Lucide React
- **Fuentes:** Inter, Plus Jakarta Sans, JetBrains Mono (via next/font)
- **Deployment:** Vercel

---

## Requisitos

- Node.js >= 18.18.0
- npm >= 9.0.0

---

## Instalación

```bash
npm install
```

---

## Desarrollo local

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## Build de producción

```bash
npm run build
npm run start
```

---

## Variables de entorno

Copia `.env.example` como `.env.local` y configura las variables necesarias:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

---

## Estructura del proyecto

```
/
├── app/                    # Páginas (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── academy/            # Sección Academy
│   ├── tech/               # Sección Tech
│   ├── automation/         # Sección Automation
│   ├── growth/             # Sección Growth
│   ├── consultoria/        # Sección Consultoría
│   ├── creative/           # Sección Creative
│   ├── blog/               # Blog
│   ├── casos/              # Casos y proyectos
│   ├── recursos/           # Recursos
│   ├── nosotros/           # Nosotros
│   ├── contacto/           # Contacto
│   ├── empresas/           # Soluciones B2B
│   └── solicitar-propuesta/ # Formulario de propuesta
├── components/             # Componentes React
│   ├── ui/                 # Componentes base (Button, Card, etc.)
│   ├── layout/             # Header, Footer, Layout
│   ├── heroes/             # Hero components
│   ├── academy/            # Componentes de Academy
│   ├── forms/              # Formularios
│   └── ...
├── data/                   # Datos estructurados
│   ├── courses.ts          # Cursos
│   ├── services.ts         # Servicios
│   ├── blog.ts             # Artículos
│   ├── cases.ts            # Casos
│   └── navigation.ts       # Navegación
├── lib/                    # Utilidades
│   └── utils.ts            # Funciones helper
├── styles/                 # Estilos globales
│   └── globals.css         # Tailwind + tokens
├── public/                 # Archivos estáticos
│   ├── images/
│   ├── icons/
│   └── logo/
├── types/                  # Tipos TypeScript
├── .env.example            # Variables de entorno ejemplo
├── next.config.ts          # Configuración Next.js
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
└── package.json
```

---

## Cómo agregar páginas

1. Crea una carpeta en `app/` con el nombre de la ruta
2. Crea un archivo `page.tsx` dentro de la carpeta
3. Exporta un componente React por defecto

Ejemplo:
```tsx
// app/nueva-pagina/page.tsx
export default function NuevaPagina() {
  return <div>Nueva página</div>;
}
```

---

## Cómo agregar cursos

Edita `data/courses.ts` y agrega un nuevo objeto al array `courses`:

```ts
{
  id: "9",
  slug: "nuevo-curso",
  title: "Título del curso",
  category: "Categoría",
  description: "Descripción...",
  level: "Básico",
  duration: "20 horas",
  modality: "En vivo",
  date: "Junio 2026",
  instructor: "Nombre del instructor",
  certification: true,
  price: "$1,000 MXN",
  image: "/images/courses/nuevo.jpg",
  featured: false,
  objectives: ["Objetivo 1", "Objetivo 2"],
  content: ["Tema 1", "Tema 2"],
  methodology: "Metodología...",
  faqs: [{ question: "Pregunta", answer: "Respuesta" }],
}
```

---

## Cómo agregar servicios

Edita `data/services.ts` y agrega un nuevo objeto al array `services`.

---

## Cómo agregar artículos

Edita `data/blog.ts` y agrega un nuevo objeto al array `blogPosts`.

---

## Deploy en Vercel

1. Sube el proyecto a GitHub
2. Entra a [Vercel](https://vercel.com)
3. Click en "Import Project"
4. Selecciona tu repositorio
5. Configura las variables de entorno
6. Click en "Deploy"

El proyecto está configurado para desplegarse automáticamente en cada push a la rama principal.

---

## SEO

- Metadata configurada en cada página
- Open Graph y Twitter Cards
- `robots.ts` y `sitemap.ts` generados automáticamente
- URLs amigables
- Schema.org listo para implementar

---

## Rendimiento

- Server Components por defecto
- Client Components solo cuando es necesario
- Imágenes optimizadas con `next/image`
- Fuentes optimizadas con `next/font`
- CSS optimizado con Tailwind

---

## Licencia

UNLICENSED - SkillUps Academy
