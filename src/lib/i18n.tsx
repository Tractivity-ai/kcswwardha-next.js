'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';

export type Lang = 'en' | 'mr';

/** English is final copy. Marathi is placeholder text for a native speaker to review. */
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
  mr: {
    h1a: 'शिक्षण जे', h1b: 'सेवा करते.',
    sub: 'सेवाग्राम, वर्धा येथे १९९३ पासून समाजकार्य शिक्षण.',
    apply: '२०२६-२७ साठी अर्ज करा', applyShort: 'अर्ज करा', view: 'अभ्यासक्रम पहा',
    programs: 'अभ्यासक्रम', story: 'सेवाग्रामची कथा', admission: 'प्रवेश',
    notices: 'सूचना', life: 'जीवन आणि क्षेत्रकार्य', principal: 'प्राचार्यांचा संदेश',
    allNotices: 'सर्व सूचना', readStory: 'आमची कथा वाचा',
    formTitle: 'प्रवेश कक्षाशी बोला', formSub: 'तुमचा नंबर द्या, आम्ही परत फोन करू.',
    iam: 'मला यात रस आहे', name: 'तुमचे नाव', mobile: 'मोबाइल नंबर',
    submit: 'परत कॉल मिळवा', wa: 'व्हॉट्सअ‍ॅपवर बोला', cbTitle: 'परत कॉलची विनंती',
  },
} as const;

export type Key = keyof (typeof dict)['en'];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };
const LangContext = createContext<Ctx | null>(null);
const STORE = 'kcsw-lang';

/** Saved language lives in localStorage; useSyncExternalStore reads it without a hydration mismatch. */
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };
let memory: Lang | null = null; // keeps the switch working when storage is blocked
const readSaved = (): Lang => {
  if (memory) return memory;
  try { return localStorage.getItem(STORE) === 'mr' ? 'mr' : 'en'; } catch { return 'en'; }
};

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Lang>(subscribe, readSaved, () => 'en');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    memory = l;
    try { localStorage.setItem(STORE, l); } catch {}
    listeners.forEach((cb) => cb());
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (k) => dict[lang][k] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const c = useContext(LangContext);
  if (!c) throw new Error('useLang must be used inside LangProvider');
  return c;
}

/** Translated text for use inside server components. */
export function T({ k }: { k: Key }) {
  return <>{useLang().t(k)}</>;
}
