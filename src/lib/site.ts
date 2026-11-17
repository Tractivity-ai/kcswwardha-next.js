/**
 * Single place for the college's contact details and site address.
 * Values come from environment variables (see .env.example). Blank means "not confirmed yet",
 * and the page then shows its visible bracketed placeholders.
 */
const clean = (v: string | undefined) => (v ?? '').trim();

export const site = {
  name: 'Kumbhalkar College of Social Work',
  url: (clean(process.env.NEXT_PUBLIC_SITE_URL) || 'https://kumbhalkar-college.vercel.app').replace(/\/$/, ''),
  whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP).replace(/\D/g, ''),
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  email: clean(process.env.NEXT_PUBLIC_EMAIL),
  /** Contact details as printed on the old site. The college confirms which are primary. */
  phones: ['+91 715-224-1848', '9403339741', '9637755310'],
  emails: ['info@kcswwardha.in', 'kcswwardha@rediffmail.com'],
  address: ['Sevagram Road, Opp. Mahila Ashram,', 'Wardha 442001, Maharashtra'],
  mapsUrl: 'https://maps.google.com/?q=Kumbhalkar+College+of+Social+Work+Wardha',
} as const;

const WA_TEXT = {
  admissions: 'Hello, I would like to know about admissions for 2026-27',
  faq: 'Hello, I have a question about admissions',
} as const;

export type WaKind = keyof typeof WA_TEXT;

/** wa.me link. Falls back to a visible placeholder number until the real one is set. */
export function waLink(kind: WaKind): string {
  const number = site.whatsapp || '91XXXXXXXXXX';
  return `https://wa.me/${number}?text=${encodeURIComponent(WA_TEXT[kind])}`;
}

export const hasWhatsapp = site.whatsapp.length > 0;
export const telHref = `tel:${(site.phone || '+919403339741').replace(/[^\d+]/g, '')}`;
export const mailHref = `mailto:${site.email || site.emails[0]}`;
