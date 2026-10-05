/**
 * ==========================================================================
 * MASTER SCRIPT — ROMANTIC PINTEREST AESTHETIC STORYBOOK
 * ==========================================================================
 * Musik: Sal Priadi — Serta Mulia (Mulai tepat pada detik ke-44 / Reff)
 */

// ==========================================================================
// 1. CONFIGURATION PANEL (DATA UTAMA WEBSITE)
// ==========================================================================
const birthdayConfig = {
    partnerName: "Sayangku",
    partnerNickname: "Sayangku",
    yourName: "Mas Bayu",
    birthdayDate: "6 Oktober 2026",

    // File Musik & Titik Awal Reff (Detik ke-44)
    musicSrc: "assets/music/Serta Mulia-Sal Priadi (Lyrics).mp3",
    reffStartTime: 44, // 0:44 detik

    // Foto Utama (Hero)
    heroPhoto: "assets/photos/IMG-20260517-WA0007.jpg",

    // Chapter 3: 5 Momen Polaroid Paling Berkesan
    memories: [
        {
            image: "assets/photos/photo-01.jpg",
            caption: "Awal mula cerita manis yang selalu kusyukuri 🌸"
        },
        {
            image: "assets/photos/photo-02.jpg",
            caption: "Secangkir kopi & tawamu yang tak pernah bosan kudengar ☕"
        },
        {
            image: "assets/photos/photo-03.jpg",
            caption: "Senja terasa jauh lebih indah saat berdampingan denganmu 🌅"
        },
        {
            image: "assets/photos/photo-04.jpg",
            caption: "Langkah-langkah kecil kita menjelajah dunia berdua 🌿"
        },
        {
            image: "assets/photos/photo-05.jpg",
            caption: "Dan hari ini, merayakan senyum manismu ❤️"
        }
    ],

    // Chapter 4: 4 Hal yang Paling Dikagumi (Ringkas & Puitis ala Pinterest)
    adores: [
        {
            flower: "🌸",
            title: "Ketulusan Hatimu",
            desc: "Caramu menyayangi orang di sekitarmu dengan kelembutan yang selalu menenangkan jiwaku."
        },
        {
            flower: "🌷",
            title: "Tawa Manismu",
            desc: "Suara tawamu adalah melodi paling jujur yang selalu berhasil menghapus segala rasa lelahku."
        },
        {
            flower: "🌹",
            title: "Caramu Menatap Dunia",
            desc: "Matamu yang selalu berbinar penuh semangat saat membicarakan mimpi-mimpi besarmu."
        },
        {
            flower: "💐",
            title: "Kehadiranmu",
            desc: "Bahwa dari miliaran manusia di bumi, bersamamu adalah tempat terbaik untuk pulang."
        }
    ],

    // Chapter 5: Doa Ulang Tahun ke-23
    wishText: `Semoga di usiamu yang ke-23 ini, hatimu senantiasa dilapangkan, langkahmu selalu dimudahkan, dan senyum manismu selalu mekar indah seperti bunga di musim semi. Aamiin ya Rabbal 'Alamin. ❤️`
};

// ==========================================================================
// 2. IMAGE FALLBACK HANDLER (GLOBAL)
// ==========================================================================
window.handleImageFallback = function (imgElement, type = 'general') {
    const title = type === 'hero' ? 'Happy 23rd Birthday' : (type === 'cake' ? 'Aesthetic Cake' : 'Sweet Memories');
    const subtitle = birthdayConfig.partnerNickname || 'Sayangku';

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
        <defs>
            <linearGradient id="bgG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFF0F3"/>
                <stop offset="50%" stop-color="#FFF9FA"/>
                <stop offset="100%" stop-color="#FCE1E7"/>
            </linearGradient>
            <radialGradient id="sun" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#FFF0F3" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="600" height="750" fill="url(#bgG)"/>
        <circle cx="300" cy="300" r="220" fill="url(#sun)"/>
        <g text-anchor="middle" font-family="'Georgia', serif" fill="#382229">
            <text x="300" y="290" font-size="36" font-weight="bold">${title}</text>
            <text x="300" y="340" font-size="24" font-style="italic" fill="#D86B84">✦ ${subtitle} ✦</text>
            <text x="300" y="390" font-size="16" font-family="sans-serif" fill="#745C64">Simpan foto di assets/photos</text>
            <text x="300" y="440" font-size="34">🌸 💖 🌸</text>
        </g>
    </svg>`;

    imgElement.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    imgElement.onerror = null;
};

// ==========================================================================
// 3. FLOATING PINK PETALS & HEARTS CANVAS
// ==========================================================================
class FloatingPetalsEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.petals = [];
        this.maxPetals = 22;
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.init();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    init() {
        this.petals = [];
        for (let i = 0; i < this.maxPetals; i++) {
            this.petals.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 12 + 8,
                speedY: Math.random() * 0.65 + 0.35,
                speedX: Math.sin(Math.random() * Math.PI) * 0.45,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1.2,
                opacity: Math.random() * 0.45 + 0.3,
                type: Math.random() > 0.4 ? 'petal' : 'heart',
                color: Math.random() > 0.4 ? '#F7CAD0' : '#FCE1E7'
            });
        }
    }

    drawHeart(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.opacity;

        const size = p.size * 0.8;
        this.ctx.beginPath();
        const topCurveHeight = size * 0.3;
        this.ctx.moveTo(0, topCurveHeight);
        this.ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, size / 3, 0, size);
        this.ctx.bezierCurveTo(size, size / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
        this.ctx.fill();
        this.ctx.restore();
    }

    drawPetal(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.opacity;

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.quadraticCurveTo(p.size / 2, -p.size, p.size, 0);
        this.ctx.quadraticCurveTo(p.size / 2, p.size, 0, 0);
        this.ctx.fill();
        this.ctx.restore();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let p of this.petals) {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            if (p.y > this.height + 20) {
                p.y = -20;
                p.x = Math.random() * this.width;
            }

            if (p.type === 'heart') {
                this.drawHeart(p);
            } else {
                this.drawPetal(p);
            }
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 4. BOTANICAL FLIGHT ENGINE (DANDELION SEEDS & BLOOMING PETALS)
// ==========================================================================
class BotanicalFlightEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.isAnimating = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    // Classic Confetti Burst
    burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 75) {
        const colors = ['#F7CAD0', '#F29BB0', '#D86B84', '#FFFFFF', '#F5E6BD'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 8 + 3;
            this.particles.push({
                kind: 'confetti',
                x, y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity - Math.random() * 3,
                size: Math.random() * 7 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                gravity: 0.2,
                drag: 0.96
            });
        }
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.render();
        }
    }

    // SPECIAL: Flying Dandelion Seeds, Fluttering Petals & Blooming Blossoms!
    burstDandelionAndPetals(x = window.innerWidth / 2, y = window.innerHeight / 2) {
        const petalColors = ['#FFF0F5', '#FAD2E1', '#F7CAD0', '#F29BB0', '#FCE1E7', '#FEE2E8'];

        const spawnBotanicalWave = (waveX, waveY, seedCount, petalCount, blossomCount, sparkleCount, speedFactor = 1) => {
            // 1. Botanical Dandelion Parachute Seeds (with stems & feathery bristles)
            for (let i = 0; i < seedCount; i++) {
                const angle = -Math.PI * 0.92 + Math.random() * Math.PI * 0.84; // Upward wind fan
                const speed = (Math.random() * 6.5 + 2.5) * speedFactor;
                this.particles.push({
                    kind: 'dandelion',
                    x: waveX + (Math.random() - 0.5) * 50,
                    y: waveY + (Math.random() - 0.5) * 45,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 1.8,
                    size: Math.random() * 12 + 16,
                    opacity: 1,
                    rotation: Math.random() * 0.4 - 0.2,
                    rotationSpeed: (Math.random() - 0.5) * 0.04,
                    swayPhase: Math.random() * Math.PI * 2,
                    swaySpeed: Math.random() * 0.05 + 0.025,
                    swayAmp: Math.random() * 1.8 + 0.8,
                    drag: 0.985,
                    upwardLift: Math.random() * 0.08 + 0.045
                });
            }

            // 2. Blooming Flower Petals (fluttering and flipping in 3D)
            for (let i = 0; i < petalCount; i++) {
                const angle = -Math.PI * 0.96 + Math.random() * Math.PI * 0.92;
                const speed = (Math.random() * 7.5 + 2.8) * speedFactor;
                this.particles.push({
                    kind: 'petal',
                    x: waveX + (Math.random() - 0.5) * 40,
                    y: waveY + (Math.random() - 0.5) * 40,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 1.2,
                    size: Math.random() * 9 + 8,
                    color: petalColors[Math.floor(Math.random() * petalColors.length)],
                    opacity: 1,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 5.5,
                    flipAngle: Math.random() * Math.PI,
                    flipSpeed: Math.random() * 0.08 + 0.04,
                    drag: 0.97,
                    gravity: -0.02
                });
            }

            // 3. Miniature Blooming Blossom Flowers (expanding & blossoming as they fly)
            for (let i = 0; i < blossomCount; i++) {
                const angle = -Math.PI * 0.88 + Math.random() * Math.PI * 0.76;
                const speed = (Math.random() * 5.5 + 2) * speedFactor;
                this.particles.push({
                    kind: 'blossom',
                    x: waveX + (Math.random() - 0.5) * 35,
                    y: waveY + (Math.random() - 0.5) * 35,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 1.5,
                    size: Math.random() * 7 + 10,
                    scale: 0.35,
                    bloomSpeed: Math.random() * 0.02 + 0.012,
                    maxScale: Math.random() * 0.4 + 0.9,
                    color: petalColors[Math.floor(Math.random() * petalColors.length)],
                    opacity: 1,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.03,
                    drag: 0.98,
                    gravity: -0.035
                });
            }

            // 4. Golden Fairy Sparkles & Stardust
            for (let i = 0; i < sparkleCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = (Math.random() * 6 + 1.5) * speedFactor;
                this.particles.push({
                    kind: 'sparkle',
                    x: waveX,
                    y: waveY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 2,
                    size: Math.random() * 5 + 3,
                    color: '#E5C158',
                    opacity: 1,
                    rotation: Math.random() * 360,
                    rotationSpeed: 0.05,
                    drag: 0.94
                });
            }

            if (!this.isAnimating) {
                this.isAnimating = true;
                this.render();
            }
        };

        // Primary Burst directly from dandelion head
        spawnBotanicalWave(x, y, 55, 45, 20, 30, 1);

        // Secondary Wind Wave (Updraft carrying petals higher across screen)
        setTimeout(() => {
            spawnBotanicalWave(x, y - 40, 30, 25, 12, 15, 0.85);
        }, 220);

        // Third Gentle Breeze (Floating petals and seeds reaching skyward)
        setTimeout(() => {
            spawnBotanicalWave(x + (Math.random() - 0.5) * 60, y - 80, 20, 20, 8, 10, 0.7);
        }, 550);
    }

    drawDandelionSeed(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.globalAlpha = p.opacity;

        // Seed Body (tiny brown droplet)
        this.ctx.fillStyle = '#6E4D3E';
        this.ctx.beginPath();
        this.ctx.ellipse(0, p.size * 0.45, 1.4, 3.2, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Slender stem
        this.ctx.strokeStyle = 'rgba(160, 140, 130, 0.75)';
        this.ctx.lineWidth = 0.9;
        this.ctx.beginPath();
        this.ctx.moveTo(0, p.size * 0.35);
        this.ctx.lineTo(0, -p.size * 0.1);
        this.ctx.stroke();

        // Fluffy Umbrella Rays (Parachute)
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
        this.ctx.lineWidth = 0.8;
        const rays = 9;
        const radius = p.size * 0.55;
        for (let i = 0; i < rays; i++) {
            const rayAngle = -Math.PI * 0.88 + (i / (rays - 1)) * Math.PI * 0.76;
            const rx = Math.cos(rayAngle) * radius;
            const ry = Math.sin(rayAngle) * radius * 0.55 - p.size * 0.1;
            this.ctx.beginPath();
            this.ctx.moveTo(0, -p.size * 0.1);
            this.ctx.lineTo(rx, ry);
            this.ctx.stroke();

            // Feathery tuft at ray tip
            this.ctx.fillStyle = 'rgba(255, 245, 248, 0.9)';
            this.ctx.beginPath();
            this.ctx.arc(rx, ry, 1.3, 0, Math.PI * 2);
            this.ctx.fill();
        }

        this.ctx.restore();
    }

    drawPetalParticle(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.scale(Math.cos(p.flipAngle), 1);
        this.ctx.globalAlpha = p.opacity;

        // Organic curved flower petal shape
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size);
        this.ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.85, p.size * 0.6, 0, p.size);
        this.ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.6, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        this.ctx.fill();

        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        this.ctx.lineWidth = 0.6;
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawBlossomParticle(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.scale(p.scale, p.scale);
        this.ctx.globalAlpha = p.opacity;

        // 5 Rounded Petals
        const petals = 5;
        this.ctx.fillStyle = p.color;
        for (let i = 0; i < petals; i++) {
            this.ctx.save();
            this.ctx.rotate((i * Math.PI * 2) / petals);
            this.ctx.beginPath();
            this.ctx.ellipse(0, -p.size * 0.5, p.size * 0.38, p.size * 0.55, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        // Blossom Pistil (Golden Center)
        this.ctx.fillStyle = '#FCE082';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
    }

    drawSparkleParticle(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.globalAlpha = p.opacity;
        this.ctx.fillStyle = p.color;

        // 4-point star
        this.ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            this.ctx.lineTo(0, -p.size);
            this.ctx.lineTo(p.size * 0.25, -p.size * 0.25);
            this.ctx.rotate(Math.PI / 2);
        }
        this.ctx.fill();
        this.ctx.restore();
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            if (p.kind === 'dandelion') {
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.vy -= p.upwardLift; // Floats upward
                p.swayPhase += p.swaySpeed;
                p.x += p.vx + Math.sin(p.swayPhase) * p.swayAmp;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.0042; // Long graceful flight

                if (p.opacity <= 0 || p.y < -50 || p.x < -40 || p.x > this.width + 40) {
                    this.particles.splice(i, 1);
                    continue;
                }
                this.drawDandelionSeed(p);

            } else if (p.kind === 'petal') {
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;
                p.flipAngle += p.flipSpeed;
                p.opacity -= 0.0055;

                if (p.opacity <= 0 || p.y < -50 || p.y > this.height + 40) {
                    this.particles.splice(i, 1);
                    continue;
                }
                this.drawPetalParticle(p);

            } else if (p.kind === 'blossom') {
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;
                if (p.scale < p.maxScale) p.scale += p.bloomSpeed; // Blossom grows/blooms in air!
                p.opacity -= 0.005;

                if (p.opacity <= 0 || p.y < -50) {
                    this.particles.splice(i, 1);
                    continue;
                }
                this.drawBlossomParticle(p);

            } else if (p.kind === 'sparkle') {
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.x += p.vx;
                p.y += p.vy;
                p.opacity -= 0.015;

                if (p.opacity <= 0) {
                    this.particles.splice(i, 1);
                    continue;
                }
                this.drawSparkleParticle(p);

            } else {
                // Classic confetti
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.01;

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
// 5. MAIN CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    const petalsFX = new FloatingPetalsEngine('petals-canvas');
    const botanicalFX = new BotanicalFlightEngine('confetti-canvas');
    const confettiFX = botanicalFX; // Provides classic .burst() for other chapters

    // ----------------------------------------------------------------------
    // A. Bind Config Data
    // ----------------------------------------------------------------------
    const heroPartnerName = document.getElementById('hero-partner-name');
    if (heroPartnerName) heroPartnerName.textContent = birthdayConfig.partnerNickname;

    const heroImg = document.getElementById('hero-img');
    if (heroImg && birthdayConfig.heroPhoto) heroImg.src = birthdayConfig.heroPhoto;

    const letterAuthor = document.getElementById('letter-author-name');
    if (letterAuthor) letterAuthor.textContent = birthdayConfig.yourName;

    const footerPartner = document.getElementById('footer-partner-label');
    if (footerPartner) footerPartner.textContent = birthdayConfig.partnerNickname;

    const wishContent = document.getElementById('wish-text-content');
    if (wishContent && birthdayConfig.wishText) {
        wishContent.innerHTML = `<p>${birthdayConfig.wishText}</p>`;
    }

    // ----------------------------------------------------------------------
    // B. Professional Motion Observer (Scroll-Triggered Reveals)
    // ----------------------------------------------------------------------
    const initScrollObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    };

    initScrollObserver();

    // ----------------------------------------------------------------------
    // C. Audio Controller (Reff Start @ 44s)
    // ----------------------------------------------------------------------
    const bgAudio = document.getElementById('bg-audio');
    const floatingAudioPill = document.getElementById('floating-audio-pill');
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    let isPlaying = false;

    if (bgAudio) {
        bgAudio.src = birthdayConfig.musicSrc;
        bgAudio.loop = false; // Pastikan loop bawaan mati agar memicu event 'ended'

        // Otomatis ulangi lagu dari detik ke-44 (Reff) ketika lagu selesai
        bgAudio.addEventListener('ended', () => {
            bgAudio.currentTime = birthdayConfig.reffStartTime; // 44 detik
            const replayPromise = bgAudio.play();
            if (replayPromise !== undefined) {
                replayPromise.then(() => {
                    isPlaying = true;
                    if (btnAudioToggle) btnAudioToggle.style.opacity = '1';
                }).catch(err => {
                    console.warn("Audio loop replay error:", err);
                });
            }
        });
    }

    const playMusicFromReff = () => {
        if (!bgAudio) return;
        try {
            bgAudio.currentTime = birthdayConfig.reffStartTime; // 44 detik
            bgAudio.volume = 0;
            const playPromise = bgAudio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    if (floatingAudioPill) floatingAudioPill.classList.remove('hidden');

                    // Smooth audio fade-in over 2 seconds
                    let vol = 0;
                    const fadeInterval = setInterval(() => {
                        vol += 0.05;
                        if (vol >= 0.85) {
                            bgAudio.volume = 0.85;
                            clearInterval(fadeInterval);
                        } else {
                            bgAudio.volume = vol;
                        }
                    }, 100);
                }).catch(err => {
                    console.warn("Audio autoplay constraint:", err);
                });
            }
        } catch (e) {
            console.warn("Audio error:", e);
        }
    };

    if (btnAudioToggle && bgAudio) {
        btnAudioToggle.addEventListener('click', () => {
            if (isPlaying) {
                bgAudio.pause();
                isPlaying = false;
                btnAudioToggle.style.opacity = '0.5';
            } else {
                bgAudio.play();
                isPlaying = true;
                btnAudioToggle.style.opacity = '1';
            }
        });
    }

    // ----------------------------------------------------------------------
    // D. Chapter 1: Prologue Whisper Sequence Animation
    // ----------------------------------------------------------------------
    const line1 = document.querySelector('.whisper-line.line-1');
    const line2 = document.querySelector('.whisper-line.line-2');
    const line3 = document.querySelector('.whisper-line.line-3');
    const touchBox = document.getElementById('touch-interactive-box');
    const btnStart = document.getElementById('btn-start-journey');

    setTimeout(() => { if (line1) line1.classList.add('revealed'); }, 400);
    setTimeout(() => { if (line2) line2.classList.add('revealed'); }, 1800);
    setTimeout(() => { if (line3) line3.classList.add('revealed'); }, 3200);
    setTimeout(() => { if (touchBox) touchBox.classList.add('revealed'); }, 4400);

    // Trigger on touch ribbon bow button
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            playMusicFromReff();
            confettiFX.burst(window.innerWidth / 2, window.innerHeight / 2, 85);

            const prologueChapter = document.getElementById('chapter-prologue');
            const heroChapter = document.getElementById('chapter-hero');

            if (prologueChapter && heroChapter) {
                prologueChapter.style.opacity = '0';
                setTimeout(() => {
                    prologueChapter.classList.add('hidden-chapter');
                    heroChapter.classList.remove('hidden-chapter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    // Trigger scroll observer for new elements
                    initScrollObserver();
                }, 600);
            }
        });
    }

    // ----------------------------------------------------------------------
    // E. Chapter Navigation Buttons
    // ----------------------------------------------------------------------
    document.querySelectorAll('.btn-next-chapter').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetChapter = document.getElementById(targetId);
            if (targetChapter) {
                targetChapter.classList.remove('hidden-chapter');
                targetChapter.scrollIntoView({ behavior: 'smooth' });
                initScrollObserver();
            }
        });
    });

    // ----------------------------------------------------------------------
    // F. Chapter 3: Pinterest Polaroid Stack with Washi Tape & Balanced Spacing
    // ----------------------------------------------------------------------
    const polaroidStack = document.getElementById('polaroid-stack');
    const counterText = document.getElementById('polaroid-counter-text');
    let currentPolaroidIndex = 0;

    if (polaroidStack && birthdayConfig.memories.length > 0) {
        polaroidStack.innerHTML = birthdayConfig.memories.map((m, idx) => `
            <div class="polaroid-card" data-index="${idx}" style="z-index: ${birthdayConfig.memories.length - idx}">
                <div class="washi-tape top-center"></div>
                <div class="polaroid-photo-frame">
                    <img src="${m.image}" alt="Momen ${idx + 1}" class="polaroid-photo" loading="lazy" onerror="window.handleImageFallback(this, 'gallery')">
                </div>
                <div class="polaroid-caption-box">
                    <p class="polaroid-caption-text">${m.caption}</p>
                </div>
            </div>
        `).join('');

        const cards = polaroidStack.querySelectorAll('.polaroid-card');

        cards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                card.classList.add('swiped-away');
                currentPolaroidIndex++;

                if (counterText) {
                    const displayNum = Math.min(currentPolaroidIndex + 1, cards.length);
                    counterText.textContent = `Foto ${displayNum} dari ${cards.length}`;
                }

                confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.45, 25);

                // If all swiped, reset stack smoothly
                if (currentPolaroidIndex >= cards.length) {
                    setTimeout(() => {
                        cards.forEach(c => c.classList.remove('swiped-away'));
                        currentPolaroidIndex = 0;
                        if (counterText) counterText.textContent = `Foto 1 dari ${cards.length}`;
                    }, 700);
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // G. Chapter 4: Things I Adore List Injection
    // ----------------------------------------------------------------------
    const adoreList = document.getElementById('adore-cards-list');
    if (adoreList && birthdayConfig.adores) {
        adoreList.innerHTML = birthdayConfig.adores.map(item => `
            <div class="adore-card">
                <span class="adore-flower-badge">${item.flower}</span>
                <div class="adore-content-box">
                    <h3 class="adore-title">${item.title}</h3>
                    <p class="adore-desc">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // H. Chapter 5: The Dandelion Wish & Blowing (Mic + Fallback)
    // ----------------------------------------------------------------------
    const btnMicBlow = document.getElementById('btn-mic-blow');
    const btnTapBlow = document.getElementById('btn-tap-blow');
    const micStatusLabel = document.getElementById('mic-status-label');
    const micGaugeBar = document.getElementById('mic-gauge-bar');
    const micGaugeFill = document.getElementById('mic-gauge-fill');
    const wishSuccessBox = document.getElementById('wish-success-box');
    const blowActionWrapper = document.getElementById('blow-action-wrapper');

    let isDandelionBlown = false;
    let micStream = null;
    let micAnimId = null;

    const blowDandelion = () => {
        if (isDandelionBlown) return;
        isDandelionBlown = true;

        if (micStream) {
            micStream.getTracks().forEach(t => t.stop());
            micStream = null;
        }
        if (micAnimId) cancelAnimationFrame(micAnimId);

        // 1. Dandelion Photo Glow & Bloom state
        const dandelionImg = document.getElementById('dandelion-photo-img');
        if (dandelionImg) dandelionImg.classList.add('is-blown');

        // 2. Expand blooming floral rosette & radial floating petals in DOM
        const bloomEffect = document.getElementById('blooming-flower-effect');
        if (bloomEffect) {
            bloomEffect.innerHTML = `
                <div class="blooming-rosette"></div>
                <div class="blooming-rosette ring-2"></div>
            `;
            // Add radial flying floral symbols
            const flowerSymbols = ['🌸', '🌾', '🌷', '✨', '💐', '🌸', '🌾', '💖'];
            flowerSymbols.forEach((sym, idx) => {
                const petalEl = document.createElement('span');
                petalEl.className = 'blooming-floating-petal';
                petalEl.textContent = sym;
                const angle = (idx / flowerSymbols.length) * Math.PI * 2;
                const dist = 70 + Math.random() * 50;
                petalEl.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
                petalEl.style.setProperty('--ty', `${Math.sin(angle) * dist - 50}px`);
                petalEl.style.setProperty('--rot', `${Math.random() * 180 - 90}deg`);
                bloomEffect.appendChild(petalEl);
            });
        }

        // 3. Animate existing floating seed auras
        const seedAuras = document.querySelectorAll('.seed-aura');
        seedAuras.forEach((sa) => {
            sa.style.transition = 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
            sa.style.transform = `translateY(-90px) scale(1.6)`;
            sa.style.opacity = '0';
        });

        // 4. Calculate dandelion position for realistic origin
        const dCard = document.querySelector('.aesthetic-dandelion-card');
        const rect = dCard ? dCard.getBoundingClientRect() : null;
        const originX = rect ? (rect.left + rect.width / 2) : (window.innerWidth / 2);
        const originY = rect ? (rect.top + rect.height * 0.42) : (window.innerHeight * 0.4);

        // 5. Fire the Botanical Flight Engine (Dandelion Seeds + Blooming Petals + Blossoms)
        if (botanicalFX) {
            botanicalFX.burstDandelionAndPetals(originX, originY);
        }

        setTimeout(() => {
            if (blowActionWrapper) blowActionWrapper.style.display = 'none';
            if (wishSuccessBox) wishSuccessBox.classList.remove('hidden');
        }, 850);
    };

    if (btnTapBlow) {
        btnTapBlow.addEventListener('click', blowDandelion);
    }

    if (btnMicBlow) {
        btnMicBlow.addEventListener('click', async () => {
            if (isDandelionBlown) return;
            try {
                if (micStatusLabel) micStatusLabel.textContent = "Meminta izin mikrofon...";
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                micStream = stream;

                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                const audioCtx = new AudioCtx();
                const analyser = audioCtx.createAnalyser();
                analyser.fftSize = 256;
                const source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyser);

                if (micStatusLabel) micStatusLabel.textContent = "Mikrofon aktif! Hembuskan napasmu pada bunga dandelion! 💨";
                if (micGaugeBar) micGaugeBar.classList.remove('hidden');
                if (btnMicBlow) btnMicBlow.classList.add('hidden');

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                const checkBlow = () => {
                    if (isDandelionBlown) return;
                    analyser.getByteFrequencyData(dataArray);

                    let sum = 0;
                    for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
                    const avg = sum / dataArray.length;

                    const percent = Math.min((avg / 80) * 100, 100);
                    if (micGaugeFill) micGaugeFill.style.width = `${percent}%`;

                    if (avg > 58) {
                        blowDandelion();
                        return;
                    }
                    micAnimId = requestAnimationFrame(checkBlow);
                };
                checkBlow();

            } catch (err) {
                console.warn("Microphone access error:", err);
                if (micStatusLabel) {
                    micStatusLabel.textContent = "Tidak dapat mengakses mikrofon. Ketuk tombol tiup di bawah ini! ❤️";
                }
                if (btnMicBlow) btnMicBlow.style.display = 'none';
            }
        });
    }

    // ----------------------------------------------------------------------
    // I. Chapter 6: Botanical Envelope & Final Letter
    // ----------------------------------------------------------------------
    const envelope = document.getElementById('botanical-envelope');
    const flap = document.getElementById('envelope-top-flap');
    const unfoldedLetter = document.getElementById('unfolded-letter-paper');

    if (envelope && unfoldedLetter) {
        envelope.addEventListener('click', () => {
            if (flap) flap.classList.add('open');
            confettiFX.burst(window.innerWidth / 2, window.innerHeight * 0.6, 60);

            setTimeout(() => {
                envelope.style.display = 'none';
                unfoldedLetter.classList.add('revealed');
            }, 500);
        });
    }

    // ----------------------------------------------------------------------
    // J. Easter Egg Secret Modal
    // ----------------------------------------------------------------------
    const easterBtn = document.getElementById('footer-easter-egg');
    const easterModal = document.getElementById('easter-egg-modal');
    const easterClose = document.getElementById('btn-close-easter');
    const easterBackdrop = document.getElementById('easter-backdrop');
    let clickCount = 0;
    let timer = null;

    if (easterBtn && easterModal) {
        easterBtn.addEventListener('click', () => {
            clickCount++;
            clearTimeout(timer);
            timer = setTimeout(() => { clickCount = 0; }, 2500);

            if (clickCount >= 4) {
                clickCount = 0;
                easterModal.classList.remove('hidden');
                confettiFX.burst(window.innerWidth / 2, window.innerHeight / 2, 80);
            }
        });

        const closeEaster = () => easterModal.classList.add('hidden');
        if (easterClose) easterClose.addEventListener('click', closeEaster);
        if (easterBackdrop) easterBackdrop.addEventListener('click', closeEaster);
    }
});
