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
  title: "Transformación Digital | SkillUps",
  description: "Diagnóstico, mapeo de procesos, identificación de oportunidades, diseño de solución, implementación, capacitación, medición y optimización.",
};

const process = [
  { step: "Diagnóstico", description: "Analizamos tu situación actual." },
  { step: "Mapeo de procesos", description: "Identificamos tus procesos clave." },
  { step: "Identificación de oportunidades", description: "Detectamos áreas de mejora." },
  { step: "Diseño de solución", description: "Creamos una solución personalizada." },
  { step: "Implementación", description: "Ejecutamos el plan de transformación." },
  { step: "Capacitación", description: "Preparamos a tu equipo." },
  { step: "Medición", description: "Evaluamos resultados." },
  { step: "Optimización", description: "Mejoramos continuamente." },
];

export default function TransformacionDigitalPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Consultoría", href: "/consultoria" }, { label: "Transformación Digital" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Transformación Digital</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Acompañamos tu organización en la era digital.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Proceso" title="Tu hoja de ruta hacia la transformación" description="Guiamos a tu organización en el proceso de transformación digital de manera integral." />
          <div className="mt-12">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Listo para la transformación digital?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Transformar digitalmente</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
