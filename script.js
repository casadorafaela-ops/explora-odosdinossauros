/* =========================================================
   DINOWORLD
   ESTILO PRINCIPAL
========================================================= */

:root {
    --bg: #07110c;
    --bg-light: #0b1810;
    --bg-card: #0b1911;

    --green: #b7cf52;
    --green-light: #d5e77c;
    --green-dark: #405c24;

    --text: #f0eee1;
    --text-soft: #cbd1c4;
    --text-muted: #899486;

    --border: rgba(160, 185, 100, 0.18);

    --brown: #6d5536;

    --serif: "Playfair Display", Georgia, serif;
    --sans: "DM Sans", Arial, sans-serif;

    --max-width: 1010px;
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    background:
        radial-gradient(
            circle at 80% 10%,
            rgba(80, 120, 50, 0.15),
            transparent 30%
        ),
        radial-gradient(
            circle at 10% 70%,
            rgba(65, 95, 42, 0.10),
            transparent 30%
        ),
        #07110c;

    color: var(--text);

    font-family: var(--sans);

    overflow-x: hidden;
}


/* grid tecnológico */

body::before {
    content: "";

    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: 0.32;

    background-image:
        linear-gradient(
            rgba(130, 160, 90, 0.08) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(130, 160, 90, 0.08) 1px,
            transparent 1px
        );

    background-size: 60px 60px;

    z-index: -2;
}


/* brilho */

.background-glow {
    position: fixed;

    width: 450px;
    height: 450px;

    border-radius: 50%;

    filter: blur(100px);

    pointer-events: none;

    opacity: 0.08;

    z-index: -3;
}

.glow-one {
    background: #8ba73d;
    top: 10%;
    right: -180px;
}

.glow-two {
    background: #3d7138;
    bottom: 5%;
    left: -180px;
}


/* =========================================================
   TIPOGRAFIA
========================================================= */

h1,
h2,
h3,
h4 {
    font-family: var(--serif);

    font-weight: 500;

    color: var(--text);
}

h1 em,
h2 em {
    color: #89927e;

    font-style: italic;
}

p {
    color: var(--text-soft);

    line-height: 1.75;
}

a {
    color: inherit;

    text-decoration: none;
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: sticky;

    top: 0;

    z-index: 100;

    height: 82px;

    background: rgba(5, 15, 9, 0.88);

    border-bottom: 1px solid var(--border);

    backdrop-filter: blur(18px);
}

.header-inner {
    max-width: var(--max-width);

    height: 100%;

    margin: auto;

    padding: 0 22px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


/* marca */

.brand {
    display: flex;

    align-items: center;

    gap: 12px;
}

.brand-icon {
    width: 40px;
    height: 40px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(183, 207, 82, 0.28);

    background: rgba(100, 130, 45, 0.10);

    color: var(--green);

    font-size: 19px;
}

.brand-text {
    display: flex;

    flex-direction: column;

    gap: 3px;
}

.brand-text strong {
    color: var(--text);

    font-size: 14px;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}

.brand-text span {
    color: #657060;

    font-size: 7px;

    letter-spacing: 2.3px;
}


/* navegação */

.main-nav {
    display: flex;

    align-items: center;

    gap: 27px;
}

.nav-link {
    position: relative;

    color: #909a8c;

    font-size: 9px;

    font-weight: 600;

    letter-spacing: 1.6px;

    text-transform: uppercase;

    transition: color 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text);
}

.nav-link.active::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;

    bottom: -13px;

    height: 1px;

    background: var(--green);
}

.ai-link {
    color: var(--green);
}


/* menu mobile */

.mobile-menu-button {
    display: none;

    border: 1px solid var(--border);

    background: transparent;

    color: var(--text);

    width: 42px;
    height: 42px;

    cursor: pointer;

    font-size: 18px;
}


/* =========================================================
   ESTRUTURA
========================================================= */

.section {
    max-width: var(--max-width);

    margin: 0 auto;

    padding: 120px 22px;
}

.section-number {
    color: #65715d;

    font-size: 8px;

    letter-spacing: 4px;

    margin-bottom: 8px;
}

.section-label {
    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2.5px;
}

.section-heading {
    display: grid;

    grid-template-columns: 160px 1fr;

    gap: 55px;

    margin-bottom: 60px;
}

.section-heading h2 {
    max-width: 650px;

    font-size: clamp(42px, 6vw, 70px);

    line-height: 1.02;

    margin-bottom: 20px;
}

.section-heading p {
    max-width: 580px;

    font-size: 14px;

    color: var(--text-soft);
}


/* =========================================================
   HERO
========================================================= */

.hero {
    position: relative;

    min-height: calc(100vh - 82px);

    max-width: var(--max-width);

    margin: 0 auto;

    padding: 90px 22px 100px;

    display: grid;

    grid-template-columns: 1fr 0.8fr;

    align-items: center;

    gap: 50px;

    overflow: hidden;
}

.hero-content {
    position: relative;

    z-index: 2;
}

.hero-tag {
    display: inline-block;

    margin-bottom: 27px;

    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 3px;
}

.hero h1 {
    max-width: 650px;

    font-size: clamp(55px, 7vw, 92px);

    line-height: 0.98;

    letter-spacing: -2px;

    margin-bottom: 30px;
}

.hero-description {
    max-width: 520px;

    font-size: 15px;

    color: var(--text-soft);

    margin-bottom: 34px;
}


/* botões */

.hero-actions {
    display: flex;

    align-items: center;

    gap: 12px;

    flex-wrap: wrap;
}

.button {
    min-height: 46px;

    padding: 0 20px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 18px;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1.2px;

    text-transform: uppercase;

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
}

.button:hover {
    transform: translateY(-2px);
}

.button-primary {
    background: var(--green);

    color: #091108;
}

.button-primary:hover {
    background: var(--green-light);
}

.button-secondary {
    border: 1px solid var(--border);

    color: var(--text-soft);
}

.button-secondary:hover {
    border-color: var(--green);

    color: var(--green);
}


/* estatísticas */

.hero-stats {
    display: flex;

    gap: 45px;

    margin-top: 65px;
}

.stat {
    display: flex;

    flex-direction: column;

    gap: 5px;
}

.stat strong {
    font-family: var(--serif);

    color: var(--text);

    font-size: 28px;

    font-weight: 500;
}

.stat span {
    color: #707b6d;

    font-size: 7px;

    letter-spacing: 2px;
}


/* visual */

.hero-visual {
    position: relative;

    height: 500px;

    display: grid;

    place-items: center;
}

.hero-dino-image {
    position: relative;

    z-index: 2;

    width: 100%;

    overflow: hidden;

    border: 1px solid rgba(180, 205, 90, 0.14);

    background: #08140c;

    box-shadow:
        0 0 80px rgba(100, 130, 50, 0.08),
        inset 0 0 70px rgba(0, 0, 0, 0.45);

    transform: rotate(-2deg);
}

.hero-dino-image img {
    width: 100%;

    height: 350px;

    display: block;

    object-fit: cover;

    filter:
        brightness(0.76)
        saturate(0.82)
        contrast(1.12);

    transition: transform 0.6s ease;
}

.hero-dino-image:hover img {
    transform: scale(1.05);
}


/* órbitas */

.hero-orbit {
    position: absolute;

    border: 1px solid rgba(150, 180, 90, 0.11);

    border-radius: 50%;
}

.orbit-one {
    width: 430px;
    height: 250px;

    transform: rotate(-24deg);
}

.orbit-two {
    width: 520px;
    height: 310px;

    transform: rotate(28deg);
}


/* informações */

.hero-data {
    position: absolute;

    z-index: 3;

    padding: 12px 16px;

    border: 1px solid rgba(180, 205, 90, 0.18);

    background: rgba(7, 17, 12, 0.86);

    backdrop-filter: blur(10px);
}

.hero-data span {
    display: block;

    color: #78836e;

    font-size: 6px;

    letter-spacing: 2px;

    margin-bottom: 4px;
}

.hero-data strong {
    color: var(--green);

    font-size: 10px;

    letter-spacing: 1px;
}

.data-one {
    top: 75px;

    left: -15px;
}

.data-two {
    right: -15px;

    bottom: 90px;
}


/* scroll */

.scroll-indicator {
    position: absolute;

    bottom: 22px;

    left: 50%;

    transform: translateX(-50%);

    display: flex;

    align-items: center;

    gap: 14px;

    color: #626d5e;

    font-size: 7px;

    letter-spacing: 2.5px;
}

.scroll-indicator div {
    width: 45px;

    height: 1px;

    background: #4a5845;
}


/* =========================================================
   INTRO
========================================================= */

.intro {
    border-top: 1px solid var(--border);

    border-bottom: 1px solid var(--border);
}

.intro-grid {
    display: grid;

    grid-template-columns: 1.2fr 0.8fr;

    gap: 100px;

    margin-top: 35px;
}

.intro-grid h2 {
    font-size: clamp(48px, 6vw, 75px);

    line-height: 1.03;

    letter-spacing: -1px;
}

.intro-text {
    padding-top: 10px;
}

.intro-text p {
    font-size: 14px;

    margin-bottom: 22px;
}

.text-link {
    display: inline-flex;

    align-items: center;

    gap: 12px;

    margin-top: 18px;

    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;
}

.text-link span {
    transition: transform 0.2s ease;
}

.text-link:hover span {
    transform: translate(4px, -4px);
}


/* =========================================================
   PESQUISA
========================================================= */

.search-area {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    margin-bottom: 35px;
}

.search-box {
    flex: 1;

    max-width: 570px;

    height: 48px;

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 0 14px;

    border: 1px solid var(--border);

    background: rgba(7, 17, 12, 0.65);

    transition: border 0.25s ease;
}

.search-box:focus-within {
    border-color: rgba(183, 207, 82, 0.55);
}

.search-icon {
    color: var(--green);

    font-size: 20px;
}

.search-box input {
    width: 100%;

    border: 0;

    outline: 0;

    background: transparent;

    color: var(--text);

    font-family: var(--sans);

    font-size: 13px;
}

.search-box input::placeholder {
    color: #707b6d;
}

.search-box kbd {
    color: #6b7668;

    border: 1px solid var(--border);

    padding: 3px 7px;

    font-size: 9px;
}


/* filtros */

.filter-buttons {
    display: flex;

    gap: 6px;
}

.filter-button {
    height: 36px;

    padding: 0 13px;

    border: 1px solid var(--border);

    background: transparent;

    color: #8c9687;

    cursor: pointer;

    font-family: var(--sans);

    font-size: 9px;

    font-weight: 600;

    transition:
        background 0.2s ease,
        color 0.2s ease,
        border 0.2s ease;
}

.filter-button:hover,
.filter-button.active {
    background: rgba(183, 207, 82, 0.10);

    border-color: rgba(183, 207, 82, 0.45);

    color: var(--green);
}


/* resultado */

.search-result {
    min-height: 20px;

    margin-bottom: 15px;

    color: #7f8a79;

    font-size: 10px;

    letter-spacing: 0.5px;
}


/* =========================================================
   CARDS
========================================================= */

.dinosaur-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 16px;
}

.dino-card {
    position: relative;

    overflow: hidden;

    border: 1px solid var(--border);

    background:
        linear-gradient(
            145deg,
            rgba(20, 40, 25, 0.75),
            rgba(6, 17, 11, 0.94)
        );

    transition:
        transform 0.3s ease,
        border 0.3s ease,
        box-shadow 0.3s ease;
}

.dino-card:hover {
    transform: translateY(-5px);

    border-color: rgba(183, 207, 82, 0.42);

    box-shadow:
        0 18px 45px rgba(0, 0, 0, 0.22),
        0 0 30px rgba(120, 150, 50, 0.05);
}


/* imagem */

.card-image {
    position: relative;

    height: 220px;

    overflow: hidden;

    background:
        radial-gradient(
            circle,
            rgba(75, 100, 55, 0.2),
            transparent 60%
        ),
        #08140d;
}

.card-image::after {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 55%,
            rgba(5, 13, 8, 0.55)
        );

    pointer-events: none;
}

.card-image img {
    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    filter:
        brightness(0.78)
        saturate(0.85)
        contrast(1.08);

    transition:
        transform 0.6s ease,
        filter 0.5s ease;
}

.dino-card:hover .card-image img {
    transform: scale(1.05);

    filter:
        brightness(0.92)
        saturate(0.95)
        contrast(1.05);
}


/* número */

.card-number {
    position: absolute;

    z-index: 3;

    top: 14px;

    right: 14px;

    color: rgba(235, 239, 220, 0.6);

    font-size: 8px;

    letter-spacing: 2px;
}


/* conteúdo */

.card-content {
    padding: 25px 20px 18px;
}

.card-period {
    display: block;

    margin-bottom: 9px;

    color: var(--green);

    font-size: 7px;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;
}

.card-content h3 {
    font-size: 27px;

    line-height: 1;

    margin-bottom: 5px;
}

.scientific-name {
    color: #667163;

    font-family: var(--serif);

    font-size: 11px;

    font-style: italic;
}

.card-description {
    margin-top: 17px;

    min-height: 60px;

    color: #aab3a6;

    font-size: 11px;

    line-height: 1.65;
}

.card-footer {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 20px;

    padding-top: 15px;

    border-top: 1px solid var(--border);
}

.card-diet {
    color: #788373;

    font-size: 7px;

    letter-spacing: 1.7px;

    text-transform: uppercase;
}

.card-button {
    border: 0;

    background: transparent;

    color: var(--green);

    cursor: pointer;

    font-size: 17px;

    transition: transform 0.2s ease;
}

.card-button:hover {
    transform: translateX(5px);
}


/* vazio */

.empty-state {
    text-align: center;

    padding: 80px 20px;
}

.empty-state > div {
    font-size: 45px;

    margin-bottom: 20px;
}

.empty-state h3 {
    font-size: 28px;

    margin-bottom: 10px;
}

.empty-state p {
    color: var(--text-muted);
}


/* =========================================================
   ERAS
========================================================= */

.eras {
    border-top: 1px solid var(--border);
}

.timeline {
    position: relative;

    padding-left: 55px;
}

.timeline::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: 14px;

    width: 1px;

    background:
        linear-gradient(
            var(--green),
            rgba(183, 207, 82, 0.05)
        );
}

.era-card {
    position: relative;

    display: grid;

    grid-template-columns: 160px 1fr;

    gap: 40px;

    padding: 40px 0;

    border-top: 1px solid var(--border);
}

.era-card:last-child {
    border-bottom: 1px solid var(--border);
}

.era-date {
    color: var(--text);

    font-family: var(--serif);

    font-size: 22px;
}

.era-date span {
    display: block;

    margin-top: 5px;

    color: #687466;

    font-family: var(--sans);

    font-size: 7px;

    letter-spacing: 1px;
}

.era-dot {
    position: absolute;

    left: -47px;

    top: 45px;

    width: 12px;
    height: 12px;

    border: 2px solid var(--green);

    border-radius: 50%;

    background: var(--bg);

    box-shadow: 0 0 15px rgba(183, 207, 82, 0.3);
}

.era-name {
    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;
}

.era-content h3 {
    margin: 9px 0 10px;

    font-size: 32px;
}

.era-content p {
    max-width: 600px;

    font-size: 13px;
}

.era-species {
    display: inline-block;

    margin-top: 15px;

    color: #7e8978;

    font-size: 8px;

    letter-spacing: 1px;
}


/* =========================================================
   CURIOSIDADES
========================================================= */

.curiosity-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 12px;
}

.curiosity-card {
    position: relative;

    min-height: 300px;

    padding: 25px 20px;

    border: 1px solid var(--border);

    background:
        linear-gradient(
            160deg,
            rgba(20, 40, 24, 0.6),
            rgba(6, 15, 10, 0.85)
        );

    transition:
        transform 0.25s ease,
        border 0.25s ease;
}

.curiosity-card:hover {
    transform: translateY(-4px);

    border-color: rgba(183, 207, 82, 0.35);
}

.curiosity-number {
    color: #5e6a59;

    font-size: 8px;

    letter-spacing: 2px;
}

.curiosity-icon {
    margin: 35px 0 22px;

    font-size: 30px;
}

.curiosity-card h3 {
    margin-bottom: 12px;

    font-size: 23px;

    line-height: 1.1;
}

.curiosity-card p {
    color: #9fa99b;

    font-size: 11px;

    line-height: 1.7;
}


/* =========================================================
   DINO AI
========================================================= */

.ai-section {
    border-top: 1px solid var(--border);
}

.ai-panel {
    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    gap: 70px;

    padding: 60px;

    border: 1px solid rgba(183, 207, 82, 0.20);

    background:
        radial-gradient(
            circle at 90% 10%,
            rgba(125, 155, 55, 0.13),
            transparent 35%
        ),
        #09150d;
}

.ai-badge {
    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2.5px;

    margin-bottom: 25px;
}

.ai-intro h2 {
    font-size: clamp(45px, 5vw, 68px);

    line-height: 1;
}

.ai-intro p {
    margin-top: 25px;

    max-width: 350px;

    font-size: 13px;
}


/* chat */

.ai-chat {
    overflow: hidden;

    border: 1px solid var(--border);

    background: #06100a;
}

.ai-chat-header {
    padding: 15px 18px;

    border-bottom: 1px solid var(--border);
}

.ai-status {
    display: flex;

    align-items: center;

    gap: 8px;

    color: var(--text);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: var(--green);

    box-shadow: 0 0 12px var(--green);
}

.ai-status small {
    margin-left: auto;

    color: var(--green);

    font-size: 6px;
}


/* mensagens */

.chat-messages {
    min-height: 280px;

    max-height: 380px;

    overflow-y: auto;

    padding: 20px;
}

.chat-message {
    display: flex;

    gap: 12px;

    margin-bottom: 20px;
}

.message-avatar {
    flex-shrink: 0;

    width: 30px;
    height: 30px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(183, 207, 82, 0.25);

    color: var(--green);

    font-size: 9px;
}

.message-content {
    max-width: 80%;
}

.message-name {
    display: block;

    margin-bottom: 6px;

    color: var(--green);

    font-size: 7px;

    font-weight: 700;

    letter-spacing: 1.5px;
}

.message-content p {
    padding: 12px 14px;

    border: 1px solid var(--border);

    background: rgba(15, 31, 19, 0.65);

    color: #cbd2c6;

    font-size: 11px;

    line-height: 1.65;
}

.user-message {
    justify-content: flex-end;
}

.user-message .message-content p {
    background: rgba(183, 207, 82, 0.08);

    border-color: rgba(183, 207, 82, 0.2);
}


/* perguntas rápidas */

.quick-questions {
    display: flex;

    gap: 6px;

    padding: 0 15px 12px;

    overflow-x: auto;
}

.quick-questions button {
    flex-shrink: 0;

    padding: 7px 10px;

    border: 1px solid var(--border);

    background: transparent;

    color: #899486;

    cursor: pointer;

    font-family: var(--sans);

    font-size: 7px;

    transition:
        color 0.2s ease,
        border 0.2s ease;
}

.quick-questions button:hover {
    color: var(--green);

    border-color: rgba(183, 207, 82, 0.4);
}


/* formulário */

.chat-form {
    display: flex;

    border-top: 1px solid var(--border);
}

.chat-form input {
    flex: 1;

    min-width: 0;

    height: 50px;

    padding: 0 15px;

    border: 0;

    outline: 0;

    background: #07120b;

    color: var(--text);

    font-family: var(--sans);

    font-size: 11px;
}

.chat-form input::placeholder {
    color: #657060;
}

.chat-form button {
    width: 55px;

    border: 0;

    border-left: 1px solid var(--border);

    background: var(--green);

    color: #07100a;

    cursor: pointer;

    font-size: 18px;

    transition: background 0.2s ease;
}

.chat-form button:hover {
    background: var(--green-light);
}


/* =========================================================
   MODAL
========================================================= */

.modal {
    position: fixed;

    inset: 0;

    z-index: 500;

    display: none;

    place-items: center;

    padding: 20px;
}

.modal.open {
    display: grid;
}

.modal-overlay {
    position: absolute;

    inset: 0;

    background: rgba(2, 8, 4, 0.82);

    backdrop-filter: blur(8px);
}

.modal-box {
    position: relative;

    z-index: 2;

    width: min(850px, 100%);

    max-height: 90vh;

    overflow: auto;

    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    border: 1px solid rgba(183, 207, 82, 0.3);

    background: #09150d;

    box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5);
}

.modal-close {
    position: absolute;

    z-index: 5;

    top: 15px;

    right: 15px;

    width: 36px;
    height: 36px;

    border: 1px solid rgba(255,255,255,0.15);

    background: rgba(0,0,0,0.5);

    color: white;

    cursor: pointer;

    font-size: 22px;
}

.modal-image {
    min-height: 430px;

    background: #06100a;
}

.modal-image img {
    width: 100%;
    height: 100%;

    min-height: 430px;

    object-fit: cover;

    display: block;

    filter:
        brightness(0.85)
        saturate(0.9)
        contrast(1.08);
}

.modal-content {
    padding: 50px 40px;
}

.modal-period {
    color: var(--green);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;
}

.modal-content h2 {
    margin-top: 10px;

    font-size: 52px;

    line-height: 1;
}

.modal-scientific {
    margin-top: 8px;

    color: #6f7a6b;

    font-family: var(--serif);

    font-size: 14px;

    font-style: italic;
}

.modal-description {
    margin-top: 25px;

    color: #c2cabc;

    font-size: 13px;
}

.modal-facts {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 8px;

    margin-top: 25px;
}

.modal-fact {
    padding: 13px;

    border: 1px solid var(--border);

    background: rgba(20, 40, 25, 0.35);
}

.modal-fact span {
    display: block;

    color: #6e7a69;

    font-size: 7px;

    letter-spacing: 1.5px;

    margin-bottom: 5px;
}

.modal-fact strong {
    color: var(--text);

    font-size: 11px;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    max-width: var(--max-width);

    margin: auto;

    padding: 50px 22px;

    border-top: 1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;
}

.footer-brand {
    display: flex;

    flex-direction: column;

    gap: 4px;
}

.footer-brand strong {
    color: var(--text);

    font-size: 12px;

    letter-spacing: 1px;
}

.footer-brand span {
    color: #596455;

    font-size: 6px;

    letter-spacing: 2px;
}

.site-footer p {
    color: #697466;

    font-size: 10px;
}

.footer-line {
    color: #596455;

    font-size: 8px;
}


/* =========================================================
   RESPONSIVIDADE
========================================================= */

@media (max-width: 900px) {

    .hero {
        grid-template-columns: 1fr;

        padding-top: 70px;
    }

    .hero-visual {
        height: 400px;
    }

    .intro-grid {
        grid-template-columns: 1fr;

        gap: 40px;
    }

    .dinosaur-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .curiosity-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .ai-panel {
        grid-template-columns: 1fr;

        gap: 45px;

        padding: 40px;
    }

    .modal-box {
        grid-template-columns: 1fr;
    }

    .modal-image {
        min-height: 260px;
    }

    .modal-image img {
        min-height: 260px;

        max-height: 330px;
    }
}


@media (max-width: 700px) {

    .site-header {
        height: 70px;
    }

    .main-nav {
        position: absolute;

        top: 70px;

        left: 0;
        right: 0;

        display: none;

        flex-direction: column;

        align-items: stretch;

        gap: 0;

        padding: 10px 22px 20px;

        border-bottom: 1px solid var(--border);

        background: rgba(5, 15, 9, 0.97);

        backdrop-filter: blur(20px);
    }

    .main-nav.open {
        display: flex;
    }

    .nav-link {
        padding: 14px 0;

        font-size: 9px;
    }

    .nav-link.active::after {
        display: none;
    }

    .mobile-menu-button {
        display: block;
    }

    .hero {
        min-height: auto;

        padding-top: 70px;
    }

    .hero h1 {
        font-size: clamp(48px, 15vw, 72px);
    }

    .hero-stats {
        gap: 25px;

        margin-top: 45px;
    }

    .hero-visual {
        height: 330px;
    }

    .hero-dino-image img {
        height: 260px;
    }

    .hero-orbit {
        display: none;
    }

    .data-one {
        left: 0;
    }

    .data-two {
        right: 0;
    }

    .section {
        padding: 80px 18px;
    }

    .section-heading {
        grid-template-columns: 1fr;

        gap: 20px;

        margin-bottom: 40px;
    }

    .section-heading h2 {
        font-size: 47px;
    }

    .search-area {
        flex-direction: column;

        align-items: stretch;
    }

    .search-box {
        max-width: none;
    }

    .filter-buttons {
        overflow-x: auto;
    }

    .dinosaur-grid {
        grid-template-columns: 1fr;
    }

    .card-image {
        height: 250px;
    }

    .timeline {
        padding-left: 35px;
    }

    .era-card {
        grid-template-columns: 1fr;

        gap: 10px;
    }

    .era-dot {
        left: -28px;
    }

    .curiosity-grid {
        grid-template-columns: 1fr;
    }

    .ai-panel {
        padding: 25px 18px;
    }

    .site-footer {
        flex-direction: column;

        align-items: flex-start;
    }

    .modal-content {
        padding: 35px 22px;
    }

    .modal-content h2 {
        font-size: 42px;
    }

    .modal-facts {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 400px) {

    .hero-stats {
        flex-wrap: wrap;
    }

    .hero-actions {
        flex-direction: column;

        align-items: stretch;
    }

    .button {
        width: 100%;
    }

}
