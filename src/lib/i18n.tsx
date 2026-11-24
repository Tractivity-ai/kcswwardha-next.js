'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';

/** English copy. */
export const dict = {
  en: {
    h1a: 'Education that', h1b: 'serves.',
    sub: 'Social work education in Sevagram, Wardha, since 1993.',
    apply: 'Apply for 2026-27', applyShort: 'Apply', view: 'View programs',
    programs: 'Social work programs', story: 'Social work college in Sevagram', admission: 'BSW and MSW admissions',
    notices: 'Notices', life: 'Life and field work', principal: "Principal's message",
    allNotices: 'All notices', readStory: 'Read our story',
    formTitle: 'Talk to the admission desk',
    formSub: 'Leave your number and we will call you back. [Call back time to be confirmed]',
    iam: 'I am interested in', name: 'Your name', mobile: 'Mobile number',
    submit: 'Request a call back', wa: 'Chat on WhatsApp', cbTitle: 'Call back request',
  },
} as const;

export type Key = keyof (typeof dict)['en'];

type Ctx = { t: (k: Key) => string };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const value = useMemo<Ctx>(() => ({ t: (k) => dict.en[k] }), []);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const c = useContext(LangContext);
  if (!c) throw new Error('useLang must be used inside LangProvider');
  return c;
}

/** Text for use inside server components. */
export function T({ k }: { k: Key }) {
  return <>{useLang().t(k)}</>;
}
