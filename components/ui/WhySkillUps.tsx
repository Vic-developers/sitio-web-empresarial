import { CheckCircle, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Resultados medibles",
    description: "Cada programa está diseñado para generar un impacto real y cuantificable en tu organización.",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description: "Profesionales con más de 10 años de experiencia en capacitación, tecnología y consultoría.",
  },
  {
    icon: Award,
    title: "Certificación oficial",
    description: "Todos nuestros programas incluyen certificación reconocida por la industria.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque integral",
    description: "Combinamos capacitación, tecnología y consultoría para transformar organizaciones de manera integral.",
  },
  {
    icon: Shield,
    title: "Soporte continuo",
    description: "Acompañamiento antes, durante y después de cada programa para garantizar el éxito.",
  },
  {
    icon: CheckCircle,
    title: "Metodología probada",
    description: "Procesos documentados y optimizados que garantizan resultados consistentes.",
  },
];

export function WhySkillUps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;
        return (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
