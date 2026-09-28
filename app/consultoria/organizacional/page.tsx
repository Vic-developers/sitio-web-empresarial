import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría Organizacional | SkillUps",
  description: "Clima organizacional, manuales, políticas, perfiles, reclutamiento, selección, talento humano y capacitación.",
};

const services = [
  "Clima organizacional",
  "Manuales",
  "Políticas",
  "Perfiles",
  "Reclutamiento",
  "Selección",
  "Talento humano",
  "Capacitación",
];

export default function OrganizacionalPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Consultoría", href: "/consultoria" }, { label: "Organizacional" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Consultoría Organizacional</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Optimizamos la estructura y cultura de tu organización.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Fortalece tu organización" description="Acompañamos a tu organización en la mejora de procesos, estructura y cultura organizacional." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas consultoría organizacional?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Solicitar diagnóstico</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
