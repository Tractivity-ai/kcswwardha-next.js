'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export type Entry = { kind: 'Page' | 'Notice' | 'Document'; title: string; href: string; text: string };
const kinds = ['All', 'Page', 'Notice', 'Document'] as const;

export function SearchBox({ entries }: { entries: Entry[] }) {
  const [q, setQ] = useState('');
  const [kind, setKind] = useState<(typeof kinds)[number]>('All');

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return entries
      .filter((e) => kind === 'All' || e.kind === kind)
      .map((e) => {
        const t = e.title.toLowerCase();
        const all = `${t} ${e.text.toLowerCase()}`;
        if (!words.every((w) => all.includes(w))) return null;
        return { e, score: words.reduce((s, w) => s + (t.includes(w) ? 2 : 1), 0) };
      })
      .filter((x): x is { e: Entry; score: number } => !!x)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map((x) => x.e);
  }, [q, kind, entries]);

  return (
    <div className="srch">
      <label className="srch__f" htmlFor="q">
        <span className="srch__l">Search the site</span>
        <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="For example: fee structure, RTI, anti-ragging" autoComplete="off" />
      </label>
      <div className="srch__k" role="group" aria-label="Filter results">
        {kinds.map((k) => (
          <button type="button" key={k} aria-pressed={kind === k} onClick={() => setKind(k)}>{k === 'All' ? 'All' : k + 's'}</button>
        ))}
      </div>
      <p className="srch__n" aria-live="polite">{q.trim() ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Type a word to start.'}</p>
      <ul className="srch__r">
        {results.map((r) => (
          <li key={r.href + r.title}>
            {r.href.startsWith('http') ? <a href={r.href} target="_blank" rel="noopener noreferrer">{r.title}</a> : <Link href={r.href}>{r.title}</Link>}
            <span>{r.kind}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
