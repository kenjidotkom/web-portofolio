import { Sparkle } from '../components/ui/Decor';
import { ribbonWords } from '../data/portfolioData';
import './Ribbon.css';

function Track() {
  // Isi diulang 2x agar loop -50% mulus
  const items = [...ribbonWords, ...ribbonWords, ...ribbonWords, ...ribbonWords];
  return (
    <div className="ribbon__track">
      {[0, 1].map((copy) => (
        <ul key={copy} className="ribbon__group" aria-hidden={copy === 1 ? 'true' : undefined}>
          {items.map((w, i) => (
            <li key={`${w}-${i}`}>
              <span>{w}</span>
              <Sparkle size={28} className="ribbon__sep" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Ribbon() {
  return (
    <section className="ribbon" aria-label="Keahlian utama">
      <div className="ribbon__band ribbon__band--1"><Track /></div>
      <div className="ribbon__band ribbon__band--2"><Track /></div>
    </section>
  );
}

