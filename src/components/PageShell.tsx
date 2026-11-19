import Link from 'next/link';
import { groupPages, groups, type Page } from '@/lib/pages';
import { site } from '@/lib/site';
import { Blocks } from './Blocks';
import { FloatingActions } from './FloatingActions';
import { SideNav } from './SideNav';
import { Footer } from './Footer';
import { Header } from './Header';

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

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
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
            <h1 className="band__h">{page.title}</h1>
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
