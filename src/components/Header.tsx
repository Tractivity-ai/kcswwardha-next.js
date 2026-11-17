import Image from 'next/image';
import { nav } from '@/lib/content';
import { T } from '@/lib/i18n';
import { Icon } from './Icon';
import { LangToggle } from './LangToggle';
import { MobileMenu } from './MobileMenu';
import crest from '@/assets/img/crest.png';

export function Header() {
  return (
    <header className="hdr">
      <div className="hdr__in">
        <a className="brand" href="#top" aria-label="Kumbhalkar College of Social Work, home">
          <Image src={crest} alt="" width={46} height={45} priority />
          <span className="brand__t">
            <span className="brand__a">Kumbhalkar</span>
            <span className="brand__b">College of Social Work</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <div className="dd" key={n.label}>
              <a href={n.href}>
                {n.label}
                <Icon name="down" />
              </a>
              <div className="ddm">
                {n.items.map(([label, href]) => (
                  <a key={label} href={href}>{label}</a>
                ))}
              </div>
            </div>
          ))}
          <div className="dd"><a href="#contact">Contact</a></div>
        </nav>
        <LangToggle className="lang--top" />
        <a className="btn btn--gold hdr__apply" href="#callback"><span><T k="apply" /></span></a>
        <MobileMenu />
      </div>
    </header>
  );
}
