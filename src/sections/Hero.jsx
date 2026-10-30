import { Star, Quote, ArrowUpRight, Download } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { hero as heroArt } from '../assets';
import { Starburst, Sparkle, Rays } from '../components/ui/Decor';
import { hero, person } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <Starburst size={144} color="var(--lime-400)" className="hero__burst-l" />
      <Sparkle size={56} className="hero__sparkle" />

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
              <Quote size={36} className="accent-text" aria-hidden="true" />
              <blockquote>{hero.quote}</blockquote>
              <figcaption>{hero.quoteCaption}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={240} className="hero__center">
            <img src={heroArt} alt={`Ilustrasi ${person.name}`} className="hero__art" />
            
            <div className="hero__dock" data-surface="ink">
              <Button href="#works" icon={ArrowUpRight} className="hero__dock-btn">Lihat proyek</Button>
              <Button href={person.resumeUrl} variant="ghost" icon={Download} className="hero__dock-btn">Unduh CV</Button>
            </div>
          </Reveal>

          <Reveal delay={320} className="hero__right">
            <div className="hero__stars" aria-label="Rating 5 dari 5">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={20} fill="currentColor" />)}
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

