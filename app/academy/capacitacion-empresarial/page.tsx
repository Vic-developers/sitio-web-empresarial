import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { Building2, Target, TrendingUp, Users, BookOpen, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Capacitación Empresarial | SkillUps Academy",
  description: "Programas de formación diseñados para las necesidades específicas de tu organización. Desarrolla el talento que mueve tu empresa.",
};

const programs = [
  { title: "Programas personalizados", description: "Diseñados a la medida de tus objetivos.", icon: Target },
  { title: "Capacitación por competencias", description: "Desarrolla habilidades específicas.", icon: TrendingUp },
  { title: "Upskilling", description: "Actualiza las habilidades de tu equipo.", icon: Users },
  { title: "Reskilling", description: "Prepara a tu equipo para nuevos retos.", icon: BookOpen },
  { title: "Formación tecnológica", description: "Herramientas digitales para tu empresa.", icon: Building2 },
  { title: "Formación gerencial", description: "Liderazgo y gestión efectiva.", icon: Award },
];

export default function CapacitacionEmpresarialPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 circuit-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400 mb-6">Capacitación Empresarial</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6">
            Desarrolla el talento que{" "}
            <span className="text-gradient-amber">mueve tu organización</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12">
            Programas de formación diseñados para las necesidades específicas de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#formulario">
              <Button variant="primary" size="lg">Solicitar programa empresarial</Button>
            </a>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Programas" title="Soluciones de formación para tu empresa" description="Programas que responden a los objetivos estratégicos de tu organización." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.title} hover className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-slate-600">{program.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="formulario" className="bg-slate-50">
        <Container size="narrow">
          <SectionHeader badge="Solicitud" title="Solicita un programa empresarial" description="Cuéntanos sobre las necesidades de tu organización." />
          <div className="mt-12">
            <ContactForm variant="b2b" title="Solicitud de programa empresarial" description="Un consultor se pondrá en contacto contigo para diseñar una propuesta personalizada." />
          </div>
        </Container>
      </Section>
    </>
  );
}
