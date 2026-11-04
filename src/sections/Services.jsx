import { useEffect, useState } from 'react';
import Reveal from '../components/ui/Reveal';
import { IconCircle } from '../components/ui/Button';
import { TechBadge } from '../components/ui/Chip';
import { Sparkle } from '../components/ui/Decor';
import { crest, uiuxDesign, frontEnd } from '../assets';
import { services } from '../data/portfolioData';
import './Services.css';

const SVC_IMGS = {
  uiux: uiuxDesign,
  frontend: frontEnd,
};

export default function Services() {
  const [crestOffset, setCrestOffset] = useState(0);

  // Parallax halus untuk bunga latar belakang saat di-scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = document.getElementById('services');
          if (el) {
            const rect = el.getBoundingClientRect();
            // Geser sedikit vertikal berdasarkan posisi section di viewport
            const offset = (window.innerHeight - rect.top) * 0.08;
            setCrestOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="section services">
      <img
        src={crest}
        alt=""
        aria-hidden="true"
        className="services__crest"
        style={{ transform: `translateY(calc(-50% + ${crestOffset}px))` }}
      />
      <div className="container services__inner">
        <div className="section-head">
          <Reveal as="h2" variant="slide-right" className="services__title h-display-xl">
            {services.titleA}{' '}
            <span className="services__pill">
              <Sparkle size={32} color="var(--lime-400)" className="services__sparkle" />
              {services.titleB}
            </span>
          </Reveal>
          <Reveal delay={120} variant="fade-up" as="p" className="services__intro">
            {services.intro}
          </Reveal>
        </div>

        <ul className="services__grid">
          {services.items.map((s, i) => {
            const targetHref = s.href || (s.id === 'uiux' ? '#competitions' : '#works');
            const animVariant = i === 0 ? 'slide-right' : 'slide-left';
            return (
              <Reveal as="li" key={s.id} variant={animVariant} delay={i * 120} className="svc-card">
                <a href={targetHref} className="svc-card__art" title={`Buka ${s.title}`}>
                  <img src={SVC_IMGS[s.id]} alt={s.title} className="svc-card__img" />
                  <IconCircle href={targetHref} tone="ink" size={44} label={`Lihat ${s.title}`} className="svc-card__go" />
                </a>
                <div className="svc-card__info" data-surface="ink">
                  <h3><a href={targetHref} className="svc-card__title-link">{s.title}</a></h3>
                  <p>{s.desc}</p>
                  <div className="svc-card__tech">
                    {s.tech.map((t) => <TechBadge key={t} code={t} />)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal variant="scale-up" delay={200} className="services__stats" data-surface="ink">
          {services.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
