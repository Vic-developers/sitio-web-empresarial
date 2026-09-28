"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const messages = [
  {
    id: 1,
    title: "¿Tu equipo pierde horas en tareas que podrían automatizarse?",
    subtitle: "Cada hora invertida en procesos manuales es hora perdida en crecimiento. Automatiza y libera el potencial de tu equipo.",
  },
  {
    id: 2,
    title: "¿Tu competencia ya se digitalizó mientras tú te quedas atrás?",
    subtitle: "La transformación digital no es opcional, es supervivencia. No dejes que tu organización se quede obsoleta.",
  },
  {
    id: 3,
    title: "¿Inviertes en capacitación sin ver resultados reales?",
    subtitle: "La capacitación sin estrategia es dinero tirado. Necesitas programas que generen impacto medible y transformación real.",
  },
  {
    id: 4,
    title: "¿Tus empleados están desmotivados y sin habilidades para el futuro?",
    subtitle: "El talento sin desarrollo se estanca y se va. Invierte en tu equipo y retén a los mejores con oportunidades reales de crecimiento.",
  },
  {
    id: 5,
    title: "¿No tienes presencia digital o tu plataforma es obsoleta?",
    subtitle: "Tu presencia digital es tu primera impresión. Una plataforma profesional puede ser la diferencia entre ganar o perder clientes.",
  },
  {
    id: 6,
    title: "¿Los procesos de tu empresa son lentos, costosos y propensos a errores?",
    subtitle: "Cada error cuesta tiempo y dinero. Optimiza tus procesos y reduce costos operativos con la tecnología adecuada.",
  },
];

export function HeroHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-sm font-medium text-red-700 mb-10">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          ¿Te identificas con alguno de estos problemas?
        </div>

        {/* Mensaje con transición suave */}
        <div className="relative h-56 md:h-48 mb-16">
          <div
            key={currentMessage.id}
            className="animate-fade-in-up"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              {currentMessage.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentMessage.subtitle}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/#servicios">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Resolver mi problema
            </Button>
          </Link>
          <Link href="/contacto">
            <Button variant="outline" size="lg">
              Hablar con un experto
            </Button>
          </Link>
        </div>

        {/* Indicadores de carrusel minimalistas */}
        <div className="flex justify-center gap-2 mt-12">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 h-3 bg-red-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
