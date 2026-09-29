"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { X, Gift, ArrowRight } from "lucide-react";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitIntentShown")) {
        setIsVisible(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se conectaría con el servicio de email
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">¡Espera!</h3>
              <p className="text-teal-100">Antes de irte...</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Recibe nuestra guía gratuita
          </h4>
          <p className="text-gray-600 mb-4">
            Descarga nuestra guía "5 Pasos para Transformar tu Organización" y recibe un 10% de descuento en tu primer curso.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Quiero mi guía gratuita
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
}
