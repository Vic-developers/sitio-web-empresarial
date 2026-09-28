import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DashboardPreview } from "@/components/ui/DashboardPreview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboards y Analítica | SkillUps Automation",
  description: "Power BI, dashboards, KPIs, reportes automáticos, analítica e indicadores de gestión. Visualiza tus datos para tomar mejores decisiones.",
};

const features = [
  "Power BI",
  "Dashboards",
  "KPIs",
  "Reportes automáticos",
  "Analítica",
  "Indicadores de gestión",
];

export default function DashboardsPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Automation", href: "/automation" }, { label: "Dashboards" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Dashboards y Analítica</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Visualiza tus datos para tomar mejores decisiones.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Soluciones" title="Datos que impulsan decisiones" description="Creamos dashboards interactivos que transforman datos en insights accionables." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 mb-12">
            {features.map((feature) => (
              <Card key={feature} className="p-4 text-center">
                <span className="font-medium text-slate-900">{feature}</span>
              </Card>
            ))}
          </div>
          <DashboardPreview />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres visualizar tus datos?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Visualizar mis datos</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
