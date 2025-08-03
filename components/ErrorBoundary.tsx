"use client";

import { Component, ErrorInfo, ReactNode } from 'react';

/**
 * Props for the ErrorBoundary component
 */
interface Props {
  /** Child components to wrap with error boundary */
  children: ReactNode;
  /** Optional custom fallback UI to show when error occurs */
  fallback?: ReactNode;
  /** Whether to show technical error details (useful for development) */
  showError?: boolean;
}

/**
 * State for the ErrorBoundary component
 */
interface State {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error object if one occurred */
  error?: Error;
}

/**
 * ErrorBoundary Component
 * 
 * A React Error Boundary that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage with default fallback
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 * 
 * // With custom fallback
 * <ErrorBoundary fallback={<div>Something went wrong!</div>}>
 *   <MyComponent />
 * </ErrorBoundary>
 * 
 * // With error details in development
 * <ErrorBoundary showError={process.env.NODE_ENV === 'development'}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 * 
 * Features:
 * - Catches and handles JavaScript errors in child components
 * - Provides user-friendly fallback UI
 * - Logs errors with component stack traces
 * - Retry functionality to reset error state
 * - Optional error details display for debugging
 * - Responsive and accessible design
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Static method called when an error occurs during rendering
   * @param error - The error that occurred
   * @returns New state with error information
   */
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called when an error occurs
   * Logs error details and component stack trace
   * @param error - The error that occurred
   * @param errorInfo - Additional error information including component stack
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Error capturado por ErrorBoundary:', error, errorInfo);
    
    // En desarrollo, mostrar más detalles
    if (process.env.NODE_ENV === 'development') {
      console.error('Component Stack:', errorInfo.componentStack);
    }
  }

  /**
   * Handles retry button click to reset error state
   * Allows user to attempt to recover from the error
   */
  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI with consistent styling
      return (
        <div className="min-h-[200px] flex items-center justify-center p-6 bg-muted/50 rounded-lg border border-border">
          <div className="text-center max-w-md">
            <div className="text-4xl mb-4" role="img" aria-label="Warning">⚠️</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Algo salió mal
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ocurrió un error inesperado. Por favor, intenta recargar esta sección.
            </p>
            {this.props.showError && this.state.error && (
              <details className="text-xs text-left bg-destructive/10 p-3 rounded mb-4">
                <summary className="cursor-pointer font-medium">Detalles técnicos</summary>
                <pre className="mt-2 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button 
              onClick={this.handleRetry}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              aria-label="Reintentar carga del componente"
            >
              Reintentar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-Order Component (HOC) that wraps a component with ErrorBoundary
 * 
 * @example
 * ```tsx
 * const SafeMyComponent = withErrorBoundary(MyComponent);
 * 
 * // With custom fallback
 * const SafeMyComponent = withErrorBoundary(
 *   MyComponent, 
 *   <div>Custom error message</div>
 * );
 * ```
 * 
 * @param Component - The component to wrap with error boundary
 * @param fallback - Optional custom fallback UI
 * @returns Component wrapped with ErrorBoundary
 */
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};