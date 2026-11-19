import Image from 'next/image';
import Link from 'next/link';
import { T } from '@/lib/i18n';
import {
  APPLY_FORM, downloads, facts, faqs, lifePhotos, lifeTiles, notices, principal as pr, programs, quality, steps, trust,
} from '@/lib/content';
import { SmartLink } from './SmartLink';
import { waLink } from '@/lib/site';
import { Arrow, Icon, Wheel } from './Icon';
import hero from '@/assets/img/hero.jpg';
import e1 from '@/assets/img/e1.jpg';
import e2 from '@/assets/img/e2.jpg';
import e3 from '@/assets/img/e3.jpg';
import principalPhoto from '@/assets/img/principal.jpg';

const lifeImages = { e1, e2, e3 } as const;

export function Trust() {
  return (
    <section className="trust" id="trust" aria-label="Accreditation and affiliation">
      <div className="trust__row">
        {trust.map((c) => (
          <div className="chipc" key={c.big}>
            <b>{c.big}</b>
            <span>{c.small}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section className="programs weave sec" id="programs" aria-labelledby="programs-h">
      <div className="wrap">
        <p className="eyebrow rv"><T k="programs" /></p>
        <h2 className="h2 rv" id="programs-h">Four programmes, one purpose.</h2>
        <div className="pgrid">
          {programs.map((p) => (
            <article className="pcard card rv" key={p.code}>
              <div className="pcard__h">
                <div className="pcard__n">{p.code}</div>
                <div className="pcard__d"><b>{p.duration}</b><br />{p.sub}</div>
              </div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
              <Link className="lnk" href={p.href}>Explore {p.code}<Arrow /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-q">
      <Wheel />
      <div className="wrap">
        <div className="rule" />
        <div className="story__g">
          <div className="story__a">
            <p className="eyebrow rv"><T k="story" /></p>
            <blockquote className="serif rv" id="story-q">A campus that once spun khadi now trains social workers.</blockquote>
            <p className="story__p rv">
              Wardha is Gandhi&apos;s Sevabhoomi. Our campus on Sevagram Road was once a Khadi and Gramudyog workstation.
              Since 1993, the same ground has prepared students for a life of service, with classroom learning strengthened by field work.
            </p>
            <Link className="lnk lnk--u rv" href="/about"><span><T k="readStory" /></span><Arrow /></Link>
          </div>
          <div className="story__b">
            <div className="ph rv">
              <Image src={e3} alt="Students and faculty gathered under trees on the campus" sizes="(min-width: 900px) 50vw, 100vw" />
              <span className="keyline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Admission() {
  return (
    <section className="adm weave-d sec" id="admission" aria-labelledby="adm-h">
      <Image className="adm__bg kb" src={hero} alt="" fill sizes="100vw" quality={50} />
      <div className="wrap">
        <div className="adm__g">
          <div className="adm__a">
            <p className="eyebrow rv"><span><T k="admission" /></span> · 2026-27</p>
            <h2 className="h2 rv" id="adm-h">Three steps to join us.</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step rv" key={s.n}>
                  <div className="num">{s.n}</div>
                  <div><h3>{s.title}</h3><p>{s.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="adm__cta rv">
              <a className="btn btn--gold btn--lg" href={APPLY_FORM} target="_blank" rel="noopener noreferrer"><span><T k="apply" /></span><Arrow /></a>
              <p className="adm__last">Last date to apply: [to be confirmed]</p>
            </div>
          </div>
          <div className="dl rv">
            <p className="eyebrow">Downloads</p>
            <p className="dl__note">[Prospectus is the 2024-25 edition. Update for 2026-27]</p>
            <div className="dl__list">
              {downloads.map((d) => (
                <SmartLink className="row rowd" href={d.href} key={d.label}>
                  <Icon name="doc" />
                  <span className="rt">{d.label}</span>
                  <span className="tag">PDF</span>
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const noticeLinks = [
  ['News and events', '/notices/news'], ['Job openings', '/notices/job-openings'], ['RTI', '/notices/rti'],
  ['Accounts', '/notices/accounts'], ['Feedback', '/notices/feedback'], ['All notices', '/notices'],
] as const;

export function Notices() {
  return (
    <section className="notices weave sec" id="notices" aria-labelledby="notices-h">
      <div className="wrap notices__g">
        <div className="notices__head">
          <h2 className="h2 rv" id="notices-h">From the office.</h2>
        </div>
        <div className="notices__list rv">
          {notices.map((n) => (
            <SmartLink className="notice row" href={n.href} key={n.title}>
              <div className="notice__b"><time>{n.date}</time><h3 className="rt">{n.title}</h3></div>
              <span className="tag">{n.href.endsWith('.pdf') ? 'PDF' : 'View'}</span>
            </SmartLink>
          ))}
        </div>
        <nav className="nq rv" aria-label="More from the office">
          <h3>Quick links</h3>
          {noticeLinks.map(([label, href]) => (
            <Link href={href} key={href}><span>{label}</span><Arrow /></Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function Life() {
  return (
    <section className="life sec" id="life" aria-labelledby="life-h">
      <div className="wrap life__g">
        <div className="life__head">
          <p className="eyebrow rv"><T k="life" /></p>
          <h2 className="h2 rv" id="life-h">Learning happens outside the classroom.</h2>
        </div>
        <div className="life__photos">
          {lifePhotos.map((p) => (
            <figure className="rv" key={p.key}>
              <div className="ph">
                <Image
                  src={lifeImages[p.key]} alt={p.alt}
                  sizes="(min-width: 1100px) 40vw, (min-width: 768px) 30vw, 230px"
                  style={'position' in p ? { objectPosition: p.position } : undefined}
                />
              </div>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="tiles rv">
          {lifeTiles.map((t) => (
            <Link className="tile" href={t.href} key={t.label}><Icon name={t.icon} /><span className="tile__l">{t.label}</span></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq weave sec" id="faq" aria-labelledby="faq-h">
      <div className="wrap faq__g">
        <div className="faq__head">
          <p className="eyebrow rv">Questions</p>
          <h2 className="h2 rv" id="faq-h">Questions we hear most.</h2>
          <p className="faq__intro rv">Short answers from the admission desk. [Answers to be supplied by the office]</p>
        </div>
        <div className="faq__list rv">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                <span>
                  <span className="eyebrow">{f.tag}</span>
                  <span className="q serif">{f.q}</span>
                </span>
                <Icon name="plus" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <a className="btn btn--wa faq__wa" href={waLink('faq')} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" />Ask us on WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Principal() {
  return (
    <section className="pr" id="principal" aria-labelledby="pr-eb">
      <div className="pr__q serif" aria-hidden="true">&ldquo;</div>
      <div className="wrap">
        <div className="rule" />
        <div className="pr__g">
          <p className="eyebrow pr__eb rv" id="pr-eb"><T k="principal" /></p>
          <div className="pr__fig rv">
            <div className="ph">
              <Image src={principalPhoto} alt={`${pr.name}, Principal of Kumbhalkar College of Social Work`} sizes="(min-width: 900px) 33vw, 520px" />
              <span className="keyline" />
            </div>
            <div className="pr__name">
              <h3 className="serif">{pr.name}</h3>
              <p className="role">{pr.role}</p>
              <p className="cred">{pr.credentials}</p>
            </div>
          </div>
          <div className="pr__txt rv">
            <blockquote className="serif it">{pr.excerpt}</blockquote>
            <Link className="lnk lnk--u" href="/about/principal">Read the full message<Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Facts() {
  return (
    <section className="facts-s sec" id="people" aria-labelledby="facts-h">
      <div className="wrap">
        <p className="eyebrow">Our people and campus</p>
        <h2 className="h2" id="facts-h">The college in numbers.</h2>
        <div className="fgrid">
          {facts.map((f) => (
            <Link className="fcard" href={f.href} key={f.label}>
              <b className="serif">{f.n}</b>
              <span className="fcard__l">{f.label}</span>
              <span className="fcard__t">{f.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section className="qual weave sec" id="quality" aria-labelledby="qual-h">
      <div className="wrap qual__g">
        <div className="qual__head">
          <p className="eyebrow">Quality and records</p>
          <h2 className="h2" id="qual-h">Open records, easy to find.</h2>
          <p className="qual__intro">Accreditation reports, quality assurance records and the committees that keep the college accountable.</p>
        </div>
        <div className="qual__list">
          {quality.map((q) => (
            <Link className="row qrow" href={q.href} key={q.title}>
              <span className="rt"><b className="serif">{q.title}</b><small>{q.text}</small></span>
              <Arrow />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
