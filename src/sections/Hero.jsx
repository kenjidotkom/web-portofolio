import { Star, Quote, ArrowUpRight, Download } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { heroPhoto } from '../assets';
import { Starburst, Sparkle, Rays } from '../components/ui/Decor';
import { hero, person } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero__burst-l" aria-hidden="true">
        <Starburst size={160} color="var(--lime-400)" />
      </div>
      <div className="hero__sparkle" aria-hidden="true">
        <Sparkle size={64} />
      </div>

      <div className="container hero__inner">
        <Reveal className="hero__badge">
          <span>{hero.badge}</span>
          <Rays className="hero__rays" />
        </Reveal>

        <Reveal as="h1" delay={80} className="hero__title">
          {hero.lead}{' '}
          <span className="hero__hl">{hero.highlight}</span>
          <br />
          {hero.titleRest}
        </Reveal>

        <div className="hero__grid">
          <Reveal delay={160} className="hero__left">
            <p className="hero__lead">{hero.paragraph}</p>
            <figure className="hero__quote">
              <Quote size={40} className="accent-text" aria-hidden="true" />
              <blockquote>{hero.quote}</blockquote>
              <figcaption>{hero.quoteCaption}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={240} className="hero__center">
            <div className="hero__avatar-stage">
              {/* Lingkaran latar belakang lime */}
              <div className="hero__avatar-bg" />

              {/* Bintang merah dekoratif di kanan avatar */}
              <div className="hero__avatar-burst" aria-hidden="true">
                <Starburst size={115} color="#E8112D" />
              </div>

              {/* Foto user dengan lengkungan di bawah mengikuti bentuk lingkaran */}
              <div className="hero__avatar-mask">
                <img
                  src={heroPhoto}
                  alt={person.name}
                  className="hero__avatar-img"
                  loading="eager"
                />
              </div>

              {/* Tanda tangan Choirun Nisa dalam badge miring persis seperti Figma */}
              <div className="hero__signature-badge" aria-hidden="true">
                <span className="hero__signature-text">Choirun Nisa</span>
              </div>
            </div>
            
            <div className="hero__dock" data-surface="ink">
              <Button href="#works" icon={ArrowUpRight} className="hero__dock-btn hero__dock-btn--primary">
                Lihat Proyek
              </Button>
              <Button
                href={person.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                icon={Download}
                className="hero__dock-btn hero__dock-btn--ghost"
              >
                Unduh CV
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320} className="hero__right">
            <div className="hero__stars" aria-label="Rating 5 dari 5">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="hero__years">{hero.years}</p>
            {hero.subYears && <p className="hero__sub-years">{hero.subYears}</p>}
            {hero.achievements.map((a) => <p key={a} className="hero__ach">{a}</p>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

