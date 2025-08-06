// app/docs/sena/complementaria/page.tsx
"use client";

import React from "react";
import { ComplementaryGrid } from "@/components/grids/ComplementaryGrid";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";

export default function ComplementaryPage() {
  return (
    <main className="relative flex flex-col items-center justify-center text-center p-10 space-y-12">
      <BackgroundPattern />
      <div className="max-w-5xl w-full space-y-8 text-left">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Formación Complementaria</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Amplía tus conocimientos con cursos complementarios en distintas áreas clave.
          </p>
        </header>

        <Section
          title="Tecnología"
          description="Cursos para mejorar tus habilidades digitales, programación, ofimática y más."
        >
          <ComplementaryGrid filter={{ category: "tecnologia" }} />
        </Section>

        <Section
          title="Habilidades Blandas"
          description="Comunicación, liderazgo, trabajo en equipo y otras habilidades personales."
        >
          <ComplementaryGrid filter={{ category: "habilidades" }} />
        </Section>

        <Section
          title="Idiomas"
          description="Formación básica en inglés, portugués u otros idiomas."
        >
          <ComplementaryGrid filter={{ category: "idiomas" }} />
        </Section>

        <Section
          title="Otros"
          description="Cursos misceláneos o de interés general que no encajan en una categoría específica."
        >
          <ComplementaryGrid filter={{ category: "otros" }} />
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
