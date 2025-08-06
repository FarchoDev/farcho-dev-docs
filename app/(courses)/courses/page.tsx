"use client";

import { CourseGrid } from "@/components/grids/CourseGrid";
import React from "react";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";

export default function CursosPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-10 space-y-12">
      <BackgroundPattern />

      <div className="max-w-5xl w-full space-y-8 text-left">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Cursos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora nuestros cursos clasificados por tipo de formación.
          </p>
        </header>

        <Section
          title="Cursos Técnicos"
          description="Enfocados en habilidades prácticas como desarrollo web, bases de datos, redes y programación."
        >
          <CourseGrid />
        </Section>
      </div>
    </main>
  );
}

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function Section({ title, description, children }: SectionProps) {
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
