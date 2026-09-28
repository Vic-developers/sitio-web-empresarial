import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtualización Educativa | SkillUps Academy",
  description: "Convertimos tus contenidos en experiencias de aprendizaje digitales. Diagnóstico, diseño instruccional, producción, interactividad, implementación LMS y evaluación.",
};

const process = [
  { step: "Diagnóstico", description: "Analizamos tus contenidos y objetivos de aprendizaje." },
  { step: "Diseño instruccional", description: "Estructuramos la experiencia de aprendizaje." },
  { step: "Producción", description: "Creamos los materiales y recursos digitales." },
  { step: "Interactividad", description: "Agregamos elementos interactivos y multimedia." },
  { step: "Implementación LMS", description: "Configuramos y publicamos en tu plataforma." },
  { step: "Evaluación", description: "Medimos resultados y optimizamos continuamente." },
];

export default function VirtualizacionPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Virtualización" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Virtualización Educativa</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Convertimos tus contenidos en experiencias de aprendizaje digitales.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Proceso" title="Cómo transformamos tus contenidos" description="Un proceso completo para crear experiencias de aprendizaje digitales efectivas." />
          <div className="mt-12">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Listo para virtualizar tus contenidos?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Solicitar presupuesto</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
