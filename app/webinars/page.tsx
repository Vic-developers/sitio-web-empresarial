import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Calendar, Clock, Users, Play, Video } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars | SkillUps Academy",
  description: "Webinars gratuitos y en vivo sobre educación, tecnología, marketing y transformación digital.",
};

const upcomingWebinars = [
  {
    title: "5 Pasos para Transformar tu Organización",
    date: "15 Oct 2026",
    time: "10:00 AM",
    speaker: "Equipo SkillUps",
    spots: 50,
    registered: 32,
  },
  {
    title: "Automatización de Procesos con IA",
    date: "22 Oct 2026",
    time: "2:00 PM",
    speaker: "Equipo SkillUps",
    spots: 100,
    registered: 67,
  },
  {
    title: "Marketing Digital para Pymes",
    date: "29 Oct 2026",
    time: "11:00 AM",
    speaker: "Equipo SkillUps",
    spots: 75,
    registered: 45,
  },
];

const pastWebinars = [
  { title: "Introducción a Moodle", views: 234, duration: "45 min" },
  { title: "Power BI para Principiantes", views: 189, duration: "60 min" },
  { title: "Email Marketing Efectivo", views: 156, duration: "40 min" },
];

export default function WebinarsPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Webinars" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Webinars
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Webinars gratuitos y en vivo sobre educación, tecnología, marketing y transformación digital.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Próximos"
            title="Webinars en Vivo"
            description="Regístrate gratis y aprende de nuestros expertos."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} hover className="p-6">
                <div className="flex items-center gap-2 text-sm text-teal-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{webinar.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{webinar.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{webinar.speaker}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{webinar.registered}/{webinar.spots} registrados</span>
                </div>
                <Button variant="primary" className="w-full">
                  Registrarse Gratis
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            badge="Grabaciones"
            title="Webinars Anteriores"
            description="Accede a grabaciones de webinars anteriores."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} hover className="p-6">
                <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {webinar.views} vistas
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    {webinar.duration}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
            ¿Quieres recibir notificaciones de webinars?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Suscríbete y te avisaremos de los próximos webinars en vivo.
          </p>
          <Link href="/solicitar-propuesta">
            <Button variant="primary" size="lg">
              Suscribirme Gratis
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
