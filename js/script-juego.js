
var bandera = 0;
var conteo = 0;

var pokemon = [{
    img: "img/Pokemons/Bulbasaur.png",
    tipo: "planta",
    sonido: "audio/Bulbasaur.wav"
}, {
    img: "img/Pokemons/Charmander.png",
    tipo: "fuego",
    sonido: "audio/Charmander.wav"
}, {
    img: "img/Pokemons/Eevee.png",
    tipo: "normal",
    sonido: "audio/Eevee.wav"
}, {
    img: "img/Pokemons/Gengar.png",
    tipo: "fantasma",
    sonido: "audio/Gengar.wav"
}, {
    img: "img/Pokemons/Jigglypuff.png",
    tipo: "hada",
    sonido: "audio/Jigglypuff.wav"
}, {
    img: "img/Pokemons/Mr. Mime.png",
    tipo: "psiquico",
    sonido: "audio/Mr. Mime.wav"
}, {
    img: "img/Pokemons/Pikachu.png",
    tipo: "electrico",
    sonido: "audio/Pikachu.wav"
}, {
    img: "img/Pokemons/Snorlax.png",
    tipo: "normal",
    sonido: "audio/Snorlax.wav"
}, {
    img: "img/Pokemons/Squirtle.png",
    tipo: "agua",
    sonido: "audio/Squirtle.wav"
}
];
var habitat = [{
    img: "img/Pokemons/Habitat/Planta.png",
    tipo: "planta"
}, {
    img: "img/Pokemons/Habitat/Fuego.png",
    tipo: "fuego"
}, {
    img: "img/Pokemons/Habitat/Normal.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Habitat/Agua.png",
    tipo: "fantasma"
}, {
    img: "img/Pokemons/Jigglypuff.png",
    tipo: "hada"
}, {
    img: "img/Pokemons/Mr. Mime.png",
    tipo: "psiquico"
}, {
    img: "img/Pokemons/Pikachu.png",
    tipo: "electrico"
}, {
    img: "img/Pokemons/Snorlax.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Squirtle.png",
    tipo: "agua"
}
];

var Elegidos = [];
var HabElegidos = [];

function inicializar() {
    var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    lista = lista.sort(function () {
        return Math.random() - 0.5;
    });
    for (i = 0; i < 6; i++) {
        Elegidos.push(pokemon[lista[i]]);
        HabElegidos.push(habitat[lista[i]]);
    }

    pintar();
}

var canvas = document.getElementById('lienzoP');
canvas.width = 900;
canvas.height = 250;
var ctx = canvas.getContext('2d');

const musica = document.getElementById('musica');
const cambio = document.getElementById('imagenCambiar');

const audio = new Audio('recursos/anville-town-theme.mp3');
let reproducir = false;

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

musica.addEventListener('click', tocarMusica);

function pintar() {
    if (bandera == 0) {
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

        var pokehab = new Image();
        pokehab.src = HabElegidos[0].img;
        pokehab.onload = function () {
            ctx.drawImage(pokehab, (150 - 125), (canvas.height / 2) - 125, 250, 250);
        };

        var pokehab1 = new Image();
        pokehab1.src = HabElegidos[1].img;
        pokehab1.onload = function () {
            ctx.drawImage(pokehab1, (450 - 125), (canvas.height / 2) - 125, 250, 250);
        };

        var pokehab2 = new Image();
        pokehab2.src = HabElegidos[2].img;
        pokehab2.onload = function () {
            ctx.drawImage(pokehab2, (750 - 125), (canvas.height / 2) - 125, 250, 250);
        };

        var imagenes = document.querySelectorAll('#CajaPok > img');
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener('dragstart', arrastrado, false);
            imagenes[i].addEventListener('dragend', finalizado, false);
        }
        soltar = document.getElementById('lienzoP');
        soltar.addEventListener('dragenter', eventoEnter, false);
        soltar.addEventListener('dragover', eventoOver, false);
        soltar.addEventListener('drop', soltado, false);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        poke1 = document.getElementById("poke1");
        poke1.src = Elegidos[3].img;
        poke1.width = 150;
        poke1.height = 150;
        poke1.style = "";

        poke2 = document.getElementById("poke2");
        poke2.src = Elegidos[4].img;
        poke2.width = 150;
        poke2.height = 150;
        poke2.style = "";

        poke3 = document.getElementById("poke3");
        poke3.src = Elegidos[5].img;
        poke3.width = 150;
        poke3.height = 150;
        poke3.style = "";

        var pokehab = new Image();
        pokehab.src = HabElegidos[3].img;
        pokehab.onload = function () {
            ctx.drawImage(pokehab, (150 - 125), (canvas.height / 2) - 125, 250, 250);
        };

        var pokehab1 = new Image();
        pokehab1.src = HabElegidos[4].img;
        pokehab1.onload = function () {
            ctx.drawImage(pokehab1, (450 - 125), (canvas.height / 2) - 125, 250, 250);
        };

        var pokehab2 = new Image();
        pokehab2.src = HabElegidos[5].img;
        pokehab2.onload = function () {
            ctx.drawImage(pokehab2, (750 - 125), (canvas.height / 2) - 125, 250, 250);
        };

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

    var ElemArr = 0;
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    if (bandera == 0) {
        switch (id) {
            case "poke1":
                ElemArr = 0;
                break;
            case "poke2":
                ElemArr = 1;
                break;
            case "poke3":
                ElemArr = 2;
                break;
        }
    } else {
        switch (id) {
            case "poke1":
                ElemArr = 3;
                break;
            case "poke2":
                ElemArr = 4;
                break;
            case "poke3":
                ElemArr = 5;
                break;
        }
    }


    var posx = e.pageX - (soltar.offsetLeft + 75); // coordenada x para el soltado
    var posy = e.pageY - (soltar.offsetTop + 75); //coordenada y para el soltado
    if (bandera == 0) {
        switch (true) {
            case (posx >= 0 && posx < 300):
                if (Validar(0, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
            case (posx >= 300 && posx < 600):
                if (Validar(1, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
            case (posx >= 600 && posx < 900):
                if (Validar(2, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
        }
    }else{
        switch (true) {
            case (posx >= 0 && posx < 300):
                if (Validar(3, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
            case (posx >= 300 && posx < 600):
                if (Validar(4, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
            case (posx >= 600 && posx < 900):
                if (Validar(5, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, posx, posy, 150, 150);
                    conteo += 1;
                }
                break;
        }
    }


    if (conteo == 3) {
        bandera = 1;
        pintar();
    } else if (conteo == 6){
        bandera = 2;
        MoveItOn();
    }
}

function Validar(valor, ElemArr) {
    if (HabElegidos[valor].tipo == Elegidos[ElemArr].tipo) {
        return true;
    }
    return false;
}

window.onload = inicializar;