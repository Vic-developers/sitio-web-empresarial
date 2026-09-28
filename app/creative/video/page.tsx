import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Producción Audiovisual | SkillUps Creative",
  description: "Contenido audiovisual que cuenta historias. Video corporativo, animación, motion graphics y edición profesional.",
};

const services = [
  "Video corporativo",
  "Animación",
  "Motion graphics",
  "Edición profesional",
  "Comunicación efectiva",
  "Engagement",
];

export default function VideoPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Creative", href: "/creative" }, { label: "Video" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Producción Audiovisual</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Contenido audiovisual que cuenta historias y conecta con tu audiencia.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Video que conecta" description="Producimos contenido audiovisual profesional que conecta con tu audiencia." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas producción audiovisual?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Producir video</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
