import { useEffect, useState, useCallback } from 'react';
import { flushSync } from 'react-dom';

const COLORS = { dark: '#0c0c0c', light: '#f6f9dc' };

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[theme]);
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
  }, [theme]);

  const toggle = useCallback((e) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const doc = document.documentElement;

    // Jika browser tidak mendukung document.startViewTransition atau user memilih reduced motion
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.setAttribute('data-theme', nextTheme);
      setTheme(nextTheme);
      return;
    }

    // Ambil koordinat pusat tombol yang diklik
    const rect = e?.currentTarget?.getBoundingClientRect?.();
    const x = rect ? rect.left + rect.width / 2 : (e?.clientX ?? window.innerWidth / 2);
    const y = rect ? rect.top + rect.height / 2 : (e?.clientY ?? 40);

    // Hitung radius terjauh dari tombol ke sudut layar
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    doc.style.setProperty('--toggle-x', `${Math.round(x)}px`);
    doc.style.setProperty('--toggle-y', `${Math.round(y)}px`);
    doc.style.setProperty('--toggle-r', `${Math.round(endRadius)}px`);

    const isToDark = nextTheme === 'dark';
    doc.setAttribute('data-theme-transition', isToDark ? 'to-dark' : 'to-light');

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        doc.setAttribute('data-theme', nextTheme);
        setTheme(nextTheme);
      });
    });

    transition.finished.finally(() => {
      doc.removeAttribute('data-theme-transition');
    });
  }, [theme]);
  return { theme, toggle };
}

