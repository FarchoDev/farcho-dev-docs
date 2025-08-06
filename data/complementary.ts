// data/complementary.ts - NUEVA VERSIÓN MEJORADA
import { BaseContent } from '@/lib/content-types';
import { ContentManager } from '@/lib/content-manager';

// Datos base de formación complementaria (DRY - Single Source of Truth)
const rawComplementary = [
  {
    id: 'comp-automatizacion',
    title: 'Automatización de procesos para la eficiencia organizacional',
    description: 'Técnicas y herramientas para automatizar procesos empresariales y mejorar la eficiencia.',
    link: '/docs/sena/fc_docs/automatizacion-de-procesos-para-la-eficiencia-organizacional',
    images: {
      light: '/images/index-images/documentacion/008.svg',
      dark: '/images/index-images/documentacion/008.svg',
    },
    tags: ['automatizacion', 'procesos', 'eficiencia', 'organizacion'],
    readTime: '4h',
    difficulty: 'intermediate' as const,
    priority: 7,
  },
  {
    id: 'comp-shift-left-testing',
    title: 'Shift Left Testing en Desarrollo Ágil',
    description: 'Metodología de testing temprano en el ciclo de desarrollo ágil.',
    link: '/docs/sena/fc_docs/shift-left-testingen-desarrolloagil',
    images: {
      light: '/images/index-images/cursos/ShiftLeftTesting.svg',
      dark: '/images/index-images/cursos/ShiftLeftTesting.svg',
    },
    tags: ['testing', 'agile', 'shift-left', 'qa', 'metodologias'],
    readTime: '3h',
    difficulty: 'advanced' as const,
    featured: false,
    trending: true,
    recent: false,
    priority: 8,
  },
  // ✅ Agregar nuevo contenido aquí
  {
    id: 'comp-metodologias-agiles',
    title: 'Metodologías Ágiles en Desarrollo',
    description: 'Scrum, Kanban y otras metodologías para equipos de desarrollo.',
    link: '/docs/sena/fc_docs/metodologias-agiles',
    images: {
      light: '/images/index-images/cursos/agile-light.svg',
      dark: '/images/index-images/cursos/agile-dark.svg',
    },
    tags: ['scrum', 'kanban', 'agile', 'metodologias'],
    readTime: '5h',
    difficulty: 'intermediate' as const,
    featured: true,
    trending: true,
    recent: true,
    priority: 9,
  },
];

// Normalizar usando ContentManager
export const complementary: BaseContent[] = rawComplementary.map(comp => 
  ContentManager.normalizeContent(comp, 'complementary')
);

// Exportar datos específicos para retrocompatibilidad
export const complementaryLegacy = complementary.map(comp => ({
  title: comp.title,
  description: comp.description,
  link: comp.link,
  images: comp.images,
}));