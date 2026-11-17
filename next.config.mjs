/** @type {import('next').NextConfig} */
/** Old kcswwardha.in addresses mapped to the new pages, so search rankings and shared links keep working. */
const oldPages = {
  'index.php': '/', 'index.html': '/', 'about-us.php': '/about', 'rtmtes.php': '/about/society', 'aim.php': '/about/vision-mission',
  'principal.php': '/about/principal', 'gbody.php': '/about/governing-body', 'staff.php': '/about/teaching-staff',
  'astaff.php': '/about/administrative-staff', 'bsw.php': '/programmes/bsw', 'msw.php': '/programmes/msw',
  'ma.php': '/programmes/ma-travel-tourism', 'phd.php': '/programmes/phd', 'research.php': '/programmes/research-centre',
  'academic.php': '/programmes/academic-calendar', 'placement.php': '/campus/placement', 'nss.php': '/campus/nss',
  'aboutnss.php': '/campus/nss', 'sports.php': '/campus/sports', 'medical.php': '/campus/health-facilities',
  'Alumni.php': '/campus/alumni', 'Studentcorn.php': '/campus/students-zone', 'lstaff.php': '/campus/library',
  'elibrary.php': '/campus/e-library', 'magzine.php': '/campus/magazine', 'gallery.php': '/campus/gallery',
  'iqac.php': '/quality/iqac', 'ebody.php': '/quality/iqac', 'counselling.php': '/quality/counselling-committee',
  'exam.php': '/quality/exam-cell', 'anti_ragging.php': '/quality/anti-ragging',
  'harassment.php': '/quality/sexual-harassment-committee', 'internal_complaint.php': '/quality/internal-complaints-committee',
  'rti.php': '/notices/rti', 'feedback.php': '/notices/feedback', 'contact.php': '/contact',
};

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return Object.entries(oldPages).map(([from, to]) => ({ source: `/${from}`, destination: to, permanent: true }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};
export default nextConfig;
