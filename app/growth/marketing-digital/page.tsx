import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Digital | SkillUps Growth",
  description: "Estrategias digitales que conectan con tu audiencia. SEO, SEM, redes sociales, contenido y analítica.",
};

const services = [
  "Estrategia digital",
  "Gestión de campañas",
  "SEO y SEM",
  "Redes sociales",
  "Contenido",
  "Analítica",
];

export default function MarketingDigitalPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Growth", href: "/growth" }, { label: "Marketing Digital" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Marketing Digital</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Estrategias digitales que conectan con tu audiencia y generan resultados.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Marketing que genera resultados" description="Desarrollamos estrategias de marketing digital que generan resultados medibles y sostenibles." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres impulsar tu marketing?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Impulsar mi negocio</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
