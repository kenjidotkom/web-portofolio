# 🚀 Website Portofolio Pribadi (React.js + Vite)

Selamat datang di proyek website portofolio pribadi Anda! Proyek ini telah disiapkan menggunakan arsitektur modern **React 18** dan bundler super cepat **Vite**, dengan desain antarmuka gelap (*modern dark theme*), efek *glassmorphism*, responsif di ponsel/desktop, dan sangat mudah untuk dikustomisasi.

---

## 📁 Struktur Folder Proyek

```text
portofolio/
├── index.html                   # Halaman HTML utama & konfigurasi Google Fonts
├── package.json                 # Daftar dependensi React, Vite, dan icon library
├── vite.config.js               # Konfigurasi server Vite
├── .gitignore                   # Mengabaikan node_modules dan file build
├── README.md                    # Panduan lengkap penggunaan proyek
├── public/
│   └── vite.svg                 # Favicon dan aset statis
└── src/
    ├── main.jsx                 # Titik masuk utama aplikasi React (Entry Point)
    ├── App.jsx                  # Komponen induk yang menggabungkan seluruh seksi
    ├── index.css                # Desain CSS modern, variabel warna, dan responsivitas
    ├── data/
    │   └── portfolioData.js     # ⭐ PUSAT DATA: Cukup edit file ini untuk mengubah isi web!
    └── components/
        ├── Navbar.jsx           # Navigasi sticky dengan tombol menu HP responsif
        ├── Hero.jsx             # Bagian sambutan utama, foto profil, dan tombol aksi
        ├── About.jsx            # Bagian tentang saya & riwayat pendidikan
        ├── Skills.jsx           # Tampilan keahlian teknis (Tech Stack) dengan progress bar
        ├── Projects.jsx         # Galeri proyek dengan filter kategori & link demo/kode
        ├── Contact.jsx          # Informasi kontak & formulir pesan interaktif
        └── Footer.jsx           # Catatan hak cipta & tombol kembali ke atas
```

---

## 🛠️ Langkah Menjalankan Proyek

Pastikan di komputer Anda sudah terpasang **Node.js** (versi 18 ke atas disarankan).

### 1. Buka Terminal / PowerShell
Buka terminal Anda di direktori folder ini:
```bash
cd "c:\Users\Abdi Fashihul\Documents\TUGAS ADIK\TPL TUGAS KULIAH\portofolio"
```

### 2. Install Seluruh Dependensi
Jalankan perintah berikut untuk mengunduh dan menginstall React serta library pendukung:
```bash
npm install
```
*(Atau jika menggunakan pnpm: `pnpm install` / yarn: `yarn install`)*

### 3. Jalankan Server Development (Lokal)
Jalankan perintah ini untuk memulai website di browser Anda:
```bash
npm run dev
```

Setelah dijalankan, buka tautan yang muncul di terminal (biasanya **`http://localhost:3000`** atau `http://localhost:5173`).

---

## 🎨 Cara Mengubah Isi Portofolio (Kustomisasi)

Anda **tidak perlu repot mengedit kode tampilan JSX** yang rumit jika hanya ingin mengubah konten portofolio Anda. Cukup buka satu file:

👉 **[`src/data/portfolioData.js`](file:///c:/Users/Abdi%20Fashihul/Documents/TUGAS%20ADIK/TPL%20TUGAS%20KULIAH/portofolio/src/data/portfolioData.js)**

Di file tersebut, Anda dapat langsung mengubah:
1. **Nama & Peran**: Ubah `name`, `role`, `headline`, dan `status`.
2. **Deskripsi Singkat**: Ubah paragraf `aboutLong`.
3. **Foto Profil**: Ganti link `avatarUrl` dengan URL foto Anda atau letakkan foto di folder `public/` lalu gunakan path `/nama-foto.jpg`.
4. **Media Sosial**: Ganti link GitHub, LinkedIn, Instagram, dan Email Anda.
5. **Keahlian (Skills)**: Tambahkan teknologi baru, ikon, dan persentase penguasaan Anda.
6. **Daftar Proyek**: Tambahkan judul tugas kuliah, deskripsi, tag teknologi, gambar tangkapan layar, dan link repository GitHub Anda.
7. **Pendidikan**: Sesuaikan riwayat sekolah/kuliah Anda.

---

## 📦 Cara Membangun untuk Hosting (Production Build)

Jika website sudah selesai dan Anda ingin mengunggahnya ke hosting seperti **Vercel**, **Netlify**, atau **GitHub Pages**, jalankan:

```bash
npm run build
```

Hasil file siap hosting akan otomatis masuk ke folder `dist/`.
Folder `dist/` ini dapat langsung di-deploy secara instan ke platform web hosting pilihan Anda!

