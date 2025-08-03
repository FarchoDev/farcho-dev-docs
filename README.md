# 📚 Farcho Dev Docs

> Plataforma educativa independiente para estudiantes del programa **Análisis y Desarrollo de Software - SENA**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

## 🎯 Sobre el Proyecto

Farcho Dev Docs es una plataforma educativa diseñada específicamente para estudiantes del programa ADS-SENA, proporcionando:

- **📖 Cursos Prácticos**: Git, GitHub, Conventional Commits y más
- **📚 Documentación Técnica**: Sistemas operativos, redes, virtualización
- **⭐ Formación Complementaria**: Contenido especializado del SENA
- **🔍 Búsqueda Inteligente**: Encuentra contenido fácilmente
- **🌙 Tema Adaptativo**: Modo claro y oscuro
- **📱 Responsive**: Optimizado para todos los dispositivos

## 🚀 Quick Start

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Instalación
```bash
# Clonar repositorio
git clone https://github.com/FarchoDev/farcho-dev-docs.git
cd farcho-dev-docs

# Instalar dependencias
npm install --legacy-peer-deps

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Arquitectura

### Stack Tecnológico
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX + Fumadocs
- **Testing**: Jest + Testing Library
- **Linting**: ESLint + Prettier

### Características Clave
- ✅ **100% TypeScript** - Type safety completo
- ✅ **Sistema DRY** - ContentManager elimina duplicación 
- ✅ **Configuración Centralizada** - APP_CONFIG para todo
- ✅ **Error Boundaries** - Manejo robusto de errores
- ✅ **Testing Comprehensivo** - 22+ test cases
- ✅ **Accesibilidad** - ARIA labels y keyboard navigation
- ✅ **Performance** - Image optimization y lazy loading

## 📁 Estructura del Proyecto

```
├── app/                    # Next.js App Router
├── components/             # Componentes React
│   ├── feature-card/      # Tarjetas destacadas
│   ├── grids/             # Layouts de grid
│   └── ui/                # Componentes base
├── lib/                   # Utilidades y lógica
│   ├── config.ts          # Configuración centralizada
│   └── content-manager.ts # Gestión de contenido
├── data/                  # Datos estructurados
├── __tests__/             # Tests unitarios
└── content/               # Contenido MDX
```

## 🧩 Componentes Principales

### FeatureCard
Tarjetas adaptativas con soporte para temas e imágenes dinámicas.

### GridContainer
Layout responsivo para organizar contenido en grids.

### ErrorBoundary  
Sistema robusto de manejo de errores con fallbacks elegantes.

### ContentManager
Clase centralizada que elimina duplicación y normaliza contenido.

## 📊 Scripts Disponibles

```bash
# Desarrollo
npm run dev                # Servidor desarrollo
npm run build              # Build producción  
npm run start              # Servidor producción

# Calidad
npm run lint               # ESLint
npm run format             # Prettier
npm test                   # Jest tests

# Utilidades
npm run type-check         # Verificar tipos
npm run test:coverage      # Coverage report
```

## 🧪 Testing

El proyecto incluye tests comprehensivos con:
- **Unit Tests**: Componentes individuales
- **Integration Tests**: Flujos completos
- **Type Tests**: Verificación de tipos TypeScript

```bash
npm test                   # Ejecutar todos los tests
npm run test:watch         # Modo watch
npm run test:coverage      # Reporte de coverage
```

## 📖 Documentación

- **[TECHNICAL_README.md](./TECHNICAL_README.md)** - Documentación técnica completa
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guía de contribución
- **JSDoc** - Documentación inline en componentes

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Lee la [Guía de Contribución](./CONTRIBUTING.md)
2. Fork el proyecto
3. Crea tu feature branch (`git checkout -b feat/nueva-funcionalidad`)
4. Commit tus cambios (`git commit -m 'feat: nueva funcionalidad'`)
5. Push a la branch (`git push origin feat/nueva-funcionalidad`)
6. Abre un Pull Request

### Standards de Código
- TypeScript strict habilitado
- ESLint + Prettier configurado
- Tests unitarios requeridos
- JSDoc para componentes públicos
- Conventional Commits

## 🔧 Performance

### Métricas Actuales
- **Bundle Size**: Optimizado con tree shaking
- **Lighthouse Score**: >90 en todas las métricas
- **Type Coverage**: 100% 
- **Test Coverage**: >70%

### Optimizaciones
- Image optimization con Next.js
- Code splitting automático
- Lazy loading de componentes
- Preloading de recursos críticos

## 🌟 Roadmap

### ✅ Fase 1 - Calidad Básica (Completada)
- [x] Migración completa a TypeScript
- [x] Error Boundaries implementados
- [x] Testing configurado con Jest
- [x] Documentación de componentes

### 🔄 Fase 2 - Escalabilidad (En Progreso)
- [x] Sistema de configuración centralizada
- [ ] Pipeline CI/CD básico
- [ ] Auditoría de performance
- [ ] CMS headless integration

### 🔮 Fase 3 - Features Avanzadas
- [ ] Sistema de usuarios y progreso
- [ ] Analytics y tracking
- [ ] PWA capabilities
- [ ] Internacionalización

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Farcho Dev**
- GitHub: [@FarchoDev](https://github.com/FarchoDev)
- Website: [farcho-dev-docs.vercel.app](https://farcho-dev-docs.vercel.app)

## 🙏 Agradecimientos

- **SENA** - Por la formación en Análisis y Desarrollo de Software
- **Comunidad Open Source** - Por las herramientas increíbles
- **Estudiantes ADS** - Por motivar este proyecto

---

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
