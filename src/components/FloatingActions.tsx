import Link from 'next/link';
import { telHref, waLink } from '@/lib/site';
import { Icon } from './Icon';

/** Sticky Apply / Call / WhatsApp bar on phones and tablets, floating WhatsApp button on desktop. */
export function FloatingActions() {
  return (
    <>
      <div className="sbar" role="region" aria-label="Quick actions">
        <Link className="btn btn--gold" href="/#callback">Apply</Link>
        <a className="btn btn--ghost" href={telHref}><Icon name="phone" />Call</a>
        <a className="btn btn--wa pulse" aria-label="Chat on WhatsApp" href={waLink('admissions')} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" />
        </a>
      </div>
      <a className="fab" href={waLink('admissions')} target="_blank" rel="noopener noreferrer">
        <Icon name="wa" />Chat on WhatsApp
      </a>
    </>
  );
}
