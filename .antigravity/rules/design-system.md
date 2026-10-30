# ATURAN & PANDUAN DESIGN SYSTEM PORTOFOLIO CHOIRUN NISA

Dokumen ini adalah aturan wajib (*workspace rule*) bagi AI Assistant (Antigravity) saat mengimplementasikan atau memodifikasi kode website portofolio ini.

## 1. Identitas Visual & Karakter
- **Tema**: Neo-brutalist playful / Gen Z.
- **Warna Utama**: Hitam pekat (`#0c0c0c`) + Hijau Lime Neon (`#d9f20e`).
- **Tema Light**: Krem (`#f6f9dc`) sebagai background utama; lime hanya sebagai fill, bukan teks bacaan (kontras WCAG).
- **Surface Inverse (`data-surface="ink"`)**: Nav, Competitions, StyleSection, Kartu Contact, dan Footer **SELALU GELAP** di kedua tema.
- **Bentuk Utama**: Tombol & badge selalu berbentuk Pill (`border-radius: 9999px`), kartu memiliki radius membulat besar (24px - 56px).
- **Ilustrasi**: Gaya stiker dengan multi drop-shadow putih (outline stiker) + flat vector.

## 2. Tipografi Wajib
1. **Chewy (Google Fonts)**: Untuk Display Heading (H1, H2, H3, angka statistik, judul proyek, wordmark). Chewy hanya memiliki weight 400. Jangan diberi `font-weight: 700` atau faux bold (`font-synthesis: none`).
2. **Plus Jakarta Sans (Google Fonts)**: Untuk semua body text, tombol UI, deskripsi, chip, form input. Weights: 400, 500, 600, 700.
3. **Yellowtail (Google Fonts)**: Khusus tanda tangan "Choirun Nisa", rotasi -6deg, warna lime.

## 3. Skala Warna (CSS Variables)
- Background Dark: `#0c0c0c`
- Background Light: `#f6f9dc`
- Accent Lime: `#d9f20e` (Hover: `#e6fb4a`, Active: `#bfd600`)
- Accent Olive (Services/Contact di Dark): `#98a60a`
- Surface Dark: `#161616` / `#171717`
- Surface Light: `#ffffff`
- Orange Panel: `#ff3a12`
- Red Accent / Starburst: `#e8112d`
- Lavender: `#aeb5f7`
- Pink: `#f7a8b8`

## 4. Urutan 11 Seksi Halaman (Dari Atas ke Bawah)
0. **Nav (Floating)**: Fixed `top: 16px`, pill shape, logo Sparkle + "CHOIRUN", nav links, ThemeToggle.
1. **Hero**: Headline 120px ("Halo, Aku Choirun Nisa"), lingkaran lime 520px + karakter, dock buttons (Primary + Ghost), 5 bintang rating + "3 tahun".
2. **Services ("Fokus yang Aku Tekuni")**: 3 kartu (UI/UX Design, Front-End Dev, Visual & Motion) dengan lencana tech, stat pill (6 Lomba, 3 Proyek, 2 Penghargaan).
3. **Ribbon (Marquee)**: 2 pita bertumpuk miring (-2deg & +1.5deg) animasi infinite marquee bolak-balik.
4. **Works ("Proyek pilihan")**: Filter pills (Semua, Klien, Lomba, PKL), carousel cover proyek (Speedlust, Rie.Charge, Poly Board Games, Visensa, AksesKota, Project PKL) + panel detail.
5. **Competitions ("Arena lomba UI/UX")**: Panel gelap radius 56px, grid 6 kartu kompetisi (Brainspace, ElderLink, BansosKita, AURORA, AgroSupply, APOLLO) + 2 kartu sertifikat / prestasi.
6. **Experience ("Perjalanan Kerjaku")**: Timeline vertikal garis dashed dengan node 2 kolom (kiri: organisasi/tahun, kanan: jabatan/tugas).
7. **StyleSection ("Cara Aku Mendesain")**: Bento grid 5 kolom (Kutipan "Users don't care...", Prinsip "User flow dulu...", Visual sel border lime, Handoff "Desain yang bisa dibangun...").
8. **About + Skills**: Kartu profil radius 56px (panel foto lavender radius khusus, bio, riwayat pendidikan IPB University & SMK, 4 stat counter, CTA Unduh CV & Hubungi aku) + 11 skill tiles.
9. **Contact**: Section aksen olive/lime, kartu gelap radius 48px, form kontak (nama, email, pesan) + panel ilustrasi oranye (`#ff3a12`) dengan tanda tangan Yellowtail.
10. **Footer**: Headline Chewy 72px "Yuk, bikin sesuatu bareng", tombol "Hire me ↗", 3 kolom info (Brand, Navigasi, Kontak), hak cipta (C) 2026.

## 5. Sumber Acuan Lengkap
File acuan lengkap terletak di:
`docs/design-system/DESIGNSYSTEM.md` atau `c:\Users\Abdi Fashihul\Documents\TUGAS ADIK\TPL TUGAS KULIAH\DESIGNSYSTEM.md`.
Setiap kali mengedit komponen React dan CSS di repo ini, pastikan selalu mencocokkan token, ukuran font, radius, dan warna dengan aturan ini.

