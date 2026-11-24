import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: 'weekly', priority: 1, lastModified: new Date('2026-11-19') },
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: new Date('2026-11-19'),
      changeFrequency: 'monthly' as const,
      priority: ['/admissions', '/academics', '/about'].includes(p.path) || p.path.startsWith('/academics/') ? 0.8 : 0.5,
    })),
  ];
}
