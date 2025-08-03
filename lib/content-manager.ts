/**
 * Content Management System
 * 
 * Centralized content management utilities that provide DRY (Don't Repeat Yourself) 
 * principles for handling all types of content in the application.
 * 
 * @fileoverview This module provides a unified system for managing content across
 * the application, eliminating data duplication and providing consistent interfaces
 * for courses, documentation, guides, and complementary content.
 */

import { BaseContent, SearchResult, FeaturedItem, ContentType, ContentMetadata } from './content-types';

/**
 * ContentManager Class
 * 
 * Central class for managing all content operations including normalization,
 * filtering, sorting, and transformation of content data.
 * 
 * @example
 * ```typescript
 * // Normalize content
 * const normalizedContent = ContentManager.normalizeContent(rawData, 'course');
 * 
 * // Generate search data
 * const searchData = ContentManager.generateSearchData(contents);
 * 
 * // Filter content
 * const featuredCourses = ContentManager.filterContent(contents, { 
 *   type: 'course', 
 *   featured: true 
 * });
 * ```
 */
export class ContentManager {
  /**
   * Static metadata configuration for content management
   * Contains default descriptions, category mappings, and type configurations
   */
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
   * Normalizes content by adding missing fields and ensuring consistency
   * 
   * @param content - Partial content object to normalize
   * @param type - The content type (course, documentation, guide, complementary)
   * @returns Fully normalized BaseContent object
   * 
   * @example
   * ```typescript
   * const rawContent = { 
   *   title: 'React Basics', 
   *   link: '/react-basics' 
   * };
   * const normalized = ContentManager.normalizeContent(rawContent, 'course');
   * // Returns complete BaseContent with generated description, category, etc.
   * ```
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
   * Generates automatic description based on title and content type
   * 
   * @param title - The content title
   * @param type - The content type
   * @returns Generated description string
   * 
   * @private
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
   * Converts BaseContent to SearchResult format
   * 
   * @param content - The content to convert
   * @returns SearchResult object optimized for search functionality
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
   * Converts BaseContent to FeaturedItem format
   * 
   * @param content - The content to convert
   * @returns FeaturedItem object with all required featured properties
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
   * Generates search data for multiple content items
   * 
   * @param contents - Array of content to convert
   * @returns Array of SearchResult objects
   * 
   * @example
   * ```typescript
   * const searchData = ContentManager.generateSearchData(allContent);
   * // Use for search functionality
   * ```
   */
  static generateSearchData(contents: BaseContent[]): SearchResult[] {
    return contents.map(content => this.toSearchResult(content));
  }

  /**
   * Filters content based on specified criteria
   * 
   * @param contents - Array of content to filter
   * @param criteria - Filter criteria object
   * @returns Filtered array of content
   * 
   * @example
   * ```typescript
   * // Get featured courses
   * const featuredCourses = ContentManager.filterContent(allContent, {
   *   type: 'course',
   *   featured: true
   * });
   * 
   * // Get content with specific tags
   * const gitContent = ContentManager.filterContent(allContent, {
   *   tags: ['git']
   * });
   * ```
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
   * Sorts content based on specified criteria
   * 
   * @param contents - Array of content to sort
   * @param sortBy - Sorting criteria ('priority', 'title', 'recent')
   * @returns Sorted array of content (new array, doesn't mutate original)
   * 
   * @example
   * ```typescript
   * // Sort by priority (highest first)
   * const sortedByPriority = ContentManager.sortContent(contents, 'priority');
   * 
   * // Sort alphabetically by title
   * const sortedByTitle = ContentManager.sortContent(contents, 'title');
   * ```
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
   * Gets the complete metadata configuration
   * 
   * @returns Complete ContentMetadata object
   */
  static getMetadata(): ContentMetadata {
    return this.metadata;
  }

  /**
   * Gets configuration for a specific content type
   * 
   * @param type - The content type to get configuration for
   * @returns Type-specific configuration object
   */
  static getTypeConfig(type: ContentType) {
    return this.metadata.typeConfig[type];
  }
}