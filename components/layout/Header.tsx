"use client";

import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight, Search, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainNavigation, serviceCategories } from "@/data/navigation";
import { Logo } from "./Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const searchResults = searchQuery.length > 2 ? [
    { label: "Capacitación Empresarial", href: "/academy/capacitacion-empresarial", category: "Academy" },
    { label: "Desarrollo Web", href: "/tech/desarrollo-web", category: "Tech" },
    { label: "Automatización de Procesos", href: "/automation/procesos", category: "Automation" },
    { label: "Marketing Digital", href: "/growth/marketing-digital", category: "Growth" },
    { label: "Consultoría Organizacional", href: "/consultoria/organizacional", category: "Consultoría" },
    { label: "Diseño Gráfico", href: "/creative/diseno-grafico", category: "Creative" },
  ].filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-white border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="color" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.label === "Servicios" && handleMouseEnter()}
                onMouseLeave={() => item.label === "Servicios" && handleMouseLeave()}
              >
                {item.label === "Servicios" ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    )}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu de Servicios */}
                {item.label === "Servicios" && isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] animate-fade-in">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title}>
                            <Link href={category.href} className="block group">
                              <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                                {category.title}
                              </h3>
                              <p className="text-xs text-gray-500 mb-3">
                                {category.description}
                              </p>
                            </Link>
                            <ul className="space-y-1.5">
                              {category.items.map((service) => (
                                <li key={service.href}>
                                  <Link
                                    href={service.href}
                                    className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                                  >
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          ¿No sabes por dónde empezar?
                        </span>
                        <Link
                          href="/contacto"
                          className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1"
                        >
                          Hablar con un asesor
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 p-4">
                  <input
                    type="text"
                    placeholder="Buscar servicios..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500"
                    autoFocus
                  />
                  {searchResults.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <div className="text-sm font-medium text-gray-900">{result.label}</div>
                          <div className="text-xs text-gray-500">{result.category}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/521234567890?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-green-600 hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <Link
              href="/solicitar-propuesta"
              className="btn-primary btn-md"
            >
              Solicitar propuesta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="p-4">
            {mainNavigation.map((item) => (
              <div key={item.href} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-900 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="https://wa.me/521234567890?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20cursos%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-md w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar cursos por WhatsApp
              </a>
              <Link
                href="/solicitar-propuesta"
                className="btn-outline btn-md w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar propuesta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
