// data/documents.ts - NUEVA VERSIÓN MEJORADA
import { BaseContent } from '@/lib/content-types';
import { ContentManager } from '@/lib/content-manager';

// Datos base de documentación (DRY - Single Source of Truth)
const rawDocuments = [
  {
    id: 'doc-caracterizacion-de-procesos',
    title: 'Caracterización de procesos',
    description: 'La caracterización de procesos es una actividad fundamental en la gestión de organizaciones, ya que permite entender y mejorar la forma en que se llevan a cabo las actividades diarias.',
    link: '/docs/sena/ads_docs/caracterizacion-de-procesos',
    images: {
      light: '/images/caracterizacion-de-procesos/001.svg',
      dark: '/images/caracterizacion-de-procesos/001.svg',
    },
    tags: ['fase-1', 'analisis',],
    readTime: '5h',
    difficulty: 'intermediate' as const,
    priority: 9,
  },
  {
    id: 'doc-sistemas-operativos',
    title: 'Sistemas operativos de red',
    description: 'Configuración y administración de sistemas operativos en entornos de red.',
    link: '/docs/sena/ads_docs/sistemas-operativos-de-red',
    images: {
      light: '/images/index-images/documentacion/001.svg',
      dark: '/images/index-images/documentacion/001.svg',
    },
    tags: ['sistemas-operativos', 'redes', 'administracion'],
    readTime: '5h',
    difficulty: 'intermediate' as const,
    priority: 9,
  },
  {
    id: 'doc-redes-networking',
    title: 'Redes y networking',
    description: 'Fundamentos de redes, protocolos y configuración de sistemas.',
    link: '/docs/sena/ads_docs/redes-y-networking',
    images: {
      light: '/images/index-images/documentacion/002.svg',
      dark: '/images/index-images/documentacion/002.svg',
    },
    tags: ['redes', 'networking', 'protocolos', 'tcp-ip'],
    readTime: '5h',
    difficulty: 'intermediate' as const,
    featured: false,
    trending: true,
    recent: false,
    priority: 8,
  },
  {
    id: 'doc-paradigma-oop',
    title: 'Paradigma orientado a objetos',
    description: 'Principios y patrones de la programación orientada a objetos.',
    link: '/docs/sena/ads_docs/paradigma-orientado-a-objetos',
    images: {
      light: '/images/index-images/documentacion/006.svg',
      dark: '/images/index-images/documentacion/006.svg',
    },
    tags: ['oop', 'programacion', 'patrones', 'solid'],
    readTime: '4h',
    difficulty: 'intermediate' as const,
    priority: 7,
  },
  {
    id: 'doc-contenedores',
    title: 'Contenedores',
    description: 'Aprende containerización y orchestration con Docker y Kubernetes.',
    link: '/docs/sena/ads_docs/contenedores-documentos',
    images: {
      light: '/images/index-images/documentacion/004.svg',
      dark: '/images/index-images/documentacion/004.svg',
    },
    tags: ['docker', 'kubernetes', 'containers', 'devops'],
    readTime: '2h',
    difficulty: 'advanced' as const,
    featured: true,
    trending: false,
    recent: true,
    priority: 9,
  },
  {
    id: 'doc-virtualizacion',
    title: 'Virtualización',
    description: 'Conceptos y herramientas de virtualización en entornos IT.',
    link: '/docs/sena/ads_docs/virtualizacion',
    images: {
      light: '/images/index-images/documentacion/003.svg',
      dark: '/images/index-images/documentacion/003.svg',
    },
    tags: ['virtualizacion', 'vmware', 'hypervisor'],
    readTime: '3h',
    difficulty: 'intermediate' as const,
    featured: false,
    trending: false,
    recent: true,
    priority: 6,
  },
  {
    id: 'doc-documentacion-entrega',
    title: 'Documentación y entrega',
    description: 'Procesos de documentación y entrega de software en implantación.',
    link: '/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion',
    images: {
      light: '/images/index-images/documentacion/005.svg',
      dark: '/images/index-images/documentacion/005.svg',
    },
    tags: ['documentacion', 'entrega', 'metodologias'],
    readTime: '3h',
    difficulty: 'beginner' as const,
    priority: 5,
  },
  {
    id: 'doc-calidad-software',
    title: 'Fundamentos de calidad del software',
    description: 'Metodologías de testing y aseguramiento de calidad en software.',
    link: '/docs/sena/ads_docs/fundamentos-de-la-calidad-del-software',
    images: {
      light: '/images/index-images/documentacion/007.svg',
      dark: '/images/index-images/documentacion/007.svg',
    },
    tags: ['testing', 'calidad', 'qa', 'metodologias'],
    readTime: '3h',
    difficulty: 'intermediate' as const,
    featured: true,
    trending: true,
    recent: false,
    priority: 9,
  },
  {
    id: 'doc-pruebas-software',
    title: 'Aplicación de pruebas de software',
    description: 'Implementación práctica de pruebas de software y testing automatizado.',
    link: '/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion',
    images: {
      light: '/images/index-images/documentacion/008.svg',
      dark: '/images/index-images/documentacion/008.svg',
    },
    tags: ['testing', 'automation', 'qa', 'pruebas'],
    readTime: '4h',
    difficulty: 'advanced' as const,
    priority: 7,
  },
];

// Normalizar usando ContentManager
export const documents: BaseContent[] = rawDocuments.map(doc => 
  ContentManager.normalizeContent(doc, 'documentation')
);

// Exportar datos específicos para retrocompatibilidad
export const documentsLegacy = documents.map(doc => ({
  title: doc.title,
  description: doc.description,
  link: doc.link,
  images: doc.images,
}));