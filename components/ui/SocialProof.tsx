"use client";

import { useState, useEffect } from "react";
import { Users, Clock, TrendingUp, Award } from "lucide-react";

const notifications = [
  { name: "María G.", location: "Santo Domingo", action: "se inscribió en un curso", time: "hace 5 min" },
  { name: "Carlos R.", location: "Santiago", action: "solicitó una propuesta", time: "hace 12 min" },
  { name: "Ana M.", location: "Punta Cana", action: "completó un diplomado", time: "hace 25 min" },
  { name: "José L.", location: "Santo Domingo", action: "se suscribió al newsletter", time: "hace 1 hora" },
  { name: "Laura P.", location: "Santiago", action: "agendó una consulta", time: "hace 2 horas" },
];

export function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    };

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 15000);

    const timeout = setTimeout(showNotification, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const notification = notifications[currentNotification];

  return (
    <>
      {/* Notificación flotante */}
      <div
        className={`fixed bottom-24 left-6 z-50 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 max-w-xs">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{notification.name}</span> de {notification.location}{" "}
                {notification.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contador de visitas */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>1,247 visitas esta semana</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>+15% esta semana</span>
        </div>
      </div>
    </>
  );
}

export function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-2">
        <Clock className="w-4 h-4" />
        <span>
          ¡Oferta limitada! <strong>20% de descuento</strong> en todos los cursos esta semana
        </span>
      </div>
    </div>
  );
}

export function GuaranteeBadge() {
  const guarantees = [
    {
      title: "Resultados Medibles",
      description: "Cada programa incluye métricas claras de seguimiento y evaluación de impacto.",
    },
    {
      title: "Soporte Continuo",
      description: "Acompañamiento antes, durante y después de cada programa para garantizar el éxito.",
    },
    {
      title: "Metodología Probada",
      description: "Procesos documentados y optimizados que garantizan resultados consistentes.",
    },
  ];

  const [currentGuarantee, setCurrentGuarantee] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGuarantee((prev) => (prev + 1) % guarantees.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const guarantee = guarantees[currentGuarantee];

  return (
    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <Award className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{guarantee.title}</h4>
        <p className="text-sm text-gray-600">{guarantee.description}</p>
      </div>
    </div>
  );
}

export function SpotsCounter({ total = 20, enrolled = 15 }: { total?: number; enrolled?: number }) {
  const spotsLeft = total - enrolled;
  const percentage = (enrolled / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Lugares disponibles</span>
        <span className="font-semibold text-gray-900">{spotsLeft} de {total}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-red-600 font-medium">
        ¡Solo quedan {spotsLeft} lugares!
      </p>
    </div>
  );
}
