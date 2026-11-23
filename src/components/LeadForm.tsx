'use client';

import { useId, useState, type FormEvent } from 'react';
import { useLang } from '@/lib/i18n';
import { hasWhatsapp, waLink } from '@/lib/site';
import { Icon } from './Icon';

type Program = 'BSW' | 'MSW' | 'Ph.D.';
const PROGRAMS: Program[] = ['BSW', 'MSW', 'Ph.D.'];

export function LeadForm() {
  const uid = useId();
  const { t } = useLang();
  const [program, setProgram] = useState<Program | ''>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [tried, setTried] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [done, setDone] = useState<null | { name: string; phone: string; program: Program }>(null);

  const okProgram = program !== '';
  const showProgram = tried && !okProgram;
  const okName = name.trim().length >= 2;
  const okPhone = /^[6-9]\d{9}$/.test(phone);
  const showName = tried && !okName;
  const showPhone = tried && !okPhone;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setTried(true);
    if (!okProgram) { document.getElementById(`${uid}-prog`)?.focus(); return; }
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
      setDone({ name: name.trim(), phone, program: program as Program });
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="lead" id="callback" role="region" aria-label="Request received">
        <div className="lead__done" tabIndex={-1} ref={(el) => el?.focus({ preventScroll: true })}>
          <Icon name="check" />
          <p>
            Thank you, {done.name}. Our admission desk will call you on +91 {done.phone} about {done.program.endsWith('.') ? done.program : `${done.program}.`} [Call back time to be confirmed]{' '}
            <a href={waLink('admissions')} target="_blank" rel="noopener noreferrer">Chat on WhatsApp while you wait</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lead" id="callback" role="region" aria-label="Request a call back">
      <form onSubmit={onSubmit} noValidate>
        <h2 className="lead__t">{t('cbTitle')}</h2>

        <select
          id={`${uid}-prog`} name="program" required aria-label={t('iam')}
          className={showProgram ? 'bad' : undefined} aria-invalid={showProgram}
          value={program} onChange={(e) => setProgram(e.target.value as Program)}
        >
          <option value="" disabled>{t('iam')}</option>
          {PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>

        <input
          className={`in${showName ? ' bad' : ''}`}
          id={`${uid}-name`} name="name" type="text" autoComplete="name" placeholder={t('name')} aria-label={t('name')}
          value={name} onChange={(e) => setName(e.target.value)}
          aria-invalid={showName} required
        />

        <input
          className={`in${showPhone ? ' bad' : ''}`}
          id={`${uid}-phone`} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
          maxLength={10} placeholder={t("mobile")} aria-label={t('mobile')}
          value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
          aria-invalid={showPhone} required
        />

        <input
          type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={company} onChange={(e) => setCompany(e.target.value)}
          style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
        />

        <button type="submit" className="lead__btn" disabled={busy}>{t('submit')}</button>

        {(showProgram || showName || showPhone) && (
          <p className="err" role="alert">
            {showProgram ? 'Please choose a programme.' : showName ? 'Please enter your name.' : 'Enter a valid 10-digit mobile number.'}
          </p>
        )}
        {failed && (
          <p className="lead__fail" role="alert">
            We could not send this just now. Please try again, or chat with us on WhatsApp.
          </p>
        )}
        <p className="lead__fine">
          By submitting, you agree to be contacted by KCSW about admissions. [Privacy policy link to be added]{' '}
          Prefer chat? <a href={waLink('admissions')} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          {!hasWhatsapp && ' [WhatsApp number to be confirmed]'}
        </p>
      </form>
    </div>
  );
}
