import localFont from 'next/font/local';

export const newsreader = localFont({
  src: [
    { path: '../assets/fonts/newsreader-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/newsreader-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/newsreader-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/newsreader-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../assets/fonts/newsreader-latin-500-italic.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-newsreader',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const hanken = localFont({
  src: [
    { path: '../assets/fonts/hanken-grotesk-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/hanken-grotesk-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/hanken-grotesk-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/hanken-grotesk-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-hanken',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

/** Marathi and Hindi. Only fetched by the browser when Devanagari text is on the page. */
export const deva = localFont({
  src: [
    { path: '../assets/fonts/noto-sans-devanagari-devanagari-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/noto-sans-devanagari-devanagari-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-deva',
  display: 'swap',
  preload: false,
  fallback: ['sans-serif'],
});
