import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ventas Digitales | SkillUps Growth",
  description: "Estrategias para vender más en el mundo digital. Embudo de ventas, CRM, automatización de ventas y analítica.",
};

const services = [
  "Embudo de ventas",
  "CRM",
  "Automatización de ventas",
  "Analítica",
  "Conversiones",
  "Crecimiento",
];

export default function VentasDigitalesPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Growth", href: "/growth" }, { label: "Ventas Digitales" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Ventas Digitales</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Estrategias y herramientas para vender más en el mundo digital.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Servicios" title="Vende más en digital" description="Implementamos procesos y herramientas que optimizan tu embudo de ventas digital." />
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres vender más?</h2>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Vender más</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
