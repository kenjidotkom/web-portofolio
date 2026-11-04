import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Ribbon from './sections/Ribbon';
import Works from './sections/Works';
import Competitions from './sections/Competitions';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import StyleSection from './sections/StyleSection';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CaseStudy from './sections/CaseStudy';
import SectionFx from './components/ui/SectionFx';
import { useHashRoute } from './hooks/useHashRoute';

// Urutan section mengikuti DESIGNSYSTEM §1. Halaman detail proyek: `#/proyek/<slug>`.
export default function App() {
  const route = useHashRoute();

  return (
    <>
      <Nav key={route.name} />
      {route.name === 'case' ? (
        <CaseStudy slug={route.slug} key={route.slug} />
      ) : (
        <>
          <main>
            <Hero />
            <SectionFx><Services /></SectionFx>
            <SectionFx><Ribbon /></SectionFx>
            <SectionFx><Works /></SectionFx>
            <SectionFx><Competitions /></SectionFx>
            <SectionFx><Certifications /></SectionFx>
            <SectionFx><Experience /></SectionFx>
            <SectionFx><StyleSection /></SectionFx>
            <SectionFx><About /></SectionFx>
            <SectionFx><Contact /></SectionFx>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
