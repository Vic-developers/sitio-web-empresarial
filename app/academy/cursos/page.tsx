import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/academy/CourseCard";
import { CourseFilters } from "@/components/academy/CourseFilters";
import { courses } from "@/data/courses";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Catálogo de Cursos | SkillUps Academy",
  description: "Explora nuestro catálogo de cursos: Power BI, Marketing Digital, Desarrollo Web, Excel, Diseño Gráfico y más. Certificación incluida.",
};

export default function CursosPage() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Cursos" },
            ]}
          />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Catálogo de Cursos
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Encuentra el curso perfecto para impulsar tu desarrollo profesional.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50" spacing="sm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CourseFilters />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
