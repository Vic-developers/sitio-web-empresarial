import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Gracias | SkillUps Academy",
  description: "Gracias por contactar a SkillUps Academy.",
};

export default function GraciasPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center max-w-2xl">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-teal-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          ¡Gracias por contactarnos!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Hemos recibido tu mensaje correctamente. Un asesor se pondrá en contacto contigo en menos de 24 horas hábiles.
        </p>
        <div className="bg-teal-50 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">¿Qué sigue?</h2>
          <ul className="text-gray-600 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></span>
              Revisaremos tu solicitud
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></span>
              Un asesor te contactará por email o WhatsApp
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2"></span>
              Agendaremos una llamada si es necesario
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Volver al inicio
            </Button>
          </Link>
          <a
            href="https://wa.me/18495774524?text=Hola%2C%20acabo%20de%20enviar%20un%20mensaje%20y%20tengo%20una%20duda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
