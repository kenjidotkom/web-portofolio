import { Instagram, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { Sparkle } from '../components/ui/Decor';
import { footer as f, person, navLeft, navRight } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" data-surface="ink">
      <div className="container">
        <Reveal className="footer__top">
          <h2 className="h-display-xl">{f.cta}</h2>
          <Button href={`mailto:${person.email}`} size="lg" icon={ArrowUpRight}>Hire me</Button>
        </Reveal>

        <hr className="footer__hr" />

        <div className="footer__cols">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-mark"><Sparkle size={20} color="#0c0c0c" style={{ position: 'static' }} /></span>
              <span>{person.wordmark}</span>
            </a>
            <p>{f.desc}</p>
            <div className="footer__social">
              <a href={person.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (@seishu1nui)"><Instagram size={20} /></a>
              <a href={person.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
              <a href={`mailto:${person.email}`} aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <h3>Navigasi</h3>
            <ul>{[...navLeft, ...navRight].map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}</ul>
          </nav>

          <div>
            <h3>Kontak</h3>
            <ul>
              <li><a href={`mailto:${person.email}`}>{person.email}</a></li>
              <li><a href={person.whatsapp} target="_blank" rel="noopener noreferrer">{person.phone}</a></li>
              <li><a href={person.instagram} target="_blank" rel="noopener noreferrer">{person.instagramHandle}</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer__hr" />
        <div className="footer__bottom">
          <p>© {person.year} {person.name}. Semua hak dilindungi.</p>
          <p>{f.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
