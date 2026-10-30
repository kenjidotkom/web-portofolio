import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Sparkle } from '../components/ui/Decor';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { navLeft, navRight, person } from '../data/portfolioData';
import './Nav.css';

const IDS = [...navLeft, ...navRight].map((l) => l.id);

export default function Nav() {
  const { theme, toggle } = useTheme();
  const active = useScrollSpy(IDS);
  const [open, setOpen] = useState(false);

  const link = (l) => (
    <li key={l.id}>
      <a href={`#${l.id}`} className={`nav__link ${active === l.id ? 'is-active' : ''}`}
        aria-current={active === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>
        {l.label}
      </a>
    </li>
  );

  return (
    <header className="nav" data-surface="ink">
      <nav className="nav__bar" aria-label="Navigasi utama">
        <ul className="nav__side nav__side--left">{navLeft.map(link)}</ul>

        <a href="#hero" className="nav__logo" aria-label={`${person.name} — beranda`}>
          <span className="nav__logo-mark"><Sparkle size={20} color="#0c0c0c" /></span>
          <span className="nav__logo-text">{person.wordmark}</span>
        </a>

        <div className="nav__side nav__side--right">
          <ul className="nav__side-list">{navRight.map(link)}</ul>
          <button className="nav__toggle" onClick={toggle} data-theme-toggle
            aria-pressed={theme === 'light'}
            aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="nav__menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <ul className={`nav__sheet ${open ? 'is-open' : ''}`}>
        {[...navLeft, ...navRight].map(link)}
      </ul>
    </header>
  );
}

