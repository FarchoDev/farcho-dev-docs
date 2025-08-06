// lib/content-types.ts
export type ContentType = 'course' | 'documentation' | 'guide' | 'complementary';

export interface BaseContent {
  date: unknown;
  author: string;
  id: string;
  title: string;
  description: string;
  link: string;
  images: {
    light: string;
    dark: string;
  };
  type: ContentType;
  category: string;
  tags?: string[];
  readTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  featured?: boolean;
  trending?: boolean;
  recent?: boolean;
  priority?: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  type: ContentType;
  tags?: string[];
  readTime?: string;
}

export interface FeaturedItem extends BaseContent {
  featured: boolean;
  trending: boolean;
  recent: boolean;
  readTime: string;
}

// Metadata para generación automática de contenido
export interface ContentMetadata {
  defaultDescription: Record<ContentType, string>;
  categoryMapping: Record<ContentType, string>;
  typeConfig: Record<ContentType, {
    icon: string;
    color: string;
    defaultReadTime: string;
  }>;
}