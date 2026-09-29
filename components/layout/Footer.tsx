import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, Music2, ArrowRight, CheckCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/skillupsacademy", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/skillupsacademy", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/skillupsacademy", label: "Facebook" },
  { icon: Music2, href: "https://tiktok.com/@skillupsacademy", label: "TikTok" },
  { icon: Youtube, href: "https://youtube.com/@skillupsacademy", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Logo variant="white" />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Capacitación, tecnología y soluciones para transformar personas y organizaciones.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contacto@skillupsacademy.com"
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contacto@skillupsacademy.com</span>
              </a>
              <a
                href="tel:+18495774524"
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (849) 577-4524</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Santo Domingo, República Dominicana</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Academy</h3>
            <ul className="space-y-3">
              {footerNavigation.servicios.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Tech</h3>
            <ul className="space-y-3">
              {footerNavigation.tech.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Más</h3>
            <ul className="space-y-3">
              {footerNavigation.empresa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Listo para transformar tu organización?
              </h3>
              <p className="text-teal-100 mb-4 md:mb-0">
                Solicita una propuesta personalizada sin costo. Respuesta en menos de 24 horas.
              </p>
              <div className="flex items-center gap-4 text-sm text-teal-100">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Garantía de satisfacción
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Resultados medibles
                </span>
              </div>
            </div>
            <Link href="/solicitar-propuesta" className="flex-shrink-0">
              <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Solicitar Propuesta
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SkillUps Academy. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-slate-500 hover:text-teal-400 text-sm transition-colors"
            >
              Aviso de privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-slate-500 hover:text-teal-400 text-sm transition-colors"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
