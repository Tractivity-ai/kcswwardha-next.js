'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { menuGroups } from '@/lib/content';
import { T } from '@/lib/i18n';
import { Arrow, Icon } from './Icon';
import { LangToggle } from './LangToggle';
import crest from '@/assets/img/crest.png';

/** Menu button plus the full screen sheet. A native <dialog> gives focus trapping and Esc for free. */
export function MobileMenu() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    const d = ref.current;
    if (!d) return;
    d.showModal();
    document.documentElement.style.overflow = 'hidden';
  };
  const close = () => {
    ref.current?.close();
    document.documentElement.style.overflow = '';
  };

  return (
    <>
      <button className="menu-btn" type="button" aria-label="Open menu" aria-haspopup="dialog" onClick={open}>
        <Icon name="menu" style={{ width: 22, height: 22 }} />
      </button>
      <dialog className="sheet" ref={ref} aria-label="Main menu" onClose={() => { document.documentElement.style.overflow = ''; }}>
        <div className="sheet__top">
          <span className="brand">
            <Image src={crest} alt="" width={40} height={39} />
            <span className="brand__t">
              <span className="brand__a">Kumbhalkar</span>
              <span className="brand__b">College of Social Work</span>
            </span>
          </span>
          <button className="sheet__close" type="button" aria-label="Close menu" onClick={close}>
            <Icon name="close" style={{ width: 22, height: 22 }} />
          </button>
        </div>
        <nav aria-label="Menu">
          {menuGroups.map((g) => (
            <a key={g.title} href={g.href} onClick={close}>
              <span className="rt">
                <span className="serif">{g.title}</span>
                <small>{g.sub}</small>
              </span>
              <Arrow />
            </a>
          ))}
        </nav>
        <div className="sheet__foot">
          <div className="sheet__lang">
            <span>Language</span>
            <LangToggle />
          </div>
          <a className="btn btn--gold" href="#callback" onClick={close}>
            <span><T k="submit" /></span>
          </a>
        </div>
      </dialog>
    </>
  );
}
