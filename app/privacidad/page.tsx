import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | SkillUps Academy",
  description: "Aviso de privacidad y protección de datos personales de SkillUps Academy.",
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Aviso de Privacidad
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
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-gray-600 mb-4">
              SkillUps Academy, con domicilio en Santo Domingo, República Dominicana, es el responsable del tratamiento de sus datos personales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Datos que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              Podemos recopilar los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa</li>
              <li>Cargo o puesto</li>
              <li>Información de navegación</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Finalidad del Tratamiento</h2>
            <p className="text-gray-600 mb-4">
              Los datos personales recopilados se utilizan para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Gestionar solicitudes de información</li>
              <li>Enviar comunicaciones comerciales</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Base Legal</h2>
            <p className="text-gray-600 mb-4">
              La base legal para el tratamiento de sus datos es el consentimiento del interesado y la ejecución de un contrato.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Destinatarios</h2>
            <p className="text-gray-600 mb-4">
              Los datos no se cederán a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Derechos</h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Portabilidad de los datos</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Para ejercer estos derechos, puede contactarnos a través de nuestro formulario de contacto o por correo electrónico.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Seguridad</h2>
            <p className="text-gray-600 mb-4">
              Hemos implementado medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la destrucción.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cambios en el Aviso</h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Si tiene preguntas sobre este aviso de privacidad, puede contactarnos:
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
