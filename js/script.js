let indiceBanners = 1;

let indiceDepoimentos = 1;

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

function exibirDepoimento(indiceDepoimentos) {
    let depoimentos = document.querySelectorAll(".texto-depoimentos");
    let indicadores = document.querySelectorAll(".indicador");

    for (let i = 0; i < depoimentos.length; i++) {
        depoimentos[i].style.display = "none";
    }

    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].classList.remove("indicador-ativo");
    }

    depoimentos[indiceDepoimentos - 1].style.display = "flex";
    indicadores[indiceDepoimentos - 1].classList.add("indicador-ativo")
}

function exibirBanner() {
    let banners = document.querySelectorAll(".conteudo-cabecalho-banner");
    
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }

    indiceBanners++;

    if (indiceBanners > banners.length) {
        indiceBanners = 1;
    }

    banners[indiceBanners - 1].style.display = "flex";

    setTimeout(exibirBanner, 4000);
}

window.addEventListener("scroll", renderizarElemento);

atrasoExibicao(elementos);

exibirDepoimento(indiceDepoimentos);

renderizarElemento();

exibirBanner();