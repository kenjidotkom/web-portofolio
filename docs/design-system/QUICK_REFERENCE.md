# 🎨 Cheat Sheet & Quick Reference Design System
### Web Portofolio Choirun Nisa (Neo-Brutalist Playful / Gen Z)

Dokumen ini adalah ringkasan ringkas untuk memandu implementasi kode HTML/React/CSS agar 100% presisi sesuai desain Figma.

---

## 1. Identitas Visual
- **Gaya**: *Neo-brutalist playful / Gen Z*
- **Kontras Tinggi**: Dominasi Hitam (`#0c0c0c`) + Aksen Lime Neon (`#d9f20e`)
- **Bentuk Utama**: 
  - Tombol / Nav / Filter / Chip = **Pill** (`border-radius: 9999px`)
  - Kartu & Panel = Sudut membulat besar (`radius 24px` hingga `64px`)
- **Stiker Ilustrasi**: Efek outline putih 2.5px dengan drop shadow (`.character`)

---

## 2. Tipografi (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chewy&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Yellowtail&display=swap" rel="stylesheet">
```

| Font | Peran | Aturan |
|---|---|---|
| **Chewy** | Display Headings, Angka Statistik, Judul Proyek, Logo | Hanya weight 400. Dilarang di-bold! Tambahkan `font-synthesis: none;` |
| **Plus Jakarta Sans** | Body text, Tombol UI, Label, Form, Card description | Weight: 400, 500, 600, 700 |
| **Yellowtail** | Tanda tangan aksen ("Choirun Nisa") | Rotasi `-6deg`, warna lime, bayangan `0 2px 0 rgba(0,0,0,.6)` |

---

## 3. Palet Warna Utama

```css
/* Hitam & Putih */
--ink-900: #0c0c0c;     /* Background dark, teks light */
--ink-800: #161616;     /* Surface panel gelap */
--white:   #ffffff;     /* Teks dark, surface kartu light */
--cream-50:#f6f9dc;     /* Background light mode */

/* Warna Aksen */
--lime-400: #d9f20e;    /* Warna utama brand / tombol / border aksen */
--lime-300: #e6fb4a;    /* Hover tombol */
--lime-500: #bfd600;    /* Active / pressed tombol */
--olive-500:#98a60a;    /* Background section aksen (Services & Contact di dark mode) */

/* Aksen Ilustrasi & Cover Proyek */
--red-500:     #e8112d; /* Starburst merah, cover Visensa */
--orange-500:  #ff3a12; /* Panel ilustrasi Contact, cover AksesKota */
--pink-300:    #f7a8b8; /* Cover Rie.Charge */
--lavender-300:#aeb5f7; /* Cover Poly Board Games, panel foto About */
```

---

## 4. Sistem Tema (Dark & Light)

### Aturan Surface Ink (`data-surface="ink"`)
Beberapa bagian **SELALU GELAP** di kedua tema (dark maupun light):
1. **Nav (Floating)**
2. **Competitions** (`.competitions`)
3. **StyleSection** (Bento grid)
4. **Kartu Contact** (`.contact-card`)
5. **Footer** (`.footer`)

Di dalam elemen beratribut `data-surface="ink"`, teks selalu putih dan aksen selalu lime.

### Perbandingan Tema

| Elemen | Tema Dark (Default) | Tema Light |
|---|---|---|
| Background Halaman | `#0c0c0c` | `#f6f9dc` (krem) |
| Teks Bacaan | `#ffffff` / `rgba(255,255,255,.8)` | `#0c0c0c` / `rgba(12,12,12,.8)` |
| Services (Latar Section) | `#98a60a` (olive) | `#d9f20e` (lime) |
| Services (Kartu) | `#d9f20e` (lime) | `#ffffff` (putih) |
| Ribbon Pita 2 | Putih (teks hitam) | Hitam `#0c0c0c` (teks krem) |
| Filter Works Aktif | Fill lime (teks hitam) | Fill hitam (teks lime) |
| About (Kartu Utama) | `#171717` | `#ffffff` |

---

## 5. Blueprint 11 Seksi Halaman

1. **Section 0 - Floating Nav**:
   - `position: fixed; top: 16px;`
   - Lebar maks 1100px, radius pill, blur glass 12px
   - Logo: Lingkaran lime 40px + Sparkle hitam + wordmark "CHOIRUN"
   - Menu: Beranda, Proyek, Lomba, Resume, Tentang, Kontak
   - Tombol ThemeToggle (Matahari / Bulan) di ujung kanan

2. **Section 1 - Hero**:
   - Headline raksasa Chewy (120px): "Halo, Aku Choirun Nisa"
   - Karakter ilustrasi di dalam lingkaran lime 520px
   - Dock pill: Tombol Primary ("Lihat Proyek") + Ghost ("Unduh CV")
   - Rating 5 bintang + angka "3 tahun" + kutipan prinsip desain

3. **Section 2 - Services ("Fokus yang Aku Tekuni")**:
   - Latar aksen (olive di dark, lime di light) dengan radius atas 64px
   - Stat pill hitam: 6 Lomba UI/UX · 3 Proyek Klien · 2 Penghargaan
   - 3 Kartu Layanan: UI/UX Design, Front-End Dev, Visual & Motion (lengkap dengan tech badges Fg, HT, CS, JS, Re, dll.)

4. **Section 3 - Ribbon Marquee**:
   - Dua pita miring rotasi `-2deg` dan `+1.5deg` saling bertumpuk
   - Teks Chewy 48px berjalan infinite (UI/UX Design · Prototyping · User Flow · Front-End · Design System...)
   - Separator Sparkle merah 28px

5. **Section 4 - Works ("Proyek pilihan")**:
   - Filter pills: Semua · Klien · Lomba · PKL
   - Carousel cover kartu proyek dengan starburst & karakter
   - Panel detail proyek terpilih di bawahnya (judul, tag, tombol panah)

6. **Section 5 - Competitions ("Arena lomba UI/UX")**:
   - Panel gelap (`data-surface="ink"`) radius 56px dengan 14 garis waves dekoratif
   - 6 Kartu Kompetisi (Brainspace, ElderLink, BansosKita, AURORA, AgroSupply, APOLLO)
   - 2 Kartu Sertifikat / Prestasi (Finalis 5 Besar & Harapan 1)

7. **Section 6 - Experience ("Perjalanan Kerjaku")**:
   - Timeline vertikal dengan garis putus-putus (*dashed line*) di tengah
   - Node lingkaran 24px dua warna bergantian
   - Kolom kiri: Nama organisasi & tahun (rata kanan)
   - Kolom kanan: Jabatan & detail tanggung jawab

8. **Section 7 - StyleSection ("Cara Aku Mendesain")**:
   - Bento grid 5 kolom dalam panel gelap radius 56px
   - Sel 1: Kutipan "Users don't care about what's behind the screen..." (fill lime)
   - Sel 2: Proses "User flow dulu, pixel kemudian..."
   - Sel 3: Visual karakter dengan border lime 2px
   - Sel 4: Handoff "Desain yang bisa dibangun..." (fill olive)

9. **Section 8 - About + Skills**:
   - Kartu besar profil radius 56px
   - Panel foto lavender dengan radius asimetris (`40px 40px 40px 120px`)
   - Riwayat pendidikan (IPB University & SMK Karya Bahana Mandiri)
   - 4 Angka statistik
   - Grid 11 skill tiles (Figma, HTML, CSS, JS, React, Laravel, PS, AI, PR, AE, Blender)

10. **Section 9 - Contact**:
    - Section latar aksen dengan kartu hitam 48px
    - Form pesan (Nama, Email, Pesan, tombol "Kirim lewat email")
    - Panel ilustrasi oranye (`#ff3a12`) dengan tanda tangan Yellowtail "Choirun Nisa"

11. **Section 10 - Footer**:
    - Background hitam `#0c0c0c`, radius atas 56px
    - CTA besar "Yuk, bikin sesuatu bareng" + tombol "Hire me ↗"
    - 3 kolom: Brand & sosial media, Link navigasi, Kontak langsung
    - Copyright baris bawah © 2026

---

## 6. Efek Visual Khusus (CSS Snippet)

```css
/* Efek Outline Stiker Putih untuk Karakter */
.character-sticker {
  filter:
    drop-shadow(0 -2.5px 0 #ffffff)
    drop-shadow(0  2.5px 0 #ffffff)
    drop-shadow(-2.5px 0 0 #ffffff)
    drop-shadow( 2.5px 0 0 #ffffff)
    drop-shadow(0 12px 32px rgba(0, 0, 0, 0.3));
}

/* Glassmorphism Card */
.glass-panel {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

