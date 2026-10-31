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
  return (
    <section id="services" className="section services">
      <img src={crest} alt="" aria-hidden="true" className="services__crest" />
      <div className="container services__inner">
        <div className="section-head">
          <Reveal as="h2" className="services__title h-display-xl">
            {services.titleA} <span className="services__pill"><Sparkle size={32} color="var(--lime-400)" className="services__sparkle" />{services.titleB}</span>
          </Reveal>
          <Reveal delay={80} as="p" className="services__intro">{services.intro}</Reveal>
        </div>

        <ul className="services__grid">
          {services.items.map((s, i) => {
            const targetHref = s.href || (s.id === 'uiux' ? '#competitions' : '#works');
            return (
              <Reveal as="li" key={s.id} delay={i * 80} className="svc-card">
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

        <Reveal className="services__stats" data-surface="ink">
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
