import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workflows Digitales | SkillUps Automation",
  description: "Flujos de trabajo que conectan personas, datos y sistemas. Diseño, automatización, notificaciones e integraciones.",
};

const features = [
  "Diseño de flujos",
  "Automatización",
  "Notificaciones",
  "Integraciones",
  "Colaboración eficiente",
  "Transparencia",
];

export default function WorkflowsPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Automation", href: "/automation" }, { label: "Workflows" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Workflows Digitales</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Flujos de trabajo que conectan personas, datos y sistemas.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Características" title="Optimiza tus flujos de trabajo" description="Diseñamos e implementamos flujos de trabajo digitales que optimizan la colaboración y productividad." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {features.map((feature) => (
              <Card key={feature} className="p-4 text-center">
                <span className="font-medium text-slate-900">{feature}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas optimizar tus workflows?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Optimizar workflows</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
