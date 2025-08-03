import '@testing-library/jest-dom'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}))

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    resolvedTheme: 'light',
    setTheme: jest.fn(),
  }),
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, ...props }, ref) => {
      const { initial, animate, transition, whileHover, whileTap, ...cleanProps } = props;
      return <div ref={ref} {...cleanProps}>{children}</div>;
    }),
    article: React.forwardRef(({ children, ...props }, ref) => {
      const { initial, animate, transition, whileHover, whileTap, ...cleanProps } = props;
      return <article ref={ref} {...cleanProps}>{children}</article>;
    }),
    span: React.forwardRef(({ children, ...props }, ref) => {
      const { initial, animate, transition, whileHover, whileTap, ...cleanProps } = props;
      return <span ref={ref} {...cleanProps}>{children}</span>;
    }),
  },
  AnimatePresence: ({ children }) => children,
}))

// Setup para mejorar testing experience
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))