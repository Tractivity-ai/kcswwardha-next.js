import Image from 'next/image';
import { T } from '@/lib/i18n';
import hero from '@/assets/img/hero.jpg';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="h1">
      <div className="hero__in">
        <div className="hero__copy">
          <p className="hero__aff">Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University</p>
          <h1 id="h1"><T k="h1" /></h1>
          <p className="hero__sub"><T k="sub" /></p>
          <div className="hero__cta">
            <a className="btn btn--gold" href="#callback"><span><T k="apply" /></span></a>
            <a className="btn btn--ghost" href="#programs"><span><T k="view" /></span></a>
          </div>
        </div>
        <figure className="hero__ph">
          <Image src={hero} alt="Students standing in a large circle on the campus ground" priority sizes="(min-width: 900px) 50vw, 100vw" quality={80} />
        </figure>
      </div>
    </section>
  );
}
