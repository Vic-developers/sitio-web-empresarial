export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  services: string[];
  result: string;
  image: string;
  category: "academy" | "tech" | "automation" | "growth" | "consultoria" | "creative";
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "caso-placeholder-1",
    client: "Cliente por definir",
    industry: "Tecnología",
    problem: "Descripción del problema del cliente por definir.",
    solution: "Descripción de la solución implementada por definir.",
    services: ["Desarrollo Web", "LMS"],
    result: "Resultados por definir.",
    image: "/images/cases/caso-1.jpg",
    category: "tech",
    featured: true,
  },
  {
    id: "2",
    slug: "caso-placeholder-2",
    client: "Cliente por definir",
    industry: "Educación",
    problem: "Descripción del problema del cliente por definir.",
    solution: "Descripción de la solución implementada por definir.",
    services: ["Capacitación Empresarial", "Virtualización"],
    result: "Resultados por definir.",
    image: "/images/cases/caso-2.jpg",
    category: "academy",
    featured: true,
  },
  {
    id: "3",
    slug: "caso-placeholder-3",
    client: "Cliente por definir",
    industry: "Servicios Financieros",
    problem: "Descripción del problema del cliente por definir.",
    solution: "Descripción de la solución implementada por definir.",
    services: ["Automatización de Procesos", "Dashboards"],
    result: "Resultados por definir.",
    image: "/images/cases/caso-3.jpg",
    category: "automation",
    featured: true,
  },
];

export const getCaseBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((c) => c.slug === slug);
};

export const getFeaturedCases = (): CaseStudy[] => {
  return caseStudies.filter((c) => c.featured);
};

export const getCasesByCategory = (category: string): CaseStudy[] => {
  return caseStudies.filter((c) => c.category === category);
};

export const caseCategories = [
  { id: "academy", label: "Academy" },
  { id: "tech", label: "Tech" },
  { id: "automation", label: "Automation" },
  { id: "growth", label: "Growth" },
  { id: "consultoria", label: "Consultoría" },
  { id: "creative", label: "Creative" },
];
