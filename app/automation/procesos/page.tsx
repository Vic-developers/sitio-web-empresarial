import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatización de Procesos | SkillUps Automation",
  description: "Optimiza tus operaciones mediante inteligencia y automatización. Administrativa, académica, comercial, RRHH, reportes y comunicaciones.",
};

const cases = [
  { title: "Automatización administrativa", description: "Optimiza tareas administrativas repetitivas." },
  { title: "Automatización académica", description: "Gestiona procesos académicos automáticamente." },
  { title: "Automatización comercial", description: "Automatiza tu ciclo de ventas." },
  { title: "Automatización de RRHH", description: "Optimiza la gestión de talento humano." },
  { title: "Automatización de reportes", description: "Genera reportes automáticos." },
  { title: "Automatización de comunicaciones", description: "Comunicación automática y personalizada." },
];

export default function ProcesosPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Automation", href: "/automation" }, { label: "Procesos" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Automatización de Procesos</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Optimiza tus operaciones mediante inteligencia y automatización.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Casos de uso" title="Soluciones para cada área" description="Identificamos y automatizamos procesos repetitivos en toda tu organización." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cases.map((case_) => (
              <Card key={case_.title} hover className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{case_.title}</h3>
                <p className="text-slate-600">{case_.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres automatizar un proceso?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Automatizar mi proceso</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
