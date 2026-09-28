import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center">
        <div className="text-9xl font-display font-bold text-teal-500 mb-4">404</div>
        <h1 className="text-4xl font-display font-semibold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. Te ayudamos a encontrar lo que necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" icon={<Home className="w-5 h-5" />}>
              Volver al inicio
            </Button>
          </Link>
          <Link href="/servicios">
            <Button variant="outline" size="lg" icon={<Search className="w-5 h-5" />}>
              Ver servicios
            </Button>
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">¿Necesitas ayuda?</p>
          <Link href="/contacto" className="text-teal-600 hover:text-teal-700 font-medium">
            Contactar soporte
          </Link>
        </div>
      </Container>
    </section>
  );
}
