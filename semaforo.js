const semaforo = document.getElementById("Semaforo")
let idInterval


function botoesLigaDesliga(vermelhoEstado, amareloEstado, verdeEstado) {

    const vermelho = document.getElementById("vermelho")
    const amarelo = document.getElementById("amarelo")
    const verde = document.getElementById("verde")
    vermelho.disabled = vermelhoEstado
    amarelo.disabled = amareloEstado
    verde.disabled = verdeEstado

}

function LigarAmarelo() {
    semaforo.src = "img/amarelo.png"
    botoesLigaDesliga(false, true, false)
}

function LigarVermelho() {
    semaforo.src = "img/vermelho.png"
    botoesLigaDesliga(true, false, false)
}

function LigarVerde() {
    semaforo.src = "img/verde.png"
    botoesLigaDesliga(false, false, true)
}


function trocarImagem() {
    if (semaforo.src.includes("desligado")) {
        LigarVermelho()
    } else if (semaforo.src.includes("vermelho")) {
        LigarAmarelo()
    } else if (semaforo.src.includes("amarelo")) {
        LigarVerde()
    } else if (semaforo.src.includes("verde")) {
        LigarVermelho()
    }
}



function Automatico() {
    const automatico = document.getElementById("automatico")
    if (automatico.textContent == "Automático") {
        idInterval = setInterval(trocarImagem, 1000)
        automatico.textContent = "Parar"
    } else {
        clearInterval(idInterval)
        semaforo.src = "img/desligado.png"
        automatico.textContent = "Automático"
    }


}

// function piscar() {
//     const piscar = document.getElementById("piscar")

//     if (piscar.textContent == "Piscar") {
//         idInterval = setInterval(trocarImagem, 1000)
//         piscar.textContent = "Parar"
//     } else {
//         clearInterval(idInterval)
//         DesligarLampada()
//         piscar.textContent = "Piscar"

//     }

// }


//Eventos

document.getElementById("vermelho")
    .addEventListener("click", LigarVermelho)

document.getElementById("amarelo")
    .addEventListener("click", LigarAmarelo)

document.getElementById("verde")
    .addEventListener("click", LigarVerde)

document.getElementById("automatico")
    .addEventListener("click", Automatico)