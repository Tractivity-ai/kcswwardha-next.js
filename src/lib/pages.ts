/**
 * Every inner page of the site, as data. Source of truth: the old site at kcswwardha.in.
 * Text in [square brackets] is a visible placeholder: the old site did not have the fact,
 * or the fact is outdated. The college confirms each one before launch.
 */
import {
  alumniDocs, aqar, docs, feedbackDocs, studentDocs, type Doc,
} from './docs';
import { layout, oldToNew } from './structure.mjs';
import { APPLY_FORM } from './content';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string; id?: string; sub?: boolean }
  | { t: 'toc' }
  | { t: 'list'; items: string[]; ordered?: boolean }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'docs'; items: Doc[]; title?: string }
  | { t: 'facts'; items: [string, string][] }
  | { t: 'sems'; items: { title: string; papers: string[] }[] }
  | { t: 'todo'; text: string }
  | { t: 'embed'; href: string; title: string }
  | { t: 'quote'; text: string; by?: string }
  | { t: 'cta'; label: string; href: string; external?: boolean }
  | { t: 'hub'; group: string }
  | { t: 'contact' };

export type GroupId = 'about' | 'academics' | 'admissions' | 'research' | 'quality' | 'student' | 'info' | 'contact';
/** Groups of the first build. Pages are still written under these and regrouped by structure.mjs. */
type RawGroup = 'about' | 'programmes' | 'admissions' | 'campus' | 'quality' | 'notices' | 'contact';

type RawPage = {
  path: string;
  title: string;
  desc: string;
  group: RawGroup;
  lead?: string;
  blocks: Block[];
};

export type Page = {
  path: string;
  title: string;
  desc: string;
  group: GroupId;
  lead?: string;
  blocks: Block[];
  /** Office that maintains the page. */
  owner: string;
  /** When the content was last changed (date text). */
  updated: string;
};

/** Content of every page was moved from the old site on this date. Change a page's date when its text changes. */
export const CONTENT_DATE = '19 November 2026';

export const groups: Record<GroupId, { label: string; sub: string; href: string }> = {
  about: { label: 'About', sub: 'College, leadership, governance', href: '/about' },
  academics: { label: 'Academics', sub: 'Programmes, calendar, faculty, library', href: '/academics' },
  admissions: { label: 'Admissions', sub: 'How to apply, fees, prospectus', href: '/admissions' },
  research: { label: 'Research', sub: 'Research Center, Ph.D., collaborations', href: '/research/research-centre' },
  quality: { label: 'Quality', sub: 'IQAC, NAAC, NIRF, AQAR', href: '/quality/iqac' },
  student: { label: 'Student life', sub: 'Support cells, NSS, placement, alumni', href: '/student-life' },
  info: { label: 'Information corner', sub: 'Notices, news, gallery, RTI', href: '/information/notices' },
  contact: { label: 'Contact', sub: 'Address, phone, map', href: '/contact' },
};

const P = (text: string): Block => ({ t: 'p', text });
const H = (text: string): Block => ({ t: 'h', text });
const L = (...items: string[]): Block => ({ t: 'list', items });
const TODO = (text: string): Block => ({ t: 'todo', text });

/** A page whose content the old site never had (the menu item was a dead link). */
const pending = (path: string, title: string, group: RawGroup, what: string): RawPage => ({
  path, title, group,
  desc: `${title} at Kumbhalkar College of Social Work, Wardha.`,
  blocks: [TODO(`Content to be supplied by the college: ${what}. The old site menu listed this page but linked nowhere.`)],
});

/* ------------------------------------------------------------------ people */

const teaching: string[][] = [
  ['1', 'Dr. Chandu K. Popatkar', 'Principal', 'M.S.W., NET, Ph.D.'],
  ['2', 'Dr. Vilas P. Baile', 'Assistant Professor', 'M.S.W., MBA, M.Phil., NET, SET'],
  ['3', 'Dr. Sunil M. Totade', 'Associate Professor', 'M.S.W., NET, Ph.D.'],
  ['4', 'Dr. Nalini N. Bhagat', 'Assistant Professor', 'M.S.W., M.Phil., Ph.D.'],
  ['5', 'Dr. Satish G. Dhawad', 'Associate Professor', 'M.S.W., M.Phil., NET'],
  ['6', 'Dr. Punam Y. Yesambare', 'Assistant Professor', 'M.A. (Marathi), M.Phil., Ph.D.'],
  ['7', 'Dr. Kamal R. Potdukhe', 'Assistant Professor', 'M.S.W., M.Phil., Ph.D.'],
  ['8', 'Miss Vishaka K. Mankar', 'Assistant Professor', 'M.S.W., M.Phil.'],
  ['9', 'Dr. Ashok D. Satpute', 'Assistant Professor', 'M.S.W., NET, Ph.D.'],
  ['10', 'Mr. Umesh A. Uike', 'Assistant Professor', 'M.S.W., SET'],
  ['11', 'Dr. Naresh W. Patil', 'Assistant Professor', 'M.S.W., M.Phil., NET'],
  ['12', 'Mr. Gajanan R. Jadhao', 'Assistant Professor', 'M.S.W., NET'],
  ['13', 'Mr. Rajesh P. Tandekar', 'Assistant Professor', 'M.A. (English), NET'],
  ['14', 'Dr. Rameshwar S. Vhandkar', 'Assistant Professor', 'M.S.W., M.Phil., NET, Ph.D.'],
  ['15', 'Dr. Mahadev C. Chunche', 'Assistant Professor', 'M.S.W., M.Phil., NET, Ph.D.'],
];

const adminStaff: string[][] = [
  ['1', 'Dr. Varsha B. Patil', 'Head Librarian'],
  ['2', 'Mr. Rajesh K. Kumbhalkar', 'Superintendent'],
  ['3', 'Mr. Ravindra R. Wadekar', 'Accountant'],
  ['4', 'Mr. Chandrabhan A. Sathone', 'Filing Clerk'],
  ['5', 'Mr. Sanjay D. Kalaskar', 'Associate Librarian'],
  ['6', 'Mr. Dhiraj R. Kokande', 'Professional Associate Librarian'],
  ['7', 'Mr. Arvind B. Galhat', 'Library Assistant'],
  ['8', 'Mr. Ajay D. Gawai', 'Library Clerk'],
  ['9', 'Mr. Chandrakant S. Jambhule', 'Library Assistant'],
  ['10', 'Mr. Sunil M. Dive', 'Clerk cum Typist'],
  ['11', 'Miss Smita R. Channe', 'Library Assistant'],
  ['12', 'Mr. Purushottam D. Hadke', 'Library Peon'],
  ['13', 'Mr. Anil P. Balapure', 'Peon'],
  ['14', 'Mr. Baba D. Kuttarmare', 'Watchman'],
  ['15', 'Mr. Arun N. Khare', 'Cleaner'],
  ['16', 'Mr. Santosh B. Ade', 'Watchman'],
  ['17', 'Mr. Ashish G. Kohle', 'Mali'],
];

/* ------------------------------------------------------------- programmes */

const bswSems = [
  { title: 'Semester 1', papers: ['English', 'Marathi, Hindi or Supplementary English', 'Introduction to the Social Work Profession', 'Method Course: Case Work', 'Psychology for Social Work', 'Social Work Practicum'] },
  { title: 'Semester 2', papers: ['English', 'Marathi, Hindi or Supplementary English', 'Introduction to the Social Work Profession', 'Method Course: Group Work', 'Psychology for Social Work', 'Social Work Practicum'] },
  { title: 'Semester 3', papers: ['English', 'Marathi, Hindi or Supplementary English', 'Social Welfare Administration', 'Method Course: Community Organisation', 'Psychology: Human Growth and Development', 'Introduction to Sociology', 'Social Work Practicum'] },
  { title: 'Semester 4', papers: ['English', 'Marathi, Hindi or Supplementary English', 'Method Course: Social Work Research and Basic Computing', 'Method Course: Social Action', 'Psychology for Personal Growth', 'Social Problems and Social Disorganisation', 'Social Work Practicum'] },
];

const mswSems = [
  { title: 'Semester 1', papers: ['Perspectives of Social Work Practice in India', 'Method Course I: Case Work (working with individuals and families)', 'Method Course II: Group Work (working with groups)', 'Introduction to Psychology for Social Work', 'Introduction to Sociology for Social Work', 'Social Work Practicum'] },
  { title: 'Semester 2', papers: ['Social Legislations and Advocacy', 'Professional Development for Social Work', 'Corporate Social Responsibility', 'Method Course III: Community Organisation and Social Action', 'Method Course IV: Social Work Research', 'Social Work Practicum'] },
  { title: 'Semester 3', papers: ['Social Policy, Planning and Development', 'Specialisation Paper I', 'Specialisation Paper II', 'Specialisation Paper III', 'Statistics and Computer Basics in Social Work Research, or Application of Social Work Skills', 'Introduction to Sociology', 'Social Work Practicum'] },
  { title: 'Semester 4', papers: ['NGO Management and Media', 'Specialisation Paper IV', 'Specialisation Paper V', 'Specialisation Paper VI', 'Disaster Management, or Livelihood Promotion', 'Research Dissertation', 'Social Work Practicum'] },
];

/* ------------------------------------------------------------------ pages */

const rawPages: RawPage[] = [
  /* ---------------------------------------------------------------- About */
  {
    path: '/about', title: 'About KCSW', group: 'about',
    desc: 'Kumbhalkar College of Social Work, Wardha: social work education on Gandhi\'s Sevabhoomi since 1993, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University.',
    lead: 'Social work education on the ground where Mahatma Gandhi worked, in Wardha, since 1993.',
    blocks: [
      P('Wardha is the Sevabhoomi of Mahatma Gandhi. Kumbhalkar College of Social Work was established here in 1993. The campus stands on a historic site that was once a Khadi and Gramudyog workstation of Gandhi. The college is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU), Nagpur, Maharashtra.'),
      P('For more than 25 years the college has prepared social workers. It teaches the knowledge, skills and techniques of the profession, and it builds the attitude and aptitude needed for a career in professional social work. Over those years it has sent 1,203 social work graduates and postgraduates into service in society.'),
      TODO('The figure of 1,203 graduates is from the old site (25 years). Update it to the current year.'),
      P('The college is committed to developing civic consciousness and a sense of social responsibility in its students. The curriculum is broad, so students build a holistic and ecological view of society. Classroom learning is reinforced through field work, where students learn by direct experience. The aim is education that is socially relevant, and that shapes responsible citizens as well as professionals.'),
      H('Programmes offered'),
      L('Bachelor of Social Work (BSW)', 'Master of Social Work (MSW)', 'Doctor of Philosophy in Social Work (Ph.D.)'),
      { t: 'cta', label: 'Read about the society that runs the college', href: '/about/society' },
    ],
  },
  {
    path: '/about/society', title: 'About the society (RTMTES)', group: 'about',
    desc: 'Rashtrasant Tukadoji Maharaj Technical and Educational Society, Nagpur, which runs Kumbhalkar College of Social Work.',
    lead: 'The society behind the college, working for education and social development since 1983.',
    blocks: [
      P('Rashtrasant Tukadoji Maharaj Technical and Educational Society (RTMTES), Nagpur, was founded in 1983. Its founding President was the late Shri Krushnaraoji Kumbhalkar, and its founding Secretary was the late Dr. Yogesh Kumbhalkar. It is a non-profit society that works for education and social development of underprivileged communities.'),
      H('What the society works for'),
      L(
        'Empowering women, youth and people with disabilities through quality education',
        'Awareness campaigns against harmful social practices',
        'Taking government welfare schemes to people who need them',
        'Working with the central and state governments on social projects',
      ),
      H('What the society runs'),
      P('Social work colleges, primary and ashram schools, a technical workshop for physically challenged students, and homes for senior citizens. The society plans to grow and create more employment in the coming years.'),
      TODO('Confirm the current list of institutions and projects run by the society, and the current office bearers.'),
    ],
  },
  {
    path: '/about/vision-mission', title: 'Vision, mission and aims', group: 'about',
    desc: 'The vision, mission, aims and objectives of Kumbhalkar College of Social Work, Wardha.',
    lead: 'To be the best in class and nurture socially responsible leaders.',
    blocks: [
      H('Vision'),
      P('To be the best in class and nurture socially responsible leaders.'),
      H('Mission'),
      L(
        'To prepare social work professionals with the knowledge, values and skills needed to start and sustain change, and to give visionary leadership. This happens within a framework that promotes individual dignity, respects diversity and seeks distributive justice in the Indian tradition.',
        'To build an atmosphere of intellectual discipline that supports faculty and student scholarship and research. This research adds to the knowledge base of the profession and improves society\'s understanding of national and global structures.',
      ),
      H('Aims and objectives'),
      { t: 'list', ordered: true, items: [
        'To provide professional education in social work, and to develop a sense of civic consciousness and social responsibility in students.',
        'To train people for a wide range of social work intervention at different levels in social welfare, through classroom teaching, research and field work, supported by field action projects.',
      ] },
    ],
  },
  {
    path: '/about/principal', title: "Principal's desk", group: 'about',
    desc: 'Message from Dr. Chandu K. Popatkar, Principal of Kumbhalkar College of Social Work, Wardha.',
    lead: 'A message to students, staff and parents.',
    blocks: [
      P('Dear Students, Staff and Parents,'),
      P('Welcome to the new session of our college. Our commitment at Kumbhalkar College of Social Work, Wardha, is to provide a safe and intellectually challenging environment. We want students to become innovative thinkers, creative problem solvers and inspired learners, ready to thrive in the twenty-first century.'),
      P('High standards for every student are the foundation of our college. We expect strong academic performance, active co-curricular participation and responsible citizenship. We are proud to ask each student to keep up the record of achievement and contribution that has been the legacy of Kumbhalkar College students. It is our students\' contribution that makes this an exceptional learning community. Full participation in academic and co-curricular programmes, and a willingness to act responsibly, are what make the year successful and enjoyable for everyone.'),
      H('We believe that effective teachers'),
      L(
        'Create chances for intellectual risk-taking, collaboration, problem-solving, and for applying classroom learning to real-life situations',
        'Use strategies that give students ownership of their learning',
        'Design teaching that uses a range of innovative tools and resources',
        'Keep growing professionally, to raise the quality of teaching',
        'Work with colleagues to share good practice, read student performance data, and design assessments that build twenty-first century skills',
      ),
      H('We believe that successful students'),
      L(
        'Communicate in a meaningful way for different purposes and audiences',
        'Read, view and listen with care, and interpret and evaluate what they take in',
        'Use critical and creative thinking to solve problems',
        'Ask questions, examine possibilities, and apply their skills to real issues',
        'Make positive choices for physical and mental wellbeing',
        'Contribute to the local and global community in a respectful and collaborative way',
      ),
      P('I wish you all a wonderful college year. If I can help in any way, please do not hesitate to contact me. My door is always open. I am honoured to serve as your Principal.'),
      { t: 'quote', text: 'Dr. Chandu K. Popatkar', by: 'Principal (B.Sc., M.S.W., NET, B.J., Ph.D.)' },
    ],
  },
  {
    path: '/about/governing-body', title: 'Governing body', group: 'about',
    desc: 'Members of the governing body of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'table', head: ['No.', 'Name', 'Designation'], rows: [
        ['1', 'Shri Prakash K. Kumbhalkar', 'President'],
        ['2', 'Miss Vanita D. Rewatkar', 'Vice-President'],
        ['3', 'Mr. Yugant Y. Kumbhalkar', 'Secretary'],
        ['4', 'Ms. Rani Y. Kumbhalkar', 'Joint Secretary'],
        ['5', 'Mr. Ravikant M. Marpak', 'Treasurer'],
        ['6', 'Shri Rajesh K. Kumbhalkar', 'Director'],
        ['7', 'Ms. Sonali V. Vaidya', 'Director'],
      ] },
      TODO('Photographs of the members, and the current term of the governing body.'),
    ],
  },
  {
    path: '/about/teaching-staff', title: 'Teaching staff', group: 'about',
    desc: 'Faculty of Kumbhalkar College of Social Work, Wardha: names, designations and qualifications.',
    lead: 'Fifteen teaching staff, led by the Principal.',
    blocks: [
      { t: 'table', head: ['No.', 'Name', 'Designation', 'Qualification'], rows: teaching },
      TODO('Photographs, areas of specialisation, years of experience and contact email for each faculty member. The old site lists names, designations and qualifications only.'),
    ],
  },
  {
    path: '/about/administrative-staff', title: 'Administrative staff', group: 'about',
    desc: 'Administrative and library staff of Kumbhalkar College of Social Work, Wardha.',
    blocks: [{ t: 'table', head: ['No.', 'Name', 'Designation'], rows: adminStaff }],
  },
  pending('/about/recognition-approvals', 'Recognition and approvals', 'about', 'university affiliation letter, approvals and recognitions'),

  /* ----------------------------------------------------------- Programmes */
  {
    path: '/programmes', title: 'Programmes', group: 'programmes',
    desc: 'BSW, MSW and Ph.D. in Social Work at Kumbhalkar College of Social Work, Wardha.',
    lead: 'Three programmes, from a first degree in social work to research.',
    blocks: [
      { t: 'table', head: ['Programme', 'Duration', 'Page'], rows: [
        ['Bachelor of Social Work (BSW)', 'Three years, six semesters', '/programmes/bsw'],
        ['Master of Social Work (MSW)', 'Two years, four semesters', '/programmes/msw'],
        ['Doctor of Philosophy in Social Work (Ph.D.)', 'Usually three years, full time', '/programmes/phd'],
      ] },
      { t: 'cta', label: 'Academic calendar', href: '/programmes/academic-calendar' },
    ],
  },
  {
    path: '/programmes/bsw', title: 'Bachelor of Social Work (BSW)', group: 'programmes',
    desc: 'BSW at Kumbhalkar College of Social Work, Wardha: three-year programme with classroom study and supervised field work.',
    lead: 'Your first degree in social work, with field practice in every semester.',
    blocks: [
      { t: 'facts', items: [
        ['Duration', 'Three years, six semesters'],
        ['Eligibility', '[Admission office to confirm]'],
        ['Intake', '[Admission office to confirm]'],
        ['Fees', 'See the fee structure'],
      ] },
      H('Structure of theory papers, practicum and research'),
      { t: 'sems', items: bswSems },
      TODO('The old site lists semesters 1 to 4 only, and the duration at three years and six semesters. Confirm the papers for semesters 5 and 6.'),
      { t: 'docs', items: [docs.fees, docs.admissionProcedure, docs.prospectus], title: 'Related documents' },
      { t: 'cta', label: 'Apply for admission', href: '/admissions' },
    ],
  },
  {
    path: '/programmes/msw', title: 'Master of Social Work (MSW)', group: 'programmes',
    desc: 'MSW at Kumbhalkar College of Social Work, Wardha: two-year postgraduate programme with specialisations, practicum and dissertation.',
    lead: 'Deeper study, specialisation papers and a research dissertation.',
    blocks: [
      { t: 'facts', items: [
        ['Duration', 'Two years, four semesters'],
        ['Eligibility', '[Admission office to confirm]'],
        ['Intake', '[Admission office to confirm]'],
        ['Specialisations', '[Names of the specialisation papers to confirm]'],
      ] },
      H('Structure of theory papers, practicum and research'),
      { t: 'sems', items: mswSems },
      { t: 'docs', items: [docs.fees, docs.admissionProcedure, docs.prospectus], title: 'Related documents' },
      { t: 'cta', label: 'Apply for admission', href: '/admissions' },
    ],
  },
  {
    path: '/programmes/phd', title: 'Ph.D. in Social Work', group: 'programmes',
    desc: 'Ph.D. in Social Work at the Dr. Kailash Satyarthi Higher Education and Research Center, Kumbhalkar College of Social Work, Wardha.',
    lead: 'Doctoral research, guided through the Dr. Kailash Satyarthi Research Center.',
    blocks: [
      { t: 'facts', items: [
        ['Duration', 'Usually three years, full time'],
        ['Eligibility', '[Admission office to confirm]'],
        ['Seats', 'See the vacant seat status notice'],
        ['Research Center', 'Dr. Kailash Satyarthi Higher Education and Research Center'],
      ] },
      P('Ph.D. admission follows the directions of Rashtrasant Tukadoji Maharaj Nagpur University. Notices for the current round are below.'),
      { t: 'docs', items: [docs.phdSeats, docs.phdSchedule, docs.phdNotification, docs.phdSchedule2324], title: 'Ph.D. notices' },
      TODO('Eligibility, supervisors, fees, and the date of each notice. The old site shows the 2023-24 schedule on this page and the 2025-26 schedule on the home page.'),
      { t: 'cta', label: 'About the Research Center', href: '/programmes/research-centre' },
    ],
  },
  {
    path: '/programmes/research-centre', title: 'Dr. Kailash Satyarthi Research Center', group: 'programmes',
    desc: 'Dr. Kailash Satyarthi Higher Education and Research Center at Kumbhalkar College of Social Work, Wardha. Recognised by Nagpur University from 2023-24.',
    lead: 'Recognised by Nagpur University from the 2023-24 session.',
    blocks: [
      P('Kumbhalkar College of Social Work is run by Rashtrasant Tukadoji Maharaj Technical and Educational Society and is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University. The university has recognised the college\'s Higher Education and Research Center from the academic session 2023-24.'),
      P('The center gives students in Wardha district and across Maharashtra a place to build a career in research. Students can do original research on specific problems and put their findings before the government.'),
      P('The idea came from the late Yogeshji Kumbhalkar, who wanted a research center for capable, research-minded students. The Secretary of the institution, Mr. Yugant Kumbhalkar, carried the vision forward. After discussion with the Principal and the head of the center, the center was named after Dr. Kailash Satyarthi, who has made a major contribution to society. The name is meant to inspire students to complete their research with integrity.'),
      P('Many applications came in when the center opened. Following the university\'s doctoral guidelines, the college set up a Research Advisory Committee (RAC) from among the university\'s appointed members. The committee guides research students and helps them submit well-prepared proposals. 16 students are currently enrolled through the center, and their proposals have been sent to the university.'),
      H('What the center offers'),
      L(
        'A Research Advisory Committee (RAC) within the college',
        'Coursework facilities for research students',
        'Experienced Ph.D. supervisors in the college',
        'MOUs with research experts from other fields, to guide students',
      ),
      TODO('Current enrolment figure (16 on the old site), supervisor names and research areas.'),
    ],
  },
  {
    path: '/programmes/academic-calendar', title: 'Academic calendar', group: 'programmes',
    desc: 'Academic calendar of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'embed', href: docs.academicCalendar.href, title: 'Academic calendar (PDF)' },
      TODO('Confirm this is the calendar for the current session.'),
    ],
  },

  /* ------------------------------------------------------------ Admissions */
  {
    path: '/admissions', title: 'Admissions', group: 'admissions',
    desc: 'How to apply to Kumbhalkar College of Social Work, Wardha: prospectus, admission procedure and fee structure.',
    lead: 'Everything you need to apply, in one place.',
    blocks: [
      H('How to apply'),
      { t: 'list', ordered: true, items: [
        'Choose a programme: BSW, MSW or Ph.D.',
        'Fill in the online admission form.',
        'Submit your documents as listed in the admission procedure.',
      ] },
      { t: 'cta', label: 'Open the admission form', href: 'https://forms.gle/hwxwjpRg2chMeUoF9', external: true },
      TODO('Last date to apply, merit list dates and the admission session. The old site shows a "2024-25" registration form.'),
      { t: 'docs', items: [docs.prospectus, docs.admissionProcedure, docs.fees], title: 'Download' },
      H('Medical examination'),
      P('Under the guidelines of Rashtrasant Tukadoji Maharaj Nagpur University, every student must have a medical examination by a qualified medical officer at admission. The college has separate forms for male and female students. See the Health facilities page.'),
      TODO('Eligibility for each programme, documents to bring, selection method, scholarships and hostel details. These are not on the old site.'),
    ],
  },
  {
    path: '/admissions/fee-structure', title: 'Fee structure', group: 'admissions',
    desc: 'Fee structure of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'embed', href: docs.fees.href, title: 'Fee structure (PDF)' },
      { t: 'docs', items: [docs.fees] },
      TODO('Fee refund policy: the old site listed the page but it linked nowhere.'),
    ],
  },

  /* ----------------------------------------------------------- Campus life */
  {
    path: '/campus/placement', title: 'Training and placement', group: 'campus',
    desc: 'Krushnalila Training and Placement (Internship) Cell at Kumbhalkar College of Social Work, Wardha.',
    lead: 'The Krushnalila Training and Placement (Internship) Cell.',
    blocks: [
      P('The Cell has worked for the last 15 years with final-year BSW and MSW students. It supports their overall development, and helps them with internships and job opportunities. It places students with NGOs, companies and government offices, and it runs programmes that prepare students to meet the expectations of NGOs and industry. It also arranges competitive exam guidance, led by the director of the competitive class and by recent successful candidates, along with other internal and external activities.'),
      TODO('Placement figures, names of recruiters and year of the last update. The old site gives no numbers.'),
      H('Objectives'),
      { t: 'list', ordered: true, items: [
        'Competitive examination guidance for college students',
        'Practical experience through internship (block placement training)',
        'Campus interviews for final-year students',
      ] },
      H('Aims'),
      { t: 'list', ordered: true, items: [
        'Train students to improve their skills and do well',
        'Keep a good code of conduct among students during selection and placement',
        'Help organisations and industries run their campus drives effectively',
      ] },
      H('Campus placement procedure'),
      { t: 'list', ordered: true, items: [
        'The student first applies to the Principal, and the application goes on to the placement officer.',
        'A student who wishes to apply to a particular organisation gives their willingness to the Training and Placement Office before the deadline.',
        'The office gives every registered student a chance to secure a job.',
        'If a student decides to withdraw an accepted job offer, they must tell the organisation through the office at once.',
        'A student selected at a campus interview completes the employer\'s formalities (for example a medical test) and joins within the stipulated time. Placed students update the Cell on their progress, and the Cell collects feedback from employers. Selected students are expected to work at least one year in the organisation.',
      ] },
      H('Code of conduct during interviews'),
      { t: 'list', ordered: true, items: [
        'Report to the placement cell at least 30 minutes before the interview.',
        'Keep an updated copy of your resume with a recent photograph.',
        'Keep enough photocopies of documents, certificates and photographs, in order.',
        'Dress neatly in formal clothes and polished formal shoes.',
      ] },
      H('Committee'),
      { t: 'table', head: ['Name', 'Position', 'Contact'], rows: [
        ['Dr. Rameshwar Vhandkar, Assistant Professor (M.S.W., SET, NET, M.Phil., Ph.D.)', 'Co-ordinator', '9021204340, ram.hondkar@gmail.com'],
        ['Dr. Satish Dhawad, Associate Professor (M.S.W., NET, M.Phil., Ph.D.)', 'Member', '9850295004, satish_dhawad@rediffmail.com'],
        ['Prof. Rajesh Tandekar, Assistant Professor (M.A. English, NET, Ph.D.)', 'Member', '9545333942, rajesh.tandekar@rediffmail.com'],
      ] },
    ],
  },
  {
    path: '/campus/nss', title: 'National Service Scheme (NSS)', group: 'campus',
    desc: 'NSS unit of Kumbhalkar College of Social Work, Wardha: aims, objectives, activities and procedures.',
    lead: 'The NSS unit has been active since the college began in 1993.',
    blocks: [
      H('Aim of NSS'),
      P('The National Service Scheme gives an extension dimension to higher education and orients students to community service while they study. College students can drift away from village and slum communities. NSS works to wake their social conscience and let them work with people in villages and slums, so that they meet the realities of life and change how they see society.'),
      P('Kumbhalkar College of Social Work started its NSS unit in 1993, the year the college was established. The college is known as an active NSS college, through its students\' participation in state-level camps.'),
      H('Objectives'),
      L(
        'Understand the community in which they work',
        'Understand themselves in relation to their community',
        'Identify the needs and problems of the community and join in solving them',
        'Develop a sense of social and civic responsibility',
        'Use their knowledge to find practical solutions to individual and community problems',
        'Build the competence needed for group living and sharing responsibilities',
        'Gain skills in mobilising community participation',
        'Acquire leadership qualities and a democratic attitude',
        'Develop the capacity to meet emergencies and natural disasters',
        'Practise national integration and social harmony',
      ),
      H('The motto'),
      P('"Not me but you." It stands for democratic living, selfless service, and respect for another person\'s point of view. The NSS wing gives students hands-on experience of community service.'),
      H('What the unit does'),
      L(
        'Regular one-day camps and seven-day special camps in adopted villages of Wardha district',
        'One active NSS unit of 100 volunteers, with trained programme officers',
        'Government programmes including traffic awareness, tree plantation, HIV/AIDS awareness, Red Ribbon Club, Poshan Abhiyan, Swachh Bharat Abhiyan, Communal Harmony Week, life skill training, national festivals, Digital India, vigilance awareness, National Girl Child Day, International Women\'s Day, International Yoga Day, cyber hygiene, Azadi Ka Amrit Mahotsav, anti-drug abuse, electoral literacy, Constitution Day and blood donation camps',
        'Students enrol voluntarily in the first year',
      ),
      H('Structure and roles'),
      L(
        'NSS Programme Officer: appointed by the Principal. Manages the unit, follows university and government guidelines, plans yearly activities, keeps records, trains volunteers and reports to the university NSS cell.',
        'NSS volunteers: take part in activities and meetings, and complete 120 hours of service each academic year.',
        'Advisory committee: faculty, community representatives and student leaders. Guides planning, helps find resources and reviews the programme.',
      ),
      H('Code of conduct'),
      L('Respect and integrity in all dealings', 'No discrimination, and activities open to everyone', 'Punctuality at all scheduled activities', 'Confidentiality of sensitive information'),
      TODO('Name of the current NSS Programme Officer and contact details.'),
    ],
  },
  {
    path: '/campus/sports', title: 'Games and sports', group: 'campus',
    desc: 'Games and Sport Committee of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      P('The Games and Sport Committee works for students of the BSW and MSW courses, which the college has run since 1993 under RTM Technical and Education Society, Nagpur, and Nagpur University. The co-ordinator is Asst. Prof. Rajesh B. Tandekar. The senior member is Prof. Kishor S. Dhoble. The Principal is the secretary of the committee and looks after records, communication and coordination.'),
      H('Objectives'),
      { t: 'list', ordered: true, items: [
        'Inspire students toward co-curricular activities through annual sports events',
        'Raise student participation in college, university, state and national games and sports',
        'Set guidelines for planning, organising and running games and sports events',
      ] },
      H('How events are run'),
      { t: 'list', ordered: true, items: [
        'Event planning: the committee sets objectives, audience, resources, dates, schedules and venues, following the Nagpur University format and rules.',
        'Team selection: selection criteria, trials and announcement of teams.',
        'Running the event: set-up of equipment and facilities, with transport and accommodation where needed.',
        'Safety: first aid and emergency services at the venue, and a way to handle injuries.',
        'Communication: promotion through social media and posters, and notices to participants and officials.',
        'Evaluation and documentation: a review after each event, with records of plans and reports. The procedure is reviewed every year.',
      ] },
    ],
  },
  {
    path: '/campus/health-facilities', title: 'Health facilities', group: 'campus',
    desc: 'Medical facility at Kumbhalkar College of Social Work, Wardha: mandatory medical examination and a woman medical officer.',
    blocks: [
      P('Kumbhalkar College of Social Work, Wardha, has run since the academic year 1993-94 and offers the BSW, MSW and Ph.D. programmes. Under the guidelines of Rashtrasant Tukadoji Maharaj Nagpur University, every student must have a medical examination by a qualified medical officer at admission.'),
      P('The college has appointed doctors for these examinations for many years. As the university circular requires, there are separate forms for male and female students. Students fill in their personal details, a qualified medical officer reviews the form, and the doctor gives recommendations if any health issue is found.'),
      P('From the 2024-25 session, the college has appointed Dr. Rani Y. Kumbhalkar, MBBS, as the medical officer for student health examinations. More than 85% of the college\'s students are women, so a woman doctor helps them discuss health concerns openly and comfortably.'),
    ],
  },
  {
    path: '/campus/alumni', title: 'Alumni', group: 'campus',
    desc: 'Alumni of Kumbhalkar College of Social Work, Wardha: alumni list, registration form and governing body.',
    blocks: [{ t: 'docs', items: alumniDocs }, TODO('An online alumni registration form and alumni stories.')],
  },
  {
    path: '/campus/students-zone', title: "Students' zone", group: 'campus',
    desc: 'Report formats and documents for students of Kumbhalkar College of Social Work, Wardha.',
    blocks: [{ t: 'docs', items: studentDocs, title: 'Formats and guidelines' }],
  },
  {
    path: '/campus/library', title: 'Library department', group: 'campus',
    desc: 'Library department of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'embed', href: docs.library.href, title: 'Library department (PDF)' },
      TODO('Library details in text: number of books, journals, timings, membership rules. The old site shows a PDF only.'),
    ],
  },
  {
    path: '/campus/e-library', title: 'E-library', group: 'campus',
    desc: 'E-library resources of Kumbhalkar College of Social Work, Wardha.',
    blocks: [{ t: 'embed', href: docs.elibrary.href, title: 'E-library (PDF)' }],
  },
  {
    path: '/campus/magazine', title: 'College magazine', group: 'campus',
    desc: 'The college magazine of Kumbhalkar College of Social Work, Wardha.',
    blocks: [{ t: 'embed', href: docs.magazine.href, title: 'College magazine (PDF)' }],
  },
  {
    path: '/campus/gallery', title: 'Gallery', group: 'campus',
    desc: 'Photo gallery of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      TODO('Photographs by event and year. The old gallery page holds only the NAAC certificate.'),
      { t: 'docs', items: [docs.naacCertificate] },
    ],
  },
  {
    path: '/campus', title: 'Campus life', group: 'campus',
    desc: 'Student life at Kumbhalkar College of Social Work, Wardha: placement, NSS, sports, library, alumni and more.',
    lead: 'Placement, NSS, sports, library, alumni and student resources.',
    blocks: [{ t: 'hub', group: 'campus' }],
  },
  pending('/campus/incubation-centre', 'Incubation centre', 'campus', 'what the centre does, who runs it, how to take part'),

  /* ---------------------------------------------------------------- Quality */
  {
    path: '/quality', title: 'Quality and committees', group: 'quality',
    desc: 'IQAC, NAAC, NIRF and the committees and cells of Kumbhalkar College of Social Work, Wardha.',
    lead: 'Accreditation records, quality reports and the committees that keep the college accountable.',
    blocks: [{ t: 'hub', group: 'quality' }],
  },
  {
    path: '/quality/iqac', title: 'IQAC', group: 'quality',
    desc: 'Internal Quality Assurance Cell (IQAC) of Kumbhalkar College of Social Work, Wardha: members, minutes, MOUs and feedback forms.',
    lead: 'The Internal Quality Assurance Cell.',
    blocks: [
      H('Members'),
      { t: 'table', head: ['No.', 'Name', 'Category'], rows: [
        ['1', 'Dr. C. K. Popatkar', 'Head of the institution'],
        ['2', 'Mr. M. Chunche', 'NAAC Coordinator'],
        ['3', 'Mr. S. G. Dhawad', 'IQAC Coordinator'],
        ['4', 'Mr. R. K. Kumbhalkar', 'Senior administrative officer nominee'],
        ['5', 'Mr. R. L. Wadekar', 'Senior administrative officer nominee'],
        ['6', 'Mr. V. P. Baile', 'Faculty nominee'],
        ['7', 'Mrs. K. R. Potdukhe', 'Faculty nominee'],
        ['8', 'Mr. K. S. Dhoble', 'Faculty nominee'],
        ['9', 'Mr. Y. Y. Kumbhalkar', 'Nominee from management'],
        ['10', 'Mr. A. Dhage', 'Nominee from students and alumni'],
        ['11', 'Mrs. S. Zambre', 'Nominee from students and alumni'],
        ['12', 'Mr. P. Wanjari', 'Nominee from employers, industrialists or stakeholders'],
        ['13', 'Mr. R. M. Marpak', 'Nominee from employers, industrialists or stakeholders'],
        ['14', 'Mr. G. Kale', 'Nominee from another institute'],
      ] },
      { t: 'docs', items: [docs.iqacMinutes, docs.iqacMou], title: 'Minutes and MOUs' },
    ],
  },
  {
    path: '/quality/naac', title: 'NAAC', group: 'quality',
    desc: 'NAAC A+ accredited. NAAC records of Kumbhalkar College of Social Work, Wardha: Self Study Report, Peer Team Report 2022 and certificate.',
    blocks: [
      P('Kumbhalkar College of Social Work is accredited by the National Assessment and Accreditation Council (NAAC) with grade A+.'),
      { t: 'docs', items: [docs.ssr, docs.peerTeam, docs.naacCertificate] },
      TODO('NAAC CGPA, accreditation cycle and validity period.'),
    ],
  },
  {
    path: '/quality/nirf', title: 'NIRF', group: 'quality',
    desc: 'NIRF submissions of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'docs', items: [docs.nirf2026Overall, docs.nirf2026College], title: 'NIRF 2026' },
      { t: 'docs', items: [docs.nirf2023Overall, docs.nirf2023College], title: 'NIRF 2023' },
      TODO('Rank or rank band and year. The old site lists the reports without a rank.'),
    ],
  },
  {
    path: '/quality/counselling-committee', title: 'Counselling committee', group: 'quality',
    desc: 'Counselling committee of Kumbhalkar College of Social Work, Wardha: help for students with academic, personal and social problems.',
    blocks: [
      P('A college student is fairly independent. He or she chooses subjects by interest and makes their own decisions, but also faces problems that are academic, social, psychological, economic, professional or recreational. Some are easy to solve. For others the student needs help. The committee works with external counsellors where needed.'),
      H('Objectives'),
      { t: 'list', ordered: true, items: [
        'Build self-confidence and a sense of belonging in students who are troubled',
        'Help students recognise their abilities and limits',
      ] },
      H('How it works'),
      P('The committee sits in college on Thursdays and Fridays.'),
      L(
        'It works on psychological problems such as anxiety, depression and conflict',
        'It helps students cope with the problem and the situation around them',
        'It helps them recognise their own abilities and use the resources around them',
        'It helps them take responsible decisions to ease their suffering and become self-disciplined',
      ),
      TODO('Names and contact details of the committee members, and the room or time for walk-in counselling.'),
    ],
  },
  {
    path: '/quality/exam-cell', title: 'Exam cell', group: 'quality',
    desc: 'Examination committee of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      P('Kumbhalkar College of Social Work is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University, one of the oldest universities in central India, established on 4 August 1923 under the Maharashtra Public Universities Act. The university covers four districts: Nagpur, Wardha, Bhandara and Gondia.'),
      P('The college has an examination committee that works under the Principal for examinations held at college level.'),
      H('Functions'),
      L(
        'Conduct practical examinations for all classes, and written examinations held in the college, and send marks to the university online and offline as it instructs',
        'Hold unit tests for all classes and subjects',
        'Carry out examination duties as per the university schedule',
        'Arrange student seating',
        'Keep examination matters confidential',
        'Make every effort to run examinations smoothly at the college centre',
        'Have each paper checked by the concerned professor in the fixed period and send marks to the university',
        'Take disciplinary action against students who misbehave in examinations',
      ),
      H('Exam co-ordinators'),
      { t: 'table', head: ['Name', 'Designation', 'Contact'], rows: [
        ['Dr. Punam Yesambare (M.A. Marathi, M.Phil., Ph.D.)', 'Exam co-ordinator', '9890933980, punam.yesambare@gmail.com'],
        ['Prof. Gajanan R. Jadhao (B.A., B.Ed., M.S.W., NET)', 'Exam co-ordinator', '9763734227, prof.jadhao@gmail.com'],
      ] },
    ],
  },
  {
    path: '/quality/anti-ragging', title: 'Anti-ragging committee', group: 'quality',
    desc: 'Anti-ragging committee of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      P('The Anti-Ragging Committee works under the Maharashtra Prohibition of Ragging Act, 1999. The college has had the committee since the 2018-19 session, with a policy and rules that follow the 2018 directions of the Government of Maharashtra and the UGC. Ragging is harassment, intimidation or bullying that can cause physical or emotional harm.'),
      P('Most students come from rural areas, so the college takes special care of their safety. All teachers, non-teaching staff and the Principal stay alert so that no student is ragged.'),
      H('Objective'),
      P('To prevent and deal with ragging, and to keep the institution a safe place for students.'),
      H('Committee'),
      { t: 'table', head: ['No.', 'Name', 'Designation', 'Phone'], rows: [
        ['1', 'Dr. Chandu Popatkar', 'Principal (Chairperson)', '9890323523'],
        ['2', 'Dr. Sunil Totade', 'Academic Co-ordinator', '9850911760'],
        ['3', 'Mr. Pravin Dhopate', 'Representative of media', '9371895523'],
        ['4', 'Asst. Prof. Satish Dhawad', 'HOD, Social Work', '9850295004'],
        ['5', 'Asst. Prof. Kishor Dhoble', 'HOD, Sociology', '9975445605'],
        ['6', 'Asst. Prof. Subhash Rangari', 'HOD, Psychology', '7709906797'],
        ['7', 'Dr. Punamkumar Yesabare', 'HOD, Marathi', '9890933980'],
        ['8', 'Asst. Prof. Rajesh Tandekar', 'HOD, English', '9545333942'],
        ['9', 'Dr. Varsha Patil', 'HOD, Library Science', '9561604898'],
        ['10', 'Mrs. Bharti Sawarkar', "Parents' representative", '8999479752'],
        ['11', 'Ku. Sakshi Jamgade', 'Student representative (girl)', '9028876027'],
        ['12', 'Mr. Rohan Adewar', 'Student representative (boy)', '7875380754'],
        ['13', 'Mr. Rajesh Kumbhalkar', 'Superintendent', '9623786100'],
        ['14', 'Asst. Prof. Vishakha Mankar', 'Convener', '9764908283'],
        ['15', 'Asst. Prof. Rameshwer Vhandkar', 'Member', '9021204340'],
        ['16', 'Asst. Prof. Gajanan Jadhav', 'Member', '9763734227'],
      ] },
      TODO('Confirm the committee for the current session, including the student representatives.'),
    ],
  },
  {
    path: '/quality/sexual-harassment-committee', title: 'Sexual harassment grievance cell', group: 'quality',
    desc: 'Grievance cell for sexual harassment (Vishakha committee) at Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      P('As directed by Rashtrasant Tukadoji Maharaj Nagpur University, the college has a Grievance Cell for Sexual Harassment. It is part of the college\'s internal committee system, which deals with complaints of sexual harassment under the POSH Act.'),
      H('Purpose'),
      { t: 'list', ordered: true, items: [
        'Give a clear and fair process for handling sexual harassment complaints',
        'Keep the workplace safe and respectful',
        'Follow the legal requirements of the POSH Act',
      ] },
      H('Who it covers'),
      P('All employees, contractors, interns and anyone else linked to the college, for incidents at the workplace or in work-related settings.'),
      H('Composition'),
      P('A senior woman employee as chairperson, with women members from different departments and levels, and optionally an external expert. The tenure is normally three years.'),
      H('Vishakha committee'),
      { t: 'table', head: ['No.', 'Name', 'Designation', 'Phone'], rows: [
        ['1', 'Dr. Chandu Popatkar', 'Chairperson', '7750185113'],
        ['2', 'Dr. Nalini Bhagat', 'Member', '9665216553'],
        ['3', 'Dr. Kamal Potdukhe', 'Member', '9637403520'],
        ['4', 'Dr. Varsha Patil', 'Member', '9764026642'],
        ['5', 'Prof. Vishakha Mankar', 'Member', '9764908283'],
        ['6', 'Adv. Priyadarshani Dambhare', 'Legal adviser', '9284329959'],
        ['7', 'Mrs. Kiran K. Dhobale', 'NGO member', '9096679266'],
      ] },
      { t: 'cta', label: 'Internal Complaints Committee', href: '/quality/internal-complaints-committee' },
    ],
  },
  {
    path: '/quality/internal-complaints-committee', title: 'Internal Complaints Committee (ICC)', group: 'quality',
    desc: 'Internal Complaints Committee (ICC) of Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      P('As directed by Rashtrasant Tukadoji Maharaj Nagpur University, the college has an Internal Complaints Committee. In India it is required by the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.'),
      H('What the ICC does'),
      L(
        'Receives complaints of sexual harassment',
        'Recommends action if a complaint is found valid, from a warning to termination depending on how serious the offence is',
        'Keeps the process confidential to protect the dignity and privacy of everyone involved',
        'Reports every year on the cases received, resolved and pending',
      ),
      H('Composition'),
      P('A senior woman employee as chairperson, members from different levels and departments with a majority of women, at least one member from an NGO committed to women\'s causes, and an external member who knows the field.'),
      H('Members'),
      { t: 'table', head: ['No.', 'Name', 'Designation'], rows: [
        ['1', 'Dr. Nalini Bhagat', 'Head of the committee and co-ordinator'],
        ['2', 'Mr. Gajanan Jadhav', 'Member'],
        ['3', 'Dr. Varsha Patil', 'Member'],
        ['4', 'Mr. Rajesh Kumbhalkar', 'Member'],
        ['5', 'Adv. Priyadarshani Dambhare', 'Legal adviser'],
        ['6', 'Mrs. Kiran K. Dhobale', 'NGO representative'],
      ] },
      P('Principal: Dr. Chandu Popatkar.'),
    ],
  },
  pending('/quality/grievance-redressal', 'Student grievance and redressal committee', 'quality', 'committee members, how to file a grievance, and the process'),
  pending('/quality/equal-opportunity-cell', 'Equal opportunity cell', 'quality', 'cell members and activities'),
  pending('/quality/sedg-cell', 'Socio-economically disadvantaged group cell', 'quality', 'cell members and activities'),
  pending('/quality/ombudsperson', 'Ombudsperson', 'quality', 'name and contact details of the ombudsperson'),
  pending('/quality/csr-cell', 'CSR, project and NGO consultancy cell', 'quality', 'what the cell does, members and contact'),
  pending('/quality/controller-of-examination', 'Controller of examination', 'quality', 'name, role and contact'),

  /* ---------------------------------------------------------------- Notices */
  {
    path: '/notices', title: 'Circulars and notices', group: 'notices',
    desc: 'Circulars and notices from Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'docs', items: [docs.phdSeats, docs.phdSchedule], title: 'Latest' },
      TODO('Dates for each notice, and all other circulars. The old menu item "Circular and Notices" linked nowhere.'),
    ],
  },
  {
    path: '/notices/news', title: 'News, events and achievements', group: 'notices',
    desc: 'Recent events and achievements at Kumbhalkar College of Social Work, Wardha.',
    blocks: [
      { t: 'table', head: ['Date', 'Event'], rows: [
        ['17 July 2021', 'Tree plantation, session 2021-22'],
        ['9 February 2021', 'Courtesy visit by the Superintendent of Police'],
        ['7 March 2020', "Principal's guidance session for MSW and BSW students"],
      ] },
      TODO('These three events are from the old home page. Add recent events and achievements with photographs.'),
    ],
  },
  pending('/notices/job-openings', 'Job openings', 'notices', 'current vacancies, or a line saying there are none'),
  pending('/notices/accounts', 'Accounts and balance sheet', 'notices', 'audited statements and balance sheets by year'),
  {
    path: '/notices/rti', title: 'Right to Information (RTI)', group: 'notices',
    desc: 'How to file a Right to Information request with Kumbhalkar College of Social Work, Wardha.',
    lead: 'Procedure for requests under the RTI Act, 2005.',
    blocks: [
      P('This procedure explains how the college handles requests under the Right to Information Act, 2005. It applies to employees, students and others who receive, process or manage RTI requests.'),
      H('Who does what'),
      L(
        'Principal: makes sure the college follows the Act, and appoints the Public Information Officer (PIO) and the Appellate Authority.',
        'Public Information Officer (PIO): receives, processes and answers requests, and keeps the records.',
        'Assistant Public Information Officer (APIO): helps the PIO.',
        'Appellate Authority: decides appeals when the applicant is not satisfied with the PIO\'s reply.',
      ),
      H('How to apply'),
      L('Send a written request to the PIO of Kumbhalkar College of Social Work.', 'Include your name, contact details and the information you want.'),
      H('What happens next'),
      { t: 'list', ordered: true, items: [
        'The PIO acknowledges the request within 5 working days and gives a reference number.',
        'If another public authority holds the information, the PIO sends the request there within 5 days and tells you.',
        'You get the information within 30 days. If more time is needed, the PIO tells you; the extension cannot exceed 30 more days.',
      ] },
      H('Fees'),
      P('A nominal fee, as set under the Act, is paid in cash or by demand draft. Information about the life and liberty of a person is free.'),
      H('Appeals'),
      L(
        'First appeal: to the Appellate Authority within 30 days of the reply, or of the end of the 30-day period if there is no reply.',
        'Second appeal: to the State Information Commission.',
      ),
      H('Records'),
      P('All requests, replies and related letters are kept by the PIO for at least five years. The college trains staff and runs awareness programmes, and reviews this procedure every year.'),
      TODO('Names and contact details of the PIO, APIO and Appellate Authority, and the date this procedure was approved. The old page leaves them blank.'),
    ],
  },
  {
    path: '/notices/feedback', title: 'Feedback', group: 'notices',
    desc: 'Feedback forms for students, parents, faculty, alumni and employers of Kumbhalkar College of Social Work, Wardha.',
    blocks: [{ t: 'docs', items: feedbackDocs }, TODO('Online versions of the feedback forms.')],
  },

  /* ---------------------------------------------------------------- Contact */
  {
    path: '/contact', title: 'Contact us', group: 'contact',
    desc: 'Address, phone numbers and email of Kumbhalkar College of Social Work, Sevagram Road, Wardha.',
    lead: 'We are on Sevagram Road, opposite Mahila Ashram, Wardha.',
    blocks: [{ t: 'contact' }],
  },
];

/* ------------------------------------------------------------ site layout */

const raw = new Map(rawPages.map((p) => [p.path, p]));
const lastSeg = (p: string) => p.split('/').pop() as string;

/** Pages that are new in this layout. Each is a visible list of what the college must supply. */
const extras: Record<string, { title: string; blocks: Block[]; lead?: string; desc?: string }> = {
  '+plans': {
    title: 'Plans and reports',
    blocks: [
      H('Institutional development plan'),
      TODO('The institutional development plan (the IQAC perspective plan can be adapted). Upload as a PDF.'),
      H('Annual reports'),
      TODO('Annual reports, year by year, as PDFs.'),
    ],
  },
  '+aqar': {
    title: 'AQAR',
    blocks: [
      { t: 'docs', items: aqar, title: 'Annual Quality Assurance Reports (AQAR)' },
      TODO('AQAR reports after 2019-20. The old site lists four years only.'),
    ],
  },
  '+fieldwork': {
    title: 'Fieldwork and practicum',
    blocks: [
      P('Fieldwork is part of every social work programme. Students work with communities and agencies under the guidance of faculty supervisors.'),
      H('Concurrent fieldwork'),
      TODO('How many days a week, which agencies, and how students are supervised.'),
      H('Block placement'),
      TODO('Duration, timing and the agencies used.'),
      H('Rural camp and study tours'),
      TODO('Where camps and tours are held, and the dates of the last year.'),
      H('Agencies and MoUs'),
      TODO('List of partner agencies with the MoU copies.'),
      H('Fieldwork manual'),
      TODO('The fieldwork manual as a PDF.'),
      H('Student reports'),
      TODO('A few selected student fieldwork reports, with the students\' consent.'),
    ],
  },
  '+apply': {
    title: 'Apply online',
    blocks: [
      P('Applications for 2026-27 are made through the online admission form.'),
      { t: 'list', ordered: true, items: [
        'Choose a programme: BSW, MSW or Ph.D.',
        'Fill in the online admission form. It takes a few minutes.',
        'Submit your documents. The list is in the admission procedure.',
      ] },
      { t: 'cta', label: 'Open the admission form', href: APPLY_FORM, external: true },
      { t: 'docs', items: [docs.admissionProcedure, docs.fees, docs.prospectus], title: 'Before you apply' },
      P('If you would like a call before you apply, leave your number in the call back form on the home page or on the contact page.'),
      TODO('The old form is a Google Form. The plan asks for a college-branded form with document upload, application tracking and a separate Ph.D. application. This needs a decision on where applications are stored and who handles them.'),
      TODO('Last date to apply and the list of documents for each programme.'),
    ],
  },
  '+projects': {
    title: 'Projects and publications',
    blocks: [
      H('Funded projects'),
      TODO('Title, investigator, funding agency, amount and years for each funded project.'),
      H('Consultancy projects'),
      TODO('Title, client, faculty lead and years for each consultancy project.'),
      H('Publications'),
      TODO('Papers, books and chapters by faculty and scholars, with year and journal.'),
      H('Conferences and seminars'),
      TODO('Seminars and conferences held, and calls for papers.'),
    ],
  },
  '+directory': {
    title: 'Telephone directory',
    blocks: [
      { t: 'table', head: ['Office', 'Contact person', 'Phone', 'Email'], rows: [
        ['Principal\'s office', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Admission office', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Examination cell', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Accounts office', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Library', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Placement cell', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Research cell', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Grievance redressal committee', '[to confirm]', '[to confirm]', '[to confirm]'],
        ['Anti-ragging helpline', '[to confirm]', '[to confirm]', '[to confirm]'],
      ] },
      TODO('Names, phone numbers and emails by office. Three numbers are on the site today (+91 715-224-1848, 9403339741, 9637755310) without saying which office each belongs to.'),
    ],
  },
  '+accessibility': {
    title: 'Accessibility and Divyang support',
    blocks: [TODO('Facilities for differently abled students (ramps, lifts, accessible toilets, reading support), and a contact person.')],
  },
};

const moved = oldToNew();
const fixHref = (h: string) => moved[h] ?? h;
const fixBlock = (b: Block): Block => {
  if (b.t === 'cta') return { ...b, href: fixHref(b.href) };
  if (b.t === 'table') return { ...b, rows: b.rows.map((r) => r.map((c) => (c.startsWith('/') ? fixHref(c) : c))) };
  return b;
};

function build(e: (typeof layout)[number]): Page {
  const parts = e.sources.map((s) => {
    const x = s.startsWith('+') ? extras[s] : raw.get(s);
    if (!x) throw new Error(`structure.mjs: no page for ${s}`);
    return { key: s.startsWith('+') ? s.slice(1) : lastSeg(s), title: x.title, blocks: x.blocks, lead: x.lead, desc: x.desc, extra: s.startsWith('+') };
  });
  const head = parts[0];
  const blocks: Block[] = [];
  if (e.toc) blocks.push({ t: 'toc' });
  parts.forEach((p, i) => {
    const own = p.blocks.filter((b) => b.t !== 'hub').map(fixBlock);
    if (e.toc || i > 0) {
      blocks.push({ t: 'h', text: p.title, id: p.key });
      blocks.push(...own.map((b): Block => (b.t === 'h' ? { ...b, sub: true } : b)));
    } else {
      blocks.push(...own);
    }
  });
  return {
    path: e.path,
    title: e.title ?? head.title,
    desc: e.desc ?? head.desc ?? `${e.title ?? head.title} at Kumbhalkar College of Social Work, Wardha.`,
    group: e.group as GroupId,
    lead: e.lead ?? head.lead,
    blocks,
    owner: e.owner,
    updated: CONTENT_DATE,
  };
}

export const pages: Page[] = layout.map(build);

/* ---------------------------------------------------------------- helpers */

export const pageByPath = new Map(pages.map((p) => [p.path, p]));
export const groupPages = (g: GroupId) => pages.filter((p) => p.group === g);
