let lista = document.querySelectorAll(".tecla");

function tocaSom(IdElementAudio) {
    const audioElement = document.querySelector(IdElementAudio);
    

    audioElement.currentTime = 0;
    
    audioElement.play();
}

for (let i = 0; i < lista.length; i++) {
    const efeito = lista[i].classList[2];
    const idAudio = "#som_" + efeito;

    lista[i].onclick = function () {
        tocaSom(idAudio);
    }
}
