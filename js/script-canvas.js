var canvas = document.getElementById('lienzoP');
canvas.width = 900;
canvas.height = 550;
var ctx = canvas.getContext('2d');


//  ctx.font = 'bold 48px Arial';
//  ctx.fillStyle = '#ffcd00';
//  ctx.textAlign = 'center';
//  ctx.fillText('PokeFound', canvas.width / 2, 200);

const musica = document.getElementById('musica');
const cambio = document.getElementById('imagenCambiar');

const audio = new Audio('recursos/anville-town-theme.mp3');
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
        cambio.src = 'img/boton-de-play.png';
    } else {
        audio.play();
        reproducir = true;
        cambio.src = 'img/boton-de-pausa.png';
    }
}

musica.addEventListener('click', tocarMusica);

function drawButton(text, x, y, width, height) {
    ctx.fillStyle = '#4CAF50';
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


        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(x, y, width, height);

        ctx.roundRect(x, y, width, height, 10);
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(text, x + width / 2, y + height / 2 + 10);

        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(20, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Jugar', 20 + 200 / 2, 450 + 50 / 2 + 10);


        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(240, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Instrucciones', 240 + 200 / 2, 450 + 50 / 2 + 10);

        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(680, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Creditos', 680 + 200 / 2, 450 + 50 / 2 + 10);

        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(460, 450, 200, 50);

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Tu Puntaje', 460 + 200 / 2, 450 + 50 / 2 + 10);
        

        if (mouseX > 20 && mouseX < 220 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#042206';
            ctx.fillRect(20, 450, 200, 50);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Jugar', 20 + 200 / 2, 450 + 50 / 2 + 10);

          } else if (mouseX > 240 && mouseX < 440 && mouseY > 450 && mouseY < 500) {
            //Instrucciones
            ctx.fillStyle = '#042206';
            ctx.fillRect(240, 450, 200, 50);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Instrucciones', 240 + 200 / 2, 450 + 50 / 2 + 10);

          }else if (mouseX > 680 && mouseX < 880 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#042206';
            ctx.fillRect(x, y, width, height);

            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Creditos', 680 + 200 / 2, 450 + 50 / 2 + 10);

          } else if (mouseX > 460 && mouseX < 660 && mouseY > 450 && mouseY < 500) {
            ctx.fillStyle = '#042206';
            ctx.fillRect(460, 450, 200, 50);
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Tu Puntaje', 460 + 200 / 2, 450 + 50 / 2 + 10);
        }
      
      };

    

}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX > 20 && mouseX < 220 && mouseY > 450 && mouseY < 500) {
        window.location.href = 'registro.html';
    } else if (mouseX > 240 && mouseX < 440 && mouseY > 450 && mouseY < 500) {
        $('#exampleModal').modal('show');
    } else if (mouseX > 460 && mouseX < 660 && mouseY > 450 && mouseY < 500) {
        alert('¡Has hecho clic en Puntaje!');
    } else if (mouseX > 680 && mouseX < 880 && mouseY > 450 && mouseY < 500) {
        $('#CreditosModal').modal('show');
    }
});

  
drawButton('Jugar', 20, 450, 200, 50);
drawButton('Instrucciones', 240, 450, 200, 50);
drawButton('Tu Puntaje', 460, 450, 200, 50);
drawButton('Creditos', 680, 450, 200, 50);