import { render, screen } from '@testing-library/react'
import FeatureCard from '@/components/feature-card/FeatureCard'

// Mock next-themes y framer-motion que ya están en jest.setup.js
const mockProps = {
  title: 'Curso Git',
  description: 'Aprende Git desde cero',
  images: {
    light: '/images/git-light.png',
    dark: '/images/git-dark.png'
  },
  index: 0,
  link: '/docs/cursos/git_curso'
}

describe('FeatureCard', () => {
  it('renders correctly', () => {
    render(<FeatureCard {...mockProps} />)
    
    expect(screen.getByText('Curso Git')).toBeInTheDocument()
    expect(screen.getByText('Aprende Git desde cero')).toBeInTheDocument()
  })

  it('renders with correct image alt text', () => {
    render(<FeatureCard {...mockProps} />)
    
    const image = screen.getByAltText('Imagen representativa de Curso Git')
    expect(image).toBeInTheDocument()
  })

  it('contains correct link', () => {
    render(<FeatureCard {...mockProps} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/docs/cursos/git_curso')
  })

  it('renders with fallback image when no image provided', () => {
    const propsWithoutImages = {
      ...mockProps,
      images: { light: '', dark: '' }
    }
    
    render(<FeatureCard {...propsWithoutImages} />)
    
    const image = screen.getByAltText('Curso Git')
    expect(image).toHaveAttribute('src', expect.stringContaining('fallback.jpg'))
  })
})