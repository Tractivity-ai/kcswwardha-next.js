'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';

const QUERY = '(min-width: 900px)';
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(QUERY);
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};
const snapshot = () => window.matchMedia(QUERY).matches;

/** Section menu. Collapsed on phones, always open beside the content on larger screens. */
export function SideNav({ label, items, current }: { label: string; items: { path: string; title: string }[]; current: string }) {
  const wide = useSyncExternalStore(subscribe, snapshot, () => false);
  return (
    <aside className="side" aria-label={`In ${label}`}>
      <details className="side__d" open={wide}>
        <summary>More in {label}</summary>
        <ul>
          {items.map((p) => (
            <li key={p.path}>
              <Link href={p.path} aria-current={p.path === current ? 'page' : undefined}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </details>
    </aside>
  );
}
