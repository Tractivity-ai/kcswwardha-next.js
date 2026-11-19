import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/search`, changeFrequency: 'monthly', priority: 0.3 },
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      changeFrequency: 'monthly' as const,
      priority: ['/admissions', '/academics', '/about'].includes(p.path) || p.path.startsWith('/academics/') ? 0.8 : 0.5,
    })),
  ];
}
