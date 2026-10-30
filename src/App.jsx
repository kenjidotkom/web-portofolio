import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Ribbon from './sections/Ribbon';
import Works from './sections/Works';
import Competitions from './sections/Competitions';
import Experience from './sections/Experience';
import StyleSection from './sections/StyleSection';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Urutan section mengikuti DESIGNSYSTEM §1.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Ribbon />
        <Works />
        <Competitions />
        <Experience />
        <StyleSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
