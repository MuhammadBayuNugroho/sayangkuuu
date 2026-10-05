# MASTER PROMPT — WEBSITE ULANG TAHUN ROMANTIS INTERAKTIF

Buatkan sebuah website ulang tahun romantis dan interaktif sebagai hadiah digital untuk pacar saya yang berulang tahun ke-23 pada tanggal **6 Oktober 2026**.

Website harus terasa seperti **surprise digital yang personal, elegan, romantis, hangat, dan emosional**, bukan seperti template website ulang tahun biasa.

Saya ingin website memiliki alur seperti sebuah perjalanan cerita dari awal sampai akhir.

---

# 1. INFORMASI UTAMA

Nama pacar:
`[NAMA PACAR]`

Nama saya:
`[NAMA SAYA]`

Panggilan untuk pacar:
`[PANGGILAN PACAR]`

Panggilan untuk saya:
`[PANGGILAN SAYA]`

Tanggal ulang tahun:
`6 Oktober 2026`

Usia:
`23 tahun`

Tema:
`Romantic / Elegant / Warm / Personal`

Warna utama:
- Cream
- Soft pink
- White
- Champagne gold
- Sedikit dark brown untuk kontras

Hindari desain yang terlalu ramai.

Gunakan whitespace yang cukup dan tipografi elegan.

---

# 2. TEKNOLOGI

Gunakan:

- HTML5
- CSS3
- Vanilla JavaScript

Jangan menggunakan framework yang tidak diperlukan.

Website harus dapat dijalankan dengan mudah secara lokal.

Struktur file:

```text
birthday-website/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── photos/
│   │   ├── photo-01.jpg
│   │   ├── photo-02.jpg
│   │   ├── photo-03.jpg
│   │   └── ...
│   │
│   └── music/
│       └── birthday-song.mp3
│
└── README.md
```

Pastikan seluruh kode bersih, terstruktur, mudah diedit, dan diberi komentar pada bagian penting.

---

# 3. RESPONSIVE DESIGN

Website harus dibuat dengan pendekatan mobile-first.

Prioritaskan tampilan smartphone karena website kemungkinan besar akan dibuka melalui HP.

Pastikan website tetap bagus pada:

- Smartphone
- Tablet
- Laptop
- Desktop

Gunakan:

- responsive typography
- flexible layout
- CSS clamp()
- responsive images
- smooth scrolling

Jangan membuat elemen yang keluar dari layar pada smartphone.

---

# 4. OPENING SCREEN

Saat website pertama kali dibuka, tampilkan layar pembuka fullscreen.

Background menggunakan gradient lembut.

Tampilkan:

```text
✨ Ada sesuatu untukmu...

Sebuah hadiah kecil
yang kubuat khusus untukmu.

[ BUKA HADIAH ❤️ ]
```

Tambahkan animasi:

- floating hearts
- sparkle
- subtle particles
- fade-in
- slow floating animation

Jangan terlalu berlebihan.

Ketika tombol:

`BUKA HADIAH ❤️`

ditekan:

1. Opening screen melakukan fade-out.
2. Musik mulai dimainkan.
3. Main website muncul.
4. Confetti ringan muncul.
5. Scroll diarahkan ke Hero Section.

Gunakan user interaction sebagai trigger untuk audio karena browser dapat memblokir autoplay.

---

# 5. BACKGROUND MUSIC

Tambahkan background music.

File:

```text
assets/music/birthday-song.mp3
```

Buat floating music player di bagian bawah atau pojok layar.

UI:

```text
🎵 Our Little Song

[▶ / ❚❚]

━━━━━━━━●━━━━━━
```

Fitur:

- Play
- Pause
- Progress
- Volume
- Music toggle
- Persist music state jika memungkinkan

Default:

- Musik belum dimainkan sebelum tombol "Buka Hadiah".
- Setelah tombol tersebut ditekan, musik dimainkan.

Tambahkan animasi pada icon musik ketika lagu sedang dimainkan.

---

# 6. HERO SECTION

Buat hero section fullscreen.

Gunakan foto utama:

```text
assets/photos/hero.jpg
```

Tambahkan overlay gradient supaya teks tetap terbaca.

Isi:

```text
Happy 23rd Birthday ❤️

Untuk [PANGGILAN PACAR]

06 • 10 • 2026
```

Tambahkan teks:

```text
Hari ini bukan hanya tentang bertambahnya usia,
tetapi tentang merayakan seseorang
yang begitu berarti dalam hidupku.
```

Tambahkan tombol:

```text
↓ Lanjutkan perjalanan
```

Ketika tombol ditekan, scroll ke section berikutnya.

---

# 7. LOVE LETTER SECTION

Buat section seperti surat pribadi.

Judul:

```text
Ada sesuatu yang ingin aku katakan...
```

Gunakan typography seperti tulisan tangan hanya untuk heading atau aksen, jangan untuk seluruh paragraf agar tetap mudah dibaca.

Isi surat:

```text
Sayang,

Selamat ulang tahun yang ke-23.

Aku mungkin tidak selalu pandai mengungkapkan
apa yang aku rasakan, tapi hari ini aku ingin
kamu tahu betapa bersyukurnya aku karena
bisa mengenal dan memiliki kamu dalam hidupku.

[ISI PESAN PRIBADI]

Semoga di usia yang baru ini,
kamu semakin dekat dengan semua impianmu.

Dan semoga kalau boleh,
aku masih bisa menjadi salah satu orang
yang menemani perjalananmu.

❤️
```

Jadikan `[ISI PESAN PRIBADI]` mudah ditemukan dan diedit.

Animasi:
- envelope opening
- text fade-in
- subtle paper texture
- scroll reveal

---

# 8. ABOUT YOU SECTION

Judul:

```text
Hal-hal kecil yang aku suka dari kamu ❤️
```

Buat beberapa kartu.

Contoh:

```text
01
Senyummu

Entah kenapa,
senyummu selalu berhasil
membuat hariku lebih baik.
```

```text
02
Cara kamu berbicara

Bahkan cerita random dari kamu
tetap menyenangkan untuk didengar.
```

```text
03
Cara kamu peduli

Hal-hal kecil yang mungkin
kamu anggap biasa,
justru sangat berarti buatku.
```

Sediakan minimal 6 kartu.

Gunakan placeholder:

```text
[CARD 01]
[CARD 02]
[CARD 03]
[CARD 04]
[CARD 05]
[CARD 06]
```

Animasi card ketika muncul saat scrolling.

---

# 9. MEMORY GALLERY

Buat section:

```text
Our Little Memories 📸
```

Gunakan foto:

```text
photo-01.jpg
photo-02.jpg
photo-03.jpg
photo-04.jpg
photo-05.jpg
photo-06.jpg
photo-07.jpg
photo-08.jpg
```

Tampilkan sebagai cinematic gallery.

Jangan gunakan grid biasa saja.

Buat layout editorial/asymmetric.

Setiap foto memiliki:

- caption
- tanggal opsional
- cerita singkat

Contoh:

```text
[PHOTO]

"Awal dari cerita yang
sampai sekarang masih aku syukuri."
```

Ketika foto diklik:

- tampilkan modal/lightbox
- foto diperbesar
- tampilkan caption
- tombol close

Tambahkan smooth zoom animation.

---

# 10. MEMORY TIMELINE

Buat timeline hubungan.

Judul:

```text
A Little Journey Of Us
```

Contoh:

```text
[DATE]

The Beginning

Cerita singkat...

↓

[DATE]

A Beautiful Day

Cerita singkat...

↓

[DATE]

One Of My Favorite Memories

Cerita singkat...

↓

[DATE]

And The Story Continues...
```

Gunakan placeholder agar saya bisa mengganti tanggal dan cerita sendiri.

---

# 11. 23 THINGS ABOUT YOU

Karena dia berusia 23 tahun, buat section khusus:

```text
23 Things About You ❤️
```

Buat 23 kartu bernomor.

Contoh:

```text
01
Aku suka senyummu.

02
Aku suka caramu bercerita.

03
Aku suka ketika kamu tertawa.

...

23
Dari semua hal tentang kamu,
yang paling aku syukuri adalah
kamu hadir dalam hidupku.
```

Setiap kartu dapat dibuka dengan klik.

Gunakan animasi:

- flip card
atau
- expand card

Pastikan nyaman digunakan pada touchscreen.

---

# 12. WISH / DOA SECTION

Buat section yang lebih tenang dan emosional.

Background dapat menggunakan foto dengan blur overlay.

Judul:

```text
Doaku Untukmu di Usia 23 🌷
```

Isi:

```text
Semoga langkahmu tahun ini
dipenuhi hal-hal baik.

Semoga semua yang kamu perjuangkan
perlahan menemukan jalannya.

Semoga kamu selalu diberikan
kesehatan, kebahagiaan,
dan orang-orang yang tulus menyayangimu.

Semoga semua impian yang kamu simpan
perlahan menjadi kenyataan.

Semoga ketika kamu merasa lelah,
kamu selalu menemukan alasan
untuk kembali tersenyum.

Dan semoga...

aku masih diberi kesempatan
untuk melihat kamu tumbuh,
berkembang,
dan bahagia.

Aamiin. ❤️
```

Buat bagian `[DOA PRIBADI]` yang mudah diedit.

---

# 13. BIRTHDAY COUNTDOWN / AGE MOMENT

Tambahkan section kecil:

```text
TODAY

06 . 10 . 2026

23

YEARS OF YOU
```

Gunakan animasi angka.

Jika website dibuka sebelum 6 Oktober 2026,
tampilkan countdown menuju ulang tahun.

Jika sudah tanggal 6 Oktober 2026,
tampilkan:

```text
It's Your Day! 🎉
```

Jika website dibuka setelah tanggal tersebut,
tetap tampilkan:

```text
23 Years Of You ❤️
```

Gunakan JavaScript untuk menentukan status berdasarkan tanggal.

---

# 14. VIRTUAL BIRTHDAY CAKE

Ini adalah salah satu bagian utama website.

Judul:

```text
Make A Wish... 🎂
```

Teks:

```text
Pejamkan mata.

Pikirkan satu keinginan.

Tarik napas...

Lalu tiup lilinnya.
```

Buat kue ulang tahun menggunakan:

- HTML/CSS
atau
- SVG

Jangan menggunakan gambar statis untuk kue jika memungkinkan.

Kue memiliki:

- 23 lilin
- flame animation
- glow
- candle flicker

Karena terdapat 23 lilin, buat lilin dengan layout yang tetap bagus di layar HP.

---

# 15. VIRTUAL CANDLE BLOWING

Implementasikan fitur meniup lilin menggunakan microphone.

Alur:

```text
[ AKTIFKAN MIKROFON 🎤 ]
```

Setelah user memberikan izin microphone:

```text
Tarik napas...

💨 Tiup lilinnya!
```

Gunakan Web Audio API untuk membaca level suara microphone.

Jika volume suara melewati threshold:

1. Semua flame lilin padam.
2. Tambahkan animasi smoke.
3. Tambahkan sparkle.
4. Putar sound effect ringan.
5. Jalankan confetti.
6. Tampilkan pesan sukses.

Jika microphone tidak tersedia atau permission ditolak:

Tampilkan fallback:

```text
Tidak bisa menggunakan mikrofon?

Tidak masalah ❤️

Tekan tombol di bawah
untuk meniup lilinnya.

[ TIUP LILIN 💨 ]
```

Jadi fitur tetap bisa digunakan tanpa microphone.

---

# 16. CANDLE SUCCESS ANIMATION

Ketika lilin berhasil ditiup:

Lakukan sequence:

```text
🔥 🔥 🔥
↓
💨 💨 💨
↓
✨ ✨ ✨
↓
🎉 CONFETTI
```

Kemudian tampilkan:

```text
🎉 HAPPY 23RD BIRTHDAY! 🎉

You made a wish.

I hope it comes true. ❤️
```

Tambahkan animasi scale + fade-in.

---

# 17. SURPRISE GIFT

Setelah lilin padam, tampilkan:

```text
Tunggu...

Ternyata masih ada satu hadiah lagi. 🎁
```

Tombol:

```text
[ BUKA HADIAH 🎁 ]
```

Ketika diklik:

Buat animasi kotak hadiah terbuka.

Kemudian tampilkan pesan rahasia.

---

# 18. FINAL LOVE LETTER

Isi:

```text
Kalau kamu sudah sampai di sini...

berarti kamu sudah menyelesaikan
perjalanan kecil yang aku buat untukmu.

Aku cuma ingin kamu tahu...

di antara begitu banyak hal
yang terjadi dalam hidupku,

aku bersyukur salah satunya adalah
bisa mengenal kamu.

Semoga kamu selalu bahagia.

Semoga kamu selalu dikelilingi
hal-hal baik.

Dan kalau suatu hari nanti
kamu membuka website ini lagi,

aku harap kamu tersenyum
dan mengingat hari ini.

Happy Birthday, [PANGGILAN PACAR].

Selamat datang di chapter 23. ❤️

— [NAMA SAYA]
```

Buat teks terakhir:

```text
Chapter 23 Begins...
```

Kemudian:

```text
06 • 10 • 2026

❤️
```

---

# 19. EASTER EGG

Tambahkan satu easter egg kecil.

Contoh:

Klik icon ❤️ sebanyak 5 kali.

Setelah berhasil:

```text
Secret message unlocked ❤️

"Psst...

Aku sayang kamu lebih dari
yang bisa ditulis di website ini."
```

Buat easter egg tidak mengganggu pengalaman utama.

---

# 20. VISUAL EFFECTS

Gunakan efek yang elegan:

- smooth scrolling
- fade-in
- slide-up
- parallax ringan
- floating particles
- floating hearts
- sparkle
- confetti
- image zoom
- text reveal
- candle flicker
- smoke animation
- subtle glow

Hindari:

- animasi terlalu cepat
- terlalu banyak warna
- efek norak
- autoplay video
- elemen yang membuat website lambat

Website harus terasa:

**romantis + mahal + elegan + personal.**

---

# 21. NAVIGATION

Gunakan navigation yang minimal.

Pada desktop:

```text
Home
Letter
Memories
23 Things
Wish
Cake
```

Pada mobile gunakan hamburger menu atau floating navigation.

Navigation tidak boleh mengganggu konten.

Tambahkan active section indicator jika memungkinkan.

---

# 22. CUSTOMIZATION PANEL DALAM KODE

Buat satu bagian konfigurasi di awal `script.js` agar saya mudah mengganti data.

Contoh:

```javascript
const birthdayConfig = {
    partnerName: "[NAMA PACAR]",
    partnerNickname: "[PANGGILAN PACAR]",
    yourName: "[NAMA SAYA]",
    birthday: "2026-10-06",

    heroPhoto: "assets/photos/hero.jpg",

    music: "assets/music/birthday-song.mp3",

    memories: [
        {
            image: "assets/photos/photo-01.jpg",
            date: "[TANGGAL]",
            title: "[JUDUL]",
            caption: "[CERITA]"
        }
    ]
};
```

Sebisa mungkin data konten dipisahkan dari kode UI.

---

# 23. ACCESSIBILITY

Pastikan:

- tombol dapat digunakan keyboard
- gambar memiliki alt text
- warna memiliki contrast yang cukup
- font mudah dibaca
- tombol memiliki ukuran touch target yang nyaman
- microphone permission dijelaskan dengan jelas
- website tetap bisa digunakan jika microphone ditolak

---

# 24. PERFORMANCE

Optimalkan website:

- lazy loading gambar
- gunakan `loading="lazy"`
- jangan memuat semua gambar resolusi besar sekaligus
- gunakan CSS animation daripada JavaScript jika memungkinkan
- hindari library besar yang tidak diperlukan
- jangan menggunakan background video berat
- pastikan website tetap smooth pada smartphone kelas menengah

---

# 25. SEO / META

Tambahkan:

```html
<title>Happy 23rd Birthday, [NAMA PACAR] ❤️</title>

<meta
    name="description"
    content="A little birthday surprise made especially for you."
>
```

Tambahkan Open Graph metadata jika diperlukan.

---

# 26. MUSIC FALLBACK

Jika file musik tidak ditemukan:

Jangan membuat website error.

Tampilkan music player dalam kondisi disabled dengan pesan kecil:

```text
Music unavailable
```

Website tetap berjalan normal.

---

# 27. ERROR HANDLING

Pastikan website tidak rusak jika:

- gambar tidak ditemukan
- musik tidak ditemukan
- microphone ditolak
- browser tidak mendukung Web Audio API
- user menekan tombol berkali-kali
- layar dirotasi
- koneksi internet tidak tersedia

Tambahkan fallback yang masuk akal.

---

# 28. IMPORTANT DESIGN PRINCIPLE

Website ini harus terasa seperti:

> "Aku membuat ini khusus untuk kamu."

Bukan:

> "Aku menggunakan template website ulang tahun."

Jadi prioritaskan:

1. Foto pribadi
2. Surat pribadi
3. Cerita hubungan
4. Doa
5. Interaksi tiup lilin
6. Surprise
7. Animasi yang lembut

Jangan membuat website terlihat seperti dashboard atau landing page bisnis.

---

# 29. FINAL OUTPUT

Berikan saya:

### File 1
`index.html`

### File 2
`style.css`

### File 3
`script.js`

### File 4
`README.md`

README harus menjelaskan:

1. Cara menjalankan website.
2. Cara mengganti nama.
3. Cara mengganti foto.
4. Cara mengganti musik.
5. Cara mengedit surat.
6. Cara mengedit doa.
7. Cara mengedit 23 Things.
8. Cara mengedit timeline.
9. Cara mengatur tanggal ulang tahun.
10. Cara mengaktifkan microphone.
11. Browser yang direkomendasikan.

---

# 30. FINAL REQUIREMENT

Sebelum memberikan kode, pastikan seluruh alur berikut benar-benar bekerja:

OPEN
↓
Buka Hadiah
↓
Music Start
↓
Hero
↓
Love Letter
↓
About You
↓
Memories
↓
Timeline
↓
23 Things
↓
Wish / Doa
↓
Birthday Moment
↓
Virtual Cake
↓
Microphone Candle Blow
↓
Candle Extinguished
↓
Confetti
↓
Happy Birthday
↓
Surprise Gift
↓
Final Letter
↓
Chapter 23 Begins

Pastikan tidak ada section yang terasa kosong.

Gunakan placeholder yang jelas seperti:

`[NAMA PACAR]`

`[NAMA SAYA]`

`[PANGGILAN PACAR]`

`[CERITA PRIBADI]`

`[DOA PRIBADI]`

`[TANGGAL]`

`[CAPTION FOTO]`

sehingga saya bisa menggantinya sendiri.

Buat hasil akhir yang **romantis, elegan, cinematic, interaktif, responsive, dan benar-benar terasa seperti hadiah ulang tahun pribadi.**

Jangan hanya memberikan contoh atau pseudocode.

Berikan **kode lengkap yang siap dijalankan.**