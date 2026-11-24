import Link from 'next/link';
import { groupPages, groups, type Page } from '@/lib/pages';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { Blocks } from './Blocks';
import { FloatingActions } from './FloatingActions';
import { SideNav } from './SideNav';
import { Footer } from './Footer';
import { Header } from './Header';

/** Course data for the programme pages, using only facts printed on those pages. */
const COURSES: Record<string, { name: string; desc: string; time: string }> = {
  '/academics/bsw': { name: 'Bachelor of Social Work (BSW)', desc: 'Three-year, six-semester BSW with theory papers, practicum and field work, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University.', time: 'P3Y' },
  '/academics/msw': { name: 'Master of Social Work (MSW)', desc: 'Two-year, four-semester MSW with method courses, practicum and field work, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University.', time: 'P2Y' },
  '/research/phd': { name: 'Ph.D. in Social Work', desc: 'Ph.D. in Social Work at the Dr. Kailash Satyarthi Higher Education and Research Center, usually three years full time.', time: 'P3Y' },
};

/** Template for every inner page: header, title band, section menu, content, footer. */
export function PageShell({ page }: { page: Page }) {
  const g = groups[page.group];
  const siblings = groupPages(page.group).filter((p) => p.blocks[0]?.t !== 'hub' || p.path === page.path);
  const crumbs = [
    { name: 'Home', url: '/' },
    ...(page.path === g.href ? [] : [{ name: g.label, url: g.href }]),
    { name: page.title, url: page.path },
  ];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${site.url}${c.url}` })),
  };

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo[page.path]?.title ?? page.title,
    description: seo[page.path]?.desc ?? page.desc,
    url: `${site.url}${page.path}`,
    dateModified: '2026-11-19',
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
  };
  const course = COURSES[page.path];
  const courseLd = course && {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.desc,
    timeRequired: course.time,
    provider: { '@type': 'CollegeOrUniversity', name: site.name, url: site.url },
  };

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        {courseLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />}
        <section className="band weave-d">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                {crumbs.map((c, i) => (
                  <li key={c.url}>
                    {i < crumbs.length - 1 ? <Link href={c.url}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="band__h">{seo[page.path]?.h1 ?? page.title}</h1>
            {page.lead && <p className="band__lead">{page.lead}</p>}
          </div>
        </section>
        <div className="wrap pg">
          {siblings.length > 1 && <SideNav label={g.label} items={siblings.map((p) => ({ path: p.path, title: p.title }))} current={page.path} />}
          <article className="pg__body">
            <Blocks blocks={page.blocks} />
            <p className="pg__meta">
              Last updated {page.updated}. Maintained by {page.owner}. <Link href="/contact">Contact the office</Link>
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
