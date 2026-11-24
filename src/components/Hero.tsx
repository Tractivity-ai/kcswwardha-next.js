'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { trust } from '@/lib/content';
import { LeadForm } from './LeadForm';
import hero from '@/assets/img/hero.jpg';
import e1 from '@/assets/img/e1.jpg';
import e2 from '@/assets/img/e2.jpg';

type Slide = {
  img: StaticImageData;
  alt: string;
  pos?: string;
  href: string;
  en: { eyebrow: string; h: string; sub: string; btn: string };
};

/** Banner copy. Slides 2 and 3 are placeholder wording for the college to confirm. */
const SLIDES: Slide[] = [
  {
    img: hero, alt: 'Students standing in a large circle on the campus ground', pos: '50% 40%', href: '#admission',
    en: { eyebrow: 'BSW, MSW and Ph.D. in Wardha', h: 'Education that serves.', sub: 'Social work education in Sevagram, Wardha, since 1993.', btn: 'Apply for 2026-27' },
  },
  {
    img: e2, alt: 'A community meeting with people seated in a hall', pos: '50% 40%', href: '/academics/fieldwork',
    en: { eyebrow: 'Social work in practice', h: 'Learning in the field, not only the classroom.', sub: 'Fieldwork is part of every programme. Students work with communities and agencies under faculty supervision.', btn: 'About fieldwork' },
  },
  {
    img: e1, alt: 'Faculty and guests standing together on the campus lawn', pos: '50% 35%', href: '/information/notices',
    en: { eyebrow: 'Ph.D. admissions 2025-26', h: 'Ph.D. admission notices are out.', sub: 'Read the provisional admission schedule and the vacant seat status.', btn: 'See notices' },
  },
];

const EVERY = 6500;

export function Hero() {
  const [i, setI] = useState(0);
    const [hold, setHold] = useState(false); // keyboard focus is inside the banner
    const touch = useRef<number | null>(null);
  const n = SLIDES.length;

  const playing = !hold;
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setI((x) => (x + 1) % n), EVERY);
    return () => clearTimeout(t);
  }, [playing, i, n]);

  const go = useCallback((k: number) => setI(((k % n) + n) % n), [n]);

  return (
    <section className="hero" id="top" aria-roledescription="carousel" aria-label="Highlights">
      <div
        className="hero__stage"
        onFocus={(e) => { if (e.target.matches(':focus-visible')) setHold(true); }}
        onBlur={() => setHold(false)}
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const d = e.changedTouches[0].clientX - touch.current;
          touch.current = null;
          if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1));
        }}
      >
        <div className="hero__media" aria-hidden="true">
          {SLIDES.map((s, k) => (
            <div key={k} className={`hero__slide${k === i ? ' on' : ''}`} style={{ ['--pos' as string]: s.pos }}>
              <Image src={s.img} alt="" fill priority={k === 0} sizes="100vw" quality={80} />
            </div>
          ))}
          <div className="hero__tint" />
        </div>

        <div className="hero__in">
          <div className="hero__copy" aria-live={playing ? 'off' : 'polite'}>
            {SLIDES.map((s, k) => {
              const c = s.en;
              const Head = k === 0 ? 'h1' : 'h2';
              return (
                <div key={k} className={`hero__txt${k === i ? ' on' : ''}`} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`} {...(k !== i ? { inert: true } : {})}>
                  <p className="eyebrow">{c.eyebrow}</p>
                  <Head>{c.h}</Head>
                  <p className="hero__sub">{c.sub}</p>
                  {s.href.startsWith('#') ? (
                    <a className="btn btn--gold" href={s.href}><span>{c.btn}</span></a>
                  ) : (
                    <Link className="btn btn--gold" href={s.href}><span>{c.btn}</span></Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hero__form">
        <LeadForm />
        <ul className="hero__facts" aria-label="Accreditation and affiliation">
          {trust.map((c) => (
            <li key={c.big}><b>{c.big}</b><span>{c.small}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
