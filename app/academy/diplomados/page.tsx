import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Award, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diplomados | SkillUps Academy",
  description: "Programas de especialización para profundizar en áreas estratégicas. Certificación oficial incluida.",
};

const diplomados = [
  {
    title: "Diplomado en Transformación Digital",
    description: "Lidera la transformación digital de tu organización con estrategias integrales.",
    duration: "120 horas",
    modality: "Híbrido",
  },
  {
    title: "Diplomado en Business Intelligence",
    description: "Domina las herramientas y metodologías para la toma de decisiones basada en datos.",
    duration: "100 horas",
    modality: "En vivo",
  },
  {
    title: "Diplomado en Gestión del Talento Humano",
    description: "Desarrolla competencias estratégicas para la gestión del capital humano.",
    duration: "80 horas",
    modality: "Híbrido",
  },
];

export default function DiplomadosPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Diplomados" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Diplomados</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Programas de especialización con certificación oficial.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Especialización" title="Profundiza en áreas estratégicas" description="Diplomados diseñados para profesionales que quieren ir más allá." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {diplomados.map((dip) => (
              <Card key={dip.title} hover className="p-8">
                <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{dip.title}</h3>
                <p className="text-slate-600 mb-4">{dip.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{dip.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />{dip.modality}</span>
                </div>
                <Link href="/solicitar-propuesta">
                  <Button variant="primary" className="w-full">Más información</Button>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
