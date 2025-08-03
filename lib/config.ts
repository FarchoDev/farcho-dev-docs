// lib/config.ts - CONFIGURACIÓN CENTRALIZADA
export const APP_CONFIG = {
  // Información de la aplicación
  app: {
    name: 'Farcho Dev Docs',
    version: '1.0.0',
    description: 'Plataforma educativa independiente para estudiantes del programa Análisis y Desarrollo de Software - SENA',
    author: 'Farcho Dev',
    url: 'https://farcho-dev-docs.vercel.app',
  },

  // Rutas de la aplicación
  routes: {
    home: '/',
    docs: '/docs',
    courses: '/courses',
    adso: '/adso',
    complementary: '/complementary',
    about: '/about',
    contact: '/contact',
    legal: '/LegalPage',
    faqs: '/faqs',
    blog: '/blog',
  },

  // API endpoints
  api: {
    search: '/api/search',
  },

  // Configuración de animaciones
  animation: {
    staggerDelay: 0.1,
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    transitions: {
      fast: { duration: 0.2 },
      normal: { duration: 0.5 },
      slow: { duration: 0.8 },
    },
  },

  // Configuración de imágenes
  images: {
    fallback: '/images/fallback.jpg',
    placeholder: '/images/placeholder.jpg',
    logo: '/images/logo.png',
    defaultSizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality: 85,
  },

  // Configuración de SEO
  seo: {
    defaultTitle: 'Farcho Dev Docs',
    titleTemplate: '%s | Farcho Dev Docs',
    defaultDescription: 'Plataforma educativa independiente para estudiantes del programa Análisis y Desarrollo de Software - SENA',
    siteUrl: 'https://farcho-dev-docs.vercel.app',
    ogImage: '/images/og-image.jpg',
    twitterHandle: '@farcho_dev',
  },

  // Configuración de layout
  layout: {
    maxWidth: 'screen-xl',
    padding: {
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    },
    spacing: {
      section: 'py-12 md:py-16 lg:py-20',
      component: 'mb-8 md:mb-12',
    },
  },

  // Configuración de componentes
  components: {
    // FeatureCard
    featureCard: {
      aspectRatio: '4/5',
      hoverScale: 1.02,
      tapScale: 0.98,
      borderRadius: 'rounded-xl',
    },
    
    // Hero section
    hero: {
      minHeight: 'min-h-screen',
      backgroundPattern: true,
    },

    // Navigation
    nav: {
      maxItems: 6,
      mobileBreakpoint: 'md',
    },
  },

  // Enlaces externos
  external: {
    github: 'https://github.com/FarchoDev',
    sena: 'https://www.sena.edu.co',
    vercel: 'https://vercel.com',
  },

  // Configuración de contenido
  content: {
    itemsPerPage: 12,
    searchResultsLimit: 50,
    featuredLimit: 6,
    recentLimit: 4,
    defaultReadTime: '2h',
    supportedLanguages: ['es', 'en'],
    defaultLanguage: 'es',
  },

  // Configuración de desarrollo
  dev: {
    showErrorDetails: process.env.NODE_ENV === 'development',
    enableLogging: process.env.NODE_ENV === 'development',
    hotReload: true,
  },

  // Configuración de performance
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    prefetchLinks: true,
    cacheMaxAge: 3600, // 1 hora
  },

  // Configuración de breakpoints (Tailwind)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Configuración de colores del tema (referencia)
  theme: {
    colors: {
      primary: {
        light: 'oklch(0.922 0 0)',
        dark: 'oklch(0.488 0.243 264.376)',
      },
      background: {
        light: 'oklch(1 0 0)',
        dark: 'oklch(0.145 0 0)',
      },
    },
  },
} as const;

// Tipos para TypeScript
export type AppConfig = typeof APP_CONFIG;
export type Routes = typeof APP_CONFIG.routes;
export type AnimationConfig = typeof APP_CONFIG.animation;

// Utilidades para acceder a la configuración
export const getRoute = (key: keyof Routes): string => APP_CONFIG.routes[key];
export const getAnimationConfig = () => APP_CONFIG.animation;
export const getImageConfig = () => APP_CONFIG.images;
export const getSEOConfig = () => APP_CONFIG.seo;