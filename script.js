/* =========================================================
   DINOWORLD — SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   BANCO DE DINOSSAUROS
========================================================= */

const dinosaurs = [

    {
        id: "trex",
        name: "Tyrannosaurus rex",
        shortName: "T. rex",
        image: "assets/images/trex.jpg",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "11–13 metros",
        weight: "5–9 toneladas",
        diet: "Carnívoro",
        speed: "Até aproximadamente 25 km/h",
        years: "68–66 milhões de anos",
        description:
            "O Tyrannosaurus rex foi um dos maiores predadores terrestres conhecidos. Possuía uma enorme cabeça, dentes robustos e uma mordida extremamente poderosa.",
        curiosity:
            "Apesar dos braços extremamente pequenos, o T. rex tinha pernas fortes e uma cauda pesada que ajudava no equilíbrio."
    },

    {
        id: "spinosaurus",
        name: "Spinosaurus",
        shortName: "Spinosaurus",
        image: "assets/images/spinosaurus.jpg",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "Norte da África",
        length: "14–18 metros",
        weight: "Várias toneladas",
        diet: "Principalmente peixes",
        speed: "Não determinada",
        years: "100–94 milhões de anos",
        description:
            "O Spinosaurus possuía uma característica vela nas costas e adaptações associadas a ambientes aquáticos. É considerado um dos maiores dinossauros predadores conhecidos.",
        curiosity:
            "Sua mandíbula alongada e dentes cônicos eram especialmente adequados para capturar presas escorregadias."
    },

    {
        id: "velociraptor",
        name: "Velociraptor",
        shortName: "Velociraptor",
        image: "assets/images/velociraptor.jpg",
        period: "Cretáceo",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "Ásia",
        length: "Cerca de 2 metros",
        weight: "Aproximadamente 15 kg",
        diet: "Carnívoro",
        speed: "Desconhecida",
        years: "75–71 milhões de anos",
        description:
            "O Velociraptor era um pequeno terópode predador. Tinha uma garra curva característica no segundo dedo de cada pé.",
        curiosity:
            "Evidências fósseis indicam que o Velociraptor possuía penas, embora provavelmente não fosse capaz de voar."
    },

    {
        id: "triceratops",
        name: "Triceratops",
        shortName: "Triceratops",
        image: "assets/images/triceratops.jpg",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "8–9 metros",
        weight: "6–12 toneladas",
        diet: "Herbívoro",
        speed: "Possivelmente até 25 km/h",
        years: "68–66 milhões de anos",
        description:
            "O Triceratops era um grande herbívoro reconhecido por seus três chifres e pelo enorme escudo ósseo localizado atrás da cabeça.",
        curiosity:
            "Seus chifres provavelmente tinham funções relacionadas à defesa, disputas entre indivíduos e comunicação visual."
    },

    {
        id: "stegosaurus",
        name: "Stegosaurus",
        shortName: "Stegosaurus",
        image: "assets/images/stegosaurus.jpg",
        period: "Jurássico",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "7–9 metros",
        weight: "3–5 toneladas",
        diet: "Herbívoro",
        speed: "Relativamente lento",
        years: "155–150 milhões de anos",
        description:
            "O Stegosaurus possuía duas fileiras de grandes placas ósseas ao longo das costas e quatro espinhos na ponta da cauda.",
        curiosity:
            "As placas provavelmente desempenhavam funções de exibição e regulação térmica, embora sua função exata ainda seja estudada."
    },

    {
        id: "brachiosaurus",
        name: "Brachiosaurus",
        shortName: "Brachiosaurus",
        image: "assets/images/brachiosaurus.jpg",
        period: "Jurássico",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "Até aproximadamente 26 metros",
        weight: "Dezenas de toneladas",
        diet: "Herbívoro",
        speed: "Desconhecida",
        years: "Jurássico Superior",
        description:
            "O Brachiosaurus era um saurópode de pescoço extremamente longo. Suas pernas dianteiras eram mais compridas que as traseiras.",
        curiosity:
            "Sua anatomia permitia alcançar vegetação localizada em alturas que outros herbívoros terrestres não conseguiam alcançar."
    },

    {
        id: "ankylosaurus",
        name: "Ankylosaurus",
        shortName: "Ankylosaurus",
        image: "assets/images/ankylosaurus.jpg",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "6–8 metros",
        weight: "4–8 toneladas",
        diet: "Herbívoro",
        speed: "Desconhecida",
        years: "68–66 milhões de anos",
        description:
            "O Ankylosaurus tinha o corpo coberto por placas ósseas e uma poderosa clava na extremidade da cauda.",
        curiosity:
            "A cauda em forma de clava provavelmente podia causar impactos muito fortes contra predadores."
    },

    {
        id: "parasaurolophus",
        name: "Parasaurolophus",
        shortName: "Parasaurolophus",
        image: "assets/images/parasaurolophus.jpg",
        period: "Cretáceo",
        type: "herbivoro",
        typeLabel: "Herbívoro",
        location: "América do Norte",
        length: "9–10 metros",
        weight: "2–3 toneladas",
        diet: "Herbívoro",
        speed: "Desconhecida",
        years: "76–73 milhões de anos",
        description:
            "O Parasaurolophus era um hadrossauro conhecido por sua longa crista óssea que se projetava para trás da cabeça.",
        curiosity:
            "A estrutura da crista provavelmente ajudava na produção e ressonância de sons."
    },

    {
        id: "allosaurus",
        name: "Allosaurus",
        shortName: "Allosaurus",
        image: "assets/images/allosaurus.jpg",
        period: "Jurássico",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "8–10 metros",
        weight: "1,5–2 toneladas",
        diet: "Carnívoro",
        speed: "Desconhecida",
        years: "155–145 milhões de anos",
        description:
            "O Allosaurus foi um dos principais predadores do Jurássico Superior. Tinha uma cabeça grande, dentes serrilhados e três dedos nas mãos.",
        curiosity:
            "Diferentemente do T. rex, o Allosaurus possuía braços relativamente maiores e três dedos funcionais."
    },

    {
        id: "dilophosaurus",
        name: "Dilophosaurus",
        shortName: "Dilophosaurus",
        image: "assets/images/dilophosaurus.jpg",
        period: "Jurássico",
        type: "carnivoro",
        typeLabel: "Carnívoro",
        location: "América do Norte",
        length: "Cerca de 7 metros",
        weight: "Aproximadamente 400 kg",
        diet: "Carnívoro",
        speed: "Desconhecida",
        years: "193–183 milhões de anos",
        description:
            "O Dilophosaurus era um grande predador do início do Jurássico e possuía duas cristas ósseas sobre a cabeça.",
        curiosity:
            "A famosa representação cinematográfica que mostra o Dilophosaurus cuspindo veneno não possui evidência científica."
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const grid = document.getElementById("dinosaurGrid");

const searchInput =
    document.getElementById("searchInput");

const filters =
    document.querySelectorAll(".filter");

const modal =
    document.getElementById("dinoModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.querySelector(".navigation");

const header =
    document.getElementById("header");

const aiForm =
    document.getElementById("aiForm");

const aiInput =
    document.getElementById("aiInput");

const chatWindow =
    document.getElementById("chatWindow");


/* =========================================================
   ESTADO
========================================================= */

let currentFilter = "all";


/* =========================================================
   RENDERIZAR DINOSSAUROS
========================================================= */

function renderDinosaurs(list) {

    if (!grid) return;


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🦕
                </div>

                <h3>
                    Nenhum dinossauro encontrado
                </h3>

                <p>
                    Tente pesquisar por outro nome.
                </p>

            </div>

        `;

        return;
    }


    list.forEach((dino, index) => {

        const card =
            document.createElement("article");

        card.className = "dino-card";

        card.style.animationDelay =
            `${index * 70}ms`;


        card.innerHTML = `

            <div class="dino-image">

                <img
                    src="${dino.image}"
                    alt="${dino.name}"
                    loading="lazy"
                    onerror="this.src='assets/images/placeholder.jpg'"
                >

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
   FILTRAR DINOSSAUROS
========================================================= */

function filterDinosaurs() {

    const search =
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
                    .includes(search)

                ||

                dino.shortName
                    .toLowerCase()
                    .includes(search)

                ||

                dino.period
                    .toLowerCase()
                    .includes(search);


            return (
                matchesFilter &&
                matchesSearch
            );

        });


    renderDinosaurs(filtered);
}


/* =========================================================
   EVENTO DE PESQUISA
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterDinosaurs
    );

}


/* =========================================================
   FILTROS
========================================================= */

filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(item =>
                item.classList.remove("active")
            );


            filter.classList.add("active");


            currentFilter =
                filter.dataset.filter;


            filterDinosaurs();

        }
    );

});


/* =========================================================
   ABRIR DINOSSAURO
========================================================= */

function openDino(dino) {

    if (!modal || !modalBody) return;


    modalBody.innerHTML = `

        <div class="modal-dino">

            <div class="modal-image">

                <img
                    src="${dino.image}"
                    alt="${dino.name}"
                    onerror="this.src='assets/images/placeholder.jpg'"
                >

            </div>


            <div class="modal-content">

                <div class="section-label">
                    FICHA PALEONTOLÓGICA
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
                        <span>PERÍODO</span>
                        <strong>${dino.period}</strong>
                    </div>


                    <div>
                        <span>DIETA</span>
                        <strong>${dino.diet}</strong>
                    </div>


                    <div>
                        <span>COMPRIMENTO</span>
                        <strong>${dino.length}</strong>
                    </div>


                    <div>
                        <span>PESO</span>
                        <strong>${dino.weight}</strong>
                    </div>


                    <div>
                        <span>LOCALIZAÇÃO</span>
                        <strong>${dino.location}</strong>
                    </div>


                    <div>
                        <span>ÉPOCA</span>
                        <strong>${dino.years}</strong>
                    </div>

                </div>


                <div class="modal-curiosity">

                    <span>VOCÊ SABIA?</span>

                    <p>
                        ${dino.curiosity}
                    </p>

                </div>


                <button
                    class="button button-primary"
                    onclick="askDinoAI('${dino.shortName}')"
                >
                    Perguntar ao Dino AI
                    <span>→</span>
                </button>

            </div>

        </div>

    `;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   DINOSSAURO EM DESTAQUE
========================================================= */

function openFeaturedDino() {

    const trex =
        dinosaurs.find(
            dino => dino.id === "trex"
        );


    if (trex) {

        openDino(trex);

    }

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeDinoModal() {

    if (!modal) return;


    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


if (closeModal) {

    closeModal.addEventListener(
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
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("show")
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
   HEADER AO ROLAR
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


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(
                        link =>
                            link.classList.remove(
                                "active"
                            )
                    );


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            threshold: 0.35
        }
    );


sections.forEach(
    section =>
        observer.observe(section)
);


/* =========================================================
   DINO AI
========================================================= */

const aiKnowledge = {

    "t-rex": {
        aliases: [
            "t rex",
            "trex",
            "tyrannosaurus",
            "tyrannosaurus rex"
        ],
        response:
            "O T. rex viveu no final do Cretáceo, há aproximadamente 68 a 66 milhões de anos. Podia chegar a cerca de 12 metros de comprimento e possuía uma das mordidas mais poderosas entre os grandes predadores terrestres conhecidos."
    },


    "triceratops": {
        aliases: [
            "triceratops"
        ],
        response:
            "O Triceratops era um grande herbívoro do final do Cretáceo. Seu nome significa 'rosto de três chifres'. Ele possuía dois grandes chifres sobre os olhos e um menor sobre o nariz."
    },


    "velociraptor": {
        aliases: [
            "velociraptor"
        ],
        response:
            "O Velociraptor verdadeiro era bem menor do que sua representação em muitos filmes. Tinha aproximadamente 2 metros de comprimento e possuía penas. Viveu na Ásia durante o Cretáceo."
    },


    "spinosaurus": {
        aliases: [
            "spinosaurus",
            "espinossauro"
        ],
        response:
            "O Spinosaurus é conhecido por sua enorme vela dorsal e pelo focinho alongado. Evidências indicam fortes adaptações para ambientes aquáticos e uma dieta que incluía muitos peixes."
    },


    "stegosaurus": {
        aliases: [
            "stegosaurus",
            "estegossauro"
        ],
        response:
            "O Stegosaurus viveu durante o Jurássico e possuía placas ao longo das costas e quatro espinhos na cauda. Era herbívoro e provavelmente usava a cauda como defesa contra predadores."
    },


    "brachiosaurus": {
        aliases: [
            "brachiosaurus",
            "braquiossauro"
        ],
        response:
            "O Brachiosaurus era um gigantesco saurópode de pescoço longo. Uma característica interessante é que suas pernas dianteiras eram maiores que as traseiras, dando ao corpo uma postura inclinada."
    },


    "ankylosaurus": {
        aliases: [
            "ankylosaurus",
            "anquilossauro"
        ],
        response:
            "O Ankylosaurus era um herbívoro fortemente protegido por placas ósseas. Sua principal arma era uma poderosa clava na ponta da cauda."
    },


    "parasaurolophus": {
        aliases: [
            "parasaurolophus"
        ],
        response:
            "O Parasaurolophus possuía uma longa crista óssea que se projetava para trás. Essa estrutura provavelmente ajudava na produção de sons e comunicação entre os animais."
    }

};


/* =========================================================
   GERAR RESPOSTA DA IA
========================================================= */

function getAIResponse(question) {

    const text =
        question
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    /* -----------------------------------------
       ENCONTRAR DINOSSAURO
    ----------------------------------------- */

    let selectedDino = null;


    for (
        const dino of dinosaurs
    ) {

        const name =
            dino.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


        const shortName =
            dino.shortName
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


        if (
            text.includes(name) ||
            text.includes(shortName)
        ) {

            selectedDino =
                dino;

            break;

        }

    }


    /* -----------------------------------------
       PERGUNTAS ESPECÍFICAS
    ----------------------------------------- */

    if (selectedDino) {

        if (
            text.includes("tamanho") ||
            text.includes("comprimento") ||
            text.includes("grande") ||
            text.includes("metros")
        ) {

            return `
                O <strong>${selectedDino.shortName}</strong>
                tinha aproximadamente
                <strong>${selectedDino.length}</strong>
                de comprimento.
            `;

        }


        if (
            text.includes("peso") ||
            text.includes("pesava")
        ) {

            return `
                O <strong>${selectedDino.shortName}</strong>
                podia pesar aproximadamente
                <strong>${selectedDino.weight}</strong>.
            `;

        }


        if (
            text.includes("comia") ||
            text.includes("aliment") ||
            text.includes("dieta") ||
            text.includes("comida")
        ) {

            return `
                A dieta do
                <strong>${selectedDino.shortName}</strong>
                era classificada como
                <strong>${selectedDino.diet.toLowerCase()}</strong>.
            `;

        }


        if (
            text.includes("onde") ||
            text.includes("viveu") ||
            text.includes("local")
        ) {

            return `
                Fósseis do
                <strong>${selectedDino.shortName}</strong>
                são associados principalmente a
                <strong>${selectedDino.location}</strong>.
            `;

        }


        if (
            text.includes("quando") ||
            text.includes("epoca") ||
            text.includes("periodo")
        ) {

            return `
                O
                <strong>${selectedDino.shortName}</strong>
                viveu durante o
                <strong>${selectedDino.period}</strong>,
                aproximadamente
                <strong>${selectedDino.years}</strong>.
            `;

        }


        if (
            text.includes("veloc") ||
            text.includes("corria")
        ) {

            return `
                As estimativas de velocidade para
                <strong>${selectedDino.shortName}</strong>
                são incertas. A informação disponível
                nesta enciclopédia indica:
                <strong>${selectedDino.speed}</strong>.
            `;

        }


        return `
            <strong>${selectedDino.shortName}</strong>
            foi um ${selectedDino.typeLabel.toLowerCase()}
            que viveu durante o
            <strong>${selectedDino.period}</strong>.

            ${selectedDino.description}

            <br><br>

            <strong>Curiosidade:</strong>
            ${selectedDino.curiosity}
        `;

    }


    /* -----------------------------------------
       PERGUNTAS GERAIS
    ----------------------------------------- */

    if (
        text.includes("maior") ||
        text.includes("gigante")
    ) {

        return `
            Entre os dinossauros desta enciclopédia,
            o <strong>Brachiosaurus</strong> está entre
            os maiores, podendo atingir cerca de
            26 metros de comprimento.
        `;

    }


    if (
        text.includes("mais famoso") ||
        text.includes("famoso")
    ) {

        return `
            Alguns dos dinossauros mais famosos são
            o <strong>Tyrannosaurus rex</strong>,
            <strong>Triceratops</strong>,
            <strong>Velociraptor</strong> e
            <strong>Stegosaurus</strong>.
        `;

    }


    if (
        text.includes("extinc") ||
        text.includes("meteoro") ||
        text.includes("asteroide")
    ) {

        return `
            A extinção que eliminou os dinossauros não avianos
            ocorreu há aproximadamente 66 milhões de anos.
            A principal explicação científica envolve o impacto
            de um grande asteroide na região que hoje corresponde
            à Península de Yucatán, combinado com outras mudanças
            ambientais.
        `;

    }


    if (
        text.includes("pena") ||
        text.includes("penas")
    ) {

        return `
            Sim! Evidências fósseis mostram que vários
            dinossauros tinham penas ou estruturas semelhantes
            a penas. As aves modernas são consideradas
            dinossauros terópodes sobreviventes.
        `;

    }


    if (
        text.includes("ovo") ||
        text.includes("ovos")
    ) {

        return `
            Sim. Dinossauros colocavam ovos. Fósseis de ninhos,
            ovos e até embriões ajudaram os paleontólogos a
            entender como algumas espécies se reproduziam.
        `;

    }


    if (
        text.includes("quando surgiram") ||
        text.includes("surgiram")
    ) {

        return `
            Os primeiros dinossauros conhecidos apareceram
            durante o Triássico, há mais de 230 milhões de anos.
        `;

    }


    if (
        text.includes("oi") ||
        text.includes("ola") ||
        text.includes("olá")
    ) {

        return `
            Olá! 🦖

            Eu sou o Dino AI.

            Você pode me perguntar coisas como:

            <br><br>

            • Qual era o tamanho do T. rex?<br>
            • O Velociraptor tinha penas?<br>
            • O que o Triceratops comia?<br>
            • Quando os dinossauros viveram?<br>
            • Qual era o maior dinossauro?
        `;

    }


    /* -----------------------------------------
       RESPOSTA PADRÃO
    ----------------------------------------- */

    return `
        Ainda não encontrei uma resposta específica
        para essa pergunta na minha base.

        <br><br>

        Tente perguntar mencionando um dinossauro
        disponível no site, por exemplo:

        <br><br>

        <strong>
        "Qual era o tamanho do T. rex?"
        </strong>
    `;

}


/* =========================================================
   ENVIAR PERGUNTA PARA IA
========================================================= */

function sendAIQuestion(question) {

    if (!question || !question.trim()) {
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
   MENSAGEM DO USUÁRIO
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


/* =========================================================
   MENSAGEM DA IA
========================================================= */

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


/* =========================================================
   SCROLL DO CHAT
========================================================= */

function scrollChat() {

    if (!chatWindow) return;


    chatWindow.scrollTo({

        top:
            chatWindow.scrollHeight,

        behavior:
            "smooth"

    });

}


/* =========================================================
   FORM DA IA
========================================================= */

if (aiForm) {

    aiForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const question =
                aiInput.value.trim();


            if (!question) return;


            sendAIQuestion(
                question
            );


            aiInput.value = "";

        }
    );

}


/* =========================================================
   PERGUNTAR SOBRE DINOSSAURO
========================================================= */

function askDinoAI(dinoName) {

    closeDinoModal();


    const aiSection =
        document.getElementById(
            "dino-ai"
        );


    if (aiSection) {

        aiSection.scrollIntoView({

            behavior: "smooth"

        });

    }


    setTimeout(() => {

        if (aiInput) {

            aiInput.focus();

            aiInput.value =
                `Conte-me mais sobre o ${dinoName}.`;

        }

    }, 700);

}


/* =========================================================
   ATALHO DE PESQUISA
   CTRL + K / CMD + K
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
   ESCAPAR HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".dino-card, .fact-card, .era"
    );


const animationObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

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

            });

        },

        {
            threshold: .12
        }
    );


animatedElements.forEach(
    element =>
        animationObserver.observe(
            element
        )
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderDinosaurs(
    dinosaurs
);

console.log(
    "🦖 DinoWorld carregado com sucesso!"
);
