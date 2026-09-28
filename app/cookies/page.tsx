import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Cookies | SkillUps Academy",
  description: "Política de cookies de SkillUps Academy.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Política de Cookies" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Política de Cookies
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
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen o funcionen de manera más eficiente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Cómo Utilizamos las Cookies</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Cookies esenciales: Necesarias para el funcionamiento del sitio web</li>
              <li>Cookies de rendimiento: Para analizar el uso del sitio web</li>
              <li>Cookies de funcionalidad: Para recordar sus preferencias</li>
              <li>Cookies de marketing: Para mostrar publicidad relevante</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Tipos de Cookies que Utilizamos</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
              <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período determinado</li>
              <li><strong>Cookies de terceros:</strong> Establecidas por servicios de terceros</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Control de Cookies</h2>
            <p className="text-gray-600 mb-4">
              Puede controlar y eliminar las cookies a través de la configuración de su navegador. Sin embargo, si deshabilita las cookies, algunas partes de nuestro sitio web pueden no funcionar correctamente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cambios en esta Política</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Cualquier cambio será publicado en esta página.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:
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
