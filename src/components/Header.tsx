import Image from 'next/image';
import Link from 'next/link';
import { nav } from '@/lib/content';
import { T } from '@/lib/i18n';
import { Icon } from './Icon';
import { LangToggle } from './LangToggle';
import { MobileMenu } from './MobileMenu';
import { SmartLink } from './SmartLink';
import crest from '@/assets/img/crest.png';
import naac from '@/assets/img/naac-a-plus.png';

export function Header() {
  return (
    <header className="hdr">
      <div className="hdr__in">
        <Link className="brand" href="/" aria-label="Kumbhalkar College of Social Work, home">
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
        <LangToggle className="lang--top" />
        <Link className="btn btn--gold hdr__apply" href="/#callback"><span><T k="applyShort" /></span></Link>
        <MobileMenu />
      </div>
    </header>
  );
}
