import { useEffect, useRef } from 'react';

/**
 * Transisi antar-section berbasis scroll:
 * - Saat masuk: section naik, membesar, dan fade-in dari kondisi mengecil.
 * - Saat keluar ke atas: section sedikit mengecil & memudar (efek kedalaman).
 * Dihitung langsung via rAF + style (tanpa re-render React) supaya mulus.
 */
export default function SectionFx({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let raf = 0;
    const clamp = (v) => Math.min(Math.max(v, 0), 1);
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      // masuk: 0 saat top section di dasar layar -> 1 saat top di 35% tinggi layar
      const enter = ease(clamp((vh - r.top) / (vh * 0.65)));
      // keluar: 0 saat bottom section >= 45% layar -> 1 saat bottom di atas layar
      const exit = clamp((vh * 0.45 - r.bottom) / (vh * 0.45));

      const y = (1 - enter) * 90;
      const scale = (0.9 + 0.1 * enter) * (1 - 0.05 * exit);
      const opacity = (0.1 + 0.9 * enter) * (1 - 0.6 * exit);
      const radius = (1 - enter) * 56;

      if (enter >= 0.999 && exit <= 0.001) {
        el.style.transform = '';
        el.style.opacity = '';
        el.style.clipPath = '';
        return;
      }
      el.style.transformOrigin = exit > 0 ? 'center bottom' : 'center top';
      el.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.clipPath = radius > 0.5 ? `inset(0 round ${radius}px)` : '';
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`section-fx ${className}`.trim()}>
      {children}
    </div>
  );
}

