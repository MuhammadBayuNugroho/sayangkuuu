/**
 * ==========================================================================
 * ROMANTIC CINEMATIC STORYBOOK — SCRIPT.JS
 * 6-Chapter Birthday Experience  |  Mobile-First
 *
 * ============================================================
 * CONFIG — Ubah isi di bawah ini sesuai data pribadi Anda
 * ============================================================
 */
const CONFIG = {
    // Nama & Panggilan
    partnerNickname: "[PANGGILAN PACAR]",
    yourName: "[NAMA SAYA]",

    // Audio — mulai dari detik reff (0.44 detik)
    musicSrc: "assets/music/Serta Mulia-Sal Priadi (Lyrics).mp3",
    musicStartTime: 0.44,

    // Hero Photo
    heroPhoto: "assets/photos/hero.jpg",

    // Polaroid Memories (6 foto + caption)
    memories: [
        {
            image: "assets/photos/photo-01.jpg",
            caption: "Awal dari cerita yang paling kusyukuri ✨"
        },
        {
            image: "assets/photos/photo-02.jpg",
            caption: "Waktu terasa berhenti di sisimu ☕"
        },
        {
            image: "assets/photos/photo-03.jpg",
            caption: "Senyummu, pemandangan terindah hariku 🌅"
        },
        {
            image: "assets/photos/photo-04.jpg",
            caption: "Tersesat pun menyenangkan bersamamu 🗺️"
        },
        {
            image: "assets/photos/photo-05.jpg",
            caption: "Tawa paling jujur yang pernah kudengar 😊"
        },
        {
            image: "assets/photos/photo-06.jpg",
            caption: "Diam bersamamu sudah lebih dari cukup 🌸"
        }
    ],

    // Hal yang Disukai (6 item — padat dan tulus)
    adoreList: [
        {
            title: "Senyum manismu",
            desc: "Entah mantra apa, senyummu selalu berhasil membuat hari yang paling berat terasa ringan."
        },
        {
            title: "Caramu bercerita",
            desc: "Bahkan hal random sekalipun, cara berceritamu dengan mata berbinar selalu membuatku betah."
        },
        {
            title: "Ketulusan hatimu",
            desc: "Caramu peduli pada orang sekitar, selalu membuatku merasa beruntung bisa berada di dekatmu."
        },
        {
            title: "Tawa lepasmu",
            desc: "Suara tawamu adalah melodi paling jujur yang selalu ingin kudengar berulang kali."
        },
        {
            title: "Kegigihanmu",
            desc: "Semangatmu mengejar mimpi-mimpimu selalu membuatku kagum dan bangga mendampingimu."
        },
        {
            title: "Bahwa kamu ada",
            desc: "Di antara semua hal yang terjadi di hidupku, kehadiranmu adalah salah satu yang paling kusyukuri."
        }
    ],

    // Doa (bisa diganti sepenuhnya)
    doaLines: [
        "Semoga setiap langkahmu di usia 23 ini dipenuhi hal-hal baik yang belum pernah kamu bayangkan.",
        "Semoga semua yang kamu perjuangkan diam-diam perlahan menemukan jalannya.",
        "Semoga kamu senantiasa dianugerahi kesehatan, ketenangan hati, dan dikelilingi orang-orang yang tulus.",
        "Dan semoga... aku masih diberi kesempatan untuk menyaksikanmu tumbuh, mekar, dan berbahagia."
    ],

    // Surat Penutup
    letter: {
        salutation: "Sayang,",
        paragraphs: [
            "Selamat ulang tahun yang ke-23.",
            "Aku mungkin tidak selalu pandai merangkai kata, tapi hari ini aku ingin kamu tahu betapa bersyukurnya aku karena kamu ada dalam hidupku.",
            // Tambahkan pesan pribadimu di bawah ini:
            "[ISI PESAN PRIBADIMU DI SINI]",
            "Semoga di usia barumu ini, semua yang kamu impikan perlahan menjadi kenyataan. Dan kalau boleh, aku ingin tetap ada di sampingmu menyaksikan semuanya terjadi."
        ],
        sign: "Selalu menyayangimu,"
    }
};

// ==========================================================================
// IMAGE FALLBACK
// ==========================================================================
function handleImgFail(el) {
    const colors = ['#F8D7DA', '#FBDCE4', '#F3E5AB'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.display = 'none';
    const parent = el.parentElement;
    parent.style.background = `linear-gradient(135deg, ${color}, #FAF7F2)`;
    // Add a flower emoji placeholder
    const ph = document.createElement('div');
    ph.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;';
    ph.textContent = '🌸';
    parent.appendChild(ph);
}
window.handleImgFail = handleImgFail;

// ==========================================================================
// PETAL PARTICLE ENGINE
// ==========================================================================
class PetalParticles {
    constructor(canvasId) {
        this.c = document.getElementById(canvasId);
        if (!this.c) return;
        this.x = this.c.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.loop();
    }

    resize() {
        this.w = this.c.width = window.innerWidth;
        this.h = this.c.height = window.innerHeight;
    }

    spawn() {
        if (this.particles.length >= 22) return;
        const types = ['🌸', '🌺', '🌷', '✿'];
        this.particles.push({
            x: Math.random() * this.w,
            y: -20,
            vy: Math.random() * 0.6 + 0.25,
            vx: (Math.random() - 0.5) * 0.6,
            rot: Math.random() * 360,
            rotV: (Math.random() - 0.5) * 1.8,
            size: Math.random() * 14 + 10,
            op: Math.random() * 0.45 + 0.15,
            type: types[Math.floor(Math.random() * types.length)]
        });
    }

    loop() {
        this.x.clearRect(0, 0, this.w, this.h);
        if (Math.random() < 0.035) this.spawn();

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.y += p.vy;
            p.x += p.vx;
            p.rot += p.rotV;

            if (p.y > this.h + 30) {
                this.particles.splice(i, 1);
                continue;
            }

            this.x.save();
            this.x.globalAlpha = p.op;
            this.x.font = `${p.size}px serif`;
            this.x.translate(p.x, p.y);
            this.x.rotate((p.rot * Math.PI) / 180);
            this.x.fillText(p.type, -p.size / 2, p.size / 2);
            this.x.restore();
        }

        requestAnimationFrame(() => this.loop());
    }
}

// ==========================================================================
// CONFETTI ENGINE
// ==========================================================================
class Confetti {
    constructor(canvasId) {
        this.c = document.getElementById(canvasId);
        if (!this.c) return;
        this.x = this.c.getContext('2d');
        this.particles = [];
        this.active = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.w = this.c.width = window.innerWidth;
        this.h = this.c.height = window.innerHeight;
    }

    burst(count = 80) {
        const ox = this.w / 2, oy = this.h * 0.4;
        const colors = ['#F8CAD4', '#E88B9E', '#D4AF37', '#FBDCE4', '#FFFDF8'];
        for (let i = 0; i < count; i++) {
            const a = Math.random() * Math.PI * 2;
            const v = Math.random() * 10 + 3;
            this.particles.push({
                x: ox, y: oy,
                vx: Math.cos(a) * v,
                vy: Math.sin(a) * v - Math.random() * 4,
                size: Math.random() * 7 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                op: 1, drag: 0.96, gravity: 0.22,
                rot: Math.random() * 360, rotV: (Math.random() - 0.5) * 10
            });
        }
        if (!this.active) { this.active = true; this.render(); }
    }

    render() {
        this.x.clearRect(0, 0, this.w, this.h);
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.vx *= p.drag; p.vy *= p.drag;
            p.vy += p.gravity;
            p.x += p.vx; p.y += p.vy;
            p.rot += p.rotV; p.op -= 0.009;
            if (p.op <= 0 || p.y > this.h) { this.particles.splice(i, 1); continue; }
            this.x.save();
            this.x.globalAlpha = p.op;
            this.x.fillStyle = p.color;
            this.x.translate(p.x, p.y);
            this.x.rotate((p.rot * Math.PI) / 180);
            this.x.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
            this.x.restore();
        }
        if (this.particles.length > 0) requestAnimationFrame(() => this.render());
        else this.active = false;
    }
}

// ==========================================================================
// MUSIC CONTROLLER
// ==========================================================================
class MusicController {
    constructor() {
        this.audio = document.getElementById('bg-audio');
        this.btn = document.getElementById('music-toggle');
        this.disc = document.getElementById('disc');
        this.playing = false;
        this.started = false;

        if (this.audio && CONFIG.musicSrc) {
            this.audio.src = CONFIG.musicSrc;
            this.audio.loop = true;
        }

        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggle());
        }
    }

    start() {
        if (this.started) return;
        this.started = true;
        if (!this.audio) return;

        this.audio.currentTime = CONFIG.musicStartTime;
        this.audio.volume = 0;

        const playPromise = this.audio.play();
        if (playPromise) {
            playPromise.then(() => {
                this.playing = true;
                this.fadeIn();
                this.disc?.classList.add('spinning');
                // Show music player
                document.getElementById('music-player')?.classList.remove('hidden');
            }).catch(() => {
                // Autoplay blocked — user already interacted so retry once
                setTimeout(() => {
                    this.audio.play().then(() => {
                        this.playing = true;
                        this.fadeIn();
                        this.disc?.classList.add('spinning');
                        document.getElementById('music-player')?.classList.remove('hidden');
                    }).catch(() => {});
                }, 200);
            });
        }
    }

    fadeIn(duration = 2500) {
        const step = 0.05 / (duration / 100);
        const fade = setInterval(() => {
            if (!this.audio) { clearInterval(fade); return; }
            if (this.audio.volume < 0.95) {
                this.audio.volume = Math.min(1, this.audio.volume + step);
            } else {
                clearInterval(fade);
            }
        }, 100);
    }

    toggle() {
        if (!this.audio) return;
        if (this.playing) {
            this.audio.pause();
            this.playing = false;
            this.disc?.classList.remove('spinning');
        } else {
            this.audio.play();
            this.playing = true;
            this.disc?.classList.add('spinning');
        }
    }
}

// ==========================================================================
// MAIN APPLICATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Init FX Engines ---
    const petals = new PetalParticles('petals-canvas');
    const confetti = new Confetti('confetti-canvas');
    const music = new MusicController();

    // --- Populate Hero ---
    const heroImg = document.getElementById('hero-img');
    if (heroImg) heroImg.src = CONFIG.heroPhoto;
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = CONFIG.partnerNickname;

    // --- Populate Polaroids ---
    const stack = document.getElementById('polaroid-stack');
    const totalEl = document.getElementById('polaroid-total');
    const currentEl = document.getElementById('polaroid-current');
    if (stack && CONFIG.memories.length > 0) {
        if (totalEl) totalEl.textContent = CONFIG.memories.length;
        CONFIG.memories.forEach((m, i) => {
            const card = document.createElement('div');
            card.className = 'polaroid-card';
            card.innerHTML = `
                <div class="polaroid-img-wrap">
                    <img src="${m.image}" alt="Foto kenangan ${i + 1}" class="polaroid-img" loading="lazy" onerror="handleImgFail(this)">
                </div>
                <div class="polaroid-caption">
                    <span class="polaroid-caption-text">${m.caption}</span>
                </div>
            `;
            stack.appendChild(card);
        });
    }

    // --- Polaroid Swipe Logic ---
    let polaroidIndex = 0;
    let swipeStartX = 0, swipeStartY = 0, swiping = false;
    const cards = () => stack?.querySelectorAll('.polaroid-card') || [];
    const hintEl = document.getElementById('polaroid-hint');

    const advancePolaroid = () => {
        const allCards = Array.from(cards());
        const topCard = allCards[0];
        if (!topCard || polaroidIndex >= CONFIG.memories.length - 1) return;

        polaroidIndex++;
        if (currentEl) currentEl.textContent = polaroidIndex + 1;

        topCard.classList.add('swipe-away-left');
        topCard.addEventListener('transitionend', () => {
            topCard.remove();
            // Recompute z-index for remaining cards
            Array.from(cards()).forEach((c, i) => {
                c.style.zIndex = CONFIG.memories.length - i;
            });
        }, { once: true });

        if (polaroidIndex >= CONFIG.memories.length - 1 && hintEl) {
            hintEl.textContent = 'Semua foto telah dibuka 🌸';
        }
    };

    if (stack) {
        // Touch events
        stack.addEventListener('touchstart', (e) => {
            swipeStartX = e.touches[0].clientX;
            swipeStartY = e.touches[0].clientY;
            swiping = true;
        }, { passive: true });

        stack.addEventListener('touchend', (e) => {
            if (!swiping) return;
            swiping = false;
            const dx = e.changedTouches[0].clientX - swipeStartX;
            const dy = e.changedTouches[0].clientY - swipeStartY;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                advancePolaroid();
            }
        }, { passive: true });

        // Mouse events (desktop)
        stack.addEventListener('mousedown', (e) => {
            swipeStartX = e.clientX;
            swiping = true;
        });
        stack.addEventListener('mouseup', (e) => {
            if (!swiping) return;
            swiping = false;
            const dx = e.clientX - swipeStartX;
            if (Math.abs(dx) > 50) advancePolaroid();
        });
    }

    // --- Populate Adore List ---
    const adoreList = document.getElementById('adore-list');
    if (adoreList) {
        CONFIG.adoreList.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = 'adore-item';
            el.style.transitionDelay = `${i * 0.1}s`;
            el.innerHTML = `
                <span class="adore-number">${String(i + 1).padStart(2, '0')}</span>
                <div class="adore-text">
                    <h3 class="adore-title">${item.title}</h3>
                    <p class="adore-desc">${item.desc}</p>
                </div>
            `;
            adoreList.appendChild(el);
        });
    }

    // --- Populate Doa ---
    const doaCard = document.getElementById('doa-card');
    if (doaCard) {
        const doaBody = document.createElement('div');
        doaBody.className = 'doa-body';
        CONFIG.doaLines.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            doaBody.appendChild(p);
        });
        const amen = document.createElement('p');
        amen.className = 'doa-amen';
        amen.textContent = 'Aamiin ya Rabbal \'Alamin. ❤️';
        doaBody.appendChild(amen);
        doaCard.appendChild(doaBody);
    }

    // --- Populate Final Letter ---
    const letterInner = document.getElementById('letter-inner');
    if (letterInner && CONFIG.letter) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        let html = `<span class="letter-date">${dateStr}</span>`;
        html += `<p class="letter-salutation">${CONFIG.letter.salutation}</p>`;
        CONFIG.letter.paragraphs.forEach(p => {
            html += `<p class="letter-body-p">${p}</p>`;
        });
        html += `
            <div class="letter-sign">
                <p class="letter-sign-from">${CONFIG.letter.sign}</p>
                <span class="letter-sign-name">${CONFIG.yourName} ❤️</span>
            </div>
        `;
        letterInner.innerHTML = html;

        // Apply body p style
        letterInner.querySelectorAll('.letter-body-p').forEach(el => {
            el.style.cssText = 'font-size:clamp(0.95rem,2.8vw,1.05rem);color:#4A3530;line-height:1.85;margin-bottom:1.25rem;';
        });
    }

    // ==========================================================================
    // PROLOGUE — Whisper Text Sequence + Touch to Start
    // ==========================================================================
    const prologueEl = document.getElementById('prologue');
    const touchPrompt = document.getElementById('touch-prompt');
    const heartbeatInner = document.querySelector('.heartbeat-inner');

    const whisperLines = [
        document.getElementById('w1'),
        document.getElementById('w2'),
        document.getElementById('w3'),
        document.getElementById('w4')
    ].filter(Boolean);

    // Sequence: reveal each whisper line, then show touch prompt
    let idx = 0;
    const revealNext = () => {
        if (idx < whisperLines.length) {
            whisperLines[idx].classList.add('visible');
            idx++;
            setTimeout(revealNext, 1800);
        } else {
            setTimeout(() => {
                if (touchPrompt) touchPrompt.classList.add('visible');
            }, 500);
        }
    };

    setTimeout(revealNext, 800);

    // ==========================================================================
    // CHAPTER REVEAL — triggers 'revealed' class (switches display:none → flex)
    // ==========================================================================
    const revealChapter = (id) => {
        const el = document.getElementById(id);
        if (!el || el.classList.contains('revealed')) return;
        el.classList.add('revealed');
    };

    // Touch / click to unlock next chapter + music
    const startJourney = () => {
        if (prologueEl.dataset.started === '1') return;
        prologueEl.dataset.started = '1';

        music.start();

        // Fade out prologue
        prologueEl.style.transition = 'opacity 1.2s ease';
        prologueEl.style.opacity = '0';
        setTimeout(() => {
            prologueEl.style.display = 'none';
            revealChapter('chapter1');
            // Scroll to chapter1 after reveal
            setTimeout(() => {
                const c1 = document.getElementById('chapter1');
                if (c1) c1.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }, 1200);
    };

    if (heartbeatInner) heartbeatInner.addEventListener('click', startJourney);
    if (touchPrompt) touchPrompt.addEventListener('click', startJourney);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                revealChapter(id);

                // Animate adore items when chapter3 is visible
                if (id === 'chapter3') {
                    setTimeout(() => {
                        document.querySelectorAll('.adore-item').forEach((item, i) => {
                            setTimeout(() => item.classList.add('visible'), i * 120);
                        });
                    }, 300);
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    // Observe chapters 2-6 (chapter1 revealed by prologue tap)
    ['chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6'].forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    // ==========================================================================
    // VIRTUAL 23 CANDLES
    // ==========================================================================
    const candleRow = document.getElementById('candle-base-row');
    let candlesBlown = false;

    if (candleRow) {
        for (let i = 0; i < 23; i++) {
            const candle = document.createElement('div');
            candle.className = 'candle';
            candle.id = `candle-${i}`;
            candle.innerHTML = `
                <div class="flame" id="flame-${i}"></div>
                <div class="candle-body"></div>
            `;
            candleRow.appendChild(candle);
        }
    }

    const blowOutAllCandles = () => {
        if (candlesBlown) return;
        candlesBlown = true;

        const flames = document.querySelectorAll('.flame');
        flames.forEach((flame, i) => {
            setTimeout(() => {
                flame.classList.add('out');
                const smoke = document.createElement('div');
                smoke.className = 'smoke';
                flame.parentElement.appendChild(smoke);
                setTimeout(() => smoke.remove(), 2000);
            }, i * 30);
        });

        // After all blown: show success
        setTimeout(() => {
            const blowZone = document.getElementById('blow-zone');
            const successEl = document.getElementById('candle-success');
            if (blowZone) blowZone.classList.add('hidden');
            if (successEl) successEl.classList.remove('hidden');
            confetti.burst(90);
        }, 23 * 30 + 600);
    };

    // Manual Tap
    const btnTap = document.getElementById('btn-tap');
    if (btnTap) btnTap.addEventListener('click', blowOutAllCandles);

    // Microphone Blow
    const btnMic = document.getElementById('btn-mic');
    const micWrap = document.getElementById('mic-level-wrap');
    const micFill = document.getElementById('mic-level-fill');
    let micStream = null, audioCtx = null, analyser = null, micRaf = null;

    if (btnMic) {
        btnMic.addEventListener('click', async () => {
            if (candlesBlown) return;
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                micStream = stream;
                const AC = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AC();
                analyser = audioCtx.createAnalyser();
                analyser.fftSize = 256;
                const src = audioCtx.createMediaStreamSource(stream);
                src.connect(analyser);

                const instrEl = document.getElementById('blow-instruction');
                if (instrEl) instrEl.textContent = 'Tiup ke mikrofon HP-mu! 💨';
                if (micWrap) micWrap.classList.remove('hidden');
                btnMic.style.display = 'none';

                const data = new Uint8Array(analyser.frequencyBinCount);
                const check = () => {
                    if (candlesBlown) return;
                    analyser.getByteFrequencyData(data);
                    const avg = data.reduce((s, v) => s + v, 0) / data.length;
                    const pct = Math.min((avg / 75) * 100, 100);
                    if (micFill) micFill.style.width = `${pct}%`;
                    if (avg > 65) {
                        micStream.getTracks().forEach(t => t.stop());
                        cancelAnimationFrame(micRaf);
                        blowOutAllCandles();
                        return;
                    }
                    micRaf = requestAnimationFrame(check);
                };
                check();

            } catch {
                const instrEl = document.getElementById('blow-instruction');
                if (instrEl) instrEl.textContent = 'Mikrofon tidak tersedia — gunakan tombol ketuk 💨';
                btnMic.style.display = 'none';
            }
        });
    }

    // ==========================================================================
    // ENVELOPE OPENING — Letter Chapter
    // ==========================================================================
    const envBox = document.getElementById('envelope-box');
    const envFlap = document.getElementById('env-flap');
    const envContainer = document.getElementById('envelope-container');
    const letterSheet = document.getElementById('letter-sheet');
    const finalClosing = document.getElementById('final-closing');

    if (envBox) {
        const openEnvelope = () => {
            if (envBox.dataset.opened === '1') return;
            envBox.dataset.opened = '1';

            if (envFlap) envFlap.classList.add('open');

            setTimeout(() => {
                if (envContainer) {
                    envContainer.style.transition = 'opacity 0.5s ease';
                    envContainer.style.opacity = '0';
                    setTimeout(() => {
                        envContainer.style.display = 'none';
                        if (letterSheet) letterSheet.classList.remove('hidden');
                        setTimeout(() => {
                            if (finalClosing) finalClosing.classList.remove('hidden');
                            confetti.burst(60);
                        }, 800);
                    }, 500);
                }
            }, 700);
        };

        envBox.addEventListener('click', openEnvelope);
        envBox.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
        });
    }

    // ==========================================================================
    // SMOOTH ANCHOR SCROLL for .scroll-down-btn links
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
