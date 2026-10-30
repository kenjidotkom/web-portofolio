import Reveal from '../components/ui/Reveal';
import Character from '../components/ui/Character';
import { IconCircle } from '../components/ui/Button';
import { TechBadge } from '../components/ui/Chip';
import { Sparkle } from '../components/ui/Decor';
import { crest } from '../assets';
import { services } from '../data/portfolioData';
import './Services.css';

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
          {services.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="svc-card">
              <div className="svc-card__art">
                <Character skin={s.skin} className="svc-card__char" />
                <IconCircle tone="ink" size={44} label={`Lihat layanan ${s.title}`} className="svc-card__go" />
              </div>
              <div className="svc-card__info" data-surface="ink">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-card__tech">
                  {s.tech.map((t) => <TechBadge key={t} code={t} />)}
                </div>
              </div>
            </Reveal>
          ))}
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

