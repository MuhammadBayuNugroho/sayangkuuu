/**
 * ==========================================================================
 * MASTER SCRIPT — ROMANTIC & INTERACTIVE 23RD BIRTHDAY WEBSITE
 * ==========================================================================
 * Bagian konfigurasi di bawah ini memudahkan penggantian seluruh teks, nama,
 * foto, kenangan, timeline, dan doa tanpa perlu mengedit struktur HTML.
 */

// ==========================================================================
// 1. CONFIGURATION PANEL (DATA UTAMA WEBSITE)
// ==========================================================================
const birthdayConfig = {
    // Profil
    partnerName: "[NAMA PACAR]",
    partnerNickname: "[PANGGILAN PACAR]",
    yourName: "[NAMA SAYA]",
    birthday: "2026-10-06T00:00:00", // Format YYYY-MM-DDTHH:mm:ss
    age: 23,

    // File Assets
    heroPhoto: "assets/photos/hero.jpg",
    music: "assets/music/birthday-song.mp3",
    musicTrackTitle: "Our Little Song 🎵",

    // Section 2: Surat Pribadi Tambahan
    letterPersonalMessage: `Terima kasih telah menjadi teman berbagi tawa, tempat berteduh saat dunia sedang bising, dan alasan sederhana kenapa hari-hariku selalu terasa lebih bermakna. Kehadiranmu bukan sekadar ada, tapi mengubah caraku memandang kebahagiaan.`,

    // Section 3: Hal-Hal Kecil yang Disukai (Minimal 6 item)
    aboutCards: [
        {
            num: "01",
            title: "Senyum Manismu",
            desc: "Entah mantra apa yang kamu punya, senyumanmu selalu berhasil membuat hari yang melelahkan kembali terasa ringan dan hangat."
        },
        {
            num: "02",
            title: "Caramu Bercerita",
            desc: "Bahkan untuk hal paling random dan cerita receh sekalipun, caramu bercerita dengan mata berbinar selalu membuatku betah menyimak."
        },
        {
            num: "03",
            title: "Ketulusan Hatimu",
            desc: "Caramu peduli pada orang di sekitarmu, kelembutan tutur katamu, dan bagaimana kamu selalu berusaha menjadi pribadi yang baik."
        },
        {
            num: "04",
            title: "Tawa Spontanmu",
            desc: "Suara tawamu adalah melodi paling jujur dan menular yang selalu ingin kudengar berulang-ulang setiap hari."
        },
        {
            num: "05",
            title: "Caramu Menatapku",
            desc: "Di setiap tatapanmu, aku selalu menemukan ketenangan dan perasaan bahwa aku sudah berada di tempat yang tepat."
        },
        {
            num: "06",
            title: "Kegigihanmu",
            desc: "Semangatmu dalam menggapai mimpi-mimpimu membuatku selalu kagum dan bangga bisa mendampingi prosesmu."
        }
    ],

    // Section 4: Galeri Kenangan Indah (8 Momen Sinematik)
    memories: [
        {
            image: "assets/photos/photo-01.jpg",
            date: "Chapter 01",
            title: "Awal Mula Cerita",
            caption: "Awal dari sebuah cerita manis yang sampai detik ini selalu aku syukuri kehadirannya."
        },
        {
            image: "assets/photos/photo-02.jpg",
            date: "A Simple Coffee Date",
            title: "Secangkir Kopi & Cerita",
            caption: "Waktu seakan berhenti ketika kita duduk berdua, membicarakan segala hal tanpa terburu-buru."
        },
        {
            image: "assets/photos/photo-03.jpg",
            date: "Golden Sunset",
            title: "Menatap Senja Bersama",
            caption: "Senja memang indah, tapi bagiku pemandangan terindah sore itu adalah senyummu."
        },
        {
            image: "assets/photos/photo-04.jpg",
            date: "Unplanned Journey",
            title: "Langkah-Langkah Kecil",
            caption: "Tersesat di jalan pun terasa menyenangkan asalkan kita berjalan beriringan."
        },
        {
            image: "assets/photos/photo-05.jpg",
            date: "A Day Full of Laughter",
            title: "Tawa Paling Lepas",
            caption: "Momen ketika kita tertawa sampai perut sakit karena lelucon konyol yang kita buat sendiri."
        },
        {
            image: "assets/photos/photo-06.jpg",
            date: "Quiet Comfort",
            title: "Ketenangan Tanpa Kata",
            caption: "Terkadang, duduk hening berdampingan sudah lebih dari cukup untuk menenangkan isi kepala."
        },
        {
            image: "assets/photos/photo-07.jpg",
            date: "Special Milestone",
            title: "Satu Langkah Lagi",
            caption: "Melihatmu merayakan keberhasilan kecilmu adalah salah satu kebahagiaan terbesarku."
        },
        {
            image: "assets/photos/photo-08.jpg",
            date: "Today & Forever",
            title: "Perjalanan Terus Berlanjut",
            caption: "Dan hari ini, kita melangkah bersama menuju babak baru yang lebih indah di usia 23."
        }
    ],

    // Section 5: Garis Waktu Kenangan (Timeline)
    timeline: [
        {
            date: "The Beginning",
            title: "Pertama Kali Menyapa",
            desc: "Hari di mana semesta mempertemukan kita secara sederhana, yang ternyata menjadi awal dari perjalanan paling berharga bagiku."
        },
        {
            date: "First Adventure",
            title: "Petualangan Pertama Berdua",
            desc: "Momen kita pertama kali jalan bareng, masih ada rasa canggung yang lucu namun diiringi obrolan hangat yang tak ada habisnya."
        },
        {
            date: "The Favorite Day",
            title: "Hari yang Tak Terlupakan",
            desc: "Sebuah hari biasa yang berubah jadi luar biasa karena setiap detiknya kita habiskan dengan tawa dan cerita tulus."
        },
        {
            date: "Growing Together",
            title: "Saling Menemani & Belajar",
            desc: "Melewati pasang surut bersama, saling menguatkan di saat lelah, dan tumbuh menjadi versi diri kita yang lebih dewasa."
        },
        {
            date: "Chapter 23 Today",
            title: "Ulang Tahunmu yang Ke-23",
            desc: "Hari ini giliran kita merayakanmu. Selamat bertumbuh, sayangku. Kisah indah kita masih akan terus berlanjut."
        }
    ],

    // Section 6: 23 Hal Tentang Kamu (23 Kartu Interaktif)
    twentyThreeThings: [
        "1. Caramu tersenyum ketika pertama kali melihatku.",
        "2. Kebiasaan lucumu saat sedang fokus atau bingung.",
        "3. Suaramu saat pertama kali menyapa di pagi hari.",
        "4. Kebaikan hatimu yang selalu memikirkan perasaan orang lain.",
        "5. Matamu yang selalu berbinar saat membicarakan hal yang kamu sukai.",
        "6. Caramu memegang tanganku saat kita berjalan bersama.",
        "7. Lagu-lagu favoritmu yang kini menjadi lagu favoritku juga.",
        "8. Kesabaranmu saat mendengarkan keluh kesahku.",
        "9. Tawa renyahmu yang selalu berhasil menghapus rasa lelahku.",
        "10. Caramu berdandan sederhana tapi selalu tampak memukau di mataku.",
        "11. Pelukan hangatmu yang selalu menjadi rumah terbaik.",
        "12. Makanan kesukaanmu yang selalu membuatmu semangat.",
        "13. Pesan singkat 'hati-hati ya' yang kamu kirimkan setiap hari.",
        "14. Keteguhan hatimu untuk tidak mudah menyerah.",
        "15. Caramu merajuk yang justru terlihat sangat menggemaskan.",
        "16. Kejujuran dan keterbukaan yang selalu kamu berikan padaku.",
        "17. Foto-foto candid-mu yang selalu kusimpan diam-diam di galeri.",
        "18. Harum aromamu yang selalu menenangkan hati.",
        "19. Doa-doa tulus yang selalu kamu panjatkan untuk kebaikan kita berdua.",
        "20. Caramu memanggil namaku dengan nada manjamu yang khas.",
        "21. Setiap mimpi besar yang kamu ceritakan padaku di bawah langit malam.",
        "22. Bahwa kamu selalu menjadi pendengar terbaik di setiap fase hidupku.",
        "23. Dan yang terpenting: hadirnya kamu di duniaku adalah hadiah terindah yang pernah kutemui."
    ],

    // Section 7: Doa Tulus
    wishPersonalMessage: `Semoga di usia 23 ini, bahagiamu bertambah berlipat ganda, kesehatanmu terjaga, dan setiap usaha yang kamu lakukan dimudahkan oleh Tuhan. Semoga kita selalu bersama menyambut tahun-tahun berikutnya.`,

    // Easter Egg Message
    easterEggSecret: `"Psst... Aku sayang kamu lebih dari semua kata dan kode yang bisa ditulis di website ini." ❤️`
};

// ==========================================================================
// 2. HELPER UTILITIES & IMAGE / AUDIO FALLBACKS
// ==========================================================================

/**
 * Menghasilkan SVG placeholder elegan bernuansa cream-pink-gold
 * jika file foto lokal pengguna belum diletakkan di folder assets/photos.
 */
function handleImageFallback(imgElement, type = 'general') {
    const title = type === 'hero' ? 'Happy 23rd Birthday' : 'Sweet Memories';
    const subtitle = type === 'hero' ? birthdayConfig.partnerNickname : 'Capture of Love';
    
    // Generate lovely gradient SVG data URI
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCE7EB"/>
                <stop offset="50%" stop-color="#F7E6DC"/>
                <stop offset="100%" stop-color="#EEDACD"/>
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#FFFDF9" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#FCE7EB" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="800" height="600" fill="url(#bgGrad)"/>
        <circle cx="400" cy="240" r="220" fill="url(#sunGlow)"/>
        <g text-anchor="middle" font-family="'Georgia', serif" fill="#4A3B37">
            <text x="400" y="230" font-size="44" font-weight="bold">${title}</text>
            <text x="400" y="280" font-size="28" font-style="italic" fill="#C59B27">✦ ${subtitle} ✦</text>
            <text x="400" y="340" font-size="20" font-family="'Segoe UI', sans-serif" fill="#75645F">Foto akan muncul di sini saat ditambahkan ke assets/photos</text>
            <text x="400" y="390" font-size="38">🌸 💖 🌸</text>
        </g>
    </svg>`;
    
    imgElement.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    imgElement.onerror = null; // Prevent loop
}
// Expose globally for inline onerror handlers in HTML
window.handleImageFallback = handleImageFallback;

/**
 * Web Audio API Synthesizer Fallback:
 * Memainkan alunan melodi kotak musik romantis lembut jika file MP3 belum ada.
 */
class RomanticMusicBoxSynth {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.currentNoteIndex = 0;
        this.timer = null;
        // Frekuensi melodi romantis nada (C4, E4, G4, B4, C5, D5, dsb)
        this.melody = [
            { note: 261.63, dur: 0.6 }, // C4
            { note: 329.63, dur: 0.6 }, // E4
            { note: 392.00, dur: 0.8 }, // G4
            { note: 523.25, dur: 1.0 }, // C5
            { note: 493.88, dur: 0.6 }, // B4
            { note: 392.00, dur: 0.6 }, // G4
            { note: 440.00, dur: 0.8 }, // A4
            { note: 349.23, dur: 1.0 }, // F4
            { note: 329.63, dur: 0.6 }, // E4
            { note: 293.66, dur: 0.6 }, // D4
            { note: 261.63, dur: 1.2 }  // C4
        ];
    }

    init() {
        if (!this.ctx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.ctx = new AudioContextClass();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playNote(freq, duration) {
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine'; // Timbel lembut seperti chime/music box
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            // Envelope perkusif lembut
            gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.warn("Audio note error:", e);
        }
    }

    start() {
        this.init();
        if (!this.ctx || this.isPlaying) return;
        this.isPlaying = true;
        this.scheduleNext();
    }

    scheduleNext() {
        if (!this.isPlaying) return;
        const current = this.melody[this.currentNoteIndex];
        this.playNote(current.note, current.dur);
        this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melody.length;
        this.timer = setTimeout(() => this.scheduleNext(), current.dur * 850);
    }

    stop() {
        this.isPlaying = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}

// ==========================================================================
// 3. AMBIENT PARTICLES (HEARTS & SPARKLES CANVAS)
// ==========================================================================
class RomanceParticles {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 35;
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.initParticles();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 12 + 6,
                speedY: Math.random() * 0.8 + 0.3,
                speedX: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.5 + 0.2,
                type: Math.random() > 0.4 ? 'heart' : 'sparkle',
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1.5
            });
        }
    }

    drawHeart(x, y, size, opacity) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.beginPath();
        const topCurveHeight = size * 0.3;
        this.ctx.moveTo(0, topCurveHeight);
        // Left curve
        this.ctx.bezierCurveTo(
            -size / 2, -topCurveHeight,
            -size, size / 3,
            0, size
        );
        // Right curve
        this.ctx.bezierCurveTo(
            size, size / 3,
            size / 2, -topCurveHeight,
            0, topCurveHeight
        );
        this.ctx.fillStyle = `rgba(232, 139, 158, ${opacity})`;
        this.ctx.fill();
        this.ctx.restore();
    }

    drawSparkle(x, y, size, opacity) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
        this.ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            this.ctx.lineTo(0, -size);
            this.ctx.lineTo(size * 0.2, -size * 0.2);
            this.ctx.rotate(Math.PI / 2);
        }
        this.ctx.fill();
        this.ctx.restore();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let p of this.particles) {
            p.y -= p.speedY;
            p.x += p.speedX;

            if (p.y < -20) {
                p.y = this.height + 20;
                p.x = Math.random() * this.width;
            }

            if (p.type === 'heart') {
                this.drawHeart(p.x, p.y, p.size, p.opacity);
            } else {
                this.drawSparkle(p.x, p.y, p.size, p.opacity);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 4. CONFETTI BURST ENGINE (ZERO EXTERNAL DEPENDENCY)
// ==========================================================================
class ConfettiEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#F8CAD4', '#E88B9E', '#D4AF37', '#FFF5F7', '#C59B27'];
        this.isAnimating = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    burst(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 90) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 12 + 4;
            this.particles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity - Math.random() * 4,
                size: Math.random() * 8 + 4,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                opacity: 1,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 12,
                gravity: 0.25,
                drag: 0.96
            });
        }
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.render();
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.vx *= p.drag;
            p.vy *= p.drag;
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.008;

            if (p.opacity <= 0 || p.y > this.height) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
            this.ctx.restore();
        }

        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.render());
        } else {
            this.isAnimating = false;
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }
}

// ==========================================================================
// 5. MAIN APPLICATION CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // A. Inisialisasi Canvas Partikel & Confetti
    // ----------------------------------------------------------------------
    const ambientFX = new RomanceParticles('ambient-canvas');
    const confettiFX = new ConfettiEngine('confetti-canvas');
    const synthAudio = new RomanticMusicBoxSynth();

    // ----------------------------------------------------------------------
    // B. Bind Data dari birthdayConfig ke Tampilan UI
    // ----------------------------------------------------------------------
    const populateConfigData = () => {
        // Nama-nama
        const partnerNameEl = document.getElementById('footer-partner-name');
        if (partnerNameEl) partnerNameEl.textContent = birthdayConfig.partnerName;

        const brandTextEl = document.getElementById('nav-brand-text');
        if (brandTextEl) {
            const brandSpan = brandTextEl.querySelector('.brand-name');
            if (brandSpan) brandSpan.textContent = birthdayConfig.partnerNickname;
        }

        const heroRecipientEl = document.getElementById('hero-recipient-name');
        if (heroRecipientEl) heroRecipientEl.textContent = birthdayConfig.partnerNickname;

        const letterSenderEl = document.getElementById('letter-sender-name');
        if (letterSenderEl) letterSenderEl.textContent = birthdayConfig.yourName;

        const finalRecipientEl = document.getElementById('final-recipient-name');
        if (finalRecipientEl) finalRecipientEl.textContent = birthdayConfig.partnerNickname;

        const finalSenderEl = document.getElementById('final-sender-name');
        if (finalSenderEl) finalSenderEl.textContent = birthdayConfig.yourName;

        // Custom Letter Body
        const customLetterBox = document.getElementById('letter-custom-content');
        if (customLetterBox && birthdayConfig.letterPersonalMessage) {
            customLetterBox.innerHTML = `<p>${birthdayConfig.letterPersonalMessage}</p>`;
        }

        // Hero Image
        const heroImg = document.getElementById('hero-img');
        if (heroImg && birthdayConfig.heroPhoto) {
            heroImg.src = birthdayConfig.heroPhoto;
        }

        // Track Name
        const trackTitleEl = document.getElementById('player-track-name');
        if (trackTitleEl) trackTitleEl.textContent = birthdayConfig.musicTrackTitle;

        // 1. Populate About You Cards (Hal-Hal Kecil)
        const aboutContainer = document.getElementById('about-cards-container');
        if (aboutContainer) {
            aboutContainer.innerHTML = birthdayConfig.aboutCards.map(item => `
                <div class="about-card">
                    <span class="about-card-num">${item.num}</span>
                    <h3 class="about-card-title">${item.title}</h3>
                    <p class="about-card-desc">${item.desc}</p>
                </div>
            `).join('');
        }

        // 2. Populate Memory Gallery (Editorial Layout)
        const galleryContainer = document.getElementById('gallery-grid');
        if (galleryContainer) {
            galleryContainer.innerHTML = birthdayConfig.memories.map((m, idx) => `
                <div class="gallery-item" data-index="${idx}" tabindex="0" role="button" aria-label="Lihat foto ${m.title}">
                    <div class="gallery-img-wrapper">
                        <img src="${m.image}" alt="${m.title}" class="gallery-img" loading="lazy" onerror="handleImageFallback(this)">
                        <div class="gallery-caption-overlay">
                            <span class="gallery-date-badge">${m.date}</span>
                            <h3 class="gallery-photo-title">${m.title}</h3>
                            <p class="gallery-short-caption">"${m.caption}"</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 3. Populate Memory Timeline
        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer) {
            timelineContainer.innerHTML = birthdayConfig.timeline.map((node, i) => `
                <div class="timeline-node">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">${node.date}</span>
                        <h3 class="timeline-title">${node.title}</h3>
                        <p class="timeline-desc">${node.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // 4. Populate 23 Things About You (Flip Cards)
        const thingsContainer = document.getElementById('things-cards-container');
        if (thingsContainer) {
            thingsContainer.innerHTML = birthdayConfig.twentyThreeThings.map((thing, idx) => {
                const numStr = String(idx + 1).padStart(2, '0');
                return `
                    <div class="thing-card" data-card-id="${idx}" tabindex="0" role="button" aria-label="Buka alasan nomor ${numStr}">
                        <div class="thing-card-inner">
                            <div class="thing-front">
                                <span class="thing-num">${numStr}</span>
                                <span class="thing-front-label">Ketuk Kartu 💖</span>
                            </div>
                            <div class="thing-back">
                                <p class="thing-reason">${thing}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    };

    populateConfigData();

    // ----------------------------------------------------------------------
    // C. Music Player Logic (Audio File + Web Audio Fallback)
    // ----------------------------------------------------------------------
    const bgAudio = document.getElementById('bg-audio');
    const discVinyl = document.getElementById('disc-vinyl');
    const btnTogglePlay = document.getElementById('btn-toggle-play');
    const btnMute = document.getElementById('btn-mute');
    const muteIcon = document.getElementById('mute-icon');
    const progressFill = document.getElementById('player-progress-fill');
    const progressContainer = document.getElementById('player-progress-container');
    const musicNotice = document.getElementById('music-status-notice');

    let isAudioPlaying = false;
    let usingSynthFallback = false;

    if (bgAudio) {
        bgAudio.src = birthdayConfig.music;
        bgAudio.onerror = () => {
            // Jika file musik lokal tidak ditemukan, aktifkan fallback synth tanpa error
            usingSynthFallback = true;
            if (musicNotice) {
                musicNotice.textContent = "Melodi sintetis romantis aktif";
                musicNotice.classList.remove('hidden');
                setTimeout(() => musicNotice.classList.add('hidden'), 3500);
            }
        };
    }

    const startMusic = () => {
        if (!usingSynthFallback && bgAudio) {
            const playPromise = bgAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isAudioPlaying = true;
                    if (discVinyl) discVinyl.classList.add('spinning');
                }).catch(() => {
                    // Fallback to synth if audio file play fails
                    usingSynthFallback = true;
                    synthAudio.start();
                    isAudioPlaying = true;
                    if (discVinyl) discVinyl.classList.add('spinning');
                });
            }
        } else {
            synthAudio.start();
            isAudioPlaying = true;
            if (discVinyl) discVinyl.classList.add('spinning');
        }
    };

    const stopMusic = () => {
        if (!usingSynthFallback && bgAudio) {
            bgAudio.pause();
        } else {
            synthAudio.stop();
        }
        isAudioPlaying = false;
        if (discVinyl) discVinyl.classList.remove('spinning');
    };

    if (btnTogglePlay) {
        btnTogglePlay.addEventListener('click', () => {
            if (isAudioPlaying) {
                stopMusic();
            } else {
                startMusic();
            }
        });
    }

    // Audio progress updates
    if (bgAudio && progressFill) {
        bgAudio.addEventListener('timeupdate', () => {
            if (bgAudio.duration) {
                const percent = (bgAudio.currentTime / bgAudio.duration) * 100;
                progressFill.style.width = `${percent}%`;
            }
        });
    }

    if (progressContainer && bgAudio) {
        progressContainer.addEventListener('click', (e) => {
            if (bgAudio.duration && !usingSynthFallback) {
                const rect = progressContainer.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                bgAudio.currentTime = clickPos * bgAudio.duration;
            }
        });
    }

    // Mute toggle
    if (btnMute && bgAudio) {
        btnMute.addEventListener('click', () => {
            bgAudio.muted = !bgAudio.muted;
            if (muteIcon) {
                muteIcon.textContent = bgAudio.muted ? '🔇' : '🔊';
            }
        });
    }

    // ----------------------------------------------------------------------
    // D. Opening Screen Transition
    // ----------------------------------------------------------------------
    const btnOpenGift = document.getElementById('btn-open-gift');
    const openingScreen = document.getElementById('opening-screen');

    if (btnOpenGift && openingScreen) {
        btnOpenGift.addEventListener('click', () => {
            // Trigger audio upon user click (browser policy compliant)
            startMusic();

            // Confetti explosion
            confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.45, 100);

            // Fade out overlay
            openingScreen.classList.add('fade-out');

            // Scroll gently to Hero Section
            setTimeout(() => {
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        });
    }

    // ----------------------------------------------------------------------
    // E. Navigation & Mobile Drawer
    // ----------------------------------------------------------------------
    const siteHeader = document.getElementById('main-header');
    const navToggle = document.getElementById('nav-toggle');
    const navDrawer = document.getElementById('nav-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Header Blur effect
    window.addEventListener('scroll', () => {
        if (siteHeader) {
            if (window.scrollY > 40) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        // Active Link Spy
        const sections = document.querySelectorAll('section[id]');
        let currentSec = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                currentSec = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSec}`) {
                link.classList.add('active');
            }
        });
    });

    if (navToggle && navDrawer) {
        navToggle.addEventListener('click', () => {
            navDrawer.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', navDrawer.classList.contains('open'));
        });
    }

    if (drawerClose && navDrawer) {
        drawerClose.addEventListener('click', () => {
            navDrawer.classList.remove('open');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        });
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navDrawer) navDrawer.classList.remove('open');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // ----------------------------------------------------------------------
    // F. Love Letter Envelope Unfolding Interaction
    // ----------------------------------------------------------------------
    const envelope = document.getElementById('envelope');
    const envelopeFlap = document.getElementById('envelope-flap');
    const letterSheet = document.getElementById('letter-sheet');

    if (envelope && letterSheet) {
        const openEnvelope = () => {
            if (envelopeFlap) {
                envelopeFlap.style.transform = 'rotateX(180deg)';
            }
            setTimeout(() => {
                envelope.style.display = 'none';
                letterSheet.classList.add('open');
                confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.6, 40);
            }, 400);
        };

        envelope.addEventListener('click', openEnvelope);
        envelope.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openEnvelope();
            }
        });
    }

    // ----------------------------------------------------------------------
    // G. 23 Things About You (Flip Card & Counter Tracking)
    // ----------------------------------------------------------------------
    const thingCards = document.querySelectorAll('.thing-card');
    const readCounterText = document.getElementById('things-read-counter');
    const meterFill = document.getElementById('things-meter-fill');
    const openedCards = new Set();

    thingCards.forEach(card => {
        const toggleFlip = () => {
            card.classList.toggle('flipped');
            const cardId = card.getAttribute('data-card-id');
            openedCards.add(cardId);

            const count = openedCards.size;
            if (readCounterText) {
                readCounterText.textContent = `Kartu terbuka: ${count} / ${birthdayConfig.twentyThreeThings.length}`;
            }
            if (meterFill) {
                const percent = (count / birthdayConfig.twentyThreeThings.length) * 100;
                meterFill.style.width = `${percent}%`;
            }

            if (count === birthdayConfig.twentyThreeThings.length) {
                confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.5, 60);
            }
        };

        card.addEventListener('click', toggleFlip);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip();
            }
        });
    });

    // ----------------------------------------------------------------------
    // H. Lightbox Gallery Modal
    // ----------------------------------------------------------------------
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');

    const openLightbox = (index) => {
        const item = birthdayConfig.memories[index];
        if (!item || !lightboxModal) return;

        if (lightboxImg) {
            lightboxImg.src = item.image;
            lightboxImg.onerror = () => handleImageFallback(lightboxImg, 'gallery');
        }
        if (lightboxTitle) lightboxTitle.textContent = item.title;
        if (lightboxCaption) lightboxCaption.textContent = item.caption;
        if (lightboxDate) lightboxDate.textContent = item.date;

        lightboxModal.classList.remove('hidden');
    };

    const closeLightbox = () => {
        if (lightboxModal) lightboxModal.classList.add('hidden');
    };

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.getAttribute('data-index'), 10);
            openLightbox(idx);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const idx = parseInt(item.getAttribute('data-index'), 10);
                openLightbox(idx);
            }
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // ----------------------------------------------------------------------
    // I. Countdown Timer & Birthday Moment Detector
    // ----------------------------------------------------------------------
    const cdDays = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMinutes = document.getElementById('cd-minutes');
    const cdSeconds = document.getElementById('cd-seconds');
    const momentStatusTitle = document.getElementById('moment-status-title');
    const momentCounterWrapper = document.getElementById('moment-counter-wrapper');

    const updateCountdown = () => {
        const targetTime = new Date(birthdayConfig.birthday).getTime();
        const now = new Date().getTime();
        const diff = targetTime - now;

        const targetDateObj = new Date(targetTime);
        const nowDateObj = new Date(now);

        const isSameDay = targetDateObj.getFullYear() === nowDateObj.getFullYear() &&
                          targetDateObj.getMonth() === nowDateObj.getMonth() &&
                          targetDateObj.getDate() === nowDateObj.getDate();

        if (isSameDay) {
            if (momentStatusTitle) momentStatusTitle.textContent = "It's Your Day! 🎉";
            if (momentCounterWrapper) {
                momentCounterWrapper.innerHTML = `
                    <div style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--color-pink-deep); margin: 1rem 0;">
                        Hari ini adalah hari paling istimewa untukmu! ❤️
                    </div>
                `;
            }
            return;
        }

        if (diff <= 0) {
            // Setelah tanggal ulang tahun
            if (momentStatusTitle) momentStatusTitle.textContent = "23 Years Of You ❤️";
            if (momentCounterWrapper) {
                momentCounterWrapper.innerHTML = `
                    <div style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--color-text-primary); margin: 1rem 0;">
                        Merayakan 23 tahun kehadiranmu yang penuh berkah. ✨
                    </div>
                `;
            }
            return;
        }

        // Sebelum tanggal ulang tahun
        if (momentStatusTitle) momentStatusTitle.textContent = "Hitung Mundur Hari Bahagia ⏳";

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
        if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
        if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
        if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ----------------------------------------------------------------------
    // J. Virtual Cake & 23 Candles (Microphone & Fallback Blowing)
    // ----------------------------------------------------------------------
    const candlesContainer = document.getElementById('candles-container');
    const btnActivateMic = document.getElementById('btn-activate-mic');
    const btnManualBlow = document.getElementById('btn-manual-blow');
    const micStatusText = document.getElementById('mic-status-text');
    const micMeterWrapper = document.getElementById('mic-meter-wrapper');
    const micLevelFill = document.getElementById('mic-level-fill');
    const cakeSuccessBanner = document.getElementById('cake-success-banner');

    let candlesExtinguished = false;
    let micStream = null;
    let audioContext = null;
    let analyser = null;
    let micAnimationId = null;

    // Generate exactly 23 interactive candles
    if (candlesContainer) {
        let candlesHtml = '';
        for (let i = 1; i <= 23; i++) {
            candlesHtml += `
                <div class="candle" id="candle-${i}">
                    <div class="flame" id="flame-${i}"></div>
                </div>
            `;
        }
        candlesContainer.innerHTML = candlesHtml;
    }

    // Sequence to extinguish all 23 candles with smoke & sound
    const extinguishCandles = () => {
        if (candlesExtinguished) return;
        candlesExtinguished = true;

        // Stop microphone stream if active
        if (micStream) {
            micStream.getTracks().forEach(track => track.stop());
            micStream = null;
        }
        if (micAnimationId) {
            cancelAnimationFrame(micAnimationId);
            micAnimationId = null;
        }

        const flames = document.querySelectorAll('.flame');
        flames.forEach((flame, index) => {
            setTimeout(() => {
                flame.classList.add('extinguished');
                // Create smoke puff
                const smoke = document.createElement('div');
                smoke.className = 'smoke-puff';
                flame.parentElement.appendChild(smoke);
                setTimeout(() => smoke.remove(), 2000);
            }, index * 25);
        });

        // Play pleasant chime
        synthAudio.init();
        synthAudio.playNote(587.33, 0.4); // D5
        setTimeout(() => synthAudio.playNote(880.00, 0.8), 200); // A5

        // Massive confetti burst
        setTimeout(() => {
            const cakeStage = document.getElementById('cake-stage');
            const rect = cakeStage ? cakeStage.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2 };
            confettiFX.burst(rect.left + 150, rect.top + 80, 120);

            if (cakeSuccessBanner) {
                cakeSuccessBanner.classList.remove('hidden');
            }
            if (micStatusText) {
                micStatusText.textContent = "Semua 23 lilin telah padam ditiup! Harapanmu akan terkabul ✨";
            }
            if (btnActivateMic) btnActivateMic.style.display = 'none';
            if (btnManualBlow) btnManualBlow.style.display = 'none';
            const fallbackOr = document.querySelector('.fallback-or-text');
            if (fallbackOr) fallbackOr.style.display = 'none';
        }, 800);
    };

    // Manual blow button handler
    if (btnManualBlow) {
        btnManualBlow.addEventListener('click', extinguishCandles);
    }

    // Microphone blow handler (Web Audio API)
    if (btnActivateMic) {
        btnActivateMic.addEventListener('click', async () => {
            if (candlesExtinguished) return;

            try {
                if (micStatusText) micStatusText.textContent = "Meminta izin mikrofon...";
                
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                micStream = stream;

                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                audioContext = new AudioCtx();
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;

                const source = audioContext.createMediaStreamSource(stream);
                source.connect(analyser);

                if (micStatusText) micStatusText.textContent = "Mikrofon aktif! Sekarang tarik napas dan TIUP layar/mikrofonmu! 💨";
                if (micMeterWrapper) micMeterWrapper.classList.remove('hidden');
                if (btnActivateMic) btnActivateMic.classList.add('hidden');

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                const checkBlow = () => {
                    if (candlesExtinguished) return;
                    analyser.getByteFrequencyData(dataArray);

                    // Hitung rata-rata amplitudo suara
                    let sum = 0;
                    for (let i = 0; i < dataArray.length; i++) {
                        sum += dataArray[i];
                    }
                    const average = sum / dataArray.length;

                    // Update visual level meter
                    const meterPercent = Math.min((average / 85) * 100, 100);
                    if (micLevelFill) micLevelFill.style.width = `${meterPercent}%`;

                    // Threshold tiupan (biasanya hembusan angin ke mic menghasilkan level > 65)
                    if (average > 65) {
                        extinguishCandles();
                        return;
                    }

                    micAnimationId = requestAnimationFrame(checkBlow);
                };

                checkBlow();

            } catch (err) {
                console.warn("Microphone access denied or error:", err);
                if (micStatusText) {
                    micStatusText.textContent = "Tidak dapat mengakses mikrofon. Jangan khawatir, tekan tombol tiup di bawah ini! ❤️";
                }
                if (btnActivateMic) btnActivateMic.style.display = 'none';
            }
        });
    }

    // ----------------------------------------------------------------------
    // K. Surprise Gift Box Opening
    // ----------------------------------------------------------------------
    const giftBox = document.getElementById('gift-box');
    const giftLid = document.getElementById('gift-lid');
    const giftRevealedCard = document.getElementById('gift-revealed-card');
    const giftTapHint = document.getElementById('gift-tap-hint');

    if (giftBox && giftRevealedCard) {
        const openGiftBox = () => {
            giftBox.classList.add('open');
            if (giftTapHint) giftTapHint.textContent = "Kado berhasil dibuka! 🎉";

            confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.6, 90);

            setTimeout(() => {
                giftRevealedCard.classList.remove('hidden');
                giftRevealedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600);
        };

        giftBox.addEventListener('click', openGiftBox);
        giftBox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGiftBox();
            }
        });
    }

    // ----------------------------------------------------------------------
    // L. Secret Easter Egg Interaction
    // ----------------------------------------------------------------------
    const easterEggBtn = document.getElementById('easter-egg-btn');
    const secretModal = document.getElementById('secret-modal');
    const secretCloseBtn = document.getElementById('secret-close-btn');
    const secretBackdrop = document.getElementById('secret-backdrop');

    let heartClickCount = 0;
    let heartClickTimer = null;

    if (easterEggBtn && secretModal) {
        easterEggBtn.addEventListener('click', () => {
            heartClickCount++;
            easterEggBtn.style.transform = `scale(${1 + heartClickCount * 0.15})`;

            clearTimeout(heartClickTimer);
            heartClickTimer = setTimeout(() => {
                heartClickCount = 0;
                easterEggBtn.style.transform = 'scale(1)';
            }, 3000);

            if (heartClickCount >= 5) {
                heartClickCount = 0;
                easterEggBtn.style.transform = 'scale(1)';
                secretModal.classList.remove('hidden');
                confettiFX.burst(window.innerWidth / 2, window.innerHeight / 2, 80);
            }
        });
    }

    const closeSecret = () => {
        if (secretModal) secretModal.classList.add('hidden');
    };

    if (secretCloseBtn) secretCloseBtn.addEventListener('click', closeSecret);
    if (secretBackdrop) secretBackdrop.addEventListener('click', closeSecret);
});
