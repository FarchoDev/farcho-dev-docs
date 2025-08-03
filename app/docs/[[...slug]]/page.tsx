import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  try {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;

    return (
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <ErrorBoundary 
            showError={process.env.NODE_ENV === 'development'}
            fallback={
              <div className="p-6 text-center border border-destructive/50 rounded-lg bg-destructive/5">
                <p className="text-sm text-muted-foreground">
                  Error al cargar el contenido de la documentación.
                </p>
              </div>
            }
          >
            <MDX components={{ ...defaultMdxComponents }} />
          </ErrorBoundary>
        </DocsBody>
      </DocsPage>
    );
  } catch (error) {
    console.error('Error en la página de documentación:', error);
    notFound();
  }
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  try {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
      title: page.data.title,
      description: page.data.description,
    };
  } catch (error) {
    console.error('Error generando metadata:', error);
    return {
      title: 'Farcho Dev Docs',
      description: 'Documentación técnica y cursos especializados',
    };
  }
}
