import { workCases } from './caseStudiesWorks';
import { compCases } from './caseStudiesComps';

export const caseStudies = [...workCases, ...compCases];

export const getCase = (slug) => caseStudies.find((c) => c.slug === slug);

/** Daftar studi kasus lain untuk bagian “Proyek lainnya”. */
export const otherCases = (slug, n = 4) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const rest = [...caseStudies.slice(i + 1), ...caseStudies.slice(0, Math.max(i, 0))];
  return rest.slice(0, n);
};

