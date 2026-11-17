/** Editable page content. Bracketed text is a visible placeholder waiting for the college to confirm. */

export const nav = [
  { label: 'About', href: '#story', items: [['Our story', '#story'], ['Leadership', '#principal'], ['Campus', '#life']] },
  { label: 'Programs', href: '#programs', items: [['BSW', '#programs'], ['MSW', '#programs'], ['Ph.D.', '#programs']] },
  { label: 'Admissions', href: '#admission', items: [['How to apply', '#admission'], ['Fee structure', '#admission'], ['Prospectus', '#admission']] },
  { label: 'Student Life', href: '#life', items: [['NSS', '#life'], ['Field work', '#life'], ['Placement', '#life']] },
  { label: 'IQAC and NAAC', href: '#trust', items: [['Quality reports', '#trust'], ['NAAC records', '#trust']] },
] as const;

export const menuGroups = [
  { title: 'About', sub: 'Our story, leadership, campus', href: '#story' },
  { title: 'Programs', sub: 'BSW, MSW, Ph.D.', href: '#programs' },
  { title: 'Admissions', sub: 'How to apply, fees, prospectus', href: '#admission' },
  { title: 'Student Life', sub: 'NSS, field work, placement', href: '#life' },
  { title: 'IQAC and NAAC', sub: 'Quality reports and records', href: '#trust' },
  { title: 'Contact', sub: 'Address, phone, map', href: '#contact' },
] as const;

export const trust = [
  { big: 'NAAC A+', small: 'Accredited' },
  { big: 'NIRF 201-300', small: 'College category · [year to confirm]' },
  { big: 'Est. 1993', small: 'Wardha' },
  { big: 'RTMNU', small: 'Affiliated university' },
] as const;

export const programs = [
  { code: 'BSW', tone: 'm', duration: '3 years', sub: '6 semesters', segments: 6, title: 'Bachelor of Social Work', text: 'Your first degree in social work, after Class 12. Classroom learning paired with work in real communities.' },
  { code: 'MSW', tone: 's', duration: '2 years', sub: '4 semesters', segments: 4, title: 'Master of Social Work', text: 'For graduates who want to practise, lead or teach. Deeper study, supervised field practice.' },
  { code: 'Ph.D.', tone: 'k', duration: 'Research', sub: '[duration to confirm]', segments: 0, title: 'Doctor of Philosophy in Social Work', text: 'For researchers who want to add to the field. Guided work through our Research Centre.' },
] as const;

export const steps = [
  { n: 1, title: 'Choose a program', text: 'BSW, MSW or Ph.D.' },
  { n: 2, title: 'Fill the form', text: 'The application for 2026-27 takes a few minutes.' },
  { n: 3, title: 'Submit documents', text: 'The list is in the admission procedure.' },
] as const;

/** Point href at the real PDF once uploaded, for example /docs/prospectus.pdf (place files in /public/docs). */
export const downloads = [
  { label: 'Prospectus', href: '#' },
  { label: 'Fee structure', href: '#' },
  { label: 'Admission procedure', href: '#' },
] as const;

export const notices = [
  { date: '[DATE]', title: 'Ph.D. admission: seat status', href: '#' },
  { date: '[DATE]', title: 'Provisional admission schedule, 2026-27', href: '#' },
  { date: '[DATE]', title: '[Third circular title to be added]', href: '#' },
] as const;

export const lifePhotos = [
  { key: 'e1', alt: 'Faculty and guests standing together on the campus lawn', caption: 'Faculty and guests on the campus lawn' },
  { key: 'e2', alt: 'A community meeting with people seated in a hall', caption: 'A community meeting in session' },
  { key: 'e3', alt: 'Students listening to a faculty member outdoors', caption: 'Students in conversation outdoors', position: '60% 50%' },
] as const;

export const faqs = [
  { tag: 'BSW', q: 'Who can apply for the BSW?', a: '[Admission office to add: accepted Class 12 streams, minimum marks, age limit]' },
  { tag: 'MSW', q: 'Who can apply for the MSW, and what can I specialise in?', a: '[Add: accepted graduate degrees, minimum marks, specialisations offered]' },
  { tag: 'Admission', q: 'Is admission by merit or by entrance test?', a: '[Add: selection method, counselling or interview, last date to apply, merit list dates]' },
  { tag: 'Fees', q: 'What are the fees, and are scholarships available?', a: '[Add: yearly fee for BSW, MSW and Ph.D., scholarships and fee concessions]. The full list is in the Fee structure PDF.' },
  { tag: 'Documents', q: 'Which documents do I need to bring?', a: '[Add: certificates, mark sheets, photographs and ID proof, originals and copies]. The full list is in the Admission procedure PDF.' },
  { tag: 'Field work', q: 'What is field work, and how often will I go?', a: '[Add: days per week, partner organisations, villages and communities, who supervises]' },
  { tag: 'Campus', q: 'Is hostel accommodation available?', a: '[Add: hostel availability, seats, fees, rules, distance from campus]' },
  { tag: 'Ph.D.', q: 'How do I apply for the Ph.D.?', a: '[Add: eligibility, entrance or eligibility test rules, supervisor allotment, seats, fees, duration]' },
  { tag: 'After the degree', q: 'What can I do after the BSW or MSW?', a: '[Add: careers, placement support, further study. Use real outcomes from our graduates]' },
] as const;

export const principal = {
  name: 'Dr. Chandu K. Popatkar',
  role: 'Principal',
  credentials: 'B.Sc., M.S.W., NET, B.J., Ph.D.',
  excerpt: 'We teach students to listen first, then to act with care. A degree here is measured by the service that follows.',
} as const;

export const social = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
] as const;

export const quickLinks = [
  { label: 'Prospectus', href: '#admission' },
  { label: 'Fee structure', href: '#admission' },
  { label: 'Notices', href: '#notices' },
  { label: 'IQAC and NAAC', href: '#trust' },
  { label: 'Research Centre', href: '#life' },
  { label: 'Contact', href: '#contact' },
] as const;
