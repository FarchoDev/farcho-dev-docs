// data/courses.ts - NUEVA VERSIÓN MEJORADA
import { BaseContent } from '@/lib/content-types';
import { ContentManager } from '@/lib/content-manager';

// Datos base de cursos (DRY - Single Source of Truth)
const rawCourses = [
  {
    id: 'course-git',
    title: 'Curso Git',
    description: 'Domina Git desde lo básico hasta técnicas avanzadas de versionado y colaboración.',
    link: '/docs/cursos/git_curso',
    images: {
      light: '/images/index-images/cursos/git-logo.svg',
      dark: '/images/index-images/cursos/git-logo-dark.svg',
    },
    tags: ['git', 'version-control', 'development'],
    readTime: '4h',
    difficulty: 'beginner' as const,
    featured: true,
    trending: true,
    recent: false,
    priority: 10,
  },
  {
    id: 'course-github',
    title: 'Curso GitHub',
    description: 'Automatiza tu flujo de trabajo con GitHub Actions y CI/CD.',
    link: '/docs/cursos/github_curso',
    images: {
      light: '/images/index-images/cursos/github-logo.svg',
      dark: '/images/index-images/cursos/github-logo-dark.svg',
    },
    tags: ['github', 'ci-cd', 'automation', 'git'],
    readTime: '2h',
    difficulty: 'intermediate' as const,
    featured: false,
    trending: true,
    recent: false,
    priority: 8,
  },
  {
    id: 'course-conventional-commits',
    title: 'Curso Conventional Commits',
    description: 'Estandariza tus commits con la especificación Conventional Commits.',
    link: '/docs/cursos/cc_curso',
    images: {
      light: '/images/index-images/cursos/conventional-commits-logo.svg',
      dark: '/images/index-images/cursos/conventional-commits-logo-dark.svg',
    },
    tags: ['commits', 'standards', 'git', 'best-practices'],
    readTime: '1h',
    difficulty: 'beginner' as const,
    featured: false,
    trending: false,
    recent: true,
    priority: 6,
  },
];

// Normalizar usando ContentManager
export const courses: BaseContent[] = rawCourses.map(course => 
  ContentManager.normalizeContent(course, 'course')
);

// Exportar datos específicos para retrocompatibilidad
export const coursesLegacy = courses.map(course => ({
  title: course.title,
  description: course.description,
  link: course.link,
  images: course.images,
}));