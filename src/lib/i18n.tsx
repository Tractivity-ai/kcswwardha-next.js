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

/** Text for components. English only, so this needs no client code. */
export function useLang() {
  return { t: (k: Key): string => dict.en[k] };
}

export function T({ k }: { k: Key }) {
  return <>{dict.en[k]}</>;
}
