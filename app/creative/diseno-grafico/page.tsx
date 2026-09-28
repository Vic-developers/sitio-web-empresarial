import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseño Gráfico | SkillUps Creative",
  description: "Comunicamos tu marca con diseño profesional. Diseño editorial, identidad visual, material promocional y diseño digital.",
};

const services = [
  "Diseño editorial",
  "Identidad visual",
  "Material promocional",
  "Diseño digital",
  "Comunicación visual",
  "Profesionalismo",
];

export default function DisenoGraficoPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Creative", href: "/creative" }, { label: "Diseño Gráfico" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Diseño Gráfico</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Comunicamos tu marca con diseño profesional y atractivo.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Diseño que comunica" description="Creamos piezas gráficas que comunican efectivamente los mensajes de tu marca." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas diseño gráfico?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Ver diseño gráfico</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
