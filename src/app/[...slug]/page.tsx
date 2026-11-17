import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { pageByPath, pages } from '@/lib/pages';

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.slice(1).split('/') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageByPath.get('/' + slug.join('/'));
  if (!page) return {};
  return {
    title: page.title,
    description: page.desc,
    alternates: { canonical: page.path },
    openGraph: { title: page.title, description: page.desc, url: page.path, type: 'article', images: [{ url: '/og.jpg', width: 1200, height: 630 }] },
  };
}

export default async function InnerPage({ params }: Props) {
  const { slug } = await params;
  const page = pageByPath.get('/' + slug.join('/'));
  if (!page) notFound();
  return <PageShell page={page} />;
}
