let pontos = 0;
let perguntaAtual = 0;

let perguntas = [
    {
        pergunta: "O que ajuda a preservar a água na propriedade rural?",
        opcoes: ["Preservar nascentes", "Jogar lixo no rio", "Desmatar a mata ciliar"],
        correta: 0
    },
    {
        pergunta: "Qual atitude ajuda a proteger o solo?",
        opcoes: ["Fazer rotação de culturas", "Queimar a vegetação", "Jogar veneno sem controle"],
        correta: 0
    },
    {
        pergunta: "O que é uma atitude sustentável no campo?",
        opcoes: ["Economizar água", "Desperdiçar alimentos", "Poluir rios"],
        correta: 0
    },
    {
        pergunta: "Qual ação ajuda o futuro sustentável?",
        opcoes: ["Plantar árvores", "Desmatar tudo", "Queimar lixo"],
        correta: 0
    }
];

function mostrarPergunta() {
    document.getElementById("resultado").innerHTML = "";

    document.getElementById("botaoProxima").style.display = "none";

    let pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").innerHTML = pergunta.pergunta;

    let opcoesHTML = "";

    for (let i = 0; i < pergunta.opcoes.length; i++) {
        opcoesHTML += `
            <button onclick="responder(${i})">
                ${pergunta.opcoes[i]}
            </button>
        `;
    }

    document.getElementById("opcoes").innerHTML = opcoesHTML;
}

function responder(opcaoEscolhida){

    let pergunta = perguntas[perguntaAtual];

    let botoes = document.querySelectorAll("#opcoes button");

    for(let i = 0; i < botoes.length; i++){

        botoes[i].disabled = true;

    }

    if(opcaoEscolhida === pergunta.correta){

        pontos++;

        document.getElementById("resultado").innerHTML =

        "✅ Muito bem! Essa atitude ajuda o meio ambiente.";

    }

    else{

        document.getElementById("resultado").innerHTML =

        "❌ Atenção! Essa atitude prejudica a natureza.";

    }

    document.getElementById("pontos").innerHTML = pontos;

    document.getElementById("botaoProxima").style.display = "inline-block";

}

function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("pergunta").innerHTML =
        "Fim do jogo!";

        document.getElementById("opcoes").innerHTML =
        "🌾 Você fez " + pontos + " ponto(s).";

        document.getElementById("resultado").innerHTML =
        "Obrigado por ajudar a construir um futuro sustentável!";
    }
}

mostrarPergunta();