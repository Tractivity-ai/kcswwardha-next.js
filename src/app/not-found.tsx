import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap nf">
        <p className="eyebrow">Page not found</p>
        <h1 className="h2">We could not find that page.</h1>
        <p>It may have moved when the college site was redesigned. Try the menu, or start from the home page.</p>
        <Link className="btn btn--maroon" href="/"><span>Back to home</span></Link>
      </main>
      <Footer />
    </>
  );
}
