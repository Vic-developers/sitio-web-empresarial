import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integraciones y APIs | SkillUps Tech",
  description: "Conectamos tus sistemas para un flujo de datos eficiente. Google Workspace, Microsoft 365, Moodle, CRM, APIs, bases de datos y más.",
};

const integrations = [
  "Google Workspace",
  "Microsoft 365",
  "Moodle",
  "CRM",
  "APIs",
  "Bases de datos",
  "Formularios",
  "Email",
  "WhatsApp",
  "Dashboards",
];

export default function IntegracionesPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Tech", href: "/tech" }, { label: "Integraciones" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Integraciones y APIs</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Conectamos tus sistemas para un flujo de datos eficiente.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Ecosistema conectado" title="Integramos tus herramientas" description="Creamos conexiones robustas entre tus sistemas para maximizar la eficiencia." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {integrations.map((integration) => (
              <Card key={integration} className="p-4 text-center">
                <span className="font-medium text-slate-900">{integration}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas conectar sistemas?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Solicitar integración</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
