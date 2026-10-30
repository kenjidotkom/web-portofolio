/* Aset dekoratif (DESIGNSYSTEM §8) — semua aria-hidden */

function starPoints(spikes, outer, inner) {
  const pts = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * i - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

const STARBURST = starPoints(10, 50, 34);

export function Starburst({ size = 112, color = 'var(--red-500)', className = '', style }) {
  return (
    <svg aria-hidden="true" className={`decor ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style}>
      <polygon points={STARBURST} fill={color} />
    </svg>
  );
}

export function Sparkle({ size = 24, color = 'var(--red-500)', className = '', style }) {
  return (
    <svg aria-hidden="true" className={`decor ${className}`} width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 0c.8 6.6 4.8 10.6 12 12-7.2 1.4-11.2 5.4-12 12-.8-6.6-4.8-10.6-12-12C7.2 10.6 11.2 6.6 12 0z" fill={color} />
    </svg>
  );
}

export function Rays({ size = 36, className = '', style }) {
  return (
    <svg aria-hidden="true" className={`decor ${className}`} width={size} height={size} viewBox="0 0 36 36" style={style}
      fill="none" stroke="var(--outline-strong)" strokeWidth="3" strokeLinecap="round">
      <path d="M6 14 L12 18" /><path d="M18 4 L18 11" /><path d="M30 14 L24 18" />
    </svg>
  );
}

export function Waves({ className = '' }) {
  const paths = Array.from({ length: 14 }, (_, i) => {
    const y = 20 + i * 30;
    return `M0 ${y} C 300 ${y - 60}, 600 ${y + 60}, 900 ${y} S 1300 ${y - 40}, 1445 ${y + 10}`;
  });
  return (
    <svg aria-hidden="true" className={`decor ${className}`} viewBox="0 0 1445 451" preserveAspectRatio="none" fill="none">
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} stroke="rgba(255,255,255,0.07)" strokeWidth="2.6" />
          {i % 4 === 0 && <path d={d} stroke="rgba(217,242,14,0.2)" strokeWidth="3.5" />}
        </g>
      ))}
    </svg>
  );
}

