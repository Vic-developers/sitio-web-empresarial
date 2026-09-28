import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { caseStudies, caseCategories } from "@/data/cases";

export const metadata: Metadata = {
  title: "Casos y Proyectos | SkillUps Academy",
  description: "Conoce algunos de los proyectos y casos de éxito de SkillUps Academy.",
};

export default function CasosPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Casos y Proyectos" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Casos y Proyectos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Conoce algunos de los proyectos que hemos realizado.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="primary">Todos</Badge>
            {caseCategories.map((cat) => (
              <Badge key={cat.id} variant="outline">{cat.label}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((case_) => (
              <Card key={case_.id} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">Imagen del caso</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">{case_.industry}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{case_.client}</h3>
                  <p className="text-sm text-slate-600 mb-4">{case_.problem}</p>
                  <div className="flex flex-wrap gap-2">
                    {case_.services.map((service) => (
                      <span key={service} className="px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-600">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">Pronto publicaremos nuestros casos de éxito.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
