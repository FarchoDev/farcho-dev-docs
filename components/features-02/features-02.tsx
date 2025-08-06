"use client";

import FeatureCard from "@/components/feature-card/FeatureCard";
import { APP_CONFIG } from "@/lib/config";

const Features02Page = () => {
  // ✅ Definir las 3 categorías específicas que quieres mostrar
  const categoryCards = [
    {
      id: 'category-cursos',
      title: 'Cursos',
      description: 'Aprende Git, GitHub, Conventional Commits y más tecnologías de desarrollo.',
      images: {
        light: '/images/index-images/cursos/git-logo.svg',
        dark: '/images/index-images/cursos/git-logo-dark.svg',
      },
      link: '/courses',
      category: 'Cursos'
    },
    {
      id: 'category-adso',
      title: 'Análisis y Desarrollo de Software',
      description: 'Documentación técnica del programa ADS-SENA: sistemas, redes, paradigmas y más.',
      images: {
        light: '/images/index-images/documentacion/001.svg',
        dark: '/images/index-images/documentacion/001.svg',
      },
      link: '/adso',
      category: 'ADS-SENA'
    },
    {
      id: 'category-complementary',
      title: 'Formación Complementaria',
      description: 'Contenido especializado: automatización, testing avanzado y metodologías.',
      images: {
        light: '/images/index-images/cursos/ShiftLeftTesting.svg',
        dark: '/images/index-images/cursos/ShiftLeftTesting.svg',
      },
      link: '/complementary',
      category: 'Formación Complementaria'
    }
  ];

  return (
    <div className="flex items-center justify-center relative z-10">
      <div className={`max-w-${APP_CONFIG.layout.maxWidth} w-full ${APP_CONFIG.layout.spacing.section} ${APP_CONFIG.layout.padding.lg}`}>
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Contenido Organizado por Categorías
        </h2>
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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