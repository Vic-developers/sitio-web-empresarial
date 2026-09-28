export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "guia-automatizacion-empresarial",
    title: "Guía de Automatización Empresarial",
    excerpt: "Aprende a automatizar procesos empresariales para aumentar la eficiencia y reducir costos.",
    content: "Contenido completo en la página del artículo.",
    category: "Automatización",
    author: "Equipo SkillUps",
    date: "2026-01-20",
    readTime: "10 min",
    image: "/images/blog/automatizacion.jpg",
    featured: true,
    tags: ["automatización", "procesos", "eficiencia", "tecnología"],
  },
  {
    id: "2",
    slug: "moodle-vs-canvas",
    title: "Moodle vs Canvas: ¿Cuál elegir?",
    excerpt: "Comparativa completa entre las dos plataformas LMS más populares del mercado.",
    content: "Contenido completo en la página del artículo.",
    category: "LMS",
    author: "Equipo SkillUps",
    date: "2026-01-18",
    readTime: "12 min",
    image: "/images/blog/moodle-vs-canvas.jpg",
    featured: true,
    tags: ["moodle", "canvas", "lms", "comparativa"],
  },
  {
    id: "3",
    slug: "tendencias-educacion-2026",
    title: "Tendencias en Educación y Capacitación para 2026",
    excerpt: "Descubre las metodologías y tecnologías que están transformando la forma en que aprendemos y enseñamos.",
    content: "Contenido por definir",
    category: "Educación",
    author: "Equipo SkillUps",
    date: "2026-01-15",
    readTime: "8 min",
    image: "/images/blog/tendencias-2026.jpg",
    featured: true,
    tags: ["educación", "tendencias", "tecnología", "2026"],
  },
  {
    id: "2",
    slug: "moodle-vs-canvas-comparativa",
    title: "Moodle vs Canvas: ¿Cuál LMS es mejor para tu institución?",
    excerpt: "Una comparativa completa de las dos plataformas LMS más populares del mercado educativo.",
    content: "Contenido por definir",
    category: "Moodle",
    author: "Equipo SkillUps",
    date: "2026-01-10",
    readTime: "12 min",
    image: "/images/blog/moodle-vs-canvas.jpg",
    featured: true,
    tags: ["moodle", "canvas", "lms", "comparativa"],
  },
  {
    id: "3",
    slug: "automatizacion-procesos-empresariales",
    title: "Guía de Automatización de Procesos Empresariales",
    excerpt: "Aprende a identificar y automatizar procesos repetitivos para aumentar la productividad de tu equipo.",
    content: "Contenido por definir",
    category: "Automatización",
    author: "Equipo SkillUps",
    date: "2026-01-05",
    readTime: "10 min",
    image: "/images/blog/automatizacion.jpg",
    featured: true,
    tags: ["automatización", "procesos", "productividad", "eficiencia"],
  },
  {
    id: "4",
    slug: "power-bi-dashboards-ejecutivos",
    title: "Cómo Crear Dashboards Ejecutivos Efectivos en Power BI",
    excerpt: "Mejores prácticas para diseñar dashboards que realmente impulsen la toma de decisiones.",
    content: "Contenido por definir",
    category: "Datos",
    author: "Equipo SkillUps",
    date: "2025-12-20",
    readTime: "7 min",
    image: "/images/blog/power-bi-dashboards.jpg",
    featured: false,
    tags: ["power bi", "dashboards", "datos", "business intelligence"],
  },
  {
    id: "5",
    slug: "transformacion-digital-pymes",
    title: "Transformación Digital para Pymes: Por Dónde Empezar",
    excerpt: "Una hoja de ruta práctica para pequeñas y medianas empresas que quieren digitalizarse.",
    content: "Contenido por definir",
    category: "Tecnología",
    author: "Equipo SkillUps",
    date: "2025-12-15",
    readTime: "9 min",
    image: "/images/blog/transformacion-pymes.jpg",
    featured: false,
    tags: ["transformación digital", "pymes", "tecnología", "estrategia"],
  },
  {
    id: "6",
    slug: "email-marketing-mejores-practicas",
    title: "Email Marketing: Mejores Prácticas para Aumentar Conversiones",
    excerpt: "Estrategias probadas para crear campañas de email que tus destinatarios realmente quieran abrir.",
    content: "Contenido por definir",
    category: "Marketing",
    author: "Equipo SkillUps",
    date: "2025-12-10",
    readTime: "6 min",
    image: "/images/blog/email-marketing.jpg",
    featured: false,
    tags: ["email marketing", "contenido", "conversión", "campañas"],
  },
  {
    id: "7",
    slug: "diseno-instruccional-e-learning",
    title: "Diseño Instruccional para e-Learning: Guía Completa",
    excerpt: "Los fundamentos del diseño instruccional aplicado a la creación de cursos online efectivos.",
    content: "Contenido por definir",
    category: "Educación",
    author: "Equipo SkillUps",
    date: "2025-12-05",
    readTime: "11 min",
    image: "/images/blog/diseno-instruccional.jpg",
    featured: false,
    tags: ["diseño instruccional", "e-learning", "educación", "contenido"],
  },
  {
    id: "8",
    slug: "gestion-talento-humano-era-digital",
    title: "Gestión del Talento Humano en la Era Digital",
    excerpt: "Cómo las nuevas tecnologías están transformando la gestión de personas en las organizaciones.",
    content: "Contenido por definir",
    category: "RRHH",
    author: "Equipo SkillUps",
    date: "2025-11-30",
    readTime: "8 min",
    image: "/images/blog/talento-digital.jpg",
    featured: false,
    tags: ["rrhh", "talento", "digital", "gestión"],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((p) => p.featured);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((p) => p.category === category);
};

export const blogCategories = [
  "Educación",
  "Tecnología",
  "Moodle",
  "LMS",
  "Datos",
  "Automatización",
  "Marketing",
  "RRHH",
  "Productividad",
];
