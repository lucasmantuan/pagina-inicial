const elementos = Array.from(document.querySelectorAll(".animado"));

function delayElementos(elementos) {
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

delayElementos(elementos);

window.addEventListener("scroll", renderizarElemento);

renderizarElemento();