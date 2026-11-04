import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Garis neon progress scroll yang menempel di paling atas browser (di luar navbar).
 * Di-render lewat portal ke <body> agar tidak terpengaruh transform/blur navbar.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(Math.max(window.scrollY / total, 0), 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
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

  return createPortal(
    <div className="scroll-progress" role="progressbar" aria-label="Progress scroll halaman">
      <div className="scroll-progress__bar" ref={barRef} />
    </div>,
    document.body
  );
}
