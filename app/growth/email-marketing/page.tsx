import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Marketing | SkillUps Growth",
  description: "Comunicación efectiva que convierte. Campañas segmentadas, automatización, diseño responsive y analítica.",
};

const services = [
  "Campañas segmentadas",
  "Automatización",
  "Diseño responsive",
  "Analítica",
  "Personalización",
  "ROI alto",
];

export default function EmailMarketingPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Growth", href: "/growth" }, { label: "Email Marketing" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Email Marketing</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Comunicación efectiva que convierte lectores en clientes.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Email que convierte" description="Diseñamos campañas de email marketing que nutren leads y fidelizan clientes." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres mejorar tu email marketing?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Mejorar mi email</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
