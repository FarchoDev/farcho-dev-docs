"use client"; 

import React, { useState } from "react";
import { BackgroundPattern } from "../../../components/hero-06/background-pattern";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    category: "General",
    question: "¿Este sitio está afiliado oficialmente al SENA?",
    answer:
      "No, este proyecto es independiente y sin fines comerciales. No representa ni está vinculado institucionalmente con el SENA.",
  },
  {
    category: "General",
    question: "¿Puedo sugerir nuevos materiales para el sitio?",
    answer:
      "Sí, puedes enviarnos tus sugerencias a través de la página de contacto o mediante nuestro repositorio en GitHub.",
  },
  {
    category: "Contenido",
    question: "¿El contenido que encuentro aquí es oficial del SENA?",
    answer:
      "No, los materiales son recopilados y reestructurados por aprendices para fines educativos, no constituyen documentos oficiales.",
  },
  {
    category: "Privacidad",
    question: "¿Cómo se manejan mis datos personales si contacto el sitio?",
    answer:
      "Solo recolectamos la información que proporcionas voluntariamente para responder tus consultas o colaboraciones, y no la compartimos con terceros.",
  },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="items-center justify-center p-10">
      <BackgroundPattern />
      <h1 className="text-4xl font-bold mb-8 text-center">Preguntas frecuentes</h1>

      <input
        type="search"
        placeholder="Buscar en las preguntas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Buscar preguntas frecuentes"
        className="w-full p-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
      />

      {filteredFaqs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No se encontraron resultados para "{searchTerm}".
        </p>
      ) : (
        <Accordion.Root
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-4"
        >
          {filteredFaqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border rounded-md overflow-hidden shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full p-4 font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                  <span>{faq.question}</span>
                  <svg
                    className="w-6 h-6 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <p className="mb-1 font-medium text-indigo-600">{faq.category}</p>
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      )}
    </main>
  );
}
