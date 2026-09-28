import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contenido Multimedia | SkillUps Creative",
  description: "Contenido digital que educa y genera engagement. Contenido educativo, infografías, presentaciones y recursos interactivos.",
};

const services = [
  "Contenido educativo",
  "Infografías",
  "Presentaciones",
  "Recursos interactivos",
  "Educación efectiva",
  "Engagement",
];

export default function ContenidoPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Creative", href: "/creative" }, { label: "Contenido" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contenido Multimedia</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Contenido digital que educa, informa y conecta con tu audiencia.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Contenido que educa" description="Creamos contenido multimedia que educa, informa y conecta con tu audiencia." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Necesitas contenido multimedia?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Crear contenido</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
