var segundostrans = 0;
var bandera = 0;
var conteo = 0;
var segundos = 5;
var audiopok;
var puntaje = 0;
var pokemon = [{
    nombre: "Bulbasaur",
    color: "darkgreen",
    img: "img/Pokemons/Bulbasaur.png",
    tipo: "planta",
    sonido: "audio/Bulbasaur.wav",
    grito: "audio/Gritos/Grito_de_Bulbasaur.ogg"
}, {
    nombre: "Charmander",
    color: "orange",
    img: "img/Pokemons/Charmander.png",
    tipo: "fuego",
    sonido: "audio/Charmander.wav",
    grito: "audio/Gritos/Grito_de_Charmander.ogg"
}, {
    nombre: "Umbreon",
    color: "black",
    img: "img/Pokemons/Umbreon.png",
    tipo: "siniestro",
    sonido: "audio/Umbreon.wav",
    grito: "audio/Gritos/Grito_de_Umbreon.ogg"
}, {
    nombre: "Gengar",
    color: "purple",
    img: "img/Pokemons/Gengar.png",
    tipo: "fantasma",
    sonido: "audio/Gengar.wav",
    grito: "audio/Gritos/Grito_de_Gengar.ogg"
}, {
    nombre: "Jigglypuff",
    color: "pink",
    img: "img/Pokemons/Jigglypuff.png",
    tipo: "hada",
    sonido: "audio/Jigglypuff.wav",
    grito: "audio/Gritos/Grito_de_Jigglypuff.ogg"
}, {
    nombre: "Mr. Mime",
    color: "red",
    img: "img/Pokemons/Mr. Mime.png",
    tipo: "psiquico",
    sonido: "audio/Mr. Mime.wav",
    grito: "audio/Gritos/Grito_de_Mr._Mime.ogg"
}, {
    nombre: "Pikachu",
    color: "yellow",
    img: "img/Pokemons/Pikachu.png",
    tipo: "electrico",
    sonido: "audio/Pikachu.wav",
    grito: "audio/Gritos/Grito_de_Pikachu.ogg"
}, {
    nombre: "Snorlax",
    color: "darkblue",
    img: "img/Pokemons/Snorlax.png",
    tipo: "normal",
    sonido: "audio/Snorlax.wav",
    grito: "audio/Gritos/Grito_de_Snorlax.ogg"
}, {
    nombre: "Squirtle",
    color: "blue",
    img: "img/Pokemons/Squirtle.png",
    tipo: "agua",
    sonido: "audio/Squirtle.wav",
    grito: "audio/Gritos/Grito_de_Squirtle.ogg"
}
];
var habitat = [{
    img: "img/Pokemons/Habitat/Planta.png",
    tipo: "planta"
}, {
    img: "img/Pokemons/Habitat/Fuego.png",
    tipo: "fuego"
}, {
    img: "img/Pokemons/Habitat/Siniestro.png",
    tipo: "siniestro"
}, {
    img: "img/Pokemons/Habitat/Fantasma.png",
    tipo: "fantasma"
}, {
    img: "img/Pokemons/Habitat/Hada.png",
    tipo: "hada"
}, {
    img: "img/Pokemons/Habitat/Psiquico.png",
    tipo: "psiquico"
}, {
    img: "img/Pokemons/Habitat/Electrico.png",
    tipo: "electrico"
}, {
    img: "img/Pokemons/Habitat/Normal.png",
    tipo: "normal"
}, {
    img: "img/Pokemons/Habitat/Agua.png",
    tipo: "agua"
}
];

var Elegidos = [];
var HabElegidos = [];

function inicializar() {
    segundostrans = 0;
    bandera = 0;
    conteo = 0;
    segundos = 5;
    audiopok;
    puntaje = 0;
    var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    lista = lista.sort(function () {
        return Math.random() - 0.5;
    });
    var aux1 = [];
    var aux2 = [];
    for (i = 0; i < 6; i++) {
        Elegidos.push(pokemon[lista[i]]);
        if (i < 3) {
            aux1.push(habitat[lista[i]]);
        } else {
            aux2.push(habitat[lista[i]]);
        }
    }
    aux1 = aux1.sort(function () {
        return Math.random() - 0.5;
    });
    aux2 = aux2.sort(function () {
        return Math.random() - 0.5;
    });
    for (var i = 0; i < aux1.length; i++) {
        HabElegidos.push(aux1[i]);
    }
    for (var i = 0; i < aux2.length; i++) {
        HabElegidos.push(aux2[i]);
    }
    Reloj();
    pintar();
}

var canvas = document.getElementById('lienzoP');
canvas.width = 900;
canvas.height = 250;
var ctx = canvas.getContext('2d');

const musica = document.getElementById('musica');
const salir = document.getElementById('salir');
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

function repetirMusica() {
    audio.currentTime = 0;
    audio.play();
}

audio.addEventListener('ended', repetirMusica);

musica.addEventListener('click', tocarMusica);
salir.addEventListener("click", Salir);

function Salir(){
    segundostrans = 0;
    bandera = 0;
    conteo = 0;
    segundos = 5;
    audiopok;
    puntaje = 0;
    window.location.href = 'index.html';
}

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

function Reloj() {
    if (bandera < 3) {
        segundostrans++;
        horaImprimible = " Segundos transcurridos : " + segundostrans + "s";

        document.getElementById("Tiempo").innerHTML = horaImprimible;
        document.getElementById("Puntaje").innerHTML = "Puntaje: " + puntaje;

        setTimeout("Reloj()", 1000)
    }
}

function finalizado(e) {
    elemento = e.target;
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    var ElemArr = 0;
    if (bandera == 0) {
        switch (elemento.getAttribute('id')) {
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
        switch (elemento.getAttribute('id')) {
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
    audiopok = new Audio(`${Elegidos[ElemArr].grito}`);
    audiopok.play();
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
                    ctx.drawImage(elemento, 150-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 150, posy);
                    puntaje += 70;
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
            case (posx >= 300 && posx < 600):
                if (Validar(1, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, 450-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 450, posy);
                    puntaje += 70;
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
            case (posx >= 600 && posx < 900):
                if (Validar(2, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, 750-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 750, posy);
                    puntaje += 70;
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
        }
        if(puntaje < 0){
            puntaje = 0;
        }
        document.getElementById("Puntaje").innerHTML = "Puntaje: " + puntaje;
    } else {
        switch (true) {
            case (posx >= 0 && posx < 300):
                if (Validar(3, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, 150-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 150, posy);
                    puntaje += 70;
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
            case (posx >= 300 && posx < 600):
                if (Validar(4, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, 450-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 450, posy);
                    puntaje += 70;
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
            case (posx >= 600 && posx < 900):
                if (Validar(5, ElemArr)) {
                    elemento.style.visibility = 'hidden';
                    ctx.drawImage(elemento, 750-75, 125-75, 150, 150);
                    conteo += 1;
                    Colocacion(ElemArr, 750, posy);
                } else {
                    sonidoError();
                    puntaje -= 70;
                }
                break;
        }
        if(puntaje < 0){
            puntaje = 0;
        }
        document.getElementById("Puntaje").innerHTML = "Puntaje: " + puntaje;
    }


    if (conteo == 3) {
        conteo++;
        bandera = 1;
        Esperar();
    } else if (conteo == 7) {
        conteo++;
        bandera = 2;
        Esperar();
    }
}

function Validar(valor, ElemArr) {
    if (HabElegidos[valor].tipo == Elegidos[ElemArr].tipo) {
        return true;
    }
    return false;
}

function Colocacion(ElemArr, posx, posy) {
    // Establecer la fuente y el color
    ctx.font = '35px PokeFont';
    ctx.fillStyle = Elegidos[ElemArr].color; // Color de relleno
    ctx.textAlign = "center";
    // Dibujar el texto
    var posye = posy + 150;
    if (posye > 200) {
        posye = posy + 25;
    }
    ctx.fillText(Elegidos[ElemArr].nombre, posx, 200);
    ctx.fillStyle = "black"; // Color de relleno
    ctx.strokeText(Elegidos[ElemArr].nombre, posx, 200);
    audiopok = new Audio(`${Elegidos[ElemArr].sonido}`);
    audiopok.play();
}

function Esperar() {
    if (bandera == 1) {
        document.getElementById("wait").innerHTML = "Siguiente ronda en " + segundos;
        document.getElementById("CajaPok").style.display = "none";
        if (segundos == 0) {
            document.getElementById("CajaPok").style.display = "flex";
            document.getElementById("wait").innerHTML = "";
            segundos = 5;
            pintar();
        } else {
            segundos--;
            setTimeout("Esperar()", "1000");
        }
    } else {
        document.getElementById("wait").innerHTML = "Terminando juego en " + segundos + "<br> Puntaje obtenido: " + puntaje;
        document.getElementById("CajaPok").style.display = "none";
        if (segundos == 0) {
            document.getElementById("CajaPok").style.display = "flex";
            document.getElementById("wait").innerHTML = "";
            segundos = 5;
            //aqui
            guardarPuntaje(segundos, puntaje);

            //window.location.href = 'felicitacion.html';
        } else {
            segundos--;
            setTimeout("Esperar()", "1000");
        }
    }
}

function guardarPuntaje(segundos, puntaje){
var NombreJug = localStorage.getItem("nombreActual");
var Jugador = JSON.parse(localStorage.getItem("jugadores"));
for(var jugador in Jugador) {
    Objeto = JSON.parse(Jugador[jugador]);
    if(Objeto.nombre == NombreJug) {
        Objeto.puntos = puntaje;
        Objeto.mejorTiempo = segundos;
    }
  }
localStorage.setItem("jugadores", JSON.stringify(Jugador));
console.log(NombreJug);
}

function sonidoError() {
    const audioError = new Audio('audio/error.mp3');
    audioError.play();
}

window.onload = inicializar;