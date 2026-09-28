import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillupsacademy.com";

  const routes = [
    "",
    "/academy",
    "/academy/cursos",
    "/academy/diplomados",
    "/academy/capacitacion-empresarial",
    "/academy/formacion-docente",
    "/academy/virtualizacion",
    "/tech",
    "/tech/desarrollo-web",
    "/tech/sistemas-a-medida",
    "/tech/lms",
    "/tech/integraciones",
    "/automation",
    "/automation/procesos",
    "/automation/workflows",
    "/automation/dashboards",
    "/growth",
    "/growth/marketing-digital",
    "/growth/branding",
    "/growth/ventas-digitales",
    "/growth/email-marketing",
    "/consultoria",
    "/consultoria/organizacional",
    "/consultoria/lms",
    "/consultoria/transformacion-digital",
    "/creative",
    "/creative/diseno-grafico",
    "/creative/video",
    "/creative/contenido",
    "/casos",
    "/recursos",
    "/blog",
    "/nosotros",
    "/contacto",
    "/solicitar-propuesta",
    "/empresas",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
