import { useEffect, useState, useCallback } from 'react';

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

    // Jika browser tidak mendukung document.startViewTransition atau user memilih reduced motion
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

    const isToDark = nextTheme === 'dark';
    document.documentElement.setAttribute('data-theme-transition', isToDark ? 'to-dark' : 'to-light');

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      if (isToDark) {
        // Lingkaran gelap membesar keluar dari tombol hingga menutupi layar
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      } else {
        // Lingkaran gelap mengecil ke arah tombol hingga menampilkan tema terang di bawahnya
        document.documentElement.animate(
          {
            clipPath: [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-old(root)'
          }
        );
      }
    });

    transition.finished.finally(() => {
      document.documentElement.removeAttribute('data-theme-transition');
    });
  }, [theme]);
  return { theme, toggle };
}

