import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Admission, Faq, Facts, Life, Notices, Principal, Programs, Quick, Quality, Story } from '@/components/Sections';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Quick />
        <Hero />
        <Programs />
        <Facts />
        <Story />
        <Admission />
        <Notices />
        <Life />
        <Quality />
        <Principal />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
