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
export const telHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, '')}` : '#';
export const mailHref = site.email ? `mailto:${site.email}` : '#';
