import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrendingUp, Palette, ShoppingCart, Mail, ArrowRight, CheckCircle, Users, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth | Marketing y Crecimiento",
  description: "Convierte tu presencia digital en crecimiento. Marketing digital, branding, ventas digitales, email marketing y contenido.",
};

const growthServices = [
  {
    title: "Marketing Digital",
    description: "Estrategias digitales que conectan con tu audiencia y generan resultados.",
    icon: TrendingUp,
    href: "/growth/marketing-digital",
  },
  {
    title: "Branding e Identidad",
    description: "Construimos marcas que conectan y perduran en la mente de tu audiencia.",
    icon: Palette,
    href: "/growth/branding",
  },
  {
    title: "Ventas Digitales",
    description: "Estrategias y herramientas para vender más en el mundo digital.",
    icon: ShoppingCart,
    href: "/growth/ventas-digitales",
  },
  {
    title: "Email Marketing",
    description: "Comunicación efectiva que convierte lectores en clientes.",
    icon: Mail,
    href: "/growth/email-marketing",
  },
];

const metrics = [
  { icon: Users, label: "Alcance", value: "+200%" },
  { icon: Target, label: "Conversión", value: "+150%" },
  { icon: BarChart3, label: "ROI", value: "+300%" },
];

export default function GrowthPage() {
  return (
    <>
      {/* Hero - Estilo Growth: Vibrante y energético */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-rose-200 px-4 py-1.5 text-sm font-medium text-rose-700 mb-6">
              <TrendingUp className="w-4 h-4" />
              SkillUps Growth
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Convierte tu presencia digital en{" "}
              <span className="text-rose-600">crecimiento</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Marketing digital, branding, ventas digitales y contenido que impulsa tu negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/growth/marketing-digital">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Impulsar mi negocio
                </Button>
              </Link>
              <Link href="/growth/branding">
                <Button variant="outline" size="lg">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-rose-50 border-y border-rose-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="text-3xl font-display font-semibold text-rose-600 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
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
            badge="Servicios de crecimiento"
            title="Impulsa tu negocio al siguiente nivel"
            description="Estrategias integrales de marketing y ventas para hacer crecer tu negocio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {growthServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <Card hover className="h-full p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
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

      {/* Estrategia */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Estrategia de crecimiento integral
              </h2>
              <p className="text-gray-600 mb-6">
                Desarrollamos estrategias personalizadas que combinan marketing, ventas y contenido para maximizar el crecimiento de tu negocio.
              </p>
              <ul className="space-y-3">
                {[
                  "Análisis de mercado y competencia",
                  "Estrategia de contenido y SEO",
                  "Campañas de marketing digital",
                  "Optimización de embudo de ventas",
                  "Medición y optimización continua",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { label: "Marketing Digital", value: 85 },
                  { label: "Branding", value: 90 },
                  { label: "Ventas", value: 75 },
                  { label: "Contenido", value: 80 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <span className="text-gray-500">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-500 rounded-full"
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
      <section className="bg-gradient-to-r from-rose-500 to-pink-500">
        <Container className="text-center py-16">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            ¿Listo para crecer?
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio y te ayudaremos a encontrar la estrategia de crecimiento perfecta.
          </p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Solicitar estrategia
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
