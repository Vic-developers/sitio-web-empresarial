"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "¿Qué necesitas?",
    options: [
      "Capacitación",
      "Tecnología",
      "Automatización",
      "Marketing",
      "Consultoría",
      "Diseño",
      "Otro",
    ],
  },
  {
    id: 2,
    title: "Cuéntanos sobre tu proyecto",
    fields: ["Descripción", "Objetivos", "Alcance"],
  },
  {
    id: 3,
    title: "Información de contacto",
    fields: ["Nombre", "Email", "Teléfono", "Empresa"],
  },
  {
    id: 4,
    title: "Presupuesto y plazo",
    fields: ["Presupuesto estimado", "Plazo deseado"],
  },
];

export function ProposalForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-teal-500" />
        </div>
        <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
          ¡Propuesta enviada!
        </h3>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Gracias por tu interés en SkillUps Academy. Nuestro equipo revisará tu solicitud
          y te contactaremos en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Paso {currentStep} de {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {currentStep === 1 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              {steps[0].title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps[0]?.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedOption === option
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-200 hover:border-teal-300 text-slate-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              {steps[1].title}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Descripción del proyecto
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all resize-none"
                  placeholder="Describe tu proyecto o necesidad..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Objetivos
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all resize-none"
                  placeholder="¿Qué quieres lograr?"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              {steps[2].title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  placeholder="+52 (123) 456-7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  placeholder="Nombre de la empresa"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              {steps[3].title}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Presupuesto estimado
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all bg-white">
                  <option value="">Seleccionar rango</option>
                  <option value="5k-10k">$5,000 - $10,000 MXN</option>
                  <option value="10k-25k">$10,000 - $25,000 MXN</option>
                  <option value="25k-50k">$25,000 - $50,000 MXN</option>
                  <option value="50k-100k">$50,000 - $100,000 MXN</option>
                  <option value="100k+">$100,000+ MXN</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Plazo deseado
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all bg-white">
                  <option value="">Seleccionar plazo</option>
                  <option value="1-2">1-2 meses</option>
                  <option value="3-4">3-4 meses</option>
                  <option value="5-6">5-6 meses</option>
                  <option value="6+">6+ meses</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 1}
          icon={<ChevronLeft className="w-5 h-5" />}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={currentStep === 1 && !selectedOption}
          icon={<ChevronRight className="w-5 h-5" />}
          iconPosition="right"
        >
          {currentStep === steps.length ? "Enviar propuesta" : "Siguiente"}
        </Button>
      </div>
    </div>
  );
}
