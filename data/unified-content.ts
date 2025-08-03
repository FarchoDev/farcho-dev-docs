// data/unified-content.ts - NUEVO SISTEMA UNIFICADO
import { BaseContent, SearchResult, FeaturedItem } from '@/lib/content-types';
import { ContentManager } from '@/lib/content-manager';
import { courses } from './courses';
import { documents } from './documents';
import { complementary } from './complementary';

// ✅ Single Source of Truth - Todo el contenido unificado
export const allContent: BaseContent[] = [
  ...courses,
  ...documents,
  ...complementary,
];

// ✅ Contenido adicional destacado (featured content específico)
const additionalFeaturedContent: Partial<BaseContent>[] = [
  {
    id: 'featured-git-best-practices',
    title: 'Guía de Buenas Prácticas en Git',
    description: 'Aprende las mejores prácticas para usar Git en proyectos profesionales.',
    link: '/docs/cursos/git_curso/buenas-practicas',
    type: 'guide',
    category: 'Guías',
    tags: ['git', 'best-practices', 'workflow'],
    readTime: '2h',
    featured: true,
    priority: 9,
  },
];

// Normalizar contenido adicional
const normalizedAdditionalContent = additionalFeaturedContent.map(content => 
  ContentManager.normalizeContent(content, content.type!)
);

// ✅ Todo el contenido incluido adicionales
export const completeContent: BaseContent[] = [
  ...allContent,
  ...normalizedAdditionalContent,
];

// ✅ Datos de búsqueda generados automáticamente (NO MÁS DUPLICACIÓN)
export const allSearchData: SearchResult[] = ContentManager.generateSearchData(completeContent);

// ✅ Items destacados filtrados y organizados
export const featuredItems: FeaturedItem[] = ContentManager
  .filterContent(completeContent, { featured: true })
  .map(content => ContentManager.toFeaturedItem(content))
  .sort((a, b) => (b.priority || 0) - (a.priority || 0));

// ✅ Items trending
export const trendingItems: FeaturedItem[] = ContentManager
  .filterContent(completeContent, { trending: true })
  .map(content => ContentManager.toFeaturedItem(content))
  .sort((a, b) => (b.priority || 0) - (a.priority || 0));

// ✅ Items recientes
export const recentItems: FeaturedItem[] = ContentManager
  .filterContent(completeContent, { recent: true })
  .map(content => ContentManager.toFeaturedItem(content))
  .sort((a, b) => (b.priority || 0) - (a.priority || 0));

// ✅ Contenido por tipo
export const contentByType = {
  courses: ContentManager.filterContent(completeContent, { type: 'course' }),
  documentation: ContentManager.filterContent(completeContent, { type: 'documentation' }),
  guides: ContentManager.filterContent(completeContent, { type: 'guide' }),
  complementary: ContentManager.filterContent(completeContent, { type: 'complementary' }),
};

// ✅ Funciones utilitarias para obtener contenido
export const getContent = {
  /**
   * Obtener contenido por ID
   */
  byId: (id: string): BaseContent | undefined => {
    return completeContent.find(item => item.id === id);
  },

  /**
   * Obtener contenido por tipo
   */
  byType: (type: BaseContent['type']): BaseContent[] => {
    return ContentManager.filterContent(completeContent, { type });
  },

  /**
   * Obtener contenido por tags
   */
  byTags: (tags: string[]): BaseContent[] => {
    return ContentManager.filterContent(completeContent, { tags });
  },

  /**
   * Buscar contenido por término
   */
  search: (term: string): BaseContent[] => {
    const lowerTerm = term.toLowerCase();
    return completeContent.filter(item => 
      item.title.toLowerCase().includes(lowerTerm) ||
      item.description.toLowerCase().includes(lowerTerm) ||
      item.tags?.some(tag => tag.toLowerCase().includes(lowerTerm))
    );
  },

  /**
   * Obtener contenido aleatorio
   */
  random: (count: number = 3): BaseContent[] => {
    const shuffled = [...completeContent].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },
};

// ✅ Estadísticas del contenido
export const contentStats = {
  total: completeContent.length,
  byType: {
    courses: contentByType.courses.length,
    documentation: contentByType.documentation.length,
    guides: contentByType.guides.length,
    complementary: contentByType.complementary.length,
  },
  featured: featuredItems.length,
  trending: trendingItems.length,
  recent: recentItems.length,
};