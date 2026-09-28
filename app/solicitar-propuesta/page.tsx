import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Solicitar Propuesta | SkillUps Academy",
  description: "Solicita una propuesta personalizada para tu proyecto. Capacitación, tecnología, automatización, marketing o consultoría.",
};

export default function SolicitarPropuestaPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Solicitar propuesta" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Solicitar propuesta
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container size="narrow">
          <ProposalForm />
        </Container>
      </Section>
    </>
  );
}
