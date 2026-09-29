export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  href: string;
  items: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { label: "Capacitación Empresarial", href: "/academy/capacitacion-empresarial", description: "Formación para empresas" },
      { label: "Formación Docente", href: "/academy/formacion-docente", description: "Desarrollo docente" },
      { label: "Virtualización", href: "/academy/virtualizacion", description: "Contenidos digitales" },
      { label: "Desarrollo Web", href: "/tech/desarrollo-web", description: "Sitios y aplicaciones web" },
      { label: "Sistemas a Medida", href: "/tech/sistemas-a-medida", description: "Software personalizado" },
      { label: "LMS y Plataformas", href: "/tech/lms", description: "Plataformas educativas" },
      { label: "Integraciones", href: "/tech/integraciones", description: "Conectamos sistemas" },
      { label: "Automatización de Procesos", href: "/automation/procesos", description: "Optimiza tu operación" },
      { label: "Workflows Digitales", href: "/automation/workflows", description: "Flujos de trabajo" },
      { label: "Dashboards y Analítica", href: "/automation/dashboards", description: "Visualiza tus datos" },
      { label: "Marketing Digital", href: "/growth/marketing-digital", description: "Estrategia digital" },
      { label: "Branding e Identidad", href: "/growth/branding", description: "Construye tu marca" },
      { label: "Ventas Digitales", href: "/growth/ventas-digitales", description: "Vende más" },
      { label: "Email Marketing", href: "/growth/email-marketing", description: "Comunicación efectiva" },
      { label: "Consultoría Organizacional", href: "/consultoria/organizacional", description: "Mejora tu organización" },
      { label: "Consultoría LMS", href: "/consultoria/lms", description: "Plataformas educativas" },
      { label: "Transformación Digital", href: "/consultoria/transformacion-digital", description: "Digitaliza tu empresa" },
      { label: "Diseño Gráfico", href: "/creative/diseno-grafico", description: "Diseño visual" },
      { label: "Producción Audiovisual", href: "/creative/video", description: "Video y animación" },
      { label: "Contenido Multimedia", href: "/creative/contenido", description: "Contenido digital" },
    ],
  },
  {
    label: "Aula Virtual",
    href: "/aula-virtual",
  },
  {
    label: "Casos de Éxito",
    href: "/casos",
  },
  {
    label: "Empresas",
    href: "/empresas",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Academy",
    description: "Desarrollamos talento y competencias profesionales.",
    href: "/academy",
    items: [
      { label: "Capacitación Empresarial", href: "/academy/capacitacion-empresarial", description: "Formación para organizaciones" },
      { label: "Formación Docente", href: "/academy/formacion-docente", description: "Desarrollo profesional docente" },
      { label: "Virtualización", href: "/academy/virtualizacion", description: "Contenidos digitales interactivos" },
    ],
  },
  {
    title: "Tech",
    description: "Construimos soluciones digitales a medida.",
    href: "/tech",
    items: [
      { label: "Desarrollo Web", href: "/tech/desarrollo-web", description: "Sitios y aplicaciones web" },
      { label: "Sistemas a Medida", href: "/tech/sistemas-a-medida", description: "Software personalizado" },
      { label: "LMS y Plataformas", href: "/tech/lms", description: "Plataformas educativas" },
      { label: "Integraciones", href: "/tech/integraciones", description: "Conectamos sistemas" },
    ],
  },
  {
    title: "Automation",
    description: "Optimizamos procesos con tecnología.",
    href: "/automation",
    items: [
      { label: "Automatización de Procesos", href: "/automation/procesos", description: "Optimiza tu operación" },
      { label: "Workflows Digitales", href: "/automation/workflows", description: "Flujos de trabajo" },
      { label: "Dashboards y Analítica", href: "/automation/dashboards", description: "Visualiza tus datos" },
    ],
  },
  {
    title: "Growth",
    description: "Impulsamos tu negocio al siguiente nivel.",
    href: "/growth",
    items: [
      { label: "Marketing Digital", href: "/growth/marketing-digital", description: "Estrategia digital" },
      { label: "Branding e Identidad", href: "/growth/branding", description: "Construye tu marca" },
      { label: "Ventas Digitales", href: "/growth/ventas-digitales", description: "Vende más" },
      { label: "Email Marketing", href: "/growth/email-marketing", description: "Comunicación efectiva" },
    ],
  },
  {
    title: "Consultoría",
    description: "Transformamos tu organización.",
    href: "/consultoria",
    items: [
      { label: "Consultoría Organizacional", href: "/consultoria/organizacional", description: "Mejora tu organización" },
      { label: "Consultoría LMS", href: "/consultoria/lms", description: "Plataformas educativas" },
      { label: "Transformación Digital", href: "/consultoria/transformacion-digital", description: "Digitaliza tu empresa" },
    ],
  },
  {
    title: "Creative",
    description: "Comunicamos tu marca con creatividad.",
    href: "/creative",
    items: [
      { label: "Diseño Gráfico", href: "/creative/diseno-grafico", description: "Diseño visual" },
      { label: "Producción Audiovisual", href: "/creative/video", description: "Video y animación" },
      { label: "Contenido Multimedia", href: "/creative/contenido", description: "Contenido digital" },
    ],
  },
];

export const footerNavigation = {
  servicios: [
    { label: "Capacitación Empresarial", href: "/academy/capacitacion-empresarial" },
    { label: "Formación Docente", href: "/academy/formacion-docente" },
    { label: "Virtualización", href: "/academy/virtualizacion" },
  ],
  tech: [
    { label: "Desarrollo Web", href: "/tech/desarrollo-web" },
    { label: "Sistemas a Medida", href: "/tech/sistemas-a-medida" },
    { label: "LMS y Plataformas", href: "/tech/lms" },
    { label: "Integraciones", href: "/tech/integraciones" },
  ],
  automation: [
    { label: "Automatización de Procesos", href: "/automation/procesos" },
    { label: "Workflows Digitales", href: "/automation/workflows" },
    { label: "Dashboards y Analítica", href: "/automation/dashboards" },
  ],
  growth: [
    { label: "Marketing Digital", href: "/growth/marketing-digital" },
    { label: "Branding e Identidad", href: "/growth/branding" },
    { label: "Ventas Digitales", href: "/growth/ventas-digitales" },
    { label: "Email Marketing", href: "/growth/email-marketing" },
  ],
  consultoria: [
    { label: "Consultoría Organizacional", href: "/consultoria/organizacional" },
    { label: "Consultoría LMS", href: "/consultoria/lms" },
    { label: "Transformación Digital", href: "/consultoria/transformacion-digital" },
  ],
  creative: [
    { label: "Diseño Gráfico", href: "/creative/diseno-grafico" },
    { label: "Producción Audiovisual", href: "/creative/video" },
    { label: "Contenido Multimedia", href: "/creative/contenido" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Casos de Éxito", href: "/casos" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
    { label: "Solicitar Propuesta", href: "/solicitar-propuesta" },
  ],
};

export const ctaNavigation = {
  primary: { label: "Solicitar propuesta", href: "/solicitar-propuesta" },
  secondary: { label: "Ver capacitación", href: "/academy" },
  tertiary: { label: "Explorar soluciones", href: "/#servicios" },
};

export const whatsappCta = {
  label: "Consultar por WhatsApp",
  href: "https://wa.me/18495774524?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20y%20programas%20disponibles",
};
