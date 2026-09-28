"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Suscripción exitosa!</h3>
        <p className="text-gray-600">Recibirás nuestras novedades y contenido exclusivo.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-center">
      <Mail className="w-12 h-12 text-white mx-auto mb-4" />
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
        Recibe contenido exclusivo
      </h2>
      <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
        Suscríbete a nuestro newsletter y recibe artículos, guías y recursos sobre capacitación, tecnología y transformación digital.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <Button type="submit" variant="accent" size="lg" loading={status === "loading"}>
          Suscribirse
        </Button>
      </form>
      <p className="text-teal-200 text-sm mt-4">
        Sin spam. Puedes darte de baja en cualquier momento.
      </p>
    </div>
  );
}
