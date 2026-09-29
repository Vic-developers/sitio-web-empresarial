import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Check, Star, Users, Zap, Crown } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membresías | SkillUps Academy",
  description: "Planes de membresía para acceso ilimitado a cursos, recursos y soporte prioritario.",
};

const plans = [
  {
    name: "Básico",
    price: "RD$1,500",
    period: "/mes",
    description: "Acceso a cursos básicos y recursos",
    features: [
      "Acceso a 5 cursos",
      "Recursos descargables",
      "Comunidad de estudiantes",
      "Soporte por email",
    ],
    cta: "Comenzar Ahora",
    popular: false,
    icon: Star,
  },
  {
    name: "Profesional",
    price: "RD$3,500",
    period: "/mes",
    description: "Acceso completo a todos los cursos",
    features: [
      "Acceso ilimitado a cursos",
      "Certificados incluidos",
      "Soporte prioritario",
      "Webinars en vivo",
      "Descargas ilimitadas",
    ],
    cta: "Elegir Profesional",
    popular: true,
    icon: Zap,
  },
  {
    name: "Empresarial",
    price: "RD$9,500",
    period: "/mes",
    description: "Solución completa para tu equipo",
    features: [
      "Todo lo de Profesional",
      "Hasta 10 usuarios",
      "Reportes de progreso",
      "Soporte dedicado",
      "Contenido personalizado",
    ],
    cta: "Contactar Ventas",
    popular: false,
    icon: Crown,
  },
];

export default function MembresiasPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Membresías" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Membresías
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Planes de membresía para acceso ilimitado a cursos, recursos y soporte prioritario.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Planes"
            title="Elige el plan perfecto para ti"
            description="Acceso ilimitado a todos nuestros cursos y recursos."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 relative ${plan.popular ? "border-2 border-teal-500 shadow-xl" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/solicitar-propuesta" className="block">
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
            ¿Tienes preguntas sobre los planes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a elegir el plan perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Hablar con un Asesor
              </Button>
            </Link>
            <a href="https://wa.me/18495774524" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                WhatsApp
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
