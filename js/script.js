let indice = 1;

const elementos = Array.from(document.querySelectorAll(".animado"));

function atrasoExibicao(elementos) {
    let tempoDelay = 5;

    for (let i = 0; i < elementos.length; i++) {
        let cartao = elementos[i].classList[0]
        if (cartao === "conteudo-promocoes-cartao") {
            elementos[i].style.animationDelay = `${tempoDelay}ms`;
            tempoDelay += 50;
        }
    }

    tempoDelay = 5;

    for (let i = 0; i < elementos.length; i++) {
        let rodape = elementos[i].classList[0].substring(0, 15);
        if (rodape  === "conteudo-rodape") {
            elementos[i].style.animationDelay = `${tempoDelay}ms`;
            tempoDelay += 100;
        }
    }
}

function dentroJanela(elemento) {
    let coordenadas = elemento.getBoundingClientRect();
    return (coordenadas.top > 0) && (coordenadas.bottom < window.innerHeight);
}

function animarElemento(elemento) {
    if (dentroJanela(elemento)) {
        elemento.style.animationPlayState = "running";
    }
}

function renderizarElemento() {
    for (let i = 0; i < elementos.length; i++) {
        animarElemento(elementos[i]);
    }
}

function exibirDepoimento(indice) {
    let depoimentos = document.querySelectorAll(".texto-depoimentos");
    let indicadores = document.querySelectorAll(".indicador");

    for (let i = 0; i < depoimentos.length; i++) {
        depoimentos[i].style.display = "none";
    }

    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].classList.remove("indicador-ativo");
    }

    depoimentos[indice - 1].style.display = "block";
    indicadores[indice - 1].classList.add("indicador-ativo")
}

window.addEventListener("scroll", renderizarElemento);

atrasoExibicao(elementos);

exibirDepoimento(indice);

renderizarElemento();