import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Users, GraduationCap, Rocket, ArrowRight, CheckCircle, Award, BookOpen, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría | Transformación Organizacional",
  description: "Transformamos la forma en que tu organización trabaja. Consultoría organizacional, LMS y transformación digital.",
};

const consultingServices = [
  {
    title: "Consultoría Organizacional",
    description: "Clima organizacional, manuales, políticas, perfiles, reclutamiento y gestión del talento.",
    icon: Users,
    href: "/consultoria/organizacional",
  },
  {
    title: "Consultoría LMS",
    description: "Pedagogía, tecnología, diseño instruccional y analítica educativa.",
    icon: GraduationCap,
    href: "/consultoria/lms",
  },
  {
    title: "Transformación Digital",
    description: "Diagnóstico, mapeo de procesos, implementación y optimización.",
    icon: Rocket,
    href: "/consultoria/transformacion-digital",
  },
];

const expertise = [
  { icon: Award, title: "Experiencia", description: "10+ años transformando organizaciones" },
  { icon: BookOpen, title: "Metodología", description: "Procesos probados y documentados" },
  { icon: Target, title: "Resultados", description: "Impacto medible y sostenible" },
];

export default function ConsultoriaPage() {
  return (
    <>
      {/* Hero - Estilo Consultoría: Profesional y serio */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 mb-6">
              <Users className="w-4 h-4" />
              SkillUps Consultoría
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Transformamos la forma en que tu organización{" "}
              <span className="text-slate-700">trabaja</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Consultoría organizacional, LMS y transformación digital para impulsar tu empresa con estrategia y experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultoria/transformacion-digital">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Solicitar diagnóstico
                </Button>
              </Link>
              <Link href="/consultoria/organizacional">
                <Button variant="outline" size="lg">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Servicios */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Servicios de consultoría"
            title="Expertos en transformación organizacional"
            description="Acompañamos a tu organización en cada etapa del proceso de transformación."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {consultingServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Proceso */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="Proceso de consultoría"
            title="Metodología probada"
            description="Un enfoque estructurado para garantizar resultados."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Diagnóstico", description: "Analizamos tu situación actual." },
              { step: "02", title: "Estrategia", description: "Diseñamos el plan de acción." },
              { step: "03", title: "Implementación", description: "Ejecutamos el plan." },
              { step: "04", title: "Optimización", description: "Medimos y mejoramos." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beneficios */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Beneficios de nuestra consultoría
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro enfoque integral garantiza resultados medibles y sostenibles para tu organización.
              </p>
              <ul className="space-y-3">
                {[
                  "Diagnóstico organizacional completo",
                  "Plan de acción personalizado",
                  "Acompañamiento continuo",
                  "Medición de resultados",
                  "Optimización de procesos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { label: "Satisfacción del cliente", value: 95 },
                  { label: "Retención de talento", value: 88 },
                  { label: "Mejora en productividad", value: 92 },
                  { label: "Reducción de costos", value: 85 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <span className="text-gray-500">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-600 rounded-full"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-slate-900">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿Necesitas asesoría experta?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de consultores está listo para ayudarte a transformar tu organización.
          </p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Solicitar consulta
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
