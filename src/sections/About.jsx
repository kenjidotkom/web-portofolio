import { GraduationCap, Download, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import Character from '../components/ui/Character';
import { Starburst } from '../components/ui/Decor';
import { TechBadge } from '../components/ui/Chip';
import { about as a, person } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="about__card card-surface">
          <div className="about__photo">
            <Starburst size={112} color="var(--lime-400)" style={{ right: -24, top: -24 }} />
            <span className="about__status">{a.badge}</span>
            <Character alt={`Foto ${person.name}`} skin="#f2c9a5" />
          </div>

          <div className="about__text">
            <h2 className="h-display-xl">{a.titleA} <span className="accent-text">{a.titleHl}</span></h2>
            <p className="about__para">{a.paragraph}</p>

            <ul className="about__edu">
              {a.education.map((e) => (
                <li key={e.name}>
                  <span className="about__edu-icon"><GraduationCap size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>{e.name}</strong> <span>· {e.period}</span>
                    <p>{e.major}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="about__stats">
              {a.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="about__cta">
              <Button href={person.resumeUrl} size="lg" icon={Download}>Unduh CV</Button>
              <Button href="#contact" size="lg" variant="outline" icon={ArrowUpRight}>Hubungi aku</Button>
            </div>
          </div>
        </Reveal>

        <div className="skills" id="skills">
          <Reveal as="h2" className="h-display-xl skills__title">
            {a.skillsTitleA} <span className="accent-text">{a.skillsTitleHl}</span>
          </Reveal>
          <ul className="skills__grid">
            {a.skills.map((s, i) => (
              <Reveal as="li" key={s.code} delay={(i % 4) * 60} className="skill-tile card-surface">
                <TechBadge code={s.code} size="lg" title={s.name} />
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.level}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

