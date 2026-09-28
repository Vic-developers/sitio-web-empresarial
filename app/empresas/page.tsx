import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Code, Zap, Users, TrendingUp, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Soluciones para Empresas | SkillUps Academy",
  description: "Una solución para cada reto de tu organización. Capacitación, tecnología, automatización, consultoría, marketing y diseño.",
};

const enterpriseServices = [
  { title: "Capacitación", description: "Desarrolla el talento de tu equipo.", icon: GraduationCap, href: "/academy/capacitacion-empresarial" },
  { title: "Tecnología", description: "Soluciones digitales a medida.", icon: Code, href: "/tech" },
  { title: "Automatización", description: "Optimiza tus procesos.", icon: Zap, href: "/automation" },
  { title: "Consultoría", description: "Transforma tu organización.", icon: Users, href: "/consultoria" },
  { title: "Marketing", description: "Impulsa tu crecimiento.", icon: TrendingUp, href: "/growth" },
  { title: "Diseño", description: "Comunica tu marca.", icon: Palette, href: "/creative" },
];

export default function EmpresasPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 circuit-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
            Soluciones B2B
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6">
            Una solución para cada{" "}
            <span className="text-gradient-teal">reto de tu organización</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12">
            Capacitación, tecnología, automatización, consultoría, marketing y diseño en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#diagnostico">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Solicitar diagnóstico
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Soluciones integrales"
            title="Todo lo que tu empresa necesita"
            description="Un ecosistema completo de servicios para impulsar tu organización."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {enterpriseServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-8 group">
                    <div className="w-14 h-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="diagnostico" className="bg-slate-50">
        <Container size="narrow">
          <SectionHeader
            badge="Diagnóstico empresarial"
            title="Solicita un diagnóstico sin costo"
            description="Analizaremos tu organización y te recomendaremos las mejores soluciones."
          />
          <div className="mt-12">
            <ContactForm
              variant="b2b"
              title="Solicitar diagnóstico empresarial"
              description="Completa el formulario y un consultor se pondrá en contacto contigo."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
