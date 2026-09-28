import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FileText, Video, Download, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Recursos | SkillUps Academy",
  description: "Recursos gratuitos: guías, plantillas, webinars y herramientas para tu desarrollo profesional.",
};

const resources = [
  { title: "Guía de Power BI", type: "Guía", icon: FileText, category: "Datos" },
  { title: "Plantilla de Dashboard", type: "Plantilla", icon: Download, category: "Datos" },
  { title: "Webinar: Moodle Básico", type: "Video", icon: Video, category: "Moodle" },
  { title: "Guía de Email Marketing", type: "Guía", icon: FileText, category: "Marketing" },
  { title: "Plantilla de Contenido", type: "Plantilla", icon: Download, category: "Marketing" },
  { title: "Guía de Automatización", type: "Guía", icon: FileText, category: "Automatización" },
];

export default function RecursosPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Recursos" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Recursos Gratuitos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Guías, plantillas y herramientas para impulsar tu desarrollo profesional.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.title} hover className="p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge variant="primary" size="sm">{resource.type}</Badge>
                      <h3 className="font-semibold text-slate-900 mt-2 group-hover:text-teal-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-500">{resource.category}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
