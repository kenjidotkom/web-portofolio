import { useEffect, useRef, useState } from 'react';

/**
 * Angka yang menghitung naik saat masuk layar.
 * value: number atau string angka (mis. 6, "4").
 */
export default function CountUp({ value, duration = 1200, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null);
  const target = typeof value === 'number' ? value : parseInt(value, 10);
  const isNumeric = !Number.isNaN(target);
  const [display, setDisplay] = useState(isNumeric ? target : value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isNumeric) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          let start = null;
          const tick = (t) => {
            if (start === null) start = t;
            const p = Math.min((t - start) / duration, 1);
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setDisplay(Math.round(eased * target));
            if (p < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              setDisplay(target);
            }
          };
          setDisplay(0);
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, isNumeric, hasAnimated]);

  if (!isNumeric) return <span className={`count-up ${className}`}>{value}</span>;

  return (
    <span ref={ref} className={`count-up ${className}`.trim()}>
      {prefix}{display}{suffix}
    </span>
  );
}
