import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
          src="/images/logo.png"
          alt="Farcho Dev - Plataforma Educativa"
          style={{
            width: '150px',
            height: '25px',
            objectFit: 'cover',
          }}
        />
      </div>
),

  },
  links: [
    {
      text: 'Inicio',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Cursos',
      url: '/courses',
      active: 'nested-url',
    },
    {
     text: 'Análisis y Desarrollo de Software',
     url: '/adso',
     active: 'nested-url',
   },
    {
      text: 'Formación Complementaria',
      url: '/complementary',
      active: 'nested-url',
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};
