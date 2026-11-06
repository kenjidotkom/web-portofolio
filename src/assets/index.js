// Pusat aset gambar. Vite mengubah import ini menjadi URL yang di-hash.
import hero from './hero.svg';
import crest from './bg bunga di section 2.svg';
import contact from './contact.svg';
import about from './Reveal.svg';

import caraDesain1 from './cara desain 1.svg';
import caraDesain2 from './cara desain 2.svg';
import caraDesain3 from './cara desain 3.svg';
import caraDesain4 from './cara desain 4.svg';

import speedlustGarageChar from './speedlust-garage.svg';
import rieChargeChar from './rie-charge.svg';
import polyBoardGamesChar from './poly-board-games.svg';
import visensaChar from './visensa.svg';
import akseskotaChar from './akseskota.svg';
import projectPklChar from './project-pkl.svg';

import brainspaceChar from './brainspace.svg';
import elderlinkChar from './elderlink.svg';
import bansoskitaChar from './bansoskita.svg';
import auroraChar from './aurora.svg';
import agrosupplyChar from './agrosupply.svg';
import apolloChar from './apollo.svg';

// Cover project dari folder `./covers/`
import coverSpeedlustGarage from './covers/speedlustgarage.png';
import coverRieCharge from './covers/Rie.Charge.png';
import coverPolyBoardGames from './covers/poly-board-games.png';
import coverVisensa from './covers/visensa.png';
import coverAksesKota from './covers/AksesKota.png';
import coverPkl from './covers/PKL.png';
import coverAksaraLensa from './covers/AksaraLensa.png';
import coverNaik from './covers/NAIK.png';

import coverBrainspace from './covers/Brainspace.png';
import coverElderLink from './covers/ElderLink.png';
import coverBansosKita from './covers/BansosKita.png';
import coverAurora from './covers/AURORA.png';
import coverAgroSupply from './covers/AgroSupply.png';
import coverApollo from './covers/APOLLO.png';

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

/** Cover proyek utama dari folder `src/assets/cover project/`, dikunci dengan `slug` di portfolioData.js */
export const workCovers = {
  'speedlust-garage': coverSpeedlustGarage,
  'rie-charge': coverRieCharge,
  'poly-board-games': coverPolyBoardGames,
  visensa: coverVisensa,
  akseskota: coverAksesKota,
  'project-pkl': coverPkl,
  aksaralensa: coverAksaraLensa,
  naik: coverNaik,
};

/** Cover kartu kompetisi dari folder `src/assets/cover project/`, dikunci dengan `slug` di portfolioData.js */
export const compCovers = {
  brainspace: coverBrainspace,
  elderlink: coverElderLink,
  bansoskita: coverBansosKita,
  aurora: coverAurora,
  agrosupply: coverAgroSupply,
  apollo: coverApollo,
};

/** Ilustrasi karakter vektor untuk avatar persona di halaman studi kasus */
export const charCovers = {
  'speedlust-garage': speedlustGarageChar,
  'rie-charge': rieChargeChar,
  'poly-board-games': polyBoardGamesChar,
  visensa: visensaChar,
  akseskota: akseskotaChar,
  'project-pkl': projectPklChar,
  aksaralensa: caraDesain1,
  naik: caraDesain3,
  brainspace: brainspaceChar,
  elderlink: elderlinkChar,
  bansoskita: bansoskitaChar,
  aurora: auroraChar,
  agrosupply: agrosupplyChar,
  apollo: apolloChar,
};

