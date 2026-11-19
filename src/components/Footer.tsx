import Image from 'next/image';
import { quickLinks, social } from '@/lib/content';
import { site } from '@/lib/site';
import { Icon, Wheel } from './Icon';
import { SmartLink } from './SmartLink';
import crest from '@/assets/img/crest.png';
import naac from '@/assets/img/naac-a-plus.png';

export function Footer() {
  const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, '')}`;
  return (
    <footer className="ftr weave-d" id="contact">
      <Wheel />
      <div className="wrap">
        <div className="ftr__brand">
          <Image src={crest} alt="" width={64} height={64} quality={100} />
          <span>Kumbhalkar College<br />of Social Work</span>
          <Image className="ftr__naac" src={naac} alt="Accredited by NAAC with grade A+" height={64} quality={100} />
        </div>
        <div className="ftr__hr" />
        <div className="ftr__cols">
          <div>
            <p className="eyebrow">Address</p>
            {site.address[0]}<br />{site.address[1]}
          </div>
          <div className="ftr__c">
            <p className="eyebrow">Contact</p>
            {site.phones.map((p) => (
              <a key={p} href={tel(p)}><Icon name="phone" /><span>{p}</span></a>
            ))}
            {site.emails.map((m) => (
              <a key={m} href={`mailto:${m}`}><Icon name="mail" /><span>{m}</span></a>
            ))}
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" /><span className="u">Open in Maps</span></a>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <div className="soc">
              {social.map((s) => <a href={s.href} key={s.label} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
            </div>
            <p className="ftr__note">[Instagram and other links to be confirmed]</p>
          </div>
          <div>
            <p className="eyebrow">Quick links</p>
            <div className="ql">
              {quickLinks.map((q) => <SmartLink href={q.href} key={q.label}>{q.label}</SmartLink>)}
            </div>
          </div>
        </div>
        <p className="ftr__legal">
          Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur. Accredited by NAAC with grade A+. Run by Rashtrasant Tukadoji Maharaj Technical and Educational Society.<br />
          &copy; 2026 Kumbhalkar College of Social Work, Wardha.
        </p>
      </div>
    </footer>
  );
}
