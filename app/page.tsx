import { HeroHome } from "@/components/heroes/HeroHome";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, GraduationCap, Code, Zap, TrendingUp, MessageCircle, CheckCircle, Users, Award, Clock, Search, Target, Rocket, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Testimonials } from "@/components/ui/Testimonials";
import { AnimatedStats } from "@/components/ui/AnimatedStats";
import { WhySkillUps } from "@/components/ui/WhySkillUps";
import { Accordion } from "@/components/ui/Accordion";
import { Newsletter } from "@/components/ui/Newsletter";

const universes = [
  {
    id: "academy",
    title: "Academy",
    tagline: "Desarrollamos talento.",
    description: "Capacitación empresarial, formación docente y virtualización educativa.",
    icon: GraduationCap,
    href: "/academy",
    items: ["Capacitación empresarial", "Formación docente", "Virtualización", "Cursos por WhatsApp"],
  },
  {
    id: "tech",
    title: "Tech",
    tagline: "Construimos soluciones.",
    description: "Desarrollo web, LMS, sistemas a medida, integraciones y plataformas digitales.",
    icon: Code,
    href: "/tech",
    items: ["Desarrollo web", "LMS", "Sistemas", "Integraciones", "Plataformas digitales"],
  },
  {
    id: "automation",
    title: "Automation",
    tagline: "Optimizamos procesos.",
    description: "Automatización de procesos, workflows digitales, dashboards y analítica.",
    icon: Zap,
    href: "/automation",
    items: ["Procesos", "Workflows", "Dashboards", "Integraciones"],
  },
  {
    id: "growth",
    title: "Growth",
    tagline: "Impulsamos crecimiento.",
    description: "Marketing digital, branding, ventas digitales, email marketing y contenido.",
    icon: TrendingUp,
    href: "/growth",
    items: ["Marketing", "Branding", "Ventas", "Email", "Contenido"],
  },
];

const needs = [
  { id: "aprender", label: "Quiero aprender", solutions: ["Cursos", "Diplomados", "Certificaciones"], href: "https://wa.me/18495774524?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles" },
  { id: "capacitar", label: "Quiero capacitar a mi equipo", solutions: ["Capacitación empresarial", "Programas personalizados"], href: "/academy/capacitacion-empresarial" },
  { id: "plataforma", label: "Quiero crear una plataforma", solutions: ["LMS", "Desarrollo web", "Sistemas a medida"], href: "/tech" },
  { id: "automatizar", label: "Quiero automatizar procesos", solutions: ["Automatización", "Workflows", "Integraciones"], href: "/automation" },
  { id: "marketing", label: "Quiero mejorar mi marketing", solutions: ["Marketing digital", "Branding", "Contenido"], href: "/growth" },
  { id: "transformar", label: "Quiero transformar mi organización", solutions: ["Consultoría", "Transformación digital"], href: "/consultoria" },
];

const processSteps = [
  { icon: Search, title: "Diagnóstico", description: "Analizamos tu situación actual y objetivos." },
  { icon: Target, title: "Estrategia", description: "Diseñamos un plan personalizado." },
  { icon: Rocket, title: "Implementación", description: "Ejecutamos el plan con seguimiento." },
  { icon: BarChart3, title: "Optimización", description: "Medimos resultados y mejoramos." },
];

const faqs = [
  {
    question: "¿Cómo funcionan los cursos y programas?",
    answer: "Nuestros cursos se imparten en modalidad en vivo, grabada o híbrida. Para consultar el catálogo completo, fechas y precios, contáctanos por WhatsApp.",
  },
  {
    question: "¿Las certificaciones son oficiales?",
    answer: "Sí, todos nuestros programas incluyen certificación oficial de SkillUps Academy, reconocida por la industria.",
  },
  {
    question: "¿Ofrecen capacitación para empresas?",
    answer: "Sí, diseñamos programas de capacitación personalizados para organizaciones de cualquier tamaño. Contáctanos para más información.",
  },
  {
    question: "¿Cómo puedo solicitar una propuesta?",
    answer: "Puedes solicitar una propuesta a través de nuestro formulario de contacto o directamente por WhatsApp. Un asesor se pondrá en contacto contigo en menos de 24 horas.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Stats animados */}
      <section className="bg-gray-900">
        <Container>
          <div className="py-12">
            <AnimatedStats />
          </div>
        </Container>
      </section>

      {/* Servicios */}
      <Section id="servicios" className="bg-white">
        <Container>
          <SectionHeader
            badge="Servicios"
            title="Soluciones integrales para tu organización"
            description="Capacitación, tecnología y transformación digital en un solo lugar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {universes.map((universe) => {
              const Icon = universe.icon;
              return (
                <Link key={universe.id} href={universe.href}>
                  <div className="h-full p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-teal-200 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {universe.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">{universe.tagline}</p>
                    <ul className="space-y-2.5">
                      {universe.items.slice(0, 4).map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ¿Por qué SkillUps? */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="¿Por qué SkillUps?"
            title="La diferencia que nos hace únicos"
            description="Descubre por qué las organizaciones eligen SkillUps para su transformación."
          />
          <div className="mt-12">
            <WhySkillUps />
          </div>
        </Container>
      </Section>

      {/* ¿Qué necesitas? */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="¿Qué necesitas?"
            title="Cuéntanos qué quieres lograr"
            description="Te ayudamos a encontrar la solución perfecta para tus objetivos."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {needs.map((need) => (
              <Link key={need.id} href={need.href}>
                <Card hover className="p-6 h-full group">
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {need.label}
                  </h3>
                  <div className="space-y-2">
                    {need.solutions.map((solution) => (
                      <div key={solution} className="text-sm text-gray-500">
                        {solution}
                      </div>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proceso */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="Nuestro proceso"
            title="Cómo trabajamos"
            description="Un enfoque estructurado para garantizar resultados."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Testimonios */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Testimonios"
            title="Lo que dicen nuestros clientes"
            description="Empresas que han transformado sus operaciones con SkillUps."
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* CTA WhatsApp para cursos */}
      <Section className="bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
                  ¿Interesado en nuestros cursos?
                </h2>
                <p className="text-gray-600 mb-6">
                  Consulta nuestro catálogo completo de cursos, talleres y diplomados directamente por WhatsApp. Te enviaremos toda la información y te ayudaremos a elegir el programa perfecto para ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/18495774524?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                      Consultar por WhatsApp
                    </Button>
                  </a>
                  <Link href="/academy/capacitacion-empresarial">
                    <Button variant="outline" size="lg">
                      Capacitación empresarial
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Cursos en vivo" },
                  { icon: Award, label: "Certificación oficial" },
                  { icon: Clock, label: "Horarios flexibles" },
                  { icon: CheckCircle, label: "Soporte continuo" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <Icon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container size="narrow">
          <SectionHeader
            badge="FAQ"
            title="Preguntas frecuentes"
            description="Resolvemos tus dudas más comunes."
          />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-white">
        <Container>
          <Newsletter />
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-gray-900">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            ¿Listo para transformar tu futuro?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            No vendemos cursos, vendemos transformación profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicitar-propuesta">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Solicita tu Diagnóstico Gratuito
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
                Habla con un Experto
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
