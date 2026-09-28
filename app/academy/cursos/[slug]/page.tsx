import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { getCourseBySlug } from "@/data/courses";
import Link from "next/link";
import { Clock, Users, Award, Calendar, CheckCircle } from "lucide-react";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Curso no encontrado" };
  }

  return {
    title: `${course.title} | SkillUps Academy`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Cursos", href: "/academy/cursos" }, { label: course.title }]} />
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="primary">{course.category}</Badge>
              <Badge variant="secondary">{course.level}</Badge>
              {course.certification && <Badge variant="accent">Certificación incluida</Badge>}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl">{course.description}</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Info cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-500">Duración</div>
                  <div className="font-semibold text-slate-900">{course.duration}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-500">Modalidad</div>
                  <div className="font-semibold text-slate-900">{course.modality}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Calendar className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-500">Fecha</div>
                  <div className="font-semibold text-slate-900">{course.date}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <div className="text-sm text-slate-500">Instructor</div>
                  <div className="font-semibold text-slate-900">{course.instructor}</div>
                </div>
              </div>

              {/* Objectives */}
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Objetivos del curso</h2>
                <ul className="space-y-3">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Contenido del curso</h2>
                <div className="space-y-4">
                  {course.content.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 pt-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Metodología</h2>
                <p className="text-slate-600 leading-relaxed">{course.methodology}</p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Preguntas frecuentes</h2>
                <Accordion items={course.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft">
                  <div className="text-3xl font-display font-bold text-teal-600 mb-2">{course.price}</div>
                  <p className="text-sm text-slate-500 mb-6">Pago único · Acceso de por vida</p>
                  <Link href="/solicitar-propuesta" className="block">
                    <Button variant="primary" size="lg" className="w-full">Inscribirse ahora</Button>
                  </Link>
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <span>Certificación incluida</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <span>Acceso a material grabado</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <span>Soporte del instructor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
