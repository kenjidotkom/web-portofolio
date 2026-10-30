import Reveal from '../components/ui/Reveal';
import { experience as e } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container container--sm">
        <div className="section-head section-head--center">
          <Reveal as="h2" className="h-display-xl">
            {e.titleA} <span className="accent-text">{e.titleHl}</span>
          </Reveal>
        </div>

        <ol className="timeline">
          {e.items.map((it, i) => (
            <Reveal as="li" key={it.org} delay={80} className="timeline__item">
              <div className="timeline__left">
                <h3>{it.org}</h3>
                <time>{it.period}</time>
              </div>
              <span className="timeline__node" aria-hidden="true">
                <i className={`timeline__dot timeline__dot--${i % 3}`} />
              </span>
              <div className="timeline__right">
                <h4>{it.role}</h4>
                <p>{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

