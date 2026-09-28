import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas Web a Medida | SkillUps Tech",
  description: "Software personalizado que se adapta exactamente a tus procesos. Sistemas administrativos, académicos, portales internos, CRM, ERP y más.",
};

const systems = [
  "Sistemas administrativos",
  "Sistemas académicos",
  "Portales internos",
  "CRM",
  "ERP",
  "Sistemas de gestión",
  "Aplicaciones web",
];

export default function SistemasAMedidaPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Tech", href: "/tech" }, { label: "Sistemas a Medida" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Sistemas Web a Medida</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Construimos exactamente lo que tu organización necesita.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Soluciones" title="Sistemas que se adaptan a ti" description="Software personalizado que optimiza tus procesos y aumenta tu eficiencia." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {systems.map((system) => (
              <Card key={system} hover className="p-6">
                <h3 className="font-semibold text-slate-900">{system}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas un sistema personalizado?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Cuéntanos tu proyecto</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
