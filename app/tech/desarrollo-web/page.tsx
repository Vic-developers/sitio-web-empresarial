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
  title: "Desarrollo Web | SkillUps Tech",
  description: "Sitios corporativos, landing pages, web apps, portales, e-commerce, mantenimiento y optimización.",
};

const services = [
  "Sitios corporativos",
  "Landing pages",
  "Web apps",
  "Portales",
  "E-commerce",
  "Mantenimiento",
  "Optimización",
];

const process = [
  { step: "Descubrimiento", description: "Analizamos tus necesidades y objetivos." },
  { step: "UX/UI", description: "Diseñamos la experiencia e interfaz." },
  { step: "Desarrollo", description: "Construimos con tecnología moderna." },
  { step: "Testing", description: "Verificamos calidad y rendimiento." },
  { step: "Lanzamiento", description: "Desplegamos y monitoreamos." },
  { step: "Mantenimiento", description: "Soporte y mejoras continuas." },
];

export default function DesarrolloWebPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Tech", href: "/tech" }, { label: "Desarrollo Web" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Desarrollo Web</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Sitios web y aplicaciones que impulsan tu presencia digital.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Soluciones web para tu negocio" description="Desde sitios corporativos hasta aplicaciones web complejas." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {services.map((service) => (
              <Card key={service} className="p-4 text-center">
                <span className="font-medium text-slate-900">{service}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeader badge="Proceso" title="Cómo trabajamos" description="Un proceso probado para entregar proyectos de calidad." />
          <div className="mt-12">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Tienes un proyecto web?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Solicitar proyecto</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
