
var pokemon = [{
    img: "img/Pokemons/Bulbasaur.png",
    tipo: "planta"
}, {
    img: "img/Pokemons/Charmander.png",
    tipo: "fuego"
}, {
    img: "img/Pokemons/Eevee.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Gengar.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Jigglypuff.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Mr. Mime.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Pikachu.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Snorlax.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Squirtle.png",
    tipo: "agua"
}
];
var habitat = [{
    img: "img/Pokemons/Bulbasaur.png",
    tipo: "planta"
}, {
    img: "img/Pokemons/Charmander.png",
    tipo: "fuego"
}, {
    img: "img/Pokemons/Eevee.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Gengar.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Jigglypuff.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Mr. Mime.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Pikachu.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Snorlax.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Squirtle.png",
    tipo: "agua"
}
];

var Elegidos = [];

function inicializar() {
    var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    lista = lista.sort(function () {
        return Math.random() - 0.5;
    });
    for (i = 0; i < 6; i++) {
        Elegidos.push(pokemon[lista[i]]);
    }
    pintar();
}

var canvas = document.getElementById('lienzoP');
canvas.width = 950;
canvas.height = 250;
var ctx = canvas.getContext('2d');

const musica = document.getElementById('musica');
const cambio = document.getElementById('imagenCambiar');

const audio = new Audio('recursos/anville-town-theme.mp3');
let reproducir = false;

// var logoImg = new Image();
// logoImg.src = 'img/pokebola.png';
// logoImg.onload = function() {
//     ctx.drawImage(logoImg, canvas.width/2-70, 10, 140, 140);
// };
// var textoImg = new Image();
// textoImg.src = 'img/titulo.png';
// textoImg.onload = function() {
//     ctx.drawImage(textoImg, canvas.width/2-120, 90, 240, 100);
// };

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

function repetirMusica() {
    audio.currentTime = 0;
    audio.play();
}

audio.addEventListener('ended', repetirMusica);

musica.addEventListener('click', tocarMusica);

function pintar() {
    poke1 = document.getElementById("poke1");
    poke1.src = Elegidos[0].img;
    poke1.width = 150;
    poke1.height = 150;

    poke2 = document.getElementById("poke2");
    poke2.src = Elegidos[1].img;
    poke2.width = 150;
    poke2.height = 150;

    poke3 = document.getElementById("poke3");
    poke3.src = Elegidos[2].img;
    poke3.width = 150;
    poke3.height = 150;


    var imagenes = document.querySelectorAll('#CajaPok > img');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
    soltar = document.getElementById('lienzoP');
    soltar.addEventListener('dragenter', eventoEnter, false);
    soltar.addEventListener('dragover', eventoOver, false);
    soltar.addEventListener('drop', soltado, false);
}

function finalizado(e) {
    elemento = e.target;
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 75, 75);
}

function eventoEnter(e) {
    e.preventDefault();
}

function eventoOver(e) {
    e.preventDefault();
}

function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    elemento.style.visibility = 'hidden';
    var posx = e.pageX - (soltar.offsetLeft + 75); // coordenada x para el soltado
    var posy = e.pageY - (soltar.offsetTop + 75); //coordenada y para el soltado
    ctx.drawImage(elemento, posx, posy, 150, 150);
}

window.onload = inicializar;