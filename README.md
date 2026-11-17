# KCSW website (Next.js)

Homepage for Kumbhalkar College of Social Work, Wardha. Next.js (App Router), TypeScript, plain CSS. The design is the approved one, mobile first, with layouts for phone, tablet and desktop.

## Run it

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

Needs Node 20.9 or newer.

## Deploy on Vercel

Import the GitHub repository. Vercel detects Next.js, so leave every setting at its default and deploy. Then add the environment variables below under Settings, Environment Variables, and redeploy.

## Settings (environment variables)

Copy `.env.example` to `.env.local` for local work. Blank values show the visible bracketed placeholders on the page.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public address, used for canonical link, sitemap and social previews |
| `NEXT_PUBLIC_WHATSAPP` | Digits only with country code, for example `919876543210`. Feeds every WhatsApp button |
| `NEXT_PUBLIC_PHONE` | Feeds the Call button and the footer |
| `NEXT_PUBLIC_EMAIL` | Footer email |
| `LEAD_WEBHOOK_URL` | Where each lead is sent (server side only) |

## Lead form

The hero form posts to `src/app/api/lead/route.ts`. It validates the name and Indian mobile number, ignores bot submissions, and forwards the lead as JSON to `LEAD_WEBHOOK_URL`. Without that variable, leads are printed to the Vercel function logs so nothing is lost. For a Google Sheet, publish an Apps Script web app that appends the JSON fields and use its URL.

## Where things live

    src/app/page.tsx            page, in section order
    src/app/layout.tsx          fonts, metadata, structured data
    src/app/globals.css         all styles (breakpoints 640, 900 and 1100px)
    src/components/             Header, Hero, LeadForm, Sections (Trust to Principal), Footer, FloatingActions
    src/lib/content.ts          navigation, programs, notices, FAQ, Principal text
    src/lib/site.ts             contact details and WhatsApp links
    src/lib/i18n.tsx            English and Marathi text and the language switch
    src/assets/                 fonts and photos (replace photos with the same file names)

Change copy in `content.ts` and `i18n.tsx`. Component files rarely need touching.

## Before launch

1. Fill the bracketed placeholders: dates, NIRF year, Ph.D. duration, last date to apply, FAQ answers, the Principal's approved excerpt, the privacy policy link.
2. Replace the `href="#"` links (PDFs, notices, social, story, Principal's message). Put PDFs in `public/docs` and link to `/docs/name.pdf`.
3. Marathi text is placeholder. Have a native speaker review it.
4. Swap in higher resolution photos. The supplied ones are small, so the hero photo is used only behind an overlay.
5. Add analytics if wanted. Track the lead form by listening for a successful `/api/lead` response in `LeadForm.tsx`.


## Inner pages (added)

All inner pages live in one data file, `src/lib/pages.ts`, and render through one template (`src/components/PageShell.tsx` and `Blocks.tsx`). To edit a page, change its entry in that file. Block types: paragraph, heading, list, table, documents, facts, semesters, to-confirm note, embedded PDF, button, hub, contact.

- Source of truth for the content is the old site, kcswwardha.in. Anything the old site did not say is a visible bracketed placeholder or a "To confirm" box. `PLACEHOLDERS.md` lists them all.
- PDFs still point to the old site (`src/lib/docs.ts`, `DOC_BASE`). Copy the files into `public/documents/` and change `DOC_BASE` to `/documents/` before the old site is taken down.
- Old `.php` addresses need 301 redirects before launch (see the redirect map in the plan).
- Motion is kept to hover and focus states only.
