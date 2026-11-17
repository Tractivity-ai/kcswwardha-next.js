import Image from 'next/image';
import { T } from '@/lib/i18n';
import { LeadForm } from './LeadForm';
import hero from '@/assets/img/hero.jpg';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="h1">
      <div className="hero__media">
        <Image className="kb" src={hero} alt="Students standing in a large circle on the campus ground" fill priority sizes="(min-width: 900px) 62vw, 100vw" quality={80} />
        <div className="hero__tint" />
        <div className="hero__grad" />
        <div className="hero__fade" />
      </div>
      <div className="hero__in">
        <div className="hero__copy">
          <p className="eyebrow in d1">BSW, MSW, M.A. and Ph.D. in Wardha</p>
          <h1 id="h1" className="in d2">
            <span><T k="h1a" /></span>
            <br />
            <span className="it"><T k="h1b" /></span>
          </h1>
          <p className="hero__sub in d3"><T k="sub" /></p>
          <div className="hero__cta in d4">
            <a className="btn btn--gold" href="#admission"><span><T k="apply" /></span></a>
            <a className="btn btn--ghost" href="#programs"><span><T k="view" /></span></a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
