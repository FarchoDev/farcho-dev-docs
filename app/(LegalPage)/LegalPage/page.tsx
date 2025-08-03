import React from "react";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";

export default function AvisoLegalPage() {
  return (
    <main className="relative flex flex-col items-center justify-center p-10">
      <BackgroundPattern />
      <div className="max-w-3xl w-full text-left">
        <h1 className="text-4xl font-bold mb-6 text-center">Aviso Legal</h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este sitio web, identificado como <strong>Farcho Dev Docs</strong>, es un proyecto de carácter personal y académico, creado de manera independiente por aprendices de la Tecnología en Análisis y Desarrollo de Software del SENA, con el propósito exclusivo de organizar, resumir y conservar contenidos vistos durante la formación.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            La finalidad de esta plataforma es educativa y no lucrativa. No se pretende reemplazar, reproducir ni suplantar contenidos oficiales del Servicio Nacional de Aprendizaje (SENA), ni representar a dicha institución. No se distribuyen documentos oficiales, ni se utilizan logotipos, marcas o elementos gráficos registrados por el SENA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Propiedad intelectual</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Todo el contenido publicado en esta plataforma ha sido redactado, interpretado o estructurado por los autores del sitio con base en su experiencia formativa, utilizando sus propias palabras. No se alojan archivos oficiales ni se reproduce material protegido por derechos de autor sin consentimiento expreso.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Los contenidos compartidos están dirigidos a la comunidad de estudiantes con fines de repaso, profundización y apoyo al autoaprendizaje. Si alguna publicación llegase a infringir derechos de autor o propiedad intelectual, se podrá solicitar su retiro inmediato por medio del canal de contacto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">No afiliación institucional</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este sitio no está afiliado, patrocinado, ni tiene vínculo directo o contractual con el SENA. Cualquier mención a programas, tecnologías o contenidos impartidos por el SENA se realiza únicamente con fines referenciales y educativos. La información aquí presentada no representa una fuente oficial ni institucional.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contacto para solicitudes</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Si usted es titular de derechos sobre algún contenido publicado en este sitio y considera que su publicación infringe normas de propiedad intelectual o confidencialidad, puede solicitar su eliminación inmediata a través del siguiente medio:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">
            ✉️ Correo: <a href="mailto:contacto@farchodevdocs.com" className="underline text-blue-600 dark:text-blue-400">contacto@farchodevdocs.com</a>
          </p>
        </section>

        <section className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Última actualización: 03 de agosto de 2025
          </p>
        </section>
      </div>
    </main>
  );
}
