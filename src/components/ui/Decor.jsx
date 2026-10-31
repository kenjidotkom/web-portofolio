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
  const lines = [
    // Bagian Atas: Kurva mengalir di bawah header & di belakang baris kartu 1
    { d: "M-20 80 C 200 90, 340 140, 500 200 C 660 260, 900 240, 1160 170 C 1280 135, 1380 145, 1460 160", stroke: "rgba(255,255,255,0.08)", w: 1.8 },
    { d: "M-20 140 C 220 150, 360 210, 520 280 C 680 350, 920 320, 1180 240 C 1300 200, 1400 210, 1460 230", stroke: "rgba(217,242,14,0.30)", w: 2.2 },
    { d: "M-20 210 C 240 230, 380 300, 540 370 C 700 440, 960 400, 1200 320 C 1320 280, 1400 290, 1460 310", stroke: "rgba(180,205,20,0.25)", w: 2.0 },
    { d: "M 1180 -20 C 1230 80, 1310 140, 1460 170", stroke: "rgba(217,242,14,0.22)", w: 2.0 },
    { d: "M 1280 -20 C 1320 50, 1370 95, 1460 120", stroke: "rgba(255,255,255,0.07)", w: 1.8 },

    // Bagian Tengah: Kurva topografi melintang di antara baris kartu 1 & baris kartu 2
    { d: "M-20 440 C 240 480, 440 530, 680 520 C 920 510, 1160 430, 1460 400", stroke: "rgba(180,205,20,0.20)", w: 1.8 },
    { d: "M-20 520 C 260 560, 480 610, 720 590 C 960 570, 1200 490, 1460 460", stroke: "rgba(217,242,14,0.28)", w: 2.2 },
    { d: "M-20 600 C 280 645, 520 685, 760 660 C 1000 635, 1220 560, 1460 530", stroke: "rgba(255,255,255,0.08)", w: 1.8 },

    // Bagian Bawah: Kurva di bawah baris kartu 2 & membingkai Sertifikasi & Prestasi
    { d: "M-20 860 C 240 910, 480 940, 740 910 C 1000 880, 1240 820, 1460 790", stroke: "rgba(217,242,14,0.28)", w: 2.2 },
    { d: "M-20 940 C 260 990, 520 1015, 780 980 C 1040 945, 1260 885, 1460 855", stroke: "rgba(255,255,255,0.08)", w: 1.8 },
    { d: "M-20 1100 C 280 1160, 560 1180, 840 1130 C 1100 1080, 1280 1050, 1460 1070", stroke: "rgba(217,242,14,0.30)", w: 2.2 },
    { d: "M-20 1280 C 260 1340, 540 1330, 820 1260 C 1080 1190, 1260 1190, 1460 1230", stroke: "rgba(180,205,20,0.24)", w: 2.0 },

    // Sudut Kanan-Bawah: Lingkaran konsentris kontur
    { d: "M 1120 1820 C 1170 1710, 1260 1630, 1460 1570", stroke: "rgba(217,242,14,0.26)", w: 2.2 },
    { d: "M 1220 1820 C 1260 1745, 1330 1690, 1460 1650", stroke: "rgba(255,255,255,0.09)", w: 1.8 },
    { d: "M 1320 1820 C 1350 1780, 1400 1750, 1460 1730", stroke: "rgba(217,242,14,0.20)", w: 1.8 },

    // Sudut Kiri-Bawah: Lingkaran kontur
    { d: "M-20 1620 C 120 1650, 220 1715, 280 1820", stroke: "rgba(217,242,14,0.24)", w: 2.0 },
    { d: "M-20 1720 C 80 1740, 140 1775, 180 1820", stroke: "rgba(255,255,255,0.08)", w: 1.8 },
  ];

  return (
    <svg aria-hidden="true" className={`decor ${className}`} viewBox="0 0 1440 1800" preserveAspectRatio="none" fill="none">
      {lines.map((l, i) => (
        <path
          key={i}
          d={l.d}
          stroke={l.stroke}
          strokeWidth={l.w}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

