'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LeadForm } from './LeadForm';
import hero from '@/assets/img/hero-study-tour.jpg';
import heroM from '@/assets/img/hero-study-tour-m.jpg';
import e1 from '@/assets/img/hero-camp.jpg';
import e2 from '@/assets/img/hero-counselling.jpg';
import e2m from '@/assets/img/hero-counselling-m.jpg';
import e3m from '@/assets/img/hero-camp-m.jpg';

type Slide = {
  img: StaticImageData;
  imgM?: StaticImageData;
  alt: string;
  pos?: string;
  href: string;
  en: { eyebrow: string; h: string; sub: string; btn: string };
};

/** Banner copy. Slides 2 and 3 are placeholder wording for the college to confirm. */
const SLIDES: Slide[] = [
  {
    img: hero, imgM: heroM, alt: 'Students and faculty of the college standing together in front of a study tour bus', pos: '50% 50%', href: '#admission',
    en: { eyebrow: 'BSW, MSW and Ph.D. in Wardha', h: 'Education that serves.', sub: 'Social work education in Sevagram, Wardha, since 1993.', btn: 'Apply for 2026-27' },
  },
  {
    img: e2, imgM: e2m, alt: 'Faculty addressing students at the certificate course in counselling orientation', pos: '15% 50%', href: '/academics',
    en: { eyebrow: 'Short courses', h: 'Certificate course in counselling.', sub: 'Faculty-led sessions for students, alongside the BSW, MSW and Ph.D. programmes.', btn: 'Our programmes' },
  },
  {
    img: e1, imgM: e3m, alt: 'Students and faculty sitting in a circle for a group session by a lake', pos: '50% 60%', href: '/information/notices',
    en: { eyebrow: 'Ph.D. admissions 2025-26', h: 'Ph.D. admission notices are out.', sub: 'Read the provisional admission schedule and the vacant seat status.', btn: 'See notices' },
  },
];

const EVERY = 6500;

/** Key stats shown at the foot of the banner. */
const FACTS = [
  { n: '1993', l: 'Established' },
  { n: 'A+', l: 'NAAC grade' },
  { n: '1,203', l: 'Graduates' },
  { n: 'RTMNU', l: 'Affiliated university' },
] as const;

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
              <Image className={s.imgM ? 'hd' : undefined} src={s.img} alt="" fill priority={k === 0} sizes="100vw" quality={80} />
              {s.imgM && <Image className="hm" src={s.imgM} alt="" fill sizes="100vw" quality={80} />}
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
                  {k === 0 ? (
                    <h1><span className="eyebrow">{c.eyebrow}</span><span className="hl">{c.h}</span></h1>
                  ) : (
                    <>
                      <p className="eyebrow">{c.eyebrow}</p>
                      <Head>{c.h}</Head>
                    </>
                  )}
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

        <ul className="hero__facts" aria-label="About the college">
          {FACTS.map((f) => (
            <li key={f.l}><b>{f.n}</b><span>{f.l}</span></li>
          ))}
        </ul>
      </div>

      <div className="hero__form">
        <LeadForm />
      </div>
    </section>
  );
}
