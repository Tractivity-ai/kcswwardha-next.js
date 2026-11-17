'use client';

import { useLang } from '@/lib/i18n';

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang ${className}`.trim()} role="group" aria-label="Language">
      <button type="button" aria-pressed={lang === 'en'} aria-label="English" onClick={() => setLang('en')}>EN</button>
      <button type="button" aria-pressed={lang === 'mr'} aria-label="Marathi" lang="mr" onClick={() => setLang('mr')}>मरा</button>
    </div>
  );
}
