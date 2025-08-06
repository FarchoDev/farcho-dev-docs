"use client";

import FeatureCard from "@/components/feature-card/FeatureCard";
import { APP_CONFIG } from "@/lib/config";

const categoryCards = [
  {
    id: "category-courses",
    title: "Cursos",
    description: "Accede a nuestra colección de cursos disponibles para fortalecer tus competencias.",
    images: {
      light: "/images/categorias/cursos.png",
      dark: "/images/categorias/cursos.png",
    },
  },
  {
    id: "category-docs",
    title: "Análisis y Desarrollo de Software",
    description: "Documentación y recursos clave para el área de análisis y desarrollo.",
    link: "/categorias/analisis-desarrollo",
    images: {
      light: "/images/categorias/analisis.png",
      dark: "/images/categorias/analisis.png"
    },
  },
  {
    id: "category-complementary",
    title: "Formación Complementaria",
    description: "Recursos que complementan tu formación con habilidades adicionales.",
    link: "/categorias/complementaria",
    images: {
      light: "/images/index-images/formacion-complementaria.png",
      dark: "/images/index-images/formacion-complementaria.png"
    },
  },
];

const Features02Page = () => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <div className={`max-w-${APP_CONFIG.layout.maxWidth} w-full ${APP_CONFIG.layout.spacing.section} ${APP_CONFIG.layout.padding.lg}`}>
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Contenido Organizado por Categorías
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {categoryCards.map((category, index) => (
            <FeatureCard
              key={category.id}
              title={category.title}
              description={category.description}
              images={category.images}
              link={category.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
