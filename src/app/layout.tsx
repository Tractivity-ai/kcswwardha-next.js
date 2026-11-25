import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { newsreader, hanken } from '@/lib/fonts';
import { site } from '@/lib/site';
import { Sprite } from '@/components/Icon';
import './globals.css';

const title = 'Kumbhalkar College of Social Work, Wardha | BSW, MSW, Ph.D.';
const description =
  'Social work education in Sevagram, Wardha since 1993. NAAC A+ accredited. Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University. Apply for BSW, MSW and Ph.D. 2026-27.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | KCSW Wardha' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Kumbhalkar College of Social Work, Wardha',
    description: 'BSW, MSW and Ph.D. Social work education in Sevagram, Wardha, since 1993.',
    locale: 'en_IN',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F6F0E4',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  name: site.name,
  alternateName: 'KCSW',
  foundingDate: '1993',
  url: site.url,
  logo: `${site.url}/icon.png`,
  description:
    'Social work college in Sevagram, Wardha, offering BSW, MSW and Ph.D. programmes. Accredited by NAAC with grade A+. Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sevagram Road, Opp. Mahila Ashram',
    addressLocality: 'Wardha',
    addressRegion: 'Maharashtra',
    postalCode: '442001',
    addressCountry: 'IN',
  },
  parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Rashtrasant Tukadoji Maharaj Nagpur University' },
  telephone: site.phones.map((x) => '+91' + x.replace(/\D/g, '').replace(/^91/, '')),
  email: [...site.emails],
  hasMap: site.mapsUrl,
  award: 'NAAC accreditation, grade A+ (CGPA 3.35), valid up to 25 October 2027',
  employee: { '@type': 'Person', name: 'Dr. Chandu K. Popatkar', jobTitle: 'Principal' },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'admissions', telephone: '+919403339741', email: 'info@kcswwardha.in', areaServed: 'IN' },
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+917152241848', email: 'kcswwardha@rediffmail.com', areaServed: 'IN' },
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+919637755310', areaServed: 'IN' },
  ],
  sameAs: ['https://www.facebook.com/kscwwardha/', 'https://www.youtube.com/channel/UCPSsCtDb-Q9LClMiSvLMWWw'],
};

const siteLd = { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, alternateName: 'KCSW Wardha', url: site.url, inLanguage: 'en-IN' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }} />
        <Sprite />
        {children}
      </body>
    </html>
  );
}
