"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! 👋 ¿En qué podemos ayudarte hoy?" },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, { from: "user", text: message }]);
    setMessage("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-teal-600 hover:bg-teal-700"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-teal-600 text-white p-4">
            <h3 className="font-semibold">Chat en vivo</h3>
            <p className="text-sm text-teal-100">Normalmente respondemos en minutos</p>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[80%] p-3 rounded-lg text-sm",
                  msg.from === "bot"
                    ? "bg-gray-100 text-gray-900 rounded-tl-none"
                    : "bg-teal-600 text-white ml-auto rounded-tr-none"
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
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
    </>
  );
}
