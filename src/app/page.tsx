import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Admission, Faq, Life, Notices, Principal, Programs, Story, Trust } from '@/components/Sections';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Trust />
        <Programs />
        <Story />
        <Admission />
        <Notices />
        <Life />
        <Faq />
        <Principal />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
