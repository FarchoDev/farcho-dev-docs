// app/docs/sena/adso/page.tsx
"use client";

import { DocumentGrid } from "@/components/grids/DocumentGrid";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import { Tags } from "lucide-react";
import React from "react";

export default function AdsobaPage() {
  return (
    <main className="relative flex flex-col items-center justify-center text-center p-10 space-y-12">
      <BackgroundPattern />
      <div className="max-w-5xl w-full space-y-8 text-left">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Análisis y Desarrollo de Software
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora el contenido educativo organizado por fases del proceso de desarrollo de software. Cada sección te llevará desde el análisis hasta la entrega.
          </p>
        </header>

        <PhaseSection
          title="Fase 1: Análisis"
          description="Comprensión de requerimientos, documentación técnica y estudio del problema."
        >
          <DocumentGrid filter={{ tags: ["analisis"] }} />
        </PhaseSection>

        <PhaseSection
          title="Fase 2: Diseño"
          description="Planificación de la solución, arquitectura del software y herramientas."
        >
          <DocumentGrid filter={{ tags: ["diseno"] }} />
        </PhaseSection>

        <PhaseSection
          title="Fase 3: Desarrollo"
          description="Programación de la solución, patrones de diseño y pruebas unitarias."
        >
          <DocumentGrid filter={{ tags: ["desarrollo"] }} />
        </PhaseSection>

        <PhaseSection
          title="Fase 4: Implantación y pruebas"
          description="Pruebas funcionales, control de calidad y entrega del producto final."
        >
          <DocumentGrid filter={{ tags: ["implantacion"] }} />
        </PhaseSection>
      </div>
    </main>
  );
}

interface PhaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PhaseSection({ title, description, children }: PhaseSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
      </div>
      {children}
    </section>
  );
}
