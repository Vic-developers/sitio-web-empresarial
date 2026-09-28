export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  duration: string;
  modality: "En vivo" | "Grabado" | "Híbrido" | "Presencial";
  date: string;
  instructor: string;
  certification: boolean;
  price: string;
  image: string;
  featured: boolean;
  objectives: string[];
  content: string[];
  methodology: string;
  faqs: { question: string; answer: string }[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "power-bi-analisis-datos",
    title: "Power BI: Análisis de Datos para la Toma de Decisiones",
    category: "Análisis de Datos",
    description: "Aprende a transformar datos en insights accionables con Power BI. Crea dashboards interactivos y reportes que impulsan decisiones estratégicas.",
    level: "Intermedio",
    duration: "40 horas",
    modality: "En vivo",
    date: "Marzo 2026",
    instructor: "Por definir",
    certification: true,
    price: "$1,200 MXN",
    image: "/images/courses/power-bi.jpg",
    featured: true,
    objectives: [
      "Dominar la interfaz y herramientas de Power BI",
      "Crear visualizaciones interactivas y dinámicas",
      "Conectar múltiples fuentes de datos",
      "Diseñar dashboards ejecutivos",
      "Implementar medidas y cálculos DAX",
    ],
    content: [
      "Introducción a Power BI y Business Intelligence",
      "Conexión y transformación de datos",
      "Modelado de datos y relaciones",
      "Visualizaciones básicas y avanzadas",
      "Medidas y funciones DAX",
      "Dashboards interactivos",
      "Publicación y compartir reportes",
      "Casos prácticos empresariales",
    ],
    methodology: "Sesiones en vivo con ejercicios prácticos, acceso a material grabado y proyecto final aplicado a tu organización.",
    faqs: [
      {
        question: "¿Necesito conocimientos previos de Excel?",
        answer: "Es recomendable tener conocimientos básicos de Excel, pero no es obligatorio. El curso incluye una introducción a las herramientas necesarias.",
      },
      {
        question: "¿Incluye certificación oficial de Microsoft?",
        answer: "El curso incluye certificado de finalización de SkillUps Academy. Para la certificación oficial Microsoft PL-300 se requiere examen adicional.",
      },
      {
        question: "¿Puedo tomar el curso si no tengo Power BI instalado?",
        answer: "Sí, Power BI Desktop es gratuito y te guiaremos en la instalación. También puedes usar Power BI Service con una cuenta gratuita.",
      },
    ],
  },
  {
    id: "2",
    slug: "marketing-digital-estrategico",
    title: "Marketing Digital Estratégico: De la Visión a la Ejecución",
    category: "Marketing Digital",
    description: "Desarrolla estrategias de marketing digital integrales que generan resultados medibles y sostenibles para tu negocio.",
    level: "Intermedio",
    duration: "32 horas",
    modality: "Híbrido",
    date: "Abril 2026",
    instructor: "Por definir",
    certification: true,
    price: "$1,500 MXN",
    image: "/images/courses/marketing-digital.jpg",
    featured: true,
    objectives: [
      "Diseñar estrategias de marketing digital integrales",
      "Dominar herramientas de publicidad digital",
      "Implementar embudos de conversión efectivos",
      "Medir y optimizar campañas con analítica",
      "Desarrollar estrategias de contenido",
    ],
    content: [
      "Fundamentos del marketing digital",
      "Investigación de mercado y buyer persona",
      "Estrategia de contenido y SEO",
      "Publicidad digital: Google Ads y Meta Ads",
      "Email marketing y automatización",
      "Analítica web y KPIs",
      "Optimización de conversión (CRO)",
      "Estrategia integral y plan de acción",
    ],
    methodology: "Combinación de sesiones en vivo, talleres prácticos y desarrollo de un plan de marketing digital para tu negocio.",
    faqs: [
      {
        question: "¿Es necesario tener un negocio para tomar el curso?",
        answer: "No es necesario. Puedes desarrollar el proyecto final con un negocio propio, uno hipotético o el de tu empleador.",
      },
      {
        question: "¿Incluye herramientas pagadas?",
        answer: "El curso incluye guías para usar versiones gratuitas de las herramientas. Algunas plataformas pueden requerir inversión adicional para prácticas.",
      },
    ],
  },
  {
    id: "3",
    slug: "desarrollo-web-fullstack",
    title: "Desarrollo Web Full Stack: De Cero a Profesional",
    category: "Desarrollo Web",
    description: "Conviértete en desarrollador full stack con tecnologías modernas: React, Node.js, bases de datos y despliegue en la nube.",
    level: "Básico",
    duration: "120 horas",
    modality: "En vivo",
    date: "Mayo 2026",
    instructor: "Por definir",
    certification: true,
    price: "$4,500 MXN",
    image: "/images/courses/fullstack.jpg",
    featured: true,
    objectives: [
      "Dominar HTML, CSS y JavaScript moderno",
      "Desarrollar aplicaciones con React",
      "Crear APIs con Node.js y Express",
      "Gestionar bases de datos SQL y NoSQL",
      "Desplegar aplicaciones en la nube",
      "Implementar autenticación y seguridad",
    ],
    content: [
      "Fundamentos de programación web",
      "HTML5, CSS3 y JavaScript ES6+",
      "React y desarrollo de componentes",
      "Node.js y Express",
      "Bases de datos: PostgreSQL y MongoDB",
      "APIs REST y GraphQL",
      "Autenticación y autorización",
      "Despliegue y DevOps básico",
      "Proyecto final integral",
    ],
    methodology: "Aprendizaje basado en proyectos con sesiones en vivo, código en tiempo real, revisiones de código y mentoría personalizada.",
    faqs: [
      {
        question: "¿Necesito saber programar antes?",
        answer: "No es necesario. El curso parte desde cero y va avanzando progresivamente hasta nivel profesional.",
      },
      {
        question: "¿Cuánto tiempo debo dedicar semanalmente?",
        answer: "Recomendamos 10-15 horas semanales: 4-6 horas de sesiones en vivo y 6-9 horas de práctica y proyectos.",
      },
      {
        question: "¿Incluye apoyo para conseguir trabajo?",
        answer: "Sí, incluye taller de preparación de CV, simulacros de entrevistas y bolsa de trabajo exclusiva para egresados.",
      },
    ],
  },
  {
    id: "4",
    slug: "liderazgo-gestion-equipos",
    title: "Liderazgo y Gestión de Equipos de Alto Rendimiento",
    category: "Soft Skills",
    description: "Desarrolla las competencias de liderazgo necesarias para inspirar, guiar y potenciar equipos de trabajo.",
    level: "Intermedio",
    duration: "24 horas",
    modality: "Presencial",
    date: "Marzo 2026",
    instructor: "Por definir",
    certification: true,
    price: "$1,800 MXN",
    image: "/images/courses/liderazgo.jpg",
    featured: false,
    objectives: [
      "Identificar tu estilo de liderazgo",
      "Desarrollar habilidades de comunicación efectiva",
      "Gestionar conflictos constructivamente",
      "Motivar y desarrollar a tu equipo",
      "Implementar feedback efectivo",
    ],
    content: [
      "Fundamentos del liderazgo",
      "Estilos de liderazgo y autoconocimiento",
      "Comunicación efectiva",
      "Gestión de conflictos",
      "Motivación y engagement",
      "Feedback y coaching",
      "Delegación efectiva",
      "Liderazgo en tiempos de cambio",
    ],
    methodology: "Talleres vivenciales, role-playing, casos de estudio y plan de desarrollo personal de liderazgo.",
    faqs: [
      {
        question: "¿Es solo para líderes con equipo a cargo?",
        answer: "No, es útil para cualquier profesional que quiera desarrollar habilidades de liderazgo, incluso sin equipo directo.",
      },
    ],
  },
  {
    id: "5",
    slug: "excel-avanzado-macros",
    title: "Excel Avanzado y Macros para la Productividad",
    category: "Microsoft Office",
    description: "Domina Excel a nivel profesional: fórmulas avanzadas, tablas dinámicas, macros y automatización de tareas.",
    level: "Avanzado",
    duration: "20 horas",
    modality: "Grabado",
    date: "Disponible ahora",
    instructor: "Por definir",
    certification: true,
    price: "$800 MXN",
    image: "/images/courses/excel.jpg",
    featured: false,
    objectives: [
      "Dominar fórmulas y funciones avanzadas",
      "Crear tablas dinámicas y gráficos",
      "Automatizar tareas con macros VBA",
      "Importar y transformar datos",
      "Crear dashboards en Excel",
    ],
    content: [
      "Repaso de fundamentos",
      "Fórmulas avanzadas: BUSCARV, INDICE, COINCIDIR",
      "Funciones lógicas y de texto",
      "Tablas dinámicas",
      "Gráficos avanzados",
      "Introducción a VBA",
      "Macros y automatización",
      "Power Query básico",
    ],
    methodology: "Video-lecciones grabadas con ejercicios descargables, foros de dudas y evaluaciones prácticas.",
    faqs: [
      {
        question: "¿Necesito una versión específica de Excel?",
        answer: "El curso está diseñado para Excel 2019 y Microsoft 365. Algunas funciones pueden variar en versiones anteriores.",
      },
    ],
  },
  {
    id: "6",
    slug: "diseno-grafico-canva",
    title: "Diseño Gráfico con Canva: Crea Contenido Visual Profesional",
    category: "Diseño Gráfico",
    description: "Aprende a crear diseños profesionales para redes sociales, presentaciones y material corporativo con Canva.",
    level: "Básico",
    duration: "16 horas",
    modality: "En vivo",
    date: "Abril 2026",
    instructor: "Por definir",
    certification: true,
    price: "$600 MXN",
    image: "/images/courses/canva.jpg",
    featured: false,
    objectives: [
      "Dominar la interfaz de Canva",
      "Aplicar principios de diseño visual",
      "Crear contenido para redes sociales",
      "Diseñar presentaciones impactantes",
      "Desarrollar kits de marca",
    ],
    content: [
      "Introducción a Canva",
      "Principios de diseño visual",
      "Tipografía y color",
      "Diseño para redes sociales",
      "Presentaciones efectivas",
      "Branding básico",
      "Animaciones y video",
      "Exportación y formatos",
    ],
    methodology: "Sesiones en vivo con ejercicios prácticos inmediatos y retroalimentación personalizada.",
    faqs: [
      {
        question: "¿Necesito Canva Pro?",
        answer: "No, el curso se puede tomar con la versión gratuita. Se mencionan funciones Pro pero no son requisito.",
      },
    ],
  },
  {
    id: "7",
    slug: "gestion-recursos-humanos",
    title: "Gestión Estratégica de Recursos Humanos",
    category: "Recursos Humanos",
    description: "Desarrolla competencias clave para la gestión estratégica del talento en las organizaciones modernas.",
    level: "Intermedio",
    duration: "36 horas",
    modality: "Híbrido",
    date: "Mayo 2026",
    instructor: "Por definir",
    certification: true,
    price: "$1,600 MXN",
    image: "/images/courses/rrhh.jpg",
    featured: false,
    objectives: [
      "Comprender el rol estratégico de RRHH",
      "Gestionar procesos de reclutamiento y selección",
      "Diseñar planes de capacitación",
      "Implementar evaluaciones de desempeño",
      "Desarrollar políticas de clima organizacional",
    ],
    content: [
      "RRHH estratégico",
      "Reclutamiento y selección",
      "Onboarding efectivo",
      "Capacitación y desarrollo",
      "Evaluación de desempeño",
      "Compensaciones y beneficios",
      "Clima y cultura organizacional",
      "Legislación laboral básica",
    ],
    methodology: "Casos prácticos, role-playing, herramientas digitales y desarrollo de un plan estratégico de RRHH.",
    faqs: [
      {
        question: "¿Es necesario ser licenciado en RRHH?",
        answer: "No, el curso está abierto a cualquier profesional interesado en la gestión de talento humano.",
      },
    ],
  },
  {
    id: "8",
    slug: "contabilidad-finanzas",
    title: "Contabilidad y Finanzas para No Financieros",
    category: "Contabilidad y Finanzas",
    description: "Comprende los fundamentos contables y financieros para tomar mejores decisiones empresariales.",
    level: "Básico",
    duration: "24 horas",
    modality: "Grabado",
    date: "Disponible ahora",
    instructor: "Por definir",
    certification: true,
    price: "$900 MXN",
    image: "/images/courses/contabilidad.jpg",
    featured: false,
    objectives: [
      "Comprender estados financieros básicos",
      "Interpretar balances y resultados",
      "Analizar indicadores financieros",
      "Elaborar presupuestos",
      "Tomar decisiones con información financiera",
    ],
    content: [
      "Introducción a la contabilidad",
      "Estados financieros básicos",
      "Análisis financiero",
      "Costos y presupuestos",
      "Flujo de efectivo",
      "Indicadores clave (KPIs financieros)",
      "Toma de decisiones financieras",
      "Herramientas digitales",
    ],
    methodology: "Video-lecciones con ejemplos prácticos, ejercicios de análisis y casos de estudio empresariales.",
    faqs: [
      {
        question: "¿Necesito conocimientos previos de contabilidad?",
        answer: "No, el curso está diseñado para personas sin formación previa en finanzas o contabilidad.",
      },
    ],
  },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((c) => c.slug === slug);
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter((c) => c.featured);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter((c) => c.category === category);
};

export const courseCategories = [
  "Recursos Humanos",
  "Contabilidad y Finanzas",
  "Análisis de Datos",
  "Microsoft Office",
  "Power BI",
  "Diseño Gráfico",
  "Marketing Digital",
  "Desarrollo Web",
  "Programación",
  "Soft Skills",
];
