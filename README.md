# Sitio Web Empresarial - SkillUps Academy

> "No vendemos cursos, vendemos transformación profesional."

Ecosistema web corporativo de **SkillUps Academy**: empresa de capacitación, soluciones tecnológicas, automatización, consultoría y transformación digital.

---

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Tecnologías](#tecnologías)
3. [Requisitos](#requisitos)
4. [Instalación](#instalación)
5. [Desarrollo Local](#desarrollo-local)
6. [Build de Producción](#build-de-producción)
7. [Deploy en Vercel](#deploy-en-vercel)
8. [Estructura del Proyecto](#estructura-del-proyecto)
9. [Páginas](#páginas)
10. [Componentes](#componentes)
11. [Sistema de Diseño](#sistema-de-diseño)
12. [Variables de Entorno](#variables-de-entorno)
13. [SEO](#seo)
14. [Performance](#performance)
15. [Accesibilidad](#accesibilidad)
16. [Contribución](#contribución)
17. [Licencia](#licencia)

---

## Descripción

SkillUps Academy es un ecosistema web corporativo multipágina que integra:

- **Academy**: Capacitación empresarial, formación docente y virtualización educativa
- **Tech**: Desarrollo web, sistemas a medida, LMS, integraciones y e-learning
- **Automation**: Automatización de procesos, workflows y dashboards
- **Growth**: Marketing digital, branding, ventas digitales y email marketing
- **Consultoría**: Consultoría organizacional, LMS y transformación digital
- **Creative**: Diseño gráfico, producción audiovisual y contenido multimedia

---

## Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| Next.js | 15.x | Framework React con App Router |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.x | Framework CSS utility-first |
| Lucide React | - | Iconos SVG |
| next/font | - | Fuentes optimizadas |

---

## Requisitos

- Node.js >= 18.18.0
- npm >= 9.0.0
- Git

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sitio-web-empresarial.git

# Entrar al directorio
cd sitio-web-empresarial

# Instalar dependencias
npm install
```

---

## Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## Build de Producción

```bash
# Generar build de producción
npm run build

# Iniciar servidor de producción
npm run start
```

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

## Estructura del Proyecto

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
│   ├── ui/                 # Componentes base
│   ├── layout/             # Header, Footer, Layout
│   ├── heroes/             # Hero components
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
├── .env.example            # Variables de entorno ejemplo
├── next.config.ts          # Configuración Next.js
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
└── package.json
```

---

## Páginas

### Página Principal
- `/` - Home con hero, servicios, stats, testimonios, FAQ

### Academy
- `/academy` - Página principal de Academy
- `/academy/capacitacion-empresarial` - Capacitación para empresas
- `/academy/formacion-docente` - Formación para docentes
- `/academy/virtualizacion` - Virtualización educativa

### Tech
- `/tech` - Página principal de Tech
- `/tech/desarrollo-web` - Desarrollo web
- `/tech/sistemas-a-medida` - Sistemas a medida
- `/tech/lms` - LMS y plataformas
- `/tech/integraciones` - Integraciones y APIs
- `/tech/e-learning` - E-learning

### Automation
- `/automation` - Página principal de Automation
- `/automation/procesos` - Automatización de procesos
- `/automation/workflows` - Workflows digitales
- `/automation/dashboards` - Dashboards y analítica

### Growth
- `/growth` - Página principal de Growth
- `/growth/marketing-digital` - Marketing digital
- `/growth/branding` - Branding e identidad
- `/growth/ventas-digitales` - Ventas digitales
- `/growth/email-marketing` - Email marketing

### Consultoría
- `/consultoria` - Página principal de Consultoría
- `/consultoria/organizacional` - Consultoría organizacional
- `/consultoria/lms` - Consultoría LMS
- `/consultoria/transformacion-digital` - Transformación digital

### Creative
- `/creative` - Página principal de Creative
- `/creative/diseno-grafico` - Diseño gráfico
- `/creative/video` - Producción audiovisual
- `/creative/contenido` - Contenido multimedia

### Otras
- `/empresas` - Soluciones B2B
- `/casos` - Casos y proyectos
- `/blog` - Blog
- `/recursos` - Recursos
- `/nosotros` - Nosotros
- `/contacto` - Contacto
- `/solicitar-propuesta` - Solicitar propuesta

---

## Componentes

### UI Base
- `Button` - Botones con variantes y estados
- `Card` - Tarjetas con hover
- `Badge` - Etiquetas
- `Section` - Secciones con espaciado
- `SectionHeader` - Encabezados de sección
- `Container` - Contenedor responsive
- `Accordion` - Acordeones interactivos
- `Tabs` - Pestañas
- `Breadcrumb` - Migas de pan
- `Stat` - Estadísticas
- `ProcessTimeline` - Timeline de proceso
- `Testimonial` - Testimonios
- `PricingCard` - Tarjetas de precios
- `DashboardPreview` - Preview de dashboard

### Layout
- `Header` - Header con mega menú
- `Footer` - Footer completo
- `Layout` - Layout principal
- `Logo` - Logo de la marca

### Funcionales
- `ChatWidget` - Chat en vivo
- `BackToTop` - Botón volver arriba
- `Toast` - Notificaciones
- `Newsletter` - Formulario de suscripción
- `ROICalculator` - Calculadora de ROI
- `AnimatedStats` - Estadísticas animadas
- `WhySkillUps` - Diferenciadores
- `Skeleton` - Estados de carga
- `Tooltip` - Tooltips

### Formularios
- `ContactForm` - Formulario de contacto
- `ProposalForm` - Formulario de propuesta (multi-paso)

---

## Sistema de Diseño

### Colores
```css
--color-primary: #0EA6A7;    /* Teal - Color primario */
--color-secondary: #154F63;  /* Navy - Color secundario */
--color-accent: #F09E1E;     /* Amber - Color acento */
--color-complement: #A34924; /* Rust - Color complementario */
```

### Tipografía
- **Display**: Plus Jakarta Sans (titulares)
- **Body**: Inter (texto)
- **Mono**: JetBrains Mono (código)

### Espaciado
- Secciones: `py-6 md:py-8 lg:py-10`
- Contenedor: `max-w-7xl`
- Gap entre elementos: `gap-4` a `gap-8`

### Bordes y Sombras
- Radio: `rounded-lg` a `rounded-2xl`
- Sombras: `shadow-sm` a `shadow-xl`

---

## Variables de Entorno

Copia `.env.example` como `.env.local`:

```env
# Sitio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=SkillUps Academy

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX

# Formularios (futuro)
# NEXT_PUBLIC_FORMSPREE_ID=
# RESEND_API_KEY=

# Supabase (futuro)
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## SEO

- Metadata configurada en cada página
- Open Graph y Twitter Cards
- `robots.ts` y `sitemap.ts` generados automáticamente
- Schema.org (Organization, ContactPoint)
- URLs amigables
- Meta tags dinámicos

---

## Performance

- Server Components por defecto
- Client Components solo cuando es necesario
- Imágenes optimizadas con `next/image`
- Fuentes optimizadas con `next/font`
- CSS optimizado con Tailwind
- Code splitting automático

---

## Accesibilidad

- Navegación por teclado
- ARIA labels
- Contraste de colores adecado
- Foco visible
- Texto alternativo en imágenes
- Estructura semántica HTML

---

## Contribución

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## Licencia

UNLICENSED - SkillUps Academy

---

## Contacto

- **WhatsApp**: +52 (123) 456-7890
- **Email**: contacto@skillupsacademy.com
- **Web**: https://skillupsacademy.com
