import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { FloatingActions } from '@/components/FloatingActions';
import { SearchBox, type Entry } from '@/components/SearchBox';
import { notices } from '@/lib/content';
import { docs, aqar } from '@/lib/docs';
import { pages } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search pages, notices and documents on the Kumbhalkar College of Social Work website.',
  alternates: { canonical: '/search' },
};

function index(): Entry[] {
  const out: Entry[] = [];
  for (const p of pages) {
    const heads = p.blocks.filter((b) => b.t === 'h').map((b) => (b as { text: string }).text);
    out.push({ kind: 'Page', title: p.title, href: p.path, text: [p.desc, p.lead ?? '', ...heads].join(' ') });
    for (const b of p.blocks) {
      if (b.t === 'h' && b.id && !b.sub) out.push({ kind: 'Page', title: b.text, href: `${p.path}#${b.id}`, text: p.title });
    }
  }
  const seen = new Set<string>();
  const add = (kind: Entry['kind'], title: string, href: string) => {
    if (seen.has(href + title)) return;
    seen.add(href + title);
    out.push({ kind, title, href, text: '' });
  };
  for (const n of notices) if (!n.title.startsWith('[')) add('Notice', n.title, n.href);
  for (const d of [...Object.values(docs), ...aqar]) add('Document', d.label, d.href);
  for (const p of pages) for (const b of p.blocks) if (b.t === 'docs') for (const d of b.items) add('Document', d.label, d.href);
  return out;
}

export default function SearchPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="band weave-d">
          <div className="wrap">
            <h1 className="band__h">Search</h1>
            <p className="band__lead">Find a page, a notice or a document.</p>
          </div>
        </section>
        <div className="wrap pg pg--one">
          <SearchBox entries={index()} />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
