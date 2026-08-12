import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;


const __filename =
    fileURLToPath(import.meta.url);

const __dirname =
    path.dirname(__filename);


/* ==============================
   OPENAI
============================== */

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


/* ==============================
   MIDDLEWARE
============================== */

app.use(cors());

app.use(express.json());


/* ==============================
   SITE
============================== */

app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


/* ==============================
   IA
============================== */

app.post("/api/ask", async (req, res) => {

    try {

        const {
            dinosaur,
            question
        } = req.body;


        if (!dinosaur || !question) {

            return res.status(400).json({

                error:
                    "Dinossauro e pergunta são obrigatórios."

            });

        }


        const prompt = `

Você é o DINO AI, um assistente educacional
especializado em paleontologia.

O usuário escolheu:

DINOSSAURO:
${dinosaur}

PERGUNTA:
${question}

REGRAS:

1. Responda em português brasileiro.
2. Explique de maneira clara e interessante.
3. Use linguagem adequada para estudantes.
4. Não invente fatos.
5. Quando houver incerteza científica,
   deixe isso claro.
6. Diferencie evidências científicas de
   especulações.
7. Priorize informações paleontológicas.
8. Não precisa repetir o nome do dinossauro
   em todas as frases.
9. Responda em no máximo 3 parágrafos.
10. Se a pergunta não estiver relacionada
    ao dinossauro ou paleontologia, explique
    educadamente que você foi criado para
    responder dúvidas sobre o tema.

`;


        const response =
            await client.responses.create({

                model: "gpt-5",

                input: prompt

            });


        const answer =
            response.output_text;


        res.json({

            answer

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            error:
                "Erro ao consultar a inteligência artificial."

        });

    }

});


/* ==============================
   SERVER
============================== */

app.listen(PORT, () => {

    console.log(
        `DinoVerse rodando em http://localhost:${PORT}`
    );

});
