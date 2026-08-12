function renderDinosaurs(list = dinosaurs) {

    const grid = document.getElementById("dinosaurGrid");

    grid.innerHTML = "";

    list.forEach((dino, index) => {

        const card = document.createElement("article");

        card.className = "dino-card";

        card.style.animationDelay =
            `${index * 70}ms`;


        card.innerHTML = `

            <div class="dino-card-header">

                <span>
                    SPECIMEN ${String(index + 1).padStart(3, "0")}
                </span>

                <b>
                    ● VERIFIED
                </b>

            </div>


            <div class="dino-image">

                <img
                    src="${dino.image}"
                    alt="${dino.name}"
                    loading="lazy"
                >

                <div class="dino-scan"></div>

                <div class="dino-grid"></div>

            </div>


            <div class="dino-card-body">

                <span class="dino-type">
                    ${dino.classification}
                </span>

                <h3>
                    ${dino.shortName}
                </h3>

                <p>
                    ${dino.name}
                </p>


                <div class="dino-data">

                    <div>
                        <small>PERIOD</small>
                        <strong>
                            ${dino.period}
                        </strong>
                    </div>

                    <div>
                        <small>LENGTH</small>
                        <strong>
                            ${dino.length}
                        </strong>
                    </div>

                </div>


                <button class="access-data">

                    ACCESS SPECIMEN

                    <span>→</span>

                </button>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openDinosaurModal(dino)
        );


        grid.appendChild(card);

    });
}
