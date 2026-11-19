/**
 * Site layout, shared by the pages and by next.config.mjs (for redirects).
 * Each entry builds one new page from one or more pages of the first build ("sources").
 * When a page has several sources, each later source becomes a section of the page, with its own web address (#section).
 * owner = the office that maintains the page; shown on the page and used for the "Last updated" strip.
 */
export const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const layout = [
  // About
  { path: '/about', group: 'about', owner: 'Principal office', sources: ['/about', '/about/vision-mission', '/about/recognition-approvals'] },
  { path: '/about/society', group: 'about', owner: 'Management', sources: ['/about/society'] },
  { path: '/about/leadership', group: 'about', owner: 'Principal office', title: 'Leadership and governance',
    desc: 'Principal, governing body and administrative officers of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/about/principal', '/about/governing-body', '/quality/controller-of-examination'] },
  { path: '/about/plans-reports-accounts', group: 'about', owner: 'Accounts office and IQAC', title: 'Plans, reports and accounts',
    desc: 'Institutional development plan, annual reports and audited annual accounts of Kumbhalkar College of Social Work, Wardha.',
    lead: 'Planning documents, annual reports and audited accounts, year by year.', sources: ['+plans', '/notices/accounts'] },
  // Academics
  { path: '/academics', group: 'academics', owner: 'Academic cell', sources: ['/programmes'] },
  { path: '/academics/bsw', group: 'academics', owner: 'Academic cell', sources: ['/programmes/bsw'] },
  { path: '/academics/msw', group: 'academics', owner: 'Academic cell', sources: ['/programmes/msw'] },
  { path: '/academics/calendar-examinations', group: 'academics', owner: 'Exam cell', title: 'Calendar, examinations and results',
    desc: 'Academic calendar and exam cell of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/programmes/academic-calendar', '/quality/exam-cell'] },
  { path: '/academics/faculty-staff', group: 'academics', owner: 'Administration', title: 'Faculty and staff',
    desc: 'Teaching and administrative staff of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/about/teaching-staff', '/about/administrative-staff'] },
  { path: '/academics/library', group: 'academics', owner: 'Librarian', title: 'Library and e-library',
    desc: 'Library department and e-library of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/campus/library', '/campus/e-library'] },
  { path: '/academics/fieldwork', group: 'academics', owner: 'Fieldwork coordinator', title: 'Fieldwork and practicum',
    desc: 'Concurrent fieldwork, block placement, rural camps and study tours at Kumbhalkar College of Social Work, Wardha.',
    lead: 'The practical part of the social work programmes.', sources: ['+fieldwork'] },
  // Admissions
  { path: '/admissions', group: 'admissions', owner: 'Admission cell', sources: ['/admissions', '/admissions/fee-structure'] },
  { path: '/admissions/apply', group: 'admissions', owner: 'Admission cell', title: 'Apply online',
    desc: 'How to apply to Kumbhalkar College of Social Work, Wardha: steps, documents and the online application form.',
    lead: 'Apply in three steps.', sources: ['+apply'] },
  // Research
  { path: '/research/research-centre', group: 'research', owner: 'Research cell', sources: ['/programmes/research-centre'] },
  { path: '/research/phd', group: 'research', owner: 'Research cell', sources: ['/programmes/phd'] },
  { path: '/research/projects-publications', group: 'research', owner: 'Research cell and library', title: 'Projects and publications',
    desc: 'Funded and consultancy projects, publications, conferences and seminars at Kumbhalkar College of Social Work, Wardha.',
    lead: 'Research projects, publications and academic events.', sources: ['+projects'] },
  { path: '/research/collaborations-consultancy', group: 'research', owner: 'Research cell and CSR cell', title: 'Collaborations, consultancy and incubation',
    desc: 'Academic and industry collaborations, the CSR, project and NGO consultancy cell, and the incubation centre of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/quality/csr-cell', '/campus/incubation-centre'] },
  // Quality
  { path: '/quality/iqac', group: 'quality', owner: 'IQAC', sources: ['/quality/iqac', '/notices/feedback'] },
  { path: '/quality/naac-nirf-aqar', group: 'quality', owner: 'IQAC', title: 'NAAC, NIRF and AQAR',
    desc: 'NAAC accreditation, NIRF submissions and AQAR reports of Kumbhalkar College of Social Work, Wardha.',
    sources: ['/quality/naac', '/quality/nirf', '+aqar'] },
  // Student life
  { path: '/student-life', group: 'student', owner: 'Student section', title: 'Student zone', sources: ['/campus/students-zone'] },
  { path: '/student-life/support-cells', group: 'student', owner: 'Respective cells', title: 'Support, grievance and cells',
    desc: 'Grievance redressal, ombudsperson, internal complaints, anti-ragging, equal opportunity, SEDG, accessibility, health and counselling at Kumbhalkar College of Social Work, Wardha.',
    lead: 'Each cell has its own section: who is on it, how to reach it and what it does.', toc: true,
    sources: ['/quality/grievance-redressal', '/quality/ombudsperson', '/quality/internal-complaints-committee', '/quality/sexual-harassment-committee',
      '/quality/anti-ragging', '/quality/equal-opportunity-cell', '/quality/sedg-cell', '+accessibility', '/campus/health-facilities', '/quality/counselling-committee'] },
  { path: '/student-life/nss-sports', group: 'student', owner: 'NSS programme officer', title: 'NSS, sports and activities',
    desc: 'NSS unit, games and sports at Kumbhalkar College of Social Work, Wardha.', sources: ['/campus/nss', '/campus/sports'] },
  { path: '/student-life/placement', group: 'student', owner: 'Placement cell', sources: ['/campus/placement'] },
  { path: '/student-life/alumni', group: 'student', owner: 'Alumni cell', sources: ['/campus/alumni'] },
  // Information corner
  { path: '/information/notices', group: 'info', owner: 'Administration', title: 'Notices and circulars',
    desc: 'Circulars, notices and job openings of Kumbhalkar College of Social Work, Wardha.', sources: ['/notices', '/notices/job-openings'] },
  { path: '/information/news-events', group: 'info', owner: 'Media cell', title: 'News, events and magazine',
    desc: 'News, recent events, achievements and the college magazine of Kumbhalkar College of Social Work, Wardha.', sources: ['/notices/news', '/campus/magazine'] },
  { path: '/information/gallery', group: 'info', owner: 'Media cell', sources: ['/campus/gallery'] },
  { path: '/information/rti', group: 'info', owner: 'Administration', sources: ['/notices/rti'] },
  // Contact
  { path: '/contact', group: 'contact', owner: 'Administration', sources: ['/contact', '+directory'] },
];

/** Old addresses from the first build and the original kcswwardha.in. */
export const legacy = {
  '/campus': '/student-life', '/quality': '/quality/iqac', '/programmes': '/academics', '/notices': '/information/notices',
  'index.php': '/', 'index.html': '/', 'about-us.php': '/about', 'about-us.html': '/about', 'rtmtes.php': '/about/society', 'aim.php': '/about/vision-mission',
  'principal.php': '/about/principal', 'gbody.php': '/about/governing-body', 'staff.php': '/about/teaching-staff',
  'astaff.php': '/about/administrative-staff', 'bsw.php': '/programmes/bsw', 'msw.php': '/programmes/msw',
  'ma.php': '/academics', '/programmes/ma-travel-tourism': '/academics', '/academics/ma-travel-tourism': '/academics', 'phd.php': '/programmes/phd', 'research.php': '/programmes/research-centre',
  'academic.php': '/programmes/academic-calendar', 'placement.php': '/campus/placement', 'nss.php': '/campus/nss',
  'aboutnss.php': '/campus/nss', 'sports.php': '/campus/sports', 'medical.php': '/campus/health-facilities',
  'Alumni.php': '/campus/alumni', 'Studentcorn.php': '/campus/students-zone', 'lstaff.php': '/campus/library',
  'elibrary.php': '/campus/e-library', 'magzine.php': '/campus/magazine', 'gallery.php': '/campus/gallery',
  'iqac.php': '/quality/iqac', 'ebody.php': '/about/governing-body', 'counselling.php': '/quality/counselling-committee',
  'exam.php': '/quality/exam-cell', 'anti_ragging.php': '/quality/anti-ragging',
  'harassment.php': '/quality/sexual-harassment-committee', 'internal_complaint.php': '/quality/internal-complaints-committee',
  'rti.php': '/notices/rti', 'feedback.php': '/notices/feedback', 'contact.php': '/contact',
};

const last = (p) => p.split('/').pop();

/** Where each page of the first build lives now: { '/old/path': '/new/path' or '/new/path#section' }. */
export function oldToNew() {
  const m = {};
  for (const e of layout) {
    e.sources.forEach((s, i) => {
      if (s.startsWith('+')) return;
      const firstReal = e.sources.findIndex((x) => !x.startsWith('+'));
      const dest = i === firstReal && !e.sources[0].startsWith('+') ? e.path : `${e.path}#${last(s)}`;
      if (s !== dest) m[s] = dest;
    });
  }
  return m;
}

/** Redirects for next.config.mjs: first-build addresses and original .php addresses. */
export function redirects() {
  const map = oldToNew();
  const out = [];
  for (const [from, to] of Object.entries(map)) out.push({ source: from, destination: to, permanent: true });
  for (const [from, to] of Object.entries(legacy)) {
    if (from.startsWith('/') && map[from]) continue; // already handled above
    const dest = map[to] ?? to;
    const source = from.startsWith('/') ? from : `/${from}`;
    if (source === dest) continue;
    out.push({ source, destination: dest, permanent: true });
  }
  return out;
}
