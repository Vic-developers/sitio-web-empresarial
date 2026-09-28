import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BookOpen, Monitor, FileText, Users, Award, Laptop } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formación Docente | SkillUps Academy",
  description: "Acompañamos a docentes en su desarrollo profesional. Moodle, educación virtual, diseño instruccional, evaluación digital y H5P.",
};

const topics = [
  { title: "Moodle", description: "Plataforma de aprendizaje líder mundial.", icon: Laptop },
  { title: "Educación virtual", description: "Metodologías para la enseñanza en línea.", icon: Monitor },
  { title: "Diseño instruccional", description: "Diseña experiencias de aprendizaje efectivas.", icon: FileText },
  { title: "Evaluación digital", description: "Herramientas para evaluar en entornos virtuales.", icon: Award },
  { title: "Recursos interactivos", description: "Crea contenido atractivo y participativo.", icon: BookOpen },
  { title: "H5P", description: "Contenido interactivo para tu LMS.", icon: Users },
];

export default function FormacionDocentePage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Formación Docente" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Formación Docente</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Acompañamos a docentes en su desarrollo profesional y transformación digital.</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader badge="Desarrollo docente" title="Fortalece tus competencias pedagógicas y digitales" description="Programas especializados para docentes que quieren innovar en su práctica." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} hover className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{topic.title}</h3>
                  <p className="text-slate-600">{topic.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">¿Quieres transformar la formación docente?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">Contáctanos para diseñar un programa personalizado para tu institución.</p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">Transformar la formación docente</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
