const audio = new Audio('recursos/anville-town-theme.mp3');
let reproducir = false;
const salir = document.getElementById('salir');
const musica = document.getElementById('musica');
const cambio = document.getElementById('imagenCambiar');
musica.addEventListener('click', tocarMusica);
salir.addEventListener("click", Salir);
function Salir(){
    window.location.href = 'index.html';
}
function tocarMusica() {
    if (reproducir) {
        audio.pause();
        reproducir = false;
        cambio.src = 'img/boton-de-play.png';
    } else {
        audio.play();
        reproducir = true;
        cambio.src = 'img/boton-de-pausa.png';
    }
}