'use client';

import { useId, useState, type FormEvent } from 'react';
import { T } from '@/lib/i18n';
import { hasWhatsapp, waLink } from '@/lib/site';
import { Arrow, Icon } from './Icon';

type Program = 'BSW' | 'MSW' | 'Ph.D.';
const PROGRAMS: Program[] = ['BSW', 'MSW', 'Ph.D.'];

export function LeadForm() {
  const uid = useId();
  const [program, setProgram] = useState<Program>('BSW');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [tried, setTried] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [done, setDone] = useState<null | { name: string; phone: string; program: Program }>(null);

  const okName = name.trim().length >= 2;
  const okPhone = /^[6-9]\d{9}$/.test(phone);
  const showName = tried && !okName;
  const showPhone = tried && !okPhone;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setTried(true);
    if (!okName) { document.getElementById(`${uid}-name`)?.focus(); return; }
    if (!okPhone) { document.getElementById(`${uid}-phone`)?.focus(); return; }
    if (company) return; // bot

    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: `+91${phone}`,
          program,
          page: window.location.href,
          lang: document.documentElement.lang,
        }),
      });
      if (!res.ok) throw new Error('bad status');
      setDone({ name: name.trim(), phone, program });
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="lead in d4" id="callback" role="region" aria-label="Request received">
        <div className="lead__done" tabIndex={-1} ref={(el) => el?.focus({ preventScroll: true })}>
          <Icon name="check" />
          <h2>Thank you, {done.name}.</h2>
          <p>
            Our admission desk will call you on +91 {done.phone} about {done.program.endsWith('.') ? done.program : `${done.program}.`} [Call back time to be confirmed]
          </p>
          <a className="btn btn--wa" href={waLink('admissions')} target="_blank" rel="noopener noreferrer">
            <Icon name="wa" />Chat on WhatsApp while you wait
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="lead in d4" id="callback" role="region" aria-label="Request a call back">
      <form onSubmit={onSubmit} noValidate>
        <div>
          <h2 className="lead__t"><T k="formTitle" /></h2>
          <p className="lead__s"><T k="formSub" /></p>
        </div>

        <fieldset>
          <legend><T k="iam" /></legend>
          <div className="chips">
            {PROGRAMS.map((p) => (
              <label className="chip" key={p}>
                <input type="radio" name="program" value={p} checked={program === p} onChange={() => setProgram(p)} />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className="l" htmlFor={`${uid}-name`}><T k="name" /></label>
          <div className={`fld${showName ? ' bad' : ''}`}>
            <input
              id={`${uid}-name`} name="name" type="text" autoComplete="name"
              placeholder="As on your Class 12 marksheet"
              value={name} onChange={(e) => setName(e.target.value)}
              aria-invalid={showName} aria-describedby={`${uid}-name-err`} required
            />
          </div>
          {showName && <div className="err" id={`${uid}-name-err`} role="alert">Please enter your name.</div>}
        </div>

        <div>
          <label className="l" htmlFor={`${uid}-phone`}><T k="mobile" /></label>
          <div className={`fld${showPhone ? ' bad' : ''}`}>
            <span className="cc">+91</span>
            <input
              id={`${uid}-phone`} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
              maxLength={10} placeholder="10-digit number"
              value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              aria-invalid={showPhone} aria-describedby={`${uid}-phone-err`} required
            />
          </div>
          {showPhone && <div className="err" id={`${uid}-phone-err`} role="alert">Enter a valid 10-digit mobile number.</div>}
        </div>

        <input
          type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={company} onChange={(e) => setCompany(e.target.value)}
          style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
        />

        <button type="submit" className="btn btn--maroon" disabled={busy} style={busy ? { opacity: 0.7 } : undefined}>
          <span><T k="submit" /></span>
          <Arrow />
        </button>
        {failed && (
          <p className="lead__fail" role="alert">
            We could not send this just now. Please try again, or chat with us on WhatsApp.
          </p>
        )}
        <p className="lead__fine">
          By submitting, you agree to be contacted by KCSW by call or WhatsApp about admissions. [Privacy policy link to be added]
        </p>
        <a className="btn btn--wa" href={waLink('admissions')} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" /><span><T k="wa" /></span>
        </a>
        {!hasWhatsapp && <p className="lead__note">[WhatsApp number to be confirmed]</p>}
      </form>
    </div>
  );
}
