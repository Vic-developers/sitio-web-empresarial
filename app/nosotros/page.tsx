import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Quiénes Somos",
  description: "Conoce a SkillUps Academy. Combinamos conocimiento, tecnología y creatividad para transformar personas y organizaciones.",
};

const values = [
  { title: "Innovación", description: "Buscamos constantemente nuevas formas de crear valor.", icon: Lightbulb },
  { title: "Excelencia", description: "Cada proyecto refleja nuestro compromiso con la calidad.", icon: Shield },
  { title: "Colaboración", description: "Trabajamos juntos con nuestros clientes y equipos.", icon: Users },
  { title: "Integridad", description: "Actuamos con transparencia y ética profesional.", icon: Heart },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 circuit-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
            Nosotros
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6">
            Combinamos conocimiento, tecnología y{" "}
            <span className="text-gradient-teal">creatividad</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Somos una empresa que desarrolla personas, tecnología y organizaciones.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Misión</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Impulsar el desarrollo profesional y organizacional mediante soluciones integrales de capacitación, tecnología y transformación digital.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Visión</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ser la plataforma líder en transformación digital, reconocida por nuestra capacidad de conectar personas, procesos y tecnología.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeader
            badge="Nuestros valores"
            title="Lo que nos define"
            description="Los principios que guían cada decisión y proyecto."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Metodología"
            title="Cómo trabajamos"
            description="Nuestro enfoque combina las mejores prácticas de la industria."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { step: "01", title: "Diagnóstico", description: "Analizamos tu situación actual y objetivos." },
              { step: "02", title: "Diseño", description: "Creamos una solución personalizada." },
              { step: "03", title: "Implementación", description: "Ejecutamos con seguimiento continuo." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-display font-bold text-teal-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
