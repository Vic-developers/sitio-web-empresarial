import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Términos y Condiciones | SkillUps Academy",
  description: "Términos y condiciones de uso del sitio web de SkillUps Academy.",
};

export default function TerminosPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Términos y Condiciones" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Última actualización: {new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso del Sitio Web</h2>
            <p className="text-gray-600 mb-4">
              Este sitio web está destinado a proporcionar información sobre nuestros servicios de capacitación, tecnología y consultoría. Usted se compromete a utilizar el sitio web de manera legal y ética.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Propiedad Intelectual</h2>
            <p className="text-gray-600 mb-4">
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de SkillUps Academy o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-4">
              SkillUps Academy no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar este sitio web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Enlaces a Terceros</h2>
            <p className="text-gray-600 mb-4">
              Este sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. No tenemos control sobre el contenido de estos sitios y no asumimos ninguna responsabilidad por ellos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Modificaciones</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en esta página.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Ley Aplicable</h2>
            <p className="text-gray-600 mb-4">
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de la República Dominicana.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Email: contacto@skillupsacademy.com</li>
              <li>Teléfono: +1 (849) 577-4524</li>
              <li>Dirección: Santo Domingo, República Dominicana</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
