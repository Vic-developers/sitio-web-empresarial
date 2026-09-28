import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Award, Building2, BookOpen, Monitor, ArrowRight, MessageCircle, Users, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academy | Capacitación y Formación Profesional",
  description: "Capacitación empresarial, formación docente y virtualización educativa. Desarrolla habilidades que generan oportunidades.",
};

const programs = [
  {
    title: "Capacitación Empresarial",
    description: "Programas de formación diseñados para las necesidades de tu organización.",
    icon: Building2,
    href: "/academy/capacitacion-empresarial",
    color: "bg-navy-50 text-navy-600",
  },
  {
    title: "Formación Docente",
    description: "Acompañamos a docentes en su desarrollo profesional y transformación digital.",
    icon: BookOpen,
    href: "/academy/formacion-docente",
    color: "bg-rust-50 text-rust-600",
  },
  {
    title: "Virtualización",
    description: "Convertimos contenidos en experiencias de aprendizaje digitales efectivas.",
    icon: Monitor,
    href: "/academy/virtualizacion",
    color: "bg-teal-50 text-teal-600",
  },
];

const stats = [
  { value: "500+", label: "Profesionales capacitados" },
  { value: "50+", label: "Empresas atendidas" },
  { value: "100+", label: "Cursos disponibles" },
  { value: "10+", label: "Años de experiencia" },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero - Estilo Academy: Cálido y educativo */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-teal-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-teal-200 px-4 py-1.5 text-sm font-medium text-teal-700 mb-6">
              <GraduationCap className="w-4 h-4" />
              SkillUps Academy
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Desarrollamos el talento que{" "}
              <span className="text-teal-600">mueve tu organización</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Capacitación empresarial, formación docente y virtualización educativa con metodología práctica y certificación oficial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/academy/capacitacion-empresarial">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Capacitación empresarial
                </Button>
              </Link>
              <a
                href="https://wa.me/18495774524?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                  Consultar cursos por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-semibold text-teal-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programas */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Programas de formación"
            title="Soluciones para tu organización"
            description="Programas diseñados para las necesidades específicas de tu empresa o institución."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Link key={program.href} href={program.href}>
                  <Card hover className="h-full p-6 group">
                    <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA WhatsApp para cursos */}
      <Section className="bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
                  ¿Interesado en nuestros cursos?
                </h2>
                <p className="text-gray-600 mb-6">
                  Consulta nuestro catálogo completo de cursos, talleres y diplomados directamente por WhatsApp. Te enviaremos toda la información y te ayudaremos a elegir el programa perfecto para ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/18495774524?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                      Consultar por WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Cursos en vivo" },
                  { icon: Award, label: "Certificación oficial" },
                  { icon: Clock, label: "Horarios flexibles" },
                  { icon: CheckCircle, label: "Soporte continuo" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <Icon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metodología */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Metodología de aprendizaje
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro enfoque combina teoría y práctica para garantizar un aprendizaje significativo y aplicable al mundo real.
              </p>
              <ul className="space-y-4">
                {[
                  "Clases en vivo con instructores expertos",
                  "Material grabado disponible 24/7",
                  "Proyectos prácticos aplicables",
                  "Certificación oficial incluida",
                  "Comunidad de aprendizaje activa",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Comunidad activa" },
                  { icon: Clock, label: "Horarios flexibles" },
                  { icon: Award, label: "Certificación oficial" },
                  { icon: CheckCircle, label: "Soporte continuo" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <Icon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo te ayudará a encontrar el programa perfecto para tus objetivos.
          </p>
          <Link href="/contacto">
            <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Hablar con un asesor
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
