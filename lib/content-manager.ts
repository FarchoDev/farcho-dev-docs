// lib/content-manager.ts
import { BaseContent, SearchResult, FeaturedItem, ContentType, ContentMetadata } from './content-types';

export class ContentManager {
  private static metadata: ContentMetadata = {
    defaultDescription: {
      course: 'Curso práctico paso a paso con ejemplos y ejercicios.',
      documentation: 'Documentación técnica del programa ADS-SENA.',
      guide: 'Guía práctica con mejores prácticas y recomendaciones.',
      complementary: 'Contenido de formación complementaria especializada del SENA.',
    },
    categoryMapping: {
      course: 'Cursos',
      documentation: 'ADS-SENA',
      guide: 'Guías',
      complementary: 'Formación Complementaria',
    },
    typeConfig: {
      course: {
        icon: '🎓',
        color: 'blue',
        defaultReadTime: '2h',
      },
      documentation: {
        icon: '📚',
        color: 'green',
        defaultReadTime: '3h',
      },
      guide: {
        icon: '📖',
        color: 'purple',
        defaultReadTime: '1h',
      },
      complementary: {
        icon: '⭐',
        color: 'orange',
        defaultReadTime: '4h',
      },
    },
  };

  /**
   * Normaliza el contenido base agregando campos faltantes
   */
  static normalizeContent(content: Partial<BaseContent>, type: ContentType): BaseContent {
    const config = this.metadata.typeConfig[type];
    const category = this.metadata.categoryMapping[type];
    
    return {
      id: content.id || `${type}-${Date.now()}`,
      title: content.title || '',
      description: content.description || this.generateDescription(content.title || '', type),
      link: content.link || '',
      images: content.images || { light: '', dark: '' },
      type,
      category,
      tags: content.tags || [],
      readTime: content.readTime || config.defaultReadTime,
      difficulty: content.difficulty || 'beginner',
      featured: content.featured || false,
      trending: content.trending || false,
      recent: content.recent || false,
      priority: content.priority || 0,
    };
  }

  /**
   * Genera descripción automática basada en el título y tipo
   */
  private static generateDescription(title: string, type: ContentType): string {
    const baseDescription = this.metadata.defaultDescription[type];
    
    if (!title) return baseDescription;
    
    const lowerTitle = title.toLowerCase();
    
    switch (type) {
      case 'course':
        return `Curso práctico sobre ${lowerTitle}. Aprende paso a paso con ejemplos y ejercicios.`;
      case 'documentation':
        return `Documentación técnica sobre ${lowerTitle}. Contenido del programa ADS-SENA.`;
      case 'guide':
        return `Guía práctica sobre ${lowerTitle}. Mejores prácticas y recomendaciones.`;
      case 'complementary':
        return `Formación complementaria en ${lowerTitle}. Contenido especializado del SENA.`;
      default:
        return baseDescription;
    }
  }

  /**
   * Convierte contenido base a formato de búsqueda
   */
  static toSearchResult(content: BaseContent): SearchResult {
    return {
      id: content.id,
      title: content.title,
      description: content.description,
      category: content.category,
      link: content.link,
      type: content.type,
      tags: content.tags,
      readTime: content.readTime,
    };
  }

  /**
   * Convierte contenido base a item destacado
   */
  static toFeaturedItem(content: BaseContent): FeaturedItem {
    return {
      ...content,
      featured: content.featured || false,
      trending: content.trending || false,
      recent: content.recent || false,
      readTime: content.readTime || this.metadata.typeConfig[content.type].defaultReadTime,
    };
  }

  /**
   * Genera datos de búsqueda para múltiples contenidos
   */
  static generateSearchData(contents: BaseContent[]): SearchResult[] {
    return contents.map(content => this.toSearchResult(content));
  }

  /**
   * Filtra contenido por criterios
   */
  static filterContent(
    contents: BaseContent[], 
    criteria: {
      type?: ContentType;
      featured?: boolean;
      trending?: boolean;
      recent?: boolean;
      tags?: string[];
    }
  ): BaseContent[] {
    return contents.filter(content => {
      if (criteria.type && content.type !== criteria.type) return false;
      if (criteria.featured !== undefined && content.featured !== criteria.featured) return false;
      if (criteria.trending !== undefined && content.trending !== criteria.trending) return false;
      if (criteria.recent !== undefined && content.recent !== criteria.recent) return false;
      if (criteria.tags && !criteria.tags.some(tag => content.tags?.includes(tag))) return false;
      
      return true;
    });
  }

  /**
   * Ordena contenido por prioridad y otros criterios
   */
  static sortContent(contents: BaseContent[], sortBy: 'priority' | 'title' | 'recent' = 'priority'): BaseContent[] {
    return [...contents].sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return (b.priority || 0) - (a.priority || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'recent':
          return (b.recent ? 1 : 0) - (a.recent ? 1 : 0);
        default:
          return 0;
      }
    });
  }

  /**
   * Obtiene metadata de configuración
   */
  static getMetadata(): ContentMetadata {
    return this.metadata;
  }

  /**
   * Obtiene configuración para un tipo específico
   */
  static getTypeConfig(type: ContentType) {
    return this.metadata.typeConfig[type];
  }
}