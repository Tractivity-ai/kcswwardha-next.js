import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { newsreader, hanken, deva } from '@/lib/fonts';
import { LangProvider } from '@/lib/i18n';
import { site } from '@/lib/site';
import { Sprite } from '@/components/Icon';
import './globals.css';

const title = 'Kumbhalkar College of Social Work, Wardha | BSW, MSW and Ph.D. Admissions 2026-27';
const description =
  'Social work education in Sevagram, Wardha since 1993. NAAC A+ accredited college affiliated to RTMNU Nagpur. Apply for BSW, MSW and Ph.D. 2026-27.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Kumbhalkar College of Social Work, Wardha',
    description: 'BSW, MSW and Ph.D. in social work. Sevagram, Wardha, since 1993. NAAC A+.',
    locale: 'en_IN',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: 'summary_large_image' },
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
  logo: `${site.url}/og.jpg`,
  description:
    'Social work college in Sevagram, Wardha, offering BSW, MSW and Ph.D. programs. NAAC A+ accredited, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sevagram Road, Opp. Mahila Ashram',
    addressLocality: 'Wardha',
    addressRegion: 'Maharashtra',
    postalCode: '442001',
    addressCountry: 'IN',
  },
  parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Rashtrasant Tukadoji Maharaj Nagpur University' },
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.email ? { email: site.email } : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable} ${deva.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Sprite />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
