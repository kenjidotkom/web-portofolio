# DESIGN SYSTEM — Web Portofolio Choirun Nisa

> Dokumen ini disusun dari analisis file Figma **DESIGN-WEB-PORTOFOLIO** (`fileKey: DaFIG0NwfcTlXoKFNaB3Tt`), bagian UI.
> Karakter visual: **neo-brutalist playful / Gen Z** — hitam pekat (`#0c0c0c`) + hijau lime neon (`#d9f20e`), bentuk pill & sudut membulat besar, ilustrasi karakter bergaya sticker (outline putih), tipografi display tebal-ceria (Chewy).

**Legenda penanda**

| Penanda | Arti |
|---|---|
| **[Figma]** | Nilai diambil langsung dari desain Figma |
| **[Disarankan]** | Penyesuaian/penambahan dari saya untuk merapikan dan memperkuat sistem (tidak ada di Figma). Boleh diubah. |

---

## Daftar Isi

1. [Sumber & Struktur Desain](#1-sumber--struktur-desain)
2. [Prinsip Desain](#2-prinsip-desain)
3. [Design Tokens](#3-design-tokens)
   - [3.1 Warna](#31-warna) · [3.2 Tipografi](#32-tipografi) · [3.3 Spacing](#33-spacing) · [3.4 Radius](#34-radius) · [3.5 Border](#35-border) · [3.6 Elevasi & Blur](#36-elevasi--blur) · [3.7 Motion](#37-motion) · [3.8 Z-index](#38-z-index)
4. [Sistem Tema (Light & Dark)](#4-sistem-tema-light--dark)
5. [Layout & Responsif](#5-layout--responsif)
6. [Komponen](#6-komponen)
7. [Pola Section Halaman](#7-pola-section-halaman)
8. [Aset Dekoratif & Ilustrasi](#8-aset-dekoratif--ilustrasi)
9. [Aksesibilitas & Kontras](#9-aksesibilitas--kontras)
10. [Implementasi (CSS Variables, Font, Toggle Tema)](#10-implementasi)
11. [Daftar Penyesuaian yang Saya Lakukan](#11-daftar-penyesuaian-yang-saya-lakukan)
12. [Checklist Pengembangan](#12-checklist-pengembangan)

---

## 1. Sumber & Struktur Desain

Halaman Figma "Page 1" berisi **3 frame utama**:

| Frame | Node | Lebar | Isi |
|---|---|---|---|
| Desain Portofolio Gen Z (**Dark**) | `4:2` | 1364 px | Halaman penuh tema gelap (tinggi ±9977 px) |
| List (kartu proyek) | `4:3084` | 3820 px | 6 kartu cover proyek (referensi carousel di Works) |
| Desain Portofolio Gen Z (**Light**) | `5:3624` | 1276 px | Halaman penuh tema terang (struktur identik) |

**Urutan section (atas → bawah):**

| # | Section | Node (dark) | Tinggi | Catatan |
|---|---|---|---|---|
| 0 | Nav (floating) | `4:3069` | 58 | Fixed `top: 16px`, selalu gelap di kedua tema |
| 1 | Hero | `4:6` | 957 | Headline 120 px, karakter dalam lingkaran lime |
| 2 | Services ("Fokus yang Aku Tekuni") | `4:2947` | 1050 | Background aksen, radius atas 64 |
| 3 | Ribbon (marquee miring) | `4:466` | 280 | 2 pita rotasi berlawanan |
| 4 | Works ("Proyek pilihan") | `4:2948` | 1132 | Filter + carousel + detail |
| 5 | Competitions ("Arena lomba UI/UX" + sertifikasi) | `4:2949` | 1762 | Panel gelap radius 56, grid 3×2 + 2 kartu sertifikat |
| 6 | Experience ("Perjalanan Kerjaku") | `4:2950` | 965 | Timeline vertikal 2 kolom |
| 7 | StyleSection ("Cara Aku Mendesain") | `4:2951` | 1057 | Bento grid 5 kolom |
| 8 | About + Skills & tools | `4:2489` | 1236 | Kartu profil + grid 4 kolom skill |
| 9 | Contact | `4:2953` | 977 | Form + panel ilustrasi |
| 10 | Footer | `4:3032` | 570 | CTA besar + 3 kolom |

---

## 2. Prinsip Desain

1. **Kontras tinggi, aksen tunggal.** Satu warna aksen (lime) + hitam. Merah/oranye/pink/lavender hanya untuk dekorasi & cover proyek.
2. **Bentuk lembut, ukuran berani.** Semua tombol/chip berbentuk pill; kartu radius 24–56 px; judul 72–120 px.
3. **Display ceria, body netral.** Chewy untuk judul & angka; Plus Jakarta Sans untuk semua teks bacaan; Yellowtail hanya untuk "tanda tangan".
4. **Ilustrasi sebagai identitas.** Karakter flat-vector dengan outline putih ala sticker ada di hampir setiap section.
5. **Dua tema, satu identitas.** Dark = hitam dominan, lime sebagai teks aksen. Light = krem `#f6f9dc` dominan, lime hanya sebagai **fill** (bukan teks) karena kontrasnya rendah di atas krem.
6. **Section "terbalik" menjaga ritme.** Beberapa section tetap gelap di tema terang (Competitions, StyleSection, Contact card, Footer, Nav) agar halaman punya ritme terang–gelap.

---

## 3. Design Tokens

### 3.1 Warna

#### A. Palet dasar (primitive) **[Figma]**

| Token | Hex | Peran |
|---|---|---|
| `ink-900` | `#0c0c0c` | Hitam utama: background dark, teks light, panel "ink" |
| `ink-800` | `#161616` | Surface besar dark (Competitions, StyleSection) |
| `ink-750` | `#171717` | Surface dark (About card, skill tile, chip) |
| `white` | `#ffffff` | Teks dark, surface light (About card, skill tile, card Services) |
| `cream-50` | `#f6f9dc` | Background halaman tema light, badge hero light, teks pita ke-2 light |
| `lime-400` | `#d9f20e` | **Warna brand/aksen utama** |
| `olive-500` | `#98a60a` | Background section aksen di tema dark (Services, Contact); cover "Project PKL" |
| `olive-600` | `#8d9c00` | Garis/outline ilustrasi pada versi olive |
| `red-500` | `#e8112d` | Starburst, Sparkle, separator pita, cover "Visensa" |
| `red-700` | `#9d0a20` | Stroke gelap pada ilustrasi merah |
| `orange-500` | `#ff3a12` | Panel ilustrasi Contact, cover "AksesKota" |
| `pink-300` | `#f7a8b8` | Cover "Rie.Charge" & kartu kompetisi |
| `lavender-300` | `#aeb5f7` | Cover "Poly Board Games", panel foto About |

#### B. Skala alpha teks semantik
- `--text-primary`: `#ffffff` (Dark) / `#0c0c0c` (Light)
- `--text-secondary`: `rgba(255,255,255,.80)` (Dark) / `rgba(12,12,12,.80)` (Light)
- `--text-tertiary`: `rgba(255,255,255,.68)` (Dark) / `rgba(12,12,12,.68)` (Light)
- `--text-placeholder`: `rgba(255,255,255,.50)` (Dark) / `rgba(12,12,12,.50)` (Light)

---

## 4. Sistem Tema & Tokens CSS Lengkap

Silakan merujuk pada file panduan tokens di `QUICK_REFERENCE.md` atau `c:\Users\Abdi Fashihul\Documents\TUGAS ADIK\TPL TUGAS KULIAH\DESIGNSYSTEM.md` untuk rincian lengkap 1083 baris.

