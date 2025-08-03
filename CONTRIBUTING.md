# 🤝 Guía de Contribución - Farcho Dev Docs

¡Gracias por tu interés en contribuir a Farcho Dev Docs! Esta guía te ayudará a contribuir de manera efectiva.

## 📋 Tabla de Contenidos
- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Standards de Desarrollo](#standards-de-desarrollo)
- [Testing Guidelines](#testing-guidelines)
- [Proceso de Review](#proceso-de-review)
- [Recursos Útiles](#recursos-útiles)

## 🤗 Código de Conducta

### Nuestros Valores
- **Respeto**: Tratamos a todos con respeto y dignidad
- **Inclusión**: Valoramos la diversidad y promovemos un ambiente inclusivo
- **Colaboración**: Trabajamos juntos hacia objetivos comunes
- **Aprendizaje**: Fomentamos el crecimiento y aprendizaje continuo

### Comportamientos Esperados
- Usar lenguaje constructivo y profesional
- Respetar diferentes puntos de vista y experiencias
- Dar y recibir feedback constructivo
- Enfocar en lo que es mejor para la comunidad

## 🚀 Cómo Contribuir

### Tipos de Contribuciones
1. **🐛 Bug Reports**: Reportar errores encontrados
2. **✨ Feature Requests**: Sugerir nuevas funcionalidades
3. **📖 Documentación**: Mejorar docs existentes o crear nuevas
4. **🎨 UI/UX**: Mejoras en interfaz y experiencia de usuario
5. **🧪 Testing**: Agregar o mejorar tests
6. **🔧 Code**: Implementar features o fix bugs

### Proceso de Contribución

#### 1. Setup Inicial
```bash
# Fork el repositorio en GitHub
git clone https://github.com/tu-usuario/farcho-dev-docs.git
cd farcho-dev-docs
npm install --legacy-peer-deps
```

#### 2. Crear Branch
```bash
# Crear branch desde main
git checkout -b tipo/descripcion-corta

# Ejemplos:
git checkout -b feat/nueva-seccion-python
git checkout -b fix/error-imagen-tema-oscuro
git checkout -b docs/guia-instalacion
```

#### 3. Hacer Cambios
- Implementar los cambios siguiendo los [Standards](#standards-de-desarrollo)
- Agregar tests si es necesario
- Actualizar documentación relevante

#### 4. Testing
```bash
# Ejecutar tests
npm test

# Verificar linting
npm run lint

# Verificar formato
npm run format:check
```

#### 5. Commit
Usamos **Conventional Commits**:
```bash
# Formato: tipo(scope): descripción
git commit -m "feat(components): agregar componente VideoPlayer"
git commit -m "fix(grid): corregir responsive en mobile"
git commit -m "docs(readme): actualizar guía de instalación"
```

**Tipos de commit:**
- `feat`: Nueva funcionalidad
- `fix`: Correción de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan funcionalidad)
- `refactor`: Refactoring de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

#### 6. Push y Pull Request
```bash
git push origin nombre-de-tu-branch
```

Crear Pull Request en GitHub con:
- **Título descriptivo** siguiendo conventional commits
- **Descripción detallada** de los cambios
- **Screenshots** si hay cambios visuales
- **Referencias** a issues relacionados

## 🎯 Standards de Desarrollo

### TypeScript
```typescript
// ✅ Bueno: Tipos explícitos y JSDoc
/**
 * Componente para mostrar tarjetas de curso
 * @param props - Props del componente
 */
interface CourseCardProps {
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, link }) => {
  // implementación
};

// ❌ Malo: Sin tipos ni documentación
const CourseCard = ({ title, description, link }) => {
  // implementación
};
```

### Componentes React
```tsx
// ✅ Estructura recomendada
"use client";

import { memo } from 'react';
import { APP_CONFIG } from '@/lib/config';

/**
 * JSDoc completo describiendo el componente
 */
interface ComponentProps {
  // Props con comentarios
}

const Component = memo<ComponentProps>(({ prop1, prop2 }) => {
  // Hooks al inicio
  
  // Lógica del componente
  
  // Return con JSX limpio
  return (
    <div className="clase-descriptiva">
      {/* contenido */}
    </div>
  );
});

Component.displayName = 'Component';

export default Component;
export type { ComponentProps };
```

### CSS/Tailwind
```tsx
// ✅ Bueno: Clases ordenadas y descriptivas
<div className="
  flex flex-col items-center
  p-4 md:p-6 lg:p-8
  bg-white dark:bg-gray-900
  rounded-xl shadow-md
  border border-gray-200 dark:border-gray-700
  hover:shadow-lg transition-shadow
">

// ❌ Malo: Clases desordenadas
<div className="p-4 flex bg-white rounded-xl flex-col border items-center">
```

### Naming Conventions
- **Componentes**: PascalCase (`FeatureCard`, `GridContainer`)
- **Archivos**: PascalCase para componentes, kebab-case para otros
- **Variables**: camelCase (`courseData`, `isLoading`)
- **Constantes**: UPPER_SNAKE_CASE (`APP_CONFIG`, `API_ENDPOINTS`)

### Configuración Centralizada
```typescript
// ✅ Usar APP_CONFIG
import { APP_CONFIG } from '@/lib/config';

const duration = APP_CONFIG.animation.duration;
const imageSrc = images.light || APP_CONFIG.images.fallback;

// ❌ Hardcoded values
const duration = 0.5;
const imageSrc = images.light || '/fallback.jpg';
```

## 🧪 Testing Guidelines

### Estructura de Tests
```typescript
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  const mockProps = {
    // props de prueba
  };

  it('renders correctly', () => {
    render(<Component {...mockProps} />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles interaction correctly', () => {
    // test de interacción
  });
});
```

### Qué Testear
**✅ SI testear:**
- Lógica de negocio compleja
- Interacciones de usuario
- Casos edge y errores
- Componentes críticos del sistema

**❌ NO testear:**
- Implementación interna
- Estilos CSS
- Librerías externas
- Funcionalidad trivial

### Coverage Goals
- **Componentes críticos**: >80%
- **Utilidades**: >90%
- **Overall**: >70%

## 🔍 Proceso de Review

### Checklist para PRs
- [ ] **Código**: Sigue standards establecidos
- [ ] **Tests**: Tests pasan y coverage adecuado
- [ ] **Docs**: JSDoc actualizado para nuevos componentes
- [ ] **Performance**: No impacto negativo significativo
- [ ] **Accessibility**: Componentes accesibles (ARIA, keyboard nav)
- [ ] **Responsive**: Funciona en todos los breakpoints

### Criterios de Aprobación
1. **Funcionalidad**: Código funciona como se espera
2. **Calidad**: Mantiene o mejora calidad del código
3. **Testing**: Tests apropiados incluidos
4. **Documentación**: Cambios documentados

### Timeline
- **Review inicial**: 2-3 días laborales
- **Feedback**: Respuesta en 1-2 días
- **Merge**: Después de approval y checks pasando

## 📚 Recursos Útiles

### Documentación Técnica
- [TECHNICAL_README.md](./TECHNICAL_README.md) - Arquitectura del proyecto
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide

### Tools y Setup
- **Editor**: VS Code recomendado
- **Extensions**: 
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter

### Learning Resources
- [React Best Practices](https://react.dev/learn)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Testing Library](https://testing-library.com/docs/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Necesitas Ayuda?

### Canales de Comunicación
- **Issues**: Para bugs y feature requests
- **Discussions**: Para preguntas generales
- **Email**: [contacto] para asuntos privados

### FAQ Común

**Q: ¿Cómo agrego nuevo contenido?**
A: Agrega datos en `data/` siguiendo el formato existente. El ContentManager lo normalizará automáticamente.

**Q: ¿Los tests fallan localmente?**
A: Ejecuta `npm install --legacy-peer-deps` y luego `npm test`.

**Q: ¿Cómo actualizo imágenes?**
A: Coloca imágenes en `public/images/` y referencia con ruta absoluta.

---

## 🎉 ¡Gracias por Contribuir!

Tu contribución hace que Farcho Dev Docs sea mejor para toda la comunidad de estudiantes ADS-SENA. 

**¡Esperamos tu Pull Request!** 🚀

---

**Última actualización**: Agosto 2025 - v1.0.0