# 📚 Farcho Dev Docs - Documentación Técnica

## 🏗️ Arquitectura del Proyecto

Este proyecto es una plataforma educativa independiente construida con **Next.js 15**, **TypeScript**, y **Tailwind CSS**, dirigida a estudiantes del programa Análisis y Desarrollo de Software - SENA.

### 🎯 Principios de Diseño

- **DRY (Don't Repeat Yourself)**: Sistema unificado de gestión de contenido
- **Configuración Centralizada**: Todas las configuraciones en `APP_CONFIG`
- **Type Safety**: TypeScript en toda la aplicación
- **Component-Driven**: Arquitectura basada en componentes reutilizables
- **Performance First**: Optimizaciones de imagen y lazy loading
- **Accessibility**: Componentes accesibles con ARIA labels

## 📁 Estructura del Proyecto

```
/app/
├── app/                          # Next.js App Router
│   ├── (home)/                  # Página principal
│   ├── (courses)/               # Sección de cursos
│   ├── (adso)/                  # Contenido ADS-SENA
│   ├── (complementary)/         # Formación complementaria
│   ├── docs/                    # Documentación
│   ├── layout.tsx               # Layout principal
│   └── global.css               # Estilos globales
├── components/                   # Componentes React
│   ├── feature-card/            # Tarjetas de contenido destacado
│   ├── items/                   # Elementos de grid
│   ├── grids/                   # Contenedores de grid
│   ├── ui/                      # Componentes de UI base
│   ├── features-*/              # Secciones de características
│   └── ErrorBoundary.tsx        # Manejo de errores
├── lib/                         # Utilidades y lógica de negocio
│   ├── config.ts                # Configuración centralizada
│   ├── content-manager.ts       # Gestor de contenido
│   ├── content-types.ts         # Tipos TypeScript
│   └── utils.ts                 # Utilidades generales
├── data/                        # Datos de contenido
│   ├── unified-content.ts       # Sistema unificado de contenido
│   ├── courses.ts               # Datos de cursos
│   ├── documents.ts             # Documentación
│   └── complementary.ts         # Contenido complementario
├── __tests__/                   # Tests unitarios
├── public/images/               # Recursos estáticos
└── content/docs/                # Contenido MDX
```

## 🧩 Componentes Principales

### 🎴 FeatureCard
Componente para mostrar contenido destacado con imágenes adaptativas al tema.

```tsx
<FeatureCard
  title="Curso Git"
  description="Domina Git desde lo básico"
  images={{ light: "/git-light.svg", dark: "/git-dark.svg" }}
  index={0}
  link="/docs/cursos/git_curso"
/>
```

**Características:**
- Imágenes adaptativas a tema claro/oscuro
- Animaciones escalonadas usando framer-motion
- Fallback automático para imágenes faltantes
- Accesibilidad completa con ARIA labels

### 🎯 GridItem
Elemento de grid reutilizable para mostrar contenido en layouts de grilla.

```tsx
<GridItem
  title="Sistemas Operativos"
  link="/docs/sistemas"
  images={{ light: "/sistemas-light.svg", dark: "/sistemas-dark.svg" }}
/>
```

### 🗂️ GridContainer
Contenedor responsivo que organiza elementos en grid.

```tsx
<GridContainer items={courseItems} />
```

**Features:**
- Grid responsivo (1→2→3 columnas)
- Animaciones consistentes
- Accesibilidad con roles ARIA

### 🛡️ ErrorBoundary
Sistema de manejo de errores para componentes React.

```tsx
<ErrorBoundary showError={isDev}>
  <MyComponent />
</ErrorBoundary>
```

## 🎨 Sistema de Gestión de Contenido

### ContentManager
Clase centralizada para gestión de contenido que elimina duplicación.

```typescript
// Normalizar contenido
const content = ContentManager.normalizeContent(rawData, 'course');

// Filtrar contenido
const featured = ContentManager.filterContent(allContent, { featured: true });

// Generar datos de búsqueda
const searchData = ContentManager.generateSearchData(contents);
```

### Tipos de Contenido
- **course**: Cursos prácticos
- **documentation**: Docs técnicas ADS-SENA  
- **guide**: Guías prácticas
- **complementary**: Formación complementaria

## ⚙️ Configuración Centralizada

Todo está centralizado en `APP_CONFIG` para facilitar mantenimiento:

```typescript
import { APP_CONFIG } from '@/lib/config';

// Animaciones
APP_CONFIG.animation.duration
APP_CONFIG.animation.ease

// Imágenes
APP_CONFIG.images.fallback
APP_CONFIG.images.quality

// Rutas
APP_CONFIG.routes.docs
APP_CONFIG.routes.courses
```

## 🧪 Testing

### Configuración
- **Jest** para testing framework
- **Testing Library** para testing de componentes
- **Mocks** para Next.js, framer-motion, next-themes

### Estructura de Tests
```
__tests__/
├── components/
│   ├── FeatureCard.test.tsx
│   ├── GridItem.test.tsx
│   └── ErrorBoundary.test.tsx
└── lib/
    └── ContentManager.test.ts
```

### Ejecutar Tests
```bash
npm test                    # Ejecutar todos los tests
npm run test:watch         # Modo watch
npm run test:coverage      # Con coverage
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev                # Servidor de desarrollo
npm run build              # Build de producción
npm run start              # Servidor de producción

# Calidad de código
npm run lint               # ESLint
npm run lint:fix           # Fix automático
npm run format             # Prettier
npm run format:check       # Check formato

# Testing
npm test                   # Jest tests
npm run test:watch         # Tests en modo watch
npm run test:coverage      # Coverage report
```

## 🎨 Theming y Estilos

### Tailwind CSS
- **Tailwind CSS v4** con configuración personalizada
- **CSS Variables** para temas dinámicos
- **Responsive design** mobile-first

### Temas
- Soporte automático para modo claro/oscuro
- Variables CSS dinámicas
- Componentes adaptivos usando `next-themes`

## 📱 Responsive Design

### Breakpoints
```typescript
sm: '640px'    // Tablet pequeña
md: '768px'    // Tablet
lg: '1024px'   // Desktop
xl: '1280px'   # Desktop grande
2xl: '1536px'  # Ultra wide
```

### Patterns
```tsx
// Grid responsivo
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"

// Spacing responsivo
className="p-4 md:p-6 lg:p-8"

// Typography responsivo
className="text-2xl md:text-3xl lg:text-4xl"
```

## 🔧 Performance

### Optimizaciones Implementadas
- **Image Optimization**: Next.js Image con lazy loading
- **Code Splitting**: Automático con Next.js App Router
- **Static Generation**: Para contenido estático
- **Preloading**: Imágenes críticas con `priority={true}`

### Métricas Objetivo
- **Lighthouse Score**: >90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🛠️ Desarrollo

### Requisitos
- Node.js 18+
- npm/yarn
- Git

### Setup Inicial
```bash
git clone <repository>
cd farcho-dev-docs
npm install
npm run dev
```

### Convenciones de Código
- **TypeScript strict mode**
- **ESLint + Prettier** para formato
- **Conventional Commits** para mensajes
- **Component naming**: PascalCase
- **File naming**: kebab-case para CSS, PascalCase para componentes

### Añadir Nuevo Contenido

1. **Agregar datos en `data/`**:
```typescript
// data/courses.ts
const newCourse = {
  id: 'course-react',
  title: 'Curso React',
  description: 'Aprende React desde cero',
  // ...
};
```

2. **El ContentManager normalizará automáticamente**
3. **Aparecerá en búsqueda y grids automáticamente**

## 🔒 Seguridad

- **No sensitive data** en código cliente
- **Sanitization** de contenido MDX
- **HTTPS** obligatorio en producción
- **Content Security Policy** configurado

## 📊 Monitoreo

### Métricas Actuales
- **Bundle Size**: ~XXX KB
- **Test Coverage**: XX%
- **Type Coverage**: 100%

### Herramientas
- **Vercel Analytics** para métricas de rendimiento
- **Jest Coverage** para cobertura de tests
- **TypeScript** para type safety

## 🤝 Contribución

1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit con conventional commits (`git commit -m 'feat: nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Standards de Código
- Todos los componentes deben tener JSDoc
- Tests unitarios para lógica compleja
- TypeScript strict habilitado
- Accesibilidad (a11y) requerida

---

## 📞 Soporte

Para preguntas técnicas o contribuciones, contacta:
- **Author**: Farcho Dev
- **Repository**: [GitHub](https://github.com/FarchoDev)
- **Documentation**: Esta guía técnica

---

**Última actualización**: Agosto 2025 - v1.0.0