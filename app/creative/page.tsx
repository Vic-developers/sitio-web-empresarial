import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PenTool, Video, FileText, ArrowRight, CheckCircle, Palette, Sparkles, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative | Diseño y Contenido",
  description: "Tu marca también comunica lo que eres. Diseño gráfico, producción audiovisual, video, animación y contenido multimedia.",
};

const creativeServices = [
  {
    title: "Diseño Gráfico",
    description: "Comunicamos tu marca con diseño profesional y atractivo.",
    icon: PenTool,
    href: "/creative/diseno-grafico",
  },
  {
    title: "Producción Audiovisual",
    description: "Contenido audiovisual que cuenta historias y conecta.",
    icon: Video,
    href: "/creative/video",
  },
  {
    title: "Contenido Multimedia",
    description: "Contenido digital que educa y genera engagement.",
    icon: FileText,
    href: "/creative/contenido",
  },
];

const features = [
  { icon: Palette, title: "Diseño visual", description: "Identidad visual coherente y atractiva" },
  { icon: Sparkles, title: "Creatividad", description: "Soluciones innovadoras y originales" },
  { icon: Layers, title: "Multimedia", description: "Contenido en múltiples formatos" },
];

export default function CreativePage() {
  return (
    <>
      {/* Hero - Estilo Creative: Creativo y artístico */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-violet-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-6">
              <PenTool className="w-4 h-4" />
              SkillUps Creative
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Tu marca también{" "}
              <span className="text-violet-600">comunica lo que eres</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Diseño gráfico, producción audiovisual y contenido multimedia que conecta con tu audiencia de manera creativa y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/creative/diseno-grafico">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Ver servicios
                </Button>
              </Link>
              <Link href="/solicitar-propuesta">
                <Button variant="outline" size="lg">
                  Solicitar propuesta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-violet-50 border-y border-violet-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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
            badge="Servicios creativos"
            title="Creatividad que comunica y conecta"
            description="Diseño, video y contenido que dan vida a tu marca."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {creativeServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
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

      {/* Portafolio */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="Portafolio"
            title="Nuestros trabajos creativos"
            description="Una muestra de los proyectos que hemos realizado."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Identidad de marca", category: "Branding", color: "from-violet-500 to-purple-500" },
              { title: "Video corporativo", category: "Video", color: "from-rose-500 to-pink-500" },
              { title: "Campaña digital", category: "Marketing", color: "from-teal-500 to-cyan-500" },
              { title: "Diseño editorial", category: "Diseño", color: "from-amber-500 to-orange-500" },
              { title: "Animación 2D", category: "Animación", color: "from-blue-500 to-indigo-500" },
              { title: "Contenido educativo", category: "Contenido", color: "from-green-500 to-emerald-500" },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className={`aspect-video rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                  <span className="text-white/30 text-4xl font-bold">{item.title.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proceso creativo */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Proceso creativo
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro proceso combina creatividad y estrategia para entregar resultados que conectan con tu audiencia.
              </p>
              <ul className="space-y-3">
                {[
                  "Briefing y análisis de necesidades",
                  "Conceptualización y propuesta creativa",
                  "Desarrollo y producción",
                  "Revisión y ajustes finales",
                  "Entrega y soporte",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Branding", value: 90 },
                  { label: "Video", value: 85 },
                  { label: "Diseño", value: 95 },
                  { label: "Contenido", value: 88 },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center border border-violet-100">
                    <div className="text-2xl font-display font-semibold text-violet-600 mb-1">
                      {item.value}%
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-violet-500 to-purple-500">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿Tienes un proyecto creativo?
          </h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
            Cuéntanos tu idea y la haremos realidad con diseño y creatividad.
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
