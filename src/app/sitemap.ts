import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: 'weekly', priority: 1 },
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      changeFrequency: 'monthly' as const,
      priority: ['/admissions', '/programmes', '/about'].includes(p.path) || p.path.startsWith('/programmes/') ? 0.8 : 0.5,
    })),
  ];
}
