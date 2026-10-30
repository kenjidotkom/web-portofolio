// Pusat aset gambar. Vite mengubah import ini menjadi URL yang di-hash.
import hero from './hero.svg';
import crest from './bg bunga di section 2.svg';
import contact from './contact.svg';

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

export { hero, crest, contact };

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

