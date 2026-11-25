import Image from 'next/image';
import Link from 'next/link';
import { nav } from '@/lib/content';
import { T } from '@/lib/i18n';
import { Icon } from './Icon';
import { site, telHref } from '@/lib/site';
import { MobileMenu } from './MobileMenu';
import { SmartLink } from './SmartLink';
import crest from '@/assets/img/crest.png';
import naac from '@/assets/img/naac-a-plus.png';

const dial = (p: string) => {
  const d = p.replace(/[^\d+]/g, '');
  return `tel:${d.startsWith('+') ? d : '+91' + d}`;
};

export function Header() {
  return (
    <>
    <div className="topbar">
      <div className="topbar__in">
        <span className="topbar__g">
          <Icon name="phone" />
          {site.phones.map((p) => <a key={p} href={dial(p)}>{p}</a>)}
        </span>
        <span className="topbar__g">
          <Icon name="mail" />
          {site.emails.map((m) => <a key={m} href={`mailto:${m}`}>{m}</a>)}
        </span>
      </div>
    </div>
    <header className="hdr">
      <div className="hdr__in">
        <Link className="brand" href="/" aria-label="Kumbhalkar College of Social Work">
          <Image src={crest} alt="" width={64} height={64} quality={100} priority />
          <span className="brand__t">
            <span className="brand__a">Kumbhalkar</span>
            <span className="brand__b">College of Social Work</span>
          </span>
        </Link>
        <Image className="hdr__naac" src={naac} alt="Accredited by NAAC with grade A+" height={64} quality={100} />
        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <div className="dd" key={n.label}>
              <Link href={n.href}>
                {n.label}
                <Icon name="down" />
              </Link>
              <div className="ddm">
                {n.items.map(([label, href]) => (
                  <SmartLink key={label} href={href}>{label}</SmartLink>
                ))}
              </div>
            </div>
          ))}
          <div className="dd"><Link href="/contact">Contact</Link></div>
        </nav>
        <a className="hdr__search hdr__call" href={telHref} aria-label="Call the college"><Icon name="phone" /></a>
        <Link className="hdr__search" href="/search" aria-label="Search the site"><Icon name="search" /></Link>
        <Link className="btn btn--gold hdr__apply" href="/#callback"><span><T k="applyShort" /></span></Link>
        <MobileMenu />
      </div>
    </header>
    </>
  );
}
