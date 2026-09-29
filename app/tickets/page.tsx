import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Ticket, Clock, CheckCircle, AlertCircle, MessageSquare, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistema de Tickets | SkillUps Academy",
  description: "Sistema de soporte y seguimiento de solicitudes. Crea tickets, sigue su progreso y recibe asistencia personalizada.",
};

const ticketStatuses = [
  { icon: Clock, label: "Pendiente", color: "text-yellow-600 bg-yellow-50", count: 3 },
  { icon: AlertCircle, label: "En Progreso", color: "text-blue-600 bg-blue-50", count: 5 },
  { icon: CheckCircle, label: "Resuelto", color: "text-green-600 bg-green-50", count: 12 },
];

const recentTickets = [
  { id: "TK-001", title: "Problema con acceso al curso", status: "En Progreso", date: "Hace 2 horas" },
  { id: "TK-002", title: "Solicitud de certificado", status: "Pendiente", date: "Hace 5 horas" },
  { id: "TK-003", title: "Duda sobre contenido", status: "Resuelto", date: "Hace 1 día" },
];

export default function TicketsPage() {
  return (
    <>
      <section className="bg-gray-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Sistema de Tickets" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Sistema de Tickets
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Crea tickets, sigue su progreso y recibe asistencia personalizada.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            badge="Soporte"
            title="¿Cómo podemos ayudarte?"
            description="Crea un ticket y nuestro equipo te asistirá en menos de 24 horas."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {ticketStatuses.map((status, index) => {
              const Icon = status.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${status.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{status.label}</h3>
                  <p className="text-2xl font-bold text-gray-900">{status.count}</p>
                  <p className="text-sm text-gray-500">tickets</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Crear Nuevo Ticket
              </h2>
              <Card className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      placeholder="Describe brevemente tu problema"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none bg-white">
                      <option value="">Seleccionar categoría</option>
                      <option value="acceso">Problema de acceso</option>
                      <option value="contenido">Duda sobre contenido</option>
                      <option value="certificado">Solicitud de certificado</option>
                      <option value="pago">Problema de pago</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descripción
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe tu problema en detalle..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none resize-none"
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full" icon={<Ticket className="w-5 h-5" />}>
                    Crear Ticket
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
                Tickets Recientes
              </h2>
              <div className="space-y-4">
                {recentTickets.map((ticket, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{ticket.id}</p>
                        <h3 className="font-semibold text-gray-900">{ticket.title}</h3>
                        <p className="text-sm text-gray-500">{ticket.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.status === "Resuelto" ? "bg-green-100 text-green-700" :
                        ticket.status === "En Progreso" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
            ¿Necesitas ayuda inmediata?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de soporte está disponible para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/18495774524" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" icon={<MessageSquare className="w-5 h-5" />}>
                WhatsApp
              </Button>
            </a>
            <Link href="/contacto">
              <Button variant="outline" size="lg" icon={<Mail className="w-5 h-5" />}>
                Enviar Email
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
