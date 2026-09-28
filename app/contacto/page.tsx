import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Hablar con SkillUps",
  description: "Contacta a SkillUps Academy. WhatsApp, correo, redes sociales. Estamos listos para ayudarte.",
};

const contactOptions = [
  { label: "Soy estudiante", value: "estudiante" },
  { label: "Soy empresa", value: "empresa" },
  { label: "Necesito tecnología", value: "tecnologia" },
  { label: "Necesito automatización", value: "automatizacion" },
  { label: "Necesito consultoría", value: "consultoria" },
  { label: "Tengo otro proyecto", value: "otro" },
];

export default function ContactoPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Hablemos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Cuéntanos sobre tu proyecto o necesidad. Estamos listos para ayudarte.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/18495774524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">WhatsApp</div>
                    <div className="text-slate-500">+52 (123) 456-7890</div>
                  </div>
                </a>
                <a
                  href="mailto:contacto@skillupsacademy.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Correo electrónico</div>
                    <div className="text-slate-500">contacto@skillupsacademy.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Ubicación</div>
                    <div className="text-slate-500">Ciudad de México, México</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-teal-50 border border-teal-200">
                <h3 className="font-semibold text-teal-900 mb-2">Horario de atención</h3>
                <p className="text-teal-700">Lunes a Viernes: 9:00 AM - 6:00 PM (CDMX)</p>
              </div>
            </div>

            <div>
              <ContactForm
                title="Envíanos un mensaje"
                description="Completa el formulario y te responderemos en menos de 24 horas."
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
