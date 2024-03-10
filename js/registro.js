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
            //Instrucciones
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
function guardar() {
    var nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    // window.open("../juego.html");
    window.location.href = 'juego.html';

}