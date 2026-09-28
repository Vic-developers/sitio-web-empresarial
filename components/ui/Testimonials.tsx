import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SkillUps Academy transformó la forma en que capacitamos a nuestro equipo. La calidad de los programas y el soporte son excepcionales.",
    author: "María González",
    role: "Directora de RRHH",
    company: "Empresa Tecnológica",
    rating: 5,
  },
  {
    quote: "La automatización de procesos nos ahorró más de 20 horas semanales. La inversión se recuperó en menos de 3 meses.",
    author: "Carlos Rodríguez",
    role: "Gerente de Operaciones",
    company: "Servicios Financieros",
    rating: 5,
  },
  {
    quote: "El desarrollo de nuestra plataforma LMS fue impecable. El equipo entendió perfectamente nuestras necesidades.",
    author: "Ana Martínez",
    role: "Directora Académica",
    company: "Institución Educativa",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
          <Quote className="w-8 h-8 text-teal-200 mb-4" />
          <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
            <div className="text-sm text-gray-400">{testimonial.company}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
