var canvas = document.getElementById('lienzoR');
canvas.width = 900;
canvas.height = 550;
var ctx = canvas.getContext('2d');


ctx.font = 'bold 46px Arial';
ctx.fillStyle = '#003261';
ctx.textAlign = 'center';
ctx.fillText('Nombre entrenador Pokémon:', canvas.width / 2, 250);

const musica = document.getElementById('musica');
const cambio = document.getElementById('imagenCambiar');

const audio = new Audio('../recursos/anville-town-theme.mp3');
let reproducir = false;

var logoImg = new Image();
logoImg.src = '../img/pokebola.png';
logoImg.onload = function() {
    ctx.drawImage(logoImg, canvas.width/2-70, 10, 140, 140);
};
var textoImg = new Image();
textoImg.src = '../img/titulo.png';
textoImg.onload = function() {
    ctx.drawImage(textoImg, canvas.width/2-120, 90, 240, 100);
};

function tocarMusica() {
    if (reproducir) {
        audio.pause();
        reproducir = false;
        cambio.src = '../img/boton-de-play.png';
    } else {
        audio.play();
        reproducir = true;
        cambio.src = '../img/boton-de-pausa.png';
    }
}

function repetirMusica() {
    audio.currentTime = 0;
    audio.play();
}

audio.addEventListener('ended', repetirMusica);

musica.addEventListener('click', tocarMusica);

function drawButton(text, x, y, width, height) {
    ctx.fillStyle = '#f8ca07';
    ctx.fillRect(x, y, width, height);

    ctx.roundRect(x, y, width, height, 10);
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(text, x + width / 2, y + height / 2 + 10);

    canvas.onmousemove = function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;


        ctx.fillStyle = '#f8ca07';
        ctx.fillRect(x, y, width, height);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(text, x + width / 2, y + height / 2 + 10);

        if (mouseX > 350 && mouseX < 550 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#f89807';
            ctx.fillRect(350, 450, 200, 50);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Comenzar', 350 + 200 / 2, 450 + 50 / 2 + 10);
            
          }
      
      };

    

}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX > 350 && mouseX < 550 && mouseY > 450 && mouseY < 500) {
        guardar();
        // window.location.href = 'juego-prueba.html';
    } 
});


drawButton('Comenzar', 350, 450, 200, 50);


//****************************************************
//**********GUARDAR EN EL LOCALSTORAGE**************** 
//****************************************************
// function guardar() {
//     var nombre = document.getElementById('nombre').value;
//     localStorage.setItem('nombre', nombre);
//     // window.open("../juego.html");
//     window.location.href = 'juego.html';

// }

function guardar() {
    var nombre = document.getElementById('nombre').value;

    function verificarNombre(nombre) {
        return localStorage.getItem(nombre) !== null;
    }

    function almacenarNombre(nombre) {
        if (!verificarNombre(nombre)) {
            const datos = {
                puntos: 0,
                mejorTiempo: 0
            };
            localStorage.setItem(nombre, JSON.stringify(datos));
            return true;
        }
        return false;
    }

    function obtenerDatos(nombre) {
        return JSON.parse(localStorage.getItem(nombre));
    }

    if (nombre) {
        const almacenado = almacenarNombre(nombre);
        if (almacenado) {
            // alert(`Nombre almacenado correctamente.${nombre}!`);
            window.location.href = 'juego.html';
        } else {
            // alert(`El nombre "${nombre}" ya existe.`);
            const datos = obtenerDatos(nombre);
            Swal.fire({
                imageUrl: '../img/pokebola.png',
                imageWidth: 100,
                imageHeight: 100,
                title: `Bienvenido de nuevo ${nombre}`,
                html: `Tus mayor puntuación es: <strong>${datos.puntos}</strong><br>Tu mejor tiempo es: <strong>${datos.mejorTiempo}</strong>`,
                confirmButtonClass: 'record',
                confirmButtonColor: '#f8ca07',
                confirmButtonText: '¡A romper el record!'
            }).then(() => {
                window.location.href = 'juego.html';
            });
        }
        // const datos = obtenerDatos(nombre);
        // alert(`Tus puntos son: ${datos.puntos} y tu mejor tiempo es: ${datos.mejorTiempo}`);
        // window.location.href = 'juego.html';
    }
}
