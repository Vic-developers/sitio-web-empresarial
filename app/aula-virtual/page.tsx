import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GraduationCap, Monitor, Users, Award, CheckCircle, Play, BookOpen, BarChart3, Clock, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aula Virtual | SkillUps Academy",
  description: "Plataforma de aprendizaje en línea con contenido interactivo, seguimiento de progreso y certificación. Transforma la educación con tecnología.",
};

const features = [
  { icon: Monitor, title: "Acceso 24/7", description: "Aprende desde cualquier lugar y en cualquier momento" },
  { icon: Play, title: "Contenido Interactivo", description: "Vídeos, quizzes y actividades prácticas" },
  { icon: Users, title: "Comunidad Activa", description: "Foros, chats y trabajo en equipo" },
  { icon: Award, title: "Certificación", description: "Certificados digitales verificables" },
  { icon: BookOpen, title: "Biblioteca Digital", description: "Recursos y materiales de aprendizaje" },
  { icon: BarChart3, title: "Seguimiento", description: "Progreso y reportes en tiempo real" },
];

const benefits = [
  "Aprendizaje a tu propio ritmo",
  "Acceso desde cualquier dispositivo",
  "Contenido actualizado constantemente",
  "Soporte técnico incluido",
  "Integración con sistemas existentes",
  "Personalización de la experiencia",
];

export default function AulaVirtualPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Aula Virtual" },
            ]}
          />
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
              <GraduationCap className="w-4 h-4" />
              Plataforma E-learning
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Aula Virtual
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Plataforma de aprendizaje en línea con contenido interactivo, seguimiento de progreso y certificación.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Características"
            title="Todo lo que necesitas para aprender en línea"
            description="Herramientas completas para crear experiencias de aprendizaje efectivas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Beneficios del Aula Virtual
              </h2>
              <p className="text-gray-600 mb-6">
                La educación en línea ofrece ventajas significativas tanto para instituciones como para estudiantes.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-gray-600 mb-6">
                  Te ayudamos a implementar la plataforma perfecta para tus necesidades.
                </p>
                <Link href="/solicitar-propuesta">
                  <Button variant="primary" size="lg">
                    Solicitar Demo Gratuita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
            ¿Necesitas una plataforma de aprendizaje?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la solución perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicitar-propuesta">
              <Button variant="primary" size="lg">
                Solicitar Demo Gratuita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg">
                Hablar con un Experto
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
