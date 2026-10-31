// Pusat aset gambar. Vite mengubah import ini menjadi URL yang di-hash.
import hero from './hero.svg';
import crest from './bg bunga di section 2.svg';
import contact from './contact.svg';
import about from './Reveal.svg';

import caraDesain1 from './cara desain 1.svg';
import caraDesain2 from './cara desain 2.svg';
import caraDesain3 from './cara desain 3.svg';
import caraDesain4 from './cara desain 4.svg';

import speedlustGarage from './speedlust-garage.svg';
import rieCharge from './rie-charge.svg';
import polyBoardGames from './poly-board-games.svg';
import visensa from './visensa.svg';
import akseskota from './akseskota.svg';
import projectPkl from './project-pkl.svg';

import brainspace from './brainspace.svg';
import elderlink from './elderlink.svg';
import bansoskita from './bansoskita.svg';
import aurora from './aurora.svg';
import agrosupply from './agrosupply.svg';
import apollo from './apollo.svg';

import uiuxDesign from './uiux design.svg';
import frontEnd from './front-end.svg';

import certFinalis5Besar from './cert-finalis-5-besar.jpg';
import certHarapan1 from './cert-harapan-1.jpg';
import pdfSoftDev from './SoftDev_Choirun Nisa Putri Pratini .pdf';
import pdfWebDev from './WebDev_Choirun Nisa Putri Pratini .pdf';
import cvPdf from './CV_Choirun Nisa Putri Pratini.pdf';
import heroPhoto from './hero-photo.png';

export { hero, crest, contact, about, caraDesain1, caraDesain2, caraDesain3, caraDesain4, uiuxDesign, frontEnd, certFinalis5Besar, certHarapan1, pdfSoftDev, pdfWebDev, cvPdf, heroPhoto };

export const certCovers = {
  'finalis-5-besar': certFinalis5Besar,
  'harapan-1': certHarapan1,
};

export const certPdfs = {
  'finalis-5-besar': pdfSoftDev,
  'harapan-1': pdfWebDev,
};

/** Karakter cover proyek, dikunci dengan `slug` di portfolioData.js */
export const workCovers = {
  'speedlust-garage': speedlustGarage,
  'rie-charge': rieCharge,
  'poly-board-games': polyBoardGames,
  visensa,
  akseskota,
  'project-pkl': projectPkl,
};

/** Ilustrasi kartu kompetisi, dikunci dengan `slug` di portfolioData.js */
export const compCovers = {
  brainspace,
  elderlink,
  bansoskita,
  aurora,
  agrosupply,
  apollo,
};

