import { ComplementaryGrid } from "@/components/grids/ComplementaryGrid";
import React from "react";
import { BackgroundPattern } from "../../../components/hero-06/background-pattern";

export default function ComprementaryPage() {
  return (
    <main className="relative flex flex-col items-center justify-center text-center p-10 space-y-8">
      <BackgroundPattern />
      <h1 className="text-4xl font-bold">Formación Complementaria</h1>

      <Section
        title="Cursos"
        description="Explora nuestros cursos y documentación para mejorar tus habilidades."
      >
        <ComplementaryGrid />
      </Section>
    </main>
  );
}

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="w-full max-w-4xl">
      <div className="rounded-lg p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mb-4">{description}</p>
        {children}
      </div>
    </section>
  );
}
