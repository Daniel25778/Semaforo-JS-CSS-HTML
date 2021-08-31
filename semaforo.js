const semaforo = document.getElementById("Semaforo")
let idInterval
)

function botoesLigaDesliga(vermelhoEstado, amareloEstado, verdeEstado) {

    const vermelho = document.getElementById("vermelho")
    const amarelo = document.getElementById("amarelo")
    const verde = document.getElementById("verde")
    vermelho.disabled = vermelhoEstado
    amarelo.disabled = amareloEstado
    verde.disabled = verdeEstado

}

function LigarVermelho() {
    semaforo.src = "img/vermelho.png"
    botoesLigaDesliga(true, false, false)
}


function LigarAmarelo() {
    semaforo.src = "img/amarelo.png"
    botoesLigaDesliga(false, true, false)
}

function LigarVerde() {
    semaforo.src = "img/verde.png"
    botoesLigaDesliga(false, false, true)
}


function trocarImagem() {
    if (semaforo.src = "img/desligado") {
        LigarVermelho()
    } else {
        LigarVerde()
    }
}



function Automatico() {
    const automatico = document.getElementById("automatico")
    idInterval = setInterval(trocarImagem, 1000)
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