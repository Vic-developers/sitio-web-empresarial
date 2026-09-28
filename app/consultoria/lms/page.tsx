import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría LMS | SkillUps",
  description: "Pedagogía, tecnología, diseño instruccional, LMS, analítica educativa y evaluación. Te asesoramos en la selección, implementación y optimización de tu plataforma LMS.",
};

const services = [
  "Pedagogía",
  "Tecnología",
  "Diseño instruccional",
  "LMS",
  "Analítica educativa",
  "Evaluación",
];

export default function ConsultoriaLmsPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Consultoría", href: "/consultoria" }, { label: "LMS" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Consultoría LMS</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Te asesoramos en la selección, implementación y optimización de tu plataforma LMS.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Maximiza tu plataforma educativa" description="Combinamos pedagogía, tecnología y diseño instruccional para optimizar tu LMS." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {services.map((service) => (
              <Card key={service} className="p-4 text-center">
                <span className="font-medium text-slate-900">{service}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas asesoría en LMS?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Consultar mi LMS</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
