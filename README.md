# 🌸 The Romantic Floral Storybook — Hadiah Ulang Tahun Ke-23

Website ini telah dimodernisasi menjadi **Storybook Sinematik Interaktif 6 Babak (Mobile-First)** dengan elemen bunga-bunga mekar (*botanical blooms*), kelopak bunga berjatuhan (*floating rose & sakura petals*), dan terintegrasi langsung dengan lagu **Sal Priadi — *Serta Mulia*** yang dimulai tepat di detik **44** (*Reff*).

---

## ✨ 6 Babak Pengalaman Sinematik

1. **Chapter 1: The Intimate Prologue (Bisikan Pembuka)**
   - Layar hening bernuansa *warm espresso* dengan rintikan kelopak bunga yang melayang lembut.
   - Kalimat puitis muncul perlahan (*whisper fade-in*).
   - Tombol sentuh denyut nadi: *"Pasang earphone-mu, lalu sentuh lingkaran untuk membuka 🌸"*.
2. **Chapter 2: The Melody & You (Reff Sal Priadi Bergema)**
   - Saat disentuh, musik langsung mengalun tepat di bagian **Reff (0:44)** dengan efek *audio fade-in volume*.
   - Foto pacar dengan efek gerak sinematik (*Ken Burns zoom*), kutipan lirik lagu *Serta Mulia*, dan ornamen sudut bunga mawar.
3. **Chapter 3: Little Polaroid Moments (Tumpukan Foto Polaroid)**
   - Menghilangkan galeri grid panjang yang melelahkan. Diganti dengan **Polaroid Stack Interaktif**.
   - Cukup sentuh kartu foto di HP untuk menggeser (*swipe*) ke lembaran momen manis berikutnya.
4. **Chapter 4: Things I Adore (Hal yang Paling Dikagumi)**
   - 4 poin paling tulus dan berkesan yang dibalut kartu bunga elegan.
5. **Chapter 5: The 23rd Candle & Flower Wish (Tiup Lilin Estetik & Doa)**
   - Angka 23 berbingkai karangan bunga melingkar (*floral wreath*) dengan lilin bercahaya hangat.
   - Bisa ditiup menggunakan mikrofon HP atau mengetuk tombol *"TIUP SEKARANG (KETUK) 💨"*.
   - Saat padam: lilin mengeluarkan asap tipis, meledakkan konfeti kelopak bunga & bintang emas, lalu doa tulus ke-23 merekah.
6. **Chapter 6: The Golden Floral Envelope & Final Letter (Surat Cinta Penutup)**
   - Amplop berstempel segel lilin mawar merah (*floral wax seal*).
   - Ketuk segel lilin -> amplop terbuka anggun menampilkan lembaran surat cinta pribadi.
   - Footer dengan rahasia tersembunyi (*Easter Egg* tombol bunga).

---

## 🎵 Konfigurasi Musik

File musik telah diset ke:
```
assets/music/Serta Mulia-Sal Priadi (Lyrics).mp3
```
- Titik mulai Reff: **Detik ke-44 (0:44)**.
- Menggunakan *volume ramp fade-in* otomatis saat tombol awal ditekan.

---

## ⚙️ Kustomisasi Data Cepat

Buka file [script.js](file:///d:/Pemrograman/SAYANGKU/script.js) pada bagian `birthdayConfig` (baris 10–65):

```javascript
const birthdayConfig = {
    partnerName: "Nama Lengkap Pacar",
    partnerNickname: "Panggilan Sayang",
    yourName: "Nama Anda",
    ...
};
```

---

## 🚀 Deployment Otomatis ke GitHub Pages

Setiap kali Anda selesai memperbarui nama, foto, atau teks:
```bash
git add .
git commit -m "feat: update foto dan surat cerita cinta"
git push origin main
```
GitHub Actions akan otomatis memperbarui website publik Anda di GitHub Pages!
