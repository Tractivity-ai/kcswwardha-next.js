import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const PROGRAMS = ['BSW', 'MSW', 'Ph.D.'];

/**
 * Receives the hero lead form.
 * Set LEAD_WEBHOOK_URL (Vercel, Settings, Environment Variables) to forward each lead to
 * Google Sheets (Apps Script web app), Zapier, Make, Slack and so on.
 * Without it, leads are written to the function logs so nothing is lost while you set it up.
 */
export async function POST(req: Request) {
  let b: Record<string, unknown> = {};
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const name = String(b.name ?? '').trim().slice(0, 80);
  const phone = String(b.phone ?? '').replace(/[^\d+]/g, '').slice(0, 14);
  const program = PROGRAMS.includes(String(b.program)) ? String(b.program) : 'BSW';
  if (name.length < 2 || !/^\+91[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    program,
    page: String(b.page ?? '').slice(0, 300),
    lang: String(b.lang ?? '').slice(0, 5),
    at: new Date().toISOString(),
  };

  const url = process.env.LEAD_WEBHOOK_URL;
  try {
    if (url) {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!r.ok) throw new Error(`webhook ${r.status}`);
    } else {
      console.log('LEAD', JSON.stringify(lead));
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('LEAD_FAILED', JSON.stringify(lead), e instanceof Error ? e.message : e);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
