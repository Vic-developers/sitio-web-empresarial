import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guía de Automatización Empresarial | SkillUps Academy",
  description: "Aprende a automatizar procesos empresariales para aumentar la eficiencia y reducir costos. Guía completa con ejemplos prácticos.",
};

export default function BlogAutomatizacionPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Guía de Automatización Empresarial" },
            ]}
          />
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
              Automatización
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Guía de Automatización Empresarial
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Aprende a automatizar procesos empresariales para aumentar la eficiencia y reducir costos.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">¿Qué es la Automatización Empresarial?</h2>
            <p className="text-gray-600 mb-4">
              La automatización empresarial es el uso de tecnología para realizar tareas repetitivas de manera automática, reduciendo errores y liberando tiempo para actividades más estratégicas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Beneficios de la Automatización</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Reducción de costos operativos</li>
              <li>Mayor eficiencia y productividad</li>
              <li>Reducción de errores humanos</li>
              <li>Mejor experiencia del cliente</li>
              <li>Escalabilidad del negocio</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Procesos que Puedes Automatizar</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Facturación y contabilidad</li>
              <li>Gestion de inventarios</li>
              <li>Atención al cliente</li>
              <li>Marketing por email</li>
              <li>Recursos humanos</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Herramientas Recomendadas</h2>
            <p className="text-gray-600 mb-4">
              Existen muchas herramientas para automatizar procesos. Algunas de las más populares incluyen Zapier, Make, y soluciones personalizadas con APIs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusión</h2>
            <p className="text-gray-600 mb-4">
              La automatización empresarial no es opcional, es una necesidad para mantenerse competitivo. Comienza con procesos pequeños y escala gradualmente.
            </p>
          </div>

          <div className="mt-12 p-6 bg-teal-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Necesitas ayuda con la automatización?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos puede ayudarte a identificar y automatizar procesos en tu empresa.
            </p>
            <Link href="/solicitar-propuesta">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Solicitar consulta gratuita
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
