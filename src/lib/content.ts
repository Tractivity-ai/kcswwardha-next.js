/**
 * Homepage content, navigation and footer links. Facts come from the old site (kcswwardha.in).
 * Bracketed text is a visible placeholder waiting for the college to confirm.
 */
import { docs } from './docs';

export const APPLY_FORM = 'https://forms.gle/hwxwjpRg2chMeUoF9';

type Item = readonly [label: string, href: string];

export const nav: readonly { label: string; href: string; items: readonly Item[] }[] = [
  { label: 'About', href: '/about', items: [
    ['About KCSW', '/about'], ['Vision and mission', '/about#vision-mission'], ['Recognition and approvals', '/about#recognition-approvals'],
    ['About the society (RTMTES)', '/about/society'], ['Leadership and governance', '/about/leadership'],
    ['Plans, reports and accounts', '/about/plans-reports-accounts'],
  ] },
  { label: 'Academics', href: '/academics', items: [
    ['Bachelor of Social Work (BSW)', '/academics/bsw'], ['Master of Social Work (MSW)', '/academics/msw'],
    ['Calendar, examinations and results', '/academics/calendar-examinations'],
    ['Faculty and staff', '/academics/faculty-staff'], ['Fieldwork and practicum', '/academics/fieldwork'], ['Library and e-library', '/academics/library'],
  ] },
  { label: 'Admissions', href: '/admissions', items: [
    ['How to apply', '/admissions'], ['Apply online', '/admissions/apply'], ['Fee structure', '/admissions#fee-structure'],
    ['Prospectus (PDF)', docs.prospectus.href], ['Admission procedure (PDF)', docs.admissionProcedure.href],
  ] },
  { label: 'Research', href: '/research/research-centre', items: [
    ['Dr. Kailash Satyarthi Research Center', '/research/research-centre'], ['Ph.D. in Social Work', '/research/phd'], ['Projects and publications', '/research/projects-publications'],
    ['Collaborations, consultancy and incubation', '/research/collaborations-consultancy'],
  ] },
  { label: 'Quality', href: '/quality/iqac', items: [
    ['IQAC and feedback', '/quality/iqac'], ['NAAC, NIRF and AQAR', '/quality/naac-nirf-aqar'],
  ] },
  { label: 'Student life', href: '/student-life', items: [
    ['Student zone', '/student-life'], ['Support, grievance and cells', '/student-life/support-cells'],
    ['NSS, sports and activities', '/student-life/nss-sports'], ['Training and placement', '/student-life/placement'], ['Alumni', '/student-life/alumni'],
  ] },
  { label: 'Information corner', href: '/information/notices', items: [
    ['Notices and circulars', '/information/notices'], ['News, events and magazine', '/information/news-events'],
    ['Gallery', '/information/gallery'], ['RTI', '/information/rti'],
  ] },
];

export const menuGroups = [
  { title: 'About', sub: 'College, leadership, governance', href: '/about' },
  { title: 'Academics', sub: 'Programmes, calendar, faculty, library', href: '/academics' },
  { title: 'Admissions', sub: 'How to apply, fees, prospectus', href: '/admissions' },
  { title: 'Research', sub: 'Research Center, Ph.D., collaborations', href: '/research/research-centre' },
  { title: 'Quality', sub: 'IQAC, NAAC, NIRF, AQAR', href: '/quality/iqac' },
  { title: 'Student life', sub: 'Support cells, NSS, placement, alumni', href: '/student-life' },
  { title: 'Information corner', sub: 'Notices, news, gallery, RTI', href: '/information/notices' },
  { title: 'Contact', sub: 'Address, phone, map', href: '/contact' },
] as const;

/** Four facts shown under the hero. */
export const trust = [
  { big: 'Est. 1993', small: 'Wardha, Maharashtra' },
  { big: 'RTMNU', small: 'Affiliated university, Nagpur' },
  { big: '1,200+', small: 'Graduates in 25 years' },
  { big: 'NAAC A+', small: 'CGPA 3.35, valid up to October 2027' },
] as const;

export const programs = [
  { code: 'BSW', tone: 'm', duration: '3 years', sub: '6 semesters', segments: 6, title: 'Bachelor of Social Work', text: 'Your first degree in social work, with classroom study and supervised field practice.', href: '/academics/bsw' },
  { code: 'MSW', tone: 's', duration: '2 years', sub: '4 semesters', segments: 4, title: 'Master of Social Work', text: 'For graduates who want to practise, lead or teach. Specialisation papers and a dissertation.', href: '/academics/msw' },
  { code: 'Ph.D.', tone: 'm', duration: 'Research', sub: 'Usually 3 years, full time', segments: 0, title: 'Doctor of Philosophy in Social Work', text: 'Guided research through the Dr. Kailash Satyarthi Research Center.', href: '/research/phd' },
] as const;

export const steps = [
  { n: 1, title: 'Choose a programme', text: 'BSW, MSW or Ph.D.' },
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
  { date: '[DATE]', title: '[Latest circular to be added]', href: '/information/notices' },
] as const;

export const lifePhotos = [
  { key: 'nss', alt: 'NSS volunteers and faculty tending the college garden', caption: 'NSS volunteers on campus' },
  { key: 'village', alt: 'Students and villagers cleaning a village lane', caption: 'A cleanliness drive in a village' },
  { key: 'team', alt: 'NSS volunteers and faculty in uniform at a roadside awareness stall', caption: 'NSS team at an awareness stall' },
] as const;

/** Tiles under "Life and field work". */
export const lifeTiles = [
  { icon: 'nss', label: 'NSS', href: '/student-life/nss-sports' },
  { icon: 'place', label: 'Training and placement', href: '/student-life/placement' },
  { icon: 'research', label: 'Research Center', href: '/research/research-centre' },
] as const;

export const facts = [
  { n: '15', label: 'Teaching staff', text: 'Led by the Principal, with Ph.D., M.Phil. and NET qualified faculty.', href: '/academics/faculty-staff' },
  { n: '100', label: 'NSS volunteers', text: 'One active unit since 1993, with seven-day camps in adopted villages.', href: '/student-life/nss-sports' },
  { n: '16', label: 'Research scholars', text: 'Enrolled through the Dr. Kailash Satyarthi Research Center. [Update figure]', href: '/research/research-centre' },
  { n: '85%+', label: 'Women students', text: 'A woman medical officer for student health examinations.', href: '/student-life/support-cells#health-facilities' },
] as const;

export const quality = [
  { title: 'NAAC', text: 'Accredited with grade A+. Self Study Report, Peer Team Report 2022 and certificate.', href: '/quality/naac-nirf-aqar' },
  { title: 'NIRF', text: 'Submissions for 2026 and 2023.', href: '/quality/naac-nirf-aqar#nirf' },
  { title: 'IQAC and AQAR', text: 'Members, minutes, MOUs and annual reports.', href: '/quality/iqac' },
  { title: 'Committees and cells', text: 'Grievance, ombudsperson, internal complaints, anti-ragging, counselling and more.', href: '/student-life/support-cells' },
] as const;

export const faqs = [
  { tag: 'BSW', q: 'Who can apply for the BSW, and how long is it?', a: 'The BSW is a three-year, six-semester programme. Students who have passed Class 12 from a recognised board can apply. The university sets the minimum marks and the rules for each admission year, and the admission procedure PDF lists them.' },
  { tag: 'MSW', q: 'Who can apply for the MSW, and how long is it?', a: 'The MSW is a two-year, four-semester programme. Graduates of a recognised university can apply, as set out in the university rules and the admission procedure PDF. The course covers case work, group work and community work, with a practicum in every semester. [College to confirm the specialisation papers offered]' },
  { tag: 'Admission', q: 'How does admission work?', a: 'Admission follows the rules of Rashtrasant Tukadoji Maharaj Nagpur University. Choose a programme, fill in the online admission form and submit the documents listed in the admission procedure. [College to confirm: selection method, last date to apply and merit list dates]' },
  { tag: 'Fees', q: 'What are the fees, and are scholarships available?', a: 'The fee for each programme is listed in the fee structure PDF on the admissions page. [College to confirm: scholarships and fee concessions available to students]' },
  { tag: 'Documents', q: 'Which documents do I need for admission?', a: 'The admission procedure PDF lists the documents, which usually include mark sheets, the last college or school leaving certificate, a category certificate where it applies, an identity proof and photographs. Every student also needs a medical examination at admission.' },
  { tag: 'Field work', q: 'What is field work in social work education?', a: 'Field work is supervised practice in the community and in social agencies, alongside classroom study. It includes concurrent fieldwork during the semester, block placement, rural camps and study tours, and each student works under the guidance of faculty supervisors.' },
  { tag: 'Campus', q: 'Is hostel accommodation available?', a: '[College to confirm: hostel availability, seats, fees and rules, and the distance from the campus on Sevagram Road]' },
  { tag: 'Ph.D.', q: 'How do I apply for the Ph.D. in Social Work?', a: 'Ph.D. admission follows the directions of Nagpur University and is held at the Dr. Kailash Satyarthi Higher Education and Research Center. The programme usually takes three years full time. The latest notices, admission schedule and vacant seat status are on the Ph.D. page.' },
  { tag: 'Accreditation', q: 'Is the college accredited, and which university is it affiliated to?', a: 'Yes. Kumbhalkar College of Social Work is accredited by NAAC with grade A+ (CGPA 3.35, second cycle), valid up to 25 October 2027. It is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and has run since 1993.' },
  { tag: 'Location', q: 'Where is the college?', a: 'The college is on Sevagram Road, Opp. Mahila Ashram, Wardha 442001, Maharashtra. The contact page has the map, phone numbers and email addresses.' },
  { tag: 'After the degree', q: 'What can I do after the BSW or MSW?', a: 'Social work graduates work with NGOs, companies, hospitals, schools and government offices. The Training and Placement Cell supports internships and placements and offers competitive exam guidance for final-year BSW and MSW students.' },
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

/** Eight key links in the footer, as in the website plan. */
export const quickLinks = [
  { label: 'NAAC and NIRF', href: '/quality/naac-nirf-aqar' },
  { label: 'AQAR', href: '/quality/naac-nirf-aqar#aqar' },
  { label: 'RTI', href: '/information/rti' },
  { label: 'Fee structure', href: '/admissions#fee-structure' },
  { label: 'Grievance and cells', href: '/student-life/support-cells' },
  { label: 'Annual reports and accounts', href: '/about/plans-reports-accounts' },
  { label: 'Notices', href: '/information/notices' },
  { label: 'Contact', href: '/contact' },
] as const;
