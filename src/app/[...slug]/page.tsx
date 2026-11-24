import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { pageByPath, pages } from '@/lib/pages';
import { seo } from '@/lib/seo';

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.slice(1).split('/') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageByPath.get('/' + slug.join('/'));
  if (!page) return {};
  const s = seo[page.path] ?? { title: page.title, desc: page.desc };
  return {
    title: s.title,
    description: s.desc,
    alternates: { canonical: page.path },
    openGraph: { title: s.title, description: s.desc, url: page.path, type: 'article', locale: 'en_IN', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Kumbhalkar College of Social Work, Wardha' }] },
    twitter: { card: 'summary_large_image', title: s.title, description: s.desc },
  };
}

export default async function InnerPage({ params }: Props) {
  const { slug } = await params;
  const page = pageByPath.get('/' + slug.join('/'));
  if (!page) notFound();
  return <PageShell page={page} />;
}
