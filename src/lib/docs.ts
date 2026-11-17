/**
 * Documents (PDFs) published on the old site at kcswwardha.in/download/.
 * Until the files are copied into /public/documents, links point to the old site so nothing is lost.
 * To switch over: copy the files, then change DOC_BASE to '/documents/'. Every link updates at once.
 */
export const DOC_BASE = 'https://kcswwardha.in/download/';

const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/');
export const dl = (path: string) => DOC_BASE + enc(path);

export type Doc = { label: string; href: string; note?: string };

export const docs = {
  prospectus: { label: 'Prospectus 2024-25', href: dl('KCSW_Prospectus.pdf'), note: '[Update to the 2026-27 edition]' },
  fees: { label: 'Fee structure', href: dl('KCSWFeeStructure.pdf') },
  admissionProcedure: { label: 'Admission procedure', href: dl('admission_procdure.pdf') },
  phdSeats: { label: 'Ph.D. vacant seat status', href: dl('KCSWPh.DVaccantSeatStatus.pdf') },
  phdSchedule: { label: 'Provisional admission schedule for Ph.D., 2025-26', href: dl('phdnotice.pdf') },
  phdSchedule2324: { label: 'Provisional admission schedule for Ph.D., 2023-24', href: dl('phd.pdf') },
  phdNotification: { label: 'Notification for Ph.D.', href: dl('NOTIFICATION_FOR_Phd.pdf') },
  academicCalendar: { label: 'Academic calendar', href: dl('academic.pdf') },
  magazine: { label: 'College magazine', href: dl('magzine.pdf') },
  elibrary: { label: 'E-library', href: dl('elibrary.pdf') },
  library: { label: 'Library department', href: dl('library.pdf') },
  iqacMinutes: { label: 'IQAC minutes of meeting', href: dl('minutesofmeeting.pdf') },
  iqacMou: { label: 'IQAC MOUs', href: dl('mou.pdf') },
  ssr: { label: 'Self Study Report (SSR)', href: dl('KCSW SSR.pdf') },
  peerTeam: { label: 'NAAC Peer Team Report, 2022', href: dl('NAAC_PEER_TEAM_REPORT_2022.pdf') },
  naacCertificate: { label: 'NAAC certificate', href: 'https://kcswwardha.in/pdf/NAAC_CERTIficate_FINAL.pdf' },
  nirf2026Overall: { label: 'NIRF 2026, overall', href: dl('NIRF_2026_OVERALL.pdf') },
  nirf2026College: { label: 'NIRF 2026, college category', href: dl('NIRF2026_COLLEGE.pdf') },
  nirf2023Overall: { label: 'NIRF 2023, overall', href: dl('NIRF_2023_OVERALL.pdf') },
  nirf2023College: { label: 'NIRF 2023, college category', href: dl('NIRF2023_COLLEGE.pdf') },
} satisfies Record<string, Doc>;

export const aqar: Doc[] = [
  { label: 'AQAR 2016-17', href: dl('iqac/AQAR2016_17.pdf') },
  { label: 'AQAR 2017-18', href: dl('iqac/AQAR2017_18.pdf') },
  { label: 'AQAR 2018-19', href: dl('iqac/AQAR2018_19.pdf') },
  { label: 'AQAR 2019-20', href: dl('iqac/AQAR2019_20.pdf') },
];

export const alumniDocs: Doc[] = [
  { label: 'Alumni list', href: dl('alumni/Alluminalist.pdf') },
  { label: 'Alumni registration form', href: dl('alumni/AlumniRegistrationForm.pdf') },
  { label: 'Alumni registration certificate', href: dl('alumni/ALUMNIREGISTRATIONCERTIFICATE.pdf') },
  { label: 'Alumni governing body', href: dl('alumni/AlumniGoverningBody.pdf') },
  { label: 'Sample alumni feedback form', href: dl('alumni/SampleALUMNAI_FEEDBACK_FORM.pdf') },
];

export const studentDocs: Doc[] = [
  { label: 'Agency profile', href: dl('studentcorn/AgencyProfile.pdf') },
  { label: 'Case work report', href: dl('studentcorn/CaseWorkReport.pdf') },
  { label: 'Community work', href: dl('studentcorn/CommunityWork.pdf') },
  { label: 'Dissertation, initial pages', href: dl('studentcorn/DissertationInitialPagesfinal.pdf') },
  { label: 'Exposure and orientation visit', href: dl('studentcorn/ExposureOrientationVisit.pdf') },
  { label: 'Field work report format', href: dl('studentcorn/FieldWorkReportFormat.pdf') },
  { label: 'Group work report format', href: dl('studentcorn/GROUPWORKREPORTFORMAT.pdf') },
  { label: 'Internship', href: dl('studentcorn/Internship.pdf') },
  { label: 'Mini survey', href: dl('studentcorn/MiniSurvey.pdf') },
  { label: 'Rural camp report format', href: dl('studentcorn/RURALCAMPREPORTFORMAT.pdf') },
  { label: 'Study tour report format', href: dl('studentcorn/STUDYTOURREPORTFORMAT.pdf') },
];

export const feedbackDocs: Doc[] = [
  { label: 'Alumni feedback form', href: dl('feedback/Alumni_Feedback_Form.pdf') },
  { label: 'Employer feedback form', href: dl('feedback/Employer_Feedback_Form.pdf') },
  { label: 'Faculty feedback form', href: dl('feedback/Faculty_Feedback_Form.pdf') },
  { label: 'Parent feedback form', href: dl('feedback/Parrent_Feedback_Form.pdf') },
  { label: 'Student feedback form', href: dl('feedback/Student_Feedback_Form.pdf') },
];
