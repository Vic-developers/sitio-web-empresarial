import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LMS y Plataformas Educativas | SkillUps Tech",
  description: "Moodle, Canvas, Chamilo, H5P, SCORM, LTI, APIs y analítica educativa. Instalación, configuración, personalización, migración y soporte.",
};

const platforms = ["Moodle", "Canvas", "Chamilo", "H5P", "SCORM", "LTI", "APIs", "Analítica educativa"];

const services = [
  "Instalación",
  "Configuración",
  "Personalización",
  "Migración",
  "Integraciones",
  "Desarrollo de funcionalidades",
  "Automatización",
  "Soporte",
];

export default function LmsPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Tech", href: "/tech" }, { label: "LMS" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">LMS y Plataformas Educativas</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Implementamos y personalizamos plataformas LMS que transforman la experiencia educativa.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Plataformas" title="Tecnologías que dominamos" description="Las plataformas y estándares más utilizados en la industria educativa." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {platforms.map((platform) => (
              <Card key={platform} className="p-4 text-center">
                <span className="font-medium text-slate-900">{platform}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeader badge="Servicios" title="Soluciones completas para tu LMS" description="Desde la instalación hasta el soporte continuo." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {services.map((service) => (
              <Card key={service} className="p-4 text-center">
                <span className="font-medium text-slate-900">{service}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas una plataforma LMS?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Evaluar mi plataforma</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
