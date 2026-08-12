/* =========================================================
   DINOWORLD — JAVASCRIPT
========================================================= */


/* =========================================================
   BANCO DE DINOSSAUROS
========================================================= */

const dinosaurs = [

    {
        id: "trex",
        name: "Tyrannosaurus rex",
        shortName: "T. rex",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "11–13 metros",
        weight: "5–9 toneladas",
        diet: "Carnívoro",
        years: "68–66 milhões de anos",
        color: "#9ebc56",

        description:
            "Um dos maiores predadores terrestres conhecidos. Possuía uma cabeça enorme, dentes robustos e uma mordida extremamente poderosa.",

        curiosity:
            "O T. rex possuía braços muito pequenos em relação ao corpo, mas tinha pernas extremamente fortes e uma cauda pesada."
    },


    {
        id: "spinosaurus",
        name: "Spinosaurus",
        shortName: "Spinosaurus",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "Norte da África",
        length: "14–18 metros",
        weight: "Várias toneladas",
        diet: "Principalmente peixes",
        years: "100–94 milhões de anos",
        color: "#7f9e4b",

        description:
            "Um enorme predador conhecido pela vela nas costas e pelo focinho alongado. Apresentava várias adaptações associadas a ambientes aquáticos.",

        curiosity:
            "Seus dentes cônicos e mandíbula alongada eram adequados para capturar peixes."
    },


    {
        id: "velociraptor",
        name: "Velociraptor",
        shortName: "Velociraptor",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "Ásia",
        length: "Cerca de 2 metros",
        weight: "Aproximadamente 15 kg",
        diet: "Carnívoro",
        years: "75–71 milhões de anos",
        color: "#a8b66a",

        description:
            "Um pequeno terópode predador conhecido pela grande garra curva localizada no segundo dedo de cada pé.",

        curiosity:
            "O Velociraptor real possuía penas e era muito menor do que sua representação em muitos filmes."
    },


    {
        id: "triceratops",
        name: "Triceratops",
        shortName: "Triceratops",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "8–9 metros",
        weight: "6–12 toneladas",
        diet: "Herbívoro",
        years: "68–66 milhões de anos",
        color: "#899c55",

        description:
            "Grande herbívoro reconhecido pelos três chifres e pelo enorme escudo ósseo localizado atrás da cabeça.",

        curiosity:
            "Os chifres provavelmente tinham funções relacionadas à defesa, disputas e comunicação visual."
    },


    {
        id: "stegosaurus",
        name: "Stegosaurus",
        shortName: "Stegosaurus",
        period: "Jurássico",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "7–9 metros",
        weight: "3–5 toneladas",
        diet: "Herbívoro",
        years: "155–150 milhões de anos",
        color: "#8da05a",

        description:
            "Herbívoro caracterizado pelas grandes placas ósseas ao longo das costas e pelos espinhos presentes na cauda.",

        curiosity:
            "As placas provavelmente desempenhavam funções relacionadas à exibição e regulação térmica."
    },


    {
        id: "brachiosaurus",
        name: "Brachiosaurus",
        shortName: "Brachiosaurus",
        period: "Jurássico",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "Até aproximadamente 26 metros",
        weight: "Dezenas de toneladas",
        diet: "Herbívoro",
        years: "Jurássico Superior",
        color: "#788f4a",

        description:
            "Um gigantesco saurópode de pescoço extremamente longo. Suas pernas dianteiras eram maiores que as traseiras.",

        curiosity:
            "Sua anatomia permitia alcançar vegetação localizada em alturas muito superiores às alcançadas por vários outros herbívoros."
    },


    {
        id: "ankylosaurus",
        name: "Ankylosaurus",
        shortName: "Ankylosaurus",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "6–8 metros",
        weight: "4–8 toneladas",
        diet: "Herbívoro",
        years: "68–66 milhões de anos",
        color: "#687f42",

        description:
            "Um herbívoro fortemente protegido por placas ósseas. Sua principal arma era uma poderosa clava na extremidade da cauda.",

        curiosity:
            "A cauda em forma de clava provavelmente era capaz de produzir impactos muito fortes."
    },


    {
        id: "parasaurolophus",
        name: "Parasaurolophus",
        shortName: "Parasaurolophus",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "9–10 metros",
        weight: "2–3 toneladas",
        diet: "Herbívoro",
        years: "76–73 milhões de anos",
        color: "#95ad60",

        description:
            "Um hadrossauro conhecido pela longa crista óssea que se projetava para trás da cabeça.",

        curiosity:
            "A estrutura da crista provavelmente ajudava na produção e ressonância de sons."
    },


    {
        id: "allosaurus",
        name: "Allosaurus",
        shortName: "Allosaurus",
        period: "Jurássico",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "8–10 metros",
        weight: "1,5–2 toneladas",
        diet: "Carnívoro",
        years: "155–145 milhões de anos",
        color: "#72894b",

        description:
            "Um dos principais predadores do Jurássico Superior, com cabeça grande, dentes serrilhados e três dedos nas mãos.",

        curiosity:
            "Diferentemente do T. rex, o Allosaurus possuía braços relativamente maiores."
    },


    {
        id: "dilophosaurus",
        name: "Dilophosaurus",
        shortName: "Dilophosaurus",
        period: "Jurássico",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "Cerca de 7 metros",
        weight: "Aproximadamente 400 kg",
        diet: "Carnívoro",
        years: "193–183 milhões de anos",
        color: "#91a75b",

        description:
            "Um predador do início do Jurássico conhecido pelas duas cristas ósseas localizadas sobre a cabeça.",

        curiosity:
            "A representação cinematográfica do animal cuspindo veneno não possui evidência científica."
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const grid =
    document.getElementById("dinosaurGrid");

const searchInput =
    document.getElementById("searchInput");

const filters =
    document.querySelectorAll(".filter");

const modal =
    document.getElementById("dinoModal");

const modalBody =
    document.getElementById("modalBody");

const closeModalButton =
    document.getElementById("closeModal");

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.getElementById("navigation");

const header =
    document.getElementById("header");

const aiForm =
    document.getElementById("aiForm");

const aiInput =
    document.getElementById("aiInput");

const chatWindow =
    document.getElementById("chatWindow");

const heroArt =
    document.getElementById("heroDinosaurArt");


let currentFilter = "all";


/* =========================================================
   DESENHO DOS DINOSSAUROS
========================================================= */

function dinosaurSVG(dino, large = false) {

    const scale =
        large ? 1 : .82;

    let extra = "";


    if (dino.id === "spinosaurus") {

        extra = `
            <path
                d="M135 205 L180 70 L205 185 L235 65 L260 190"
                fill="${dino.color}"
                opacity=".75"
            />
        `;

    }


    if (dino.id === "stegosaurus") {

        extra = `

            <g fill="${dino.color}" opacity=".9">

                <path d="M180 145 L195 80 L215 150 Z"/>
                <path d="M220 135 L240 65 L258 145 Z"/>
                <path d="M260 130 L285 75 L300 145 Z"/>
                <path d="M300 135 L325 90 L338 150 Z"/>

            </g>

        `;

    }


    if (dino.id === "triceratops") {

        extra = `

            <path
                d="M300 140 L350 80 L330 150"
                fill="none"
                stroke="${dino.color}"
                stroke-width="14"
                stroke-linecap="round"
            />

            <path
                d="M275 145 L290 85 L300 150"
                fill="none"
                stroke="${dino.color}"
                stroke-width="12"
                stroke-linecap="round"
            />

        `;

    }


    if (dino.id === "ankylosaurus") {

        extra = `

            <circle
                cx="105"
                cy="220"
                r="32"
                fill="${dino.color}"
            />

            <circle
                cx="85"
                cy="215"
                r="12"
                fill="#506737"
            />

        `;

    }


    if (dino.id === "parasaurolophus") {

        extra = `

            <path
                d="M295 140 Q365 70 350 130"
                fill="none"
                stroke="${dino.color}"
                stroke-width="28"
                stroke-linecap="round"
            />

        `;

    }


    return `

        <svg
            viewBox="0 0 500 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="${dino.name}"
        >

            <defs>

                <linearGradient
                    id="body-${dino.id}"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0"
                        stop-color="${dino.color}"
                    />

                    <stop
                        offset="1"
                        stop-color="#354b29"
                    />

                </linearGradient>

            </defs>


            <!-- cauda -->

            <path
                d="M150 185
                   Q75 145 30 180
                   Q75 195 150 205"
                fill="url(#body-${dino.id})"
            />


            <!-- corpo -->

            <ellipse
                cx="225"
                cy="175"
                rx="105"
                ry="58"
                fill="url(#body-${dino.id})"
            />


            <!-- pescoço -->

            <path
                d="M270 160
                   Q275 120 310 110
                   L330 145
                   Q305 155 300 185"
                fill="${dino.color}"
            />


            <!-- cabeça -->

            <ellipse
                cx="340"
                cy="110"
                rx="55"
                ry="38"
                fill="url(#body-${dino.id})"
            />


            <!-- focinho -->

            <path
                d="M370 120
                   Q430 112 450 130
                   Q420 150 365 143"
                fill="${dino.color}"
            />


            <!-- boca -->

            <path
                d="M370 137 Q410 145 445 132"
                fill="none"
                stroke="#1c2818"
                stroke-width="4"
            />


            <!-- olho -->

            <circle
                cx="352"
                cy="102"
                r="6"
                fill="#e9edcf"
            />

            <circle
                cx="354"
                cy="102"
                r="3"
                fill="#111"
            />


            <!-- perna traseira -->

            <path
                d="M275 205
                   L285 275
                   L310 275
                   L315 200"
                fill="${dino.color}"
            />


            <!-- perna dianteira -->

            <path
                d="M200 205
                   L190 275
                   L215 275
                   L235 205"
                fill="${dino.color}"
            />


            <!-- braço -->

            <path
                d="M285 160
                   L315 205
                   L325 202"
                fill="none"
                stroke="${dino.color}"
                stroke-width="13"
                stroke-linecap="round"
            />


            <!-- garras -->

            <path
                d="M190 275 L180 282
                   M205 275 L200 284
                   M285 275 L280 283"
                stroke="#b9c77c"
                stroke-width="4"
                stroke-linecap="round"
            />


            ${extra}


            <!-- detalhes tecnológicos -->

            <path
                d="M70 245 H430"
                stroke="${dino.color}"
                stroke-width="1"
                opacity=".15"
            />

            <circle
                cx="70"
                cy="245"
                r="3"
                fill="${dino.color}"
                opacity=".5"
            />

        </svg>

    `;

}


/* =========================================================
   HERO
========================================================= */

function renderHero() {

    const trex =
        dinosaurs.find(
            dino => dino.id === "trex"
        );

    if (heroArt && trex) {

        heroArt.innerHTML =
            dinosaurSVG(trex, true);

    }

}


/* =========================================================
   RENDERIZAR CARDS
========================================================= */

function renderDinosaurs(list) {

    if (!grid) return;


    grid.innerHTML = "";


    if (!list.length) {

        grid.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🦕
                </div>

                <h3>
                    Nenhum dinossauro encontrado
                </h3>

                <p>
                    Tente pesquisar por outro nome ou período.
                </p>

            </div>

        `;

        return;

    }


    list.forEach((dino, index) => {

        const card =
            document.createElement("article");


        card.className =
            "dino-card";


        card.style.animationDelay =
            `${index * 60}ms`;


        card.innerHTML = `

            <div class="dino-art">

                ${dinosaurSVG(dino)}

            </div>


            <div class="dino-card-body">

                <div class="dino-period">
                    ${dino.period}
                </div>


                <h3>
                    ${dino.shortName}
                </h3>


                <div class="dino-scientific">
                    ${dino.name}
                </div>


                <div class="dino-bottom">

                    <span>
                        ${dino.typeLabel}
                    </span>

                    <div class="dino-arrow">
                        →
                    </div>

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openDino(dino)
        );


        grid.appendChild(card);

    });

}


/* =========================================================
   FILTRO
========================================================= */

function filterDinosaurs() {

    const query =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const filtered =
        dinosaurs.filter(dino => {

            const matchesFilter =
                currentFilter === "all" ||
                dino.type === currentFilter;


            const matchesSearch =

                dino.name
                    .toLowerCase()
                    .includes(query)

                ||

                dino.shortName
                    .toLowerCase()
                    .includes(query)

                ||

                dino.period
                    .toLowerCase()
                    .includes(query)

                ||

                dino.location
                    .toLowerCase()
                    .includes(query);


            return (
                matchesFilter &&
                matchesSearch
            );

        });


    renderDinosaurs(filtered);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterDinosaurs
    );

}


filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            filter.classList.add(
                "active"
            );


            currentFilter =
                filter.dataset.filter;


            filterDinosaurs();

        }
    );

});


/* =========================================================
   MODAL
========================================================= */

function openDino(dino) {

    if (!modal || !modalBody) return;


    modalBody.innerHTML = `

        <div class="modal-dino">

            <div class="modal-image">

                ${dinosaurSVG(dino, true)}

            </div>


            <div class="modal-content">

                <div class="section-label">
                    PALEONTOLOGICAL DATABASE
                </div>


                <h2>
                    ${dino.shortName}
                </h2>


                <p class="modal-scientific">
                    ${dino.name}
                </p>


                <p class="modal-description">
                    ${dino.description}
                </p>


                <div class="modal-grid">

                    <div>

                        <span>
                            PERÍODO
                        </span>

                        <strong>
                            ${dino.period}
                        </strong>

                    </div>


                    <div>

                        <span>
                            DIETA
                        </span>

                        <strong>
                            ${dino.diet}
                        </strong>

                    </div>


                    <div>

                        <span>
                            COMPRIMENTO
                        </span>

                        <strong>
                            ${dino.length}
                        </strong>

                    </div>


                    <div>

                        <span>
                            PESO
                        </span>

                        <strong>
                            ${dino.weight}
                        </strong>

                    </div>


                    <div>

                        <span>
                            LOCAL
                        </span>

                        <strong>
                            ${dino.location}
                        </strong>

                    </div>


                    <div>

                        <span>
                            ÉPOCA
                        </span>

                        <strong>
                            ${dino.years}
                        </strong>

                    </div>

                </div>


                <div class="modal-curiosity">

                    <span>
                        VOCÊ SABIA?
                    </span>

                    <p>
                        ${dino.curiosity}
                    </p>

                </div>


                <button
                    class="button button-primary"
                    id="askDinoButton"
                >

                    PERGUNTAR AO DINO AI

                    <span>
                        →
                    </span>

                </button>

            </div>

        </div>

    `;


    const askButton =
        document.getElementById(
            "askDinoButton"
        );


    if (askButton) {

        askButton.addEventListener(
            "click",
            () => {

                closeDinoModal();

                setTimeout(() => {

                    const ai =
                        document.getElementById(
                            "dino-ai"
                        );

                    if (ai) {

                        ai.scrollIntoView({
                            behavior: "smooth"
                        });

                    }


                    setTimeout(() => {

                        if (aiInput) {

                            aiInput.focus();

                            aiInput.value =
                                `Conte-me mais sobre o ${dino.shortName}.`;

                        }

                    }, 500);

                }, 200);

            }
        );

    }


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeDinoModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeDinoModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeDinoModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeDinoModal();

        }

    }
);


/* =========================================================
   MENU MOBILE
========================================================= */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "open"
            );

        }
    );

}


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================================
   HEADER
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link =>
                                link.classList.remove(
                                    "active"
                                )
                        );


                        const active =
                            document.querySelector(
                                `.nav-link[href="#${entry.target.id}"]`
                            );


                        if (active) {

                            active.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        },
        {
            threshold: .35
        }
    );


sections.forEach(
    section =>
        navObserver.observe(section)
);


/* =========================================================
   ANIMAÇÃO DA TIMELINE
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".era"
    );


const animationObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        animationObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .15
        }
    );


animatedElements.forEach(
    element =>
        animationObserver.observe(element)
);


/* =========================================================
   DINO AI
========================================================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        );

}


function getAIResponse(question) {

    const text =
        normalizeText(question);


    let dino = null;


    for (const item of dinosaurs) {

        const name =
            normalizeText(
                item.name
            );


        const shortName =
            normalizeText(
                item.shortName
            );


        if (
            text.includes(name) ||
            text.includes(shortName)
        ) {

            dino = item;

            break;

        }

    }


    /* ===========================
       DINOSSAURO ESPECÍFICO
    =========================== */

    if (dino) {

        if (
            text.includes("tamanho") ||
            text.includes("comprimento") ||
            text.includes("metros")
        ) {

            return `
                O <strong>${dino.shortName}</strong>
                tinha aproximadamente
                <strong>${dino.length}</strong>.
            `;

        }


        if (
            text.includes("peso") ||
            text.includes("pesava")
        ) {

            return `
                O <strong>${dino.shortName}</strong>
                podia pesar cerca de
                <strong>${dino.weight}</strong>.
            `;

        }


        if (
            text.includes("comia") ||
            text.includes("aliment") ||
            text.includes("dieta")
        ) {

            return `
                A dieta do
                <strong>${dino.shortName}</strong>
                era classificada como
                <strong>${dino.diet.toLowerCase()}</strong>.
            `;

        }


        if (
            text.includes("onde") ||
            text.includes("viveu") ||
            text.includes("local")
        ) {

            return `
                Fósseis do
                <strong>${dino.shortName}</strong>
                são associados principalmente a
                <strong>${dino.location}</strong>.
            `;

        }


        if (
            text.includes("quando") ||
            text.includes("periodo") ||
            text.includes("epoca")
        ) {

            return `
                O
                <strong>${dino.shortName}</strong>
                viveu durante o
                <strong>${dino.period}</strong>,
                aproximadamente
                <strong>${dino.years}</strong>.
            `;

        }


        if (
            text.includes("veloc") ||
            text.includes("corria")
        ) {

            return `
                As estimativas de velocidade para
                <strong>${dino.shortName}</strong>
                são incertas. A base desta enciclopédia
                não possui uma estimativa confiável para
                informar uma velocidade específica.
            `;

        }


        return `

            <strong>
                ${dino.shortName}
            </strong>

            foi um
            ${dino.typeLabel.toLowerCase()}
            do
            <strong>
                ${dino.period}
            </strong>.

            <br><br>

            ${dino.description}

            <br><br>

            <strong>
                Curiosidade:
            </strong>

            ${dino.curiosity}

        `;

    }


    /* ===========================
       PERGUNTAS GERAIS
    =========================== */

    if (
        text.includes("maior") ||
        text.includes("gigante")
    ) {

        return `

            Entre os animais desta enciclopédia,
            o <strong>Brachiosaurus</strong> está entre
            os maiores, podendo alcançar cerca de
            <strong>26 metros</strong> de comprimento.

        `;

    }


    if (
        text.includes("pena") ||
        text.includes("penas")
    ) {

        return `

            Sim. Diversos dinossauros possuíam
            penas ou estruturas semelhantes.

            As aves modernas são consideradas
            dinossauros terópodes sobreviventes.

        `;

    }


    if (
        text.includes("ovo") ||
        text.includes("ovos")
    ) {

        return `

            Sim. Dinossauros colocavam ovos.

            Fósseis de ninhos, ovos e embriões
            ajudaram os pesquisadores a entender
            como algumas espécies se reproduziam.

        `;

    }


    if (
        text.includes("extinc") ||
        text.includes("asteroide") ||
        text.includes("meteoro")
    ) {

        return `

            A extinção dos dinossauros não avianos
            aconteceu há aproximadamente
            <strong>66 milhões de anos</strong>.

            O impacto de um grande asteroide na região
            da atual Península de Yucatán é considerado
            o principal fator do evento, juntamente
            com mudanças ambientais.

        `;

    }


    if (
        text.includes("quando surgiram") ||
        text.includes("surgiram")
    ) {

        return `

            Os primeiros dinossauros conhecidos
            surgiram durante o
            <strong>Triássico</strong>,
            há mais de 230 milhões de anos.

        `;

    }


    if (
        text.includes("oi") ||
        text.includes("ola") ||
        text.includes("ajuda")
    ) {

        return `

            Olá! 🦖

            Eu sou o Dino AI.

            Você pode perguntar:

            <br><br>

            • Qual era o tamanho do T. rex?<br>
            • O Velociraptor tinha penas?<br>
            • O que o Triceratops comia?<br>
            • Onde viveu o Spinosaurus?<br>
            • Quando os dinossauros surgiram?<br>
            • Como os dinossauros foram extintos?

        `;

    }


    return `

        Ainda não encontrei uma resposta específica
        para essa pergunta na minha base.

        <br><br>

        Tente mencionar o nome de um dinossauro
        disponível na enciclopédia.

        <br><br>

        Por exemplo:

        <strong>
            "Qual era o tamanho do T. rex?"
        </strong>

    `;

}


/* =========================================================
   CHAT
========================================================= */

function addUserMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message user";


    message.innerHTML = `

        <div class="message-content">

            <span>
                VOCÊ
            </span>

            <p>
                ${escapeHTML(text)}
            </p>

        </div>

    `;


    chatWindow.appendChild(
        message
    );


    scrollChat();

}


function addAIMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message ai";


    message.innerHTML = `

        <div class="message-avatar">
            🦖
        </div>


        <div class="message-content">

            <span>
                DINO AI
            </span>

            <p>
                ${text}
            </p>

        </div>

    `;


    chatWindow.appendChild(
        message
    );


    scrollChat();

}


function scrollChat() {

    if (!chatWindow) return;


    chatWindow.scrollTo({

        top:
            chatWindow.scrollHeight,

        behavior:
            "smooth"

    });

}


function sendQuestion(question) {

    if (
        !question ||
        !question.trim()
    ) {

        return;

    }


    addUserMessage(question);


    const loading =
        document.createElement("div");


    loading.className =
        "message ai";


    loading.innerHTML = `

        <div class="message-avatar">
            🦖
        </div>


        <div class="message-content">

            <span>
                DINO AI
            </span>

            <p>
                Analisando os fósseis...
            </p>

        </div>

    `;


    chatWindow.appendChild(
        loading
    );


    scrollChat();


    setTimeout(() => {

        loading.remove();


        const response =
            getAIResponse(question);


        addAIMessage(response);

    }, 650);

}


/* =========================================================
   FORM AI
========================================================= */

if (aiForm) {

    aiForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const question =
                aiInput.value.trim();


            if (!question) return;


            sendQuestion(question);


            aiInput.value = "";

        }
    );

}


/* =========================================================
   SUGESTÕES
========================================================= */

document
    .querySelectorAll(".suggestion")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;


                sendQuestion(
                    question
                );

            }
        );

    });


/* =========================================================
   CTRL + K
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey ||
                event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();


            if (searchInput) {

                searchInput.focus();

            }

        }

    }
);


/* =========================================================
   SEGURANÇA
========================================================= */

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        text;

    return element.innerHTML;

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderHero();

renderDinosaurs(
    dinosaurs
);


console.log(
    "🦖 DinoWorld iniciado com sucesso."
);
