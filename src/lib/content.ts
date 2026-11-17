/**
 * Homepage content, navigation and footer links. Facts come from the old site (kcswwardha.in).
 * Bracketed text is a visible placeholder waiting for the college to confirm.
 */
import { docs } from './docs';

export const APPLY_FORM = 'https://forms.gle/hwxwjpRg2chMeUoF9';

type Item = readonly [label: string, href: string];

export const nav: readonly { label: string; href: string; items: readonly Item[] }[] = [
  { label: 'About', href: '/about', items: [
    ['About KCSW', '/about'], ['About the society (RTMTES)', '/about/society'], ['Vision and mission', '/about/vision-mission'],
    ["Principal's desk", '/about/principal'], ['Governing body', '/about/governing-body'],
    ['Teaching staff', '/about/teaching-staff'], ['Administrative staff', '/about/administrative-staff'],
    ['Recognition and approvals', '/about/recognition-approvals'],
  ] },
  { label: 'Programmes', href: '/programmes', items: [
    ['Bachelor of Social Work (BSW)', '/programmes/bsw'], ['Master of Social Work (MSW)', '/programmes/msw'],
    ['M.A. Travel and Tourism', '/programmes/ma-travel-tourism'], ['Ph.D. in Social Work', '/programmes/phd'],
    ['Research Center', '/programmes/research-centre'], ['Academic calendar', '/programmes/academic-calendar'],
  ] },
  { label: 'Admissions', href: '/admissions', items: [
    ['How to apply', '/admissions'], ['Fee structure', '/admissions/fee-structure'],
    ['Prospectus (PDF)', docs.prospectus.href], ['Admission procedure (PDF)', docs.admissionProcedure.href],
  ] },
  { label: 'Campus life', href: '/campus', items: [
    ['Training and placement', '/campus/placement'], ['NSS', '/campus/nss'], ['Games and sports', '/campus/sports'],
    ['Health facilities', '/campus/health-facilities'], ['Alumni', '/campus/alumni'], ["Students' zone", '/campus/students-zone'],
    ['Library', '/campus/library'], ['E-library', '/campus/e-library'], ['Magazine', '/campus/magazine'], ['Gallery', '/campus/gallery'],
  ] },
  { label: 'Quality', href: '/quality', items: [
    ['IQAC and AQAR', '/quality/iqac'], ['NAAC', '/quality/naac'], ['NIRF', '/quality/nirf'],
    ['Committees and cells', '/quality'], ['Anti-ragging', '/quality/anti-ragging'], ['Internal Complaints Committee', '/quality/internal-complaints-committee'],
  ] },
  { label: 'Notices', href: '/notices', items: [
    ['Circulars and notices', '/notices'], ['News and events', '/notices/news'], ['Job openings', '/notices/job-openings'],
    ['RTI', '/notices/rti'], ['Accounts', '/notices/accounts'], ['Feedback', '/notices/feedback'],
  ] },
];

export const menuGroups = [
  { title: 'About', sub: 'College, leadership, faculty', href: '/about' },
  { title: 'Programmes', sub: 'BSW, MSW, M.A., Ph.D.', href: '/programmes' },
  { title: 'Admissions', sub: 'How to apply, fees, prospectus', href: '/admissions' },
  { title: 'Campus life', sub: 'Placement, NSS, library, alumni', href: '/campus' },
  { title: 'Quality', sub: 'IQAC, NAAC, NIRF, committees', href: '/quality' },
  { title: 'Notices', sub: 'Circulars, RTI, feedback', href: '/notices' },
  { title: 'Contact', sub: 'Address, phone, map', href: '/contact' },
] as const;

/** Four facts shown under the hero. */
export const trust = [
  { big: 'Est. 1993', small: 'Wardha, Maharashtra' },
  { big: 'RTMNU', small: 'Affiliated university, Nagpur' },
  { big: '1,203', small: 'Graduates in 25 years [update figure]' },
  { big: 'NAAC A+', small: 'Accredited, grade A+ [cycle and year to confirm]' },
] as const;

export const programs = [
  { code: 'BSW', tone: 'm', duration: '3 years', sub: '6 semesters', segments: 6, title: 'Bachelor of Social Work', text: 'Your first degree in social work, with classroom study and supervised field practice.', href: '/programmes/bsw' },
  { code: 'MSW', tone: 's', duration: '2 years', sub: '4 semesters', segments: 4, title: 'Master of Social Work', text: 'For graduates who want to practise, lead or teach. Specialisation papers and a dissertation.', href: '/programmes/msw' },
  { code: 'M.A.', tone: 'k', duration: '2 years', sub: '4 semesters', segments: 4, title: 'Travel and Tourism', text: 'A master\'s programme covering destinations, tourism planning, operations and management.', href: '/programmes/ma-travel-tourism' },
  { code: 'Ph.D.', tone: 'm', duration: 'Research', sub: 'Usually 3 years, full time', segments: 0, title: 'Doctor of Philosophy in Social Work', text: 'Guided research through the Dr. Kailash Satyarthi Research Center.', href: '/programmes/phd' },
] as const;

export const steps = [
  { n: 1, title: 'Choose a programme', text: 'BSW, MSW, M.A. or Ph.D.' },
  { n: 2, title: 'Fill the form', text: 'The online admission form takes a few minutes.' },
  { n: 3, title: 'Submit documents', text: 'The list is in the admission procedure.' },
] as const;

export const downloads = [
  { label: docs.prospectus.label, href: docs.prospectus.href },
  { label: docs.fees.label, href: docs.fees.href },
  { label: docs.admissionProcedure.label, href: docs.admissionProcedure.href },
] as const;

export const notices = [
  { date: '[DATE]', title: docs.phdSeats.label, href: docs.phdSeats.href },
  { date: '[DATE]', title: docs.phdSchedule.label, href: docs.phdSchedule.href },
  { date: '[DATE]', title: '[Latest circular to be added]', href: '/notices' },
] as const;

export const lifePhotos = [
  { key: 'e1', alt: 'Faculty and guests standing together on the campus lawn', caption: 'Faculty and guests on the campus lawn' },
  { key: 'e2', alt: 'A community meeting with people seated in a hall', caption: 'A community meeting in session' },
  { key: 'e3', alt: 'Students listening to a faculty member outdoors', caption: 'Students in conversation outdoors', position: '60% 50%' },
] as const;

/** Tiles under "Life and field work". */
export const lifeTiles = [
  { icon: 'nss', label: 'NSS', href: '/campus/nss' },
  { icon: 'place', label: 'Training and placement', href: '/campus/placement' },
  { icon: 'research', label: 'Research Center', href: '/programmes/research-centre' },
] as const;

export const facts = [
  { n: '15', label: 'Teaching staff', text: 'Led by the Principal, with Ph.D., M.Phil. and NET qualified faculty.', href: '/about/teaching-staff' },
  { n: '100', label: 'NSS volunteers', text: 'One active unit since 1993, with seven-day camps in adopted villages.', href: '/campus/nss' },
  { n: '16', label: 'Research scholars', text: 'Enrolled through the Dr. Kailash Satyarthi Research Center. [Update figure]', href: '/programmes/research-centre' },
  { n: '85%+', label: 'Women students', text: 'A woman medical officer for student health examinations.', href: '/campus/health-facilities' },
] as const;

export const quality = [
  { title: 'NAAC', text: 'Accredited with grade A+. Self Study Report, Peer Team Report 2022 and certificate.', href: '/quality/naac' },
  { title: 'NIRF', text: 'Submissions for 2026 and 2023.', href: '/quality/nirf' },
  { title: 'IQAC and AQAR', text: 'Members, minutes, MOUs and annual reports.', href: '/quality/iqac' },
  { title: 'Committees and cells', text: 'Anti-ragging, internal complaints, counselling, exam cell and more.', href: '/quality' },
] as const;

export const faqs = [
  { tag: 'BSW', q: 'Who can apply for the BSW?', a: '[Admission office to add: accepted Class 12 streams, minimum marks, age limit]' },
  { tag: 'MSW', q: 'Who can apply for the MSW, and what can I specialise in?', a: '[Add: accepted graduate degrees, minimum marks, specialisations offered]' },
  { tag: 'Admission', q: 'Is admission by merit or by entrance test?', a: '[Add: selection method, counselling or interview, last date to apply, merit list dates]' },
  { tag: 'Fees', q: 'What are the fees, and are scholarships available?', a: '[Add: yearly fee for each programme, scholarships and fee concessions]. The full list is in the fee structure PDF.' },
  { tag: 'Documents', q: 'Which documents do I need to bring?', a: '[Add: certificates, mark sheets, photographs and ID proof, originals and copies]. The full list is in the admission procedure PDF. Every student also needs a medical examination at admission.' },
  { tag: 'Field work', q: 'What is field work, and how often will I go?', a: 'Classroom learning is reinforced through field work, where students learn from direct experience. [Add: days per week, partner organisations, supervisors]' },
  { tag: 'Campus', q: 'Is hostel accommodation available?', a: '[Add: hostel availability, seats, fees, rules, distance from campus]' },
  { tag: 'Ph.D.', q: 'How do I apply for the Ph.D.?', a: 'Ph.D. admission follows the directions of Nagpur University. The latest notices and seat status are on the Ph.D. page. [Add: eligibility, seats, fees]' },
  { tag: 'After the degree', q: 'What can I do after the BSW or MSW?', a: 'The Training and Placement Cell supports internships and placements with NGOs, companies and government offices. [Add: real outcomes from our graduates]' },
] as const;

export const principal = {
  name: 'Dr. Chandu K. Popatkar',
  role: 'Principal',
  credentials: 'B.Sc., M.S.W., NET, B.J., Ph.D.',
  excerpt: 'Our commitment is to provide a safe and intellectually challenging environment that empowers students to become innovative thinkers, creative problem solvers and inspired learners.',
} as const;

export const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/kscwwardha/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCPSsCtDb-Q9LClMiSvLMWWw' },
] as const;

export const quickLinks = [
  { label: 'Admissions', href: '/admissions' },
  { label: 'Prospectus', href: docs.prospectus.href },
  { label: 'Fee structure', href: '/admissions/fee-structure' },
  { label: 'Notices', href: '/notices' },
  { label: 'IQAC and NAAC', href: '/quality/iqac' },
  { label: 'Contact', href: '/contact' },
] as const;
