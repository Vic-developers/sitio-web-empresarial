import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Moodle vs Canvas: ¿Cuál elegir? | SkillUps Academy",
  description: "Comparativa completa entre Moodle y Canvas para elegir la mejor plataforma LMS para tu institución.",
};

export default function BlogMoodleVsCanvasPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Moodle vs Canvas" },
            ]}
          />
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-400 mb-6">
              LMS
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Moodle vs Canvas: ¿Cuál elegir?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Comparativa completa entre las dos plataformas LMS más populares del mercado.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Moodle</h2>
            <p className="text-gray-600 mb-4">
              Moodle es una plataforma de código abierto, altamente personalizable y con una gran comunidad de usuarios. Ideal para instituciones que buscan control total sobre su plataforma.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Código abierto y gratuito</li>
              <li>Altamente personalizable</li>
              <li>Gran comunidad de usuarios</li>
              <li>Requiere servidor propio</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Canvas</h2>
            <p className="text-gray-600 mb-4">
              Canvas es una plataforma comercial con una interfaz moderna y fácil de usar. Ideal para instituciones que buscan una solución llave en mano.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Interfaz moderna e intuitiva</li>
              <li>Soporte técnico incluido</li>
              <li>Integraciones con terceros</li>
              <li>Requiere suscripción mensual</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusión</h2>
            <p className="text-gray-600 mb-4">
              La elección depende de tus necesidades. Si buscas control total y tienes recursos técnicos, Moodle es ideal. Si prefieres una solución fácil de usar con soporte, Canvas es mejor.
            </p>
          </div>

          <div className="mt-12 p-6 bg-teal-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de consultores puede ayudarte a elegir la plataforma perfecta para tu institución.
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
