import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Character from '../components/ui/Character';
import { Starburst } from '../components/ui/Decor';
import { style as s } from '../data/portfolioData';
import './StyleSection.css';

export default function StyleSection() {
  return (
    <section id="style" className="section style-section" data-surface="ink">
      <div className="container container--md">
        <div className="style-section__head">
          <Reveal as="h2" className="h-display-xl style-section__title">
            {s.titleA}<br />{s.titleB}
            <Starburst size={64} className="style-section__burst" style={{ position: 'relative', display: 'inline-block', marginLeft: 16 }} />
          </Reveal>
          <Reveal as="p" delay={80} className="style-section__tagline">
            {s.tagline[0]} <span className="accent-text">{s.tagline[1]}</span>
          </Reveal>
        </div>

        <div className="bento">
          <Reveal className="bento__cell bento__quote">
            <Character className="bento__char" skin="#e8b48c" />
            <p>“{s.quote}”</p>
          </Reveal>

          <Reveal delay={80} className="bento__cell bento__process">
            <ArrowUpRight size={32} aria-hidden="true" />
            <p>{s.process}</p>
          </Reveal>

          <Reveal delay={160} className="bento__cell bento__visual">
            <Starburst size={96} color="var(--lime-400)" style={{ left: -16, top: -16 }} />
            <Character className="bento__char bento__char--sm" />
          </Reveal>

          <Reveal delay={80} className="bento__cell bento__handoff">
            <p>{s.handoff}</p>
            <svg className="bento__eye" viewBox="0 0 160 100" aria-hidden="true">
              <ellipse cx="80" cy="50" rx="74" ry="44" fill="#fff" stroke="#0c0c0c" strokeWidth="6" />
              <circle cx="80" cy="50" r="24" fill="#0c0c0c" />
              <circle cx="88" cy="42" r="7" fill="#fff" />
            </svg>
            <ArrowUpRight size={32} className="bento__corner" aria-hidden="true" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

