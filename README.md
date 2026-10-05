# 💖 Panduan Penggunaan & Kustomisasi Website Ulang Tahun Ke-23

Website ini adalah hadiah digital interaktif, romantis, dan elegan yang dibuat khusus untuk merayakan ulang tahun ke-23 pasangan. Dibuat murni menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa ketergantungan framework pihak ketiga yang berat.

---

## 🚀 1. Cara Menjalankan Website

Website ini dapat dijalankan langsung di komputer / laptop Anda tanpa perlu instalasi rumit:

### Opsi A: Buka Langsung (Paling Mudah)
1. Buka folder proyek `d:\Pemrograman\SAYANGKU`.
2. Klik dua kali pada file **`index.html`**.
3. Website akan otomatis terbuka di browser default Anda.

### Opsi B: Menggunakan Local Server (Direkomendasikan untuk Mikrofon & Audio)
Jika menggunakan VS Code, Anda bisa klik kanan `index.html` lalu pilih **Open with Live Server**, atau jalankan perintah python:
```bash
python -m http.server 8000
```
Lalu buka browser di `http://localhost:8000`. Menjalankan melalui local server memastikan fitur izin mikrofon berjalan lancar sesuai standar keamanan browser modern.

---

## ⚙️ 2. Cara Mengganti Nama

Semua pengaturan nama telah disatukan di dalam panel konfigurasi di bagian paling atas file **`script.js`**:

Buka file [script.js](file:///d:/Pemrograman/SAYANGKU/script.js) lalu ubah baris 16–20:

```javascript
const birthdayConfig = {
    // Ganti dengan nama lengkap dan panggilan pacar Anda
    partnerName: "Nama Lengkap Pacar",
    partnerNickname: "Panggilan Sayang",
    yourName: "Nama Anda",
    ...
};
```
Perubahan nama ini akan otomatis diperbarui di seluruh bagian website (Navbar, Hero, Surat, Footer, dsb).

---

## 📸 3. Cara Mengganti Foto

Struktur folder foto terletak di: `assets/photos/`

1. **Foto Utama (Hero):**
   - Simpan foto terbaik pacar Anda dengan nama `hero.jpg` di folder `assets/photos/`.
2. **Foto-Foto Kenangan Galeri (8 Foto):**
   - Simpan foto-foto momen indah Anda berdua dengan nama:
     - `photo-01.jpg`
     - `photo-02.jpg`
     - `photo-03.jpg`
     - `photo-04.jpg`
     - `photo-05.jpg`
     - `photo-06.jpg`
     - `photo-07.jpg`
     - `photo-08.jpg`
   - Anda juga dapat mengganti judul dan cerita masing-masing foto di bagian `memories` pada [script.js](file:///d:/Pemrograman/SAYANGKU/script.js).

> **Catatan:** Jika belum memasukkan foto, website telah dilengkapi dengan *auto-fallback SVG placeholder* romantis sehingga tampilan tetap indah dan tidak ada gambar rusak.

---

## 🎵 4. Cara Mengganti Musik

Struktur folder musik terletak di: `assets/music/`

1. Siapkan file lagu romantis favorit kalian berdua dalam format `.mp3`.
2. Beri nama file: **`birthday-song.mp3`**.
3. Letakkan di folder `assets/music/birthday-song.mp3`.
4. Ubah judul lagu yang tampil di pemutar musik pada [script.js](file:///d:/Pemrograman/SAYANGKU/script.js):
   ```javascript
   musicTrackTitle: "Judul Lagu Favoritmu 🎵",
   ```

> **Fallback Cerdas:** Jika file MP3 belum dimasukkan, website secara otomatis memutar alunan nada *music box* sintetis yang menenangkan menggunakan Web Audio API, sehingga momen kejutan tetap diiringi alunan manis.

---

## 💌 5. Cara Mengedit Surat Cinta (Love Letter)

Buka file [script.js](file:///d:/Pemrograman/SAYANGKU/script.js) pada bagian:

```javascript
letterPersonalMessage: `Tuliskan isi pesan pribadi, curahan hati, atau kenangan indahmu untuknya di sini...`,
```
Teks surat utama pada [index.html](file:///d:/Pemrograman/SAYANGKU/index.html) bagian `#letter` juga dapat disesuaikan jika ingin mengubah salam pembuka atau penutup.

---

## 🌷 6. Cara Mengedit Doa (Wish / Prayer)

Buka file [index.html](file:///d:/Pemrograman/SAYANGKU/index.html) pada bagian `<section id="wish">` atau sesuaikan variabel `wishPersonalMessage` di [script.js](file:///d:/Pemrograman/SAYANGKU/script.js) untuk menambahkan doa-doa terbaik yang ingin dipanjatkan untuk usianya yang ke-23.

---

## 💖 7. Cara Mengedit 23 Things About You

Pada [script.js](file:///d:/Pemrograman/SAYANGKU/script.js), cari array `twentyThreeThings`. Anda dapat mengubah 23 alasan cinta tersebut:

```javascript
twentyThreeThings: [
    "1. Caramu tersenyum ketika pertama kali melihatku.",
    "2. Kebiasaan lucumu saat sedang fokus atau bingung.",
    ...
    "23. Dan yang terpenting: hadirnya kamu di duniaku adalah hadiah terindah."
]
```
Masing-masing kartu dapat diklik dan dibalik (3D flip effect) oleh pasangan Anda dengan penghitung progres interaktif.

---

## ⏳ 8. Cara Mengedit Garis Waktu Kenangan (Timeline)

Pada [script.js](file:///d:/Pemrograman/SAYANGKU/script.js), cari bagian `timeline`:

```javascript
timeline: [
    {
        date: "Tanggal / Momen",
        title: "Judul Babak Cerita",
        desc: "Cerita singkat tentang apa yang terjadi pada momen itu..."
    },
    ...
]
```

---

## 📅 9. Cara Mengatur Tanggal Ulang Tahun

Format tanggal ulang tahun ada di [script.js](file:///d:/Pemrograman/SAYANGKU/script.js):

```javascript
birthday: "2026-10-06T00:00:00",
```
Logika pintar otomatis:
- **Sebelum tanggal tersebut:** Menampilkan hitung mundur real-time (hari, jam, menit, detik).
- **Tepat di tanggal 6 Oktober 2026:** Menampilkan ucapan perayaan *"It's Your Day! 🎉"*.
- **Setelah tanggal tersebut:** Menampilkan pesan *"23 Years Of You ❤️"*.

---

## 🎤 10. Cara Mengaktifkan Fitur Tiup Lilin (Microphone)

Di bagian kue ulang tahun (Virtual Birthday Cake):
1. Klik tombol **`AKTIFKAN MIKROFON 🎤`**.
2. Browser akan memunculkan jendela *pop-up*: *"izinkan akses mikrofon"* (klik **Allow / Izinkan**).
3. Tarik napas lalu tiup ke arah mikrofon perangkat HP/Laptop Anda.
4. Ketika level tiupan terdeteksi:
   - 23 lilin akan padam satu per satu dengan efek asap (*smoke animation*).
   - Suara denting merdu berbunyi.
   - Hujan konfeti meriah muncul.
   - Kotak ucapan selamat ulang tahun terbuka.

> **Cadangan Tanpa Mikrofon:** Jika mikrofon tidak tersedia atau pengguna menolak izin, tersedia tombol **`TIUP LILIN SEKARANG 💨`** sehingga semua fitur tetap dapat dinikmati 100%.

---

## 🌐 11. Browser yang Direkomendasikan

- **Google Chrome** (Direkomendasikan di Android, Windows, Mac)
- **Safari** (iOS / iPhone / iPad / macOS)
- **Microsoft Edge** (Windows)
- **Mozilla Firefox**

Semua browser modern di atas mendukung penuh Web Audio API, Canvas Confetti, dan CSS 3D Animations.

---

## 🎁 Rahasia Tambahan (Easter Egg)

Di bagian paling bawah website (Footer), terdapat ikon hati ❤️ kecil:
- Jika diklik **5 kali berturut-turut**, sebuah pesan rahasia tersembunyi manis akan muncul dengan ledakan konfeti!
