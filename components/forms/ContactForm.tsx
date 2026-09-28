"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export interface ContactFormProps {
  variant?: "default" | "compact" | "b2b";
  title?: string;
  description?: string;
}

interface FormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export function ContactForm({ variant = "default", title, description }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.service) {
      newErrors.service = "Selecciona un servicio";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-teal-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-slate-600">
          Gracias por contactarnos. Te responderemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft">
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
          {description && <p className="text-slate-600">{description}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
              } focus:outline-none`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
              } focus:outline-none`}
              placeholder="tu@correo.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {variant === "b2b" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Empresa *
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-teal-500/20 focus:outline-none transition-all"
                placeholder="Nombre de la empresa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tamaño de la empresa
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-teal-500/20 focus:outline-none transition-all bg-white">
                <option value="">Seleccionar</option>
                <option value="1-10">1-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="51-200">51-200 empleados</option>
                <option value="201-500">201-500 empleados</option>
                <option value="500+">500+ empleados</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            ¿Qué necesitas? *
          </label>
          <select
            value={formData.service}
            onChange={(e) => handleChange("service", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all ${
              errors.service
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
            } focus:outline-none bg-white`}
          >
            <option value="">Seleccionar una opción</option>
            <option value="capacitacion">Capacitación</option>
            <option value="tecnologia">Tecnología</option>
            <option value="automatizacion">Automatización</option>
            <option value="marketing">Marketing</option>
            <option value="consultoria">Consultoría</option>
            <option value="diseno">Diseño</option>
            <option value="otro">Otro</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Mensaje *
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border transition-all resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
            } focus:outline-none`}
            placeholder="Cuéntanos sobre tu proyecto o necesidad..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={status === "loading"}
          icon={<Send className="w-5 h-5" />}
          className="w-full"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </Button>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Hubo un error al enviar. Por favor intenta de nuevo.</span>
          </div>
        )}
      </form>
    </div>
  );
}
