/**
 * Search titles and descriptions for every page. The on-page heading (H1) stays as written in pages.ts.
 * Titles: 45 characters or fewer, plus the " | KCSW Wardha" suffix. Descriptions: 110 to 160 characters.
 * Only facts that appear on the page itself are used here.
 */
export const seo: Record<string, { title: string; desc: string; h1?: string }> = {
  '/about': { title: 'About Kumbhalkar College of Social Work', desc: 'Social work education in Sevagram, Wardha since 1993. Kumbhalkar College of Social Work is NAAC A+ accredited and affiliated to RTM Nagpur University.', h1: 'About Kumbhalkar College of Social Work' },
  '/about/society': { title: 'About the Society (RTMTES)', desc: 'The Rashtrasant Tukadoji Maharaj Technical and Educational Society, which runs Kumbhalkar College of Social Work in Wardha.' },
  '/about/leadership': { title: 'Principal, Governing Body and Leadership', desc: 'Meet the Principal and the governing body of Kumbhalkar College of Social Work, Wardha, and find the controller of examinations.' },
  '/about/plans-reports-accounts': { title: 'Annual Reports, Plans and Accounts', desc: 'Institutional plans, annual reports and audited accounts of Kumbhalkar College of Social Work, Wardha, available year by year.' },
  '/academics': { title: 'BSW, MSW and Ph.D. Programmes in Wardha', desc: 'Social work programmes at Kumbhalkar College of Social Work, Wardha: BSW (three years), MSW (two years) and Ph.D., with supervised field work.', h1: 'BSW, MSW and Ph.D. programmes' },
  '/academics/bsw': { title: 'BSW (Bachelor of Social Work) Course, Wardha', desc: 'Three-year, six-semester BSW at Kumbhalkar College of Social Work, Wardha, affiliated to RTM Nagpur University, with practicum and field work.' },
  '/academics/msw': { title: 'MSW (Master of Social Work) Course, Wardha', desc: 'Two-year, four-semester MSW at Kumbhalkar College of Social Work, Wardha, affiliated to RTM Nagpur University, with practicum and field work.' },
  '/academics/calendar-examinations': { title: 'Academic Calendar, Exams and Results', desc: 'Academic calendar, examination schedules, results and exam cell information for students of Kumbhalkar College of Social Work, Wardha.' },
  '/academics/faculty-staff': { title: 'Faculty and Staff Directory', desc: 'Teaching and administrative staff of Kumbhalkar College of Social Work, Wardha, with their designations and qualifications.', h1: 'Faculty and staff of the college' },
  '/academics/library': { title: 'Library and E-Library', desc: 'The library department and e-library of Kumbhalkar College of Social Work, Wardha, with the librarian and library documents.' },
  '/academics/fieldwork': { title: 'Fieldwork and Practicum in Social Work', desc: 'Concurrent fieldwork, block placement, rural camps and study tours for BSW and MSW students at Kumbhalkar College of Social Work, Wardha.' },
  '/admissions': { title: 'Admissions 2026-27: BSW, MSW and Ph.D.', desc: 'How to apply for BSW, MSW and Ph.D. at Kumbhalkar College of Social Work, Wardha: admission procedure, prospectus, fee structure and online form.', h1: 'Admissions 2026-27' },
  '/admissions/apply': { title: 'Apply Online for BSW, MSW and Ph.D.', desc: 'Apply online for BSW, MSW or Ph.D. at Kumbhalkar College of Social Work, Wardha, in three steps. Request a call back from the admission office.' },
  '/research/research-centre': { title: 'Dr. Kailash Satyarthi Research Center', desc: 'The Higher Education and Research Center of Kumbhalkar College of Social Work, Wardha, recognised by the university from the 2023-24 session.' },
  '/research/phd': { title: 'Ph.D. in Social Work, Wardha', desc: 'Ph.D. in Social Work at the Dr. Kailash Satyarthi Research Center, Wardha. Read the admission notices, schedules and vacant seat status.', h1: 'Ph.D. in Social Work, Wardha' },
  '/research/projects-publications': { title: 'Research Projects and Publications', desc: 'Research projects, publications and academic events at Kumbhalkar College of Social Work, Wardha, run through its research center.' },
  '/research/collaborations-consultancy': { title: 'Collaborations, Consultancy and Incubation', desc: 'Collaborations with organisations, consultancy work and the incubation centre of Kumbhalkar College of Social Work, Wardha.' },
  '/quality/iqac': { title: 'IQAC: Internal Quality Assurance Cell', desc: 'Members, coordinators and yearly activities of the Internal Quality Assurance Cell (IQAC) of Kumbhalkar College of Social Work, Wardha.', h1: 'Internal Quality Assurance Cell (IQAC)' },
  '/quality/naac-nirf-aqar': { title: 'NAAC A+ Accreditation, NIRF and AQAR', desc: 'Kumbhalkar College of Social Work is NAAC accredited with grade A+ (CGPA 3.35), valid up to 25 October 2027. Read the SSR, peer team report and AQAR.', h1: 'NAAC accreditation, NIRF and AQAR' },
  '/student-life': { title: "Student Life and Students' Zone", desc: "Students' zone at Kumbhalkar College of Social Work, Wardha: forms, student documents, notices and links to support cells, NSS, placement and alumni.", h1: 'Student life and students\' zone' },
  '/student-life/support-cells': { title: 'Support, Grievance and Student Cells', desc: 'Grievance redressal, anti-ragging, internal complaints, sexual harassment and counselling committees, and health facilities at KCSW, Wardha.' },
  '/student-life/nss-sports': { title: 'NSS, Sports and Student Activities', desc: 'The NSS unit active since 1993, seven-day camps in adopted villages, and games and sports at Kumbhalkar College of Social Work, Wardha.' },
  '/student-life/placement': { title: 'Training and Placement Cell', desc: 'Internships, placement with NGOs, companies and government offices, and competitive exam guidance for final-year BSW and MSW students in Wardha.', h1: 'Training and placement cell' },
  '/student-life/alumni': { title: 'Alumni Association and Registration', desc: 'Alumni list, registration form and governing body of the Alumni Association of Kumbhalkar College of Social Work, Wardha.', h1: 'Alumni association' },
  '/information/notices': { title: 'Notices, Circulars and Admission Updates', desc: 'Latest notices and circulars from Kumbhalkar College of Social Work, Wardha, including Ph.D. admission schedules and vacant seat status.' },
  '/information/news-events': { title: 'News, Events and College Magazine', desc: 'News, events, achievements and the yearly college magazine of Kumbhalkar College of Social Work, Wardha, with photographs and reports.' },
  '/information/gallery': { title: 'Photo Gallery', desc: 'Photographs of study tours, NSS camps, field work, the annual gathering and programmes at Kumbhalkar College of Social Work, Wardha.', h1: 'Photo gallery' },
  '/information/rti': { title: 'Right to Information (RTI)', desc: 'Right to Information (RTI) details of Kumbhalkar College of Social Work, Wardha: public information officers, appellate authority and documents.' },
  '/contact': { title: 'Contact Us and Location in Wardha', desc: 'Address, phone, email and map of Kumbhalkar College of Social Work, Sevagram Road, Opp. Mahila Ashram, Wardha 442001, Maharashtra.', h1: 'Contact Kumbhalkar College of Social Work' },
};
