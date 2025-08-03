import React from "react";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center justify-center p-10">
      <BackgroundPattern />
      <div className="max-w-3xl w-full text-left">
        <h1 className="text-4xl font-bold mb-6 text-center">Acerca de este sitio</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Nuestra misión</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este sitio web es una iniciativa personal, creada por y para aprendices con el objetivo de preservar y organizar de forma estructurada los materiales de estudio vistos durante la formación en la <strong>Tecnología en Análisis y Desarrollo de Software</strong>, ofrecida gratuitamente por el <strong>SENA</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            A medida que los aprendices avanzan en su proceso formativo, muchos de estos recursos desaparecen o dejan de estar disponibles, dificultando su consulta posterior. Esta plataforma busca centralizar y facilitar el acceso a ese conocimiento como herramienta de repaso y autoformación.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">📚 Material de estudio</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Aquí encontrarás una recopilación cronológica y estructurada de los temas abordados durante la formación. Todo el contenido ha sido elaborado de forma independiente a partir de experiencias académicas, resúmenes personales y conocimientos adquiridos por los aprendices.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🎓 Cursos adicionales</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Además del contenido académico estudiado, se incluyen cursos complementarios diseñados para fortalecer habilidades técnicas esenciales en el área del desarrollo de software, como <strong>Git, GitHub, Conventional Commits</strong> y otros fundamentos relevantes para la industria.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué es importante este sitio?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este espacio se construyó con la intención de servir como <strong>recurso de consulta permanente</strong> para los aprendices, tanto durante como después de su proceso de formación. Al mantener el acceso organizado y accesible, se busca facilitar la continuidad del aprendizaje y apoyar el crecimiento profesional de los futuros desarrolladores.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contribuciones y mejoras</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este sitio está abierto a sugerencias, aportes y mejoras. Si tienes ideas, materiales adicionales o deseas colaborar, ¡eres bienvenido! Nuestro objetivo es seguir construyendo colectivamente una herramienta útil y confiable para todos los aprendices.
          </p>
        </section>

        <section className="mt-10">
          <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl text-sm text-gray-800 dark:text-gray-100">
            <strong>Nota legal:</strong> Este sitio no está afiliado oficialmente al Servicio Nacional de Aprendizaje (SENA). Es un proyecto independiente creado con fines educativos. No se reproducen materiales oficiales ni se busca reemplazar contenidos institucionales. Consulta nuestro <a href="/LegalPage" className="underline font-medium">Aviso Legal</a> para más información.
          </div>
        </section>

        <p className="text-lg text-center font-medium mt-8">¡Esperamos que disfrutes el aprendizaje! 🎉</p>
      </div>
    </main>
  );
}
