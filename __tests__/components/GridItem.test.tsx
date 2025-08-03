import { render, screen } from '@testing-library/react'
import GridItem from '@/components/items/GridItem'

const mockProps = {
  title: 'Curso Git Avanzado',
  link: '/docs/cursos/git_curso',
  images: {
    light: '/images/git-light.png',
    dark: '/images/git-dark.png'
  }
}

describe('GridItem', () => {
  it('renders correctly', () => {
    render(<GridItem {...mockProps} />)
    
    expect(screen.getByText('Curso Git Avanzado')).toBeInTheDocument()
    expect(screen.getByText('Ver más')).toBeInTheDocument()
  })

  it('renders with correct image alt text', () => {
    render(<GridItem {...mockProps} />)
    
    const image = screen.getByAltText('Imagen representativa de Curso Git Avanzado')
    expect(image).toBeInTheDocument()
  })

  it('contains correct link', () => {
    render(<GridItem {...mockProps} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/docs/cursos/git_curso')
  })

  it('renders with fallback image when no image provided', () => {
    const propsWithoutImages = {
      ...mockProps,
      images: { light: '', dark: '' }
    }
    
    render(<GridItem {...propsWithoutImages} />)
    
    const image = screen.getByAltText('Imagen representativa de Curso Git Avanzado')
    expect(image).toHaveAttribute('src', expect.stringContaining('fallback.jpg'))
  })

  it('shows title as tooltip', () => {
    render(<GridItem {...mockProps} />)
    
    const titleElement = screen.getByText('Curso Git Avanzado')
    expect(titleElement).toHaveAttribute('title', 'Curso Git Avanzado')
  })
})