import { ContentManager } from '@/lib/content-manager'
import { BaseContent, ContentType } from '@/lib/content-types'

describe('ContentManager', () => {
  const mockContentData = {
    id: 'test-course-1',
    title: 'Test Course',
    description: 'Test description',
    link: '/test-course',
    images: { light: '/test-light.png', dark: '/test-dark.png' },
    tags: ['test', 'course'],
    readTime: '2h',
    featured: true,
    priority: 5
  }

  describe('normalizeContent', () => {
    it('normalizes content with all fields provided', () => {
      const result = ContentManager.normalizeContent(mockContentData, 'course')
      
      expect(result).toMatchObject({
        ...mockContentData,
        type: 'course',
        category: 'Cursos',
        difficulty: 'beginner',
        trending: false,
        recent: false
      })
    })

    it('fills missing fields with defaults', () => {
      const incompleteData = {
        title: 'Incomplete Course'
      }
      
      const result = ContentManager.normalizeContent(incompleteData, 'course')
      
      expect(result.description).toContain('Curso práctico sobre incomplete course')
      expect(result.readTime).toBe('2h')
      expect(result.category).toBe('Cursos')
      expect(result.featured).toBe(false)
    })

    it('generates appropriate description for different content types', () => {
      const testData = { title: 'React Hooks' }
      
      const courseResult = ContentManager.normalizeContent(testData, 'course')
      expect(courseResult.description).toContain('Curso práctico sobre react hooks')
      
      const docResult = ContentManager.normalizeContent(testData, 'documentation')
      expect(docResult.description).toContain('Documentación técnica sobre react hooks')
      
      const guideResult = ContentManager.normalizeContent(testData, 'guide')
      expect(guideResult.description).toContain('Guía práctica sobre react hooks')
    })
  })

  describe('generateSearchData', () => {
    it('converts BaseContent array to SearchResult array', () => {
      const contents: BaseContent[] = [
        ContentManager.normalizeContent(mockContentData, 'course')
      ]
      
      const searchData = ContentManager.generateSearchData(contents)
      
      expect(searchData).toHaveLength(1)
      expect(searchData[0]).toMatchObject({
        id: mockContentData.id,
        title: mockContentData.title,
        description: mockContentData.description,
        category: 'Cursos',
        link: mockContentData.link,
        type: 'course'
      })
    })
  })

  describe('filterContent', () => {
    const testContents: BaseContent[] = [
      ContentManager.normalizeContent({ ...mockContentData, featured: true, trending: false }, 'course'),
      ContentManager.normalizeContent({ ...mockContentData, id: 'test-2', featured: false, trending: true }, 'documentation'),
      ContentManager.normalizeContent({ ...mockContentData, id: 'test-3', featured: true, trending: true }, 'guide')
    ]

    it('filters by type', () => {
      const courseContent = ContentManager.filterContent(testContents, { type: 'course' })
      expect(courseContent).toHaveLength(1)
      expect(courseContent[0].type).toBe('course')
    })

    it('filters by featured status', () => {
      const featuredContent = ContentManager.filterContent(testContents, { featured: true })
      expect(featuredContent).toHaveLength(2)
      expect(featuredContent.every(content => content.featured)).toBe(true)
    })

    it('filters by multiple criteria', () => {
      const filteredContent = ContentManager.filterContent(testContents, { 
        featured: true, 
        trending: true 
      })
      expect(filteredContent).toHaveLength(1)
      expect(filteredContent[0].id).toBe('test-3')
    })
  })

  describe('sortContent', () => {
    const testContents: BaseContent[] = [
      ContentManager.normalizeContent({ ...mockContentData, priority: 10, title: 'B Course' }, 'course'),
      ContentManager.normalizeContent({ ...mockContentData, id: 'test-2', priority: 5, title: 'A Course' }, 'course'),
      ContentManager.normalizeContent({ ...mockContentData, id: 'test-3', priority: 15, title: 'C Course' }, 'course')
    ]

    it('sorts by priority (default)', () => {
      const sorted = ContentManager.sortContent(testContents)
      expect(sorted[0].priority).toBe(15)
      expect(sorted[1].priority).toBe(10)
      expect(sorted[2].priority).toBe(5)
    })

    it('sorts by title', () => {
      const sorted = ContentManager.sortContent(testContents, 'title')
      expect(sorted[0].title).toBe('A Course')
      expect(sorted[1].title).toBe('B Course')
      expect(sorted[2].title).toBe('C Course')
    })
  })
})