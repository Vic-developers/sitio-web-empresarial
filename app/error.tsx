"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <Container className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Algo salió mal
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          Ha ocurrido un error inesperado. Por favor intenta de nuevo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={reset}>
            Intentar de nuevo
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
