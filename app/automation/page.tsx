import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Zap, GitBranch, BarChart3, ArrowRight, CheckCircle, Clock, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import { ROICalculator } from "@/components/ui/ROICalculator";

export const metadata: Metadata = {
  title: "Automation | Automatización de Procesos",
  description: "Automatiza lo que hoy te quita tiempo. Procesos, workflows, scripts, bots, integraciones y dashboards.",
};

const automationServices = [
  {
    title: "Automatización de Procesos",
    description: "Optimiza tus operaciones mediante inteligencia y automatización.",
    icon: Zap,
    href: "/automation/procesos",
  },
  {
    title: "Workflows Digitales",
    description: "Flujos de trabajo que conectan personas, datos y sistemas.",
    icon: GitBranch,
    href: "/automation/workflows",
  },
  {
    title: "Dashboards y Analítica",
    description: "Visualiza tus datos para tomar mejores decisiones.",
    icon: BarChart3,
    href: "/automation/dashboards",
  },
];

const benefits = [
  { icon: Clock, title: "Ahorro de tiempo", description: "Reduce hasta 80% del tiempo en tareas repetitivas" },
  { icon: TrendingUp, title: "Mayor eficiencia", description: "Optimiza recursos y aumenta la productividad" },
  { icon: Target, title: "Menos errores", description: "Elimina errores humanos en procesos críticos" },
];

const flowSteps = [
  { label: "INPUT", description: "Datos de entrada" },
  { label: "AUTOMATIZACIÓN", description: "Procesamiento inteligente" },
  { label: "NOTIFICACIÓN", description: "Alertas y avisos" },
  { label: "DASHBOARD", description: "Visualización" },
  { label: "DECISIÓN", description: "Acción informada" },
];

export default function AutomationPage() {
  return (
    <>
      {/* Hero - Estilo Automation: Dinámico y eficiente */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-200 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
              <Zap className="w-4 h-4" />
              SkillUps Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Automatiza lo que hoy{" "}
              <span className="text-amber-600">te quita tiempo</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Procesos, workflows, scripts, bots, integraciones y dashboards que optimizan tu operación y liberan el potencial de tu equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/automation/procesos">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Automatiza y Crece
                </Button>
              </Link>
              <Link href="/automation/dashboards">
                <Button variant="outline" size="lg">
                  Ver Dashboards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flow visual */}
      <section className="bg-white border-y border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 py-12">
            {flowSteps.map((step, index) => (
              <div key={step.label} className="flex flex-col md:flex-row items-center gap-2">
                <div className="bg-amber-500 text-white px-4 py-3 rounded-lg text-center min-w-[120px]">
                  <div className="font-bold text-xs tracking-wider">{step.label}</div>
                  <div className="text-xs text-amber-100 mt-1">{step.description}</div>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-amber-400 rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="bg-amber-50 border-y border-amber-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
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
            badge="Servicios de automatización"
            title="Soluciones para optimizar tu operación"
            description="Identificamos y automatizamos procesos repetitivos para que tu equipo se enfoque en lo que realmente importa."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {automationServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
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

      {/* Casos de uso */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="Casos de uso"
            title="Automatización para cada área"
            description="Soluciones adaptadas a las necesidades específicas de tu organización."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Automatización administrativa", description: "Optimiza tareas administrativas repetitivas." },
              { title: "Automatización académica", description: "Gestiona procesos académicos automáticamente." },
              { title: "Automatización comercial", description: "Automatiza tu ciclo de ventas." },
              { title: "Automatización de RRHH", description: "Optimiza la gestión de talento humano." },
              { title: "Automatización de reportes", description: "Genera reportes automáticos." },
              { title: "Automatización de comunicaciones", description: "Comunicación automática y personalizada." },
            ].map((case_, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{case_.title}</h3>
                <p className="text-sm text-gray-600">{case_.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI Calculator */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Calcula tu retorno de inversión
              </h2>
              <p className="text-gray-600 mb-6">
                Descubre cuánto podrías ahorrar automatizando tus procesos. Nuestra calculadora te muestra el potencial de ahorro para tu organización.
              </p>
              <ul className="space-y-3">
                {[
                  "Ahorro de tiempo en tareas repetitivas",
                  "Reducción de errores humanos",
                  "Optimización de recursos",
                  "Mayor productividad del equipo",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ROICalculator />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿Listo para automatizar?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tus procesos y te mostraremos cómo la automatización puede transformar tu operación.
          </p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Solicitar diagnóstico
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
