import React from "react";
import { BackgroundPattern } from "../../../components/hero-06/background-pattern";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10">
      <BackgroundPattern />
      <div className="max-w-3xl w-full text-left">
        <h1 className="text-3xl font-bold mb-6 text-center">📮 Contáctanos</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">¿Tienes preguntas, sugerencias o deseas colaborar?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este proyecto fue creado con fines educativos para apoyar a los aprendices del SENA en su proceso formativo. Si deseas compartir recursos, proponer mejoras o resolver alguna duda relacionada con el contenido, estamos abiertos a escucharte.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="font-semibold">Nota:</strong> Este sitio no tiene ninguna relación oficial con el SENA. Todos los mensajes serán tratados con seriedad y respeto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📧 Correo electrónico</h2>
          <p className="mb-2">Puedes escribir directamente a:</p>
          <p className="font-medium text-indigo-700">farchodev@gmail.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🌐 Repositorio en GitHub</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Consulta el código fuente, reporta errores o sugiere mejoras en nuestro repositorio público:</p>
          <a
            href="https://github.com/FarchoDev/FarchoDev_Docs_1.1.0"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            github.com/FarchoDev
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📝 Formulario de contacto</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Próximamente habilitaremos un formulario directo para facilitar el envío de mensajes desde esta misma página.
          </p>
          <p className="italic text-gray-500">[Sección en desarrollo]</p>
        </section>

        <p className="text-center text-lg font-medium mt-10">
          Gracias por ser parte de esta comunidad educativa. ¡Tu apoyo hace la diferencia! 🚀
        </p>
      </div>
    </main>
  );
}
