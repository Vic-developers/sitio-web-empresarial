"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ProactiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    // Aquí se conectaría con el servicio de chat
    setMessage("");
    setIsOpen(true);
  };

  return (
    <>
      {/* Mensaje proactivo */}
      {showMessage && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-slide-in-right">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 max-w-xs">
            <button
              onClick={() => setShowMessage(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-900">
              👋 ¡Hola! ¿Necesitas ayuda? Estamos aquí para responder tus dudas.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-3 text-sm text-teal-600 font-medium hover:text-teal-700"
            >
              Chatear con un asesor →
            </button>
          </div>
        </div>
      )}

      {/* Chat abierto */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-scale-in">
          <div className="bg-teal-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Chat en vivo</h3>
                <p className="text-sm text-teal-100">Normalmente respondemos en minutos</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-3">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-900">
                ¡Hola! 👋 Bienvenido a SkillUps Academy. ¿En qué podemos ayudarte hoy?
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal-600 text-white shadow-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
