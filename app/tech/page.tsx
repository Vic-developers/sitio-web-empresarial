import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Code, Settings, Laptop, Plug, ArrowRight, CheckCircle, Zap, Shield, Globe, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech | Soluciones Tecnológicas",
  description: "Desarrollo web, sistemas a medida, LMS y plataformas educativas, integraciones y APIs. Construimos la tecnología detrás de tus ideas.",
};

const techServices = [
  {
    title: "Desarrollo Web",
    description: "Sitios corporativos, landing pages, web apps, portales, e-commerce y más.",
    icon: Code,
    href: "/tech/desarrollo-web",
  },
  {
    title: "Sistemas a Medida",
    description: "Software personalizado que se adapta exactamente a tus procesos.",
    icon: Settings,
    href: "/tech/sistemas-a-medida",
  },
  {
    title: "LMS y Plataformas",
    description: "Moodle, Canvas, Chamilo, H5P, SCORM y analítica educativa.",
    icon: Laptop,
    href: "/tech/lms",
  },
  {
    title: "Integraciones",
    description: "Conectamos tus sistemas para un flujo de datos eficiente.",
    icon: Plug,
    href: "/tech/integraciones",
  },
  {
    title: "E-learning",
    description: "Plataformas de aprendizaje en línea con contenido interactivo y seguimiento.",
    icon: GraduationCap,
    href: "/tech/e-learning",
  },
];

const features = [
  { icon: Zap, title: "Rendimiento", description: "Aplicaciones rápidas y optimizadas" },
  { icon: Shield, title: "Seguridad", description: "Protección de datos garantizada" },
  { icon: Globe, title: "Escalabilidad", description: "Crece con tu negocio" },
];

export default function TechPage() {
  return (
    <>
      {/* Hero - Estilo Tech: Oscuro y tecnológico */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern-dark opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
              <Code className="w-4 h-4" />
              SkillUps Tech
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Construimos la tecnología detrás de{" "}
              <span className="text-teal-400">tus ideas</span>.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Desarrollo web, sistemas a medida, plataformas LMS e integraciones que impulsan tu negocio con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solicitar-propuesta">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Impulsa tu Negocio
                </Button>
              </Link>
              <Link href="/tech/desarrollo-web">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
                  Ver Soluciones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900 border-y border-gray-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
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
            badge="Soluciones tecnológicas"
            title="Tecnología que impulsa resultados"
            description="Cuatro áreas de especialización para cubrir todas tus necesidades digitales."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {techServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
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
            badge="Proceso de trabajo"
            title="Cómo construimos tu solución"
            description="Un proceso probado para entregar proyectos de calidad."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Análisis", description: "Entendemos tus necesidades y objetivos." },
              { step: "02", title: "Diseño", description: "Creamos la arquitectura y diseño." },
              { step: "03", title: "Desarrollo", description: "Construimos con tecnología moderna." },
              { step: "04", title: "Lanzamiento", description: "Desplegamos y monitoreamos." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Tecnologías que dominamos
              </h2>
              <p className="text-gray-600 mb-6">
                Trabajamos con las tecnologías más modernas y demandadas del mercado para garantizar la calidad y escalabilidad de tu proyecto.
              </p>
              <ul className="space-y-3">
                {[
                  "React, Next.js, Node.js",
                  "TypeScript, JavaScript",
                  "PostgreSQL, MongoDB",
                  "AWS, Vercel, Docker",
                  "APIs REST, GraphQL",
                ].map((tech, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker"].map((tech, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <span className="font-medium text-gray-900">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-gray-900">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la solución tecnológica perfecta.
          </p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Solicitar propuesta
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
